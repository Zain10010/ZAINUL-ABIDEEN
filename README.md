# ⚡ Zainul Abideen N K P — Personal Portfolio Website

[![Live Deployment](https://img.shields.io/badge/Live_Site-zainul--abideen.vercel.app-6285FF?style=for-the-badge&logo=vercel)](https://zainul-abideen.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Zain10010-00F0FF?style=for-the-badge&logo=github)](https://github.com/Zain10010/ZAINUL-ABIDEEN)

A premium dark luxury personal portfolio website built for **Zainul Abideen N K P (Zain)** — AI/ML Engineer, Python Developer, and Quantum Computing Researcher.

🌐 **Live URL**: [https://zainul-abideen.vercel.app/](https://zainul-abideen.vercel.app/)

Built with **React.js**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 💎 Design Direction: Dark Luxury + Modern Bento Grid

- **Aesthetic**: Premium high-tech, futuristic, and clean.
- **Color Palette**:
  - Background: `#08090D` (Deep Void Black)
  - Secondary: `#101218`
  - Cards: `#151820` (Glassmorphism Bento Cards with subtle borders & glows)
  - Accent: Electric Blue `#6285FF` & Cyan Electric `#00F0FF`
  - Text: High-contrast `#F5F5F5` and muted `#A1A1AA`
- **Typography**: Inter / Geist sans-serif with bold oversized hero titles.

---

## 📸 Adding Your Personal Photograph

Your portfolio has a dedicated luxury portrait frame in the Hero section with ambient lighting, glowing ring, and floating badges.

To place your actual photograph:
1. Save your high-resolution portrait photograph as:
   ```
   public/images/zain-profile.jpg
   ```
2. The portfolio will automatically display your natural photograph with professional lighting and rounded luxury borders!

---

## 📄 Updating Your Resume PDF

The "Download Resume" buttons across the navbar, hero, and contact sections download:
```
public/resume/Zainul_Abideen_Resume.pdf
```
Replace that file with your updated PDF at any time.

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18+ recommended)
- **npm** or **pnpm**

### 2. Running Locally
```bash
# Start development server
npm run dev

# Or build and preview production bundle
npm run build
npm run preview
```
Visit `http://localhost:3000/` in your browser.

---

## 📂 Project Architecture

```
PORTFOLIO/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── zain-profile.jpg            <-- Drop your photo here!
│   │   ├── zain-placeholder.svg
│   │   ├── projects/
│   │   │   ├── qml-cancer.svg          <-- Flagship QML Research Graphic
│   │   │   ├── alumni-portal.svg
│   │   │   ├── citizen-ai.svg
│   │   │   └── sgpa-calc.svg
│   │   └── achievements/
│   │       └── aihc-2025.svg           <-- AIHC 2025 NIT Calicut Graphic
│   └── resume/
│       └── Zainul_Abideen_Resume.pdf   <-- Your downloadable resume
├── src/
│   ├── components/
│   │   ├── BackgroundEffects.tsx       <-- Ambient radial lights & cyber grid
│   │   ├── Navbar.tsx                  <-- Glassmorphic header with active indicator
│   │   ├── Hero.tsx                    <-- Hero with portrait & floating badges
│   │   ├── About.tsx                   <-- Biography & 3 Bento info cards
│   │   ├── Education.tsx               <-- Dual-sided academic timeline
│   │   ├── Skills.tsx                  <-- Categorized skill cards (no fake percentages)
│   │   ├── Projects.tsx                <-- Flagship research + 3 major projects
│   │   ├── ProjectModal.tsx            <-- In-depth project case study modal
│   │   ├── Research.tsx                <-- Quantum ML research section
│   │   ├── QuantumVisualizer.tsx       <-- Interactive circuit simulator
│   │   ├── Experience.tsx              <-- Technical projects & student leadership
│   │   ├── Certifications.tsx          <-- Azure, GCP, IBM, Tata, IIT Bombay, Great Learning
│   │   ├── Achievements.tsx            <-- AIHC 2025 NIT Calicut & honors
│   │   ├── Contact.tsx                 <-- Form with confetti & direct mailto
│   │   ├── Footer.tsx                  <-- Minimalist footer & back-to-top
│   │   └── ResumeModal.tsx             <-- Resume quick-view modal
│   ├── data/                           <-- Clean, easily editable data models
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── research.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── certifications.ts
│   │   └── achievements.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🌐 1-Click Deployment to Vercel / Netlify

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of premium portfolio"
   git remote add origin https://github.com/zainulabideen05/portfolio.git
   git push -u origin main
   ```
2. Import the repository into **Vercel** or **Netlify**.
3. Deploy! Vite will automatically build the optimized production assets.

