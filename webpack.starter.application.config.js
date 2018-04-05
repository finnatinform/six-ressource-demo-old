module.exports = {
    entry: "./src/starter.tsx",
    output: {
        filename: "starter-application.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { 
                enforce: "pre",
                test: /\.scss$/, 
                use : [
                    'style-loader' ,
                    {
                        loader: 'typings-for-css-modules-loader' ,
                        options:{
                            modules: true ,
                            namedExport: true ,
                            camelCase: true ,
                            sass: true
                        }
                    }
                ]
            } ,

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }        
        ]
    } ,
    target : 'web' ,
    node : {
        fs : 'empty'
    }
};