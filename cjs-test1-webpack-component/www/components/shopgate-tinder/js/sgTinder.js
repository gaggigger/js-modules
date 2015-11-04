(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', './vendor/jquery.jTinder'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'), require('./vendor/jquery.jTinder'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {


    /**
     * product tinder plugin
     * @param options
     * @returns {*}
     */
    $.fn.sgTinder = function (options) {

        console.log(options);

        var defaults = {
            config:{
                showPrice: false,
                showButtons: true,
                showDiscountOverlay: true
            },
            products: [],
            animationRevertSpeed: 200,
            animationSpeed: 400,
            threshold: 1,
            likeSelector: '.like',
            dislikeSelector: '.dislike',
            onDislike: function(){

            },
            onLike: function(){

            },
            minEntriesCount: 3
        };

        console.log(options.config);

        options = options || {};
        options = $.extend({}, defaults, options);

        return this.each(function () {

            var $this = $(this),
                $overlay,
                currentEntriesCount,
                jTinderOptions = {

                    // dislike callback
                    onDislike: function (item) {
                        _interactionCallback(item);
                        options.onDislike();
                    },

                    // like callback
                    onLike: function (item) {
                        _interactionCallback(item);

                        _showOverlay(item);

                        _addToFavList(item.data().productid);

                        // TODO: add item to fav list
                        options.onLike();
                    },
                    animationRevertSpeed: options.animationRevertSpeed,
                    animationSpeed: options.animationSpeed,
                    threshold: options.threshold,
                    likeSelector: options.likeSelector,
                    dislikeSelector: options.dislikeSelector
                };

            /**
             * init
             * @private
             */
            function _init(){

                if(options.products.length){
                    _createPanes(options.products);
                }

                $this.jTinder(jTinderOptions);
                $overlay = $('.overlay');

                currentEntriesCount = $('li', $this).length;

                if(options.config.showButtons){
                    $('.actions .like, .actions .dislike').click(function(e){
                        e.preventDefault();
                        $this.jTinder( $(this).hasClass('like') ? 'like':'dislike' );
                    }).parent().show();
                }
            }
            _init();


            /**
             * Callback for each like or dislike
             * @private
             */
            function _interactionCallback(){
                currentEntriesCount--;

                if(currentEntriesCount <= options.minEntriesCount ){
                    // load more products
                    _getMoreProducts();
                }
            }

            /**
             * Load more products via ajax
             * @param count
             * @private
             */
            function _getMoreProducts(count){

                var testProducts = [
                    {
                        id: '556',
                        name:'abc',
                        price: '463,45€',
                        discount_percent: '',
                        image: 'http://img-cdn.shopgate.com/10073/1/6111f3e7a6c94946947cd1110bd41e56541be36671a0ae3a34365d23c8413b17?w=640&h=640&zc=resize&fillc=FFFFFF'
                    },
                    {
                        id: '865',
                        name:'foo',
                        price: '56,45€',
                        image: 'http://img-cdn.shopgate.com/10073/1/fe7bc447cb57f7d86adef176e2ff3d699d4c8ec2e07c6d793cdd7373e00627e8?w=640&h=640&zc=resize&fillc=FFFFFF'
                    },
                    {
                        id: '788',
                        price: '17,56€',
                        name:'Damen Mütze',
                        image: 'http://img-cdn.shopgate.com/10073/1/a77fdff93778c3ef4523b081e035db0cb7a44b170211ad36ce7fbdb3ad36f77e?w=640&h=640&zc=resize&fillc=FFFFFF'
                    },
                    {
                        id: '153',
                        price: '45,00€',
                        name:'Overall aus der 2. ESMOD',
                        image: 'http://img-cdn.shopgate.com/10073/1/ce063f525bdaa8384c78e2003f03530366e97283159b0db45545b9eaebbac1a2?w=440&h=440&zc=resize&fillc=FFFFFF'
                    },
                    {
                        id: '87',
                        price: '19,99€',
                        name:'Oversize-Shirt aus reiner Bio-Baumwolle',
                        image: 'http://img-cdn.shopgate.com/10073/1/74f66e872c14ec8f3f4be04a30f8c0485685f59ad0bb37d3da0d6ed91854cf93?w=640&h=640&zc=resize&fillc=FFFFFF'
                    },
                    {
                        id: '56',
                        price: '65,00€',
                        name:'Canvas-Shopper aus Bio-Baumwolle mit Rhabarber-Leder',
                        image: 'http://img-cdn.shopgate.com/10073/1/a0cfaa00010ad24923b020c75909873b8fbdf8b71c56562c0b165a759327a551?w=640&h=640&zc=resize&fillc=FFFFFF'
                    },
                    {
                        id: '126',
                        price: '154,15€',
                        name:'Bio-Baumwolle',
                        image: 'http://img-cdn.shopgate.com/10073/1/fac9885d44049a92d7831ed1900aca94604b7320ad7c5292c16daa0be4682daa?w=640&h=640&zc=resize&fillc=FFFFFF'
                    },
                    {
                        id: '446',
                        price: '18€',
                        price_old: '20€',
                        discount_percent: '10%',
                        name:'Damen 2-in-1-Sweatkleid aus reiner Bio-Baumwolle',
                        image: 'http://img-cdn.shopgate.com/10073/1/e255611d1f7338d227170c24c461fad17d996d984b28aaebd53983cad49602db?w=640&h=640&zc=resize&fillc=FFFFFF'
                    },

                ];

                // TODO: ajax request here
                setTimeout(_onSuccess(testProducts), 400);

                /**
                 * callback for ajax request
                 * @param data
                 * @private
                 */
                function _onSuccess(data){

                    console.log('more products added');

                    _createPanes(data);

                    setTimeout(function(){
                        // remove old DOM entries
                        $('li:hidden', $this).remove();
                        // reinit
                        $this.jTinder(jTinderOptions);

                    }, 10)
                }
            }


            /**
             * create the panes for the products
             * @param products
             * @private
             */
            function _createPanes(products){

                products.reverse();

                var newPanes = [];
                for(var product in products){
                    newPanes.push(_createPane(products[product]));
                }
                currentEntriesCount += products.length;

                // add new DOM entries
                $('ul', $this).prepend(newPanes);
            }


            /**
             * create and return one <li> entry for the <ul>
             * @param product
             * @returns {*|jQuery}
             * @private
             */
            function _createPane(product){

                var defaults = {
                    name: null,
                    image: '', //TODO: placeholder image
                    price: null,
                    price_old: null,
                    discount_percent: null
                };

                product = $.extend({}, defaults, product);

                var entry = [];
                entry.push($('<img class="img" src="'+product.image+'"/>'));

                if(product.name){
                    entry.push($('<div>', {html: product.name, class: 'name'}));
                }

                if(options.config.showPrice && product.price){

                    var priceWrapper = $('<div class="price">').append($('<span>', {html: product.price, class: product.price_old ? 'new-price' : null}));

                    if(product.price_old){
                        priceWrapper.append($('<span>', {html: product.price_old, class:"old-price"}));
                    }

                    entry.push(priceWrapper);
                }

                entry.push($('<div class="like"></div><div class="dislike"></div>'));
                return $('<li>', { 'data-productId': product.id, 'data-discount_percent': product.discount_percent }).append(entry);
            }

            /**
             * add product to favorite list
             * @param productId
             * @private
             */
            function _addToFavList(productId){

                console.log(productId + ' added to fav list');
                // TODO: add to fav list
            }

            /**
             * add product to cart
             * @param productId
             * @private
             */
            function _addtoCart(productId){
                // TODO add to Cart
                console.log(productId + ' added to cart');
                alert(productId + ' added to cart');
            }

            /**
             * bind close event for the overlay and init variables
             */
            if(options.config.showDiscountOverlay){
                $('.close', $overlay).click(function(){
                    $overlay.fadeOut();
                    return false;
                });

                var $overlayImg = $('img', $overlay),
                    $overlayDiscount = $('.discount', $overlay),
                    $overlayBuyBtn = $('.buy', $overlay);
            }


            /**
             * show the sale overlay if it is a sale product
             * @param item
             * @private
             */
            function _showOverlay(item){

                var discount = item.data().discount_percent;

                if(!options.config.showDiscountOverlay || !discount){
                    return;
                }

                $overlayDiscount.html(item.data().discount_percent + ' Rabatt!');
                $overlayImg.attr('src', $('.img', item).attr('src') );

                $overlayBuyBtn.unbind().click(function(){

                    _addtoCart(item.data().productid);
                    $overlay.fadeOut();

                    return false;
                });

                $overlay.fadeIn();
            }

        });

    };
}));