/**
 * Base App Class
 *
 * @category   Pong
 * @package    Main
 * @author     Paul van Hemmen <paul.van.hemmen@dotfly.de>
 * @copyright  2013 Paul van Hemmen <paul.van.hemmen@dotfly.de>
 * @license    GNU General Public License (GPL) 3.0
 * @link       http://www.gnu.org/licenses/gpl
 */

"use strict";
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with another path,
    //load them from their respective directory.
    paths:
    {
        app: '../app',
        objects: '../objects'
    }
});

/**
 * starts main app logic
 *
 * @return void
 */
requirejs(
    ['jquery', 'app/game', 'app/spriteloader'],

    function ($, Game, Spriteloader)
    {
        var img_sources = {
            player : 'player.png',
            player2 : 'player2.png',
            ball : 'ball.png',
            background : 'background.jpg'
        }

        var spriteloader = new Spriteloader(img_sources, initGame);

        function initGame(images)
        {
            var game = new Game(images);
        }
    }
);