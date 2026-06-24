'use client';

import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';
import TimelineCentury from './TimelineCentury';
import { GRUPOS_APARTADOS, PRECURSORES, REFORMADORES_CATOLICOS } from '@/data/reformas';

// Si más adelante hay foto del autor, poner aquí la ruta (p. ej. '/autor.jpg').
// Mientras esté vacío, se muestra un avatar con las iniciales.
const AUTHOR_PHOTO = '';

// Mostrar/ocultar la tarjeta del autor. Poner en true para volver a mostrarla.
const SHOW_AUTHOR = false;

const PARTS: { tag: string; titulo: string; data: typeof GRUPOS_APARTADOS; prefix: string }[] = [
  { tag: 'a', titulo: 'Los grupos que se mantuvieron apartados de la Iglesia Católica', data: GRUPOS_APARTADOS, prefix: 'Apartados de Roma' },
  { tag: 'b', titulo: 'Los precursores de las reformas', data: PRECURSORES, prefix: 'Precursor' },
  { tag: 'c', titulo: 'Los líderes de la reforma de la Iglesia Católica romana', data: REFORMADORES_CATOLICOS, prefix: 'Reforma católica' },
];

export default function TimelineReformas() {
  const { t } = useTheme();
  const isMobile = useIsMobile();

  return (
    <div>
      {/* Introducción general, con cariño */}
      <div style={{ marginBottom: isMobile ? 32 : 48, maxWidth: 760 }}>
        <h3 style={{
          fontFamily: 'var(--font-playfair), serif',
          fontSize: isMobile ? 22 : 30, color: t.text, margin: '0 0 8px',
          fontWeight: 700, lineHeight: 1.2,
        }}>
          Disidentes y reformas <span style={{ color: t.textMuted, fontWeight: 400 }}>(siglos IV – XVI)</span>
        </h3>
        <p style={{
          fontFamily: 'var(--font-crimson), serif',
          fontSize: isMobile ? 15 : 17, color: t.textMuted, lineHeight: 1.75, margin: '0 0 14px',
        }}>
          Esta línea de tiempo es, en buena parte, un poco de nuestra propia historia. Reúne a tres clases de
          personas: los <strong style={{ color: t.text }}>grupos que se mantuvieron apartados de Roma</strong> buscando
          una fe más bíblica; los <strong style={{ color: t.text }}>precursores</strong> que prepararon el camino de
          la Reforma; y los <strong style={{ color: t.text }}>líderes que reformaron a Roma desde dentro</strong>.
        </p>
        <p style={{
          fontFamily: 'var(--font-crimson), serif',
          fontSize: isMobile ? 14 : 16, color: t.textMuted, lineHeight: 1.75, margin: 0,
        }}>
          Lo contamos con convicción bautista y con honestidad: no afirmamos una cadena ininterrumpida de iglesias
          como la nuestra, pero sí reconocemos una familia de fe que, siglo tras siglo, volvió al evangelio sencillo y
          a la Biblia, muchas veces pagándolo con la vida.
        </p>
      </div>

      {PARTS.map((p, i) => (
        <div key={p.tag} style={{ marginBottom: isMobile ? 36 : 52 }}>
          {/* Kicker a/b/c */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <span style={{
              flexShrink: 0,
              width: 34, height: 34, borderRadius: '50%',
              background: t.accent, color: t.bg,
              fontFamily: 'var(--font-playfair), serif', fontSize: 16, fontWeight: 700,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>{p.tag}</span>
            <span style={{
              fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 13 : 14, color: t.text,
              letterSpacing: '0.06em',
            }}>{p.titulo}</span>
          </div>

          <TimelineCentury century={p.data} labelPrefix={p.prefix} forceVertical />

          {i < PARTS.length - 1 && (
            <div style={{ height: 1, background: t.border, margin: isMobile ? '36px 0 0' : '52px 0 0' }} />
          )}
        </div>
      ))}

      {/* ── Ítem final: el autor de esta página (oculto por ahora; cambiar SHOW_AUTHOR) ── */}
      {SHOW_AUTHOR && (
      <>
      <div style={{ height: 1, background: t.border, marginBottom: isMobile ? 36 : 48 }} />

      <div style={{
        background: t.bgCard, border: `1px solid ${t.border}`, borderTop: `3px solid ${t.accent}`,
        padding: isMobile ? '24px 20px' : '36px 40px', maxWidth: 820,
      }}>
        <p style={{
          fontFamily: 'var(--font-crimson), serif', fontSize: 11, color: t.accent,
          letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0 0 18px',
        }}>El autor de esta página</p>

        <div style={{ display: 'flex', gap: isMobile ? 16 : 24, alignItems: 'flex-start', flexDirection: isMobile ? 'column' : 'row' }}>
          {/* Avatar (foto o iniciales) */}
          <div style={{ flexShrink: 0 }}>
            {AUTHOR_PHOTO ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={AUTHOR_PHOTO} alt="Daniel Suárez"
                style={{ width: 92, height: 92, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${t.accent}` }} />
            ) : (
              <div style={{
                width: 92, height: 92, borderRadius: '50%',
                background: `${t.accent}22`, border: `2px solid ${t.accent}`, color: t.accent,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-playfair), serif', fontSize: 34, fontWeight: 700,
              }}>DS</div>
            )}
          </div>

          <div style={{ minWidth: 0 }}>
            <h3 style={{
              fontFamily: 'var(--font-playfair), serif', fontSize: isMobile ? 22 : 26, color: t.text,
              margin: '0 0 10px', fontWeight: 700,
            }}>Daniel Suárez</h3>

            <p style={{
              fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 15 : 16, color: t.textMuted,
              lineHeight: 1.75, margin: '0 0 14px',
            }}>
              Hola, soy Daniel. <strong style={{ color: t.text }}>No soy historiador profesional</strong>, sino
              estudiante de la <strong style={{ color: t.text }}>Licenciatura en Estudios Pastorales</strong>. Hice esta
              web con <strong style={{ color: t.text }}>fines educativos</strong>, como proyecto de mis estudios en el
              seminario. Para escribirla me guié sobre todo del libro <em>Historia del cristianismo</em> de
              Justo González y de las clases del Pastor Enoc Príncipe. Cualquier error es mío, no de ellos.
            </p>

            <p style={{
              fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 14 : 15, color: t.textMuted,
              lineHeight: 1.7, margin: '0 0 18px',
            }}>
              Si quieres <strong style={{ color: t.text }}>contactarme</strong> o <strong style={{ color: t.text }}>aportar
              a la web</strong>, con gusto. Toda corrección, sugerencia o aliento es bienvenido.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <AuthorLink t={t} href="https://sblogos.com" label="Seminario · sblogos.com" />
              <AuthorLink t={t} href="https://www.facebook.com/pastorenoc?locale=es_LA" label="Clases del Pastor Enoc Príncipe" />
              <AuthorLink t={t} href="mailto:danielsuarez3114@gmail.com" label="Escríbeme" />
            </div>
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  );
}

function AuthorLink({ t, href, label }: { t: ReturnType<typeof useTheme>['t']; href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{
        fontFamily: 'var(--font-crimson), serif', fontSize: 13, color: t.text,
        textDecoration: 'none', border: `1px solid ${t.border}`, borderRadius: 2,
        padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 6,
        transition: 'border-color 0.2s, color 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.color = t.accent; e.currentTarget.style.borderColor = t.accent; }}
      onMouseLeave={e => { e.currentTarget.style.color = t.text; e.currentTarget.style.borderColor = t.border; }}
    >
      🔗 {label}
    </a>
  );
}
