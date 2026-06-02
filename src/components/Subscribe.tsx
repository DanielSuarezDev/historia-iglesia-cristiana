'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';

type FormState =
  | 'idle'
  | 'submitting'
  | 'subscribed'
  | 'already'
  | 'invalid'
  | 'error';

const STATUS_MESSAGE: Record<Exclude<FormState, 'idle' | 'submitting'>, string> = {
  subscribed: '¡Gracias! Te avisaré por correo cuando publique algo nuevo.',
  already: 'Ya estás en la lista. ¡Gracias por estar pendiente!',
  invalid: 'Ese correo no parece válido. Revísalo, por favor.',
  error: 'Algo falló al guardar tu correo. Inténtalo de nuevo en un momento.',
};

export default function Subscribe() {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [company, setCompany] = useState(''); // honeypot
  const [state, setState] = useState<FormState>('idle');
  const [focused, setFocused] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const submitting = state === 'submitting';
  const isError = state === 'invalid' || state === 'error';
  const isSuccess = state === 'subscribed' || state === 'already';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setState('submitting');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company, source: 'home' }),
      });
      const data = (await res.json()) as { status?: FormState };
      const next = data.status ?? 'error';
      setState(next);
      if (next === 'subscribed') setEmail('');
    } catch {
      setState('error');
    }
  }

  const buttonLabel =
    state === 'submitting' ? 'Enviando…' : state === 'subscribed' ? '¡Listo! ✓' : 'Suscribirme';

  return (
    <section
      id="suscribete"
      ref={sectionRef}
      style={{ background: t.bgSec, padding: isMobile ? '64px 0' : '100px 0', position: 'relative' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 18px' : '0 48px' }}>
        <div
          style={{
            maxWidth: 640,
            margin: '0 auto',
            background: t.bgCard,
            border: `1px solid ${t.border}`,
            borderTop: `3px solid ${t.accent}`,
            padding: isMobile ? '32px 22px 28px' : 'clamp(36px, 5vw, 52px) clamp(32px, 5vw, 56px) 40px',
            textAlign: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(14px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-crimson), serif', color: t.accent,
            letterSpacing: '0.25em', fontSize: isMobile ? 11 : 12,
            textTransform: 'uppercase', margin: '0 0 12px',
          }}>
            Sección · Novedades
          </p>

          <h2 style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: isMobile ? 26 : 38, color: t.text, margin: '0 0 14px',
            fontWeight: 700, lineHeight: 1.15,
          }}>
            Recibe las novedades
          </h2>

          <p style={{
            fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 15 : 17,
            color: t.textMuted, lineHeight: 1.7, margin: '0 auto 26px', maxWidth: 480,
          }}>
            Cuando publique contenido nuevo —ensayos, datos o líneas de tiempo— te aviso por correo.
            Sin spam, solo cuando hay algo que merezca la pena.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 12,
              alignItems: 'stretch',
              maxWidth: 460,
              margin: '0 auto',
            }}
          >
            <label htmlFor="subscribe-email" style={{
              position: 'absolute', width: 1, height: 1, padding: 0, margin: -1,
              overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0,
            }}>
              Tu correo electrónico
            </label>
            <input
              id="subscribe-email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              disabled={submitting}
              onChange={(e) => { setEmail(e.target.value); if (state !== 'idle' && state !== 'submitting') setState('idle'); }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={{
                flex: 1,
                background: t.bg,
                color: t.text,
                border: `1px solid ${focused ? t.accent : t.border}`,
                outline: 'none',
                padding: 'clamp(12px, 2vw, 14px) 16px',
                fontFamily: 'var(--font-crimson), serif',
                fontSize: 16,
                transition: 'border-color 0.2s',
                minWidth: 0,
              }}
            />

            {/* Honeypot anti-bots: oculto, fuera de pantalla, no tabbable. */}
            <span aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
              <label htmlFor="subscribe-company">No rellenar</label>
              <input
                id="subscribe-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </span>

            <button
              type="submit"
              disabled={submitting}
              aria-busy={submitting}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                background: t.accent,
                color: t.bg,
                border: 'none',
                padding: 'clamp(12px, 2vw, 14px) 26px',
                cursor: submitting ? 'not-allowed' : 'pointer',
                fontFamily: 'var(--font-crimson), serif',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                opacity: submitting ? 0.7 : 1,
                boxShadow: hover && !submitting ? `0 12px 32px ${t.accent}33` : 'none',
                transition: 'box-shadow 0.25s, opacity 0.2s',
              }}
            >
              {buttonLabel}
            </button>
          </form>

          <p
            role="status"
            aria-live="polite"
            style={{
              fontFamily: 'var(--font-crimson), serif',
              fontSize: 14,
              minHeight: 20,
              margin: '16px 0 0',
              color: isError ? '#c0392b' : isSuccess ? t.accent : 'transparent',
            }}
          >
            {state !== 'idle' && state !== 'submitting' ? STATUS_MESSAGE[state] : ' '}
          </p>

          <p style={{
            fontFamily: 'var(--font-crimson), serif', fontSize: 12,
            color: t.textMuted, lineHeight: 1.6, margin: '10px auto 0', maxWidth: 420,
          }}>
            Al suscribirte aceptas recibir correos ocasionales con novedades. Puedes darte de baja cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}
