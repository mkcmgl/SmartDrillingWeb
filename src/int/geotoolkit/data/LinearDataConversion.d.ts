/**
 * @module geotoolkit/data/LinearDataConversion
 */
import { DataConversion } from '@int/geotoolkit/data/DataConversion';
export declare class LinearDataConversion extends DataConversion {
    constructor(options?: LinearDataConversion.Options);
    constructor(srcLow?: number, srcHigh?: number, dstLow?: number, dstHigh?: number);
    direct(v: number): number;
    reverse(v: number): number;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LinearDataConversion.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: LinearDataConversion.Options): this;
}
export declare namespace LinearDataConversion {
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
         * track destination limit
         */
        dstlow?: number;
        /**
         * track destination limit
         */
        dsthigh?: number;
    };
    /**
     * JSON properties object
     */
    type OptionsOut = Required<Options>;
}
