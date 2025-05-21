/**
 * @module geotoolkit/welllog/data/loaders/LogDataLoader
 */
import { AbstractLoader } from '@int/geotoolkit/welllog/data/loaders/AbstractLoader';
import { LogCurveDataSource } from '@int/geotoolkit/welllog/data/LogCurveDataSource';
import type { DataTable } from '@int/geotoolkit/data/DataTable';
import type { Range } from '@int/geotoolkit/util/Range';
/**
 * Log data loader that loads data by requested range
 * @throws {Error} if data is null or range is null
 */
export declare class LogDataLoader extends AbstractLoader {
    /**
     * Constructor
     * @param [options] options
     */
    constructor(options?: LogDataLoader.Options);
    /**
     * Returns curve data source
     * @param id id
     */
    getCurveSource(id: string): LogCurveDataSource;
    /**
     * Returns curve data table
     * @returns data table
     */
    getDataTable(): DataTable;
    load(range: Range, scale: number): Promise<void>;
    dispose(): void;
    /**
     * Returns whether this object has been disposed
     */
    isDisposed(): boolean;
}
export declare namespace LogDataLoader {
    /**
     * options
     */
    type Options = {
        /**
         * data table
         */
        data?: DataTable;
        /**
         * range
         */
        range?: Range;
        /**
         * index type
         */
        columnindex?: string;
    };
}
