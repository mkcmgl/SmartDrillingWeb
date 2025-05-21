import type { Contour } from '@int/geotoolkit3d/scene/surface/contour/Contour';
/**
 * A contour's class that controls the drawing of major and minor isolines.
 *
 * <br>
 * MajorStep variable indicates the elevation step between two adjacent major isoline, i.e. 500 feet.
 * MinorIncrement variable indicates the minor isoline increments between two adjacent major isoline, i.e. 3 increments.
 * <br>
 * For example, <br>
 *    ________________  major 800 ft <br>
 *    ----------------  minor        <br>
 *    ----------------  minor        <br>
 *    ________________  major 300 ft <br>
 */
export declare class MajorMinorStrategy {
    constructor(options?: MajorMinorStrategy.Options);
    /**
     * Set options
     * @param options the option for MajorMinorStrategy
     * @returns this
     */
    setOptions(options: MajorMinorStrategy.OptionsBase): this;
    /**
     * Get options
     */
    getOptions(): MajorMinorStrategy.OptionsBaseOut;
    /**
     * Set options
     * @param options the option for MajorMinorStrategy
     * @returns this
     */
    setProperties(options?: MajorMinorStrategy.OptionsBase): this;
    /**
     * Get options
     */
    getProperties(): MajorMinorStrategy.OptionsBaseOut;
    /**
     * Set step for major isoline
     * @param step the steps for major isoline in elevation unit
     * @returns this
     */
    setMajorStep(step: number): this;
    /**
     * Set step for minor isoline
     * @param step the increment for minor isoline in quantity unit
     * @returns this
     */
    setMinorIncrement(step: number): this;
    /**
     * Check if the strategy equals this strategy
     * @param strategy the strategy to test
     * @returns bool
     */
    equals(strategy: MajorMinorStrategy): boolean;
    /**
     * Return the options in string
     * @returns stringify
     */
    stringify(): string;
    /**
     * Clone this strategy
     * @returns this
     */
    clone(): MajorMinorStrategy;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace MajorMinorStrategy {
    /**
     * The options for MajorMinorStrategy.
     */
    type OptionsBase = {
        /**
         * The step between each major Isoline, in elevation unit.
         * When set, the major isolines will attempt to generate on elevations multiples of majorstep.
         * ex: if (majorstep=100, zmin=899, zmax=1202) major isolines will generate at [900, 1000, 1100, 1200].
         */
        majorstep?: number;
        /**
         * The number of increments between each major isoline, which will be separated by minor isolines.
         * The number of minor isolines generated between each major isoline will be (minorincrement - 1).
         * For example, minorincrement=2 will split the space between two major isoline in 2, separated by 1 minor Isoline.
         * Minimum accepted value is 1.
         */
        minorincrement?: number;
        contour?: Contour;
    };
    /**
     * The options
     */
    type Options = Omit<OptionsBase, 'contour'>;
    type OptionsBaseOut = Required<OptionsBase>;
}
