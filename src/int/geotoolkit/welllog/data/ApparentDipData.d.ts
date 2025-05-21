import type { Range } from '@int/geotoolkit/util/Range';
/**
 * Define data object for apparent dip data
 */
export declare class ApparentDipData {
    /**
     * Constructor
     * @param [options] sample
     */
    constructor(options?: ApparentDipData.Options);
    /**
     * Get depth
     */
    getDepth(): number;
    /**
     * Get azimuth
     */
    getAzimuth(): number;
    /**
     * Get height
     */
    getHeight(): number;
    /**
     * Get angles range
     */
    getAngles(): Range;
    /**
     * Set properties
     *
     * @param [properties] properties
     */
    setProperties(properties?: ApparentDipData.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): ApparentDipData.OptionsOut;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace ApparentDipData {
    /**
     * sample
     */
    type Options = {
        /**
         * centered depth of the apparent dip
         */
        depth?: number;
        /**
         * azimuth of apparent dip
         */
        azimuth?: number;
        /**
         * height of apparent dip
         */
        height?: number;
        /**
         * angle range
         */
        angles?: Range;
    };
    /**
     * properties object
     */
    type OptionsOut = {
        /**
         * centered depth of the apparent dip
         */
        depth: number;
        /**
         * azimuth of apparent dip
         */
        azimuth: number;
        /**
         * height of apparent dip
         */
        height: number;
        /**
         * angle range
         */
        angles: Range;
    };
}
