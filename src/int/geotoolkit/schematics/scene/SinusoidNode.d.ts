/**
 * @module geotoolkit/schematics/scene/SinusoidNode
 */
import type { ViewMode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
/**
 * WellBoreNode extension to provide sinusoidal curve on the external side of casing elements and open-hole.
 */
export declare class SinusoidNode extends WellBoreNode {
    constructor(options?: SinusoidNode.Options);
    /**
     * Returns all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): SinusoidNode.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: SinusoidNode.Options): this;
    /**
     * Sets well bore view mode.
     * @param [viewMode] well bore view mode
     * @returns "model limits to bounds" depths mapping
     */
    setViewMode(viewMode?: ViewMode): IViewModeBuilder.BuildOptions;
}
export declare namespace SinusoidNode {
    type Options = WellBoreNode.Options & {
        /**
         * well bore node sinusoid options
         */
        sinusoid?: {
            /**
             * depth value to start drawing sinusoid from
             */
            depthfrom?: number;
            /**
             * sinusoid sine amplitude in pixels
             */
            amplitude?: number;
            /**
             * sinusoid sine period in pixels
             */
            period?: number;
            /**
             * sinusoid sine representation accuracy (bigger number means better accuracy and worse performance)
             */
            accuracy?: number;
            /**
             * sinusoid line style
             */
            linestyle?: LineStyle;
        };
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = WellBoreNode.OptionsOut & {
        /**
         * wellbore node sinusoid options
         */
        sinusoid: {
            /**
             * depth value to start drawing sinusoid from
             */
            depthfrom?: number;
            /**
             * sinusoid sine amplitude in pixels
             */
            amplitude?: number;
            /**
             * sinusoid sine period in pixels
             */
            period?: number;
            /**
             * sinusoid sine representation accuracy
             */
            accuracy?: number;
            /**
             * sinusoid line style
             */
            linestyle?: LineStyle;
        };
    };
}
