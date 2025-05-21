/**
 * @module geotoolkit/webgl/BufferAttribute
 */
import type { TypedArray } from '@int/geotoolkit/util/TypedArray';
/**
 * This class stores data for an attribute,
 * which allows for more efficient passing of data to the GPU. <br>
 *
 * @throws {TypeError} BufferAttribute should be a typed array
 */
export declare class BufferAttribute {
    /**
     * Create BufferAttribute
     * @param array typed array
     * @param itemSize the number of values of the array that associated with a particular vertex
     * @param [normalized] Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code
     * @param [dynamic] Defines the intended usage pattern of the data store for optimization purposes
     */
    constructor(array: TypedArray, itemSize: number, normalized?: boolean, dynamic?: boolean);
    /**
     * Set name for this attribute
     * @param name the attribute name
     * @returns this
     */
    setName(name: string): this;
    /**
     * Whether the buffer is updated dynamically or not.
     * @param dynamic the dynamic flag
     * @returns this
     */
    setDynamic(dynamic: boolean): this;
    /**
     * Set a value at given position in array<br>
     * Note that this should not be confused with index of vertex.
     * @param value the value to be set
     * @param offset the offset of array. Note this should not be confused with index of vertices.
     * @returns this
     */
    set(value: number, offset: number): this;
    /**
     * Set the typed array in the buffer
     * @throws TypeError if array is not a Typed Array
     * @param array typed array
     * @returns this
     */
    setArray(array: number[]): this;
    /**
     * Return a value at given position in array<br>
     * Note that this should not be confused with index of vertex.
     * @param offset the offset of array
     * @returns value
     */
    get(offset: number): number;
    /**
     * Return the typed array in the buffer
     * @returns array typed array
     */
    getArray(): TypedArray;
    /**
     * Return attributes for this BufferAttribute
     *
     * @returns The attributes
     */
    getAttributes(): BufferAttribute.Attributes;
}
export declare namespace BufferAttribute {
    /**
     * The attributes
     */
    type Attributes = {
        /**
         * the name of the attribute
         */
        name: string;
        /**
         * typed array
         */
        array: TypedArray;
        /**
         * the number of vertices
         */
        count: number;
        /**
         * the number of values of the array that associated with a particular vertex
         */
        itemsize: number;
        /**
         * Indicates how the underlying data in the buffer maps to the values in the GLSL code
         */
        normalized: boolean;
        /**
         * Defines the intended usage pattern of the data store for optimization purposes
         */
        dynamic: boolean;
    };
}
