/**
 * Spriteloader Class
 * the spriteloader is used for preloading game sprites
 *
 * @category   Pong
 * @package    app
 * @author     Paul van Hemmen <paul.van.hemmen@dotfly.de>
 * @copyright  2013 Paul van Hemmen <paul.van.hemmen@dotfly.de>
 * @license    GNU General Public License (GPL) 3.0
 * @link       http://www.gnu.org/licenses/gpl
 */

"use strict";
define(
    [],

    function()
    {
        /**
         * constructor
         *
         * @return void
         */
        var Spriteloader = function(sources, callback)
        {
            var assetDir     = "./img/sprites/";
            var images       = {};
            var loadedImages = 0;
            var numImages    = 0;

            for (var src in sources)
            {
                numImages++;
            }

            for (var src in sources)
            {
                images[src]        = new Image();
                images[src].onload = function()
                {
                    loadedImages++;
                    if (loadedImages == numImages)
                    {
                        callback(images);
                    }
                };
                images[src].src = assetDir + sources[src];
            }
        }

        return Spriteloader;
    }
)