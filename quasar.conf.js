// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

module.exports = function (ctx) {
    return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/cli-documentation/boot-files
        boot: [
            'main',
            'axios',
            'jsonfile',
            'path',
            'file'
        ],

        // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
        css: [
            'app.scss',
            'codemirror.scss'
        ],

        // https://github.com/quasarframework/quasar/tree/dev/extras
        extras: [
            // 'ionicons-v4',
            // 'mdi-v4',
            // 'fontawesome-v5',
            // 'eva-icons',
            // 'themify',
            // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

            'roboto-font', // optional, you are not bound to it
            'material-icons' // optional, you are not bound to it
        ],

        // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
        framework: {
            // iconSet: 'ionicons-v4', // Quasar icon set
            // lang: 'de', // Quasar language pack

            // Possible values for "all":
            // * 'auto' - Auto-import needed Quasar components & directives
            //            (slightly higher compile time; next to minimum bundle size; most convenient)
            // * false  - Manually specify what to import
            //            (fastest compile time; minimum bundle size; most tedious)
            // * true   - Import everything from Quasar
            //            (not treeshaking Quasar; biggest bundle size; convenient)
            all: 'auto',
            components: [],
            directives: [],

            // Quasar plugins
            plugins: [
                'Notify'
            ]
        },

        // https://quasar.dev/quasar-cli/cli-documentation/supporting-ie
        supportIE: false,

        // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
        build: {
            scopeHoisting: true,
            // vueRouterMode: 'history',
            // showProgress: false,
            // gzip: true,
            // analyze: true,
            // preloadChunks: false,
            // extractCSS: false,

            // https://quasar.dev/quasar-cli/cli-documentation/handling-webpack
            extendWebpack (cfg) {
                cfg.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/,
                    options: {
                        formatter: require('eslint').CLIEngine.getFormatter('stylish')
                    }
                });
            }
        },

        // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
        devServer: {
            // https: true,
            // port: 8080,
            open: true // opens browser window automatically
        },

        animations: 'all', // --- includes all animations
        // https://quasar.dev/options/animations
        // animations: [],

        // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
        ssr: {
            pwa: false
        },

        // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
        pwa: {
            // workboxPluginMode: 'InjectManifest',
            // workboxOptions: {}, // only for NON InjectManifest
            manifest: {
                // name: 'Hydra',
                // short_name: 'Hydra',
                // description: 'A minimal Http client.',
                display: 'standalone',
                orientation: 'portrait',
                background_color: '#ffffff',
                theme_color: '#027be3',
                icons: [
                    {
                        'src': 'statics/icons/icon-128x128.png',
                        'sizes': '128x128',
                        'type': 'image/png'
                    },
                    {
                        'src': 'statics/icons/icon-192x192.png',
                        'sizes': '192x192',
                        'type': 'image/png'
                    },
                    {
                        'src': 'statics/icons/icon-256x256.png',
                        'sizes': '256x256',
                        'type': 'image/png'
                    },
                    {
                        'src': 'statics/icons/icon-384x384.png',
                        'sizes': '384x384',
                        'type': 'image/png'
                    },
                    {
                        'src': 'statics/icons/icon-512x512.png',
                        'sizes': '512x512',
                        'type': 'image/png'
                    }
                ]
            }
        },

        electron: {
            bundler: 'packager',
            packager: {
                dir: 'src-electron',
                all: true
            },
            builder: {
                appId: 'com.electron.hydra',
                productName: 'Hydra',
                win: {
                    target: 'nsis'
                },
                nsis: {
                    oneClick: false
                },
                linux: {
                    target: 'AppImage, deb, rpm, tar.gz'
                }
            }
        }
    };
};
