var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    factor = require('factor-bundle');

// factor-bundle
gulp.task('default', function(){

    return browserify({
        entries: [
            'www/js/pages_cjs/product.js',
            'www/js/pages_cjs/index.js',
            'www/js/pages_cjs/cart.js'
        ],
        debug: true
    })
    .plugin(factor, {
        // File output order must match entry order
        o: [ 'www/bundle/product.js', 'www/bundle/index.js', 'www/bundle/cart.js']
    })
    .bundle()
    .pipe(source('common.js'))
    .pipe(gulp.dest('www/bundle/'));
});

// factor-bundle + deamdify
var deamdify = require('deamdify');
gulp.task('amd', function(){

    return browserify({
        entries: [
            'www/js/pages_amd/product.js',
            'www/js/pages_amd/index.js',
            'www/js/pages_amd/cart.js'
        ],
        debug: true
    })
    .transform(deamdify)
    .plugin(factor, {
        // File output order must match entry order
        o: [ 'www/bundle_amd/product.js', 'www/bundle_amd/index.js', 'www/bundle_amd/cart.js']
    })
    .bundle()
    .pipe(source('common.js'))
    .pipe(gulp.dest('www/bundle_amd/'));
});


/*
var es6ify = require('es6ify');
gulp.task('es6', function(){

    return browserify([
        es6ify.runtime,
        'www/js/pages_es6/product.js',
        'www/js/pages_es6/index.js',
        'www/js/pages_es6/cart.js'
    ])
    //.add(es6ify.runtime)
    .transform(es6ify)
    .add('www/js/pages_es6/cart.js')
    .plugin(factor, {
        // File output order must match entry order
        o: [ 'www/bundle_es6/product.js', 'www/bundle_es6/index.js', 'www/bundle_es6/cart.js']
    })
    .bundle()
    .pipe(source('common.js'))
    .pipe(gulp.dest('www/bundle_es6/'));

});
*/


var babelify = require('babelify');
gulp.task('es6', function(){

    return browserify({
        entries: [
            'www/js/pages_es6/product.js',
            'www/js/pages_es6/index.js',
            'www/js/pages_es6/cart.js'
        ],
        debug: true
    })
    .transform(babelify)
    .plugin(factor, {
        // File output order must match entry order
        o: [ 'www/bundle_es6/product.js', 'www/bundle_es6/index.js', 'www/bundle_es6/cart.js']
    })
    .bundle()
    .pipe(source('common.js'))
    .pipe(gulp.dest('www/bundle_es6/'));

});



var browserifyES6Transpiler = require('browserify-es6-transpiler');
gulp.task('es6-2', function(){

    return browserify()
    .require('./www/js/pages_es6/cart.js')
    .transform(browserifyES6Transpiler)
    .bundle()
    .pipe(source('common.js'))
    .pipe(gulp.dest('www/bundle/'));

});