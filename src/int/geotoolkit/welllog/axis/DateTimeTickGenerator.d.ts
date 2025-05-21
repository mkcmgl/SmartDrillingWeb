/**
 * @module geotoolkit/welllog/axis/DateTimeTickGenerator
 */
import { LogDrillingSectionContainer } from '@int/geotoolkit/welllog/data/LogDrillingSectionContainer';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
declare const GRADES: readonly ["sections", "major"];
/**
 * Define a date time tick generator to display corresponding time for data represented in depths.
 *
 * <p>
 * Displaying time requires setting up a LogDrillingSectionContainer object, adding
 * LogDrillingSections to it, and attaching the container to this tick generator.
 * </p>
 * @example
 * // How to create tick generator
 * const dateTimeTrajectory = new LogDrillingSectionContainer();
 * const data = {
 *       'depthfrom': 100,
 *       'depthto': 500,
 *       'valuefrom': {'Date': new Date('July 7, 2011 05:00 AM')},
 *       'valueto': {'Date': new Date('July 7, 2011 06:00 AM')},
 *       'hint': [{
 *           'depth': 200,
 *           'time': new Date('July 7, 2011 05:15 AM')
 *       }, {
 *           'depth': 300,
 *           'time': new Date('July 7, 2011 05:30 AM')
 *       }, {
 *           'depth': 400,
 *           'time': new Date('July 7, 2011 05:45 AM')
 *       }]
 *   };
 * dateTimeTrajectory.addSection(new LogDrillingSection(data));
 * const axis = new LogAxis();
 * axis.setTickGenerator(new DateTimeTickGenerator(dateTimeTrajectory));
 * track.addChild(axis);
 */
export declare class DateTimeTickGenerator extends TickGenerator {
    /**
     * Create a tick generator
     * @param sections sections container
     */
    constructor(sections: LogDrillingSectionContainer);
    /**
     * Create a tick generator
     * @param options options
     */
    constructor(options?: DateTimeTickGenerator.Options);
    clone(): DateTimeTickGenerator;
    protected copyConstructor(src: DateTimeTickGenerator, deepCopy?: boolean): this;
    /**
     * Returns valid Tick Grades : "sections", "major"
     * @returns array of known Tick Grades
     */
    getGrades(): string[];
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): DateTimeTickGenerator.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: DateTimeTickGenerator.Options): this;
}
export declare namespace DateTimeTickGenerator {
    type Grades = typeof GRADES[number];
    /**
     * An object containing the properties to set
     */
    export type Options = TickGenerator.Options & Record<Grades, TickGenerator.TickOptions> & {
        /**
         * Specify depth / time sections
         */
        dttrajectory?: LogDrillingSectionContainer;
    };
    /**
     * An object to get properties
     */
    export type OptionsOut = TickGenerator.OptionsOut & {
        /**
         * trajectory options
         */
        dttrajectory: LogDrillingSectionContainer;
    };
    export {};
}
export {};
