# Image Requirements for Portfolio Entries

This document lists all the images needed for the new portfolio entries. Place images in the specified locations.

---

## Blizzard Entertainment

**Directory:** `assets/img/blizzard/`

### Required Images:

1. **thumbnail.jpg** (CRITICAL - for portfolio grid)
   - Used as the main thumbnail in the portfolio grid
   - Recommended size: 600x450px
   - Should be eye-catching - maybe Diablo IV logo or a composite

2. **diablo-iv-logo.png**
   - Official Diablo IV logo
   - Transparent background preferred
   - High resolution for detail page

3. **vessel-of-hatred-logo.png**
   - Diablo IV: Vessel of Hatred expansion logo
   - Transparent background preferred

4. **diablo-ii-resurrected-logo.png**
   - Diablo II: Resurrected logo
   - Transparent background preferred

### Optional/Alternative Images:
- Any promotional artwork from shipped titles (if allowed)
- Generic pipeline/tools imagery (non-proprietary)
- Blizzard Entertainment logo

---

## Federico Solmi Studio

**Directory:** `assets/img/federico-solmi/`

### Required Images:

1. **thumbnail.jpg** (CRITICAL - for portfolio grid)
   - Used as the main thumbnail in the portfolio grid
   - Recommended size: 600x450px
   - Suggested: Use one of the striking NFT images or a composite

### NFT Projects (4 images):

2. **nft-elon-kim.jpg**
   - "The Painter and the Model"
   - Elon Musk painting Kim Kardashian

3. **nft-kim-runway.jpg**
   - "The Runway Model"
   - Kim Kardashian on futuristic runway

4. **nft-buffett.jpg**
   - "The Mechanical Magnate"
   - Warren Buffett on mechanical bull

5. **nft-vitalik.jpg**
   - "The Equestrian"
   - Vitalik Buterin on Trojan horse

### AI/Technical Work:

6. **ai-texture-process.jpg**
   - Before/after of AI texture generation
   - Or process diagram showing the workflow
   - Could be a composite showing hand-painted → AI generated

### Character Renders (4 images):

7. **character-elon.jpg**
   - Elon Musk as Siegfried (Der Niebelungen)

8. **character-vitalik.jpg**
   - Vitalik Buterin as Tin Man (Wizard of Oz)

9. **character-kim.jpg**
   - Kim Kardashian as Metropolis robot

10. **character-zuckerberg.jpg**
    - Mark Zuckerberg as Renaissance archer

### Optional Images:
- **book-ship-of-fools.jpg** - Book cover
- **book-metaverse.jpg** - Escape Into The Metaverse book cover
- **vrchat-screenshot.jpg** - The Brotherhood VRChat experience
- **ar-bacchanalian.jpg** - AR experience screenshots
- **trellis-gui.jpg** - Screenshot of the TRELLIS tool GUI

---

## GATT Expansion (Future)

**Directory:** `assets/img/gatt-expansion/`

Future images for GATT expansion content:
- Progress reels
- Concept art
- Comic panels
- Storyboards
- Destructive Finish screenshots

*(Not needed immediately - focus on Blizzard & Federico Solmi first)*

---

## Quick Start Guide

### Step 1: Download Images from Google Drive
Download all relevant images from your Google Drive folder.

### Step 2: Organize Images
Place images in the correct folders:
```
assets/img/
├── blizzard/
│   ├── thumbnail.jpg
│   ├── diablo-iv-logo.png
│   ├── vessel-of-hatred-logo.png
│   └── diablo-ii-resurrected-logo.png
└── federico-solmi/
    ├── thumbnail.jpg
    ├── nft-elon-kim.jpg
    ├── nft-kim-runway.jpg
    ├── nft-buffett.jpg
    ├── nft-vitalik.jpg
    ├── ai-texture-process.jpg
    ├── character-elon.jpg
    ├── character-vitalik.jpg
    ├── character-kim.jpg
    └── character-zuckerberg.jpg
```

### Step 3: Image Specifications

**Thumbnails:**
- Recommended: 600x450px (4:3 ratio)
- Format: JPG or PNG
- File size: Keep under 200KB for fast loading

**Detail Images:**
- Recommended: 1920px width (or larger)
- Format: JPG for photos, PNG for logos/graphics
- File size: Optimize for web (under 500KB each)

### Step 4: Test
Once images are in place:
1. Run `npm run build`
2. Open portfolio.html
3. Check that thumbnails appear in grid
4. Click to verify detail images load

---

## Placeholder Images

Until you add real images, the portfolio entries will show:
- ❌ Broken image placeholders
- ✅ All text content and structure will work
- ✅ Filtering will work
- ✅ Featured section will work

The site is functional, just needs images!

---

## Priority Order

**High Priority (needed first):**
1. Blizzard thumbnail.jpg
2. Federico Solmi thumbnail.jpg

**Medium Priority:**
3. Diablo logos (3 images)
4. NFT images (4 images)

**Low Priority:**
5. Character renders
6. Technical/process images
7. Optional images

---

## Notes

- Images with transparent backgrounds work best for logos
- Keep file sizes reasonable for web performance
- You can add more images later - the media array is easy to expand
- If an image is missing, it will just show a broken image icon (portfolio still works)
