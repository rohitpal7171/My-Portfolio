"use client";

import { useState, useEffect } from 'react';

export function useTimeOfDay() {
  const [theme, setTheme] = useState<'day' | 'night' | null>(null);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 6 || hour >= 19) {
      setTheme('night');
    } else {
      setTheme('day');
    }
  }, []);

  return theme;
}
