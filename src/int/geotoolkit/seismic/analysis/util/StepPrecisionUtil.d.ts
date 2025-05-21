/**
 * This class is used to keep the precision of numbers when steps are used to calculate these numbers.
 */
export declare class StepPrecisionUtil {
    /**
     * fixes precision calculator of inline and xline numbers. Can be used for time/depth as well
     * example: StepPrecisionUtil.getNormalizedLineValue(1, 50, 0.1) => 6
     * example: StepPrecisionUtil.getNormalizedLineValue(1, -50, -0.1) => 6
     * To use when the reference value is not the minimum value
     * never pass floats, always pass doubles
     * you might want to pass Math(step) as step
     *
     * @param referenceValue The reference value.
     * @param stepIndex The step index.
     * @param step The step amount.
     * @returns relativeValue The calculated relative value.
     */
    static getRelativeLineValue(referenceValue: number, stepIndex: number, step: number): number;
    /**
     * Fixes precision calculator of inline and xline numbers.
     * Can be used for time/depth as well result is always >= min
     * never pass floats, always pass doubles
     * works with negative of positive steps
     * @param minValue The minimum value.
     * @param stepIndex The step index.
     * @param step The step amount.
     * @returns normalizedValue The normalized line value.
     */
    static getNormalizedLineValue(minValue: number, stepIndex: number, step: number): number;
    /**
     * Fixed precision calculator of step indexes. add one to get a step count
     * example: getNormalizedStepIndex(1, 1, 0.1) => 0
     * example: getNormalizedStepIndex(1, 6, 0.1) => 50
     * example: getNormalizedStepIndex(1, 6, -0.1) => -50
     * To use when the reference value is not the minimum value never pass floats, always pass doubles
     * you might want to pass Math(step) as step don't use arbitrary step values
     * @param referenceValue The reference value.
     * @param value The actual value.
     * @param step The step amount.
     * @returns index The relative index.
     */
    static getRelativeStepIndex(referenceValue: number, value: number, step: number): number;
    /**
     * Fixed precision calculator of step count. same as getNormalizedStepIndex, with 1 added
     * result is always >= 1 never pass floats, always pass doubles don't use arbitrary step values
     * @throws Error if value < minValue
     * @param minValue The minimum value.
     * @param value The actual value.
     * @param step The step amount.
     * @returns index The normalized step index.
     */
    static getNormalizedStepIndex(minValue: number, value: number, step: number): number;
    /**
     * Fixed precision calculator of step count. same as getNormalizedStepIndex, with 1 added
     * result is always >= 1 never pass floats, always pass doubles don't use arbitrary step values
     * @param minValue The minimum value.
     * @param value The actual value.
     * @param step The step amount.
     * @returns index The normalized step index.
     */
    static getNormalizedStepCount(minValue: number, value: number, step: number): number;
    /**
     * Gets the Minimum fraction digits
     * @param step The step amount.
     * @returns result The minimum digits.
     */
    static getMinimumFractionDigits(step: number): number;
    /**
     * Finds the number of digits after the dot never pass floats, always pass doubles
     * @throws Error if step is too big
     * @param step The step value
     * @returns multiplier The number of digits
     */
    static getNormalizedStepMultiplier(step: number): number;
    /**
     * This is needed because a float such as 0.002 gets transformed to 0.00200000123 when doing a single (double) cast.
     * @param step The step amount.
     * @returns result The converted number.
     */
    static convertFloatStepToDouble(step: number): number;
    static getClassName(): string;
    getClassName(): string;
}
