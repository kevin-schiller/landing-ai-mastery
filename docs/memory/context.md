# Mémoire de session

## Dernières décisions

| Date | Décision | Justification |
|------|----------|---------------|
| 2026-06-25 | Adoption workflow hybride Spec Kit × BMAD | Besoin de structure sans complexité inutile |
| 2026-06-25 | Intégration skill senior-devops dans AGENTS.md | Permet à l'agent d'être compétent DevOps |
| 2026-06-25 | Dockerfile: USER node + HEALTHCHECK | Sécurité (non-root) + monitoring Docker |
| 2026-06-25 | deploy.yml: GHCR_PAT sécurisé via env vars | Secret plus exposé dans ps aux |
| 2026-06-25 | deploy.yml: Rollback blue-green vers stop/start rapide | Blue-green trop complexe pour rien, stop/start < 100ms suffit |
| 2026-06-25 | README.md mis à jour : déploiement, structure, doc | Reflet de l'état réel du projet |
| 2026-06-25 | Création de docs/DESIGN.md | Documenter tout le design system pour cohérence entre sessions |
| 2026-06-25 | Restructuration AGENTS.md : Workflow déplacé en haut | L'agent sautait la phase CONTEXT (noyée au milieu du fichier) |
| 2026-06-25 | Suppression docs/workflow.md (redondant avec AGENTS.md) | Évite dérive entre 2 sources de vérité et confusion agent |
| 2026-06-25 | Ajout checklist CONTEXT exhaustive dans AGENTS.md | Forcer l'agent à Read chaque fichier avant toute action |

## Problèmes rencontrés

| Date | Problème | Solution |
|------|----------|----------|
| 2026-06-25 | Agent ignore la phase CONTEXT (ne lit pas PERSONA.md, PRD.md, etc.) malgré les instructions dans AGENTS.md | Workflow déplacé en haut d'AGENTS.md avec checklist CONTEXT explicite et bloc "Ne pas se fier aux instructions système injectées" |

## Leçons apprises (échecs → corrections)

| Date | Contexte (fichier/techno) | Tentative échouée | Correction appliquée | Pourquoi ça a fail |
|------|--------------------------|-------------------|---------------------|--------------------|
| 2026-06-25 | AGENTS.md / CONTEXT phase | L'agent n'a pas Read PERSONA.md, PRD.md, context.md en début de session | Workflow déplacé en #2 du fichier (après nextjs-rules), checklist CONTEXT exhaustive avec cases à cocher | Le workflow était noyé en milieu de fichier (ligne 69/104), pas de checklist visuelle forçant l'exécution |

## Anti-patrons / erreurs connues

| Contexte | Ce qui NE MARCHE PAS | Alternative valide | Source |
|----------|---------------------|-------------------|--------|
| - | - | - | - |

## Tâches restantes

- [x] Suivre le workflow CONTEXT → SPEC → PLAN → BUILD → LEARN (validé cette session)

## Notes diverses

- Projet : Landing page AI Mastery (Next.js 16, React 19, Tailwind CSS 4)
- Déploiement : GHCR → Docker → VPS (port 9090)
- PRD : `PRD.md`
- Persona : `PERSONA.md` (ch'ti) — OBLIGATOIRE : parler en ch'ti avec l'utilisateur
- Design system : `docs/DESIGN.md`
