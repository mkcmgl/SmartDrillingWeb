import { AdaptiveLogVisualHeader } from '@int/geotoolkit/welllog/header/AdaptiveLogVisualHeader';
import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import { SeismicImage } from '@int/geotoolkit/seismic/image/SeismicImage';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
export declare class AdaptiveSeismicImageHeader extends AdaptiveLogVisualHeader {
    /**
     * @param [options] options
     */
    constructor(options?: AdaptiveLogVisualHeader.Options | LogAbstractVisual | SeismicImage);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: AdaptiveSeismicImageHeader): this;
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
}
