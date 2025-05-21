import { SnapPickingStrategy } from '@int/geotoolkit/seismic/data/snap/SnapPickingStrategy';
/**
 * Defines high window minimum picking strategy
 */
export declare class HighWindowMinimumPicking extends SnapPickingStrategy {
    /**
     * Creates strategy
     * @param [options] options object
     */
    constructor(options?: HighWindowMinimumPicking.Options);
}
export declare namespace HighWindowMinimumPicking {
    /**
     * options object
     */
    type Options = {
        /**
         * window size to search minimum
         */
        window?: number;
    };
}
