import { AlignmentType } from '@int/geotoolkit/schematics/labeling/AlignmentType';
import { DefaultLabelingStrategy } from '@int/geotoolkit/schematics/labeling/DefaultLabelingStrategy';
/**
 * Labeling strategy implementation based on XY layout and LocationType enum.
 */
export declare class XYLabelingStrategy extends DefaultLabelingStrategy {
    constructor(options?: XYLabelingStrategy.Options);
    /**
     * Sets properties
     * @param [properties] strategy options
     * @returns this
     */
    setProperties(properties?: XYLabelingStrategy.Options): this;
    /**
     * Returns properties
     * @returns strategy options
     */
    getProperties(): XYLabelingStrategy.OptionsOut;
    /**
     * Sets strategy options (See base class method API for more options)
     *
     * @param options strategy options
     * @returns this
     */
    setOptions(options: XYLabelingStrategy.Options): this;
    /**
     * Default column number is 3
     */
    static get DefaultColumnNumber(): number;
    /**
     * Gets layout column number
     *
     * @returns layout column number
     */
    getLayoutColumnNumber(): number;
    /**
     * Sets layout column number.
     * Valid values: 1 (no horizontal layout), 2 or 3.
     *
     * @param layoutColumnNumber layout column number.
     * Valid values: 1 (no horizontal layout), 2 or 3.
     * Default value: 3.
     * @throws {Error} if layoutColumnNumber is invalid
     * @returns this
     */
    setLayoutColumnNumber(layoutColumnNumber: number): this;
}
export declare namespace XYLabelingStrategy {
    /**
     * strategy options
     */
    type Options = DefaultLabelingStrategy.Options & {
        /**
         * anchor value shift multiplier
         */
        anchorvalueshiftmult?: number;
        /**
         * number of columns
         */
        columns?: number;
        /**
         * label alignment
         */
        labelalignment?: AlignmentType;
    };
    /**
     * strategy options
     */
    type OptionsOut = Required<Options>;
}
