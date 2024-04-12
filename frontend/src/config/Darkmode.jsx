import { useEffect, useState } from "react";

export default function Darkmode() {

  const [theme, setTheme] = useState('dark');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.add(theme);

    root.classList.remove(colorTheme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];

}