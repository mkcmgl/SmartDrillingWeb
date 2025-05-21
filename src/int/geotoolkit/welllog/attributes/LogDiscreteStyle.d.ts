import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import { LogDataStyle } from '@int/geotoolkit/welllog/attributes/LogDataStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { DiscreteGradientColorProvider } from '@int/geotoolkit/util/DiscreteGradientColorProvider';
import type { HsvColor } from '@int/geotoolkit/util/HsvColor';
/**
 * fill type
 * @enum
 * @readonly
 */
export declare enum FillType {
    /**
     * color provider
     */
    ColorProvider = "ColorProvider",
    /**
     * discrete
     */
    Discrete = "Discrete",
    /**
     * continuous
     */
    Continuous = "Continuous"
}
/**
 * Defines log discrete fill style. This fillstyle has an array of value ranges and an array of corresponding fillstyles.
 */
export declare class LogDiscreteStyle extends LogDataStyle {
    constructor(options: LogDiscreteStyle.Options);
    constructor(color?: RgbaColor | HsvColor | FillStyle | string);
    getValueColor(x: number, depth: number, y?: number, ratio?: number): RgbaColor | null;
    /**
     * Returns array of ranges
     * @returns ranges array of ranges
     */
    getRanges(): number[][];
    /**
     * Sets array of ranges
     * @param ranges array of ranges
     */
    setRanges(ranges: number[][]): this;
    /**
     * Returns array of ranges
     * @returns codes array of codes
     */
    getCodes(): number[];
    /**
     * Sets array of codes
     * @param codes array of codes
     */
    setCodes(codes: number[]): this;
    /**
     * Returns filltype
     * @returns filltype
     */
    getFillType(): FillType;
    /**
     * Sets filltype
     * @param filltype filltype
     */
    setFillType(filltype: FillType): this;
    /**
     * Returns color provider
     * @returns colorprovider
     */
    getColorProvider(): DiscreteGradientColorProvider;
    /**
     * Sets colorprovider
     * @param colorprovider color provider
     */
    setColorProvider(colorprovider: DiscreteGradientColorProvider): this;
    /**
     * Returns array of fillstyles
     * @returns fillstyles list of fillstyles
     */
    getFillStyles(): FillStyle[];
    /**
     * Sets array of fillstyles
     * @param fillStyles list of fillstyles
     */
    setFillStyles(fillStyles: FillStyle[]): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): LogDiscreteStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogDiscreteStyle.Options): this;
}
export declare namespace LogDiscreteStyle {
    /**
     * properties object
     */
    type Options = LogDataStyle.Options & {
        /**
         * the fill type
         */
        type?: FillType;
        /**
         * the color provider
         */
        colorprovider?: DiscreteGradientColorProvider;
        /**
         * list of fillstyles
         */
        fillstyles?: FillStyle[];
        /**
         * array of ranges
         */
        ranges?: number[][];
        /**
         * code value for each section
         */
        codes?: number[];
    };
    type OptionsOut = LogDataStyle.OptionsOut & {
        /**
         * list of fillstyles
         */
        fillstyles: FillStyle[];
        /**
         * array of ranges
         */
        ranges: number[][];
        /**
         * array of codes
         */
        codes: number[];
        /**
         * fill type
         */
        type: FillType;
        /**
         * color provider
         */
        colorprovider?: DiscreteGradientColorProvider;
    };
}
