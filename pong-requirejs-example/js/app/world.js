/**
 * World Class
 * contains and handles all present objects
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
    ['app/collision'],

    function(Collision)
    {
        /**
         * constructor
         *
         * @param {object} Game
         * @param {object} World Objects
         *
         * @return void
         */
        var World = function(game, objects)
        {
            this.game    = game;
            this.objects = objects;

            this.collision = new Collision(this.game);
        }

        /**
         * update method
         * updates all objects in the world and does collision detection
         *
         * @return void
         */
        World.prototype.update = function(tDelta)
        {
            this.collision.collide(this.objects.player, this.objects.ball);
            this.collision.collide(this.objects.player2, this.objects.ball);

            var collision = this.collision;

            for (var object in this.objects)
            {
                collision.bounce(this.objects[object]);
                this.objects[object].update(tDelta);
            }
        }

        /**
         * draw method
         * draws all objects in the world
         *
         * @return void
         */
        World.prototype.draw = function()
        {
            for (var object in this.objects)
            {
                this.objects[object].draw();
            }
        }

        return World;
    }
);
