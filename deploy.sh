set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/a5a8a0a9/pokemon-helper.git master:gh-pages

read -s -n1 -p "success! press any key to continue"