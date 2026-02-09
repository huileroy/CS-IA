# GitHub Pages Deployment Guide

## Step-by-Step Deployment Instructions

### Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial PWA commit"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in top right → "New repository"
3. Name your repository (e.g., `my-pwa`)
4. Choose "Public" for GitHub Pages on free tier
5. Click "Create repository"

### Step 3: Push to GitHub

Copy the commands from your repository page and run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select **main** and **/ (root)**
   - Click **Save**

### Step 5: Wait for Deployment

1. Go to **Actions** tab in your repository
2. Wait for the workflow to complete (green checkmark ✓)
3. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO`

### Step 6: Verify Deployment

- Visit your site URL
- Open DevTools (F12) → Application → Manifest - should show your manifest.json
- Check Service Workers section
- Test offline mode by setting Network to "Offline"

## Troubleshooting

### Site appears blank
- Wait 5-10 minutes for GitHub Pages to process
- Check Actions tab for failed workflows
- Verify `.nojekyll` file exists in repo

### Service Worker not working
- Ensure site is accessed via HTTPS (GitHub Pages provides this automatically)
- Clear browser cache and hard refresh (Ctrl+Shift+R)
- Check browser console for errors

### Can't see custom domain instructions
- Your repository must be public
- Free GitHub accounts can only use `username.github.io/repo-name` format

## Custom Domain (Optional)

To serve PWA from custom domain (e.g., mypwa.com):

1. In repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Update your domain's DNS records to point to GitHub Pages IP
4. GitHub will handle HTTPS certificate automatically

## Updates

Simply push new changes to main branch:

```bash
git add .
git commit -m "Update PWA"
git push
```

GitHub Actions will automatically rebuild and deploy!

## Cache Busting

After deployment, if users see old versions:

1. Increment `CACHE_NAME` in `service-worker.js`
2. Commit and push
3. Users will get fresh cache on next visit

Example:
```javascript
// Change from:
const CACHE_NAME = 'pwa-cache-v1';
// To:
const CACHE_NAME = 'pwa-cache-v2';
```

## Monitoring

Check your deployment status anytime:
1. Go to Actions tab
2. See all past deployments
3. Click on any deployment to see details

---

Your PWA is now deployed! Users can visit your site and install it as an app on their devices.
