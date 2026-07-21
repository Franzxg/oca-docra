# Oca d'Ocra — Illustrator Portfolio Website

Repository: [github.com/Franzxg/oca-docra](https://github.com/Franzxg/oca-docra)

A personal portfolio website built for an illustrator friend, showcasing her illustration projects and short stories ("Almanacco dell'Oca"). This project was also my first hands-on experience with React, and I used it as a learning ground for concepts like component-based architecture, client-side routing, and responsive design.

> **Status:** In development — not yet deployed.

## About the project

The site is built with **React** and **Vite**, using **React Router** in Framework Mode for file-based routing, data loading, and layout composition. The UI combines custom CSS with **Material UI (MUI)** components for interactive elements like cards and icons.

The goal was to create a clean, editorial-style site that lets the illustrator showcase her work (illustration projects and short stories) and stay independent from third-party platforms, while keeping the codebase simple enough for a first React project.

## Features

- **Home page** with logo and navigation menu, laid out side by side on desktop and stacked on smaller screens
- **Illustrations gallery** — project cards linking to individual project pages, each with a custom-built lightbox gallery (click an image to enlarge it, with captions, fade and zoom transitions, and keyboard/`Esc` support)
- **Almanacco dell'Oca (Short stories)** — story cards linking to individual story pages, with content written in Markdown and rendered client-side with `react-markdown`, so text and inline illustrations can be mixed freely inside each story
- **Contact page** with a contact form and social links (Instagram, Behance, Substack, Ko-fi)
- **Biography page**
- **Responsive navigation bar**: full horizontal menu on desktop, a two-row wrapped menu on tablet, and a collapsible hamburger menu with animated dropdown on mobile
- **Consistent theming**: shared color palette and typography (Google Fonts' PT Serif, self-hosted via `@fontsource`) applied across both custom components and MUI components through a shared MUI theme

## Tech stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) v8 (Framework Mode, client-side rendering — SSR disabled)
- [Material UI (MUI)](https://mui.com/) + `@mui/icons-material`
- [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm)
- [Fontsource](https://fontsource.org/) (self-hosted PT Serif, no external font requests)

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/illustrazioni` | Illustrations gallery |
| `/illustrazioni/:slug` | Single illustration project, with image gallery |
| `/racconti` | Almanacco dell'Oca (short stories list) |
| `/racconti/:slug` | Single short story (Markdown content) |
| `/biografia` | Biography |
| `/contatti` | Contact form and social links |

Routes are defined explicitly in `src/routes.jsx` (not auto-generated from the file system).

## Responsive breakpoints

The layout follows MUI's default breakpoint scale, used consistently across custom CSS and the MUI theme:

| Breakpoint | Width | Notes |
|---|---|---|
| `xl` | ≥ 1536px | |
| `lg` | 1200–1535px | |
| `md` | 900–1199px | Navbar links wrap onto two rows |
| `sm` | 600–899px | |
| `xs` | < 600px | Navbar collapses into a hamburger menu |

## Project structure

```
src/
├── components/       # Reusable components (Navbar, Footer, cards, sections, lightbox gallery, etc.)
├── data/             # Static content data (illustrations and stories metadata, as JS modules)
├── imgs/             # Illustration images and story assets (not tracked in git)
├── racconti-content/ # Markdown source files for each short story
├── routes/           # Page components, one file per route, referenced in routes.jsx
├── theme.js           # Shared MUI theme (typography, palette, breakpoints)
├── root.jsx           # Root layout (Navbar/Footer, ThemeProvider, global font imports)
├── routes.jsx         # Explicit route configuration
├── App.css            # Global custom styles
└── index.css          # CSS variables and base/reset styles
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 22 or later
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Franzxg/oca-docra.git
   cd oca-docra
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (typically `http://localhost:5173`) in your browser.

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Previews the production build locally |

## Notes on assets

Illustration and story images are kept out of version control (see `.gitignore`) to keep the repository lightweight and to avoid distributing the artist's original, unwatermarked files through the git history. These assets need to be provided separately when setting up the project locally or preparing it for deployment.

## Try the demo

This repository does **not** include the artist's real illustrations and stories: the `src/imgs/illustrazioni/` and `src/imgs/racconti/` folders are excluded via `.gitignore`, since that content belongs to the artist and isn't meant to be publicly redistributed.

To run a fully working local demo instead, a set of placeholder assets is available here:

**[Demo assets folder (Google Drive)](https://drive.google.com/drive/folders/10FufIr4ocfwNDJP6ffQGK-eY-NQUVwCI?usp=sharing)**

The folder mirrors the exact file structure and filenames the code expects, so no code changes are required:

1. Download the folder from the link above.
2. Place its contents inside `src/imgs/`, matching the existing subfolder structure (`illustrazioni/`, `racconti/`).
3. Run `npm install && npm run dev` as usual.

**What's inside:** the illustration and story cover images are free, openly-licensed stock photos (via [Lorem Picsum](https://picsum.photos/), sourced from Unsplash, free for any use with no attribution required), used purely as visual placeholders. The short stories are replaced with generic Latin placeholder text — none of the artist's original writing is included.

**What's *not* a placeholder:** the site logo (`logo-home.png`) is the artist's real, original artwork, and it **is** included in this repository as-is. Unlike the illustrations and stories, the logo is the site's own visual identity rather than a piece of the artist's personal portfolio — replacing it with a generic placeholder would misrepresent the site's actual branding and defeat the purpose of a demo, so it was kept unchanged.

## Roadmap

- [ ] Deploy the site
- [ ] Hook up the contact form to an actual email-sending service (e.g. Formspree, Web3Forms, or EmailJS), so submissions reach the artist directly instead of only being logged to the console
- [ ] Add multi-language support (Italian/English), likely via `react-i18next` or a similar library
- [ ] Review accessibility (focus states, alt text coverage, color contrast)

## License

No license has been assigned yet. All illustration and story content belongs to the artist and is not to be reused or redistributed without permission. The source code itself may be licensed at a later stage.

## Author's note

This is a personal project built while learning React from scratch — some implementation choices reflect that learning process rather than production-grade conventions, and the codebase is still evolving as new features are added.
