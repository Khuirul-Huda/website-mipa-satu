rm -rf ./dist
mkdir dist
npx tailwindcss -i ./input.css -o ./src/css/tailwind.css
cp -r ./src/* dist/
rm ./dist/index.html
npx html-minifier --collapse-whitespace --remove-comments --remove-redundant-attributes --case-sensitive ./src/index.html -o ./dist/index.html
rm ./src/css/tailwind.css
echo '<!--Project: website-mipa-satu | https://github.com/Khuirul-Huda/website-mipa-satu | Khuirul-Huda (@khuirul_huda) -->' > ./dist/index2.html
cat ./dist/index.html >> ./dist/index2.html
rm ./dist/index.html
mv ./dist/index2.html ./dist/index.html
sed -i 's,https://cdn.tailwindcss.com,/js/prod.js,' ./dist/index.html
echo Success.. deploy dir = dist
