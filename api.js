// const esbuild = i
import * as esbuild from 'esbuild'
// (async function () {
//     // 返回一个 promise
//     const r = await esbuild.build({
//         entryPoints: ["app.jxs"],
//         bundle: true,
//         outfile: "out.js"
//     });
//     console.log(r);
// })();
(async function () {
    const r =  await esbuild.build({
        entryPoints: ['app.jsx'],
        bundle: true,
        minify: false,
        sourcemap: true,
        target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
        outfile: 'out.js',
    })
    console.log(r);
})()