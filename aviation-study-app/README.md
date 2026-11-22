# Aviation Study App (PWA)

A mobile-friendly Progressive Web App for studying aviation knowledge.

## Features

- **Flashcards** – 38 cards across 6 categories (Aerodynamics, Weather, Navigation, Regulations, Systems, Performance)
- **Quizzes** – Multiple-choice questions with instant feedback and scoring
- **Progress tracking** – Cards studied, quizzes taken, and best score (saved in localStorage)
- **Fully offline** – Service worker caches the entire app shell
- **Installable** – Add to home screen on iOS and Android

## Project Structure

```
.
├── index.html
├── css/styles.css
├── js/app.js
├── icons/               # App icons (192, 512, Apple Touch, favicons)
├── manifest.json
├── service-worker.js
├── package.json
└── README.md
```

## Run Locally

```bash
npx serve .
# or
npm start
```

Open `http://localhost:3000`.  
Service workers require localhost or HTTPS.

## Install on Device

- **Android / Chrome**: Use the browser install prompt or menu → “Install app”
- **iOS Safari**: Share → Add to Home Screen

## Customizing Content

All study content lives in `js/app.js`:

- `CATEGORIES` – topic list
- `CARDS` – flashcard questions & answers
- `QUIZ_BANK` – multiple-choice questions

Add or edit entries and the app will pick them up automatically.
