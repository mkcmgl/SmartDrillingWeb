import { SnapPickingStrategy } from '@int/geotoolkit/seismic/data/snap/SnapPickingStrategy';
/**
 * Defines high window maximum picking strategy
 */
export declare class HighWindowMaximumPicking extends SnapPickingStrategy {
    /**
     * Creates strategy
     * @param [options] options object
     */
    constructor(options?: HighWindowMaximumPicking.Options);
}
export declare namespace HighWindowMaximumPicking {
    /**
     * options object
     */
    type Options = {
        /**
         * window size to search maximum
         */
        window?: number;
    };
}
