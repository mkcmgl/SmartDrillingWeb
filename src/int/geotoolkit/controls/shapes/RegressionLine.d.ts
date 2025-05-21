/**
 * @module geotoolkit/controls/shapes/RegressionLine
 */
import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Probability, RegressionBase } from '@int/geotoolkit/controls/util/regression/RegressionBase';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { INumericalDataSeries } from '@int/geotoolkit/data/INumericalDataSeries';
/**
 * RegressionLine shape wrap a regression model and draw the curve (and also confidence and prediction interval)
 * for the given data set x and y based on the model
 */
export declare class RegressionLine extends ScaledShape {
    constructor(options?: RegressionLine.Options | LineStyle | string);
    /**
     * set options for shape
     * @param options options
     */
    setOptions(options: RegressionLine.OptionsBase): this;
    /**
     * set model limits of shape
     * @param limits model limits
     * @returns this
     */
    setModelLimits(limits: Rect): this;
    /**
     * get model limits of shape
     * @returns limits
     */
    getModelLimits(): Rect | null;
    /**
     * set model bounds of shape
     * @param bounds model bounds
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * get model bounds of shape
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * set properties for shape
     * @param properties properties
     * @returns this
     */
    setProperties(properties?: RegressionLine.Options): this;
    /**
     * get properties of shape
     * @returns properties
     */
    getProperties(): RegressionLine.OptionsOut;
    /**
     * get options for regression model
     */
    getRegressionModelOptions(): RegressionBase.OptionsOut & {
        type: RegressionBase;
    };
    /**
     * get options of shape
     */
    getOptions(): RegressionLine.OptionsBaseOut;
    /**
     * set if extend x limits of curve from the limit of data set x to the x model limits(since they could be different)
     * @param extended the flag to determine if extend x limits
     * @returns this
     */
    setExtended(extended: boolean): this;
    /**
     * set the interval when sampling the x for drawing curve
     * @param interval the sampling interval in screen pixel
     * @returns this
     */
    setPlotInterval(interval: number): this;
    /**
     * set data source for x and y
     * @param data data
     * @param [incremental] incremental
     * @returns this
     */
    setData(data: RegressionLine.DataOptions, incremental?: boolean): this;
    /**
     * get statistics of regression model
     */
    getStatistics(): RegressionBase.Statistics;
    render(context: RenderingContext): void;
    /**
     * get current regression model
     * @returns resolved regression model
     */
    getRegressionModel(): RegressionBase | null;
}
export declare namespace RegressionLine {
    type Options = Shape.Options & OptionsBase & DataOptions;
    /**
     * properties
     */
    type OptionsOut = Shape.OptionsOut & OptionsBase & DataOptions;
    /**
     * options
     */
    type OptionsBase = {
        /**
         * the flag if extend x limits of curve to the limits of shape's model limits
         */
        extended?: boolean;
        /**
         * the interval of sampling x when drawing curve
         */
        plotinterval?: number;
        /**
         * options for regression model
         */
        regressionmodel?: RegressionBase.Options & {
            type?: RegressionBase | RegressionBase.PredictFunction | typeof RegressionBase;
            /**
             * the order of polynomial formula
             */
            order?: number;
        };
        /**
         * options for regression line
         */
        regressionline?: LineOptions;
        /**
         * options for confidence line
         */
        confidenceline?: ProbabilityLineOptions;
        /**
         * options for prediction line
         */
        predictionline?: ProbabilityLineOptions;
        /**
         * Log mode in horizontal direction
         */
        horizontallogmode?: boolean;
        /**
         * Log mode in vertical direction
         */
        verticallogmode?: boolean;
    };
    type OptionsBaseOut = {
        plotinterval: number;
        extended: boolean;
        regressionmodel: RegressionBase.OptionsOut & {
            type: RegressionBase;
        };
        regressionline: LineOptions;
        confidenceline: ProbabilityLineOptions;
        predictionline: ProbabilityLineOptions;
    };
    /**
     * data
     */
    type DataOptions = {
        /**
         * data source for x
         */
        datax?: number[] | INumericalDataSeries;
        /**
         * data source for y
         */
        datay?: number[] | INumericalDataSeries;
        /**
         * weights of data point
         */
        weights?: number[] | INumericalDataSeries;
    };
    /**
     * options for setting line
     */
    type LineOptions = {
        /**
         * set line style of this type of line
         */
        linestyle?: LineStyle.Type;
        /**
         * set visibility of this type of line
         */
        visible?: boolean;
    };
    /**
     * options
     */
    type ProbabilityLineOptions = LineOptions & {
        /**
         * the probability for looking up t-table to determine interval the rest see setLineOptions for details
         */
        probability?: Probability;
    };
}
