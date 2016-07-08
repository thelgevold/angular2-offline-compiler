System.config({
    map: {
        'rxjs': 'node_modules/rxjs-es',
        '@angular/core': 'node_modules/@angular/core/esm',
        '@angular/common': 'node_modules/@angular/common/esm',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/esm',
        'app': 'es6'
    },
    packages: {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        '@angular/core': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/http': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/compiler': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/router': {
            main: 'index.js',
            defaultExtension: 'js'
        },

        '@angular/upgrade': {
            main: 'index.js',
            defaultExtension: 'js'
        },

        '@angular/forms': {
            main: 'index.js',
            defaultExtension: 'js'
        },

        '@angular/common': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser-dynamic': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    }
})