import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { InterpolationType } from '@int/geotoolkit/data/DataStepInterpolation';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import type { HsvColor } from '@int/geotoolkit/util/HsvColor';
/**
 * Defines log fill style. This fillstyle can have data source that can be used to gradient colors.
 */
export declare abstract class LogDataStyle extends FillStyle {
    protected constructor(options: LogDataStyle.Options);
    protected constructor(color?: RgbaColor | HsvColor | FillStyle | string);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: LogDataStyle): this;
    /**
     * Gets color for specified depth and values
     * @param x x device coordinate
     * @param depth depth
     * @param [y] y device coordinate
     * @param [ratio] ratio x to total width
     * @returns rgba color
     */
    abstract getValueColor(x: number, depth: number, y?: number, ratio?: number): RgbaColor | null;
    /**
     * return log data
     * @returns log data
     */
    getLogData(): LogAbstractData;
    /**
     * set color provider
     * @param logData log data
     * @returns this
     */
    setLogData(logData: LogAbstractData): this;
    /**
     * Sets interpolation type
     *
     * @param interpolationType interpolation type
     * @throws {Error} If interpolationType is not correct
     */
    setInterpolationType(interpolationType: InterpolationType | string): this;
    /**
     * Returns interpolation type
     */
    getInterpolationType(): InterpolationType;
    /**
     * Return value at
     * @param depth depth to get value at
     * @param interpolationType interpolation type
     */
    getValueAt(depth: number, interpolationType: InterpolationType): number;
    /**
     * return log data id
     */
    getLogDataId(): string | null;
    /**
     * return render background state
     */
    getRenderBackground(): boolean;
    /**
     * set render background state
     * @param renderBackground extra style parameter for background fill
     */
    setRenderBackground(renderBackground: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): LogDataStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogDataStyle.Options): this;
}
export declare namespace LogDataStyle {
    /**
     * properties object
     */
    type Options = FillStyle.Options & {
        /**
         * extra style parameter for background fill
         */
        renderbackground?: boolean;
        /**
         * log data id
         */
        datasource?: string;
    };
    type OptionsOut = FillStyle.OptionsOut & {
        /**
         * extra style parameter for background fill
         */
        renderbackground?: boolean;
        /**
         * log data id
         */
        datasource?: string;
    };
}
