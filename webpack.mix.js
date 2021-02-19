const mix = require('laravel-mix');
mix
    .setPublicPath('public/front/assets')
    // Frontend
    .sass('resources/front/assets/scss/framework/framework.scss', 'css/')
    .sass('resources/front/assets/scss/style/style.scss', 'css/')
    .sass('resources/front/assets/scss/neumorphism/neumorphism.scss', 'css/')
    .js('resources/front/assets/js/app.js', 'js/framework.js')

    .options({
        processCssUrls: false,
        autoprefixer: {
            enabled: true,
            options: { remove: false }
        }
    })
    .version()
    .sourceMaps()
    .autoload({
        bootstrap: ['bootstrap', 'window.bootstrap']
    })
    .browserSync({
        files: [
            'public/front/assets/js/**/*',
            'public/front/assets/css/**/*',
            'resources/front/assets/**/**/**/*.js',
            '**/*.html'
        ],
        proxy: {
            target: "localhost/bootstrap",
            ws: true,
        },
    })
    .disableNotifications();
