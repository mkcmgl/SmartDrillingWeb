import { NumericTickGenerator } from '@int/geotoolkit/axis/NumericTickGenerator';
/**
 * An enumeration defining rounding precision values.
 * @enum
 * @readonly
 */
export declare enum AdaptivePrecision {
    /**
     * By1
     */
    By1 = 0,
    /**
     * By2
     */
    By2 = 1,
    /**
     * By3
     */
    By3 = 2,
    /**
     * By4
     */
    By4 = 4,
    /**
     * By5
     */
    By5 = 8,
    /**
     * By6
     */
    By6 = 16,
    /**
     * By7
     */
    By7 = 17,
    /**
     * By8
     */
    By8 = 18,
    /**
     * By9
     */
    By9 = 20
}
/**
 * An enumeration defining rounding precision values.
 * @enum
 * @readonly
 */
export declare enum AdaptiveType {
    /**
     * Fixed limits
     */
    Fixed = "fixed",
    /**
     * Nice adaptive algorithm
     */
    Nice = "nice"
}
/**
 * Creates adaptive tick generator. It generates ticks and labels considering the minimum distance between ticks in pixels and it automatically configures itself to create ticks at a reasonable intervals.<br>
 */
export declare class AdaptiveTickGenerator extends NumericTickGenerator {
    constructor(options?: AdaptiveTickGenerator.Options);
    clone(): AdaptiveTickGenerator;
    protected copyConstructor(src: AdaptiveTickGenerator, deepCopy?: boolean): this;
    /**
     * Gets the origin in model space for initial tick in the sequence
     */
    getModelOrigin(): number;
    /**
     * Sets the origin in model space for initial tick in the sequence
     * @param modelOrigin origin to set
     * @returns this
     */
    setModelOrigin(modelOrigin: number): this;
    /**
     * Gets min span
     * @returns minSpan minimum distance between ticks
     */
    getMinSpan(): number;
    /**
     * Sets min span
     * @param minSpan minimum distance between ticks
     * @returns this
     */
    setMinSpan(minSpan: number): this;
    /**
     * Sets min labels span
     * @param minLabelSpan minimum distance between labels
     * @returns this
     */
    setMinLabelSpan(minLabelSpan: number): this;
    /**
     * Gets min label span
     * @returns minSpan minimum distance between labels
     */
    getMinLabelSpan(): number;
    /**
     * Set tick grades priority
     * @param tickGradesPriority default is ["major", "minor", "edge"]
     */
    setGradesPriority(tickGradesPriority: string[]): this;
    /**
     * Returns tick grades priority
     */
    getGradesPriority(): string[];
    /**
     * Sets min span's grade
     * @param minSpanGrade ('major' or 'minor' values are allowed)
     * @returns this
     * @throws {Error} if grade to set is neither 'major' nor 'minor'
     */
    setMinSpanGrade(minSpanGrade: string): this;
    /**
     * Gets min span's grade ('minor' by default)
     * @returns min span's grade
     */
    getMinSpanGrade(): string;
    /**
     * Returns minor ticks amount
     * @returns minor ticks amount
     */
    getMinorTicksAmount(): number;
    /**
     * Set amount of minor ticks
     * @param minorTicksAmount minor ticks amount
     */
    setMinorTicksAmount(minorTicksAmount: number): this;
    /**
     * Returns precision
     *
     * @returns precision
     */
    getPrecision(): AdaptivePrecision;
    /**
     * Sets precision
     *
     * @param precision legacy algorithm precision
     * @returns this
     */
    setPrecision(precision: number | string | AdaptivePrecision): this;
    /**
     * Returns type of adaptive algorithm
     * @returns adaptive type
     */
    getAdaptiveType(): AdaptiveType;
    /**
     * Sets type of adaptive algorithm
     *
     * @param adaptiveType type of adaptive algorithm
     * @returns this
     */
    setAdaptiveType(adaptiveType: AdaptiveType): this;
    /**
     * Sets spacing to be used instead of calculated step in nice mode
     * If spacing is NaN then it is not used
     * @param spacing desired step between major ticks
     * @returns this
     */
    setSpacing(spacing: number): this;
    /**
     * Returns spacing to be used instead of calculated step in nice mode
     * If spacing is NaN then it is not used
     */
    getSpacing(): number;
    /**
     * Gets hide labels on span too small flag ("true" by default)
     * @returns hide labels flag
     */
    getHideLabelsOnSpanTooSmall(): boolean;
    /**
     * Sets hide labels on span too small flag
     * @param flag hide labels flag
     * @returns this
     */
    setHideLabelsOnSpanTooSmall(flag: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): AdaptiveTickGenerator.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: AdaptiveTickGenerator.Options): this;
}
export declare namespace AdaptiveTickGenerator {
    /**
     * An object containing the properties to set
     */
    type Options = NumericTickGenerator.Options & {
        /**
         * minimum distance between ticks
         */
        minspan?: number;
        /**
         * minimum distance between labels
         */
        minlabelspan?: number;
        /**
         * tick grade to be used for minimum distance between ticks
         */
        minspangrade?: string;
        /**
         * origin in model space for initial tick in the sequence
         */
        modelorigin?: number;
        /**
         * precision for legacy algorithm
         */
        precision?: AdaptivePrecision;
        /**
         * type of adaptive algorithm
         */
        adaptivetype?: AdaptiveType;
        /**
         * count of minor ticks
         */
        minorticksamount?: number;
        /**
         * grades priority
         */
        gradespriority?: string[];
        /**
         * hide labels flag
         */
        hidelabelsonspantoosmall?: boolean;
        /**
         * spacing see {@link import("geotoolkit/axis/AdaptiveTickGenerator").AdaptiveTickGenerator.setSpacing}
         */
        spacing?: number;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = NumericTickGenerator.OptionsOut & {
        /**
         * minimum distance between ticks
         */
        minspan: number;
        /**
         * tick grade to be used for minimum distance between ticks
         */
        minspangrade: string;
        /**
         * minimum distance between labels
         */
        minlabelspan: number;
        /**
         * origin in model space for initial tick in the sequence
         */
        modelorigin: number;
        /**
         * precision for legacy algorithm
         */
        precision: AdaptivePrecision;
        /**
         * type of adaptive algorithm
         */
        adaptivetype: AdaptiveType;
        /**
         * count of minor ticks
         */
        minorticksamount: number;
        /**
         * default is ["major", "minor", "edge"]
         */
        gradespriority: string[];
        /**
         * hide labels flag
         */
        hidelabelsonspantoosmall: boolean;
        /**
         * desired step between major ticks to be used instead of calculated step in nice mode. If spacing is NaN then it is not used.
         */
        spacing: number;
    };
}
