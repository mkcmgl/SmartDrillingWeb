import { CommonRemoteDataSource } from '@int/geotoolkit/ivaapbackend/CommonRemoteDataSource';
/**
 * Provides utility class to load wells data from IVAAP backend
 */
export declare class RemoteWellLogDataSource extends CommonRemoteDataSource {
    /**
     * Loads info about wells collection
     * @param data the dataset containing link to wells collection or wells collection url
     */
    loadWellsMeta<T extends CommonRemoteDataSource.Dataset = RemoteWellLogDataSource.WellDataset>(data: CommonRemoteDataSource.Dataset | string): Promise<CommonRemoteDataSource.DataCollection<T>>;
    /**
     * Loads info about an individual well
     * @param data the dataset containing link to well metadata or well metadata url
     */
    loadWellData<T extends CommonRemoteDataSource.Dataset = RemoteWellLogDataSource.WellDataset>(data: CommonRemoteDataSource.Dataset | string): Promise<T>;
    /**
     * Loads info about available properties of an individual well
     * @param data the dataset containing link to well metadata
     */
    loadWellProperties(data: CommonRemoteDataSource.Dataset): Promise<RemoteWellLogDataSource.DatasetInfo>;
    /**
     * Loads info about well bores of an individual well
     * @param data the dataset containing link to well bores collection
     */
    loadWellBoresMeta<T extends CommonRemoteDataSource.Dataset = RemoteWellLogDataSource.WellBoreDataset>(data: CommonRemoteDataSource.Dataset): Promise<CommonRemoteDataSource.DataCollection<T>>;
    /**
     * Loads info about an individual well bore
     * @param data the dataset containing link to well bore metadata
     */
    loadWellBoreData<T extends CommonRemoteDataSource.Dataset = RemoteWellLogDataSource.WellBoreDataset>(data: CommonRemoteDataSource.Dataset): Promise<T>;
    /**
     * Loads info about available properties of an individual well bore
     * @param data the dataset containing link to well bore metadata
     */
    loadWellBoreProperties(data: CommonRemoteDataSource.Dataset): Promise<RemoteWellLogDataSource.DatasetInfo>;
    /**
     * Loads info about all well logs of an individual well
     * @param data the dataset containing link to well logs collection
     */
    loadLogsMeta<T extends CommonRemoteDataSource.Dataset = RemoteWellLogDataSource.LogDataset>(data: CommonRemoteDataSource.Dataset): Promise<CommonRemoteDataSource.DataCollection<T>>;
    /**
     * Loads info about an individual well log
     * @param data the dataset containing link to well log metadata
     */
    loadLogData<T extends CommonRemoteDataSource.Dataset = RemoteWellLogDataSource.LogDataset>(data: CommonRemoteDataSource.Dataset): Promise<T>;
    /**
     * Loads the values of an individual well curve along with the values of its index curve
     * @param logData the well log dataset
     * @param curveIds the collection of curve indices within the specified well
     * @param minIndex the minimum index of the values to query
     * @param maxIndex the maximum index of the values to query
     * @param indexType the hint on the type of min/max index being passed. This can be <em>datetime</em> or <em>long</em>, otherwise <em>double</em> will be used
     */
    loadLogCurveValues(logData: CommonRemoteDataSource.Dataset, curveIds?: number[], minIndex?: number, maxIndex?: number, indexType?: string): Promise<RemoteWellLogDataSource.CurveInfo[]>;
    /**
     * Loads info about all well deviations of an individual well
     * @param data the dataset containing link to well deviations collection
     */
    loadDeviationsMeta<T extends CommonRemoteDataSource.Dataset = RemoteWellLogDataSource.DeviationDataset>(data: CommonRemoteDataSource.Dataset): Promise<CommonRemoteDataSource.DataCollection<T>>;
    /**
     * Loads info about an individual well deviation
     * @param data the dataset containing link to well deviation metadata
     */
    loadDeviationData<T extends CommonRemoteDataSource.Dataset = RemoteWellLogDataSource.DeviationDataset>(data: CommonRemoteDataSource.Dataset): Promise<T>;
    /**
     * Loads the values of an individual well deviation curve along with the values of its index curve
     * @param deviationData the well deviation dataset
     * @param curveIds the collection of curve indices within the specified well
     * @param minIndex the minimum index of the values to query
     * @param maxIndex the maximum index of the values to query
     * @param indexType the hint on the type of min/max index being passed. This can be <em>datetime</em> or <em>long</em>, otherwise <em>double</em> will be used
     */
    loadDeviationCurveValues(deviationData: CommonRemoteDataSource.Dataset, curveIds?: number[], minIndex?: number, maxIndex?: number, indexType?: string): Promise<RemoteWellLogDataSource.CurveInfo[]>;
    /**
     * Loads info about all well mud logs of an individual well bore
     * @param data the dataset containing link to well mud logs collection
     */
    loadMudLogsMeta<T extends CommonRemoteDataSource.Dataset = RemoteWellLogDataSource.MudLogDataset>(data: CommonRemoteDataSource.Dataset): Promise<CommonRemoteDataSource.DataCollection<T>>;
    /**
     * Loads info about an individual well mud log
     * @param mudLogMeta the dataset containing link to well mud log metadata
     */
    loadMudLogData<T extends CommonRemoteDataSource.Dataset = RemoteWellLogDataSource.MudLogDataset>(mudLogMeta: CommonRemoteDataSource.Dataset): Promise<T>;
}
export declare namespace RemoteWellLogDataSource {
    /**
     * Defines dataset that contains information about all available properties
     */
    type DatasetInfo = CommonRemoteDataSource.Dataset<{
        /**
         * The properties collection
         */
        properties: any[];
    }>;
    /**
     * Defines information about values of an individual well curve
     */
    type CurveInfo = {
        /**
         * The name of the curve
         */
        name: string;
        /**
         * The type of curve values for this curve: <em>double, datetime, integer, float, string</em>
         */
        dataType: string;
        /**
         * The number of columns for this curve. <em>1</em> for most curves, <em>2</em> for log arrays
         */
        numColumns: number;
        /**
         * The index of this curve within its well log
         */
        dataUID: number;
        /**
         * The <em>dataUID</m> type
         */
        dataUIDType?: string;
        /**
         * The values of this curve
         */
        data: number[] | number[][];
    };
    /**
     * Defines dataset that contains information about an individual well log
     */
    type LogDataset = CommonRemoteDataSource.Dataset<LogMeta>;
    /**
     * Defines dataset that contains information about an individual well
     */
    type WellDataset = CommonRemoteDataSource.Dataset<WellMeta> & {
        /**
         * The array of well properties
         */
        properties?: any[];
    };
    /**
     * Defines dataset that contains information about an individual well bore
     */
    type WellBoreDataset = CommonRemoteDataSource.Dataset<WellBoreMeta>;
    /**
     * Defines dataset that contains information about an individual mud log
     */
    type MudLogDataset = CommonRemoteDataSource.Dataset<MudLogMeta>;
    /**
     * Defines dataset that contains information about an individual well deviation
     */
    type DeviationDataset = CommonRemoteDataSource.Dataset<DeviationMeta>;
}
/**
 * Defines information about an individual well
 */
