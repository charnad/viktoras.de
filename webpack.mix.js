const mix = require('laravel-mix');

mix.setPublicPath('source');

mix.js('assets/app.js', 'source/js/app.js');
mix.sass('assets/app.scss', 'source/css/app.css');

mix.options({ manifest: false });
mix.options({ assetDirs : { fonts: 'source/fonts' }});
