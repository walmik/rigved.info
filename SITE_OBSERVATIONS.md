# Rigved.info Site Observations

**Date:** December 30, 2025
**Purpose:** Document current site structure and implementation details for future reference

---

## Site Overview
Static portfolio site for Rigved Deshpande (Animator & Tech Artist) hosted on GitHub Pages at rigved.info.

---

## Site Structure

### HTML Pages (4 total)
1. **[index.html](index.html)** - Home page with fullscreen background video
2. **[portfolio.html](portfolio.html)** - React-based portfolio showcase
3. **[demoreel.html](demoreel.html)** - Demo reel page with YouTube embed
4. **[resume.html](resume.html)** - Resume/CV page with skills and tools

### Technology Stack
- **Frontend Framework:** Bootstrap (CSS framework)
- **React App:** Used only in portfolio.html
  - React 17.0.1
  - React Router DOM for hash-based routing
  - React Markdown for content rendering
  - Webpack bundled to assets/js/main.js (289KB)
- **Build Tools:** Webpack, Babel, ESLint
- **Analytics:** Google Analytics (G-Q28W4FLZ27)

### Directory Structure
```
rigved.info/
├── index.html, portfolio.html, demoreel.html, resume.html
├── css/
│   ├── bootstrap.min.css
│   ├── cover.css (main custom styles)
│   └── styles.css
├── assets/
│   ├── img/ (videos, images, posters)
│   └── js/
│       └── main.js (289KB React bundle)
├── src/ (React source)
│   ├── App.js
│   ├── Portfolio.js
│   ├── PortfolioItem.js
│   ├── data.js (portfolio content data)
│   └── index.js
├── package.json
└── webpack.config.js
```

---

## Current Implementation Details

### Home Page (index.html)
- **Fullscreen video background:** `assets/img/dancingrolls.mp4` (lightweight animation)
  - Video styled with opacity: 0.2, covers entire viewport
  - Fixed positioning with object-fit: cover
  - Autoplay, muted, loop attributes
  - Poster fallback: dancingrolls.png
- **Layout:** Centered vertical/horizontal using table-cell display
- **Content:**
  - Header with Sanskrit character "ऋ" as logo
  - Navigation menu (Home, Portfolio, Resume)
  - Hero section: Name, title, "Watch Demo Reel" CTA button
  - Footer: Email contact and Instagram link

### Portfolio Page (portfolio.html)
- **React Application:** Single-page app with client-side routing
- **Routing:** Hash-based routing (#/item/[id])
- **Structure:**
  - Root div mounts React app
  - Portfolio.js: Grid view of portfolio items with thumbnails
  - PortfolioItem.js: Detail view with markdown content, images, videos, YouTube embeds
  - data.js: Contains all portfolio content and metadata
- **Media Support:** Images, videos (mp4), YouTube embeds
- **Bundle:** Webpack compiles src/ to assets/js/main.js

### Demo Reel Page (demoreel.html)
- **Content:** Embedded YouTube video (700x394px)
- **Video ID:** MGmH5HnaH5A
- **Features:** Autoplay enabled, no related videos (rel=0)

### Resume Page (resume.html)
- **Content Sections:**
  - Profile image (r1g.jpg)
  - Education: CMU BFA 2017-2021
  - Bio paragraph
  - Skills badges (Environment Design, 3D Animation, Python, etc.)
  - Pipeline skills
  - Programming languages
  - Soft skills
  - Software tools with icons from ArtStation CDN
- **Layout:** Left-aligned text, top margin for header clearance

---

## Styling Approach

### CSS Architecture
- **Bootstrap:** Base grid system and components
- **cover.css:** Custom styles for all pages
  - Centering using display: table/table-cell
  - Fixed header/footer on desktop (768px+)
  - Dark theme (#333 background, white text)
  - Text shadow for readability over video
  - Fade-in animations with vendor prefixes

### Responsive Strategy (Current)
- **Breakpoints:**
  - 768px: Desktop layout (fixed header/footer, centered content)
  - 992px: Additional width adjustments
- **Current Issues:**
  - Fixed widths: `.cover` is 700px fixed width
  - iframe in demoreel.html: 700x394px fixed dimensions
  - Software icons: 33% width (somewhat responsive)
  - No mobile-specific optimizations

---

## Responsive Design Issues Identified

### Critical Issues
1. **Fixed Width Content:**
   - `.cover` class: 700px fixed width (will overflow on mobile)
   - YouTube iframe: 700x394px (not responsive)
   - Portfolio item media max-width: 700px

2. **Mobile Navigation:**
   - Horizontal nav may wrap awkwardly on small screens
   - No hamburger menu for mobile

3. **Video Background:**
   - Fullscreen video may have performance issues on mobile
   - No consideration for reduced motion preferences

4. **Typography:**
   - Fixed font sizes may be too small/large on mobile
   - `.masthead-brand` uses 5vh (may be too large on landscape mobile)

5. **Touch Targets:**
   - Button/link sizes not optimized for touch
   - Navigation links may be too close together

6. **Portfolio Grid:**
   - Thumbnail images: max-width 180px (may be too small on mobile)
   - Flex layout needs better mobile stacking

7. **Resume Page:**
   - Software icons 33% width creates 3 columns (may be cramped)
   - Text-left alignment may look odd centered on mobile

---

## Assets & Media

### Videos
- `assets/img/dancingrolls.mp4` (home page background)
- `assets/img/fullsize/ceres-playblast.mov`
- `assets/img/fullsize/goat-poly.mp4`
- `assets/img/fullsize/sentryassembly.mp4`
- `assets/img/portfolio/16-ceres-playblast.mov`

### Build Process
- **Build Command:** `npm run build`
- **Output:** Webpack bundles React code to assets/js/main.js
- **Mode:** Production (minified)

---

## Recommendations for Responsive Design

### Immediate Priorities
1. Make `.cover` width responsive (max-width with percentages)
2. Make YouTube iframe responsive (aspect-ratio wrapper)
3. Add mobile navigation improvements
4. Test and optimize fullscreen video on mobile
5. Add viewport-based typography scaling
6. Improve portfolio grid for mobile (single column stacking)
7. Add prefers-reduced-motion media query

### Future Enhancements
- Consider lazy loading for portfolio images
- Optimize video files for different screen sizes
- Add progressive enhancement for older browsers
- Consider service worker for offline functionality
- Improve accessibility (ARIA labels, keyboard navigation)

---

## Notes
- Site uses Google Analytics
- Email: rigved.deshpande@gmail.com
- Instagram: @r1g4t0n1
- CNAME configured for rigved.info domain
- Git repository managed, recent commit mentions build command
