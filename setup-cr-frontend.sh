#!/usr/bin/env bash
set -euo pipefail

# Benjamin Orellana - 23/03/2026
# Script base para preparar estructura simple del frontend de CR.
# Uso:
#   bash setup-cr-frontend.sh
#   bash setup-cr-frontend.sh /ruta/al/proyecto

PROJECT_ROOT="${1:-$PWD}"
SRC_DIR="$PROJECT_ROOT/src"
PUBLIC_DIR="$PROJECT_ROOT/public"

if [[ ! -d "$PROJECT_ROOT" ]]; then
  echo "La ruta del proyecto no existe: $PROJECT_ROOT"
  exit 1
fi

mkdir -p \
  "$SRC_DIR/assets/brand" \
  "$SRC_DIR/assets/images" \
  "$SRC_DIR/assets/icons" \
  "$SRC_DIR/components/common" \
  "$SRC_DIR/components/ui" \
  "$SRC_DIR/layouts" \
  "$SRC_DIR/sections/home" \
  "$SRC_DIR/hooks" \
  "$SRC_DIR/lib" \
  "$SRC_DIR/utils" \
  "$SRC_DIR/constants" \
  "$SRC_DIR/data" \
  "$SRC_DIR/styles" \
  "$SRC_DIR/pages" \
  "$PUBLIC_DIR/brand/logos" \
  "$PUBLIC_DIR/brand/logos/isotipo" \
  "$PUBLIC_DIR/brand/logos/logotipo" \
  "$PUBLIC_DIR/brand/logos/imagotipo" \
  "$PUBLIC_DIR/brand/graficos" \
  "$PUBLIC_DIR/brand/patrones" \
  "$PUBLIC_DIR/brand/favicons" \
  "$PUBLIC_DIR/fonts/open-sauce" \
  "$PUBLIC_DIR/fonts/sloop-script"

for file in \
  "$SRC_DIR/components/common/.gitkeep" \
  "$SRC_DIR/components/ui/.gitkeep" \
  "$SRC_DIR/layouts/.gitkeep" \
  "$SRC_DIR/sections/home/.gitkeep" \
  "$SRC_DIR/hooks/.gitkeep" \
  "$SRC_DIR/lib/.gitkeep" \
  "$SRC_DIR/utils/.gitkeep" \
  "$SRC_DIR/constants/.gitkeep" \
  "$SRC_DIR/data/.gitkeep" \
  "$SRC_DIR/styles/.gitkeep" \
  "$PUBLIC_DIR/brand/logos/isotipo/.gitkeep" \
  "$PUBLIC_DIR/brand/logos/logotipo/.gitkeep" \
  "$PUBLIC_DIR/brand/logos/imagotipo/.gitkeep" \
  "$PUBLIC_DIR/brand/graficos/.gitkeep" \
  "$PUBLIC_DIR/brand/patrones/.gitkeep" \
  "$PUBLIC_DIR/brand/favicons/.gitkeep" \
  "$PUBLIC_DIR/fonts/open-sauce/.gitkeep" \
  "$PUBLIC_DIR/fonts/sloop-script/.gitkeep"
  do
  touch "$file"
done

if [[ ! -f "$SRC_DIR/styles/README.md" ]]; then
  cat > "$SRC_DIR/styles/README.md" <<'README'
# styles

- `index.css`: tokens globales, font-face y utilidades base.
- Este directorio puede crecer luego con archivos como `animations.css` o `utilities.css`.
README
fi

cat <<MSG
Estructura base creada correctamente en:
$PROJECT_ROOT

Siguientes pasos sugeridos:
1. Copiar logos a public/brand/logos/
2. Copiar elementos graficos a public/brand/graficos/
3. Copiar fuentes a public/fonts/open-sauce y public/fonts/sloop-script
4. Reemplazar src/index.css por el archivo base de CR
MSG
