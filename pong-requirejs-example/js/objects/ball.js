/**
 * Ball Class
 *
 * @category   Pong
 * @package    objects
 * @author     Paul van Hemmen <paul.van.hemmen@dotfly.de>
 * @copyright  2013 Paul van Hemmen <paul.van.hemmen@dotfly.de>
 * @license    GNU General Public License (GPL) 3.0
 * @link       http://www.gnu.org/licenses/gpl
 */

"use strict";
define(
    ['../lib/jquery', 'keystatus'],

    function($, keystatus)
    {
        /**
         * constructor
         *
         * @param {object} Game
         *
         * @return void
         */
        var Ball = function(game, sprite)
        {
            this.game      = game;
            this.context   = this.game.context;
            this.x         = 200;
            this.y         = 150;
            this.velocityX = 500;
            this.velocityY = 500;

            this.sprite = sprite;
            this.width  = this.sprite.width;
            this.height = this.sprite.height;

            this.boxing =
            {
                type : 'circular',
                mode : 'reactive',
                collision : false,
                left:   this.x,
                top:    this.y,
                right:  this.x + this.width,
                bottom: this.y + this.height
            };
        }

        /**
         * update method
         *
         * @return void
         */
        Ball.prototype.update = function(tDelta)
        {
            this.x += (tDelta * this.velocityX);
            this.y += (tDelta * this.velocityY);

            this.boxing.left   = this.x;
            this.boxing.top    = this.y;
            this.boxing.right  = this.x + this.width;
            this.boxing.bottom = this.y + this.height;
        }

        /**
         * draw method
         *
         * @return void
         */
        Ball.prototype.draw = function()
        {
            this.context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
        }

        return Ball;
    }
)