# esbuildPlugin
esbuild

初识 esbuild  使用 esbuild 学习打包 jsx  js  ts 

app.jsx;
npx esbuild app.jsx  --bundle --outfile=out.js --loader:.js=jsx  --minify

app.jsx;
esbuild app.jsx --bundle --minify --sourcemap --target=chrome58,firefox57,safari11,edge16


./main/main.ts;
npx esbuild ./main/main.ts  --bundle --outfile=./main/main.js --watch



app.js;
npx esbuild app.js  --bundle --outfile=out.js --loader:.js=jsx



