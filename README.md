# Sameet Pathan — Personal Portfolio

A modern, fully responsive personal portfolio built with React.js, Tailwind CSS, and Framer Motion. Features a dark/light mode toggle, animated UI, live GitHub project feed, and a Netlify-powered contact form.

**Live Site:** [sameetpathan.netlify.app](https://sameetpathan.netlify.app) <!-- update if URL differs -->

---

## Features

- **Animated Hero Section** — typewriter role switcher, gradient orbs, CTA buttons
- **Dark / Light Mode** — toggles instantly, persists to `localStorage`
- **Animated Loading Screen** — SP logo with progress bar on first load
- **Glassmorphism UI** — cards with `backdrop-blur`, gradient borders, hover lifts
- **Scroll Animations** — every section reveals with Framer Motion `whileInView`
- **Experience Timeline** — collapsible cards with tech tags, alternating desktop layout
- **Live GitHub Projects** — fetches repos, languages, stars, and forks via GitHub API
- **Contact Form** — Netlify Forms (dashboard capture) + EmailJS (instant email notification) + honeypot spam protection
- **Back-to-Top Button** — appears after scrolling 400px
- **Fully Responsive** — mobile, tablet, and desktop layouts

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Styling | Tailwind CSS v3 (dark mode via `class`) |
| Animations | Framer Motion |
| Routing | React Router v6 |
| Forms | Netlify Forms + EmailJS |
| Icons | React Icons |
| Fonts | Inter + Poppins (Google Fonts) |
| Hosting | Netlify |

---

## Project Structure

```
src/
├── components/
│   ├── ThemeContext.jsx   # Dark/light mode context + localStorage
│   ├── LoadingScreen.jsx  # Animated splash screen
│   ├── BackToTop.jsx      # Floating scroll-to-top button
│   ├── Navbar.jsx         # Glassmorphism navbar with mobile drawer
│   ├── Home.jsx           # Hero section
│   ├── About.jsx          # Bio, skills, service cards
│   ├── Experience.jsx     # Animated work timeline
│   ├── Projects.jsx       # Live GitHub repo cards
│   ├── Contact.jsx        # Netlify + EmailJS contact form
│   ├── Footer.jsx         # Footer with social links
│   └── Background.jsx     # Three.js starfield (legacy)
├── constants.js           # All data: experiences, skills, EmailJS config
├── index.js               # App entry — ThemeProvider, LoadingScreen, routes
└── index.css              # CSS variables, Google Fonts, glassmorphism utilities
```

---

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
git clone https://github.com/sameetpathan/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

---

## Configuration

### Environment Variables

All secrets are stored in environment variables. Copy `.env.example` to `.env.local` and fill in your values — this file is gitignored and never committed.

```bash
cp .env.example .env.local
```

```env
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
REACT_APP_EMAILJS_PUBLIC_KEY=
REACT_APP_GITHUB_TOKEN=
```

**For Netlify deployment**, add the same variables in your Netlify dashboard under **Site Settings → Environment Variables**.

### Netlify Forms

The contact form is pre-configured with `data-netlify="true"` and `name="contact"`. Netlify automatically detects it on deploy — no additional setup needed. View submissions in your Netlify dashboard under **Forms**.

### GitHub Projects

The GitHub username is set in `src/components/Projects.jsx`:

```js
const GITHUB_USER = 'sameetpathan';
```

The GitHub token is optional but recommended — it raises the API rate limit from 60 to 5,000 requests/hour. Generate one at [github.com/settings/tokens](https://github.com/settings/tokens) with `public_repo` scope.

---

## Deployment

The site is deployed on **Netlify** with automatic deploys from the `main` branch.

```bash
npm run build
# Deploy the /build folder to Netlify
```

Redirects are handled via `netlify.toml` for React Router's client-side routing.

---

## Contact

**Sameet Pathan** — Lead Software Engineer  
📧 sameetpathanrs@gmail.com  
🔗 [linkedin.com/in/sameetpathan](https://www.linkedin.com/in/sameetpathan)  
💻 [github.com/sameetpathan](https://github.com/sameetpathan)  
📍 Pune, India
