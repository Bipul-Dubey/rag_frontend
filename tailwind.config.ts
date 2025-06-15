import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        card: 'var(--card)',
        shadow: 'var(--shadow)',
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        secondary: 'var(--secondary)',
        'secondary-hover': 'var(--secondary-hover)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
        info: 'var(--info)',
        'text-muted': 'var(--text-muted)',
        'text-heading': 'var(--text-heading)',
        'text-body': 'var(--text-body)',
      },
    },
  },
  plugins: [],
};

export default config;
