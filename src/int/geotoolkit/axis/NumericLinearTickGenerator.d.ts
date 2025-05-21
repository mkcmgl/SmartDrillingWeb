import { NumericTickGenerator } from '@int/geotoolkit/axis/NumericTickGenerator';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
declare const grades: ["major", "minor", "edge"];
/**
 * Creates numeric linear tick generator
 */
export declare class NumericLinearTickGenerator extends NumericTickGenerator {
    constructor(options?: NumericLinearTickGenerator.Options);
    clone(): NumericLinearTickGenerator;
    protected copyConstructor(src: NumericLinearTickGenerator, deepCopy?: boolean): this;
    /**
     * Set Major or Minor tick step size
     *
     * @param tickGrade tick grade major or minor
     * @param tickStep amount each tick should step
     * @returns this
     */
    setTickStep(tickGrade: string, tickStep: number): this;
    /**
     * Sets offset for tick generator
     * @param offset tick generator offset
     */
    setOffset(offset: number): this;
    /**
     * Return offset
     */
    getOffset(): number;
    /**
     * Returns precision
     */
    getPrecision(): number;
    /**
     * set precision
     * @param precision precision value to be set
     * @returns this
     */
    setPrecision(precision: number): this;
    /**
     * Gets hide labels on span between labels is too small flag ("true" by default)
     * @returns hide labels flag
     */
    getHideLabelsOnSpanTooSmall(): boolean;
    /**
     * Sets hide labels on span between labels too small flag
     * @param flag hide labels flag
     * @returns this
     */
    setHideLabelsOnSpanTooSmall(flag: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): NumericLinearTickGenerator.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: NumericLinearTickGenerator.Options): this;
}
export declare namespace NumericLinearTickGenerator {
    /**
     * An object containing the properties to set
     */
    export type Options = NumericTickGenerator.Options & {
        /**
         * step for each major tick
         */
        majormodelstep?: number;
        /**
         * step for each minor tick
         */
        minormodelstep?: number;
        /**
         * precision
         */
        precision?: number;
        /**
         * tick generator offset
         */
        offset?: number;
        /**
         * hide labels flag
         */
        hidelabelsonspantoosmall?: boolean;
    } & Partial<Record<Grades, TickGenerator.TickOptions>>;
    /**
     * properties
     */
    export type OptionsOut = NumericTickGenerator.OptionsOut & {
        /**
         * step for each major tick
         */
        majormodelstep: number;
        /**
         * step for each minor tick
         */
        minormodelstep: number;
        /**
         * precision
         */
        precision: number;
        /**
         * tick generator offset
         */
        offset: number;
        /**
         * hide labels flag
         */
        hidelabelsonspantoosmall: boolean;
    } & Partial<Record<Grades, TickGenerator.TickOptions>>;
    type Grades = typeof grades[number];
    export {};
}
export {};
