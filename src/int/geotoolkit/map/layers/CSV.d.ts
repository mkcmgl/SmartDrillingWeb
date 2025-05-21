import { CSV as CSVSource } from '@int/geotoolkit/map/sources/CSV';
import { Vector } from '@int/geotoolkit/map/layers/Vector';
import type { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
/**
 * The implementation is capable of loading CSV (Comma-Separated Values) data.<br>
 */
export declare class CSV extends Vector {
    /**
     * @param [options] options
     */
    constructor(options?: CSV.Options);
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing the properties
     */
    getProperties(): CSV.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] options
     * @returns this
     */
    setProperties(properties: CSV.Options): this;
}
export declare namespace CSV {
    /**
     * options
     */
    type Options = Vector.Options & {
        /**
         * the layer data source
         */
        source?: CSVSource;
        /**
         * initial data coordinate system
         */
        system?: string | AbstractSystem;
        /**
         * string defining the field name that holds the longitude (X) coordinate
         */
        longitudefield?: string;
        /**
         * string defining the field name that holds the latitude (Y) coordinate
         */
        latitudefield?: string;
        /**
         * CSV format data delimiter
         */
        delimiter?: string;
    };
    /**
     * object containing the properties
     */
    type OptionsOut = Vector.OptionsOut & {
        /**
         * the layer data source
         */
        source?: CSVSource;
        /**
         * the source latitude coordinate field name
         */
        latitudefield?: string | string[];
        /**
         * the source longitude coordinate field name
         */
        longitudefield?: string | string[];
        /**
         * CSV format data delimiter
         */
        delimiter?: string;
    };
}
