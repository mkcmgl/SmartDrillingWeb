import { LogDataStyle } from '@int/geotoolkit/welllog/attributes/LogDataStyle';
import { DiscreteGradientColorProvider } from '@int/geotoolkit/util/DiscreteGradientColorProvider';
import { Range } from '@int/geotoolkit/util/Range';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { Pattern } from '@int/geotoolkit/attributes/Pattern';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { HsvColor } from '@int/geotoolkit/util/HsvColor';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Defines log gradient fill style. This fillstyle can have a color and a pattern plus data source that can be used to gradient colors.
 * If you need to set the gradient color based on the " Normalization Limits " please refer to setColorRange() method.
 */
export declare class LogGradientStyle extends LogDataStyle {
    /**
     * Create LogGradientStyle
     * @param [color] Rgba Color or properties object
     * @param [pattern] fill pattern
     * @param [foregroundcolor] Rgba Color
     */
    constructor(options: LogGradientStyle.Options, pattern?: Pattern, foregroundcolor?: string | RgbaColor);
    constructor(color?: RgbaColor | HsvColor | FillStyle | string, pattern?: Pattern, foregroundcolor?: string | RgbaColor);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: LogGradientStyle): this;
    /**
     * set color range (min and max value). If you need to set the gradient color based on the " Normalization Limits "  refer to the code in the example while changing normalization limits on the curve.
     * @param range color range (min and max value)
     * @returns this
     */
    setColorRange(range: Range): this;
    /**
     * returns color range (min and max value)
     */
    getColorRange(): Range;
    /**
     * Set transparency
     * @param transparency value for alpha chanel
     */
    setTransparency(transparency: number): this;
    /**
     * Returns transparency
     * @returns alpha chanel value
     */
    getTransparency(): number;
    /**
     * return color provider
     * @returns color provider the color provider
     */
    getColorProvider(): ColorProvider;
    /**
     * set color provider
     * @param colorProvider the color provider
     * @returns this
     */
    setColorProvider(colorProvider: ColorProvider): this;
    getValueColor(x: number, depth: number, y?: number, ratio?: number): RgbaColor | null;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): LogGradientStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogGradientStyle.Options): this;
}
export declare namespace LogGradientStyle {
    /**
     * Rgba Color or properties object
     */
    type Options = LogDataStyle.Options & {
        /**
         * color provider
         */
        colorprovider?: string | DiscreteGradientColorProvider;
        /**
         * value for alpha chanel
         */
        transparency?: number;
        /**
         * color range (min and max value)
         */
        colorrange?: Range;
    };
    type OptionsOut = LogDataStyle.OptionsOut & {
        /**
         * color provider
         */
        colorprovider?: ColorProvider;
        /**
         * value for alpha chanel
         */
        transparency?: number;
        /**
         * color range (min and max value)
         */
        colorrange?: Range;
    };
}
