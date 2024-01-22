const mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js')
    .styles([
        'resources/assets/css/animate.css',
        'resources/assets/css/bootstrap.min.css',
        'resources/assets/css/dataTables.bootstrap4.min.css',
        'resources/assets/css/style.css',
        'resources/assets/plugins/fontawesome/css/fontawesome.min.css',
        'resources/assets/plugins/fontawesome/css/all.min.css',
    ], 'public/css/plantilla.css')
    .scripts([
        'resources/assets/js/jquery-3.6.0.min.js',
        'resources/assets/js/feather.min.js',
        'resources/assets/js/jquery.slimscroll.min.js',
        'resources/assets/js/jquery.dataTables.min.js',
        'resources/assets/js/dataTables.bootstrap4.min.js',
        'resources/assets/js/bootstrap.bundle.min.js',
        'resources/assets/js/moment.min.js',
        'resources/assets/plugins/apexchart/apexcharts.min.js',
        'resources/assets/plugins/apexchart/chart-data.js',
        'resources/assets/js/script.js',
    ], 'public/js/plantilla.js')
    .copyDirectory('resources/assets/img', 'public/assets/img')
    .copyDirectory('resources/assets/plugins/fontawesome/webfonts', 'public/webfonts')
    .vue()


