'use client';

import { useEffect } from 'react';

import bglighthp from "../assets/bg-noise-25-mobile.png";
import bglighttab from "../assets/bg-noise-25-tablet.png";
import bglightdesk from "../assets/bg-noise-25.png";

import bgdarkhp from "../assets/bg-minim-noise-dark-mobile.png";
import bgdarktab from "../assets/bg-minim-noise-dark-tablet.png";
import bgdarkdesk from "../assets/bg-minim-noise-dark.png";

interface ThemeBackgroundProps {
  theme: 'light' | 'dark';
}

const BACKGROUND_SOURCES: Record<'light' | 'dark', { src: string; srcSet: string }> = {
  light: {
    src: bglightdesk.src,
    srcSet:
      `${bglighthp.src} 750w, ${bglighttab.src} 1080w, ${bglightdesk.src} 1920w`,
  },
  dark: {
    src: bgdarkdesk.src,
    srcSet:
      `${bgdarkhp.src} 750w, ${bgdarktab.src} 1080w, ${bgdarkdesk.src} 1920w`,
  },
};

export default function ThemeBackground({ theme }: ThemeBackgroundProps) {
  useEffect(() => {
    const preloadTimer = setTimeout(() => {
      const other = BACKGROUND_SOURCES[theme === 'dark' ? 'light' : 'dark'];
      other.srcSet.split(',').forEach((entry) => {
        const url = entry.trim().split(' ')[0];
        const img = new Image();
        img.src = url;
      });
    }, 2500);

    return () => clearTimeout(preloadTimer);
  }, [theme]);

  const source = BACKGROUND_SOURCES[theme];

  return (
    <div className="theme-background" aria-hidden="true">
      <img
        key={theme}
        src={source.src}
        srcSet={source.srcSet}
        sizes="100vw"
        alt=""
        fetchPriority="high"
        decoding="async"
        className="theme-background__image"
      />
    </div>
  );
}