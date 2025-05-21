/**
 * @module geotoolkit/util/ColorProvider
 */
import { Raster } from '@int/geotoolkit/attributes/Raster';
import type { ClassType } from '@int/geotoolkit/base';
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { IRasterable } from '@int/geotoolkit/attributes/IRasterable';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { Surface } from '@int/geotoolkit/renderer/Surface';
/**
 * Enum of known Named Colors
 * @enum
 * @readonly
 */
export declare enum KnownColors {
    /**
     * NaN
     */
    NaN = "NaN",
    /**
     * NegativeInfinity
     */
    NegativeInfinity = "NegativeInfinity",
    /**
     * PositiveInfinity
     */
    PositiveInfinity = "PositiveInfinity"
}
/**
 * Enum of known Scales
 * @enum
 * @readonly
 */
export declare enum KnownScales {
    /**
     * Autumn
     */
    Autumn = "autumn",
    /**
     * Blue to Red
     */
    BlueToRed = "bluetored",
    /**
     * Cool
     */
    Cool = "cool",
    /**
     * Copper
     */
    Copper = "copper",
    /**
     * Dark body
     */
    DarkBody = "darkbody",
    /**
     * Flag
     */
    Flag = "flag",
    /**
     * Gray
     */
    Gray = "gray",
    /**
     * Hot
     */
    Hot = "hot",
    /**
     * HSV
     */
    HSV = "hsv",
    /**
     * Orange
     */
    Orange = "orange",
    /**
     * Rainbow
     */
    Rainbow = "rainbow",
    /**
     * Spring
     */
    Spring = "spring",
    /**
     * Summer
     */
    Summer = "summer",
    /**
     * Winter
     */
    Winter = "winter",
    /**
     * Bone
     */
    Bone = "bone",
    /**
     * Binary
     */
    Binary = "binary",
    /**
     * Pink
     */
    Pink = "pink",
    /**
     * Parula
     */
    Parula = "parula"
}
/**
 * Style Events enumerator
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * Invalidate
     */
    Invalidate = "Invalidate"
}
/**
 * This abstract class is the parent class of all ColorProviders. A colorprovider converts a value to a color based on its configuration. It's generally created by associating some colors to specific values.<br>
 * Then it will interpolate (algorithm depends of the actual implementation) those colors on the fly to find the actual color corresponding to a value.<br>
 * This class also provides a list of built-in color maps {@link @int/geotoolkit/util/ColorProvider~KnownScales}.<br>
 * All the color providers inherit from this class, for examples please refer to:<br>
 * {@link @int/geotoolkit/util/DefaultColorProvider~DefaultColorProvider} ; <br>
 * {@link @int/geotoolkit/util/DiscreteGradientColorProvider~DiscreteGradientColorProvider} ; <br>
 * {@link @int/geotoolkit/util/LogColorProvider~LogColorProvider} ; <br>
 * {@link @int/geotoolkit/util/RangeColorProvider~RangeColorProvider} ; <br>
 */
export declare abstract class ColorProvider extends EventDispatcher implements IRasterable {
    protected constructor();
    on<E extends keyof ColorProvider.EventMap>(type: E, callback: (eventType: E, sender: this, args: ColorProvider.EventMap[E]) => void): this;
    off<E extends keyof ColorProvider.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ColorProvider.EventMap[E]) => void): this;
    notify<E extends keyof ColorProvider.EventMap>(type: E, source: ColorProvider, args?: ColorProvider.EventMap[E]): this;
    /**
     * Copy constructor
     * @param src Source to copy from
     * @returns this
     */
    protected copyConstructor(src: ColorProvider): this;
    getRaster(xMin?: number, yMin?: number, xMax?: number, yMax?: number): Raster;
    /**
     * Return ColorProvider constructor from the object class name or type.
     * @param [objectType] ColorProvider class name
     * @returns ColorProvider constructor
     */
    static getColorProviderType(objectType?: string): ClassType;
    /**
     * Returns known color value
     * @param colorName color name, if not specified then returns list of known colors
     * @returns color
     */
    getNamedColor(colorName: string | KnownColors): string | ColorProvider.NamedColorValue;
    /**
     * Returns known colors
     * @returns array of color pair
     */
    getNamedColors(): ColorProvider.NamedColor[];
    /**
     * Set color value
     * @param colorName color name
     * @param colorValue color or title/value settings object
     * @returns this
     * @example
     * import {KnownColors} from '@int/geotoolkit/util/ColorProvider';
     * colorProvider.setNamedColor(KnownColors.NaN, { // set color for NaN values
     *   'title': 'absent', // title to use when displaying, e.g. by ColorBar shape
     *   'enabled': true, // enable state (default is not false)
     *   'value': 'black' // color to use for NaNs
     * });
     * @example
     * // use 'red' color for values greater than maxValue (default '+∞' title is used)
     * colorProvider.setNamedColor(KnownColors.PositiveInfinity, 'red');
     */
    setNamedColor(colorName: string | KnownColors, colorValue: string | ColorProvider.NamedColorValue): this;
    /**
     * Return color for the current value
     * @param value value
     * @returns color
     */
    abstract getColor(value: number): RgbaColor | null;
    /**
     * Return list of used Stop Points
     */
    abstract getStopPoints(): {
        color: string;
        value: number;
    }[];
    /**
     * Return min
     * @returns Minimum of ColorProvider
     */
    abstract getMinValue(): number;
    /**
     * Return max
     * @returns Maximum of ColorProvider
     */
    abstract getMaxValue(): number;
    /**
     * invalidate the color provider and fire an event to the visuals
     */
    abstract invalidate(): void;
    /**
     * Enable / disable notification
     * @param enable enable or disable notifications
     * @param [force] true if parent should be invalidated immediately
     * @returns this
     */
    abstract setNotification(enable: boolean, force?: boolean): this;
    /**
     * Return state of notification
     */
    abstract isNotificationEnabled(): boolean;
    /**
     * set properties
     * @param properties properties
     * @returns this
     */
    setProperties(properties: ColorProvider.Options): this;
    /**
     * get properties
     * @returns properties
     */
    getProperties(): ColorProvider.OptionsOut;
    /**
     * returns surface that represents color map
     * @param width The image width
     * @param height The image height
     * @param isVertical True if image is oriented vertically
     * @param [surface] output surface
     * @returns surface The canvas surface
     */
    exportToImage(width: number, height: number, isVertical: boolean, surface?: Surface): Surface;
}
export declare namespace ColorProvider {
    type NamedColor = {
        name: string;
        value: string | NamedColorValue;
    };
    type NamedColorValue = {
        title: string;
        enabled: boolean;
        value: string;
    };
    type Options = {
        namedcolors?: NamedColor[];
        scale?: KnownScales;
        min?: number;
        max?: number;
    };
    type OptionsOut = Options;
    type EventMap = EventDispatcher.EventMap & {
        [Events.Invalidate]: void;
    };
}
