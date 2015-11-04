/**
 * Collision Class
 *
 * @category   Pong
 * @package    app
 * @author     Paul van Hemmen <paul.van.hemmen@dotfly.de>
 * @copyright  2013 Paul van Hemmen <paul.van.hemmen@dotfly.de>
 * @license    GNU General Public License (GPL) 3.0
 * @link       http://www.gnu.org/licenses/gpl
 */

"use strict"
define(
    [],

    function()
    {
        /**
         * constructor
         *
         * @param {Object} game
         *
         * @return void
         */
        var Collision = function(game)
        {
            this.game = game;

            this.context_width  = this.game.context_width;
            this.context_height = this.game.context_height;
            this.distances      = [];
        }

        /**
         * collide method
         * collision detection between two moving objects
         *
         * @param {Object} a
         * @param {Object} b
         *
         * return void
         */
        Collision.prototype.collide = function(a, b)
        {
            // no collision
            if (a.boxing.bottom < b.boxing.top ||
                a.boxing.top > b.boxing.bottom ||
                a.boxing.right < b.boxing.left ||
                a.boxing.left > b.boxing.right)
            {
                b.boxing.collision = false;
                return;
            }

            // prevent double collisions
            if (!b.boxing.collision)
            {
                b.boxing.collision = true;

                this.distances['top']    = a.boxing.top - b.boxing.bottom;
                this.distances['bottom'] = b.boxing.top - a.boxing.bottom;
                this.distances['left']   = b.boxing.right - a.boxing.left;
                this.distances['right']  = a.boxing.right - b.boxing.left;

                var min_distance   = 100;
                var collision_side = '';

                for (var key in this.distances)
                {
                    if (this.distances.hasOwnProperty(key) && this.distances[key] < min_distance && this.distances[key] > -3)
                    {
                        min_distance   = this.distances[key];
                        collision_side = key;
                    }
                }

                if (collision_side == 'top')
                {
                    b.y = a.boxing.top - b.height;
                    b.velocityY += (a.velocityY * 0.5);
                    b.velocityY *= (-1);
                }

                else if (collision_side == 'bottom')
                {
                    b.y = a.boxing.bottom;
                    b.velocityY += (a.velocityY * 0.5);
                    b.velocityY *= (-1);
                }

                else if (collision_side == 'left')
                {
                    b.x = a.boxing.left - b.width;
                    b.velocityX += (a.velocityX * 0.5);
                    b.velocityX *= (-1);
                }

                else if (collision_side == 'right')
                {
                    b.x = a.boxing.right;
                    b.velocityX += (a.velocityX * 0.5);
                    b.velocityX *= (-1);
                }
            }

        }

        /**
         * bounce method
         * detects collision between objects and playfield borders
         * bounces back the colliding object
         *
         * @param {Object} a
         *
         * @return void
         */
        Collision.prototype.bounce = function(a)
        {
            if (a.boxing.left < 0)
            {
                a.x = 0;
                a.velocityX *= (-1);
            }
            else if (a.boxing.right > this.context_width)
            {
                a.x = this.context_width - a.width;
                a.velocityX *= (-1);
            }

            if (a.boxing.top < 0)
            {
                a.y = 0;
                a.velocityY *= (-1);
            }
            else if (a.boxing.bottom > this.context_height)
            {
                a.y = this.context_height - a.height;
                a.velocityY *= (-1);
            }
        }

        return Collision;
    }
)
