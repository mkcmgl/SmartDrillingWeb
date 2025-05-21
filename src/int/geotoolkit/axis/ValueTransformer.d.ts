/**
 * Abstraction to formalize an input value transform
 */
export declare abstract class ValueTransformer {
    /**
     * Transforms input value
     * @param val inputValue value to transform
     * @param [reverse] direction of transformation
     * @returns transformed value
     * @throws {Error} if value mapping is invalid or input value is undefined
     */
    abstract transform(val: number, reverse?: boolean): number;
    static getClassName(): string;
    getClassName(): string;
}
