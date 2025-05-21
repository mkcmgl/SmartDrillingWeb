/**
 * A Reservoir IJK index
 *
 * This object represents a cell index
 */
export declare class IJKIndex {
    constructor(options: IJKIndex.Options, j?: number, k?: number);
    /**
     * Set the ijk coordinate from the given array ([i, j, k])
     * @param array The array containing the ijk values
     * @returns this
     */
    fromArray(array: number[]): this;
    /**
     * Get an array representation of the IJK
     * @returns array
     */
    toArray(): number[];
    /**
     * Set the value of the object<br>
     * @param options The input for IJK coordinates as an object
     * @returns this
     */
    fromJson(options: Partial<IJKIndex.Coordinates>): this;
    /**
     * Get a json representation of the object<br>
     * @deprecated since 4.0, Json forms need to be all lowercase, please use .toJson() instead.
     */
    toJSON(): IJKIndex.DeprecatedCoordinates;
    /**
     * Get a json representation of the object<br>
     */
    toJson(): IJKIndex.Coordinates;
    /**
     * Set the the ijk values
     * @param i The I coordinate
     * @param j The J coordinate
     * @param k The K coordinate
     * @returns this
     */
    set(i: number, j: number, k: number): this;
    /**
     * Set the ijk coordinates.
     * @param options The input for IJK coordinates as an object or an array or the I coordinate
     * @param [j] J coordinate
     * @param [k] K coordinate
     * @returns this
     */
    setOptions(options: IJKIndex.Options, j?: number, k?: number): this;
    /**
     * Get the ijk coordinates.
     * (see {@link import("geotoolkit3d/scene/reservoir/IJKIndex").IJKIndex.setOptions} for more info)
     * @returns options
     */
    getOptions(): IJKIndex.Coordinates;
    /**
     * Return I index
     * @returns I
     */
    getI(): number;
    /**
     * Return J index
     * @returns J
     */
    getJ(): number;
    /**
     * Return K index
     * @returns K
     */
    getK(): number;
    /**
     * Add ijk index to this index
     * @param ijk adds ijk to this index
     * @returns this
     */
    add(ijk: IJKIndex): this;
    /**
     * Subtract ijk index to this index
     * @param ijk subtracts ijk to this index
     * @returns this
     */
    sub(ijk: IJKIndex): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace IJKIndex {
    /**
     * The input for IJK coordinates as an object or an array or the I coordinate
     */
    type Options = number[] | number | Partial<Coordinates>;
    /** @deprecated since 4.0, Json forms need to be all lowercase, please use IJKIndex.Coordinates instead. */
    type DeprecatedCoordinates = {
        /**
         * I coordinate
         */
        I: number;
        /**
         * J coordinate
         */
        J: number;
        /**
         * K coordinate
         */
        K: number;
    };
    /**
     * The IJK coordinates as an object
     */
    type Coordinates = {
        /**
         * I coordinate
         */
        i: number;
        /**
         * J coordinate
         */
        j: number;
        /**
         * K coordinate
         */
        k: number;
    };
}
