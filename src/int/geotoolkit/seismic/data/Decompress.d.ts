import type { TypedArray } from '@int/geotoolkit/util/TypedArray';
/**
 * The base class for data transformations.
 */
export declare class Decompress {
    /**
     * Performs seismic data decompression.
     * @throws Error
     * @param config A json object containing the decompression configuration.
     * @param data The seismic data that will be decompressed.
     * @returns The decompressedData.
     */
    static decompress(config: Decompress.Config, data: ArrayBuffer): TypedArray;
}
export declare namespace Decompress {
    /**
     * A json object containing the decompression configuration.
     */
    export type Config = {
        /**
         * The number of data rows.
         */
        height?: number;
        /**
         * The number of data columns.
         */
        width?: number;
        /**
         * The list of transformation configurations.
         */
        transf?: DataTransformationConfiguration[];
        /**
         * Sample type
         */
        sampleTypes?: string;
    };
    /**
     * Transformation configuration
     */
    type DataTransformationConfiguration = {
        /**
         * Transformation name
         */
        name: string;
    };
    export {};
}
