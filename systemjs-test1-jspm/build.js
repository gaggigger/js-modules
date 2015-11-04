var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('www/js', 'config.js');

var moduleFormat = 'cjs'; // ['amd','cjs','es6']

var pageEntries = [];
var pages = ['index', 'cart', 'product'];
var buildOutput = './www/js/build_'+moduleFormat+'/';

pages.forEach(function(e){
    pageEntries.push('pages_'+moduleFormat + '/' + e);
});

builder
    .buildStatic(pageEntries.join(' & '), buildOutput + 'common.js') // extract common modules
    .then(function() {
        console.log('Build complete');

        pageEntries.forEach(function(e, i){
            builder.bundle( e + ' - ' + buildOutput + 'common', buildOutput+pages[i] +'.js').then(function() {
                console.log('Build '+e+' complete');

            }).catch(function(err) {
                console.log('Build '+e+' error');
                console.log(err);
            });

        });

    })
    .catch(function(err) {
        console.log('Build error');
        console.log(err);
    });