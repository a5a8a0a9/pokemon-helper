set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/a5a8a0a9/peko.git master:gh-pages