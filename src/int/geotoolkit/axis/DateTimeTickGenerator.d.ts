import { TimeZone } from '@int/geotoolkit/axis/TimeZone';
import { DateZoomLevel } from '@int/geotoolkit/axis/DateZoomLevel';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Enum of label mode
 * @enum
 * @readonly
 */
export declare enum LabelMode {
    /**
     * Default
     */
    Default = "Default",
    /**
     * Between
     */
    Between = "Between"
}
/**
 * Define date and time tick generator. Ticks are generated based on UTC date and time by default if no timezone offset is specified
 */
export declare class DateTimeTickGenerator extends TickGenerator {
    /**
     * @param [options] An object containing the properties to set
     */
    constructor(options?: DateTimeTickGenerator.Options);
    /**
     * @param [options] timezoneoffset
     * @param [offsetUnit] offset unit specified in sec,mls,hours.
     */
    constructor(options: number, offsetUnit?: AbstractUnit);
    clone(): DateTimeTickGenerator;
    protected copyConstructor(src: DateTimeTickGenerator, deepCopy?: boolean): this;
    /**
     * Set time zone
     * @param timeZone time zone UTC or Local Time
     * @returns this
     */
    setTimeZone(timeZone: TimeZone): this;
    /**
     * Get time zone
     * @returns timeZone
     */
    getTimeZone(): TimeZone;
    /**
     * Sets label mode
     * @param mode label mode
     * @returns this
     */
    setLabelMode(mode: LabelMode): this;
    /**
     * Gets label mode
     */
    getLabelMode(): LabelMode;
    /**
     * Sets zoom level
     * @param zoomLevel Date ZoomLevel
     * @returns this
     */
    setZoomLevel(zoomLevel: DateZoomLevel | number): this;
    /**
     * Gets zoom level
     */
    getZoomLevel(): DateZoomLevel | number;
    /**
     * Sets unit
     * @param unit unit to be set
     * @returns this
     */
    setUnit(unit: string | AbstractUnit): this;
    /**
     * Enables week starting from Monday
     * @param enable Enables or disables week starting from Monday
     */
    static setWeekStartMonday(enable: boolean): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): DateTimeTickGenerator.OptionsOut;
    /**
     * Set time zone offset
     * @param timeZoneOffset UTC time if timeZoneOffset is 0
     * @param [offsetUnit] specified in sec,mls,hours.
     * @returns this
     */
    setTimeZoneOffset(timeZoneOffset: number, offsetUnit?: AbstractUnit | string): this;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: DateTimeTickGenerator.Options): this;
}
export declare namespace DateTimeTickGenerator {
    /**
     * An object containing the properties to set
     */
    type Options = TickGenerator.Options & {
        /**
         * time zone UTC or Local Time
         */
        timezone?: TimeZone;
        /**
         * zoom level
         */
        zoomlevel?: number;
        /**
         * rotate labels or not
         */
        rotatelabels?: boolean;
        /**
         * label mode
         */
        labelmode?: LabelMode;
        /**
         * local time zone offset unit
         */
        localtimezoneoffset?: number;
        /**
         * array of the type of ticks that are supported
         */
        tickgrades?: string[];
        /**
         * UTC time if timeZoneOffset is 0
         */
        timezoneoffset?: number;
        /**
         * offset unit specified in sec,mls,hours.
         */
        offsetunit?: AbstractUnit;
    };
    /**
     * properties
     */
    type OptionsOut = TickGenerator.OptionsOut & {
        /**
         * time zone UTC or Local Time
         */
        timezone: TimeZone;
        /**
         * zoom level
         */
        zoomlevel: number;
        /**
         * rotate labels or not
         */
        rotatelabels: boolean;
        /**
         * label mode
         */
        labelmode: LabelMode;
        /**
         * local time zone offset unit
         */
        localtimezoneoffset: number;
        /**
         * array of the type of ticks that are supported
         */
        tickgrades: string[];
        /**
         * UTC time if timeZoneOffset is 0
         */
        timezoneoffset: number;
        /**
         * offset unit specified in sec,mls,hours.
         */
        offsetunit: AbstractUnit | string;
    };
}
