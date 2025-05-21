import type { DataTransformation } from '@int/geotoolkit/seismic/data/DataTransformation';
/**
 * Defines a singleton registry for the available data transforms.
 */
export declare class DataTransformRegistry {
    constructor();
    /**
     * Gets an instance of the data transform registry
     * @returns The data transform registry.
     */
    static getInstance(): DataTransformRegistry;
    /**
     * Registers a data transform and associates it with a name.
     * @param dataTransformName The name of the data transform.
     * @param dataTransformClass The class that performs data transformation.
     * @param [wasm] register wasm version
     */
    register(dataTransformName: string, dataTransformClass: new (...args: any) => DataTransformation, wasm?: boolean): this;
    /**
     * Unregister a data transform that is associated with a given name.
     * @param dataTransformName The name of the compression algorithm.
     */
    unregister(dataTransformName: string): this;
    /**
     * Returns true if registry doesn't have any data transformers
     */
    isEmpty(): boolean;
    /**
     * Gets a new instance of a data transform that is registered with a given name.
     * @param dataTransformName The name of the data transform.
     * @returns A new instance of the class that performs data transformation.
     */
    getDataTransform(dataTransformName: string): DataTransformation | null;
    /**
     * Gets the names of all the registered data transforms.
     * @returns The names of all the trace processors.
     */
    getAvailableDataTransforms(): string[];
    /**
     * If true WebAssembly will be used for decompression.
     * @param enable enable flag
     */
    setWasmEnabled(enable: boolean): this;
    /**
     * Returns true if WebAssembly is used for decompression
     */
    getWasmEnabled(): boolean;
    /**
     * Returns promise that will be resolved when data transform is ready
     */
    onReady(): Promise<void>;
    /**
     * Process data before decompression
     * @param data data
     */
    preProcess(data: ArrayBuffer): ArrayBuffer;
    /**
     * Process data after decompression
     * @param data data
     */
    postProcess(data: any): Float32Array;
    static getClassName(): string;
    getClassName(): string;
}
