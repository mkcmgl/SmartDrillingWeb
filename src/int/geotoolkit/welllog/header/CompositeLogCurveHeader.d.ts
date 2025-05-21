import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Defines default header implementation for {@link @int/geotoolkit/welllog/CompositeLogCurve~CompositeLogCurve} visual
 * @deprecated 4.0. Use {@link @int/geotoolkit/welllog/header/AdaptiveLogCurveVisualHeader~AdaptiveLogCurveVisualHeader} instead.
 */
export declare class CompositeLogCurveHeader extends LogVisualHeader<LogAbstractVisual> {
    /**
     * @param [options] header implementation for visual or properties object
     */
    constructor(options?: CompositeLogCurveHeader.Options | LogAbstractVisual);
    clone(): CompositeLogCurveHeader;
    protected copyConstructor(src: CompositeLogCurveHeader, deepCopy?: boolean): this;
    /**
     * Return header desired height
     */
    getDesiredHeight(): number;
    setVisual(visual: LogAbstractVisual): this;
    /**
     * Sets a current text style for displayed value
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     */
    setDisplayValueTextStyle(textStyle: TextStyle.Options | string | TextStyle, merge?: boolean): this;
    /**
     * Return a current text style for displayed value
     */
    getDisplayValueTextStyle(): TextStyle;
    render(context: RenderingContext): void;
    /**
     * Return marker depth to be used to display value. By default it is nan and value is not displayed
     */
    getDisplayMarkerDepth(): number;
    /**
     * Returns the number formatter for the min value
     */
    getMinValueFormat(): NumberFormat;
    /**
     * Returns the number formatter for the max value
     */
    getMaxValueFormat(): NumberFormat;
    /**
     * Returns the number formatter for the value
     */
    getValueFormat(): NumberFormat;
    /**
     * Update unit in header
     */
    updateUnit(): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): CompositeLogCurveHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: CompositeLogCurveHeader.Options): this;
}
export declare namespace CompositeLogCurveHeader {
    /**
     * header implementation for visual or properties object
     */
    type Options = LogVisualHeader.Options<LogAbstractVisual> & {
        /**
         * text style of the display value
         */
        displayvaluetextstyle?: TextStyle | string | TextStyle.Options;
        /**
         * NumberFormat
         */
        minvalueformat?: NumberFormat;
        /**
         * NumberFormat
         */
        maxvalueformat?: NumberFormat;
        /**
         * NumberFormat
         */
        valueformat?: NumberFormat;
    };
    /**
     * properties object
     */
    type OptionsOut = LogVisualHeader.OptionsOut & {
        /**
         * text style of the display value
         */
        displayvaluetextstyle: TextStyle;
        /**
         * NumberFormat
         */
        minvalueformat: NumberFormat;
        /**
         * NumberFormat
         */
        maxvalueformat: NumberFormat;
        /**
         * NumberFormat
         */
        valueformat: NumberFormat;
        /**
         * NumberFormat
         */
        markerdepth: number;
    };
}
