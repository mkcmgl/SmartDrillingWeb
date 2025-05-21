import type { LogDrillingSection } from '@int/geotoolkit/welllog/data/LogDrillingSection';
/**
 * Define container of the drilling sections
 */
export declare class LogDrillingSectionContainer {
    /**
     * Constructor
     * @param [options] An object containing the properties to set
     */
    constructor(options?: LogDrillingSectionContainer.Options);
    /**
     * Add Section
     * @param section section
     * @returns this
     */
    addSection(section: LogDrillingSection): this;
    /**
     * Get Sections Array
     * @param from from
     * @param to to
     */
    getSectionsArray(from: number, to: number): LogDrillingSection[] | null;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogDrillingSectionContainer.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: LogDrillingSectionContainer.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace LogDrillingSectionContainer {
    /**
     * An object containing the properties to set
     */
    type Options = {
        /**
         * sections
         */
        sections?: LogDrillingSection[];
    };
    /**
     * properties object
     */
    type OptionsOut = {
        /**
         * sections
         */
        sections: LogDrillingSection[];
    };
}
