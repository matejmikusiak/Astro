# Matej Mikušiak - Portfolio

Modern, responsive portfolio website built with Astro, React, Tailwind CSS, and Framer Motion.

![Portfolio Preview](/public/og-image.jpg)

## Features

- 🎨 **Modern UI/UX** - Clean, minimalist design with glassmorphism effects
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ✨ **Smooth Animations** - Powered by Framer Motion
- 🚀 **High Performance** - Optimized for speed and Lighthouse scores
- ♿ **Accessible** - WCAG 2.1 compliant with proper ARIA labels
- 🌐 **SEO Optimized** - Meta tags, Open Graph, and structured data
- 🎯 **TypeScript Ready** - Full type safety

## Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [React](https://react.dev/) - UI component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/matejmikusiak/matejmikusiak.github.io.git
   cd matejmikusiak.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
├── public/
│   ├── favicon.svg
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |

## Deployment

This site is configured for automatic deployment to GitHub Pages via GitHub Actions.

Simply push to the `main` branch and the site will be automatically built and deployed.

## License

MIT © [Matej Mikušiak](https://github.com/matejmikusiak)