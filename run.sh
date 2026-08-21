#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# run.sh — one-command setup + run for the portfolio on a fresh Ubuntu machine
#          (tested target: Ubuntu 22.04, works on 20.04/24.04 too)
#
#   ./run.sh            start the dev server  (hot reload, http://localhost:5173)
#   ./run.sh build      production build into ./dist
#   ./run.sh preview    build, then serve ./dist at http://localhost:4173
#   ./run.sh clean      remove node_modules and dist
#
# Node 18+ is required. If it is missing (Ubuntu 22.04 ships Node 12 in apt),
# the script installs Node 20 LTS from NodeSource — that step, and only that
# step, asks for sudo.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

cd "$(dirname "$0")"

NODE_MAJOR_REQUIRED=18
NODE_MAJOR_INSTALL=20
MODE="${1:-dev}"

say()  { printf '\n\033[1;34m▸ %s\033[0m\n' "$*"; }
warn() { printf '\033[1;33m! %s\033[0m\n' "$*"; }
die()  { printf '\033[1;31m✗ %s\033[0m\n' "$*" >&2; exit 1; }

node_major() {
  command -v node >/dev/null 2>&1 || { echo 0; return; }
  node -v | sed 's/^v\([0-9]*\).*/\1/'
}

install_node() {
  say "Installing Node.js ${NODE_MAJOR_INSTALL} LTS (needs sudo)"
  command -v sudo >/dev/null 2>&1 || die "sudo not found — install Node ${NODE_MAJOR_REQUIRED}+ manually, then re-run."
  sudo apt-get update
  sudo apt-get install -y ca-certificates curl gnupg
  sudo install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key |
    sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg --yes
  sudo chmod a+r /etc/apt/keyrings/nodesource.gpg
  echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_${NODE_MAJOR_INSTALL}.x nodistro main" |
    sudo tee /etc/apt/sources.list.d/nodesource.list >/dev/null
  sudo apt-get update
  sudo apt-get install -y nodejs
}

# ── 1 · Node ────────────────────────────────────────────────────────────────
if [ "$(node_major)" -lt "$NODE_MAJOR_REQUIRED" ]; then
  warn "Node $( [ "$(node_major)" = 0 ] && echo 'is not installed' || node -v ) — need v${NODE_MAJOR_REQUIRED}+."
  install_node
fi
[ "$(node_major)" -ge "$NODE_MAJOR_REQUIRED" ] || die "Node ${NODE_MAJOR_REQUIRED}+ still not available."
say "Node $(node -v) · npm $(npm -v)"

# ── 2 · Dependencies ────────────────────────────────────────────────────────
if [ "$MODE" = clean ]; then
  say "Removing node_modules and dist"
  rm -rf node_modules dist
  exit 0
fi

if [ ! -d node_modules ]; then
  say "Installing dependencies"
  if [ -f package-lock.json ]; then npm ci; else npm install; fi
else
  say "Dependencies already installed (delete node_modules to reinstall)"
fi

# ── 3 · Run ─────────────────────────────────────────────────────────────────
case "$MODE" in
  dev)
    say "Dev server — http://localhost:5173  (Ctrl+C to stop)"
    exec npm run dev -- --host
    ;;
  build)
    say "Building production bundle into ./dist"
    npm run build
    say "Done. Serve ./dist with any static host, or: ./run.sh preview"
    ;;
  preview)
    say "Building, then serving ./dist"
    npm run build
    say "Preview — http://localhost:4173  (Ctrl+C to stop)"
    exec npm run preview -- --host
    ;;
  *)
    die "Unknown mode '$MODE'. Use: dev | build | preview | clean"
    ;;
esac
