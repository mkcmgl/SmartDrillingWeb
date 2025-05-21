import { TimeZone } from '@int/geotoolkit/axis/TimeZone';
import { Locale } from '@int/geotoolkit/util/Locale';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
declare const grades: ["dst", "edge", "major", "minor"];
/**
 * The adaptive data time tick generator will automatically configure itself to create DateTime Ticks at a reasonable interval.
 */
export declare class AdaptiveDateTimeTickGenerator extends TickGenerator {
    constructor(options?: AdaptiveDateTimeTickGenerator.Options);
    constructor(options: number, offsetUnit?: AbstractUnit | string);
    /**
     * Returns valid Tick Grades : "dst", "edge", "major", "minor"
     * @returns array of known Tick Grades
     */
    getGrades(): string[];
    /**
     * Sets locale
     * @param locale locale
     * @returns this
     */
    setLocale(locale: Locale | string): this;
    /**
     * Return the current locale
     */
    getLocale(): Locale | string;
    /**
     * Set Daylight Saving Time dates in milliseconds
     * @param [timeStamps] Daylight Saving Time dates in milliseconds
     * @returns this
     */
    setDSTTimestamps(timeStamps?: number[]): this;
    clone(): AdaptiveDateTimeTickGenerator;
    protected copyConstructor(src: AdaptiveDateTimeTickGenerator, deepCopy?: boolean): this;
    /**
     * Set time zone
     * @param timeZone UTC or local time, If using Third Party such as momentJS see also {@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones}
     * @returns this
     */
    setTimeZone(timeZone: TimeZone | string): this;
    /**
     * Set time zone offset
     * @param timeZoneOffset UTC time if timeZoneOffset is 0
     * @param [offsetUnit] specified in sec,mls,hours.
     * @returns this
     */
    setTimeZoneOffset(timeZoneOffset: number, offsetUnit?: AbstractUnit | string): this;
    /**
     * Get time zone
     * @returns timeZone current time zone
     */
    getTimeZone(): TimeZone | string;
    /**
     * Get time zone offset
     * @param [offsetUnit] specified in sec,mls,hours
     * @returns timeZone offset
     */
    getTimeZoneOffset(offsetUnit?: AbstractUnit | string): number;
    /**
     * Set label pattern
     * @param pattern internal object represents labels pattern information
     */
    setLabelPattern(pattern: Record<string, boolean[] | number> & {
        major?: number;
    }): this;
    /**
     * Set label max text
     * @param tickGrade valid values are "edge", "dst", "major" and "minor"
     * @param text label text
     * @returns this
     */
    setLabelMaxText(tickGrade: string, text: string): this;
    /**
     * Sets format dictionary
     *
     * Default dictionary is ["s.u", "s.u", "s.u", "H:i:s", "H:i:s", "H:i", "H:i", "M j<b\r/>H:i", "M j<b\r/>H:i", "M j<b\r/>H:i", "M j", "M, Y", "Y", "Y", "Y"]
     * The index of the dictionary should match {@link @int/geotoolkit/axis/DateZoomLevel~DateZoomLevel}
     *
     * @param dictionary dictionary to use to format "edge", "dst", "major" and "minor" and  labels when label grade format not specified
     * @returns this
     */
    setFormatDictionary(dictionary: string[]): this;
    /**
     * Set label grade format
     * @param tickGrade valid values are "edge", "dst", "major" and "minor"
     * @param [format] label grade format
     * @returns this
     */
    setLabelGradeFormat(tickGrade: string, format?: string): this;
    /**
     * Return label grade format
     * @param tickGrade valid values are "edge", "dst", "major" and "minor"
     * @returns format label grade format
     */
    getLabelGradeFormat(tickGrade: string): null | string;
    /**
     * Sets unit
     *
     * @param unit unit to set
     * @returns this
     */
    setUnit(unit: string | AbstractUnit): this;
    /**
     * Sets supported ticks visible.
     * Note that this would also change the resulting visibility of the corresponding label.
     * (An AdaptiveDateTimeTickGenerator's label can be visible only if the corresponding tick is visible)
     * Use LineStyle null to make tick invisible.
     *
     * @param tickGrade Tick grade
     * @param visible Tick visibility
     * @returns this
     */
    setVisibleTickGrade(tickGrade: string, visible: boolean): this;
    /**
     * Enable or disable 'Monday' flag
     * @param enable Enables week starting from Monday, default is disabled
     */
    static setWeekStartMonday(enable: boolean): void;
    /**
     * Converts model time to local
     */
    convertModelToLocalTime(model: number): number;
    /**
     * Converts local time to model
     */
    convertLocalTimeToModel(localTime: number): number;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties
     */
    getProperties(): AdaptiveDateTimeTickGenerator.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: AdaptiveDateTimeTickGenerator.Options): this;
}
export declare namespace AdaptiveDateTimeTickGenerator {
    /**
     * An object containing the properties to set
     */
    export type Options = TickGenerator.Options & {
        /**
         * tickGrade valid values are "edge", "dst", "major" and "minor" with corresponding format label grade format
         */
        labelformat?: Record<string, string>;
        /**
         * min distance between 2 labels
         */
        labelminspan?: number;
        /**
         * distance of label from edge
         */
        labeledgespan?: number;
        /**
         * minimum distance to hide label
         */
        labelautohide?: number;
        /**
         * rotate label or not
         */
        rotatelabels?: boolean;
        /**
         * locale
         */
        locale?: Locale | string;
        /**
         * timeZone UTC or local time
         */
        timezone?: TimeZone;
        /**
         * timezoneoffset
         */
        localtimezoneoffset?: number;
        /**
         * dictionary to use. see {@link import("geotoolkit/axis/AdaptiveDateTimeTickGenerator").AdaptiveDateTimeTickGenerator.setFormatDictionary}
         */
        formatdictionary?: string[];
        /**
         * min distance between ticks in device space
         */
        minspan?: number;
        /**
         * see {@link import("geotoolkit/axis/AdaptiveDateTimeTickGenerator").AdaptiveDateTimeTickGenerator.setDSTTimestamps}
         */
        dsttimestamps?: number[];
        /**
         * specified in sec,mls,hours.
         */
        offsetunit?: AbstractUnit | string;
    } & Partial<Record<Grades, TickGenerator.TickOptions>>;
    /**
     * An object containing the properties
     */
    export type OptionsOut = TickGenerator.OptionsOut & {
        /**
         * tickGrade valid values are "edge", "dst", "major" and "minor" with corresponding format label grade format
         */
        labelformat: Record<string, string>;
        /**
         * min distance between 2 labels
         */
        labelminspan: number;
        /**
         * distance of label from edge
         */
        labeledgespan: number;
        /**
         * minimum distance to hide label
         */
        labelautohide: number;
        /**
         * rotate label or not
         */
        rotatelabels: boolean;
        /**
         * locale
         */
        locale: Locale | string;
        /**
         * timeZone UTC or local time
         */
        timezone: TimeZone | string;
        /**
         * timezoneoffset
         */
        localtimezoneoffset: number;
        /**
         * dictionary to use
         */
        formatdictionary: string[];
        /**
         * min distance between ticks in device space
         */
        minspan: number;
        /**
         * dst time stamps
         */
        dsttimestamps: number[];
        /**
         * specified in sec,mls,hours.
         */
        offsetunit: AbstractUnit;
    };
    type Grades = typeof grades[number];
    export {};
}
export {};
