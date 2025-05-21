/**
 * @module geotoolkit/controls/util/regression/RegressionBase
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
/**
 * Type of events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * emit when model or its properties changed
     */
    UpdatedModel = "updatedmodel"
}
/**
 * pre-defined probability value of confidence level when picking value from t-table
 * @enum
 * @readonly
 */
export declare enum Probability {
    /**
     * fixed 80%
     */
    P80 = "P80",
    /**
     * fixed 90%
     */
    P90 = "P90",
    /**
     * fixed 95%
     */
    P95 = "P95",
    /**
     * fixed 99%
     */
    P99 = "P99"
}
/**
 * Base class of regression model
 */
export declare class RegressionBase extends EventDispatcher {
    /**
     * Regression base
     * @param [options] see setOptions and setData for details
     * @param [customFunc] custom function to represent regression model
     */
    constructor(options?: RegressionBase.Options, customFunc?: RegressionBase.PredictFunction);
    on<E extends keyof RegressionBase.EventMap>(type: E, callback: (eventType: E, sender: this, args: RegressionBase.EventMap[E]) => void): this;
    off<E extends keyof RegressionBase.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: RegressionBase.EventMap[E]) => void): this;
    notify<E extends keyof RegressionBase.EventMap>(type: E, source: RegressionBase, args?: RegressionBase.EventMap[E]): this;
    /**
     * fit the curve with given data set
     * the subclass of RegressionBase need to support incremental fitting by default
     * that means the model have to keep necessary intermediate values as properties
     * which can be used to do incremental calculating when add new data point to model
     * @param dataX data set x
     * @param dataY data set y
     * @param weights of data point
     */
    fit(dataX: number[], dataY: number[], weights: number[]): void;
    /**
     * get all data for training
     */
    getData(): RegressionBase.DataOut;
    /**
     * predict y value with given x value
     * @param dataX single value x
     * @returns predictedDataY predicted y value
     */
    predict(dataX: number): number;
    /**
     * predict y values with given x value
     * @param dataX data set of X
     * @returns predictedDataY predicted y values
     */
    predict(dataX: number[]): number[];
    /**
     * set options
     * @param options options
     * @returns this
     */
    setOptions(options: RegressionBase.Options): this;
    /**
     * reset the model including all intermediate variables and training data
     */
    resetModel(): void;
    /**
     * get customized coefficients flag
     * @returns customizedCoef
     */
    isCustomizedCoef(): boolean;
    /**
     * get options
     * @returns options
     */
    getOptions(): RegressionBase.OptionsOut;
    /**
     * Sets properties
     * @param properties options
     * @returns this
     */
    setProperties(properties?: RegressionBase.Options): this;
    /**
     * get properties
     * @returns properties
     */
    getProperties(): RegressionBase.OptionsOut;
    /**
     * set probability for looking up t-table to determine confidence interval
     * @param prob probability
     * @returns this
     */
    setConfidenceProbability(prob: Probability): this;
    /**
     * get probability for determine confidence interval
     * @returns probability
     */
    getConfidenceProbability(): Probability;
    /**
     * set probability for looking up t-table to determine prediction interval
     * @param prob probability
     * @returns this
     */
    setPredictionProbability(prob: Probability): this;
    /**
     * get probability for determine prediction interval
     * @returns probability
     */
    getPredictionProbability(): Probability;
    /**
     * get mean value for data set x or y
     * @param axis axis could be 'x' or 'y'
     * @returns return mean value of data set
     */
    getMean(axis: 'x' | 'y'): number | null;
    /**
     * get sum squared for data set x or y
     * @param axis axis could be 'x' or 'y'
     * @returns return sum squared value of data set
     */
    getTotalSumSquared(axis: 'x' | 'y'): number | null;
    /**
     * get sum squared of residual
     * @returns return sum squared of residual
     */
    getSumSquaredResidual(): number | null;
    /**
     * get degree of freedom
     * @returns return degree of freedom
     */
    getDegreeOfFreedom(): number;
    /**
     * get R squared value
     * @returns return R squared value
     */
    getRsquared(): number | null;
    /**
     * get array of residuals
     * @returns residuals array of residuals
     */
    getResiduals(): number[] | null;
    /**
     * get confidence interval for given x value
     * @param x given value to determine the confidence interval
     * @returns return confidence interval for x
     */
    getConfidenceInterval(x: number): number | null;
    /**
     * get prediction interval for given x value
     * @param x given value to determine the prediction interval
     * @returns return prediction interval for x
     */
    getPredictionInterval(x: number): number | null;
    /**
     * get statistics of regression analysis
     */
    getStatistics(): RegressionBase.Statistics;
    /**
     * get coefficients
     */
    getCoefficients(): number[];
}
export declare namespace RegressionBase {
    /**
     * see setOptions and setData for details
     */
    type Options = {
        /**
         * array of coefficients
         */
        coefficients?: number[];
        /**
         * custom function to represent regression model
         */
        customfunc?: PredictFunction;
    };
    type PredictFunction = (number: number) => number;
    type DataOut = {
        /**
         * array of x
         */
        datax: number[];
        /**
         * array of y
         */
        datay: number[];
        /**
         * array of weights
         */
        weights: number[];
    };
    type OptionsOut = {
        /**
         * array of coefficients
         */
        coefficients: number[];
        /**
         * custom function to represent regression model
         */
        customfunc: PredictFunction;
    };
    type Statistics = {
        /**
         * R squared value
         */
        rsquared: number;
        /**
         * mean value of data set x
         */
        meanx: number;
        /**
         * mean value of data set y
         */
        meany: number;
        /**
         * degree of freedom
         */
        df: number;
        /**
         * sum squared of x
         */
        sumsquaredx: number;
        /**
         * sum squared of y
         */
        sumsquaredy: number;
        /**
         * sum squared of residuals
         */
        sumsquaredres: number;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.UpdatedModel]: RegressionBase;
    };
}
