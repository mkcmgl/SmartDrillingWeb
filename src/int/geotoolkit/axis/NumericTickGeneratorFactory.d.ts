import { NumericLinearTickGenerator } from '@int/geotoolkit/axis/NumericLinearTickGenerator';
import { AdaptiveTickGenerator } from '@int/geotoolkit/axis/AdaptiveTickGenerator';
import type { NumericTickGenerator } from '@int/geotoolkit/axis/NumericTickGenerator';
/**
 * Enum of axis tick generator type
 * @enum
 * @readonly
 */
export declare enum GeneratorType {
    /**
     * Adaptive tick generator
     */
    Adaptive = "adaptive",
    /**
     * Linear tick generator
     */
    Linear = "linear"
}
/**
 * Defines helper method(s) to create tick generator instance
 */
export declare class NumericTickGeneratorFactory {
    /**
     * Returns instance of the factory
     * @returns factory
     */
    static getInstance(): NumericTickGeneratorFactory;
    /**
     * Creates tick generator instance based on specified type
     *
     * @param [options] tick generator options
     * @param [type] type of tick generator
     * @returns tick generator
     */
    create(options?: (NumericLinearTickGenerator.Options | AdaptiveTickGenerator.Options) & NumericTickGeneratorFactory.TickVisible, type?: GeneratorType | string): NumericTickGenerator;
    /**
     * Creates linear numeric tick generator instance
     *
     * @param [options] tick generator options
     * @returns tick generator
     */
    createLinear(options?: NumericLinearTickGenerator.Options & NumericTickGeneratorFactory.TickVisible): NumericLinearTickGenerator;
    /**
     * Creates adaptive tick generator instance
     *
     * @param [options] adaptive tick generator options
     * @returns tick generator
     */
    createAdaptive(options?: AdaptiveTickGenerator.Options & NumericTickGeneratorFactory.TickVisible): AdaptiveTickGenerator;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace NumericTickGeneratorFactory {
    export type TickVisible = {
        ticks?: Partial<Record<Grades, {
            visible: boolean;
        }>>;
        labels?: Partial<Record<Grades, {
            visible: boolean;
        }>>;
    };
    type Grades = typeof grades[number];
    export {};
}
declare const grades: ["major", "minor", "edge", "intermediate"];
export {};
