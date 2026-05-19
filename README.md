# Ghanashyam Govind T — Portfolio

Personal portfolio built with **React + Vite**, deployed on **Vercel**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── projects.js        ← Add your projects here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click Deploy ✅

## ✏️ Customization

### Add a new project → `src/data/projects.js`
```js
{
  id: 2,
  title: "Project Name",
  subtitle: "Short subtitle",
  description: "Description here...",
  tech: ["React", "Node.js"],
  highlights: ["Feature 1", "Feature 2"],
  github: "https://github.com/...",
  live: "https://your-live-site.com",
  featured: false,
}
```

### Change accent color → `src/index.css`
```css
--accent: #00ff87;  /* Change this to any color */
```

## 🛠 Tech Stack

- React 18
- Vite 5
- Pure CSS (no framework)
- Google Fonts: Syne + DM Mono
