module.exports = {
    banner: {
        full: '/**!\n' +
        ' * <%= pkg.name %> - v<%= pkg.version %>\n' +
        ' * <%= pkg.description %>\n' +
        ' *\n' +
        ' * (c) ' + new Date().getFullYear() + ' - <%= pkg.author %>\n' +
        ' * <%= pkg.license %> License' +
        ' * <%= pkg.repository.url %>\n' +
        ' *\n' +
        ' */\n\n',
        min: '/**!\n' +
        ' * <%= pkg.name %> - v<%= pkg.version %>\n' +
        ' * <%= pkg.description %>\n' +
        ' *\n' +
        ' * (c) ' + new Date().getFullYear() + ' - <%= pkg.author %>\n' +
        ' * <%= pkg.license %> License' +
        ' * <%= pkg.repository.url %>\n' +
        ' *\n' +
        ' */\n\n'
    },
    port: 10002,
    paths: {
        input: 'src/**/*',
        output: '../public/',
        server_path: '../public/'
    },
    js: {
        vendor: {
            input: [
                'vendor/jquery/dist/jquery.js',
                'vendor/angular/angular.js',
                'vendor/bootstrap/dist/js/bootstrap.js',
                'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
                'vendor/angular-cookies/angular-cookies.js',
                'vendor/angular-mocks/angular-mocks.js',
                'vendor/angular-touch/angular-touch.js',
                'vendor/angular-ui-router/release/angular-ui-router.js',
                'vendor/angular-local-storage/dist/angular-local-storage.js',
                'vendor/angular-jwt/dist/angular-jwt.js',
                'vendor/angular-animate/angular-animate.js',
                'vendor/angular-ui-mask/dist/mask.js',
                'vendor/angular-loading-bar/build/loading-bar.js'
            ],
            output: 'vendor.js'
        },
        files: {
            input: [
                'src/**/*.js',
                '!src/**/*.spec.js',
                '!src/**/*.scenario.js'
            ],
            output: '../public/js/'
        }
    },
    less: {
        input: [
            'src/less/main.less',
            'src/common/**/*.less',
            'src/modules/**/*.less'
        ],
        output: '../public/css/'
    },
    htaccess: {
        input: 'src/.htaccess',
        output: '.htaccess'
    },
    html: {
        input: 'src/index.html',
        output: 'index.html',
        tpl: {
            output: 'templates.js',
            modules: 'src/modules/**/*.tpl.html',
            common: 'src/common/**/*.tpl.html'
        }
    },
    assets: {
        fonts: {
            input: ['src/assets/fonts/**/*.{ttf,woff,woff2,eof,eot}', 'vendor/components-font-awesome/fonts/*.{ttf,woff,woff2,eof,eot}'],
            output: '../public/assets/fonts/'
        },
        images: {
            input: ['src/assets/**/*.{png,gif,jpeg,jpg}'],
            output: '../public/assets/'
        },
        svg: {
            input: 'src/assets/**/*.svg',
            output: '../public/assets/'
        }
    },
    docs: {
        input: 'src/docs/*.{html,md,markdown}',
        output: 'docs/',
        templates: 'src/docs/_templates/',
        assets: 'src/docs/assets/**'
    },
    test: {
        input: 'src/**/*.spec.js',
        karma: 'test/karma.conf.js',
        spec: 'test/spec/**/*.js',
        coverage: 'test/coverage/',
        results: 'test/results/'
    },
    placeholders: [
        {
            match: 'API_URL',
            replacement: process.env.API_URL + '/'
        },
        {
            match: 'URL',
            replacement: process.env.URL + '/'
        }
    ]
};