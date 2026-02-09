# App Icons

Add your PWA icons to this directory:

## Required Files

1. **icon-192x192.png** - 192x192 pixel PNG image
2. **icon-512x512.png** - 512x512 pixel PNG image

## Icon Generation Tools

You can generate icons from a single image using these tools:

- [Favicon Generator](https://www.favicon-generator.org/)
- [PWA Asset Generator](https://www.npmjs.com/package/pwa-asset-generator)
- [Icon Kitchen](https://www.icon.kitchen/)

## Recommended Specifications

- Use PNG format with transparent background (for best results)
- Ensure your design works well at 192x192 and 512x512 sizes
- Use clear, simple designs for better appearance on device home screens
- Minimum safe area: 100x100 pixels at center (avoid corners for cropping safety)

## Command Line Generation

If you have ImageMagick installed:

```bash
convert original-icon.png -resize 192x192 icons/icon-192x192.png
convert original-icon.png -resize 512x512 icons/icon-512x512.png
```

## Or use pwa-asset-generator with npm:

```bash
npm install -g pwa-asset-generator
pwa-asset-generator ./your-icon.png ./icons icon
```
