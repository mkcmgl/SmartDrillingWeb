import { Vector } from '@int/geotoolkit/map/layers/Vector';
/**
 * This layer connects to an Web Feature Service and displays received features from that server.
 */
export declare class WFS extends Vector {
    /**
     * @param [options] options
     */
    constructor(options?: WFS.Options);
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing the properties
     */
    getProperties(): WFS.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] options
     * @returns this
     */
    setProperties(properties: WFS.Options): this;
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
    };
    /**
     * object containing the properties
     */
    type OptionsOut = Vector.OptionsOut & {
        /**
         * featureType name(s) receiving from the server
         */
        featuretypes?: string[] | string;
    };
}
