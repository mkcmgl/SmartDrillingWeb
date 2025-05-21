import { LogPointSet } from '@int/geotoolkit/welllog/LogPointSet';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
/**
 * Create the representation of a reference line.
 */
export declare class LogReferenceLine extends LogPointSet {
    /**
     * Constructor
     * @param [options] value in track coordinates. by default from 0 to 1 or properties object
     */
    constructor(options?: LogReferenceLine.Options | number);
    clone(): LogReferenceLine;
    /**
     * Return meaning data limits
     * @param fullLimits default value is false
     */
    getDataLimits(fullLimits: boolean | undefined): Rect | null;
    /**
     * Returns the current value
     */
    getValue(): number;
    /**
     * Sets the current value
     * @param value value in track coordinates. by default from 0 to 1.
     * @returns this
     */
    setValue(value: number): this;
    /**
     * Return the current level
     * @param level level of wrap interpolation
     * @returns this
     */
    setLevel(level: number): this;
    /**
     * Return model limits
     */
    getModelLimits(): Rect | null;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogReferenceLine.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: LogReferenceLine.Options): this;
}
export declare namespace LogReferenceLine {
    /**
     * value in track coordinates. by default from 0 to 1 or properties object
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * current value in track coordinates. by default from 0 to 1.
         */
        value?: number;
        /**
         * current level of wrap interpolation
         */
        level?: number;
    };
    /**
     * properties object
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * current value in track coordinates. by default from 0 to 1.
         */
        value: number;
        /**
         * current level of wrap interpolation
         */
        level: number;
    };
}
