/**
 * @module geotoolkit/controls/util/regression/Exponential
 */
import { RegressionBase } from '@int/geotoolkit/controls/util/regression/RegressionBase';
/**
 * generate a exponential regression model
 */
export declare class Exponential extends RegressionBase {
    constructor(options?: RegressionBase.Options);
    /**
     * fit curve
     * @param dataX data array of observations x
     * @param dataY data array in observations y
     * @param weights of data point
     */
    fit(dataX: number[], dataY: number[], weights: number[]): void;
    /**
     * get x value of edge point where derivative of regression line is 1 or -1 after adjust scale of x and y
     * @param [scale] scale
     */
    getEdge(scale?: number): number;
    /**
     * predict x value with given y value
     * @param dataY single value y
     * @returns predictedDataX predicted x value
     */
    inversePredict(dataY: number): number;
    /**
     * predict x values with given y value
     * @param dataY data set of Y
     * @returns predictedDataX predicted x values
     */
    inversePredict(dataY: number[]): number[];
}
