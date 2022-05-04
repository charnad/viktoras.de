const mix = require('laravel-mix');

mix.js('assets/app.js', 'source/js/app.js');
mix.sass('assets/app.scss', 'source/css/app.css');
mix.options({ manifest: false });
