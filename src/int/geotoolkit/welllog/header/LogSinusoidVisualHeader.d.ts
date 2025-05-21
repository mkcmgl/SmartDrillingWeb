import { LogCompositeVisualHeader } from '@int/geotoolkit/welllog/header/LogCompositeVisualHeader';
import type { LogSinusoid } from '@int/geotoolkit/welllog/LogSinusoid';
/**
 * Define visual to render sinusoid visual header
 */
export declare class LogSinusoidVisualHeader extends LogCompositeVisualHeader<LogSinusoid> {
    /**
     * @param [options] visual for the header or properties object
     */
    constructor(options?: LogSinusoidVisualHeader.Options | LogSinusoid);
    clone(): LogSinusoidVisualHeader;
    protected copyConstructor(src: LogSinusoidVisualHeader, deepCopy?: boolean): this;
    setVisual(visual: LogSinusoid): this;
}
export declare namespace LogSinusoidVisualHeader {
    /**
     * visual for the header or properties object
     */
    type Options = LogCompositeVisualHeader.Options<LogSinusoid>;
}
