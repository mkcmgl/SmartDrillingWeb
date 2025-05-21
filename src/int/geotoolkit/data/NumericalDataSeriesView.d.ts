/**
 * @module geotoolkit/data/NumericalDataSeriesView
 */
import type { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import { DataSeriesView } from '@int/geotoolkit/data/DataSeriesView';
import { INumericalDataSeries } from '@int/geotoolkit/data/INumericalDataSeries';
import { DataSeries } from '@int/geotoolkit/data/DataSeries';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Define a numerical customized readonly view of {@link @int/geotoolkit/data/NumericalDataSeries~NumericalDataSeries} or {@link @int/geotoolkit/data/NumericalDataSeriesView~NumericalDataSeriesView} for filtering,
 * and unit conversion
 *
 * @throws {Error} if data is not an instance of {@link @int/geotoolkit/data/NumericalDataSeries~NumericalDataSeries} or {@link @int/geotoolkit/data/NumericalDataSeriesView~NumericalDataSeriesView}
 */
export declare class NumericalDataSeriesView extends DataSeriesView<number> implements INumericalDataSeries {
    /**
     * Create NumericalDataSeriesView
     * @param [options] an original data series or data series view or properties object
     */
    constructor(options?: NumericalDataSeriesView.Options | DataSeries<number> | DataSeriesView<number> | NumericalDataSeries | NumericalDataSeriesView);
    /**
     * Returns a clone of the numerical data series view.
     * @returns clone
     */
    clone(): NumericalDataSeriesView;
    /**
     * Sets pre-processor function. This processor will be called before filters.
     * @param [preProcessor] pre-processor function. The function must accept single value and array of values as parameter.
     */
    setPreProcessor(preProcessor?: DataSeriesView.ProcessorCallback<number>): this;
    /**
     * Sets post-processor function. This processor will be called after filters.
     * @param [postProcessor] post-processor function. The function must accept single value and array of values as parameter.
     */
    setPostProcessor(postProcessor?: DataSeriesView.ProcessorCallback<number>): this;
    /**
     * Gets min value
     * @param [unit] unit optional output unit to convert the data to (if none specified, data is not converted)
     * @returns min
     */
    getMin(unit?: string | AbstractUnit): number;
    /**
     * Gets max value
     * @param [unit] unit optional output unit to convert the data to (if none specified, data is not converted)
     * @returns max
     */
    getMax(unit?: string | AbstractUnit): number;
    protected convertValues<U extends number | number[]>(values: U, fromUnit?: string | AbstractUnit, toUnit?: string | AbstractUnit): U;
}
export declare namespace NumericalDataSeriesView {
    /**
     * an original data series or data series view or properties object
     */
    type Options = DataSeriesView.Options<number>;
}
