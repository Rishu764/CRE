# CRE — Centre for Resource Management & Environment

Official website for **Dr. V.K. Bahuguna**, Indian Forest Service (IFS) (Retd.), 1979 Batch — Former Director General, Indian Council of Forestry Research & Education (ICFRE) & Chancellor, Forest Research Institute (FRI) Deemed University.

## About

This website showcases the distinguished career, publications, international exposure, and contributions of Dr. V.K. Bahuguna across forestry, ecology, governance, and tribal development. It serves as the digital presence for the **Centre for Resource Management & Environment (CRE)**.

## Pages

- **Home** — Overview with hero, key issues, impact stats, leadership preview, publications preview, and CTA
- **Leadership** — Full profile with career timeline, awards & honours, international exposure, qualifications, and present positions
- **Publications** — 200+ publications across Policy & Institutional, Technical Research, Columnist & Freelance YouTube Journalism, and Books & Bulletins
- **Gallery** — Photo archive across multiple categories

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── page.tsx              # Home page
├── leadership/page.tsx   # Leadership profile
├── publications/page.tsx # Publications archive
├── gallery/page.tsx      # Photo gallery
├── layout.tsx            # Root layout
└── globals.css           # Global styles

components/
├── Navbar.tsx            # Navigation bar
├── Footer.tsx            # Footer
├── InternationalExposure.tsx  # International visits section
├── home/                 # Home page components
│   ├── HeroSection.tsx
│   ├── AboutPreview.tsx
│   ├── ImpactStats.tsx
│   ├── KeyIssuesSection.tsx
│   ├── LeadershipPreview.tsx
│   ├── PublicationsPreview.tsx
│   ├── TimelineSection.tsx
│   ├── WorkshopHighlight.tsx
│   └── CTASection.tsx
└── gallery/              # Gallery components

data/
└── gallery.ts            # Gallery image data

public/
├── author.png            # Profile photo
├── logo.png              # CRE logo
├── hero-bg.jpg           # Hero background
└── ...                   # Other assets
```

## Design System

- **Primary Colors**: Green palette (#1b4332, #2d6a4f, #52b788, #74c69d)
- **Accent**: Gold/Amber (#e9c46a) — used sparingly
- **Dark Backgrounds**: #0a0f0d, #0a1a14, #0f1f18
- **Light Backgrounds**: White, #f8fafc, gray-50
- **Typography**: System font stack with black (900) for headings, semibold for labels
- **Icons**: Lucide React throughout

## Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Author

**Dr. V.K. Bahuguna**  
Chairman, Centre for Resource Management & Environment (CRE) and Ujan Vikas Manch  
Contact: bahugunaifs@gmail.com · 9810405137 / 9412057333
