'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import EmojiFace from './components/eyes/emojiface';
import { useEyeFollow } from './components/eyes/eyefollow';
import Footer from './components/footer/footer';

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  useEyeFollow();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('current_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('current_theme', theme);
    }
  }, [theme, isMounted]);

  if (!isMounted) {
    return (
      <div className={`container ${theme}`} style={{ visibility: 'hidden' }}>
        <Navbar theme={theme} setTheme={setTheme} />
        {children}
      </div>
    );
  }

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} /> 
      {children}
      <Footer  theme={theme} setTheme={setTheme} />
    </div>
  );
}