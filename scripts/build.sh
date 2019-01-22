#!/usr/bin/env bash
set -e

ROOT_DIR=$(cd $(dirname $0)/..; pwd)
cd $ROOT_DIR

PACKAGE="$1"

for D in ./packages/*; do
  if [ ! -d "${D}/src" ]; then
    continue
  fi

  if [ -n "$PACKAGE" ] && [ `basename $D` != "$PACKAGE" ]; then
    continue
  fi

  echo "Building $D..."

  # Clean
  rm -rf "${D}/lib"
  mkdir "${D}/lib"

  # Build cjs
  ./node_modules/.bin/babel "${D}/src/index.js" \
    -o "${D}/lib/index.js" \
    --env-name "cjs" \
    --quiet

  # Build esm
  ./node_modules/.bin/babel "${D}/src/index.js" \
    -o "${D}/lib/index.mjs" \
    --env-name "esm" \
    --quiet
done
