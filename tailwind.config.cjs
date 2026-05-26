module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'space-900': '#020617',
        'space-800': '#05061a',
        'neon-violet': '#8A2BE2',
        'cyan-glow': '#00FFF0',
      },
      boxShadow: {
        glow: '0 8px 40px rgba(138,43,226,0.25), 0 0 60px rgba(0,255,240,0.08)'
      }
    },
  },
  plugins: [],
}
