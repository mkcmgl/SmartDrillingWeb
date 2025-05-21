import { Range } from '@int/geotoolkit/util/Range';
import { RemoteDataSource } from '@int/geotoolkit/ivaapbackend/RemoteDataSource';
import type { AbstractRemoteDataSource } from '@int/geotoolkit/ivaapbackend/AbstractRemoteDataSource';
import type { IJKIndex } from '@int/geotoolkit3d/scene/reservoir/IJKIndex';
import type { ReservoirData } from '@int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData';
import type { Cancel } from '@int/geotoolkit/util/Cancel';
/**
 * Provide utility class to load reservoir data from IVAAP backend
 */
export declare class RemoteReservoirDataSource extends RemoteDataSource<RemoteReservoirDataSource.MetaInfo> {
    constructor(options?: RemoteReservoirDataSource.Options);
    /**
     * Set this RemoteReservoirDataSource options
     */
    setOptions(options: RemoteReservoirDataSource.OptionsBase): this;
    /**
     * Load reservoir cells
     * @param [level] the level of resolution
     * @param [idNode] the node index
     * @param [filterSpec] the filter that should be applied
     * @param [onProgress] a function to be executed to handle progress
     * @param [cancel] a Cancel object that can be used to cancel the loading.
     * @returns and promise with cells data, the Promise return type change based on the value set to this dataSource
     * constructor "efficientdatalayout" option.
     * If set to false or not specified, the return type will be the deprecated LegacyCellType[] type.
     * If set to true, the return type will be the new TypedArrayCells type.
     */
    loadCells(level?: number, idNode?: number, filterSpec?: string, onProgress?: (event: ProgressEvent) => void, cancel?: Cancel): Promise<RemoteReservoirDataSource.LegacyCell[] | RemoteReservoirDataSource.ArrayCells>;
    /**
     * Load reservoir values
     * @param [ordinal] the ordinal number of a requested property in a list of properties
     * @param [filterSpec] the filter that should be applied
     * @param [onProgress] a function to be executed to handle progress
     * @param [cancel] a Cancel object that can be used to cancel the loading.
     * @returns and promise with cells data, the Promise return type change based on the value set to this dataSource
     * constructor "efficientdatalayout" option.
     * If set to false or not specified, the return type will be the deprecated LegacyValuesType[] type.
     * If set to true, the return type will be the new TypedArrayValues type.
     */
    loadValues(ordinal?: string, filterSpec?: string, onProgress?: (event: ProgressEvent) => void, cancel?: Cancel): Promise<RemoteReservoirDataSource.LegacyValues | RemoteReservoirDataSource.ArrayValues>;
    /**
     * Load the reservoir MetaDatas from the given URL
     * @param url url of metaData information
     * @param [onProgress] a function to be executed to handle progress
     * @param [cancel] a Cancel object that can be used to cancel the loading
     * @returns The promise for the MetaData
     */
    loadMeta(url: string, onProgress?: (event: ProgressEvent) => void, cancel?: Cancel): Promise<RemoteReservoirDataSource.MetaInfo>;
    /**
     * Returns true if browser supports WebAssembly and ZFP is enabled
     */
    isZFPEnabled(): boolean;
    /**
     * Dispose
     */
    dispose(): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace RemoteReservoirDataSource {
    /**
     * options
     */
    type Options = AbstractRemoteDataSource.Options & OptionsBase & {
        /**
         * enable the new and more efficient data layout, which replace the one-object-per-cell layout by efficient typed arrays.
         * This layout is strongly recommended and will be enabled by default in the next version. For now, default is false.
         */
        efficientdatalayout?: boolean;
    };
    type ArrayValues = {
        /**
         * values range
         */
        valuesrange: Range;
        /**
         * values in contiguous typed array
         */
        values: Float32Array;
        /**
         * IJK indices of values in a contiguous typed array
         */
        ijk: Int16Array;
        /**
         * The number of I, J and K indices this set of values cover.
         */
        'ijkcount': IJKIndex.Coordinates;
        /**
         * The value representing the absence of value. Default is -999.25
         */
        'nanvalue': number;
    };
    /**
     * Defines Values properties
     */
    type LegacyValues = {
        /**
         * values
         */
        values: {
            /**
             * i,j,k indices of the cell
             */
            ijk: number[];
            /**
             * value of the cell
             */
            value: number;
        }[];
        /**
         * values range
         */
        valuesrange: Range;
    };
    /**
     * The cells coordinates stored in three (x, y ,z) typed arrays.
     */
    type ArrayCells = {
        /**
         * The cells X coordinates, stored in a contiguous typed array.
         * Each cell is stored as 8 contiguous x values, representing the 8 corners of the cell.
         */
        x: Float32Array;
        /**
         * The cells Y coordinates, stored in a contiguous typed array.
         * Each cell is stored as 8 contiguous y values, representing the 8 corners of the cell.
         */
        y: Float32Array;
        /**
         * The cells Z coordinates, stored in a contiguous typed array.
         * Each cell is stored as 8 contiguous z values, representing the 8 corners of the cell.
         */
        z: Float32Array;
        /**
         * IJK indices of values in a contiguous typed array
         */
        ijk: Int16Array;
        /**
         * The number of I, J and K indices this set of values cover.
         */
        'ijkcount': IJKIndex.Coordinates;
    };
    /**
     * Defines Cell properties
     */
    type LegacyCell = ReservoirData.CellPosition & {
        /**
         * value of the cell
         */
        value: number;
    };
    /**
     * Defines meta information from backend
     */
    type MetaInfo = {
        /**
         * name of data reservoir
         */
        name: string;
        /**
         * array of properties
         */
        properties: {
            /**
             * The property name
             */
            name: string;
            /**
             * The property kind
             */
            kind: string;
            /**
             * The minimum value of this property
             */
            min: number;
            /**
             * The maximum value of this property
             */
            max: number;
            /**
             * The unique identifier of this property
             */
            uid: string;
        }[];
        /**
         * infinite value
         */
        infvalue: number;
        /**
         * NaN value
         */
        nanvalue: number;
        /**
         * bounding box geometry
         */
        areaOfUseBBox: {
            /**
             * The geometry of this boundingBox
             */
            geometry: {
                /**
                 * The start and end coordinates of the bounding box
                 */
                coordinates: [
                    [
                        x: number,
                        y: number,
                        z: number
                    ],
                    [
                        x: number,
                        y: number,
                        z: number
                    ]
                ];
                /**
                 * The geometry type
                 */
                type: string;
            };
            /**
             * The type name of this parameter
             */
            type: string;
        };
        /**
         * i dimension
         */
        ni: number;
        /**
         * j dimension
         */
        nj: number;
        /**
         * k dimension
         */
        nk: number;
        /**
         * origin
         */
        origin: {
            /**
             * x origin
             */
            x: number;
            /**
             * y origin
             */
            y: number;
            /**
             * z origin
             */
            z: number;
        };
        /**
         * z field
         */
        zfield: {
            /**
             * zfield name
             */
            name: string;
            /**
             * zfield description
             */
            desc: string;
            /**
             * zfield format type
             */
            format: number;
            /**
             * zfield identifier
             */
            id: number;
            /**
             * a flag indicating whether the field is an indexed key
             */
            iskey: boolean;
        };
        /**
         * array of levels
         */
        levels: number[];
        /**
         * unit of measurement
         */
        unit: string;
    };
    type OptionsBase = {
        /**
         * Enable ZFP decompression. It is supported if browser supports WebAssembly
         */
        zfp?: boolean;
        /**
         * Error tolerance for ZFP compression.
         * Default value is 0 (lossless).
         * Any value above 0 will reduce the accuracy of the data by the absolute amount specified, but will result in greater compression.
         */
        error?: {
            /**
             * Absolute error for compression of values. A value too high will impact values accuracy.
             * Recommended value can be computed from metaDatas: valueError = (maxValue - minValue) / 1000 .
             */
            value?: number;
            /**
             * Absolute error for compression of cells geometry.
             * Because geometry coordinates are very sensitive to compression, it is recommended to leave 0 (lossless compression).
             */
            cell?: number;
        };
    };
}
