#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-8000}"
echo "Starting React portfolio preview on http://localhost:${PORT}"
echo "In GitHub Codespaces, open the forwarded port ${PORT} from the Ports tab."
python3 -m http.server "${PORT}"
