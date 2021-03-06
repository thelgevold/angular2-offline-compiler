var gulp = require('gulp');

gulp.task('bundle', function() {
    var SystemBuilder = require('systemjs-builder');
    var builder = new SystemBuilder();

    builder.loadConfig('./src/system-config.js')
        .then(function(){
            var outputFile = 'es6/tree-shaken.js';
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