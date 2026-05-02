'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { ThemeKey } from '@/lib/themes';
import { useIsMobile } from '@/lib/useMediaQuery';

const OPTIONS: { value: ThemeKey; label: string }[] = [
  { value: 'dark', label: 'Oscuro' },
  { value: 'sepia', label: 'Sépia' },
  { value: 'modern', label: 'Moderno' },
];

export default function ThemeSwitcher() {
  const { themeKey, setThemeKey, t } = useTheme();
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div style={{ position: 'fixed', bottom: isMobile ? 14 : 20, right: isMobile ? 14 : 20, zIndex: 2000 }}>
      {open && (
        <div style={{
          position: 'absolute', bottom: 52, right: 0,
          background: 'rgba(20,16,12,0.95)', backdropFilter: 'blur(16px)',
          border: `1px solid ${t.border}`, borderRadius: 8, padding: 8,
          display: 'flex', flexDirection: 'column', gap: 4, minWidth: 140,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}>
          <p style={{ fontFamily: 'var(--font-crimson), serif', fontSize: 10, color: t.accent, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 8px 8px', margin: 0, borderBottom: `1px solid ${t.border}` }}>
            Tema Visual
          </p>
          {OPTIONS.map(o => (
            <button key={o.value} onClick={() => { setThemeKey(o.value); setOpen(false); }} style={{
              background: themeKey === o.value ? `${t.accent}20` : 'transparent',
              border: themeKey === o.value ? `1px solid ${t.accent}50` : '1px solid transparent',
              borderRadius: 4, padding: '8px 12px', cursor: 'pointer',
              fontFamily: 'var(--font-crimson), serif', fontSize: 14,
              color: themeKey === o.value ? t.accent : '#9c8a74',
              textAlign: 'left', transition: 'all 0.15s',
            }}>
              {o.label}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)',
          borderRadius: 8, padding: '10px 16px', cursor: 'pointer',
          fontFamily: 'var(--font-crimson), serif', fontSize: 13,
          color: '#c9a84c', letterSpacing: '0.08em',
          backdropFilter: 'blur(12px)', transition: 'all 0.2s',
          display: 'flex', alignItems: 'center', gap: 8,
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.25)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.15)'; }}
      >
        🎨 Tweaks
      </button>
    </div>
  );
}
