/**
 * @module geotoolkit/axis/NumericTickGenerator
 */
import { Locale } from '@int/geotoolkit/util/Locale';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { Orientation } from '@int/geotoolkit/util/Orientation';
import type { TickInfo } from '@int/geotoolkit/axis/TickInfo';
import type { Merge } from '@int/geotoolkit/base';
import type { Format } from '@int/geotoolkit/util/Format';
/**
 * Define an abstract class for numeric tick generators
 */
export declare class NumericTickGenerator extends TickGenerator {
    constructor(options?: NumericTickGenerator.Options);
    clone(): NumericTickGenerator;
    protected copyConstructor(src: NumericTickGenerator, deepCopy?: boolean): this;
    /**
     * Sets label format
     * @throws Error if labelformat is not supported
     * @param tickGrade grade to set format: "major", "minor", "edge"
     * @param format number format for label
     * @returns this
     * @example
     * // to set the precision of the tickGenerator labels use the following
     * import {NumberFormat} from '@int/geotoolkit/util/NumberFormat';
     * ...
     * axis.getTickGenerator().setLabelFormat('major', new NumberFormat({'maximumfractiondigits':2}));
     */
    setLabelFormat(tickGrade: string, format: Format | null): this;
    /**
     * Returns label format
     * @param tickGrade grade to get format: "major", "minor", "edge"
     * @returns label format
     */
    getLabelFormat(tickGrade: string): Format | null;
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
     * Format label
     * @param tickType "edge" or "major" or "minor"
     * @param modelValue model coordinate position
     */
    protected formatLabelInternal(tickType: string, modelValue: number): string;
    /**
     * Sets handler to return max label values
     * @param handler handler is called to specify max label
     * @example
     * // Return text
     * tickGenerator.setMaxLabelHandler((axis, tickInfo, orient, fromValue, toValue, array) => {
     *   return [{'type': 'major', 'value': 'Buffalo Gap'}];
     * });
     * @example
     * // Return number
     * tickGenerator.setMaxLabelHandler((axis, tickInfo, orient, fromValue, toValue, array) => {
     *   return [{'type': 'major', 'value': 1000}];
     * });
     * @returns this
     */
    setMaxLabelHandler(handler: NumericTickGenerator.MaxLabelEventHandler): this;
    /**
     * Gets handler to return max label position
     * @returns handler is called to specify max label
     */
    getMaxLabelHandler(): NumericTickGenerator.MaxLabelEventHandler | null;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): NumericTickGenerator.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @throws Error if labelformat is not supported
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: NumericTickGenerator.Options): this;
}
export declare namespace NumericTickGenerator {
    /**
     * An object containing the properties to set
     */
    type Options = Partial<Record<Grades, Merge<{
        labelvisible?: boolean;
        labelformat?: Format;
    }, TickGenerator.TickOptions>>> & TickGenerator.Options & {
        /**
         * label format, label format to be applied to all grades
         */
        labelformat?: Format;
        /**
         * maxlabeleventhandler
         */
        maxlabeleventhandler?: MaxLabelEventHandler;
    };
    type MaxLabelEventHandler = (tg: TickGenerator, tickInfo: TickInfo, orient: Orientation, fromValue: number, toValue: number, array?: {
        type: string;
        value: number;
    }[]) => {
        type: string;
        value: number;
    }[];
    /**
     * properties
     */
    type OptionsOut = Partial<Record<Grades, {
        labelformat: Format;
    }>> & TickGenerator.OptionsOut & {
        /**
         * label format, label format to be applied to all grades
         */
        labelformat?: Format;
        /**
         * maxlabeleventhandler
         */
        maxlabeleventhandler?: MaxLabelEventHandler;
    };
    type Grades = 'major' | 'minor' | 'edge' | 'intermediate';
}
