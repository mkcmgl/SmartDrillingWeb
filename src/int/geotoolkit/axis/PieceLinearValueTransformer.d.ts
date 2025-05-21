/**
 * @module geotoolkit/axis/PieceLinearValueTransformer
 */
import { ValueTransformer } from '@int/geotoolkit/axis/ValueTransformer';
/**
 * Enum of extrapolation types (Out-of-range input value's transformed value)
 * @enum
 * @readonly
 */
export declare enum ExtrapolationType {
    /**
     * Transformed value is NaN
     */
    NaN = "NaN",
    /**
     * Transformed value is equal to corresponding boundary's output value
     */
    Boundary = "Boundary",
    /**
     * Transformed value is a linearly extrapolated value based on corresponding boundary's piece mapping.
     */
    Extrapolated = "Extrapolated"
}
/**
 * ValueTransform implementation for piece-linear case.
 */
export declare class PieceLinearValueTransformer extends ValueTransformer {
    /**
     * Create PieceLinearValueTransformer
     * @param [inputValues] object with all props
     */
    constructor(inputValues?: PieceLinearValueTransformer.Options);
    /**
     * Create PieceLinearValueTransformer
     * @param inputValues array of input values or object with all props
     * @param outputValues array of output values
     * @param extrapolationType Enum of ExtrapolationType
     */
    constructor(inputValues: number[], outputValues: number[], extrapolationType: ExtrapolationType);
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): PieceLinearValueTransformer.Options;
    /**
     * Sets all the properties pertaining to this object
     * @throws Error if properties are not valid
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: PieceLinearValueTransformer.Options): this;
    /**
     * Gets extrapolation type (by default: PieceLinearValueTransformer.ExtrapolationType.Boundary)
     * @returns extrapolationType
     */
    getExtrapolationType(): ExtrapolationType;
    /**
     * Sets extrapolation type for out-of-range input values
     * @param extrapolationType Enum of ExtrapolationType
     * @returns this
     */
    setExtrapolationType(extrapolationType: ExtrapolationType): this;
    transform(val: number, reverse?: boolean): number;
}
export declare namespace PieceLinearValueTransformer {
    /**
     * array of input values or object with all props
     */
    type Options = {
        /**
         * array of input values
         */
        inputvalues?: number[];
        /**
         * array of output values
         */
        outputvalues?: number[];
        /**
         * Enum of ExtrapolationType
         */
        extrapolationtype?: ExtrapolationType;
    };
}
