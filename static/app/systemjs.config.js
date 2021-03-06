/** Add Transpiler for Typescript */
System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    packages: {
        '.': {
            defaultExtension: 'ts'
        },
        'vendor': {
            defaultExtension: 'js'
        },
        rxjs: {
            defaultExtension: 'js'
        }
    }
});

System.config({
    map: {
        'main': '/static/app/main.js',
        'tslib': 'https://unpkg.com/tslib@1.7.1',
        // Angular specific mappings.
        '@angular/core': 'https://unpkg.com/@angular/core/bundles/core.umd.js',
        '@angular/common': 'https://unpkg.com/@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'https://unpkg.com/@angular/compiler/bundles/compiler.umd.js',
        '@angular/animations': "https://unpkg.com/@angular/animations/bundles/animations.umd.js",
        '@angular/animations/browser': 'https://unpkg.com/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/http': 'https://unpkg.com/@angular/http/bundles/http.umd.js',
        '@angular/forms': 'https://unpkg.com/@angular/forms/bundles/forms.umd.js',
        '@angular/router': 'https://unpkg.com/@angular/router/bundles/router.umd.js',
        '@angular/platform-browser': 'https://unpkg.com/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser/animations': 'https://unpkg.com/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
        '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/material': 'https://rawgit.com/angular/material2-builds/master/bundles/material.umd.js',
        // Rxjs mapping
        'rxjs': 'https://unpkg.com/rxjs'
    },
    packages: {
        // Thirdparty barrels.
        'rxjs': {main: 'index'}
    }
});
