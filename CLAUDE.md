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
- `script.js` - Interactive features including splash screen transition, smooth scrolling, language switcher, and keyword bubble animation system
- `styles.css` - Custom styles including animations, transitions, and responsive design (shared by both EN and ES versions)
- `img/` - Image assets (profile photos, favicon)
- `es/` - Spanish version of the site with translated content

### Bilingual Structure

The site supports English and Spanish versions:
- **English**: Root directory (`/index.html`, `/script.js`)
- **Spanish**: `/es/` directory (`/es/index.html`, `/es/script.js`)
- **Shared**: `styles.css` is referenced from both versions using relative paths
- **Language switcher**: Toggle button in navigation switches between versions by changing URLs

The Spanish version has identical structure and functionality but with translated content. When adding new features or experience entries, update both versions to maintain consistency.

### Key Interactive Features

**Language Switcher (script.js, top of file)**
A toggle button in the navigation bar allows switching between English and Spanish versions. The switcher changes the page URL:
- EN version: Setting `langSwitch.checked = true` navigates to `/es/index.html`
- ES version: Setting `langSwitch.checked = false` navigates to `../index.html`
- Active language label is styled with full opacity while inactive has reduced opacity

**Splash Screen Transition (script.js, search "Splash Screen Control")**
The site features an animated splash screen that transforms into the navigation bar after 2 seconds. The splash screen prevents scrolling during the animation and uses CSS keyframes for the transformation effect. The transition includes:
- Logo reveal animation
- Tagline fade-in effect
- Loading line animation
- Smooth transformation to navigation bar

**Experience Card Keyword Bubbles (script.js, search "experienceKeywords")**
The most complex feature: interactive keyword bubbles that appear when hovering or touching experience cards. Each position has a predefined set of keywords categorized by type:
- `role` - Job titles (red: #FF6B6B)
- `tech` - Technologies (cyan: #00FFFF)
- `skill` - Skills (pale green: #98FB98)
- `keyword` - Context/industry (yellow: #FFD700)

The bubble system includes:
- Throttling (150ms interval) and max 10 concurrent bubbles for smooth, fluid animation
- Smart mobile positioning (bubbles appear opposite to touch location to avoid finger obstruction)
- Scroll detection to prevent bubbles during scrolling gestures
- Color-coded reference box that slides in from the right (desktop) or left (mobile) when interacting with cards
- Water ripple effect at bubble spawn points for visual feedback
- Auto-hide reference box after 5 seconds of inactivity

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

### Adding New Experience Entries

When adding a new job to the experience section:

1. Add the HTML card in `index.html` following the existing pattern (within the `#experience` section)
2. Add the keyword array to the `experienceKeywords` object in `script.js` using the exact company name from the h3 title (the text before the " - " separator)
3. Use the color-coded span format: `<span class="role">`, `<span class="tech">`, `<span class="skill">`, `<span class="keyword">`
4. Repeat steps 1-3 for the Spanish version (`es/index.html` and `es/script.js`) with translated keywords

Example keyword entry:
```javascript
'Company Name': [
    '<span class="role">Job Title</span>',
    '<span class="tech">Technology Name</span>',
    '<span class="skill">Skill Name</span>',
    '<span class="keyword">Industry Context</span>'
]
```

### Mobile Behavior

The site is fully responsive with specific mobile optimizations:
- **Touch events**: Touch detection with scroll gesture recognition to prevent bubbles during scrolling movements
- **Reference box position**: Slides from left instead of right on mobile devices (easier reach)
- **Smart bubble positioning**: Bubbles appear opposite to touch point (left/right based on touch location) to avoid finger obstruction
- **Typography**: Smaller font sizes and reduced padding on mobile devices for better content density
- **Animation duration**: Longer bubble animation (4s mobile vs 3s desktop) for better visibility on smaller screens
- **Mobile breakpoint**: 768px is the primary responsive breakpoint throughout the site
- **Touch highlight**: Disabled via `-webkit-tap-highlight-color: transparent` for cleaner UX
- **Text selection**: Disabled on experience cards to prevent accidental selection during interaction

### Performance Optimizations

- `will-change` property used on animated elements (bubbles, cards)
- Bubble throttling with 300ms interval and max 5 concurrent bubbles
- Lazy loading for images with `loading="lazy"` attribute
- WebP format with PNG fallback for profile photos
- CDN-hosted external libraries (Tailwind CSS, Font Awesome)

## Branch Information

- **Main branch**: `main` (development and feature work)
- **Current branch**: `gh-pages` (GitHub Pages deployment)

The site is deployed via GitHub Pages, so changes should be pushed to the `gh-pages` branch for production deployment. The `gh-pages` branch contains the production-ready static files.
