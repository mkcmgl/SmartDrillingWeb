import { AbstractInterpolator } from '@int/geotoolkit/gridding/AbstractInterpolator';
import { VariogramModel } from '@int/geotoolkit/gridding/VariogramModel';
/**
 * Class implements Kriging algorithm.
 * See {@link https://en.wikipedia.org/wiki/Kriging} for more details.
 * (based on implementation by Omar Olmedo, released under The MIT License)
 */
export declare class KrigingInterpolator extends AbstractInterpolator {
    constructor(options?: KrigingInterpolator.Options);
    protected train(xSeries: number[], ySeries: number[], zSeries: number[]): Promise<void>;
    getValues(xSeries: number[], ySeries: number[]): Promise<number[]>;
}
export declare namespace KrigingInterpolator {
    /**
     * JSON options
     */
    type Options = AbstractInterpolator.Options & {
        /**
         * Variogram model
         */
        model?: VariogramModel;
        /**
         * sigma^2 coeff
         */
        sigma2?: number;
        /**
         * alfa coeff
         */
        alfa?: number;
    };
}
