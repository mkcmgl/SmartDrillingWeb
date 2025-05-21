import { LogFill } from '@int/geotoolkit/welllog/LogFill';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Define visual to render curve header
 */
export declare class LogFillVisualHeader extends LogVisualHeader<LogFill> {
    /**
     * @param [options] visual visual for curve header or properties object
     */
    constructor(options?: LogFillVisualHeader.Options | LogFill);
    clone(): LogFillVisualHeader;
    protected copyConstructor(src: LogFillVisualHeader, deepCopy?: boolean): this;
    /**
     * Sets a current text style for displayed value
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setDisplayNamesTextStyle(textStyle: TextStyle.Options | string | TextStyle | null, merge?: boolean): this;
    /**
     * Return a current text style for displayed value
     */
    getDisplayNamesTextStyle(): TextStyle;
    render(inputContext: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogFillVisualHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogFillVisualHeader.Options): this;
}
export declare namespace LogFillVisualHeader {
    /**
     * visual for curve header or properties object
     */
    type Options = LogVisualHeader.Options<LogFill> & {
        /**
         * display value textstyle
         */
        displaynamestextstyle?: TextStyle | string | TextStyle.Options;
        /**
         * symbol to be used
         */
        symbol?: SymbolShape;
    };
    /**
     * properties object
     */
    type OptionsOut = LogVisualHeader.OptionsOut<LogFill> & {
        /**
         * display value textstyle
         */
        displaynamestextstyle: TextStyle;
        /**
         * symbol to be used
         */
        symbol: SymbolShape;
    };
}
