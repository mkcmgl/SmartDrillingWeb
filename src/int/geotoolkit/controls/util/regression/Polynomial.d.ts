import { RegressionBase } from '@int/geotoolkit/controls/util/regression/RegressionBase';
/**
 * generate a polynomial regression model
 */
export declare class Polynomial extends RegressionBase {
    constructor(options?: Polynomial.Options);
    /**
     * set options for model
     * @param options options
     * @returns this
     */
    setOptions(options: Polynomial.Options): this;
    /** */
    getOptions(): Polynomial.OptionsOut;
    /**
     * reset regression model to fit new data set
     */
    resetModel(): void;
    /**
     * fit curve
     * @param dataX data array of observations x
     * @param dataY data array in observations y
     * @param weights of data point
     */
    fit(dataX: number[], dataY: number[], weights: number[]): void;
}
export declare namespace Polynomial {
    /**
     * options
     */
    type Options = RegressionBase.Options & {
        /**
         * the order of polynomial formula
         */
        order?: number;
    };
    type OptionsOut = RegressionBase.OptionsOut & {
        /**
         * the order of polynomial formula
         */
        order: number;
    };
}
