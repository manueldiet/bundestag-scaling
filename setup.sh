#!/bin/bash
# ============================================================
# Quick setup script for the bundestag-scaling repository.
# Run from the project root after extracting the zip.
# ============================================================
set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}════════════════════════════════════════════════${NC}"
echo -e "${BLUE}  Bundestag Scaling — Git & GitHub Pages Setup${NC}"
echo -e "${BLUE}════════════════════════════════════════════════${NC}"
echo

# --- 1. Ask for the GitHub username ---
read -p "GitHub username: " GH_USER
if [ -z "$GH_USER" ]; then
  echo -e "${RED}No username given, aborting.${NC}"
  exit 1
fi

REPO_NAME="bundestag-scaling"
REPO_URL="https://github.com/${GH_USER}/${REPO_NAME}.git"

# --- 2. Substitute USERNAME placeholders ---
echo -e "${GREEN}→${NC} Updating USERNAME placeholders in index.html and README.md..."
# macOS sed requires -i ''
if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' "s|USERNAME|${GH_USER}|g" index.html README.md AI_Prompts.md
else
  sed -i "s|USERNAME|${GH_USER}|g" index.html README.md AI_Prompts.md
fi
echo -e "${GREEN}  ✓${NC} Replaced 'USERNAME' with '${GH_USER}'."

# --- 3. Initialise git ---
if [ -d .git ]; then
  echo -e "${GREEN}→${NC} Repository already initialised, skipping git init."
else
  echo -e "${GREEN}→${NC} Initialising git repository..."
  git init -q
  git checkout -q -b main 2>/dev/null || true
fi

# --- 4. First commit ---
echo -e "${GREEN}→${NC} Staging files..."
git add .
if git diff --cached --quiet; then
  echo "  (nothing to commit)"
else
  git commit -q -m "Initial commit: scaffolded website for Bundestag roll-call scaling"
  echo -e "${GREEN}  ✓${NC} Initial commit created."
fi

# --- 5. Remote setup ---
if git remote get-url origin > /dev/null 2>&1; then
  echo -e "${GREEN}→${NC} Remote 'origin' already exists."
else
  echo -e "${GREEN}→${NC} Adding remote: ${REPO_URL}"
  git remote add origin "${REPO_URL}"
fi

# --- 6. Done ---
cat <<EOF

${GREEN}══════════════════════════════════════════════════════════${NC}
${GREEN}  Done. Next steps (manual):${NC}
${GREEN}══════════════════════════════════════════════════════════${NC}

  1.  Create the repository on GitHub:
      ${BLUE}https://github.com/new${NC}
      Name: ${REPO_NAME}
      Visibility: Public

  2.  Push:
      ${BLUE}git push -u origin main${NC}

  3.  Enable GitHub Pages:
      Settings → Pages → Branch: ${BLUE}main${NC} / ${BLUE}root${NC} → Save

  4.  Live site (after ~60 s):
      ${BLUE}https://${GH_USER}.github.io/${REPO_NAME}/${NC}

  5.  Copy your Phase 1 Plotly HTMLs into ${BLUE}output/${NC}:
      • svd_interactive.html
      • dc_svd_interactive.html

  6.  Once the IRT model finishes, run:
      ${BLUE}Rscript scripts/06_export_for_web.R${NC}
      then commit & push the updated ${BLUE}data/*.json${NC}.

EOF
