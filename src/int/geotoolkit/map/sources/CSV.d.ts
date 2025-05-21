import { Vector } from '@int/geotoolkit/map/sources/Vector';
/**
 * Vector source that allows user to get features from remote resource in CSV (Comma-Separated Values) format
 */
export declare class CSV extends Vector {
    /**
     * @param [options] options
     */
    constructor(options?: CSV.Options);
    /**
     * Sets the latitude coordinate field name(s)
     * @param field latitude field name(s)
     * @returns this
     */
    setLatitudeField(field: string | string[]): this;
    /**
     * Returns the latitude coordinate field name(s)
     * @returns field field name(s)
     */
    getLatitudeField(): string | string[];
    /**
     * Sets the longitude coordinate field name(s)
     * @param field longitude field name(s)
     * @returns this
     */
    setLongitudeField(field: string): this;
    /**
     * Returns the longitude coordinate field name(s)
     * @returns field field name(s)
     */
    getLongitudeField(): string | string[];
    /**
     * Sets CSV format data delimiter
     * @param delimiter data delimiter
     * @returns this
     */
    setDelimiter(delimiter: string): this;
    /**
     * Returns current CSV data delimiter
     */
    getDelimiter(): string;
}
export declare namespace CSV {
    /**
     * options
     */
    type Options = Vector.Options & {
        /**
         * data delimiter, ',' symbol is used for CSV format by default
         */
        delimiter?: string;
        /**
         * string(s) defining the field name(s) that holds the longitude (X) coordinate
         */
        longitudefield?: string | string[];
        /**
         * string(s) defining the field name(s) that holds the latitude (Y) coordinate
         */
        latitudefield?: string | string[];
    };
}
