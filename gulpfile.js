var gulp = require('gulp');

gulp.task('bundle', function() {
    var SystemBuilder = require('systemjs-builder');
    var builder = new SystemBuilder();

    builder.loadConfig('./dist/system-config.js')
        .then(function(){
            var outputFile = 'dist/bundle.min.js';
            return builder.buildStatic('app', outputFile, {
                minify: true,
                mangle: true,
                rollup: true
            });
        })
        .then(function(){
            console.log('bundle built successfully!');
        });
});