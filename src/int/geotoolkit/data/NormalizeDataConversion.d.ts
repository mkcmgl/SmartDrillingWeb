/**
 * @module geotoolkit/data/NormalizeDataConversion
 */
import { DataConversion } from '@int/geotoolkit/data/DataConversion';
export declare class NormalizeDataConversion extends DataConversion {
    constructor(options?: NormalizeDataConversion.Options);
    constructor(min?: number, max?: number);
    direct(v: number): number;
    reverse(v: number): number;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): NormalizeDataConversion.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: NormalizeDataConversion.Options): this;
}
export declare namespace NormalizeDataConversion {
    /**
     * JSON properties object
     */
    type Options = {
        /**
         * lower source limit
         */
        min?: number;
        /**
         * higher source limit
         */
        max?: number;
    };
    /**
     * JSON properties object
     */
    type OptionsOut = Required<Options>;
}
