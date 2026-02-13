# Adding Your Own Images

This guide explains how to add personal photos and custom images to your Valentine's website.

## Image Folders

- `assets/images/photos/` - Personal photos (polaroid-style display)
- `assets/images/cats/` - Pixel cat images (decorative)
- `assets/images/sakura/` - Sakura/cherry blossom images
- `assets/icons/` - Small icons or emoji alternatives

## Adding Photos to Slides

### Example: Adding a photo to Slide 2 (Favorites)

1. Add your image to `assets/images/photos/`
2. In `index.html`, find Slide 2 and add after the favorites-grid:

```html
<div class="photo-container">
    <img src="assets/images/photos/your-photo.jpg" alt="Special memory" class="polaroid-photo">
    <p class="photo-caption">Caption here</p>
</div>
```

3. Add this CSS to `styles/main.css`:

```css
.photo-container {
    text-align: center;
    margin-top: 2rem;
}

.polaroid-photo {
    max-width: 300px;
    border: 10px solid white;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    transform: rotate(-2deg);
}

.photo-caption {
    font-style: italic;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    color: var(--text-light);
}
```

## Replacing Pixel Cats with Real Images

If you have cute cat illustrations:

1. Save cat images as `cat-left.png` and `cat-right.png` in `assets/images/cats/`
2. Replace the CSS-drawn cats in `main.css`:

```css
.decorative-cat {
    position: absolute;
    width: 60px;
    height: 60px;
    background-image: url('../assets/images/cats/cat-left.png');
    background-size: contain;
    background-repeat: no-repeat;
}

.right-cat {
    background-image: url('../assets/images/cats/cat-right.png');
}

/* Remove the ::before and ::after pseudo-elements */
.decorative-cat::before,
.decorative-cat::after {
    display: none;
}
```

## Image Optimization Tips

- **Format**: Use JPG for photos, PNG for graphics with transparency
- **Size**: Resize images to max 1000px width before uploading
- **File size**: Keep under 500KB per image for fast loading
- **Names**: Use simple names without spaces (use-hyphens-like-this.jpg)

## Adding Background Images

To use a custom background instead of the gradient:

```css
body {
    background-image: url('../assets/images/background.jpg');
    background-size: cover;
    background-position: center;
}
```

## Testing

After adding images:
1. Open `index.html` in your browser
2. Check browser console (F12) for any loading errors
3. Verify images display correctly on all slides

---

Need help? The current design works perfectly without any images, but adding personal photos makes it even more special!
