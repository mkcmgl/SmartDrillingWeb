/**
 * Stores points (in model coordinates) and other data for fault.
 */
export declare class ContourFault {
    constructor(px: Float64Array, py: Float64Array, pl: Float64Array, pr: Float64Array, closed: boolean);
    constructor(px: Float64Array, py: Float64Array, closed: boolean);
    /**
     * Gets the fault size
     * @returns size The fault size
     */
    getSize(): number;
    /**
     * Gets the fault implicit status
     * @returns isImplicit Whether the fault is implicit
     */
    getIsImplicit(): boolean;
    /**
     * Returns true if fault is closed or false if fault is open.
     * @returns closed The closed or open status
     */
    getClosed(): boolean;
    /**
     * Gets a copy left values.
     * @returns left The left values;
     */
    getLeft(): Float64Array;
    /**
     * Gets a copy left values.
     * @returns right The right values;
     */
    getRight(): Float64Array;
    /**
     * Gets a copy of the X values.
     * @returns x The X values;
     */
    getX(): Float64Array;
    /**
     * Gets a copy of the Y values.
     * @returns y The Y values;
     */
    getY(): Float64Array;
    static getClassName(): string;
    getClassName(): string;
}
