/**
 * @module geotoolkit/map/features/filters/VisibilityArea
 */
import { Iterator } from '@int/geotoolkit/util/iterator';
import { IFilter } from '@int/geotoolkit/map/features/filters/IFilter';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
/**
 * VisibilityArea can be applied to the Point features only. It filters out:<br>
 * 1. features outside of canvas rendering area<br>
 * 2. overlapped map features (optionally)<br>
 * 3. Non-point like features<br>
 * The filter assumes feature geometries having 'x' and 'y' components to use as anchored shape anchor.
 */
export declare class VisibilityArea implements IFilter {
    /**
     * @param shape anchored shape as a template
     * @param [options] options (see "setOptions" method for details)
     */
    constructor(shape: AnchoredShape, options?: VisibilityArea.Options);
    /**
     * Sets options
     *
     * @param [options] options
     */
    setOptions(options?: VisibilityArea.Options): this;
    /**
     * Gets options
     * @returns options
     */
    getOptions(): Required<VisibilityArea.Options>;
    /**
     * Gets iterator over filtered features
     *
     * @param iterator input features iterator
     * @param context rendering context
     * @param [layer] feature layer (not used)
     * @returns iterator over features to render
     */
    filterFeatures(iterator: Iterator<AbstractFeature>, context: RenderingContext, layer?: AbstractFeatureLayer): Iterator<AbstractFeature>;
    /**
     * Resets itself
     */
    reset(): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace VisibilityArea {
    /**
     * options (see "setOptions" method for details)
     */
    type Options = {
        /**
         * "No overlapping Features allowed" flag
         */
        nooverlap?: boolean;
    };
}
