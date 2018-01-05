#!/usr/bin/env bash

npm run build
node_modules/.bin/standard-version --release-as $1
cd src
VERSION="$(npm version $1)"
git add package.json package-lock.json
git commit -a -m "${VERSION}"
git push
cd ../dist
cp ../src/package.json ./
npm publish
