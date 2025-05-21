import { AbstractGauge, Events } from '@int/geotoolkit/gauges/AbstractGauge';
import { Regions } from '@int/geotoolkit/gauges/layout/Regions';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { ValueDisplayStrategies } from '@int/geotoolkit/gauges/ValueDisplayStrategies';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { Text } from '@int/geotoolkit/scene/shapes/Text';
import { Alarm } from '@int/geotoolkit/gauges/Alarm';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { Functions } from '@int/geotoolkit/animation/Easing';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { Format } from '@int/geotoolkit/util/Format';
/**
 * A gauge which only displays value, name, and any custom components added.
 */
export declare class NumericGauge extends AbstractGauge {
    constructor(options?: NumericGauge.Options);
    on<E extends keyof NumericGauge.EventMap>(type: E, callback: (eventType: E, sender: this, args: NumericGauge.EventMap[E]) => void): this;
    off<E extends keyof NumericGauge.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: NumericGauge.EventMap[E]) => void): this;
    notify<E extends keyof NumericGauge.EventMap>(type: E, source: NumericGauge, args?: NumericGauge.EventMap[E]): this;
    /**
     * Copy constructor function
     * Used to clone gauge
     * @param gauge gauge for cloning
     */
    protected copyConstructor(gauge: NumericGauge): this;
    /**
     * Adds an alarm to the axis. Alarm handler will be called every time
     * value set on the axis falls within alarm's range
     * @param alarm An alarm to add
     */
    addAlarm(alarm: Alarm | Alarm[]): this;
    /**
     * Gets the alarm referenced by provided name or index. If alarm name is not set or no such
     * index exists, null will be returned.
     * @param name Name of alarm or its index in iterator
     */
    getAlarm(name: string | number): Alarm | null;
    /**
     * Removes an alarm by its name, index, or instance of alarm. The alarm will never be called again and reference to
     * it will be removed. Does nothing if no such alarm has been added before
     * @param name Name of alarm or its index in iterator
     * @returns this
     */
    removeAlarm(name: string | number | Alarm): this;
    /**
     * Removes all attached alarms
     * @returns this
     */
    cleanAlarms(): this;
    /**
     * Gets an iterator over existing alarms in the gauge
     * @param [filter] a filter function. Returns all axes if not provided
     */
    getAlarms(filter?: (item: Alarm) => boolean): Iterator<Alarm>;
    /**
     * Sets properties pertaining to text representing gauge value
     * @param props Object with properties
     */
    setValueProperties(props: NumericGauge.ValueOptions): this;
    /**
     * Returns background styles
     */
    getBackgroundStyle(): NumericGauge.BackgroundStyleOptionsOut;
    /**
     * Sets background styles
     * @param props object containing background styles
     */
    setBackgroundStyle(props: NumericGauge.BackgroundStyleOptions): this;
    /**
     * Gets properties of value text
     * @returns Format of value to set on number formatter
     */
    getValueProperties(): NumericGauge.ValueOptionsOut;
    /**
     * Sets properties pertaining to text representing gauge name
     * @param props Object with properties
     */
    setNameProperties(props: NumericGauge.NameOptions): this;
    /**
     * Gets properties of value text
     */
    getNameProperties(): NumericGauge.NameOptionsOut;
    /**
     * Sets the name of animation function in function registry corresponding to this axis
     * @param name Name of the function. This function has to be registered in the registry, otherwise no
     * animation will be applied.
     */
    setAnimation(name: Functions | string): this;
    /**
     * Returns the name of animation function associated with this gauge
     */
    getAnimation(): null | Functions | string;
    /**
     * Sets the value of the gauge.
     * @param val New value to set
     * @param [skipAnimation] If true, value change will not be animated
     */
    setValue(val: number, skipAnimation?: boolean): this;
    /**
     * Returns the current value of the axis
     */
    getValue(): number;
    /**
     * Returns time in which a full animation cycle is finished (in seconds)
     */
    getAnimationTime(): number;
    /**
     * Sets time required to accomplish a full animation run in between two values (in seconds)
     * @param time Time in seconds to perform the animation
     * @returns this
     */
    setAnimationTime(time: number): this;
    /**
     * Sets the name of the gauge
     * @param name The new gauge name
     */
    setName(name: string): this;
    /**
     * Sets properties pertaining to this gauge.
     * @param props properties
     */
    setProperties(props?: NumericGauge.Options): this;
    /**
     * Returns an object with all the properties pertaining to this gauge.
     * @returns properties
     */
    getProperties(): NumericGauge.OptionsOut;
}
export declare namespace NumericGauge {
    /**
     * properties
     */
    type Options = AbstractGauge.Options & {
        /**
         * Name of an easing function in function registry which will define the animation behavior
         */
        animationfunction?: Functions | string;
        animationtime?: number;
        /**
         * Value of the gauge to set at initiation
         */
        value?: number;
        /**
         * A list of alarms to set on the gauge.
         */
        alarms?: Alarm[];
        /**
         * Units in which data is represented in this gauge
         */
        units?: string;
        /**
         * properties for rectangular background of the gauge
         */
        background?: BackgroundStyleOptions;
        /**
         * properties of the test displaying name of the gauge
         */
        namestyle?: NameOptions;
        /**
         * properties of the test displaying name of the gauge
         */
        valuestyle?: ValueOptions;
    };
    /**
     * Object with properties
     */
    type ValueOptions = {
        /**
         * see {@link import("geotoolkit/scene/shapes/Text").Text.setProperties}
         */
        properties?: Text.Options;
        /**
         * Region in which to render the name text
         */
        position?: Regions | string;
        /**
         * Color of name text
         */
        color?: string | RgbaColor;
        /**
         * Font of value text
         */
        font?: string;
        /**
         * Text style of the value text. If provided, overrides
         * font and color
         */
        textstyle?: TextStyle.Type;
        /**
         * A display strategy to define how the
         * value text fits the region it is rendered in
         */
        displaystrategy?: ValueDisplayStrategies;
        /**
         * Defines where in the region the value text will be positioned
         */
        alignment?: AnchorType;
        /**
         * Visibility of the value text
         */
        visible?: boolean;
        /**
         * Formatter which will be used to format the value
         * before displaying it.
         */
        formatter?: Format;
        /**
         * Format of value to set on number formatter
         */
        format?: string;
    };
    /**
     * object containing background styles
     */
    type BackgroundStyleOptionsOut = {
        /**
         * background linestyle
         */
        linestyle: LineStyle;
        /**
         * background fillstyle
         */
        fillstyle: FillStyle;
        /**
         * background visibility
         */
        visible: boolean;
    };
    /**
     * object containing background styles
     */
    type BackgroundStyleOptions = {
        /**
         * background linestyle
         */
        linestyle?: LineStyle.Type;
        /**
         * background fillstyle
         */
        fillstyle?: FillStyle.Type;
        /**
         * background visibility
         */
        visible?: boolean;
    };
    /**
     * Format of value to set on number formatter
     */
    type ValueOptionsOut = {
        /**
         * see {@link import("geotoolkit/scene/shapes/Text").Text.getProperties}
         */
        properties?: Text.OptionsOut;
        /**
         * Region in which to render the name text
         */
        position: Regions;
        /**
         * Text style of the value text
         */
        textstyle: TextStyle;
        /**
         * A display strategy which defines how the
         * value text fits the region it is rendered in
         */
        displaystrategy: ValueDisplayStrategies;
        /**
         * Defines where in the region the value text will be positioned
         */
        alignment: AnchorType;
        /**
         * Visibility of the value text
         */
        visible: boolean;
        /**
         * Formatter which will be used to format the value
         * before displaying it.
         */
        formatter: Format;
        /**
         * Format of value to set on number formatter
         */
        format: string;
    };
    /**
     * Object with properties
     */
    type NameOptions = {
        /**
         * see {@link import("geotoolkit/scene/shapes/Text").Text.setProperties}
         */
        properties?: Text.Options;
        /**
         * Region in which to render the name text
         */
        position?: Regions | string;
        /**
         * Color of name text
         */
        color?: string | RgbaColor;
        /**
         * Font of name text
         */
        font?: string;
        /**
         * Text style of the name text. If provided, overrides
         * font and color
         */
        textstyle?: TextStyle.Type;
        /**
         * A display strategy to define how the
         * name text fits the region it is rendered in
         */
        displaystrategy?: ValueDisplayStrategies;
        /**
         * Defines where in the region the name text will be positioned
         */
        alignment?: AnchorType;
        /**
         * Visibility of the name text
         */
        visible?: boolean;
    };
    type NameOptionsOut = {
        /**
         * see {@link import("geotoolkit/scene/shapes/Text").Text.getProperties}
         */
        properties?: Text.OptionsOut;
        /**
         * Region in which to render the name text
         */
        position: Regions;
        /**
         * Text style of the value text
         */
        textstyle: TextStyle;
        /**
         * A display strategy which defines how the
         * value text fits the region it is rendered in
         */
        displaystrategy: ValueDisplayStrategies;
        /**
         * Defines where in the region the value text will be positioned
         */
        alignment: AnchorType;
        /**
         * Visibility of the value text
         */
        visible: boolean;
    };
    /**
     * properties
     */
    type OptionsOut = AbstractGauge.OptionsOut & {
        /**
         * Name of an easing function in function registry which will define the animation behavior
         */
        animationfunction?: Functions | string;
        animationtime?: number;
        /**
         * Value of the gauge to set at initiation
         */
        value?: number;
        /**
         * A list of alarms to set on the gauge.
         */
        alarms?: Alarm[];
        /**
         * Units in which data is represented in this gauge
         */
        units?: string;
        /**
         * properties for rectangular background of the gauge
         */
        background?: {
            /**
             * Fill style of the background rectangle
             */
            fillstyle?: FillStyle;
            /**
             * Line style of the background rectangle
             */
            linestyle?: LineStyle;
            /**
             * Visibility of the background rectangle
             */
            visible?: boolean;
        };
        /**
         * properties of the test displaying name of the gauge
         */
        namestyle?: {
            /**
             * Region in which to render the name text
             */
            position?: Regions;
            /**
             * Color of name text
             */
            color?: string | RgbaColor;
            /**
             * Font of name text
             */
            font?: string;
            /**
             * Text style of the name text. If provided, overrides
             * font and color
             */
            textstyle?: TextStyle;
            /**
             * A display strategy to define how the
             * name text fits the region it is rendered in
             */
            displaystrategy?: ValueDisplayStrategies;
            /**
             * Defines where in the region the name text will be positioned
             */
            alignment?: AnchorType;
            /**
             * Visibility of the name text
             */
            visible?: boolean;
        };
        /**
         * properties of the test displaying name of the gauge
         */
        valuestyle?: {
            /**
             * Region in which to render the name text
             */
            position?: Regions;
            /**
             * Color of name text
             */
            color?: string | RgbaColor;
            /**
             * Font of value text
             */
            font?: string;
            /**
             * Text style of the value text. If provided, overrides
             * font and color
             */
            textstyle?: TextStyle;
            /**
             * A display strategy to define how the
             * value text fits the region it is rendered in
             */
            displaystrategy?: ValueDisplayStrategies;
            /**
             * Defines where in the region the value text will be positioned
             */
            alignment?: AnchorType;
            /**
             * Visibility of the value text
             */
            visible?: boolean;
            /**
             * Formatter which will be used to format the value
             * before displaying it.
             */
            formatter?: Format;
            /**
             * Format of value to set on number formatter
             */
            format?: string;
        };
    };
    type EventMap = Group.EventMap & {
        [Events.ValueUpdated]: {
            old: number;
            new: number;
        };
    };
}
