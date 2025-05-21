/**
 * @module geotoolkit/scene/RestrictScaleStrategy
 */
import { ScaleScrollStrategy } from '@int/geotoolkit/scene/ScaleScrollStrategy';
/**
 * Strategy for restriction scaling on transformation
 */
export declare class RestrictScaleStrategy extends ScaleScrollStrategy {
    constructor(options?: RestrictScaleStrategy.Options);
}
export declare namespace RestrictScaleStrategy {
    /**
     * options object
     */
    type Options = {
        /**
         * maximum absolute scale restriction [1; +Infinity]
         */
        maxscale?: number;
        /**
         * minimum absolute scale restriction [0; 1]
         */
        minscale?: number;
    };
}
