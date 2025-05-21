import { Vector } from '@int/geotoolkit/map/sources/Vector';
/**
 * Vector source that allows user to get features from WFS (Web Feature Service) server
 */
export declare class WFS extends Vector {
    /**
     * @param [options] options
     */
    constructor(options?: WFS.Options);
    /**
     * Sets the featureTypes parameter sent to the server. The first one from the list is used, if no types provided
     * @param [types] featureType name(s) to receive from the server
     * @returns this
     */
    setFeatureTypes(types?: string[] | string): this;
    /**
     * Returns the featureTypes parameter sent to the server.
     * @returns types featureType name(s) receiving from the server
     */
    getFeatureTypes(): string[] | string;
}
export declare namespace WFS {
    /**
     * options
     */
    type Options = Vector.Options & {
        /**
         * featureType name(s) to receive from the server
         */
        featuretypes?: string[] | string;
        /**
         * WFS version to use
         */
        version?: string;
    };
}
