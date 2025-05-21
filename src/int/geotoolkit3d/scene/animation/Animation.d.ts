/**
 * @module geotoolkit3d/scene/animation/Animation
 */
import { AbstractAnimation } from '@int/geotoolkit3d/scene/animation/AbstractAnimation';
/**
 * Simple functional animation
 */
export declare class Animation extends AbstractAnimation {
    /**
     * @param options options object
     */
    constructor(options: Animation.Options);
    run(): boolean;
}
export declare namespace Animation {
    /**
     * options object
     */
    type Options = {
        /**
         * function for animations, that returns true, when animation ends
         */
        function: EndAnimationCallback;
    };
    type EndAnimationCallback = () => boolean;
}
