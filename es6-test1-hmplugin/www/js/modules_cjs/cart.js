// circular deps
// user muss hier über [] geladen werden. laden über require() verursacht fehler
//define(['require', 'user'],function (require, user) {
//
//    var calculateSalesTax = function() {
//        var userPostalCode = user.postalCode;
//        return userPostalCode + ' tax19';
//    };
//
//    return{
//        items:['item1', 'item2'],
//        calculateSalesTax: calculateSalesTax,
//        getCartSum: function(){
//            return 152
//        },
//        addProductToCart: function(){
//
//        }
//    }
//
//});

//import 'jquery';                        // import a module without any import bindings
//import $ from 'jquery';                 // import the default export of a module
//import { $ } from 'jquery';             // import a named export of a module
//import { $ as jQuery } from 'jquery';   // import a named export to a different name
//
//export var x = 42;                      // export a named variable
//export function foo() {};               // export a named function
//
//export default 42;                      // export the default export
//export default function foo() {};       // export the default export as a function
//
//export { encrypt };                     // export an existing variable
//export { decrypt as dec };              // export a variable as a new name
//export { encrypt as en } from 'crypto'; // export an export from another module
//export * from 'crypto';                 // export all exports from another module
//                                        // (except the default export)
//import * as crypto from 'crypto';       // import an entire module instance object

//import user from 'user';
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.calculateSalesTax = calculateSalesTax;
exports.getCartSum = getCartSum;
exports.addProductToCart = addProductToCart;

var _user = require('user');

//import * as user from 'user';

function calculateSalesTax() {
    var userPostalCode = _user.user.postalCode;
    return userPostalCode + ' tax19';
}

var items = ['item1', 'item2'];

exports.items = items;

function getCartSum() {
    return 152;
}

function addProductToCart() {
    alert('product added to cart');
}