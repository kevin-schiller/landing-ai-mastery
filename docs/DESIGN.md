# DESIGN.md — Guide de Style & Design System

Ce fichier documente l'intégralité du design system du projet **AI Mastery**. Il est destiné à tout agent IA ou développeur intervenant sur le projet afin de garantir une **cohérence visuelle et fonctionnelle** absolue.

> **Principe fundamental :** Lire ce fichier AVANT d'écrire ou modifier tout composant UI.

---

## 1. Theme — Dark Mode Only

Le projet utilise un thème **exclusivement dark** (pas de light mode, pas de `prefers-color-scheme`).

- **Background** : `#0a0a0f` (noir bleuté profond)
- **Surfaces** : `#14141f` (cartes), `#1e1e2e` (hover/secondary)
- **Accents** : Or (`#d4a843`) et Bleu (`#2563eb`)
- **Texte** : Blanc cassé (`#f0f0f5`) et gris (`#8b8ba0`)
- **Bordures** : `#2a2a3e`

**Esthétique générale :** cyber/tech dark avec accents dorés.

---

## 2. Color Palette

Définie dans `src/app/globals.css` via `@theme inline {}`. Utilisation via classes Tailwind v4.

| Token CSS               | Hex       | Alias Tailwind                            | Usage                          |
| ----------------------- | --------- | ----------------------------------------- | ------------------------------ |
| `--color-background`    | `#0a0a0f` | `bg-background`                           | Fond de page                   |
| `--color-foreground`    | `#f0f0f5` | `text-foreground`                         | Texte principal                |
| `--color-primary`       | `#1e3a5f` | `bg-primary` / `text-primary`             | Éléments navy                  |
| `--color-primary-light` | `#2563eb` | `bg-primary-light` / `text-primary-light` | Liens, highlights bleus        |
| `--color-accent`        | `#d4a843` | `bg-accent` / `text-accent`               | Boutons, badges, accents dorés |
| `--color-accent-light`  | `#fbbf24` | `bg-accent-light` / `text-accent-light`   | Gradient partner de `accent`   |
| `--color-surface`       | `#14141f` | `bg-surface`                              | Fond des cartes/sections       |
| `--color-surface-light` | `#1e1e2e` | `bg-surface-light`                        | Surfaces hover/secondaire      |
| `--color-muted`         | `#8b8ba0` | `text-muted`                              | Texte secondaire               |
| `--color-border`        | `#2a2a3e` | `border-border`                           | Bordures, séparateurs          |

**Règle d'usage :** Ne jamais utiliser de valeurs hex en dur dans les composants. Toujours passer par les classes Tailwind (ex: `bg-background`, `text-accent`, `border-border`).

---

## 3. Typography

### Font

- **Police principale :** Inter (`next/font/google`), chargée dans `src/app/layout.tsx`
- **CSS variable :** `--font-inter` (via `inter.variable`)
- **Classe Tailwind associée :** `font-sans` → `var(--font-inter), system-ui, sans-serif`
- **Monospace :** Défini via `--font-mono` (placeholder, pas de police chargée)
- **Display :** `font-display: 'swap'`

### Tailles conventionnelles

| Élément      | Classes                                                                   | Usage                              |
| ------------ | ------------------------------------------------------------------------- | ---------------------------------- |
| Hero H1      | `text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight` | Titre principal de la hero section |
| Section H2   | `text-3xl sm:text-4xl font-bold mb-4`                                     | Titres de sections                 |
| Section H3   | `text-lg font-semibold` ou `text-xl font-semibold`                        | Sous-titres de sections            |
| Body (hero)  | `text-lg text-muted`                                                      | Paragraphe descriptif hero         |
| Body (carte) | `text-sm text-muted`                                                      | Description dans les cartes        |
| Small/labels | `text-xs text-muted` ou `text-sm text-muted`                              | Labels, méta-infos                 |
| Prix         | `text-4xl font-bold` ou `text-2xl font-bold`                              | Affichage des prix                 |
| Badge        | `text-xs font-medium`                                                     | Badges                             |

