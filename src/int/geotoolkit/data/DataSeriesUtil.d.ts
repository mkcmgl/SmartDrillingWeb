/**
 * @module geotoolkit/data/DataSeriesUtil
 */
import type { DataTable } from '@int/geotoolkit/data/DataTable';
import { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import type { DataSeries } from '@int/geotoolkit/data/DataSeries';
/**
 * Provides a set of methods to operate with {@link @int/geotoolkit/data/DataSeries~DataSeries}
 */
export declare class DataSeriesUtil {
    /**
     * Remove values from start to end value of the index series and corresponded indices of the other series.
     * All series must have the same size.
     *
     * @param indexSeries series to represent index data
     * @param startIndexValue start value of the index series where to start trim
     * @param endIndexValue end value of the index series where to end trim
     * @param arrayOfSeries array of data series
     * @param [datatable] optional data table as a host of destination series
     * @throws {Error} if indexSeries is not {@link @int/geotoolkit/data/NumericalDataSeries~NumericalDataSeries}
     */
    static trimValues(indexSeries: NumericalDataSeries, startIndexValue: number, endIndexValue: number, arrayOfSeries: DataSeries[], datatable?: DataTable): void;
    /**
     * Merge data series from source to destination
     * This function works ONLY if the existing data is ordered.
     *
     * @example
     *             Depth       Value
     *              50           0
     *              100          1
     *              200          2
     *              300          3
     *
     * mergeValues: [0,100,150,500], [-1,-100,-150,-500]
     *
     *    ----     Depth       Value
     *    ===>       0           -1
     *    ----      50            0
     *    ===>      100         -100
     *    ===>      150         -150
     *    ----      200           2
     *    ----      300           3
     *    ===>      500         -500
     * @param [src] object to represent source data
     * @param [dst] object to represent destination data
     * @throws {Error} if src.index or dst.index is not {@link @int/geotoolkit/data/NumericalDataSeries~NumericalDataSeries}
     */
    static mergeValues(src?: DataSeriesUtil.Source, dst?: DataSeriesUtil.Destination): void;
}
export declare namespace DataSeriesUtil {
    /**
     * object to represent source data
     */
    type Source = {
        /**
         * series to represent index data of the source
         */
        index?: NumericalDataSeries;
        /**
         * array of input data series
         */
        series?: DataSeries[];
    };
    /**
     * object to represent destination data
     */
    type Destination = {
        /**
         * series to represent index data of the source
         */
        index?: NumericalDataSeries;
        /**
         * array of data series
         */
        series?: DataSeries[];
        /**
         * optional data table as a host of destination series
         */
        datatable?: DataTable;
    };
}
