import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
/**
 * Define the proper number format for a double value formatted for DISPLAY
 * only.
 */
export declare class AutoNumberFormat extends NumberFormat {
    constructor(options?: AutoNumberFormat.Options);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: AutoNumberFormat): this;
    /**
     * Return maximum faction digits
     * @param [number] an optional number to get maximum fraction digits
     */
    getMaximumFractionDigits(number?: number): number;
    /**
     * Formats number to string
     * @param number number to be formatted
     */
    format(number: number): string;
    /**
     * Estimate the maximum fraction digits
     * @param number number to provide the estimate
     */
    static estimateMaximumFractionDigits(number: number): number;
    /**
     * Creates format {@link @int/geotoolkit/util/NumberFormat~NumberFormat} based on specified value
     * @param number number to provide the best format
     */
    static matchFormat(number: number): NumberFormat;
}
export declare namespace AutoNumberFormat {
    type Options = NumberFormat.Options & {
        /**
         * format locale
         */
        locale?: string;
        /**
         * round number
         */
        round?: boolean;
        /**
         * specify format how to provide locale
         */
        fulllocale?: boolean;
        /**
         * automatic calculation of maximum fraction digits
         */
        automaximumfractiondigits?: boolean;
        exponentialformat?: string;
    };
}
