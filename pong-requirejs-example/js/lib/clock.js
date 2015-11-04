/**
 * Clock Class
 *
 * the clock used for time delta and fps calculations
 * code is based upon the clock in three.js framework: https://github.com/mrdoob/three.js/
 *
 * @category   Pong
 * @package    objects
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
         * @return void
         */
        var Clock = function () {

            this.startTime = Date.now();
            this.ms        = this.startTime;
            this.last      = this.startTime;
            this.time      = 0;

            // the number of milliseconds since the last call to tick()
            this.dt    = 0;
            // dt in floating point seconds not millis
            this.delta = 0;

            this.fps           = 0.0;
            this.frameCount = 0;

            // frame Counter flag
            this.frameCounter = true;

            this.timeToUpdate   = 0;
            this.framesToUpdate = 0;
        }

        /**
         * tick method
         * represents a new frame every time it is called between requestAnimationFrame
         *
         * @return void
         */
        Clock.prototype.tick = function ()
        {
            if (this.frameCounter) this.frameCount++;

            // Set the private currentTime variable
            this.ms = Date.now();

            // Update time delta and set last time
            this.dt   = this.ms - this.last;
            this.last = this.ms;

            // Calculate floating-point delta and increment time member
            this.delta = 0.001 * this.dt;
            this.time += this.delta;

            // Calculate private temp variables for fps calculation
            if (this.frameCounter)
            {
                this.timeToUpdate += this.dt;
                this.framesToUpdate++;

                if (this.timeToUpdate > 1000)
                {
                    this.fps            = Math.round((this.framesToUpdate * 1000) / this.timeToUpdate);
                    this.framesToUpdate = 0;
                    this.timeToUpdate   = 0;
                }
            }
        }

        return Clock;
    }
)
