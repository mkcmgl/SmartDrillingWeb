/**
 * @module geotoolkit/controls/util/regression/Power
 */
import { RegressionBase } from '@int/geotoolkit/controls/util/regression/RegressionBase';
/**
 * generate a power regression model
 */
export declare class Power extends RegressionBase {
    constructor(options?: RegressionBase.Options);
    /**
     * fit curve
     * @param dataX data array of observations x
     * @param dataY data array in observations y
     * @param weights of data point
     */
    fit(dataX: number[], dataY: number[], weights: number[]): void;
}
