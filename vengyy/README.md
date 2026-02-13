# Valentine's Day Website 💕

A romantic, single-page website built with vanilla HTML, CSS, and JavaScript.

## Features

- 5-slide romantic journey
- Soft green and sakura pink aesthetic
- Falling sakura petal animations
- Pixel-style decorative elements
- Manual navigation (buttons, indicators, keyboard)
- Interactive final question with celebration

## Local Setup

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. Navigate through slides using:
   - Next/Back buttons
   - Indicator dots
   - Arrow keys (← →)

## GitHub Pages Setup

1. Create a new repository on GitHub
2. Upload all files maintaining the folder structure
3. Go to Settings → Pages
4. Set Source to "main" branch
5. Your site will be live at: `https://[username].github.io/[repository-name]`

## File Structure

```
valentine-site/
│
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All styling
├── scripts/
│   └── main.js            # Slideshow logic & interactions
└── README.md              # This file
```

## Customization

### Colors
Edit CSS variables in `styles/main.css`:
```css
:root {
    --soft-green: #a8d5ba;
    --sakura-pink: #ffb7c5;
    --cream: #fef8f0;
}
```

### Content
Edit text directly in `index.html` within each slide's content.

### Slide Count
If adding/removing slides:
1. Update `totalSlides` in `scripts/main.js`
2. Add/remove slide indicators in HTML
3. Add/remove slide divs in HTML

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- Desktop-only design (no mobile responsive)
- No external dependencies
- All animations use CSS only
- JavaScript handles navigation and interactions only

---

Made with 💕 for someone special
