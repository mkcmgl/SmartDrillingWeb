/**
 * @module geotoolkit/layout/ValueCorrelatedRangeLayout1D
 */
import { Range } from '@int/geotoolkit/util/Range';
import { ILayoutElement1D } from '@int/geotoolkit/layout/ILayoutElement1D';
import { ILayout1D } from '@int/geotoolkit/layout/ILayout1D';
import type { TwoWayArrayIterator } from '@int/geotoolkit/util/iterator';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
export declare class ValueCorrelatedRangeLayout1D implements ILayout1D {
    constructor(options?: ValueCorrelatedRangeLayout1D.Options);
    /**
     * Layouts elements
     *
     * @param elements elements to layout
     * @param context rendering context
     * @param [limits] limits to layout elements within
     */
    layout(elements: TwoWayArrayIterator<ILayoutElement1D>, context: RenderingContext, limits?: Range): void;
    /**
     * Returns maxOffset
     * @returns maxOffset
     */
    getMaxOffset(): number;
    /**
     * Sets maxOffset
     * @param maxOffset maxOffset
     * @returns this
     */
    setMaxOffset(maxOffset: number): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns of this object
     */
    getProperties(): ValueCorrelatedRangeLayout1D.Options;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: ValueCorrelatedRangeLayout1D.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace ValueCorrelatedRangeLayout1D {
    /**
     * layout options
     */
    type Options = {
        /**
         * if defined do not draw labels further than 'maxoffset' device units from its model position
         */
        maxoffset?: number;
        /**
         * what to do if ranges don't fit: 'some' or 'all'
         */
        overlap?: string;
    };
}