### GradientText

Composant `src/components/ui/GradientText.tsx` pour l'effet signature :

```tsx
// bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent
<GradientText as="h2">Titre en or</GradientText>
```

Utilisé sur les titres importants (hero, sections clés). Props : `as` (`h1`|`h2`|`h3`|`span`), `className`.

---

## 4. Spacing & Layout

### Max-Widths par type de contenu

| Conteneur                | Classe                             | Usage                 |
| ------------------------ | ---------------------------------- | --------------------- |
| Header                   | `max-w-7xl`                        | Barre de navigation   |
| Sections standard        | `max-w-6xl`                        | Majorité du contenu   |
| Contenu rétréci          | `max-w-4xl`                        | Page détail formation |
| Texte centré / CTA / FAQ | `max-w-3xl` ou `max-w-2xl mx-auto` | Paragraphes, FAQ, CTA |

### Section Pattern

Toutes les sections suivent cette structure :

```tsx
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Titre</h2>
      <p className="text-muted max-w-2xl mx-auto">Sous-titre</p>
    </div>
    {/* Contenu */}
  </div>
</section>
```

### Paddings & Gaps standards

| Usage                      | Valeur                                |
| -------------------------- | ------------------------------------- |
| Section vertical padding   | `py-24` (96px)                        |
| Section horizontal padding | `px-6` (24px)                         |
| Card padding               | `p-8` (32px) — formation, pricing     |
| Card padding (alt)         | `p-6` (24px) — testimonials, FAQ      |
| Grid gaps standard         | `gap-6` (24px)                        |
| Grid gaps pricing          | `gap-8` (32px)                        |
| Footer grid gap            | `gap-12` (48px)                       |
| Stack spacing small        | `space-y-2`, `space-y-3`, `space-y-4` |
| Stack spacing list         | `space-y-3`                           |
| Gap entre sections         | Naturelle via `py-24`                 |

### Responsive Breakpoints

Valeurs par défaut de Tailwind v4 (pas de custom breakpoints) :

| Breakpoint | Min-width |
| ---------- | --------- |
| `sm`       | 640px     |
| `md`       | 768px     |
| `lg`       | 1024px    |
| `xl`       | 1280px    |
| `2xl`      | 1536px    |

---

## 5. UI Components

### Button (`src/components/ui/Button.tsx`)

```tsx
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}
```

**Variants :**

| Variant     | Classes                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| `primary`   | `bg-gradient-to-r from-accent to-accent-light text-background shadow-lg shadow-accent/25 hover:opacity-90` |
| `secondary` | `bg-surface-light text-foreground hover:bg-border`                                                         |
| `outline`   | `border border-border bg-transparent text-foreground hover:bg-surface-light`                               |
| `ghost`     | `bg-transparent text-foreground hover:bg-surface-light`                                                    |

**Sizes :**

| Size | Classes                 |
| ---- | ----------------------- |
| `sm` | `px-3 py-1.5 text-sm`   |
| `md` | `px-5 py-2.5 text-base` |
| `lg` | `px-8 py-3 text-lg`     |

**Commun à tous :** `inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`

**Règles :** utilise `forwardRef`.

### Badge (`src/components/ui/Badge.tsx`)

```tsx
interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'gold' | 'blue'
  className?: string
}
```

| Variant   | Classes                                  |
| --------- | ---------------------------------------- |
| `default` | `bg-surface-light text-muted`            |
| `gold`    | `bg-accent/10 text-accent`               |
| `blue`    | `bg-primary-light/10 text-primary-light` |

**Commun :** `inline-flex items-center rounded-full px-3 py-1 text-xs font-medium`

### DitheringShader (`src/components/ui/dithering-shader.tsx`)

Composant WebGL2 complexe pour effets visuels avancés. `'use client'`.

