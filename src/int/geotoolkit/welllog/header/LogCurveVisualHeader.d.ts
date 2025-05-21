import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LogCurve } from '@int/geotoolkit/welllog/LogCurve';
/**
 * Define visual to render curve header
 * @deprecated 4.0. Use {@link @int/geotoolkit/welllog/header/AdaptiveLogCurveVisualHeader~AdaptiveLogCurveVisualHeader} instead.
 */
export declare class LogCurveVisualHeader extends LogVisualHeader<LogCurve> {
    /**
     * @param [options] visual for the header or properties object
     */
    constructor(options?: LogCurveVisualHeader.Options | LogCurve);
    clone(): LogCurveVisualHeader;
    protected copyConstructor(src: LogCurveVisualHeader, deepCopy?: boolean): this;
    /**
     * Sets a current text style for displayed value
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setDisplayValueTextStyle(textStyle: TextStyle.Options | string | TextStyle | null, merge?: boolean): this;
    /**
     * Return a current text style for displayed value
     */
    getDisplayValueTextStyle(): TextStyle;
    /**
     * Sets symbol to be used
     *
     * @param symbol symbol to be used
     * @returns this
     */
    setSymbol(symbol: SymbolShape): this;
    /**
     * Gets symbol
     */
    getSymbol(): SymbolShape;
    /**
     * Sets inline mode
     *
     * @param inline mode to draw everything in one line
     * @returns this
     */
    setInline(inline: boolean): this;
    /**
     * gets inline mode
     */
    getInline(): boolean;
    /**
     * Return marker depth to be used to display value. By default it is nan and value is not displayed
     */
    getDisplayMarkerDepth(): number;
    /**
     * Returns the number formatter for the min value
     */
    getMinValueFormat(): NumberFormat;
    /**
     * Sets the number formatter for the min value
     * @param format number formatter
     * @returns this
     */
    setMinValueFormat(format: NumberFormat): this;
    /**
     * Returns the number formatter for the max value
     */
    getMaxValueFormat(): NumberFormat;
    /**
     * Sets the number formatter for the max value
     * @param format number formatter
     * @returns this
     */
    setMaxValueFormat(format: NumberFormat): this;
    /**
     * Returns the number formatter for the value
     */
    getValueFormat(): NumberFormat;
    render(inputContext: RenderingContext): void;
    /**
     * Gets value at last, first or custom depth position
     */
    getDisplayValue(): number;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogCurveVisualHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogCurveVisualHeader.Options): this;
}
export declare namespace LogCurveVisualHeader {
    /**
     * visual for the header or properties object
     */
    type Options = LogVisualHeader.Options<LogCurve> & {
        /**
         * text style of the displayed value
         */
        displayvaluetextstyle?: TextStyle | string | object;
        /**
         * symbol to be displayed
         */
        symbol?: SymbolShape;
        /**
         * draw inline or no
         */
        inline?: boolean;
        /**
         * number format
         */
        minvalueformat?: NumberFormat;
        /**
         * number format
         */
        maxvalueformat?: NumberFormat;
        /**
         * number format for value
         */
        valueformat?: NumberFormat;
    };
    /**
     * properties object
     */
    type OptionsOut = LogVisualHeader.OptionsOut & {
        /**
         * text style of the displayed value
         */
        displayvaluetextstyle: TextStyle;
        /**
         * symbol to be displayed
         */
        symbol: SymbolShape;
        /**
         * draw inline or no
         */
        inline: boolean;
        /**
         * number format
         */
        minvalueformat: NumberFormat;
        /**
         * number format
         */
        maxvalueformat: NumberFormat;
        /**
         * number format for value
         */
        valueformat: NumberFormat;
    };
}
