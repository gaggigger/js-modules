/**
 * Keystatus Events
 * prevents leak through of key events to the browser
 *
 * @category   Pong
 * @package    lib
 * @author     Paul van Hemmen <paul.van.hemmen@dotfly.de>
 * @copyright  2013 Paul van Hemmen <paul.van.hemmen@dotfly.de>
 * @license    GNU General Public License (GPL) 3.0
 * @link       http://www.gnu.org/licenses/gpl
 */

"use strict";
define(['jquery',
        'jquery.hotkeys'],

function($)
{
    var keydown = {};

    function keyName(event)
    {
        return $.hotkeys.specialKeys[event.which] ||
        String.fromCharCode(event.which).toLowerCase();
    }

    $(document).bind("keydown", function(event)
    {
        keydown[keyName(event)] = true;
        return false;
    });

    $(document).bind("keyup", function(event)
    {
        keydown[keyName(event)] = false;
        return false;
    });

    return { keydown: keydown };

});
