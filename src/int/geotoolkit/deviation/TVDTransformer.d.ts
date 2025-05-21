/**
 * @module geotoolkit/deviation/TVDTransformer
 */
import { Transformer2d } from '@int/geotoolkit/deviation/Transformer2d';
import type { DeviatedTransformation } from '@int/geotoolkit/deviation/DeviatedTransformation';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * TVDTransformer implementation
 */
export declare class TVDTransformer extends Transformer2d {
    constructor(options?: TVDTransformer.Options);
    /**
     * Gets options
     * NOTE: copy of options is created and returned.
     * @returns options
     */
    getOptions(): Required<TVDTransformer.Options>;
    /**
     * Sets options
     * @param [options] options
     */
    setOptions(options?: TVDTransformer.Options): void;
    /**
     * Creates a deviated transformation
     * @param transformerContext transformer context
     * @param transformation transformation applied
     * @returns transformation created
     */
    create(transformerContext: Transformer2d.DeviationContext, transformation: Transformation): DeviatedTransformation;
}
export declare namespace TVDTransformer {
    /**
     * options
     */
    type Options = {
        /**
         * should transformer scale track's width on zooming?
         */
        scalewidth?: boolean;
        /**
         * minimum width of track for scaling
         */
        minwidth?: number;
        /**
         * maximum width of track for scaling
         */
        maxwidth?: number;
        /**
         * default scale by x position
         */
        widthscalex?: number;
    };
}