declare type WellMeta = {
    /**
     * The well name
     */
    name: string;
    /**
     * The flag indicating whether a well dataset is alive
     */
    isLive: boolean;
    /**
     * The well feature
     */
    feature?: {
        /**
         * The well unique id
         */
        uid: string;
        /**
         * The well geometry
         */
        geometry?: {
            /**
             * The geometry type
             */
            type: string;
            /**
             * The coordinates collection
             */
            coordinates: number[];
        };
        /**
         * The well properties
         */
        properties?: {
            /**
             * The well unique id
             */
            wellUID?: string;
            /**
             * The well name
             */
            wellName?: string;
            /**
             * The well bore unique id
             */
            wellBoreUID?: string;
            /**
             * The well bore name
             */
            wellBoreName?: string;
            /**
             * The flag indicating whether the well has well logs
             */
            hasWellLogs?: boolean;
            /**
             * The flag indicating whether the well has mud logs
             */
            hasMudLogs?: boolean;
            /**
             * The flag indicating whether the well has well trajectories
             */
            hasTrajectories?: boolean;
            /**
             * The flag indicating whether the well has tops
             */
            hasTops?: boolean;
            /**
             * The flag indicating whether the well has entry logs
             */
            hasEntryLogs?: boolean;
            /**
             * The flag indicating whether the well has tubing sets
             */
            hasTubingSets?: boolean;
            /**
             * The flag indicating whether the well has well bore geometries
             */
            hasWBGeometries?: boolean;
            /**
             * The flag indicating whether the well has perforation sets
             */
            hasPerforationSets?: boolean;
        };
        /**
         * The feature type
         */
        type: string;
    };
};
/**
 * Defines information about an individual well bore
 */
declare type WellBoreMeta = {
    /**
     * The well unique id
     */
    wellUID: string;
    /**
     * The well name
     */
    wellName: string;
    /**
     * The well bore unique id
     */
    wellBoreUID: string;
    /**
     * The well bore name
     */
    wellBoreName: string;
};
/**
 * Defines measurement type
 */
declare type Measurement = {
    /**
     * The measurement name
     */
    name: string;
    /**
     * The measurement value
     */
    value: number;
    /**
     * The unit of measurement
     */
    units: string;
};
/**
 * Defines geology interval
 */
declare type GeologyInterval = {
    /**
     * The type of interval
     */
    type: string;
    /**
     * The first measured depth
     */
    mdStart: Measurement;
    /**
     * The last measured depth
     */
    mdEnd: Measurement;
    /**
     * The lithology of interval
     */
    lithology: LithologyDescription[];
    /**
     * The measurements of interval
     */
    measurements?: Measurement[];
    /**
     * The interval description
     */
    description?: string;
};
/**
 * Defines lithology description
 */
