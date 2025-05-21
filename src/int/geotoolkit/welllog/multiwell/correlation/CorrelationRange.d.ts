import { Correlation } from '@int/geotoolkit/welllog/multiwell/correlation/Correlation';
import { Range } from '@int/geotoolkit/util/Range';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Define polygon correlation to connect two ranges of depths on different wells
 */
export declare class CorrelationRange extends Correlation {
    constructor(options?: CorrelationRange.Options);
    /**
     * Sets correlation fill style to fill range from two set of depths
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Return the current fill style for correlation
     */
    getFillStyle(): FillStyle;
    /**
     * Set start depth for correlation
     * @param leftDepth depth for left well
     * @param rightDepth depth for right well
     */
    setStartDepth(leftDepth: number, rightDepth: number): this;
    /**
     * Set end depth for correlation
     * @param leftDepth depth for left well
     * @param rightDepth depth for right well
     */
    setEndDepth(leftDepth: number, rightDepth: number): this;
    /**
     * Returns depth range for the left well
     */
    getLeftDepthRange(): Range;
    /**
     * Returns depth range for the right well
     */
    getRightDepthRange(): Range;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): CorrelationRange.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: CorrelationRange.Options): this;
}
export declare namespace CorrelationRange {
    /**
     * additional options
     */
    type Options = Correlation.Options & {
        /**
         * fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * start depth on left well
         */
        leftstartdepth?: number;
        /**
         * start depth on right well
         */
        rightstartdepth?: number;
        /**
         * end depth of left well
         */
        leftenddepth?: number;
        /**
         * end depth of right well
         */
        rightenddepth?: number;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = Correlation.OptionsOut & {
        /**
         * fill style
         */
        fillstyle: FillStyle;
        /**
         * start depth on left well
         */
        leftstartdepth: number;
        /**
         * start depth on right well
         */
        rightstartdepth: number;
        /**
         * end depth of left well
         */
        leftenddepth: number;
        /**
         * end depth of right well
         */
        rightenddepth: number;
    };
}
