/**
 * @module geotoolkit/schematics/labeling/DefaultComponentsFilter
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { ViewMode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { IComponentsFilter } from '@int/geotoolkit/schematics/labeling/IComponentsFilter';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Default components filter implementation
 * @deprecated since 4.0. Use {@link @int/geotoolkit/schematics/labeling/LabelsFilter~LabelsFilter} instead.
 * @example
 * // The component filter's parameter 'mdsizedevice' defines how small (in pixels) is component's height which is to be labeled.
 * import {DefaultComponentsFilter} from '@int/geotoolkit/schematics/labeling/DefaultComponentsFilter';
 * wellBoreWithLabels.getLabelingStrategy().setOptions({
 *       'componentsfilter': new DefaultComponentsFilter({'mdsizedevice': 100})
 * });
 */
export declare class DefaultComponentsFilter implements IComponentsFilter {
    /**
     * @param [options] options
     */
    constructor(options?: DefaultComponentsFilter.Options);
    /**
     * Gets iterator over filtered components
     *
     * @param iterator input components iterator
     * @param context rendering context
     * @returns iterator over components to label
     */
    filterComponents(iterator: Iterator, context: RenderingContext): Iterator;
    /**
     * Resets itself using given options
     *
     * @param [options] options
     */
    reset(options?: DefaultComponentsFilter.ResetOptions): this;
    /**
     * Returns options (deep copy)
     * @returns [options] options see {@link import("geotoolkit/schematics/labeling/DefaultComponentsFilter").DefaultComponentsFilter.getProperties}
     */
    getOptions(): any;
    /**
     * Returns all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): DefaultComponentsFilter.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: DefaultComponentsFilter.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace DefaultComponentsFilter {
    /**
     * options
     */
    type Options = {
        /**
         * label info provider
         */
        labelinfoprovider?: Function;
        /**
         * orientation
         */
        orientation?: string;
        /**
         * view mode
         */
        viewmode?: ViewMode;
        /**
         * smallest component MD-size to have label (in device space)
         */
        mdsizedevice?: number;
    };
    /**
     * options
     */
    type ResetOptions = {
        /**
         * label info provider
         */
        labelinfoprovider?: Function;
        /**
         * orientation
         */
        orientation?: string;
        /**
         * view mode
         */
        viewmode?: ViewMode;
        /**
         * smallest component size to have label (in device space)
         */
        mdsizedevice?: number;
        /**
         * labels area in device space
         */
        labelsarea?: Rect;
    };
    /**
     * properties
     */
    type OptionsOut = {
        /**
         * label info provider
         */
        labelinfoprovider?: Function;
        /**
         * orientation
         */
        orientation?: string;
        /**
         * view mode
         */
        viewmode?: ViewMode;
        /**
         * smallest component size to have label (in device space)
         */
        mdsizedevice?: number;
        /**
         * labels area in device space
         */
        labelsarea?: Rect;
    };
}
