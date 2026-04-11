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

### EmailJS

Update credentials in `src/constants.js`:

```js
export const EMAIL_JS_SERVICE_ID = 'your_service_id';
export const EMAIL_JS_TEMPLATE_ID = 'your_template_id';
export const EMAIL_JS_PUBLIC_KEY  = 'your_public_key';
```

### Netlify Forms

The contact form is pre-configured with `data-netlify="true"` and `name="contact"`. Netlify automatically detects it on deploy — no additional setup needed. View submissions in your Netlify dashboard under **Forms**.

### GitHub Projects

The GitHub username is set in `src/components/Projects.jsx`:

```js
const GITHUB_USER = 'sameetpathan';
```

> **Note:** The GitHub API token is currently hardcoded in `Projects.jsx`. For production, move it to a `.env` file:
> ```
> REACT_APP_GITHUB_TOKEN=your_token_here
> ```
> Then reference it as `process.env.REACT_APP_GITHUB_TOKEN`.

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
