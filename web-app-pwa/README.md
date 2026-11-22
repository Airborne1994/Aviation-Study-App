# Standard Web Application (PWA)

A clean, framework-free Progressive Web Application with full install support for iOS and Android.

## Features

- Responsive, modern UI
- Progressive Web App (PWA) support
  - Web App Manifest (`manifest.json`)
  - Service Worker for offline caching
  - Installable on home screen (iOS & Android)
- Placeholder app icons (192px, 512px, Apple Touch Icon, favicons)
- Online/offline status detection
- Install prompt handling

## Project Structure

```
.
├── index.html              # Main entry point
├── css/
│   └── styles.css          # Application styles
├── js/
│   ├── app.js              # Main logic + PWA install handling
│   └── utils.js            # Shared helpers
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── apple-touch-icon.png
│   ├── favicon-32.png
│   └── favicon-16.png
├── manifest.json           # Web App Manifest
├── service-worker.js       # Offline caching + PWA requirements
├── package.json
└── README.md
```

## How to Run Locally

Because service workers and the install prompt require a secure context (HTTPS or localhost), the easiest way is:

```bash
npx serve .
# or
npm start
```

Then open the URL shown (usually `http://localhost:3000`).

## Installing the App

1. Open the app in Chrome, Edge, or Safari (on a supported device).
2. Look for the browser’s “Install” / “Add to Home Screen” option, or use the in-app **Install App** button when it appears.
3. On iOS Safari: Share → Add to Home Screen.

## Customizing

- Update `manifest.json` (name, colors, icons, start_url).
- Replace the icons in the `icons/` folder with your own (keep the same filenames or update the manifest).
- Edit the service worker cache list if you add more assets.
- Style and content live in `css/styles.css` and `index.html`.

## Notes

- Service workers only work over HTTPS (or `localhost`).
- The install prompt (`beforeinstallprompt`) is currently limited to Chromium-based browsers. iOS uses “Add to Home Screen”.
- This is a static vanilla JS project — no build step required.
