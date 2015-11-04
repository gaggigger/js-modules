/**
 * Score Class
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
    ['../lib/jquery'],

    function($)
    {
        /**
         * constructor
         *
         * @param {Object} game
         *
         * @return void
         */
        var Score = function(game)
        {
            this.game    = game;
            this.context = this.game.context;
        }

        /**
         * set value on the given display element
         *
         * @param {Object} sElement
         * @param {Object} sValue
         *
         * @return void
         */
        Score.prototype.setScore = function(element, value)
        {
            $('#' + element).text(value);
        }

        return Score;
    }
)