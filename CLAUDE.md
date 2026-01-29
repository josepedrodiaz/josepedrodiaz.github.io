# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**General Instructions**: See `~/.claude-instructions.md` for git workflow, versioning, and general coding conventions that apply to all Pedro Díaz's personal projects.

## Project Overview

This is a static personal portfolio website for Pedro Díaz, a Web Developer. The site is a single-page application built with vanilla JavaScript, HTML5, and CSS3, using Tailwind CSS with a build process for styling and Font Awesome for icons.

## Development Commands

### Building CSS

This project uses Tailwind CSS v3 with a build process. Before serving the site, you need to build the CSS:

```bash
# Install dependencies (first time only)
npm install

# Build CSS for production (generates styles.css from src/input.css)
npm run build

# Watch for changes and rebuild automatically during development
npm run watch
```

### Serving the Site Locally

After building the CSS, you can serve the site locally using:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then open `http://localhost:8000` (or the port shown) in your browser.

**Important**: Always run `npm run build` after making changes to:
- `src/input.css` (source CSS file with Tailwind directives)
- HTML files (if you add new Tailwind classes)
- `tailwind.config.js` (Tailwind configuration)

## Architecture

### File Structure
- `index.html` - Main HTML file containing all page sections with data-i18n attributes for translations
- `script.js` - Interactive features including splash screen transition, smooth scrolling, mobile menu toggle
- `i18n.js` - Internationalization module for handling English/Spanish translations
- `translations.json` - All bilingual content (EN/ES) in structured JSON format
- `styles.css` - **Generated file** - Compiled CSS output from Tailwind build process (DO NOT edit directly)
- `src/input.css` - Source CSS file with Tailwind directives and custom styles
- `tailwind.config.js` - Tailwind CSS configuration file
- `postcss.config.js` - PostCSS configuration for Tailwind
- `package.json` - Node.js dependencies and build scripts
- `img/` - Image assets (profile photos, portfolio images, favicon)
- `node_modules/` - Node dependencies (ignored by git)

### Bilingual Structure (Single-File Architecture)

The site uses a **single-file architecture** with JavaScript-based i18n system:
- **One HTML file**: `index.html` with `data-i18n` attributes on translatable elements
- **Translations**: All content in `translations.json` with nested keys (e.g., `hero.title`, `portfolio.clinton.description`)
- **Language switcher**: Toggle in navigation (desktop) and mobile menu syncs both switchers
- **State persistence**: Language preference saved in `localStorage` and URL parameter (`?lang=es`)
- **i18n.js module**: Handles language switching, content updates, and nested translation key resolution

When adding new content:
1. Add `data-i18n="section.key"` attribute to HTML elements
2. Add translations in `translations.json` under both `en` and `es` objects
3. Use nested structure for organization (e.g., `portfolio.projectname.title`)

### Key Interactive Features

**Mobile Menu Toggle (script.js)**
Hamburger menu for mobile devices (< 768px) that includes:
- Navigation links that close the menu when clicked
- Language switcher synchronized with desktop version
- Click-outside detection to close menu
- Smooth transitions for menu visibility

**Language Switcher (i18n.js)**
The i18n module handles bilingual content switching:
- Desktop and mobile toggles synchronized
- Updates all elements with `data-i18n` attributes
- Persists preference in `localStorage`
- Updates URL with `?lang=es` parameter
- Resolves nested translation keys (e.g., `hero.title` → `translations.en.hero.title`)

**Splash Screen Transition (script.js, search "Splash Screen Control")**
The site features an animated splash screen that transforms into the navigation bar after 2 seconds. The splash screen prevents scrolling during the animation and uses CSS keyframes for the transformation effect. The transition includes:
- Logo reveal animation
- Tagline fade-in effect
- Loading line animation
- Smooth transformation to navigation bar

**Experience Card Features (script.js)**
Experience cards have expandable tags sections with keyword categorization:
- Color-coded keyword chips: role (red), tech (cyan), skill (green), context (yellow)
- Expandable/collapsible tags section with smooth transitions
- Category organization with counts
- Note: Bubble animation system exists in code but is not currently active

**Smooth Scrolling Navigation (script.js, search "Smooth scroll for navigation")**
All navigation links with `href^="#"` have smooth scroll behavior to improve user experience when navigating between sections.

### Styling Conventions

- Uses Poppins font family for body text
- Uses Fira Code monospace font for keyword bubbles (technical aesthetic)
- Primary blue gradient: `from-blue-900 to-blue-800` (#1e3a8a to #1e40af)
- Hover effects with `.hover-scale` class (1.05 scale transformation)
- Experience cards have a 3D lift effect on hover with shadow
- All animations use `will-change` for performance optimization
- Mobile breakpoint at 768px (primary responsive breakpoint)

### Adding New Portfolio Projects

When adding a new project to the portfolio section:

1. Add project card HTML in `index.html` within `#portfolio` section
2. Add project image in `img/portfolio/` directory
3. Add translations in `translations.json`:
   - `en.portfolio.projectname.title`
   - `en.portfolio.projectname.description`
   - `es.portfolio.projectname.title`
   - `es.portfolio.projectname.description`
4. Add `data-i18n` attributes to title and description elements
5. Follow existing pattern for image, links, and responsive layout

### Mobile Behavior

The site is fully responsive with specific mobile optimizations:
- **Hamburger menu**: Navigation collapses to hamburger menu on screens < 768px
- **Touch-friendly**: Large tap targets for mobile interaction
- **Typography**: Smaller font sizes and reduced padding on mobile devices
- **Mobile breakpoint**: 768px is the primary responsive breakpoint throughout the site
- **Responsive images**: All portfolio images scale appropriately
- **Smooth scroll**: Works across all devices

### Performance Optimizations

- Lazy loading for images with `loading="lazy"` attribute
- WebP format with PNG fallback for profile photos
- Minified CSS output from Tailwind build process
- CDN-hosted Font Awesome icons
- Smooth scroll with CSS `scroll-behavior: smooth`
- Prevented overscroll bounce with `overscroll-behavior-y: none`

## Branch Information

- **Main branch**: `main` (development and feature work)
- **Current branch**: `gh-pages` (GitHub Pages deployment)

The site is deployed via GitHub Pages, so changes should be pushed to the `gh-pages` branch for production deployment. The `gh-pages` branch contains the production-ready static files.
