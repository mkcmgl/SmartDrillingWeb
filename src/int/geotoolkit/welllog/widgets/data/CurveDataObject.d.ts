import { DataObject } from '@int/geotoolkit/data/DataObject';
/**
 * Define abstract curve data object which provides samples and indices together
 * @deprecated since 4.0
 */
export declare class CurveDataObject extends DataObject {
    constructor(options?: DataObject.Options);
    /**
     * Request load data
     * @param options additional parameters of curve data passed to callback function
     * @param callback function called to request data
     */
    getData(options: any, callback: (arg: number[]) => void): void;
}
