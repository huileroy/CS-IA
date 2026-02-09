# PWA Quick Reference

## Files Overview

| File | Purpose |
|------|---------|
| `index.html` | Main app page - entry point for users |
| `app.js` | Service worker registration & install logic |
| `service-worker.js` | Offline support, caching strategy |
| `styles.css` | UI styling and responsive design |
| `manifest.json` | PWA metadata, icons, installability |
| `package.json` | Project info and npm scripts |
| `.nojekyll` | Tells GitHub not to use Jekyll (required for PWA) |
| `.gitignore` | Specifies files to exclude from git |
| `.github/workflows/deploy.yml` | GitHub Actions deployment automation |
| `README.md` | Main documentation |
| `DEPLOYMENT_GUIDE.md` | Step-by-step GitHub Pages deployment |

## Quick Start Checklist

- [ ] Test locally: `python -m http.server 8000` then visit `localhost:8000`
- [ ] Check Service Worker in DevTools → Application tab
- [ ] Verify offline mode works (DevTools → Network → Offline)
- [ ] Add custom icons to `icons/` folder (192x192 and 512x512 png)
- [ ] Update `manifest.json` with your app name and colors
- [ ] Update `index.html` with your app content
- [ ] Initialize git: `git init`
- [ ] Create GitHub repo
- [ ] Push code: Follow DEPLOYMENT_GUIDE.md steps
- [ ] Enable GitHub Pages in repository Settings → Pages
- [ ] Test deployed site with install prompt

## Common Customizations

### Change App Name
Edit `manifest.json`:
```json
"name": "Your App Name",
"short_name": "Short Name"
```

### Change App Color
Edit `manifest.json` and `index.html`:
```json
"theme_color": "#your-color"
```

### Update Cache Version
Edit `service-worker.js`:
```javascript
const CACHE_NAME = 'pwa-cache-v2'; // increment version
```

### Add New Pages
1. Create `about.html`, `contact.html`, etc.
2. Add to `urlsToCache` in `service-worker.js`
3. Update navigation in `index.html`

## Testing Checklist

- **Installation**: Click install button (Chrome, Edge)
- **Offline**: DevTools → Network → Offline → refresh
- **Cache**: DevTools → Application → Cache Storage
- **Manifest**: DevTools → Application → Manifest
- **Service Worker**: DevTools → Application → Service Workers
- **Responsive**: Test on mobile screen sizes

## Performance Tips

1. **Minimize assets** - Compress images, minify CSS/JS
2. **Optimize cache** - Don't cache large files unnecessarily
3. **Update strategy** - Update `CACHE_NAME` to force refresh
4. **Test connection** - Use DevTools throttling to test slow networks

## Useful Links

- [MDN PWA Guide](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [GitHub Pages Docs](https://pages.github.com/)
- [Web.dev PWA Learning Path](https://web.dev/progressive-web-apps/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
