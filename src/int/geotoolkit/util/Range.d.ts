/**
 * Represents a data range, with low and high value
 */
export declare class Range {
    constructor();
    /**
     * @param low Lower range boundary
     * @param high Upper range boundary
     */
    constructor(low: number, high: number);
    constructor(options: Range.Options);
    constructor(range: Range);
    /**
     * A Range instance that represents infinite range
     */
    static get Infinite(): Range;
    /**
     * returns true if the Ranges are equal
     *
     * @param range range to compare to
     * @param [epsilon] acceptance criteria
     * @returns if these two ranges are equal
     */
    equalsRange(range: Range, epsilon?: number): boolean;
    /**
     * Gets upper range boundary
     *
     * @returns high value
     */
    getHigh(): number;
    /**
     * Gets lower range boundary
     *
     * @returns lower range boundary
     */
    getLow(): number;
    /**
     * Returns lower range boundary
     * @name module:geotoolkit/util/Range~Range#low
     */
    get low(): number;
    /**
     * Returns upper range boundary
     * @name module:geotoolkit/util/Range~Range#high
     */
    get high(): number;
    /**
     * Sets upper range boundary
     * @param high New upper boundary
     */
    setHigh(high: number): this;
    /**
     * Sets lower range boundary
     * @param low New low boundary
     */
    setLow(low: number): this;
    /**
     * Sets a new range with given lower and upper boundaries. This method
     * checks if low is less than high otherwise swaps limits
     *
     * @param low Lower range boundary
     * @param high Upper range boundary
     */
    setRange(low: number, high: number): this;
    setRange(range: Range): this;
    /**
     * Gets all the properties pertaining to this object
     * @example
     * {'low': 0, 'high': 1}
     */
    getProperties(): Range.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: Range.Options): this;
    /**
     * Returns string representation
     */
    toString(): string;
    /**
     * Return clone object.
     * @returns clone a copy of this object
     */
    clone(): Range;
    /**
     * return the size of the range
     */
    getSize(): number;
    /**
     * Determines whether this Range and the specified Range have intersection.<br>
     * Two ranges intersect if their intersection size is longer than 0.
     *
     * @param low lower range boundary
     * @param high Upper range boundary
     */
    intersects(low: number, high: number): boolean;
    /**
     * Determines whether this Range and the specified Range have intersection.<br>
     * Two ranges intersect if their intersection size is longer than 0.
     *
     * @param range range or lower range boundary
     */
    intersects(range: Range): boolean;
    /**
     * Intersect this Range and the specified one. This range will be affected.
     *
     * @param low lower range boundary
     * @param high Upper range boundary
     * @returns this
     */
    intersect(low: number, high: number): this;
    /**
     * Intersect this Range and the specified one. This range will be affected.
     *
     * @param range range
     * @returns this
     */
    intersect(range: Range): this;
    /**
     * Check if range contains another range or value
     * @param range The range to check containment with current one or value
     */
    contains(range: Range | number): boolean;
    /**
     * Union this Range with the specified
     *
     * @param range The range to union with current one
     */
    union(range: Range): void;
    /**
     * Subtract second range from the first range and returns result as array of non-overlapping contiguous ranges.
     * @param first the first range
     * @param second range the first range
     * @returns array of ranges
     */
    static subtract(first: Range, second: Range): Range[];
    /**
     * Create or get range from object
     * @param [object] object can be in format of constructor of {@link @int/geotoolkit/util/Range~Range}
     * @returns range
     */
    static fromObject(object?: Range.Options | Range): Range | null;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Range {
    /**
     * Lower range boundary
     */
    type Options = {
        /**
         * Lower range boundary
         */
        low?: number;
        /**
         * Upper range boundary
         */
        high?: number;
    };
    type OptionsOut = {
        low: number;
        high: number;
    };
}
