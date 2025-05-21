/**
 * Define a drilling section to provide information about start and end depth
 * and start and end time
 * @example
 * const section = new LogDrillingSection({
 *   'depthFrom': 100,
 *   'depthTo': 500,
 *   'valueFrom': {'Date': new Date('July 7, 2011 05:00 AM')},
 *   'valueTo': {'Date': new Date('July 7, 2011 06:00 AM')},
 *   'hint': [{
 *       'Depth': 200,
 *        'Time': new Date('July 7, 2011 05:15 AM')
 *   }, {
 *        'Depth': 300,
 *        'Time': new Date('July 7, 2011 05:30 AM')
 *    }, {
 *         'Depth': 400,
 *         'Time': new Date('July 7, 2011 05:45 AM')
 *     }]
 * });
 */
export declare class LogDrillingSection {
    /**
     * Constructor
     * @param [params] properties object
     */
    constructor(params?: LogDrillingSection.Options);
    /**
     * Constructor
     * @param [depthFrom] from depth
     * @param [depthTo] to depth
     * @param [valueFrom] value from
     * @param [valueTo] value to
     * @param [hint] array of rendering hints that will value markers at specified depths, defined by a depth Depth: and time Time:
     */
    constructor(depthFrom?: number, depthTo?: number, valueFrom?: LogDrillingSection.Value, valueTo?: LogDrillingSection.Value, hint?: LogDrillingSection.Hint[]);
    /**
     * Gets depth from
     */
    getDepthFrom(): number;
    /**
     * Get DepthTo
     */
    getDepthTo(): number;
    /**
     * Get value from
     * Used by the {@link @int/geotoolkit/welllog/axis/DateTimeTickGenerator~DateTimeTickGenerator} such that if Break, label is drawn at beginning or end of section instead of middle
     */
    getValueFrom(): LogDrillingSection.Value;
    /**
     * Get value to
     * Used by the {@link @int/geotoolkit/welllog/axis/DateTimeTickGenerator~DateTimeTickGenerator} such that if Break, label is drawn at beginning or end of section instead of middle
     */
    getValueTo(): LogDrillingSection.Value;
    /**
     * Gets hints associated with this LogDrillingSection
     *
     * @returns array of hints
     */
    getHint(): LogDrillingSection.Hint[];
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogDrillingSection.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: LogDrillingSection.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace LogDrillingSection {
    /**
     * An object containing the properties to set
     */
    type Options = {
        /**
         * depth from
         */
        depthfrom?: number;
        /**
         * depth to
         */
        depthto?: number;
        /**
         * an object containing valuefrom options
         */
        valuefrom?: Value;
        /**
         * an object containing valueto options
         */
        valueto?: Value;
        /**
         * depth to date connection
         */
        hint?: Hint[];
    };
    /**
     * Define section time and break option
     */
    type Value = {
        /**
         * Break
         */
        break?: boolean;
        /**
         * Date
         */
        date: Date;
    };
    /**
     * A pair depth and time
     */
    type Hint = {
        /**
         * Depth
         */
        depth: number;
        /**
         * Time corresponding to depth
         */
        time: Date;
    };
    /**
     * properties object
     */
    type OptionsOut = {
        /**
         * depth from
         */
        depthfrom: number;
        /**
         * depth to
         */
        depthto: number;
        /**
         * an object containing valuefrom options
         */
        valuefrom: Value;
        /**
         * an object containing valueto options
         */
        valueto: Value;
        /**
         * depth to date connection
         */
        hint: Hint[];
    };
}
