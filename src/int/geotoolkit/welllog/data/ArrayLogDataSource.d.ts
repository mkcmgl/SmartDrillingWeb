/**
 * @module geotoolkit/welllog/data/ArrayLogDataSource
 */
import { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import { NumericalDataSeriesView } from '@int/geotoolkit/data/NumericalDataSeriesView';
import { ArrayLogAbstractData } from '@int/geotoolkit/welllog/data/ArrayLogAbstractData';
import { Order } from '@int/geotoolkit/util/Order';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import type { AbstractDataRow } from '@int/geotoolkit/welllog/data/AbstractDataRow';
/**
 * Define data source for array log visuals like Log2DVisual wo use DataSeries
 *
 * @example
 * // create a table from data table
 * import {ArrayLogDataSource} from '@int/geotoolkit/welllog/data/ArrayLogDataSource';
 * const datatable = new ArrayLogDataSource({
 *   'datatable': table,
 *   'depths': {'index': 0 },
 *   'values': {'indices' : [1,2,3,4,5] },
 *   'angles': { 'values':  [0, Math.PI/2, Math.PI, Math.PI*3/2, Math.PI*2] }
 * });
 * @example
 * // create a table from data series
 * const datatable = new ArrayLogDataSource({
 *   'datatable': table,
 *   'depths': {'series' : depthSeries },
 *   'values': {'series' : [valSeries1, valSeries2, valSeries3, valSeries4, valSeries5] },
 *   'angles': { 'values':  [0, Math.PI/2, Math.PI, Math.PI*3/2, Math.PI*2] }
 * });
 */
export declare class ArrayLogDataSource extends ArrayLogAbstractData {
    /**
     * Constructor
     * @param [options] initialization parameters
     */
    constructor(options?: ArrayLogDataSource.Options);
    /** */
    dispose(): void;
    /**
     * Sets data
     * @param [options] initialization parameters
     */
    setData(options?: ArrayLogDataSource.Options): void;
    /**
     * Return number of rows
     * @returns number fo rows
     */
    getNumberOfRows(): number;
    /**
     * Return a row by index
     * @param index index of the row
     * @returns a row
     */
    getRow(index: number): AbstractDataRow | null;
    /**
     * Return minimum value
     */
    getMinValue(): number;
    /**
     * Return maximum value
     */
    getMaxValue(): number;
    /**
     * Return minimum depth
     */
    getMinDepth(): number;
    /**
     * Return maximum depth
     */
    getMaxDepth(): number;
    /**
     * Return minimum angle of columns in radians
     */
    getMinAngle(): number;
    /**
     * Return maximum angle of columns in radians
     */
    getMaxAngle(): number;
    /**
     * Return information if depths have ascending order
     * @returns true if depths have ascending order
     */
    isForwardOnly(): boolean;
    /**
     * return the order of depths array
     */
    getDataOrder(): Order;
}
export declare namespace ArrayLogDataSource {
    /**
     * initialization parameters
     */
    type Options = {
        /**
         * name of the data source
         */
        name?: string;
        /**
         * optional parameter to specify data
         */
        datatable?: AbstractDataTable;
        /**
         * optional parameter to specify depths data
         */
        depths?: {
            /**
             * optional parameter to specify depths
             */
            series?: NumericalDataSeries | NumericalDataSeriesView;
            /**
             * optional column index from table
             */
            index?: number;
        };
        /**
         * optional parameter to specify values
         */
        values?: {
            /**
             * values array of data series for each column
             */
            series?: NumericalDataSeries[] | NumericalDataSeriesView[];
            /**
             * optional array of column indices from data table
             */
            indices?: number[];
        };
        /**
         * optional properties of column angles
         */
        angles?: {
            /**
             * array of series to provide
             */
            series?: NumericalDataSeries[] | NumericalDataSeriesView[];
            /**
             * array of indices of columns to specify angles
             */
            indices?: number[];
            /**
             * array of angles
             */
            values?: number[];
        };
    };
}
