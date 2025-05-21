import type { Rect } from '@int/geotoolkit/util/Rect';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * This layer is a collection of geotoolkit shapes that will be displayed on a map
 * Setting the limits will change the extents of the map.
 */
export declare class Query {
    /**
     * @param [options] options
     */
    constructor(options?: Query.Options);
    /**
     * sets the geometry for this query
     * @param geo geometry
     */
    setGeometry(geo: Rect): this;
    /**
     * sets the search properties for this query
     * @param properties options
     * @returns this
     */
    setProperties(properties?: Query.Options): this;
    /**
     * sets the name field for this query
     *
     * @param name name
     */
    setName(name: string): this;
    /**
     * gets the name field for this query
     */
    getName(): string;
    /**
     * gets the geometry for this query
     */
    getGeometry(): Rect;
    /**
     * Returns the properties for this query
     * @returns options
     */
    getProperties(): Query.Options;
    /**
     * sets the filter for this query
     *
     * @param filter filter function
     */
    setFilter(filter: (feature: AbstractFeature) => boolean): this;
    /**
     * gets the filter for this query
     */
    getFilter(): (feature: AbstractFeature) => boolean;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Query {
    /**
     * options
     */
    type Options = {
        /**
         * spatial geometry in map coordinate system to define the query
         */
        geometry?: Rect;
        /**
         * Map of properties to look for
         */
        properties?: Record<string, any>;
        /**
         * node filter that will return true to keep the element
         */
        filter?: (feature: AbstractFeature) => boolean;
        /**
         * name
         */
        name?: string;
    };
}