declare type LithologyDescription = {
    /**
     * The lithology type
     */
    type: string;
    /**
     * The lithology name
     */
    codeLith: string;
    /**
     * The lithology value
     */
    lithPc?: Measurement;
    /**
     * The lithology description
     */
    description?: string;
};
/**
 * Defines information about an individual mud log
 */
declare type MudLogMeta = {
    /**
     * The mud log unique id
     */
    uid: string;
    /**
     * The mud log name
     */
    name: string;
    /**
     * The status of mud log, typically:
     * <ul style="margin-top: 0;">
     *     <li style="margin-left: 10pt;">
     *         <p><em>complete </em>specifies that a mud log is complete</p>
     *     </li>
     *     <li style="margin-left: 10pt;">
     *         <p><em>active </em>specifies that a mud log is active</p>
     *     </li>
     * </ul>
     */
    status?: string;
    /**
     * The first measured depth
     */
    mdStart?: Measurement;
    /**
     * The last measured depth
     */
    mdEnd?: Measurement;
    /**
     * The collection of geology intervals
     */
    geologyIntervals?: GeologyInterval[];
};
/**
 * Defines information about an individual well deviation
 */
declare type DeviationMeta = {
    /**
     * The unique id of well deviation
     */
    uid: string;
    /**
     * The name of well deviation
     */
    name: string;
    /**
     * The vertical shift (ex: kelly bushing) value detected or entered during import
     */
    verticalShift?: number;
    /**
     * The symbol associated with the kelly bushing value unit: <em>s, ft, m, ms</em> or <em>undefined</em>
     */
    verticalShiftUnit?: string;
    /**
     * The location of a well deviation in x-y coordinates
     */
    surfaceCoord?: number[];
    /**
     * The symbol associated with the x-y values
     */
    xyUnit?: string;
    /**
     * The status of a well deviation: <em>complete</em> or <em>active</em>
     */
    status?: string;
    /**
     * The coordinate system
     */
    crs?: any;
    /**
     * The flag indicating whether curve data requests should be grouped or be requested one curve at a time
     */
    shouldGroup?: boolean;
    /**
     * The collection of all curves of this well deviation
     */
    curveInfoList?: CurveMeta[];
};
/**
 * Defines information about an individual well curve
 */
declare type CurveMeta = Omit<RemoteWellLogDataSource.CurveInfo, 'data'> & {
    /**
     * The curve unique id
     */
    uid: string;
    /**
     * The curve description
     */
    descr?: string;
    /**
     * The minimum index value (typically time or depth) of this curve
     */
    minIndex: number;
    /**
     * The maximum index value (typically time or depth) of this curve
     */
    maxIndex: number;
    /**
     * The index of the curve within the same well log that has index values (typically time or depth) matching the values of this curve (ex: MD curve)
     */
    indexUID: number;
    /**
     * The symbol of the unit associated with this curve. Use <em>undefined</em> for no unit
     */
    unitName: string;
    /**
     * The value treated as <em>null</em>
     */
    nullValue: number;
    /**
     * The value treated as empty
     */
    emptyValue: number;
    /**
     * The data statistics
     */
    dataStats?: {
        /**
         * The number of <em>null</em> values
         */
        numNullValues: number;
        /**
         * The minimal value
         */
        dataMin: number;
        /**
         * The maximal value
         */
        dataMax: number;
    };
};
/**
 * Defines information about an individual well log
 */
declare type LogMeta = {
    /**
     * The well log unique id
     */
    uid: string;
    /**
     * The well log name
     */
    name: string;
    /**
     * The well log short name
     */
    shortName?: string;
    /**
     * The tags
     */
    tags?: any[];
    /**
     * The well log status: <em>complete</em> or <em>active</em>
     */
    status?: string;
    /**
     * The flag indicating whether the order of curves should not be modified when these curves are visualized
     */
    curvesOrdered?: boolean;
    /**
     * The direction of the data of a well log: <em>increasing</em> or <em>decreasing</em>
     */
    direction?: string;
    /**
     * The flag indicating whether curve data requests should be grouped or be requested one curve at a time
     */
    shouldGroup?: boolean;
    /**
     * The collection of all curves of this well log
     */
    curveInfoList?: CurveMeta[];
    /**
     * The information about an index curve
     */
    indexInfo?: {
        /**
         * The name of the index curve
         */
        indexName: string;
        /**
         * The type of the index: <em>depth, time or datetime</em>
         */
        indexType: string;
        /**
         * The start value for the index
         */
        indexStart: number;
        /**
         * The end value for the index
         */
        indexEnd: number;
        /**
         * The unit symbol associated with the z axis of the index curve: <em>s, ft, m, ms</em> or <em>undefined</em>
         */
        unitName: string;
        /**
         * The flag indicating whether the index is shared
         */
        sharedIndex: boolean;
    };
};
export {};
