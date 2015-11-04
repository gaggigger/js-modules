//CommonJS

// module code here


// no named modules


var dep1 = require('dep1');





// EXPORTS
module.exports = {
    value1: 'abc',
    foo: function(){
        alert('test')
    }
};


// ACCESS EXPORTS
var module1 = require('module1');

alert(module1.value1);
module1.foo();






// MODULE WITHOUT DEPENDENCIES
// default module name == filename
define(function () {
   // module code here
});

// named module
define('moduleName', function () {
    // module code here
});


// MODULE WITH DEPENDENCIES
define(['dep1', 'dep2'], function (dep1, dep2) {
    // module code here
});

// CommonJs like alternative
define(function (require) {
    var dep1 = require('dep1'),
        dep2 = require('dep2');
});


// EXPORTS
define('module1', function () {
    return {
        value1: 'abc',
        foo: function(){
            alert('test')
        }
    }
});

// CommonJs like alternative
define(function(require, exports, module) {
    //Put traditional CommonJS module content here
    module.exports = {
        value1: 'abc',
        foo: function(){
            alert('test')
        }
    };
});


// ACCESS EXPORTS
define(function (require) {
    var module1 = require('module1');

    alert(module1.value1);
    module1.foo();
});

// alternative
define(['module1'], function (module1) {

    alert(module1.value1);
    module1.foo();
});


// LazyLoad
$('.button').click(function(){

    require(['module1']);

    // or with callback
    require(['module1'], function(module1){
        alert(module1.value1);
        module1.foo();
    });
});



// config
requirejs.config({
    baseUrl: 'js/modules', // require(module1) -> require(js/modules/module1)
    paths: {
        jquery: 'lib/jquery2.0', // require('jquery') -> require('lib/jquery2.0')
        pages: '../pages' // require('pages/page1') -> require('../pages/page1')
    },
    shim: {
        'jquery.swiper': ['jquery']
    }

});

/*
config
build

plugin z.b module lädt sein eigenes css


 */


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['b'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('b'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.b);
    }
}(this, function (b) {
    //use b in some fashion.

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {};
}));

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.jqueryPluginCommonJs = function () {};
}));




import 'module1';                       // import a module without any import bindings
import foo from 'module1';              // import the default export of a module
import { foo } from 'module1';          // import a named export of a module
import { foo as bar } from 'module1';   // import a named export to a different name
import * as foo from 'module1';         // import an entire module instance object


// named exports
export var a = 10;                      // export a named variable
export function foo() {};               // export a named function

// default exports
export default 10;                      // export the default export
export default function foo() {};       // export the default export as a function

export { foo };                         // export an existing variable
export { foo as bar };                  // export a variable as a new name
export { foo as bar } from 'module2';   // export an export from another module
export * from 'module2';                // export all exports from another module
                                        // (except the default export)
// module1.js
export default {
    value1: 'abc',
    foo: function(){
        alert('test')
    }
};

// module2.js
import module1 from 'module1';

alert(module1.value1);
module1.foo();



System.import('module1').then(function(modul1){
    // Use modul1
});

