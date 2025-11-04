# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Pedro Díaz, a Web Developer. The site is a single-page application built with vanilla JavaScript, HTML5, and CSS3, using Tailwind CSS via CDN for styling and Font Awesome for icons.

## Development Commands

Since this is a static website with no build process, you can serve it locally using:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then open `http://localhost:8000` (or the port shown) in your browser.

## Architecture

### File Structure
- `index.html` - Main HTML file containing all page sections (hero, about, experience, contact)
- `script.js` - Interactive features including splash screen transition, smooth scrolling, and keyword bubble animation system
- `styles.css` - Custom styles including animations, transitions, and responsive design
- `img/` - Image assets (profile photos, favicon)

### Key Interactive Features

**Splash Screen Transition (script.js:1-33)**
The site features an animated splash screen that transforms into the navigation bar after 2 seconds. The splash screen prevents scrolling during the animation and uses CSS keyframes for the transformation effect.

**Experience Card Keyword Bubbles (script.js:36-417)**
The most complex feature: interactive keyword bubbles that appear when hovering or touching experience cards. Each position has a predefined set of keywords categorized by type:
- `role` - Job titles (red: #FF6B6B)
- `tech` - Technologies (cyan: #00FFFF)
- `skill` - Skills (pale green: #98FB98)
- `keyword` - Context/industry (yellow: #FFD700)

The bubble system includes:
- Throttling (300ms interval) and max 5 concurrent bubbles
- Smart mobile positioning (bubbles appear opposite to touch location)
- Scroll detection to prevent bubbles during scrolling
- Color-coded reference box that slides in from the right (desktop) or left (mobile)
- Water ripple effect at bubble spawn points

**Smooth Scrolling Navigation (script.js:217-229)**
All navigation links with `href^="#"` have smooth scroll behavior.

### Styling Conventions

- Uses Poppins font family for body text
- Uses Fira Code monospace font for keyword bubbles
- Primary blue gradient: `from-blue-900 to-blue-800` (#1e3a8a to #1e40af)
- Hover effects with `.hover-scale` class (1.05 scale)
- Experience cards have a 3D lift effect on hover
- All animations use `will-change` for performance
- Mobile breakpoint at 768px

### Adding New Experience Entries

When adding a new job to the experience section:

1. Add the HTML card in `index.html` following the existing pattern
2. Add the keyword array to the `experienceKeywords` object in `script.js` using the exact company name from the h3 title (before the " - " separator)
3. Use the color-coded span format: `<span class="role">`, `<span class="tech">`, `<span class="skill">`, `<span class="keyword">`

### Mobile Behavior

The site is fully responsive with specific mobile optimizations:
- Touch events with scroll detection
- Reference box slides from left instead of right
- Smaller font sizes and padding
- Bubbles positioned opposite to touch point to avoid finger obstruction
- Longer bubble animation duration (4s vs 3s on desktop)

## Branch Information

- Main branch: `main`
- Current branch: `gh-pages` (GitHub Pages deployment)

The site is deployed via GitHub Pages, so changes should be pushed to the `gh-pages` branch for production deployment.
