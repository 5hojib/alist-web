# replace version
cd Spark-web
version=$(git describe --abbrev=0 --tags)
sed -i -e "s/0.0.0/$version/g" package.json
cat package.json

# build
pnpm install
pnpm i18n:release
pnpm build
cp -r dist ../
cd ..

# commit to web-dist
cd web-dist
rm -rf dist
cp -r ../dist .
git add .
git config --local user.email "yesiamshojib@gmail.com"
git config --local user.name "5hojib"
git commit --allow-empty -m "upload $version dist files" -a
git tag -a $version -m "release $version"
cd ..

mkdir compress
tar -czvf compress/dist.tar.gz dist/*
zip -r compress/dist.zip dist/*
