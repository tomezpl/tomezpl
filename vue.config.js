module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'sass-loader'
                    ],
                    exclude: [/node_modules/]
                }
            ]
        }
    },
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.ts',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Tom Zajac',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        blog: {
            entry: 'src/main.ts',
            template: 'public/blog.html',
            filename: 'blog.html',
            title: 'Tom Zajac - Dev Blog',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        about: {
            entry: 'src/main.ts',
            template: 'public/about.html',
            filename: 'about.html',
            title: 'Tom Zajac - About',

            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        showcase: {
            entry: 'src/main.ts',
            template: 'public/showcase.html',
            filename: 'showcase.html',
            title: 'Tom Zajac - Showcase',

            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    }
}