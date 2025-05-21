import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import type { LogBarVisual } from '@int/geotoolkit/welllog/LogBarVisual';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Define visual to render curve header
 */
export declare class LogBarVisualHeader extends LogVisualHeader<LogBarVisual> {
    /**
     * @param [options] visual for the header or properties object
     */
    constructor(options?: LogBarVisualHeader.Options | LogBarVisual);
    clone(): LogBarVisualHeader;
    protected copyConstructor(src: LogBarVisualHeader, deepCopy?: boolean): this;
    render(inputContext: RenderingContext): void;
    /**
     * Returns the number formatter for the min value
     */
    getMinValueFormat(): NumberFormat;
    /**
     * Returns the number formatter for the max value
     */
    getMaxValueFormat(): NumberFormat;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogBarVisualHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogBarVisualHeader.Options): this;
}
export declare namespace LogBarVisualHeader {
    /**
     * visual for the header or properties object
     */
    type Options = LogVisualHeader.Options<LogBarVisual> & {
        /**
         * number format for min value
         */
        minvalueformat?: NumberFormat;
        /**
         * number format for max value
         */
        maxvalueformat?: NumberFormat;
    };
    /**
     * properties object
     */
    type OptionsOut = LogVisualHeader.OptionsOut<LogBarVisual> & {
        /**
         * number format for min value
         */
        minvalueformat: NumberFormat;
        /**
         * number format for max value
         */
        maxvalueformat: NumberFormat;
    };
}
