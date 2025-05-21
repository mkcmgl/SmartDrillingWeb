import { BaseConverter } from '@int/geotoolkit/map/features/converters/BaseConverter';
/**
 * Converts features into a scaled view in purpose of simplify geometry and remove unnecessary points using RDP(Ramer-Douglas-Peucker) algorithm.
 * Only multipoint-like features are supported.
 */
export declare class RDP extends BaseConverter {
    constructor();
}
