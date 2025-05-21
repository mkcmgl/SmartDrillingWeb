/**
 * @module geotoolkit/util/NumberFormat
 */
import { Format } from '@int/geotoolkit/util/Format';
import { Locale } from '@int/geotoolkit/util/Locale';
/**
 * Defines base class for formatting numbers based on Java NumberFormatter. <br>
 * User can also use {@link @int/geotoolkit/util/DecimalFormat~DecimalFormat} which allows creating a custom format as well.
 *
 * @example
 * // locale parameter can be used to specify 'Norway' as shown below. 'fr', 'ru', 'us', 'de' ... are also available.
 * const number = new NumberFormat({'locale': 'no'});
 * number.setMaximumFractionDigits(2);
 * number.format(5000.123); // '5 000,12'
 */
export declare class NumberFormat extends Format {
    constructor(options?: NumberFormat.Options);
    /**
     * copy constructor
     * @param src Source to copy from
     * @returns this
     */
    protected copyConstructor(src: NumberFormat): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties pertaining to this object
     */
    getProperties(): NumberFormat.OptionsOut;
    /**
     * Sets properties
     * @param properties properties pertaining to this object
     * @returns this
     */
    setProperties(properties?: NumberFormat.Options): this;
    /**
     * Return object, which contains 'dec', 'group', 'neg' symbols
     * @param [locale] locale
     */
    protected getLocalFormatData(locale?: Locale | string): Locale.NumberFormatInfo;
    /**
     * Formats number to string
     * @param number number to be formatted
     */
    format(number: number): string;
    /**
     * Return maximum fraction digits
     * @param digits maximum fraction digits
     * @returns this
     */
    setMaximumFractionDigits(digits: number): this;
    /**
     * Return minimum fraction digits
     * @param digits minimum fraction digits
     * @returns this
     */
    setMinimumFractionDigits(digits: number): this;
    /**
     * Return maximum faction digits
     * @param [number] an optional number to get maximum fraction digits
     */
    getMaximumFractionDigits(number?: number): number;
    /**
     * Return minimum faction digits
     * @param [number] an optional number to get minimum fraction digits
     */
    getMinimumFractionDigits(number?: number): number;
    /**
     * Sets locale
     * @param locale locale
     * @returns this
     */
    setLocale(locale: Locale | string): this;
    /**
     * Return the current locale
     */
    getLocale(): Locale;
    /**
     * Convert number to format with fixed point
     * @param number number to be converted
     * @param decimalPlaces number of decimal places this number can have
     */
    protected toFixed(number: number, decimalPlaces?: number): string;
    /**
     * Return instance of the number format
     * @param [locale] locale of formatter. Locals is not supported for now.
     * @returns instance of the number format
     */
    static getInstance(locale?: string): NumberFormat;
}
export declare namespace NumberFormat {
    type Options = {
        /**
         * format locale
         */
        locale?: string | Locale;
        /**
         * round number
         */
        round?: boolean;
        /**
         * specify format how to provide locale
         */
        fulllocale?: boolean;
        /**
         * specify maximum fraction digits
         */
        maximumfractiondigits?: number;
        /**
         * specify minimum fraction digits, have to be less or equal to maximumfractiondigits
         */
        minimumfractiondigits?: number;
        /**
         * specify group length of numbers
         */
        grouplength?: number;
    };
    /**
     * properties pertaining to this object
     */
    type OptionsOut = {
        /**
         * format locale
         */
        locale?: Locale;
        /**
         * round number
         */
        round?: boolean;
        /**
         * specify format how to provide locale
         */
        fulllocale?: boolean;
        /**
         * specify maximum fraction digits
         */
        maximumfractiondigits?: number;
        /**
         * specify minimum fraction digits, have to be less or equal to maximumfractiondigits
         */
        minimumfractiondigits?: number;
        /**
         * specify group length of numbers
         */
        grouplength?: number;
    };
}
