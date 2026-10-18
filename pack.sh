#!/usr/bin/env sh
# Zip the extension files for upload to the Chrome Web Store.
set -e
cd "$(dirname "$0")"
version=$(sed -n 's/.*"version": *"\([^"]*\)".*/\1/p' manifest.json)
mkdir -p dist
out="dist/shorts-blocker-$version.zip"
rm -f "$out"
zip -r "$out" manifest.json content.css content.js popup.html popup.js icons
echo "Wrote $out"
