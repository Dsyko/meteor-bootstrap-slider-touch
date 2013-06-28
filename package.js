Package.describe({
    summary: "bootstrap-slider-touch packaged for meteor."
});

Package.on_use(function (api) {
	api.use('bootstrap', 'client');
	api.use('jquery', 'client');
    api.add_files([
        'lib/js/bootstrap-slider.js',
        'lib/css/slider.css'
    ], 'client'
    );
});