/**
 * Defines locale class, which contains information for formatting numbers, dates and time.<br>
 * The setDefault() function explained below, sets up your locale and then it will use it by default for all formatters.<br>
 * To create a custom format or change format without specifying 'local' of a country you can use {@link @int/geotoolkit/util/DecimalFormat~DecimalFormat}
 */
export declare class Locale {
    constructor(options?: Locale.Options);
    /**
     * Return number format
     * @returns defines number format
     */
    getNumberFormatInfo(): Locale.NumberFormatInfo;
    /**
     * Return a name of the locale
     */
    getLocaleName(): string;
    /**
     * @param locale current locale
     */
    static getLocale(locale: string): Locale;
    /**
     * Return default locale
     * @returns default locale
     */
    static getDefault(): Locale;
    /**
     * Sets default locale. Once user sets a default locale here it will be used by default for all formatters in all the plots.<br>
     *
     * Please refer to the example below
     * @param locale default locale. It supports ['ae', 'au', 'ca', 'cn', 'eg', 'gb', 'hk', 'il', 'in', 'jp', 'sk', 'th', 'tw', 'us', 'at', 'br', 'de', 'dk', 'es',
     * 'gr', 'it', 'nl', 'pt', 'tr', 'vn', 'bg', 'cz', 'fi', 'fr', 'no', 'pl', 'ru', 'se', 'ch']
     * @example
     * import {Locale} from '@int/geotoolkit/util/Locale';
     * Locale.setDefault(Locale.getLocale('ru'));
     */
    static setDefault(locale: Locale): void;
    /**
     * Sets the properties pertaining to Locale
     * @param options object containing locale properties
     */
    setProperties(options?: Locale.Options): this;
    /**
     * Returns the properties pertaining to Locale
     * @returns object containing locale properties
     */
    getProperties(): Locale.OptionsOut;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Locale {
    type Options = {
        /**
         * defines number format
         */
        numberformat?: NumberFormatInfo;
        /**
         * The name of the locale
         */
        locale?: string;
    };
    /**
     * defines number format
     */
    type NumberFormatInfo = {
        /**
         * defines decimal symbol
         */
        dec?: string;
        /**
         * defines group symbol
         */
        group?: string;
        /**
         * defines negative symbol
         */
        neg?: string;
        /**
         * defines infinity text
         */
        infinity?: string;
    };
    /**
     * object containing locale properties
     */
    type OptionsOut = Required<Options>;
}
