# Progressive Web App (PWA)

A Progressive Web App starter template with offline support, service worker, and GitHub Pages deployment.

## Features

- ✅ Offline-first with Service Worker
- 📱 Installable on mobile and desktop
- 🚀 Ready for GitHub Pages deployment
- 💾 Cache-first strategy for better performance
- 📱 Responsive design
- 🎨 Modern UI with gradient theme

## Project Structure

```
├── index.html           # Main HTML entry point
├── app.js              # Service worker registration & install logic
├── service-worker.js   # Service worker implementation
├── styles.css          # Styling
├── manifest.json       # Web app manifest
├── package.json        # Project metadata
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
└── icons/              # Directory for app icons
```

## Setup Instructions

### 1. Local Development

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npm install -g http-server
http-server
```

Then open `http://localhost:8000` in your browser.

### 2. Add App Icons

Replace placeholder icons in the `icons/` directory:
- `icon-192x192.png` - 192x192 pixels
- `icon-512x512.png` - 512x512 pixels

### 3. Customize the PWA

Edit these files to personalize your app:
- `manifest.json` - Update name, short_name, theme_color, etc.
- `index.html` - Update app title and content
- `styles.css` - Modify colors and styling

### 4. Deploy to GitHub Pages

**Option A: Automatic Deployment (Recommended)**

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial PWA commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository Settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose branch: **main**
   - Select folder: **/ (root)**
   - Click Save

3. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically deploy on push.

**Option B: Manual GitHub Pages Setup**

1. In repository Settings → Pages
2. Select the branch and folder
3. Wait for GitHub to build and deploy

Your PWA will be available at: `https://USERNAME.github.io/REPO_NAME`

## Testing the PWA

1. **Service Worker**: Open DevTools → Application → Service Workers
2. **Offline Mode**: DevTools → Network → Offline, then refresh
3. **Install Prompt**: Look for install button on supported browsers (Chrome, Edge, etc.)
4. **Manifest**: DevTools → Application → Manifest

## Browser Support

- Chrome/Edge: Full PWA support
- Firefox: Service Worker only
- Safari: Limited PWA support (iOS 15.1+)

## Troubleshooting

**Service Worker not registering?**
- Check browser console for errors
- Ensure HTTPS is enabled (required for production)
- Clear cache in DevTools → Application → Clear storage

**App not installable?**
- Must have valid manifest.json
- Must have icons of correct sizes
- Must be served over HTTPS (localhost works for testing)

**GitHub Pages not updating?**
- Check workflow status in Actions tab
- Verify branch is set correctly in Pages settings
- Wait a few minutes for deployment to complete

## Performance Tips

- Minimize assets and images
- Use efficient caching strategies
- Regular cache versioning in service-worker.js
- Test on real devices with slow connections

## License

MIT

## References

- [MDN PWA Documentation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Web.dev PWA guide](https://web.dev/progressive-web-apps/)
- [GitHub Pages Documentation](https://pages.github.com/)
