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
  node -e "const http=require('http'),fs=require('fs'),path=require('path');const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.jsx':'text/babel'};http.createServer((req,res)=>{let file=req.url==='/'?'index.html':decodeURIComponent(req.url.slice(1));file=path.normalize(file).replace(/^\.\.(\\|\/|$)/,'');fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);res.end('Not found');return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'text/plain'});res.end(data);});}).listen(${PORT},'0.0.0.0',()=>console.log('Serving on http://localhost:${PORT}'));"
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
