#!/usr/bin/env bash
set -euo pipefail

echo "=== Env Security Check ==="

# 1. Vérifier que .env est dans .gitignore
if [ -f .gitignore ] && grep -q '.env' .gitignore; then
  echo "[PASS] .env pattern found in .gitignore"
else
  echo "[FAIL] .env pattern missing from .gitignore"
  exit 1
fi

# 2. Vérifier qu'aucun fichier .env n'est tracké par git
TRACKED_ENV=$(git ls-files | grep -E '^\.env$|^\.env\.' || true)
if [ -z "$TRACKED_ENV" ]; then
  echo "[PASS] No .env files tracked by git"
else
  echo "[FAIL] Found tracked .env files: $TRACKED_ENV"
  exit 1
fi

# 3. Vérifier que .env.example existe
if [ -f .env.example ]; then
  echo "[PASS] .env.example exists"
else
  echo "[FAIL] .env.example is missing"
  exit 1
fi

# 4. Scanner le code pour des secrets potentiels hardcodés
# Patterns suspects (hors node_modules, hors scripts de CI, hors snapshots de test)
echo "Scanning for hardcoded secrets..."
SUSPECTS=$(git grep -InE \
  '(password\s*[=:]\s*["'"'"'][^"'"'"']+["'"'"'])|(api[_-]?key\s*[=:]\s*["'"'"'][^"'"'"']+["'"'"'])|(secret\s*[=:]\s*["'"'"'][^"'"'"']+["'"'"'])|(token\s*[=:]\s*["'"'"'][^"'"'"']{10,}["'"'"'])' \
  -- ':!:node_modules/' ':!:.github/' ':!:scripts/' ':!:*.test.*' ':!:*.spec.*' ':!:__snapshots__/' \
  2>/dev/null || true)

if [ -z "$SUSPECTS" ]; then
  echo "[PASS] No obvious hardcoded secrets found"
else
  echo "[WARN] Potential hardcoded secrets detected:"
  echo "$SUSPECTS"
  # On ne fail pas ici car certains peuvent être des faux positifs (ex: "token" dans un fichier CSS)
fi

echo "=== Env Security Check Complete ==="
