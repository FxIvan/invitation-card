/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        "clamp-xl-4": "clamp(5rem, 14vw, 10rem)",
        "clamp-xl-3": "clamp(2.5rem, 10vw, 5rem)",
        "clamp-xl-2": "clamp(1.25rem, 4vw, 2.5rem)",
        "clamp-xl-1": "clamp(0.625rem, 2vw, 1.25rem)",
      }
    },
  },
  plugins: [],
}
