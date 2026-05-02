'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/lib/useMediaQuery';

export default function HeroV2() {
  const { t, themeKey } = useTheme();
  const [started, setStarted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 200);
    const onScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particleCount = window.innerWidth < 768 ? 55 : 110;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.6 + 0.2,
      vy: -(Math.random() * 0.45 + 0.05),
      vx: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.05,
      cross: Math.random() < 0.14,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.03 + 0.008,
    }));

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.twinkle += p.twinkleSpeed;
        const alpha = p.opacity * (0.55 + 0.45 * Math.sin(p.twinkle));
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = t.accent;
        ctx.fillStyle = t.accent;
        if (p.cross) {
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - 6); ctx.lineTo(p.x, p.y + 6);
          ctx.moveTo(p.x - 3.5, p.y - 1.5); ctx.lineTo(p.x + 3.5, p.y - 1.5);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
        p.y += p.vy;
        p.x += p.vx;
        if (p.y < -20) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', resize);
    };
  }, [t.accent]);

  const heroGrad =
    themeKey === 'dark'
      ? 'radial-gradient(ellipse at 50% 55%, #1e1208 0%, #0c0805 100%)'
      : themeKey === 'sepia'
      ? 'radial-gradient(ellipse at 50% 55%, #e8ddd0 0%, #d4c9b8 100%)'
      : 'radial-gradient(ellipse at 50% 55%, #1a2a4a 0%, #0f1a32 100%)';

  const textOnDark = themeKey === 'modern' ? '#f0f4ff' : t.text;
  const mutedOnDark = themeKey === 'modern' ? '#8898b8' : t.textMuted;

  const lineDelay = (d: number): React.CSSProperties => ({
    opacity: started ? 1 : 0,
    transform: started ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 1s ease ${d}s, transform 1s ease ${d}s`,
  });

  const ring1 = isMobile ? 320 : 560;
  const ring2 = isMobile ? 260 : 460;
  const glow = isMobile ? 420 : 700;

  return (
    <section style={{ position: 'relative', minHeight: '100vh', height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: heroGrad, overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }} />

      {/* Glow circle */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: glow, height: glow, borderRadius: '50%', background: `radial-gradient(circle, ${t.accent}08 0%, transparent 65%)`, animation: 'heroGlow 4s ease-in-out infinite', pointerEvents: 'none', zIndex: 1 }} />

      {/* Rotating ring 1 */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: ring1, height: ring1, marginTop: -ring1 / 2, marginLeft: -ring1 / 2, borderRadius: '50%', border: `1px solid ${t.accent}18`, animation: 'spinSlow 40s linear infinite', zIndex: 1 }}>
        {[0, 60, 120, 180, 240, 300].map(deg => (
          <div key={deg} style={{ position: 'absolute', top: '50%', left: '50%', width: 4, height: 4, borderRadius: '50%', background: t.accent, opacity: 0.35, transform: `rotate(${deg}deg) translateX(${ring1 / 2 - 1}px) translateY(-2px)` }} />
        ))}
      </div>

      {/* Rotating ring 2 */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: ring2, height: ring2, marginTop: -ring2 / 2, marginLeft: -ring2 / 2, borderRadius: '50%', border: `0.5px solid ${t.accent}10`, animation: 'spinSlowR 60s linear infinite', zIndex: 1, pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 860, padding: isMobile ? '0 22px' : '0 40px', transform: `translateY(${scrollY * 0.25}px)`, width: '100%' }}>

        {/* Eyebrow */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: isMobile ? 10 : 14, marginBottom: isMobile ? 26 : 36, ...lineDelay(0.2) }}>
          <div style={{ height: 1, width: isMobile ? 40 : 64, background: `linear-gradient(to right, transparent, ${t.accent})` }} />
          <svg width="20" height="20" viewBox="0 0 28 28">
            <rect x="12" y="2" width="4" height="24" fill={t.accent} rx="1" />
            <rect x="6" y="8" width="16" height="4" fill={t.accent} rx="1" />
          </svg>
          <div style={{ height: 1, width: isMobile ? 40 : 64, background: `linear-gradient(to left, transparent, ${t.accent})` }} />
        </div>

        {/* Quote */}
        <h1 style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(28px, 7.5vw, 68px)', lineHeight: 1.18, margin: isMobile ? '0 0 24px' : '0 0 32px', textShadow: `0 0 80px ${t.accent}30` }}>
          <span style={{ display: 'block', color: textOnDark, ...lineDelay(0.35) }}>"El que no conoce</span>
          <span style={{ display: 'block', color: textOnDark, ...lineDelay(0.55) }}>su historia está</span>
          <span style={{ display: 'block', color: t.accent, ...lineDelay(0.75), textShadow: `0 0 40px ${t.accent}60` }}>condenado a repetirla."</span>
        </h1>

        {/* Attribution */}
        <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: isMobile ? 13 : 16, letterSpacing: '0.14em', color: mutedOnDark, textTransform: 'uppercase', margin: isMobile ? '0 0 36px' : '0 0 52px', ...lineDelay(0.95) }}>
          — George Santayana
        </p>

        {/* Divider */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginBottom: 24, ...lineDelay(1.1) }}>
          <div style={{ height: 1, width: 48, background: `${t.accent}40` }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: t.accent, opacity: 0.6 }} />
          <div style={{ height: 1, width: 48, background: `${t.accent}40` }} />
        </div>

        {/* Subtitle */}
        <div style={lineDelay(1.25)}>
          <p style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(18px, 2.2vw, 26px)', color: textOnDark, fontWeight: 400, margin: '0 0 6px', letterSpacing: '0.04em' }}>
            Historia de la Iglesia
          </p>
          <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 'clamp(14px, 1.6vw, 18px)', color: mutedOnDark, letterSpacing: '0.1em', margin: 0, fontStyle: 'italic' }}>
            Compendio por Daniel Suárez
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: isMobile ? 20 : 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 2, ...lineDelay(1.6) }}>
        <span style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 10, letterSpacing: '0.28em', color: mutedOnDark, textTransform: 'uppercase' }}>Explorar</span>
        <div style={{ width: 1, height: 36, background: `linear-gradient(to bottom, ${t.accent}80, transparent)` }} />
      </div>
    </section>
  );
}
