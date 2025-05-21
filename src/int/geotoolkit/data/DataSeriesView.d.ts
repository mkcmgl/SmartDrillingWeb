import { DataSeries } from '@int/geotoolkit/data/DataSeries';
import { AbstractDataSeries } from '@int/geotoolkit/data/AbstractDataSeries';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * DataSeriesView events.
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * FilterChanged
     */
    FilterChanged = "FilterChanged",
    /**
     * Rebuild
     */
    Rebuild = "Rebuild"
}
/**
 * FilterType.
 * @enum
 * @readonly
 */
export declare enum FilterType {
    /**
     * General. Filter function can filter on both index and value.
     */
    General = "General",
    /**
     * Value. Filter function can only filter value.
     */
    Value = "Value"
}
/**
 * Define a generic read-only view of an underlying {@link @int/geotoolkit/data/DataSeries~DataSeries} or {@link @int/geotoolkit/data/DataSeriesView~DataSeriesView}.
 * A DataSeriesView allows unit conversion, pre- and post-processing and filtering.<br>
 *
 * @throws {Error} if data is not an instance of {@link @int/geotoolkit/data/DataSeries~DataSeries} or {@link @int/geotoolkit/data/DataSeriesView~DataSeriesView}
 */
export declare class DataSeriesView<T = any> extends AbstractDataSeries<T> {
    /**
     * Create DataSeriesView
     * @param [options] the original data series or data series view or properties object
     */
    constructor(options?: DataSeriesView.Options<T> | AbstractDataSeries<T> | DataSeriesView<T>);
    on<E extends keyof DataSeriesView.EventMap>(type: E, callback: (eventType: E, sender: this, args: DataSeriesView.EventMap[E]) => void): this;
    off<E extends keyof DataSeriesView.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DataSeriesView.EventMap[E]) => void): this;
    notify<E extends keyof DataSeriesView.EventMap>(type: E, source: DataSeriesView, args?: DataSeriesView.EventMap[E]): this;
    /**
     * Returns a clone of the data series view.
     * @returns clone
     */
    clone(): DataSeriesView<T>;
    getValue(index: number): T;
    getLength(): number;
    /**
     * DataSeriesView does not support setName() method.
     * @param name data object name
     * @returns this
     */
    setName(name: string): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns JSON options object
     */
    getProperties(): DataSeriesView.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     */
    setProperties(properties?: DataSeriesView.Options<T>): this;
    /**
     * Sets view unit of the data series view.
     * @param [unit] unit to set
     */
    setUnit(unit?: string | AbstractUnit): this;
    getUnit(): AbstractUnit;
    /**
     * Returns view unit of the data series view. This method returns unit set through setUnit() method, which can be different from getUnit() if view unit is not convertible to data unit.
     */
    getViewUnit(): AbstractUnit;
    /**
     * Sets pre-processor function. This processor will be called before filters.
     * @param [preProcessor] pre-processor function. The function must accept single value and array of values as parameter.
     */
    setPreProcessor(preProcessor?: DataSeriesView.ProcessorCallback<T>): this;
    /**
     * Returns pre-processor function.
     */
    getPreProcessor(): DataSeriesView.ProcessorCallback<T>;
    /**
     * Sets post-processor function. This processor will be called after filters.
     * @param [postProcessor] post-processor function. The function must accept single value and array of values as parameter.
     */
    setPostProcessor(postProcessor?: DataSeriesView.ProcessorCallback<T>): this;
    /**
     * Returns post-processor function.
     */
    getPostProcessor(): DataSeriesView.ProcessorCallback<T>;
    /**
     * Synchronizes internal mapping for filters.
     */
    protected synchronize(): void;
    /**
     * Returns an array of objects in the data series.
     *
     * @param [copy] whether creating a copy of data
     * @param [unit] unit optional output unit to convert the data to. if not specified, data will not be converted
     */
    toArray(copy?: boolean, unit?: string | AbstractUnit): T[];
    protected convertValues<U extends T[] | T>(values: U, fromUnit?: string | AbstractUnit, toUnit?: string | AbstractUnit): U;
    /**
     * Return the array of value filters as functions or {@link @int/geotoolkit/data/DataSeriesView~DataSeriesView} or series item.
     */
    getFilters(): (DataSeriesView<T> | DataSeriesView.FilterCallback<T> | T)[];
    /**
     * Adds a value filter to the end of existing filters.
     * @param filter filter function or DataSeriesView or series item.
     * If DataSeriesView specified, changes from DataSeriesView might not be applied.
     * @param [filterType] filter type.
     * Value type filter only filters by value and index passed in will be null. Value type filter will be optimized.
     * @returns this
     */
    addFilter(filter: DataSeriesView.FilterCallback<T> | DataSeriesView<T> | T, filterType?: FilterType): this;
    /**
     * Removes a value filter from the data series view.
     * @param filter filter to remove
     * @returns this
     */
    removeFilter(filter: DataSeriesView.FilterCallback<T> | DataSeriesView<T> | T): this;
    /**
     * Replaces an existing filter with a new filter.
     * @param oldFilter old filter
     * @param newFilter new filter
     * @param [filterType] filter type
     * @returns this
     */
    replaceFilter(oldFilter: DataSeriesView.FilterCallback<T> | DataSeriesView<T> | T, newFilter: DataSeriesView.FilterCallback<T> | DataSeriesView<T> | T, filterType?: FilterType): this;
    /**
     * Clears all filters.
     * @returns this
     */
    clearFilters(): this;
    /**
     * Returns true
     * @returns true
     */
    isReadOnly(): boolean;
}
export declare namespace DataSeriesView {
    /**
     * the original data series or data series view or properties object
     */
    type Options<T = any> = AbstractDataSeries.Options & {
        /**
         * the original data series or data series view
         */
        data?: AbstractDataSeries<T>;
        /**
         * unit of the view
         */
        unit?: string | AbstractUnit;
        /**
         * pre-processor function. See setPreProcessor() method
         */
        preprocessor?: ProcessorCallback<T>;
        /**
         * post-processor function. See setPostProcessor() method
         */
        postprocessor?: ProcessorCallback<T>;
        /**
         * array of filters
         */
        filters?: (FilterCallback<T> | DataSeriesView<T> | T)[];
    };
    /**
     * Callback for processing values
     */
    type ProcessorCallback<T = any> = (values: T | T[]) => T | T[];
    /**
     * Filter
     */
    type FilterCallback<T = any> = (index: number, value?: T) => boolean;
    /**
     * JSON options object
     */
    type OptionsOut = DataSeries.OptionsOut;
    type EventMap = AbstractDataSeries.EventMap & {
        [Events.FilterChanged]: void;
        [Events.Rebuild]: void;
    };
}
