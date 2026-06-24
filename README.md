# AI Mastery

Landing page vitrine pour **AI Mastery**, une plateforme de formations premium en intelligence artificielle.

Construite avec Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 et Framer Motion.

## Fonctionnalités

- **5 formations IA** : Agents IA, Prompt Engineering, RAG & Bases Vectorielles, Automatisation IA, Fine-tuning LLM
- **3 packs** : Starter, Pro, Ultimate avec économies progressives
- **Page détail** pour chaque formation avec métadonnées dynamiques
- **Animations** fluides (Framer Motion, compteurs animés, shaders WebGL2)
- **Design responsive** dark mode natif
- **Pages statiques** via `generateStaticParams`

## Stack

| Technologie         | Version |
| ------------------- | ------- |
| Next.js (App Router)| 16.2.9  |
| React               | 19.2.4  |
| TypeScript          | 5.x     |
| Tailwind CSS        | 4.x     |
| Framer Motion       | 12.x    |
| Vitest + Testing Library | 3.x / 16 |

## Scripts

```bash
npm run dev            # Développement
npm run build          # Build production
npm run start          # Serveur production
npm run lint           # ESLint
npm run typecheck      # TypeScript --noEmit
npm run format         # Prettier --write
npm run format:check   # Prettier --check
npm run test           # Tests unitaires (Vitest)
npm run test:watch     # Tests en mode watch
npm run test:coverage  # Rapport de couverture
```

## Structure

```
src/
├── app/                        # Routes App Router
│   ├── page.tsx                # Accueil (Hero → CTA)
│   ├── layout.tsx              # Layout racine (Header + Footer)
│   ├── checkout/page.tsx       # Page de confirmation
│   └── formations/[slug]/      # Pages détail formation
├── components/
│   ├── ui/                     # Primitives (Button, Badge, GradientText…)
│   ├── Header, Hero, …         # Sections de la page
│   └── CybercoreBackground, …  # Composants décoratifs
├── lib/
│   ├── formations.ts           # Données + helpers
│   ├── testimonials.ts         # Témoignages
│   └── utils.ts                # cn() (clsx + tailwind-merge)
└── __tests__/                  # Setup global (mocks Vitest)
```

## Tests

**106 tests unitaires** — 20 fichiers, tout vert.

- **Librairies** — `cn()`, intégrité données formations/témoignages, `getFormationBySlug()`
- **Composants UI** — variantes, tailles, refs, événements
- **Sections** — rendu et interactions (accordéon FAQ, menu mobile)
- **Pages** — métadonnées, `generateStaticParams`, rendu complet

```bash
npm run test
npm run test:coverage
```

## Prérequis

- Node.js >= 20

## Installation

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Déploiement

Déploiement recommandé sur [Vercel](https://vercel.com/).
