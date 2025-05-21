import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
/**
 * Based on ideas of  https://code.google.com/p/jquery-numberformatter/source/browse/trunk/src/jquery.numberformatter.js:
 * jquery.numberformatter - Formatting/Parsing Numbers in jQuery
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
 *
 * @author Michael Abernethy, Andrew Parry
 * @version 1.2.4-SNAPSHOT
 */
/**
 * Defines class for formatting decimal numbers
 *
 * @example
 * const df = new DecimalFormat( {'format':"#,###,##0.00"} );   //df.format(364565.14) gives "364,565.14"
 * @example
 * const df = new DecimalFormat( {'format':"#,###,##0.000", 'locale': 'ru'} );  //df.format(364565.14) gives '364 565,140'
 * @example
 * const df = new DecimalFormat( {'format':"0.####E0"}); //df.format(364565.14) gives '3.6457E5'
 * @example
 * // The code below shows how to replace decimal separator to be a comma ',' without having to specify a local of a country that uses ',' comma.
 * // It changes 'overridedecsep' property and overridegroupsep for group separator.
 * const df = new DecimalFormat({'format':"###,###.###", overridedecsep: ',', overridegroupsep: ''});
 * const str = df.format(12345.6);   // 'str' should be '12345,6'.
 */
export declare class DecimalFormat extends NumberFormat {
    constructor(options?: DecimalFormat.Options);
    /**
     * Return default decimal format
     */
    static getDefault(): DecimalFormat;
    /**
     * copy constructor
     * @param src Source to copy from
     * @returns this instance, filled with properties copied from the given src
     */
    protected copyConstructor(src: DecimalFormat): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties pertaining to this object
     */
    getProperties(): DecimalFormat.OptionsOut;
    /**
     * Sets properties
     * @param [properties] properties pertaining to this object
     * @returns this
     */
    setProperties(properties?: DecimalFormat.Options): this;
    /**
     * Formats number to string
     * @param number number to be formatted
     */
    format(number: number): string;
}
export declare namespace DecimalFormat {
    /**
     * The options
     */
    type Options = NumberFormat.Options & {
        /**
         * format : The syntax for the formatting is:<br>
         * 0 = Digit<br>
         * # = Digit, zero shows as absent<br>
         * . = Decimal separator<br>
         * - = Negative sign<br>
         * , = Grouping Separator<br>
         * % = Percent (multiplies the number by 100)<br>
         * E = Separates mantissa and exponent in scientific notation. Need not be quoted in prefix or suffix.<br>
         */
        format?: string;
        /**
         * decimalseparatoralwaysshown
         */
        decimalseparatoralwaysshown?: boolean;
        /**
         * decimal separator
         */
        overridedecsep?: string;
        /**
         * overridegroupsep
         */
        overridegroupsep?: string;
        /**
         * overridenegsign
         */
        overridenegsign?: string;
        /**
         * ispercentage
         */
        ispercentage?: boolean;
        /**
         * autodetectpercentage
         */
        autodetectpercentage?: boolean;
    };
    /**
     * properties pertaining to this object
     */
    type OptionsOut = NumberFormat.OptionsOut & {
        /**
         * format
         */
        format: string;
        /**
         * decimalseparatoralwaysshown
         */
        decimalseparatoralwaysshown: boolean;
        /**
         * decimal separator
         */
        overridedecsep: string;
        /**
         * overridegroupsep
         */
        overridegroupsep: string;
        /**
         * overridenegsign
         */
        overridenegsign: string;
        /**
         * ispercentage
         */
        ispercentage: boolean;
        /**
         * autodetectpercentage
         */
        autodetectpercentage: boolean;
    };
}
