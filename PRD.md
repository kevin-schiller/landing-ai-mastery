# PRD — AI Mastery

## 1. Présentation

Landing page vitrine pour **AI Mastery**, une plateforme de formations premium en intelligence artificielle.

Construite avec Next.js 16.2.9 (App Router), React 19.2.4, TypeScript 5, Tailwind CSS 4 et Framer Motion 12.

## 2. Objectifs

- Présenter 5 formations IA avec niveaux, durées et prix
- Proposer 3 packs progressifs : Starter, Pro, Ultimate
- Générer des leads et inscriptions
- Design dark mode responsive, 100% statique (SSG)
- Déploiement conteneurisé via Docker sur VPS

## 3. Audience cible

- Professionnels tech, développeurs, data scientists, chefs de produit
- Francophones cherchant à monter en compétence en IA appliquée
- Profils débutants à avancés (niveaux couverts par les formations)

## 4. Fonctionnalités (scope)

| Section          | Description                                      |
| ---------------- | ------------------------------------------------ |
| Hero             | Accroche + CTA principal                         |
| Problem/Solution | Problème → solution AI Mastery                   |
| FormationGrid    | Grille des 5 formations                          |
| PricingCards     | 3 packs Starter/Pro/Ultimate                     |
| Stats            | Chiffres clés animés                             |
| Testimonials     | Témoignages                                      |
| FAQ              | Accordéon questions/réponses                     |
| CTA              | Call-to-action final                             |
| Pages détail     | `/formations/[slug]` — description, infos, achat |
| Checkout         | Page placeholder `/checkout`                     |

## 5. Stack technique

| Technologie          | Version                    |
| -------------------- | -------------------------- |
| Next.js (App Router) | 16.2.9                     |
| React                | 19.2.4                     |
| TypeScript           | 5.x                        |
| Tailwind CSS         | 4.x                        |
| Framer Motion        | 12.x                       |
| Lucide React         | 1.x                        |
| Vitest               | 3.x                        |
| Testing Library      | 16.x                       |
| PostCSS              | 4.x (@tailwindcss/postcss) |

### Outils de développement

- ESLint (core-web-vitals + typescript)
- Prettier (no semi, single quotes, trailingComma all)
- TypeScript strict (`tsc --noEmit`)
- Vitest (jsdom, globals: true, coverage v8/lcov)

## 6. Métriques de succès

- Build et tests verts en CI
- Lighthouse Performance > 90, Accessibility > 95
- Pages statiques (SSG) — temps de chargement < 2s
- Pas d'erreurs TypeScript ni warnings ESLint

## 7. Architecture

### Routes

| Route                | Type                       | Description                 |
| -------------------- | -------------------------- | --------------------------- |
| `/`                  | SSG                        | Page d'accueil (Hero → CTA) |
| `/formations/[slug]` | SSG (generateStaticParams) | Détail formation            |
| `/checkout`          | SSG                        | Page placeholder checkout   |

### Structure du code

```
src/
├── app/                    # App Router
│   ├── layout.tsx          # Layout racine (Inter, Header, Footer)
│   ├── page.tsx            # Page d'accueil
│   ├── checkout/page.tsx   # Checkout placeholder
│   └── formations/[slug]/  # Pages détail (generateStaticParams)
├── components/
│   ├── ui/                 # Primitives (Button, Badge, GradientText)
│   └── *.tsx               # Sections (Hero, FAQ, PricingCards…)
├── lib/
│   ├── formations.ts       # Données + helpers (Formation interface)
│   ├── testimonials.ts     # Témoignages
│   └── utils.ts            # cn() (clsx + tailwind-merge)
└── __tests__/              # Setup Vitest (mocks DOM)
```

## 8. Contraintes techniques

- `output: 'standalone'` dans `next.config.ts` — obligatoire pour le Docker multi-stage
- `params` dans les pages App Router est `Promise<{ slug: string }>` — doit être `await`-ed
- Toutes les routes formations pré-rendues via `generateStaticParams`
- Alias `@/*` → `./src/*`
- Police Inter via `next/font/google`
- Composants utilisent `interface` pour les props (pas `type`)
- `forwardRef` sur les primitives interactives (Button)

## 9. Déploiement

- CI (`.github/workflows/ci.yml`): lint → format:check → typecheck → test (parallèle) → build (série)
- Déploiement (`.github/workflows/deploy.yml`): builder l'image Docker → push GHCR → SSH VPS → pull + run
- Container expose 3000, mappé sur 9090 sur le VPS hôte
- Health check: `curl -sf http://localhost:9090`
- Secrets requis: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_SSH_PORT`, `GHCR_PAT`
- `.env.example` avec `NEXT_PUBLIC_SITE_URL`
- Script de sécurité `scripts/check-env.sh` exécuté en CI
