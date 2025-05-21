import { AbstractInterpolator } from '@int/geotoolkit/gridding/AbstractInterpolator';
/**
 * Class implements Thin Plate algorithm.
 * See {@link https://en.wikipedia.org/wiki/Thin_plate_spline} for more details.
 */
export declare class ThinPlateInterpolator extends AbstractInterpolator {
    constructor(options?: AbstractInterpolator.Options);
    protected train(xSeries: number[], ySeries: number[], zSeries: number[]): Promise<void>;
    getValues(xSeries: number[], ySeries: number[]): Promise<number[]>;
}
