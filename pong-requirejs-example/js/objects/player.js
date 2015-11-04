/**
 * Player Class
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
    ['../lib/keystatus', 'app/score'],

    function(keystatus, Score)
    {
        /**
         * constructor
         *
         * @param {object} Game
         * @param int Player Number
         * @param float x Position
         * @param float y Position
         * @param string Keyup Key
         * @param string Keydown Key
         * @param {object} Player Image
         *
         * @return void
         */
        var Player = function(game, playernr, x, y, keyup, keydown, sprite)
        {
            this.game      = game;
            this.player    = playernr;
            this.context   = this.game.context;
            this.velocityX = 0;
            this.velocityY = 0;
            this.drag      = 0.9;
            this.x         = x;
            this.y         = y;

            this.sprite     = sprite;
            this.width      = this.sprite.width;
            this.height     = this.sprite.height;
            this.scoreboard = new Score(this.game);

            this.boxing =
            {
                type:   'rectangular',
                mode:   'solid',
                collision : false,
                left:   this.x,
                top:    this.y,
                right:  this.x + this.width,
                bottom: this.y + this.height
            };

            this.keyup   = keyup;
            this.keydown = keydown;
        }

        /**
         * update method
         *
         * @return void
         */
        Player.prototype.update = function(tDelta)
        {
            this.updatePosition(tDelta);
            this.updateBoxing();
        }

        /**
         * updates player position
         *
         * @return void
         */
        Player.prototype.updatePosition = function(tDelta)
        {
            if (keystatus.keydown[this.keyup])
            {
                this.velocityY -= (tDelta * 120);
            }

            if (keystatus.keydown[this.keydown])
            {
                this.velocityY += (tDelta * 120);
            }

            this.velocityX *= this.drag;
            this.velocityY *= this.drag;

            this.x += this.velocityX;
            this.y += this.velocityY;
        }

        /**
         * updates player collision box
         *
         * @return void
         */
        Player.prototype.updateBoxing = function()
        {
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
        Player.prototype.draw = function()
        {
            this.context.drawImage(this.sprite, this.x, this.y, this.width, this.height);

            this.scoreboard.setScore('XPos' + this.player, 'X: ' + this.x.toFixed(2));
            this.scoreboard.setScore('YPos' + this.player, 'Y: ' + this.y.toFixed(2));
        }

        return Player;
    }
)