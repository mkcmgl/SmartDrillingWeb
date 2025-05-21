/**
 * @module geotoolkit/seismic/util/ColorMap
 */
import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import { Events } from '@int/geotoolkit/scene/Node';
import type { Status } from '@int/geotoolkit/seismic/data/Trace';
import type { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
/**
 * Define a colormap which represents a range of color values which can be mapped to samples based on density.<br>
 * It has reserved values for positive and negative fill color. The toolkit also has several default colormaps available, <br>
 * please refer to  {@link @int/geotoolkit/seismic/util/SeismicColors~SeismicColors} getDefault()
 */
export declare class ColorMap extends ColorProvider {
    constructor(options?: ColorMap.Options, name?: string);
    on<E extends keyof ColorMap.EventMap>(type: E, callback: (eventType: E, sender: this, args: ColorMap.EventMap[E]) => void): this;
    off<E extends keyof ColorMap.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ColorMap.EventMap[E]) => void): this;
    notify<E extends keyof ColorMap.EventMap>(type: E, source: ColorMap, args?: ColorMap.EventMap[E]): this;
    /**
     * Return color for the current value
     * @param value the specified color
     * @returns the RgbaColor.
     */
    getColor(value: number): RgbaColor | null;
    /**
     * Return list of used Stop Points
     */
    getStopPoints(): {
        color: string;
        value: number;
    }[];
    /**
     * Return min
     * @returns Minimum of ColorProvider
     */
    getMinValue(): number;
    /**
     * Return max
     * @returns Maximum of ColorProvider
     */
    getMaxValue(): number;
    /**
     * Set min and max value
     * @param min min value in the range of colors
     * @param max max value in the range of colors
     */
    setRange(min: number, max: number): this;
    /**
     * Copy constructor
     * @param src Source to copy from
     * @returns this
     */
    protected copyConstructor(src: ColorMap): this;
    /**
     * Return clone of the color map
     * @returns clone
     */
    clone(): ColorMap;
    /**
     * Reverse color map
     * @returns this
     */
    reverse(): this;
    /**
     * Set alpha value for all colors
     * @param alpha the alpha value of the color
     * @returns this
     */
    setAlpha(alpha: number): this;
    /**
     * Return name
     */
    getName(): string;
    /**
     * Set name
     * @param name the name of the colormap
     * @returns this
     */
    setName(name: string): this;
    /**
     * Return size
     */
    getSize(): number;
    /**
     * Set trace line style to be used instead of trace color
     * @param style object can be in format of constructor {@link @int/geotoolkit/attributes/LineStyle~LineStyle}
     * @returns this
     */
    setTraceLineStyle(style: LineStyle.Type): this;
    /**
     * Return trace line style to be used instead of trace color
     */
    getTraceLineStyle(): LineStyle;
    /**
     * Sets trace line style for given status
     * @param status trace status
     * @param linestyle line style
     * @returns this
     */
    setTraceStatusLineStyle(status: Status, linestyle: LineStyle): this;
    /**
     * Returns trace line style for given status or object with all statuses
     * @param [status] trace status
     */
    getTraceStatusLineStyle(status?: Status): LineStyle | Partial<Record<Status, LineStyle>>;
    /**
     * Set positive fill style to be used instead of positive color
     * @param style object can be in format of constructor {@link @int/geotoolkit/attributes/FillStyle~FillStyle}
     * @returns this
     */
    setPositiveFillStyle(style: FillStyle.Type | null): this;
    /**
     * Return positive fill style to be used instead of positive color
     */
    getPositiveFillStyle(): FillStyle;
    /**
     * Set negative fill style to be used instead of negative fill color
     * @param style object can be in format of constructor {@link @int/geotoolkit/attributes/FillStyle~FillStyle}
     * @returns this
     */
    setNegativeFillStyle(style: FillStyle.Type | null): this;
    /**
     * Return negative fill style to be used instead of negative fill style
     */
    getNegativeFillStyle(): FillStyle;
    /**
     * Return color array
     */
    getColors(): RgbaColor[];
    /**
     * Sets colors
     * @throws if color is null
     * @param colors array of colors
     * @returns this
     */
    setColors(colors: RgbaColor[]): this;
    /**
     * Invalidate Default ColorProvider and notify visuals for update
     */
    invalidate(): this;
    /**
     * Enable / disable notification
     * @param enable enable or disable notifications
     * @param [force] true if parent should be invalidated immediately
     * @returns this
     */
    setNotification(enable: boolean, force?: boolean): this;
    /**
     * Return state of notification
     */
    isNotificationEnabled(): boolean;
    /**
     * Returns properties
     * @returns Json object with properties
     */
    getProperties(): ColorMap.OptionsOut;
    /**
     * Sets properties
     * @param [properties] Json object with properties
     * @returns this
     */
    setProperties(properties?: ColorMap.Options): this;
}
export declare namespace ColorMap {
    /**
     * options object
     */
    type Options = ColorProvider.Options & {
        /**
         * color map name
         */
        name?: string;
        /**
         * positive fill style
         */
        positivefillstyle?: FillStyle.Type;
        /**
         * positive fill style
         */
        negativefillstyle?: FillStyle.Type;
        /**
         * an array of colors
         */
        colors?: RgbaColor[];
        /**
         * trace line style
         */
        tracelinestyle?: LineStyle.Type;
    };
    /**
     * Json object with properties
     */
    type OptionsOut = ColorProvider.OptionsOut & {
        /**
         * colormap name
         */
        name: string;
        /**
         * trace line style
         */
        tracelinestyle?: LineStyle;
        /**
         * positive fill style
         */
        positivefillstyle?: FillStyle;
        /**
         * positive fill style
         */
        negativefillstyle?: FillStyle;
        /**
         * an array of colors
         */
        colors: RgbaColor[];
        type: string;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.Invalidate]: void;
    };
}
