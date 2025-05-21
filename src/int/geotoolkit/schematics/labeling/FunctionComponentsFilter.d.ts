import { IComponentsFilter } from '@int/geotoolkit/schematics/labeling/IComponentsFilter';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LocationType } from '@int/geotoolkit/schematics/labeling/LocationType';
/**
 * Filter implementation accepting a function with three parameters:<br>
 * 1) component node (see {@link @int/geotoolkit/schematics/scene/ComponentNode~ComponentNode})<br>
 * 2) rendering context (see {@link @int/geotoolkit/renderer/RenderingContext~RenderingContext})<br>
 * 3) options (with options['locationtype'] of {@link @int/geotoolkit/schematics/labeling/LocationType~LocationType})<br>
 * @deprecated since 4.0. Use {@link @int/geotoolkit/schematics/labeling/LabelsFilter~LabelsFilter} instead.
 */
export declare class FunctionComponentsFilter implements IComponentsFilter {
    /**
     * @param f function to operate on ComponentNode, RenderingContext and options
     */
    constructor(f: Function);
    /**
     * Gets iterator over filtered components
     *
     * @param iterator input components iterator
     * @param context rendering context
     * @returns iterator over components to label
     */
    filterComponents(iterator: Iterator, context: RenderingContext): Iterator;
    /**
     * Resets itself
     *
     * @param options options
     */
    reset(options: FunctionComponentsFilter.ResetOptions): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace FunctionComponentsFilter {
    /**
     * options
     */
    type ResetOptions = {
        /**
         * location type
         */
        locationtype: LocationType;
        labelinfoprovider?: any;
    };
}
