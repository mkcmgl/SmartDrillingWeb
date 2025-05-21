import { TimeSeriesShape } from '@int/geotoolkit/widgets/timeseries/TimeSeriesShape';
import { OptimizationType } from '@int/geotoolkit/data/OptimizedData';
import { InterpolationType } from '@int/geotoolkit/data/DataStepInterpolation';
import { DataTable } from '@int/geotoolkit/data/DataTable';
import { DataTableView } from '@int/geotoolkit/data/DataTableView';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { DataSample } from '@int/geotoolkit/data/DataSample';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { TimeSeriesObject } from '@int/geotoolkit/widgets/timeseries/TimeSeriesObject';
/**
 * TimeSeriesLine.Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * Updated
     */
    Updated = "updated",
    /**
     * Limits Changed
     */
    LimitsChanged = "limitschanged"
}
/**
 * Timeseries line which uses a {@link @int/geotoolkit/data/DataTableView~DataTableView} to get data to render
 */
export declare class TimeSeriesLine extends TimeSeriesShape {
    constructor(options?: TimeSeriesLine.Options);
    on<E extends keyof TimeSeriesLine.EventMap>(type: E, callback: (eventType: E, sender: this, args: TimeSeriesLine.EventMap[E]) => void): this;
    off<E extends keyof TimeSeriesLine.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: TimeSeriesLine.EventMap[E]) => void): this;
    notify<E extends keyof TimeSeriesLine.EventMap>(type: E, source: TimeSeriesLine, args?: TimeSeriesLine.EventMap[E]): this;
    /**
     * Updates samples
     * @param [rect] area to invalidate
     * @param [update] if value is added to tail
     */
    updateSamples(rect?: Rect, update?: boolean): this;
    /**
     * Get min
     */
    getMin(): number;
    /**
     * Set min value
     * @param value value to set
     * @returns this
     */
    setMin(value: number): this;
    /**
     * Get max
     */
    getMax(): number;
    /**
     * Set max value
     * @param value value to set
     * @returns this
     */
    setMax(value: number): this;
    /**
     * Sets optimization type
     * @param optimizationType optimization type which used with current line
     * @returns this
     */
    setOptimizationType(optimizationType: OptimizationType): this;
    /**
     * Turns on/off optimization for line
     * @param [needOptimization] Is optimization for line on
     * @returns this
     */
    setOptimization(needOptimization?: boolean): this;
    /**
     * Returns samples
     * @returns samples
     */
    getSamples(): DataSample[];
    /**
     * Returns extended samples
     * @returns extended samples
     */
    getSamplesExt(): TimeSeriesLine.ExtendedSamples;
    /**
     * Returns data object of this line
     */
    getData(): DataTable | DataTableView;
    /**
     * Sets the data object for the line
     * @param options data source or object to specify data source
     * @throws {Error} if parameters indices and values are not specified properly
     */
    setData(options: TimeSeriesLine.DataOptions | DataTableView | DataTable): this;
    /**
     * Returns interpolation type
     * ('Linear', 'MiddleStep', 'EndStep', 'StartStep')
     */
    getInterpolationType(): InterpolationType;
    /**
     * Sets interpolation type
     *
     * @param interpolationType interpolation type to use
     * @throws {Error} If interpolationType is not correct
     * @returns this
     */
    setInterpolationType(interpolationType: InterpolationType): this;
    /**
     * Synchronize state from data
     * @param [rect] optional area to invalidate
     * @param [updateData] if data sequence is changed and requires to rebuild
     * cached scaled data
     * track
     */
    updateFromData(rect?: Rect, updateData?: boolean): this;
    /**
     * Set state of rendering for out of range values
     * @param outOfRangeValues value to set
     * @returns this
     */
    setDrawOutOfRangeValues(outOfRangeValues: boolean): this;
    /**
     * Returns true if zero is a valid value in logarithmic mode
     */
    getDrawOutOfRangeValues(): boolean;
    /**
     * Returns true if logarithmic mode is enabled
     */
    isLogarithmicScale(): boolean;
    /**
     * Sets logarithmic mode. This applies a log on the values themselves.
     *
     * @param enable logarithmic mode on or off.
     * @returns this
     */
    setLogarithmicScale(enable: boolean): this;
    protected updateScaledData(): void;
    /**
     * Gets the bounds of the line
     */
    getBounds(): Rect | null;
    /**
     * @param context context
     * @returns true if object is inside of renderable area
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Sets curve visibility
     * @param visible visible
     * @returns this
     */
    setCurveVisible(visible: boolean): this;
    /**
     * Gets curve visibility
     */
    getCurveVisible(): boolean;
    /**
     * Creates marker symbol
     * @param params marker parameters
     * @returns this
     */
    createMarker(params: TimeSeriesObject.Marker | SymbolShape): this;
    /** */
    dispose(): void;
}
export declare namespace TimeSeriesLine {
    type Options = Shape.Options & {
        data?: DataTable | DataTableView | DataOptions;
        markervisible?: boolean;
        curvevisible?: boolean;
        marker?: TimeSeriesObject.Marker | SymbolShape;
        decimationspacing?: number;
        spline?: boolean;
        values?: TimeSeriesObject.Values;
        autosort?: boolean;
    };
    type ExtendedSamples = {
        values: number[];
        indices: number[];
        samples: DataSample[];
    };
    /**
     * data source or object to specify data source
     */
    type DataOptions = {
        /**
         * name of the curve
         */
        name?: string;
        /**
         * name or index of series in data table / view if it is provided
         */
        indices?: string | number;
        /**
         * name or index of series in data table / view if it is provided
         */
        values?: string | number;
        /**
         * DataTable or DataTableView which contains depth and value column
         */
        datatable?: DataTable | DataTableView;
    };
    type EventMap = TimeSeriesShape.EventMap & {
        [Events.LimitsChanged]: void;
    };
}
