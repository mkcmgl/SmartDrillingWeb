import { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import { Order } from '@int/geotoolkit/util/Order';
import type { DataSeries } from '@int/geotoolkit/data/DataSeries';
import type { NumericalDataSeriesView } from '@int/geotoolkit/data/NumericalDataSeriesView';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import type { AbstractLoader } from '@int/geotoolkit/welllog/data/loaders/AbstractLoader';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { Range } from '@int/geotoolkit/util/Range';
/**
 * This class defines a well log curve data source.
 *
 * @throws {Error} if parameters depths and values are not specified properly
 * @example
 * import {LogCurveDataSource} from '@int/geotoolkit/welllog/data/LogCurveDataSource';
 * const data1 = new LogCurveDataSource({ 'depth': depthObject, 'values': valuesObject });
 */
export declare class LogCurveDataSource extends LogAbstractData {
    /**
     * Constructor
     * @param [options] options
     */
    constructor(options?: LogCurveDataSource.Options);
    /**
     * Sets data
     * @param [options] addition options
     * @throws {Error} if parameters depths and values are not specified properly
     * @returns this
     */
    setData(options?: LogCurveDataSource.DataOptions): this;
    requestData(range: Range, scale: number, callback?: () => void): void;
    /**
     * Returns the internal series object used to store the depth data
     * @returns the internal backing object
     */
    getDepthData(): NumericalDataSeries | NumericalDataSeriesView;
    /**
     * Returns the internal series object used to store the value data
     * @returns the internal backing object
     */
    getValuesData(): NumericalDataSeries | NumericalDataSeriesView;
    getSize(): number;
    getIndexUnit(): AbstractUnit;
    getName(): string;
    /**
     * Set name of the data
     * @param name The log data name
     * @returns this
     */
    setName(name: string): this;
    getMinDepth(): number;
    getMaxDepth(): number;
    /**
     * Return minimum Meaning depth (first depth with value)
     */
    getMinMeaningDepth(): number;
    /**
     * Return maximum Meaning depth (last depth with value)
     */
    getMaxMeaningDepth(): number;
    getMinValue(): number;
    getMaxValue(): number;
    getValues(): number[];
    getDepths(): number[];
    setValue(index: number, value: number): this;
    /**
     * Gets depth at index
     * @param index index
     */
    getDepth(index: number): number;
    isForwardOnly(): boolean;
    getDataOrder(): Order;
    /**
     * Return value by depth, using linear interpolation if necessary.
     * See LogAbstractData.findValueAt.
     * @param depth The depth for which you want to compute the value
     * @param prev The index of the largest previous depth
     * @param next The index of the smallest following depth
     * @throws {Error} when this method is not implemented
     */
    getValueInRange(depth: number, prev: number, next: number): number;
    /**
     * Clear log data.
     */
    clear(): this;
    calculateNeatLimits(logScale: boolean, centerOnZeroOnNegativeMin: boolean, displayUnit: string | AbstractUnit): number[];
    /**
     * Return value unit
     */
    getValueUnit(): AbstractUnit;
    /**
     * Update data statistics
     * @throws {Error} when this method is not implemented
     */
    protected updateDataStatistics(): this;
    /**
     * Sets value unit
     * @param unit value unit
     * @throws {Error} when this method is not implemented
     */
    setValueUnit(unit: AbstractUnit | string): this;
    /**
     * Sets index unit
     * @param unit index unit
     * @throws {Error} when this method is not implemented
     */
    setIndexUnit(unit: AbstractUnit | string): this;
}
export declare namespace LogCurveDataSource {
    /**
     * options
     */
    type Options = {
        /**
         * name of the curve
         */
        name?: string;
        /**
         * depths array, series or name or index of series in data table if it is provided
         */
        depths?: number[] | DataSeries | NumericalDataSeries | NumericalDataSeriesView | string | number;
        /**
         * values array, series or name or index of series in data table if it is provided
         */
        values?: number[] | DataSeries | NumericalDataSeries | NumericalDataSeriesView | string | number;
        /**
         * DataTable or DataTableView which contains depth and value column
         */
        datatable?: AbstractDataTable;
        /**
         * loader for loading data of curve
         */
        loader?: AbstractLoader;
    };
    /**
     * addition options
     */
    type DataOptions = {
        /**
         * name of the curve
         */
        name?: string;
        /**
         * depths array, series or name or index of series in data table if it is provided
         */
        depths?: number[] | NumericalDataSeries | NumericalDataSeriesView | string | number;
        /**
         * values array, series or name or index of series in data table if it is provided
         */
        values?: number[] | NumericalDataSeries | NumericalDataSeriesView | string | number;
        /**
         * DataTable or DataTableView which contains depth and value column
         */
        datatable?: AbstractDataTable;
    };
}
