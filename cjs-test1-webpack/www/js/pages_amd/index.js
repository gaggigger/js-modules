define(function (require) {
    //var $ = require('jquery'),
    //    //lib = require('./lib'),
    //    //controller = require('./controller/c1'),
    //    //model = require('./model/m1'),
    //    //backbone = require('backbone'),
    //    //underscore = require('underscore'),
    //
    //    module1 = require('module1'),
    //    //module2 = require('module2'),
    //
    //
    //module1();
    //
    //$.fn.module1();
    ////module2();
    //$.fn.plugin1();
    //
    //// circular deps
    //var user = require('user');
    //console.log(user.postalCode);
    //console.log(user.numItemsInCart);
    //console.log(user.calculateSalesTax());


    var $ = require('jquery'),
        teaser = require('../modules_amd/teaser');

    teaser.init();

});
