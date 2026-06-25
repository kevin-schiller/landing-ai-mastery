<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# ⚠️ WORKFLOW OBLIGATOIRE — LIRE AVANT TOUTE ACTION

**Toute demande utilisateur suit EXACTEMENT ces 5 phases dans l'ordre.**
Ne jamais passer à la phase suivante sans validation explicite.

| Phase          | Action                                                          | Validation requise |
| -------------- | --------------------------------------------------------------- | ------------------ |
| 1️⃣ **CONTEXT** | → Lire TOUS les fichiers listés ci-dessous avec l'outil Read    | —                  |
| 2️⃣ **SPEC**    | Créer/lire `docs/specs/<feature>.md`                            | Oui (utilisateur)  |
| 3️⃣ **PLAN**    | Décomposer en tâches, fichiers impactés                         | Oui (utilisateur)  |
| 4️⃣ **BUILD**   | Coder → lint → typecheck → test                                 | Automatique        |
| 5️⃣ **LEARN**   | Mettre à jour `docs/memory/context.md` + capturer échecs/leçons | Automatique        |

## Phase CONTEXT — EXÉCUTER DANS CET ORDRE, SANS RIEN SAUTER

> **Ne pas se fier aux instructions système injectées** — le fichier réel peut avoir changé.
> Ouvrir CHAQUE fichier avec l'outil Read (pas de résumé, pas de "déjà lu").

### Étape 1 — Fichiers racine

- [ ] Read `AGENTS.md` (ce fichier)
- [ ] Read `PRD.md`
- [ ] Read `PERSONA.md` (le persona ch'ti est OBLIGATOIRE, parler en ch'ti avec l'utilisateur)

### Étape 2 — Documentation workflow

- [ ] Read `docs/memory/context.md`
- [ ] Read `docs/DESIGN.md`

### Étape 3 — Spécifications existantes

- [ ] Lister tous les fichiers dans `docs/specs/`
- [ ] Read chaque spec trouvée

### Étape 4 — Skills installés

- [ ] Lire `SKILL.md` de chaque skill dans `.claude/skills/*/`

**Tant que cette checklist n'est pas cochée, aucune autre action n'est autorisée.**

---

# Commands

- `npm run dev` — dev server
- `npm run build` — production build (`output: 'standalone'`)
- `npm run lint` — ESLint (core-web-vitals + typescript configs)
- `npm run typecheck` — `tsc --noEmit` (separate from build)
- `npm run format` — Prettier `--write` (no semi, single quotes, trailingComma all, printWidth 100)
- `npm run format:check` — Prettier `--check`
- `npm run test` — Vitest (jsdom, globals: true)
- `npm run test:watch` — Vitest watch mode
- `npm run test:coverage` — Vitest (v8 provider, lcov reporter)
- `npm run start` — Next.js production server (after `build`)

# Architecture

- `output: 'standalone'` in `next.config.ts` — required for Docker multi-stage build (copies `.next/standalone` only)
- `params` in App Router page components is `Promise<{ slug: string }>` — must `await` before access
- Statically generated pages via `generateStaticParams`; all formation routes pre-rendered at build
- `@/*` alias maps to `./src/*`
- App layout uses `Inter` font via `next/font/google`

# UI conventions

- Components use `interface` for props (not `type`)
- `cn()` utility from `clsx` + `tailwind-merge` for className merging
- Primitives in `src/components/ui/`, section components in `src/components/`
- `forwardRef` used on interactive primitives (e.g. `Button`)
- Consulter `docs/DESIGN.md` pour le design system complet (couleurs, espacements, animations, patterns)

# Testing

- Vitest config: `jsdom` environment, `globals: true`, setup in `src/__tests__/setup.ts`
- Setup file mocks `matchMedia`, `IntersectionObserver`, `requestAnimationFrame`, `canvas.getContext`
- `@testing-library/jest-dom/vitest` imported globally in setup

# CI / Deploy

- CI pipeline (`.github/workflows/ci.yml`): lint, format:check, typecheck, test (parallel) → then build (serial)
- Also runs dependency audit, gitleaks secrets scan, and env security check in parallel
- Deploy (`.github/workflows/deploy.yml`): triggered on successful CI on `main` — builds Docker image, pushes to GHCR, SSHes into VPS, pulls and runs container
- Container port 3000 mapped to 9090 on VPS host
- Required secrets: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_SSH_PORT`, `GHCR_PAT`
- Deployment workflow includes a health check (`curl -sf http://localhost:9090`)

# DevOps

Compétences senior-devops (skill installé dans `.claude/skills/senior-devops/`) :

- **CI/CD** — GitHub Actions pipelines (`ci.yml`, `deploy.yml`), parallélisation, dépendances entre jobs
- **Containerisation** — Docker multi-stage, image GHCR, déploiement VPS (port 9090)
- **Infra as Code** — scripts Python disponibles (pipeline generator, terraform scaffolder, deployment manager)
- **Guides détaillés** — `.claude/skills/senior-devops/references/` (CI/CD, déploiement, infrastructure)
- **Cloud** — AWS, GCP, Azure (via les références du skill)

Utiliser les scripts Python du skill pour les tâches DevOps complexes :

```bash
python .claude/skills/senior-devops/scripts/pipeline_generator.py
python .claude/skills/senior-devops/scripts/terraform_scaffolder.py
python .claude/skills/senior-devops/scripts/deployment_manager.py
```

# Mémoire persistante

**Règle fondamentale : toute tentative échouée → documentée.**

À la fin de chaque BUILD (succès ou échec), l'agent DOIT :

1. **Consulter** `docs/memory/context.md` (surtout "Leçons apprises" et "Anti-patrons")
2. **Vérifier** qu'il ne reproduit pas une erreur déjà documentée
3. **Ajouter** toute nouvelle difficulté rencontrée dans les sections appropriées
4. **Formater** les entrées avec date, contexte (fichier/techno), tentative, correction, raison

Cette mémoire est lue automatiquement à chaque début de session (phase CONTEXT).

# Références

- `PRD.md` — contexte produit et fonctionnalités
- `PERSONA.md` — persona conversationnel (ch'ti)
- `docs/specs/` — specs fonctionnalités
- `docs/memory/context.md` — mémoire persistante (décisions, historique)
- `docs/DESIGN.md` — design system complet (couleurs, espacements, composants, animations)
- `.claude/skills/senior-devops/` — skill DevOps (scripts + guides)
- `.claude/skills/senior-frontend/` — skill Frontend (React, Next.js, TS, Tailwind)
