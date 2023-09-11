import * as esbuild from 'esbuild'
import axios from "axios";


// onStart onResolve onLoad onEnd
const myPlugin = {
    name: "http-url",
    setup(build){
        build.onResolve({
            filter: /^http?:\/\//,
        }, (args) => {
            console.log(args);
            return {
                path: args.path,
                namespace: "http-url"
            }
        });

        build.onResolve({filter: /.*/, namespace: "http-url" }, (args) => {
            console.log(args);
            return {
                namespace: "http-url",
                path: new URL(args.path, args.importer).toString()
            }
 
        });


        build.onLoad({
            filter: /.*/, namespace: "http-url"
        }, async (args) => {
            // console.log(args);
            const { data } = await axios(args.path)
            return {
                contents: data
            }
        })
    },
    
}


esbuild.build({
    entryPoints: ["app.js"],
    bundle: true,
    outfile: "out.js",
    plugins: [myPlugin],
})

