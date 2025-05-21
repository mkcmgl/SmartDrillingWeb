/**
 * Implements a dimension which is defined by an absolute width and height
 */
export declare class Dimension {
    constructor();
    /**
     * @param [width] Width of dimension or properties
     * @param [height] Height of dimension
     */
    constructor(width: number, height?: number);
    /**
     * @param options properties
     */
    constructor(options: Dimension.Options);
    /**
     * return clone object
     * @returns clone
     */
    clone(): Dimension;
    /**
     * Gets width
     */
    getWidth(): number;
    /**
     * Gets height
     */
    getHeight(): number;
    /**
     * Sets width and height
     *
     * @param width desired width
     * @param height desired height
     */
    setSize(width: number, height: number): this;
    /**
     * Round width and height of dimension object and return itself
     */
    round(): this;
    /**
     * Inflate dimension by the specified amount.
     * @param w the amount to inflate this dimension horizontally.
     * @param [h] the amount to inflate this dimension vertically.
     */
    inflate(w: number, h?: number): this;
    /**
     * Returns a string that represents the current dimension.
     */
    toString(): string;
    /**
     * compares a dimension against this one, if equal returns true
     * @param dimension to check against
     * @param [epsilon] acceptance criteria
     * @returns if these two dimensions are equal
     */
    equalsDimension(dimension: Dimension, epsilon?: number): boolean;
    /**
     * Returns properties pertaining to dimension
     * @returns properties
     */
    getProperties(): Dimension.OptionsOut;
    /**
     * Sets properties pertaining to dimension
     * @param props properties
     */
    setProperties(props?: Dimension.Options): this;
    /**
     * Create or get dimension from object
     * @param [object] object can be in format of constructor of {@link @int/geotoolkit/util/Dimension~Dimension}
     * @returns dimension
     */
    static fromObject(object?: Dimension.Options | Dimension): Dimension | null;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Dimension {
    /**
     * Width of dimension or properties
     */
    type Options = {
        /**
         * Width of dimension or properties
         */
        width?: number;
        /**
         * Height of dimension
         */
        height?: number;
    };
    /**
     * properties
     */
    type OptionsOut = {
        /**
         * Width of the dimension
         */
        width: number;
        /**
         * Height of the dimension
         */
        height: number;
    };
}
