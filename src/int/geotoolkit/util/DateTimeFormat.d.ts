import { TimeZone } from '@int/geotoolkit/axis/TimeZone';
import { Format } from '@int/geotoolkit/util/Format';
/**
 * Defines a class for formatting date time
 */
export declare class DateTimeFormat extends Format {
    constructor(options?: DateTimeFormat.Options);
    /**
     * copy constructor
     * @param src Source to copy from
     * @returns this
     */
    protected copyConstructor(src: DateTimeFormat): this;
    getTimeZone(): TimeZone | string;
    getFormat(): string;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): DateTimeFormat.OptionsOut;
    /**
     * Sets properties
     * @param properties properties pertaining to this object
     */
    setProperties(properties?: DateTimeFormat.Options): this;
    /**
     * Formats number to string
     * @param number number to be formatted
     */
    format(number: number): string;
    /**
     * Return instance of the number format
     * @param [locale] locale of formatter. Locals are not supported for now.
     * @returns instance of the format
     */
    static getInstance(locale?: string): DateTimeFormat;
}
export declare namespace DateTimeFormat {
    type Options = {
        /**
         * date time format
         */
        format?: string;
        /**
         * time zone
         */
        timezone?: TimeZone | string;
    };
    type OptionsOut = Options;
}
