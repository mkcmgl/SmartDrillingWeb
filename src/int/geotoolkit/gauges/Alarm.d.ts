import { Range } from '@int/geotoolkit/util/Range';
/**
 * An Alarm is attached to a gauge and contains a collection of Alerts
 */
export declare class Alarm {
    constructor(options?: Alarm.Options);
    /**
     * Gets the name of the function in Alarm Factory that is associated with this alarm
     * @returns Name of the function
     */
    getHandlerName(): string;
    /**
     * Gets the name of the function in Alarm Factory that is associated with this alarm
     * @returns Name of the function
     */
    getName(): string;
    /**
     * Takes a value and tests if it lies within this alarm range
     * @param val Value to test
     */
    testValue(val: number): boolean;
    /**
     * Sets properties pertaining to alarm class
     * @param props properties or an alarm to extract properties from
     */
    setProperties(props?: Alarm.Options): this;
    /**
     * Returns properties of alarm
     * @returns properties or an alarm to extract properties from
     */
    getProperties(): Alarm.OptionsOut;
    /**
     * Returns extra properties which will be passed into the handler function as fourth parameter
     */
    getAdditionalProperties(): Record<string, any>;
    /**
     * Sets extra properties which will be passed into the handler function as fourth parameter
     * @param props Properties
     */
    setAdditionalProperties(props: Record<string, any>): this;
    /**
     * Returns an instance of alarm created using provided properties
     * @param props alarm properties
     * @returns alarm
     */
    static fromObject(props: Alarm.Options | Alarm): Alarm;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Alarm {
    /**
     * properties
     */
    type Options = {
        /**
         * Name of the alarm for indexing
         */
        name?: string;
        /**
         * Lower boundary of range that the alarm is effective on
         */
        low?: number;
        /**
         * Upper boundary of range that the alarm is effective on
         */
        high?: number;
        /**
         * Range that the alarm is effective on
         */
        range?: Range;
        /**
         * Name of the handler function as defined in Alarm Factory
         */
        handlername?: string;
        /**
         * Extra properties which will be passed into the handler function as fourth parameter
         */
        additionalproperties?: Record<string, any>;
    };
    /**
     * properties
     */
    type OptionsOut = {
        /**
         * Name of the alarm for indexing
         */
        name?: string;
        /**
         * Range that the alarm is effective on
         */
        range?: Range;
        /**
         * Name of the handler function as defined in Alarm Factory
         */
        handlername?: string;
        /**
         * Extra properties which will be passed into the handler function as fourth parameter
         */
        additionalproperties?: Record<string, any>;
    };
}
