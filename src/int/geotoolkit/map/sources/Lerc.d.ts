import { Vector } from '@int/geotoolkit/map/sources/Vector';
/**
 * Vector source that allows user to get features from remote resource in Lerc (Limited Error Raster Compression) format
 * Vector query mode cannot be changed, it is set to 'Bbox' permanently.
 */
export declare class Lerc extends Vector {
    /**
     * @param [options] source options
     */
    constructor(options?: Vector.Options);
}
