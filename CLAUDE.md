# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marketing website for Fyne Workflows, built with React + Vite and Tailwind CSS v4. The site showcases automation service opportunities across different categories (Sell as a Service, Arbitrage & Trading, Content & Audience, and Freelance Advantages) with an interactive single-page application design.

## Common Commands

### Development
```bash
npm run dev          # Start development server with HMR
npm run build        # Production build
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

### Deployment
```bash
npm run deploy       # Build and deploy to GitHub Pages (runs predeploy automatically)
```

## Architecture

### Tech Stack
- **React 19.2.0** with StrictMode
- **Vite 7.2.4** for build tooling and dev server
- **Tailwind CSS 4.1.17** using the new Vite plugin (`@tailwindcss/vite`)
- **Lucide React** for icons
- **gh-pages** for deployment

### Project Structure
- **src/App.jsx**: Main application component containing all UI logic
  - State management for category selection and expanded idea cards
  - Hardcoded data arrays for `opportunities` and `steps`
  - Single-page layout with hero, category tabs, idea cards, and CTA footer
- **src/main.jsx**: React application entry point
- **src/index.css**: Single line importing Tailwind CSS v4
- **vite.config.js**: Vite configuration with React and Tailwind plugins
- **index.html**: Entry HTML with root div

### Key Implementation Details

**Tailwind CSS v4**: This project uses Tailwind CSS v4 with the new `@tailwindcss/vite` plugin. The import is done via `@import "tailwindcss"` in index.css (not the traditional `@tailwind` directives).

**Base Path Configuration**: The `vite.config.js` has `base: '/'` which is configured for custom domain deployment. If deploying to GitHub Pages without a custom domain, this should be changed to `base: '/fyneworkflows-site/'` (or the repository name).

**Component Structure**: The entire application is a single component (App.jsx) with no component decomposition. All data (opportunities, steps) is hardcoded within the component file.

**State Management**: Uses basic React `useState` hooks for:
- `selectedCategory`: tracks which category tab is active (0-3)
- `expandedIdea`: tracks which idea card is expanded (null or index)

**Styling Pattern**: Uses inline Tailwind classes with dynamic class construction using template literals. Color values are stored in the data objects and applied via inline styles (e.g., `style={{ backgroundColor: color + '15' }}`).

## Important Notes

- No test suite is configured in this project
- No component library beyond lucide-react icons
- The site is fully client-side rendered with no backend
- Contact information hardcoded: email (fynebusinessllc@gmail.com) and Calendly link
