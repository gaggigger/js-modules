/**
 * Game Class
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
    ['../lib/reqanimframe', 'clock', 'app/world', 'objects/player', 'objects/ball'],

    function(rAF, Clock, World, Player, Ball)
    {
        /**
         * constructor
         *
         * @return void
         */
        var Game = function(images)
        {
            this.fps            = 60;
            var canvas          = document.getElementById('world');
            this.context        = canvas.getContext('2d');
            this.context_width  = canvas.width;
            this.context_height = canvas.height;
            this.images         = images;
            this.background     = this.images['background'];
            this.clock          = new Clock();

            this.world = new World(
                this,
                {
                    player  : new Player(this, 1, 60, 60, 'a', 'y', this.images['player']),
                    player2 : new Player(this, 2, this.context_width - 60, 60, 'up', 'down', this.images['player2']),
                    ball    : new Ball(this, this.images['ball'])
                }
            );

            // game loop
            var game = this;

            function runloop()
            {
                requestAnimationFrame(runloop);
                game.clock.tick();
                game.updateAll();
                game.drawAll();
            }
            runloop();
        }

        /**
         * game update method
         * updates all game object positions
         *
         * @return void
         */
        Game.prototype.updateAll = function()
        {
            this.world.update(this.clock.delta);
        }

        /**
         * game draw method
         * draws all game objects
         *
         * @return void
         */
        Game.prototype.drawAll = function()
        {
            this.context.drawImage(this.background, 0, 0, this.context_width, this.context_height);
            this.world.draw();
        }

        return Game;
    }
)