import { Vector3 } from 'three';
import { AbstractAnimation } from '@int/geotoolkit3d/scene/animation/AbstractAnimation';
import type { Plot } from '@int/geotoolkit3d/Plot';
/**
 * Animation for moving camera
 */
export declare class CameraMoveAnimation extends AbstractAnimation {
    /**
     * @param options options object
     */
    constructor(options: CameraMoveAnimation.Options);
    run(): boolean;
    /**
     * Stop animation
     */
    stop(): void;
}
export declare namespace CameraMoveAnimation {
    /**
     * options object
     */
    type Options = {
        /**
         * plot
         */
        plot: Plot;
        /**
         * The position to move to in USER coordinates
         */
        position?: Vector3;
        /**
         * The point to look at (in USER coordinates)
         */
        lookat?: Vector3;
        /**
         * Duration of the animation in milliseconds
         */
        duration?: number;
    };
}