```tsx
interface DitheringShaderProps {
  width?: number // default: 800
  height?: number // default: 800
  colorBack?: string // default: '#000000'
  colorFront?: string // default: '#ffffff'
  shape?: DitheringShape // 'simplex' | 'warp' | 'dots' | 'sine' | 'ripple' | 'swirl' | 'sphere'
  type?: DitheringType // 'random' | 'bayer2x2' | 'bayer4x4' | 'bayer8x8'
  pxSize?: number // default: 4
  speed?: number // default: 1
  className?: string
  style?: React.CSSProperties
}
```

---

## 6. Animations

### CSS Keyframes (dans `globals.css`)

| Classe             | Animation                           | Timing        |
| ------------------ | ----------------------------------- | ------------- |
| `animate-fade-in`  | `opacity: 0 → 1`                    | 0.6s ease-out |
| `animate-fade-up`  | `opacity: 0 + translateY(20px) → 1` | 0.6s ease-out |
| `animate-scale-in` | `opacity: 0 + scale(0.95) → 1`      | 0.4s ease-out |

### Framer Motion

Le projet utilise `framer-motion ^12.41.0`. Patterns récurrents :

**Entrée au scroll (standard) :**

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
>
```

**Entrée hero (séquentielle) :**

```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.1 }}
```

**FAQ accordéon :**

```tsx
<AnimatePresence>
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.2 }}
  />
</AnimatePresence>
```

**Animations infinies (CybercoreBackground) :**

```tsx
animate={{ opacity: [0.3, 0.8, 0.3] }}
transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
```

### CSS Transitions

| Usage                 | Classe                              |
| --------------------- | ----------------------------------- |
| Boutons, interactifs  | `transition-all duration-200`       |
| Header scroll, cartes | `transition-all duration-300`       |
| Liens                 | `transition-colors`                 |
| Chevron FAQ           | `transition-transform duration-200` |

---

## 7. Shadows & Effects

### Shadows

| Usage                       | Classe                       |
| --------------------------- | ---------------------------- |
| Bouton primary              | `shadow-lg shadow-accent/25` |
| Carte "populaire" (pricing) | `shadow-xl shadow-accent/10` |
| Carte au hover              | `shadow-xl shadow-accent/5`  |

### Blur

| Usage           | Classe             |
| --------------- | ------------------ |
| Header scrolled | `backdrop-blur-xl` |
| Badge hero      | `backdrop-blur-sm` |

### Gradients

| Usage                       | Détail                                                                       |
| --------------------------- | ---------------------------------------------------------------------------- |
| Texte accent (GradientText) | `bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent` |
| Fond CTA section            | `bg-gradient-to-r from-primary/30 via-accent/10 to-primary/30`               |
| Overlays hero               | `radial-gradient` via CSS-in-JS                                              |

### Card Hover Effects

```css
hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1
```

---

## 8. Component Patterns

### Page Composition

La page d'accueil (`src/app/page.tsx`) compose les sections séquentiellement :

```
<Hero /> → <ProblemSolution /> → <FormationGrid /> → <PricingCards /> → <Stats /> → <Testimonials /> → <FAQ /> → <CTA />
```

### Client vs Server Components

- **`'use client'`** requis pour : `useState`, `useEffect`, `framer-motion`, `forwardRef`, scroll listeners
- **Server components** (pas de directive) pour : contenu statique, `Footer`, `FormationGrid`, `PricingCards`, `CTA`

### Data Layer

Les données typées sont dans des fichiers dédiés dans `src/lib/` :

```ts
// src/lib/formations.ts
interface Formation {
  id: string
  title: string
  subtitle: string
  description: string
  duration: string
  price: number
  originalPrice?: number
  lessons: number
  level: 'Débutant' | 'Intermédiaire' | 'Avancé'
  topics: string[]
  icon: string
  featured?: boolean
}
```

### Dynamic Routes (`src/app/formations/[slug]/page.tsx`)

- `params` est `Promise<{ slug: string }>` — **toujours `await` avant d'accéder**
- Utilise `generateStaticParams()` pour le pré-rendu statique
- `notFound()` pour les slugs invalides
- Métadonnées via `generateMetadata`

### Header (`src/components/Header.tsx`)

- `'use client'`
- **Position :** `fixed top-0 left-0 right-0 z-50 transition-all duration-300`
- **Scroll effect :** `scrolled > 20px` → passe de `bg-transparent` à `bg-background/80 backdrop-blur-xl border-b border-border`
- **Nav desktop :** `hidden md:flex items-center gap-8`
- **Nav mobile :** Hamburger avec icônes `lucide-react` (`Menu`, `X`)
- **Logo :** `AI <span className="text-accent">Mastery</span>` en `text-xl font-bold tracking-tight`

### Footer (`src/components/Footer.tsx`)

- Server component (pas de `'use client'`)
- `border-t border-border mt-auto` — `max-w-6xl mx-auto px-6 py-16`
- **Grid :** `grid md:grid-cols-4 gap-12`
- **Copyright bar :** `border-t border-border mt-12 pt-8 text-center text-sm text-muted`

---

## 9. Icons & Assets

- **Seule librairie d'icônes :** `lucide-react`
- **Icônes utilisées :** `ArrowRight`, `Sparkles`, `Menu`, `X`, `Star`, `Check`, `ChevronDown`, `Clock`, `BookOpen`, `Zap`, `Target`, `TrendingUp`, `ArrowLeft`

**Règle :** Toute nouvelle icône doit provenir de `lucide-react`. Pas d'icônes SVG inline ou d'autres librairies.

---

## 10. Code & Tooling Conventions

### `cn()` Utility (`src/lib/utils.ts`)

Utilisation systématique pour le merge de classes conditionnelles :

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Props Typage

- Utiliser `interface` (pas `type`) pour les props des composants
- Utiliser les types natifs React (`ButtonHTMLAttributes`, `React.ReactNode`, etc.)

### forwardRef

Utilisé sur les composants interactifs primitifs (`Button`).

### Prettier (`.prettierrc`)

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100
}
```

