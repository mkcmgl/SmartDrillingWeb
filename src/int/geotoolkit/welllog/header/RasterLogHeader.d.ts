import { AdaptiveLogVisualHeader } from '@int/geotoolkit/welllog/header/AdaptiveLogVisualHeader';
import type { RasterLog } from '@int/geotoolkit/welllog/RasterLog';
/**
 * Define default header for {@link @int/geotoolkit/welllog/RasterLog~RasterLog}
 */
export declare class RasterLogHeader extends AdaptiveLogVisualHeader<RasterLog> {
    /**
     * @param [options] visual for the header or properties object
     */
    constructor(options?: RasterLogHeader.Options | RasterLog);
    clone(): RasterLogHeader;
    protected copyConstructor(src: RasterLogHeader, deepCopy?: boolean): this;
}
export declare namespace RasterLogHeader {
    /**
     * visual for the header or properties object
     */
    type Options = AdaptiveLogVisualHeader.Options<RasterLog>;
}
