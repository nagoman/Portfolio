#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-8000}"
echo "Starting React portfolio preview on http://localhost:${PORT}"
echo "In GitHub Codespaces, open the forwarded port ${PORT} from the Ports tab."

if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "${PORT}"
elif command -v python >/dev/null 2>&1; then
  python -m http.server "${PORT}"
elif command -v node >/dev/null 2>&1; then
  PORT="${PORT}" node server.js
elif command -v php >/dev/null 2>&1; then
  php -S "0.0.0.0:${PORT}"
else
  cat <<MESSAGE
No supported local server was found.

Install Python in GitHub Codespaces, then run this script again:
  sudo apt-get update
  sudo apt-get install -y python3
  ./run.sh

Important: the command is not "install python3". On Ubuntu/Codespaces, use "sudo apt-get install -y python3".
MESSAGE
  exit 1
fi
