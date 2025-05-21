/**
 * @module geotoolkit/welllog/header/AdaptiveLog2DVisualHeader
 */
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import { AdaptiveLogVisualHeader } from '@int/geotoolkit/welllog/header/AdaptiveLogVisualHeader';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Log2DVisual } from '@int/geotoolkit/welllog/Log2DVisual';
/**
 * Adaptive header for Log2d visual
 */
export declare class AdaptiveLog2DVisualHeader extends AdaptiveLogVisualHeader<Log2DVisual> {
    /**
     * @param [options] visual or properties object
     */
    constructor(options?: AdaptiveLog2DVisualHeader.Options | Log2DVisual);
    clone(): AdaptiveLog2DVisualHeader;
    protected copyConstructor(src: AdaptiveLog2DVisualHeader, deepCopy?: boolean): this;
    /**
     * Gets a flag indicating if cursor enabled or not
     * @returns true if cursor enabled and false otherwise
     */
    isCursorEnabled(): boolean;
    /**
     * Sets a flag indicating if cursor enabled or not
     * @param enabled cursor enabled/disabled flag
     * @returns this
     */
    setCursorEnabled(enabled: boolean): this;
    /**
     * Gets a flag indicating if cursor value is visible or not
     * @returns true if cursor value is visible and false otherwise
     */
    isCursorValueVisible(): boolean;
    /**
     * Sets a visible indicating if cursor value is visible or not
     * @param visible visibility state
     * @returns this
     */
    setCursorValueVisible(visible: boolean): this;
    /**
     * Returns the number formatter for the cursor value
     * @returns the number formatter for the cursor value
     */
    getCursorValueFormat(): NumberFormat;
    /**
     * Sets the number formatter for the current value
     * @param format number format
     * @returns this
     */
    setCursorValueFormat(format: NumberFormat): this;
    /**
     * Returns the text style for the cursor value
     * @returns the text style for the cursor value
     */
    getCursorValueTextStyle(): TextStyle;
    /**
     * Sets the text style for the current value
     * @param textStyle text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setCursorValueTextStyle(textStyle: TextStyle | string | TextStyle.Options, merge?: boolean): this;
    /**
     * Returns the cursor line style
     * @returns the cursor line style
     */
    getCursorLineStyle(): LineStyle | null;
    /**
     * Sets the cursor line style
     * @param lineStyle line style
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setCursorLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Returns the cursor pointer fill style
     * @returns the cursor pointer fill style
     */
    getCursorFillStyle(): FillStyle | null;
    /**
     * Sets the cursor pointer fill style
     * @param fillStyle fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setCursorFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Return true if the representation is flipped horizontally
     *
     * @returns horizontal flip
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     *
     * @param enable enable flip
     * @returns this
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * <code>getWorldTransform</code> retrieves the local transformation
     * of the node which represents multiplication of parent to bounds and
     * contents transformations.
     */
    getWorldTransform(): Transformation;
    /**
     * Returns the number formatter for the min value
     */
    getMinValueFormat(): NumberFormat;
    /**
     * Returns the number formatter for the max value
     */
    getMaxValueFormat(): NumberFormat;
    /**
     * Sets the number formatter for the min value
     * @param format number format
     */
    setMinValueFormat(format: NumberFormat): this;
    /**
     * Sets the number formatter for the max value
     * @param format number format
     */
    setMaxValueFormat(format: NumberFormat): this;
    /**
     * Sets all properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: AdaptiveLog2DVisualHeader.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): AdaptiveLog2DVisualHeader.OptionsOut;
}
export declare namespace AdaptiveLog2DVisualHeader {
    /**
     * visual or properties object
     */
    type Options = AdaptiveLogVisualHeader.Options<Log2DVisual> & {
        /**
         * min value number format
         */
        minvalueformat?: NumberFormat;
        /**
         * max value number format
         */
        maxvalueformat?: NumberFormat;
        /**
         * cursor properties
         */
        cursor?: CursorProperties;
    };
    /**
     * properties
     */
    type OptionsOut = AdaptiveLogVisualHeader.OptionsOut<Log2DVisual> & {
        /**
         * min value number format
         */
        minvalueformat: NumberFormat;
        /**
         * max value number format
         */
        maxvalueformat: NumberFormat;
        /**
         * cursor properties
         */
        cursor: {
            /**
             * current value number format
             */
            valueformat: NumberFormat;
            /**
             * cursor line style
             */
            linestyle: LineStyle;
            /**
             * cursor pointer fill style
             */
            fillstyle: FillStyle;
            /**
             * cursor value text style
             */
            valuetextstyle: TextStyle;
            /**
             * cursor value visibility state
             */
            valuevisible: boolean;
            /**
             * cursor enabled flag
             */
            enabled: boolean;
        };
    };
    /**
     * properties
     */
    type CursorProperties = {
        /**
         * cursor value number format
         */
        valueformat?: NumberFormat;
        /**
         * cursor line style
         */
        linestyle?: LineStyle.Type;
        /**
         * cursor pointer fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * cursor value text style
         */
        valuetextstyle?: TextStyle | TextStyle.Options | string;
        /**
         * cursor value visibility state
         */
        valuevisible?: boolean;
        /**
         * cursor enabled/disabled flag
         */
        enabled?: boolean;
    };
}
