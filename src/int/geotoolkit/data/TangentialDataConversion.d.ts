/**
 * @module geotoolkit/data/TangentialDataConversion
 */
import { DataConversion } from '@int/geotoolkit/data/DataConversion';
/**
 * Data conversion based on tangential function
 */
export declare class TangentialDataConversion extends DataConversion {
    /**
     * Creates TangentialDataConversion
     * @param [options] properties object
     */
    constructor(options?: TangentialDataConversion.Options);
    /**
     * Creates TangentialDataConversion
     * @param [srcLow] lower source limit
     * @param [srcHigh] higher source limit
     * @param [dstLow] lower track destination limit
     * @param [dstHigh] higher track destination limit
     */
    constructor(srcLow?: number, srcHigh?: number, dstLow?: number, dstHigh?: number);
    direct(v: number): number;
    reverse(v: number): number;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): TangentialDataConversion.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: TangentialDataConversion.Options): this;
}
export declare namespace TangentialDataConversion {
    /**
     * JSON properties object
     */
    type Options = {
        /**
         * lower source limit
         */
        srclow?: number;
        /**
         * higher source limit
         */
        srchigh?: number;
        /**
         * lower track destination limit
         */
        dstlow?: number;
        /**
         * higher track destination limit
         */
        dsthigh?: number;
    };
    /**
     * JSON properties object
     */
    type OptionsOut = Required<Options>;
}
