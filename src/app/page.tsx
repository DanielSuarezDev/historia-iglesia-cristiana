'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import NavBar from '@/components/NavBar';
import HeroV2 from '@/components/HeroV2';
import StatsA from '@/components/StatsA';
import StatsB from '@/components/StatsB';
import StatsC from '@/components/StatsC';
import Footer from '@/components/Footer';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useTheme } from '@/context/ThemeContext';

function PageContent() {
  const { t } = useTheme();
  return (
    <div style={{ background: t.bg, minHeight: '100vh' }}>
      <NavBar />
      <main>
        <HeroV2 />
        <StatsA />
        <StatsB />
        <StatsC />
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <PageContent />
    </ThemeProvider>
  );
}
