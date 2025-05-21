import { NumericTickGenerator } from '@int/geotoolkit/axis/NumericTickGenerator';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import type { IModel } from '@int/geotoolkit/scene/IModel';
import type { TickInfo } from '@int/geotoolkit/axis/TickInfo';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
/**
 * SecondaryTickGenerator utilizes "primaryValues-to-secondaryValues" mapping
 * to generate ticks/labels linearly spaced in secondary model space, so that distance
 * between major ticks/labels in the space is equal to "majorStep" (or "minorStep" for
 * minor ticks/labels correspondingly). Note, that linear spacing in secondary space
 * does not mean linear spacing in primary space.
 */
export declare class SecondaryTickGenerator extends NumericTickGenerator {
    /**
     * @param [options] growing array of values in primary model space the generator's axis parent model space)
     * @param [secondaryValues] an array of values in a secondary space
     * @param [majorStep] tick step for major ticks (in secondary space)
     * @param [minorStep] tick step for minor ticks (in secondary space)
     */
    constructor(options?: SecondaryTickGenerator.Options);
    constructor(options: number[], secondaryValues: number[], majorStep: number, minorStep: number);
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: SecondaryTickGenerator.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): SecondaryTickGenerator.OptionsOut;
    /**
     * Returns max labels for each type of grades
     * @param tickInfo info about the tick
     * @param orient orientation
     * @param fromValue generate labels from
     * @param toValue generate labels to
     * @returns array of `{'type':tickGrade, 'value':maxValue}`
     */
    protected getMaxLabels(tickInfo: TickInfo, orient: Orientation | string, fromValue: number, toValue: number): {
        type: string;
        value: number;
    }[];
    clone(): SecondaryTickGenerator;
    protected copyConstructor(src: SecondaryTickGenerator, deepCopy?: boolean): this;
    /**
     * Sets labels decimation state
     * @param labelsDecimation labels decimation state
     * @returns this
     */
    setLabelsDecimation(labelsDecimation: boolean): this;
    /**
     * Gets labels decimation state
     * @returns labelsDecimation labels decimation state
     */
    getLabelsDecimation(): boolean;
    /**
     * Gets primary-to-secondary values mapping.
     */
    getMapping(): SecondaryTickGenerator.Mapping;
    /**
     * Gets primary-to-secondary values mapping.
     * @param primaryValues growing array of values in primary model space (the generator's axis parent model space)
     * @param secondaryValues an array of values in a secondary space
     * @returns this
     */
    setMapping(primaryValues: number[], secondaryValues: number[]): this;
    /**
     * Sets tick step (in secondary space)
     *
     * @param tickGrade tick grade
     * @param tickStep amount each tick should step
     * @returns this
     */
    setTickStep(tickGrade: string, tickStep: number): this;
    /**
     * Gets tick step (in secondary space)
     *
     * @param tickGrade tick grade
     * @returns tick step
     */
    getTickStep(tickGrade: string): number | undefined;
    /**
     * Sets tick size (length)
     *
     * @param tickGrade tick grade
     * @param tickSize tick size to set
     * @returns this
     */
    setTickSize(tickGrade: string, tickSize: number): this;
    /**
     * Gets tick size (length)
     *
     * @param tickGrade tick grade
     * @returns tickSize tick size
     */
    getTickSize(tickGrade: string): number | null;
    /**
     * Returns supported tick grades: ["major", "minor", "majorreversed" and "minorreversed"]
     * @returns supported tick grades: ["major", "minor", "majorreversed" and "minorreversed"]
     */
    getGrades(): string[];
    /**
     * Resets labels. This method is called to start iterating through labels.
     *
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo an info about labels
     * @returns labels count for the current tick type
     */
    resetLabels(parent: IModel, orient: Orientation | string, tickInfo: TickInfo): number;
    /**
     * Formats label text positioned at "labelPos" in primary model space.
     * IMPORTANT: Textual content of the label is formatted out of its position
     * in secondary space.
     *
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo an info about tick
     * @param tickIndex tick index from 0 to count-1, which resetTicks returns
     * @param labelPos model value (in primary space) - ignored by the implementation
     * @returns label text
     */
    formatLabel(parent: IModel, orient: Orientation | string, tickInfo: TickInfo, tickIndex: number, labelPos: number): string;
}
export declare namespace SecondaryTickGenerator {
    /**
     * growing array of values in primary model space the generator's axis parent model space)
     */
    type Options = NumericTickGenerator.Options & {
        /**
         * label decimation
         */
        labeldecimation?: boolean;
        /**
         * primary values
         */
        primaryvalues?: number[];
        /**
         * secondary values
         */
        secondaryvalues?: number[];
        /**
         * tick step for major ticks (in secondary space)
         */
        majorstep?: number;
        /**
         * tick step for minor ticks (in secondary space)
         */
        minorstep?: number;
        /**
         * secondary major tick options
         */
        majorreversed?: TickGenerator.TickOptions;
        /**
         * secondary minor tick options
         */
        minorreversed?: TickGenerator.TickOptions;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = NumericTickGenerator.OptionsOut & {
        /**
         * label decimation
         */
        labeldecimation: boolean;
        /**
         * primary values
         */
        primaryvalues: number[];
        /**
         * secondary values
         */
        secondaryvalues: number[];
        /**
         * majorstep
         */
        majorstep: number;
        /**
         * minorstep
         */
        minorstep: number;
        /**
         * secondary major tick options
         */
        majorreversed: TickGenerator.TickOptions;
        /**
         * secondary minor tick options
         */
        minorreversed: TickGenerator.TickOptions;
    };
    type Mapping = {
        /**
         * growing array of values in primary model space (the generator's axis parent model space)
         */
        primaryvalues: number[];
        /**
         * an array of values in a secondary space
         */
        secondaryvalues: number[];
    };
}
