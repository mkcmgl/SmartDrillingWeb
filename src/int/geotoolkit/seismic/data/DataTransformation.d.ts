/**
 * @module geotoolkit/seismic/data/DataTransformation
 */
import { Dimension } from '@int/geotoolkit/util/Dimension';
import type { TypedArray } from '@int/geotoolkit/util/TypedArray';
/**
 * The base class for data transformations.
 */
export declare abstract class DataTransformation {
    protected constructor();
    /**
     * Configures this data transform.
     * @param config The data transform configuration.
     * @param size The size of the data transform.
     * @param data The data on which this transform is applied.
     */
    abstract applyConfiguration(config: any, size: Dimension, data: ArrayBuffer | TypedArray): void;
    /**
     * Loads binary data into this transform.
     * @param config The data transform configuration
     * @param data The data that has to be loaded.
     */
    abstract loadBinaryData(config: any, data: ArrayBuffer | DataTransformation.Data): DataTransformation.Data;
    /**
     * Gets the name of this data transform.
     * @returns The name of this transform.
     */
    abstract getName(): string;
    /**
     * Gets the name of this data transform's inverse.
     * @returns The name of the transforms's inverse.
     */
    abstract getInverseName(): string;
    /**
     * Gets the version of this transform
     * @returns The version of the transform.
     */
    abstract getVersion(): string;
    /**
     * Performs the transform on the data.
     * @param data The data that will be transformed.
     * @returns The transformed data.
     */
    abstract transform(data: DataTransformation.Data): DataTransformation.Data;
    /**
     * Gets the size of the transform.
     * @returns The size of the transform.
     */
    getSize(): Dimension;
    /**
     * Sets the size of the transform.
     * @param size The size of the transform.
     * @returns this
     */
    setSize(size: Dimension): this;
    /**
     * Dispose.
     */
    dispose(): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace DataTransformation {
    /**
     * Define a data transformation type
     */
    type Data = TypedArray;
}