### ESLint

- Config : `eslint.config.mjs` avec `eslint-config-next` (`core-web-vitals` + `typescript`)

### Path Alias

- `@/*` → `./src/*`

---

## 11. Design Tokens — Résumé Visuel

```
┌─────────────────────────────────────────────────────────┐
│ Background    #0a0a0f                                   │
│ Foreground    #f0f0f5                                   │
│ Surface       #14141f  ── Surface Light  #1e1e2e        │
│ Border        #2a2a3e                                   │
│ Muted         #8b8ba0                                   │
│ Primary       #1e3a5f  ── Primary Light  #2563eb        │
│ Accent        #d4a843  ── Accent Light   #fbbf24        │
├─────────────────────────────────────────────────────────┤
│ Font: Inter (sans-serif)                                │
│ Sections: py-24 px-6 / max-w-6xl                        │
│ Cards: p-8 / rounded-xl / bg-surface                    │
│ Radius: rounded-lg (8px) / rounded-xl (12px)            │
│ Animations: fade-in / fade-up / scale-in                │
│ Icons: lucide-react only                                │
└─────────────────────────────────────────────────────────┘
```

---

## 12. Checklist pour toute nouvelle feature UI

- [ ] Les couleurs utilisent-elles les tokens `--color-*` via Tailwind ?
- [ ] Le composant suit-il le pattern de section standard (`py-24 px-6 max-w-6xl`) ?
- [ ] Les imports d'icônes viennent-ils de `lucide-react` uniquement ?
- [ ] Les props sont-elles typées avec `interface` ?
- [ ] `forwardRef` est-il utilisé si le composant est interactif ?
- [ ] L'animation respecte-t-elle les patterns Framer Motion existants ?
- [ ] Le choix client/server component est-il justifié ?
- [ ] `cn()` est-il utilisé pour les classes conditionnelles ?
- [ ] Le fichier respecte-t-il la config Prettier (no semi, single quotes, trailing commas) ?
