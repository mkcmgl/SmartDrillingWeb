import { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { TickPositions } from '@int/geotoolkit/gauges/axis/TickPositions';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { Merge } from '@int/geotoolkit/base';
import { Range } from '@int/geotoolkit/util/Range';
import { Functions as EasingFunctions } from '@int/geotoolkit/animation/Easing';
import { Regions } from '@int/geotoolkit/gauges/layout/Regions';
import { ValueDisplayStrategies } from '@int/geotoolkit/gauges/ValueDisplayStrategies';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { Region } from '@int/geotoolkit/gauges/axis/Region';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import { Text } from '@int/geotoolkit/scene/shapes/Text';
import { Events as GaugeEvents } from '@int/geotoolkit/gauges/axis/Events';
import { FunctionRegistry } from '@int/geotoolkit/gauges/registry/FunctionRegistry';
import { Alarm } from '@int/geotoolkit/gauges/Alarm';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { Format } from '@int/geotoolkit/util/Format';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
/**
 * A set of events fired by axis
 * @enum
 * @events
 * @readonly
 */
export declare enum Events {
    /**
     * Name of the axis has been changed
     * @event module:geotoolkit/gauges/axis/Axis~Events~NameChanged
     * @param {object} changes
     * @param {string} changes.old old name
     * @param {string} changes.new new name
     */
    NameChanged = "nameChanged"
}
/**
 * Implements an axis which uses Tick Generators to calculate number of ticks and their positions.
 * This axis calculates the ticks dynamically to not allow any intersections among labels and ticks.
 * The axis allows to render ticks and labels in three positions:
 * inside: tick growing from the inner bound of the axis towards the center
 * outside: tick growing from outer bound of axis towards the center
 */
export declare class Axis extends AbstractNode implements INodeEnumerable<Region | Alarm> {
    constructor(options?: Axis.Options);
    on<E extends keyof Axis.EventMap>(type: E, callback: (eventType: E, sender: this, args: Axis.EventMap[E]) => void): this;
    off<E extends keyof Axis.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Axis.EventMap[E]) => void): this;
    notify<E extends keyof Axis.EventMap>(type: E, source: Axis, args?: Axis.EventMap[E]): this;
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     * Disposes value and name shapes as well
     */
    dispose(): void;
    render(context: RenderingContext): void;
    /**
     * Changes the name of the axis
     * @param name The new axis name
     * @returns this
     */
    setName(name: string): this;
    /**
     * Sets bounds of the axis
     * @param bounds bounds of axis
     */
    protected setBounds(bounds: Rect): this;
    /**
     * Adds a  region or an array of regions to the axis. Regions are defined by color and range
     * in bounds of the range displayed by the gauge.
     * @param regions Array of regions, a region, or region properties
     */
    addRegion(regions: Region[] | Region.Options[] | Region | Region.Options): this;
    /**
     * Removes all registered regions from the axis
     */
    cleanRegions(): this;
    /**
     * Sets properties pertaining to axis.
     * @param props properties
     */
    setProperties(props?: Axis.Options): this;
    /**
     * Returns the tick generator currently set on the axis
     */
    getTickGenerator(): TickGenerator;
    /**
     * Sets tick generator on the axis
     * @param tg New tick generator
     */
    setTickGenerator(tg: TickGenerator): this;
    /**
     * Returns properties pertaining to axis.
     * @returns properties
     */
    getProperties(): Axis.OptionsOut;
    /**
     * Sets the current value in the range of this axis. If value does not fall into
     * range represented by this axis, it will be set to min or max depending if it's smaller or bigger
     * than the range
     * @param val New value to set
     * @param [skipAnimation] If true, no animation will be displayed
     */
    setValue(val: number, skipAnimation?: boolean): this;
    /**
     * Returns the value of the axis
     * @param [ignoreNaN] if true, pass last real value
     */
    getValue(ignoreNaN?: boolean): number;
    /**
     * Returns the range of this axis
     */
    getRange(): Range;
    /**
     * Sets a new data range displayed by this axis
     * @param range New range to set
     */
    setRange(range: Axis.RangeIn): this;
    /**
     * Sets the properties pertaining to the ticks of provided grade
     * @param grade Grade of the tick to apply properties to
     * @param props properties
     */
    setTickProperties(grade: string, props: Axis.TickOptions): this;
    /**
     * Returns properties of the tick with provided grade
     * @param grade tick grade ('edge', 'major', 'minor')
     */
    getTickProperties(grade: string): Axis.TickOptionsOut;
    /**
     * Sets properties pertaining to labels for ticks of provided grade
     * @param grade Grade of the ticks that properties should be applied to
     * @param props properties
     */
    setLabelProperties(grade: string, props: Axis.LabelOptions): this;
    /**
     * Returns properties pertaining to labels of requested grade
     * @param grade tick grade ('edge', 'major', 'minor')
     * @returns properties
     */
    getLabelProperties(grade: string): Axis.LabelOptionsOut;
    /**
     * Returns an object with properties pertaining to the value shape
     * @returns properties
     */
    getValueProperties(): Axis.ValueOptionsOut;
    /**
     * Sets properties pertaining to value shape of the gauge
     * @param props properties
     */
    setValueProperties(props: Axis.ValueOptions): this;
    /**
     * Returns properties pertaining to name text
     * @returns properties
     */
    getNameProperties(): Axis.NameOptionsOut;
    /**
     * Sets properties pertaining to name shape of the gauge
     * @param props properties
     */
    setNameProperties(props: Axis.NameOptions): this;
    /**
     * Sets the name of animation function corresponding to this axis
     * @param name New function name
     */
    setAnimation(name: string): this;
    /**
     * Returns the name of animation function associated with this axis
     */
    getAnimation(): null | string;
    /**
     * Sets function registry which will provide handlers for gauges animation and alarms
     * @param registry New registry to set
     */
    setFunctionRegistry(registry: FunctionRegistry): this;
    /**
     * Returns function registry which provides handlers for gauges animation and alarms
     * @returns registry New registry to set
     */
    getFunctionRegistry(): FunctionRegistry;
    /**
     * Adds an alarm to the axis. Alarm handler will be called every time
     * value set on the axis falls within alarm's range
     * @param alarm An alarm to add,
     * an array of such alarms, or object (array of objects) to be passed into the alarm
     * @returns this
     */
    addAlarm(alarm: Alarm.Options | Alarm | Alarm.Options[] | Alarm[]): this;
    /**
     * Gets the alarm referenced by provided name or index. If alarm name is not set or no such
     * index exists, null will be returned.
     * @param name Name of alarm or its index in iterator
     */
    getAlarm(name: string | number): Alarm | null;
    /**
     * Removes an alarm by its name, index, or instance of alarm
     * @param name Name of alarm or its index in iterator
     * @returns this
     */
    removeAlarm(name: string | number | Alarm): this;
    /**
     * Removes all registered alarms
     */
    cleanAlarms(): this;
    /**
     * Gets an iterator over existing alarms in the gauge
     * @param [filter] a filter function. Returns all axes if null
     */
    getAlarms(filter?: (item: Alarm) => boolean): Iterator;
    /**
     * Returns time in which an animation should be finished in seconds
     */
    getAnimationTime(): number;
    /**
     * Sets time in which an animation should be finished in seconds
     * @param time Time in seconds to perform the animation
     * @returns this
     */
    setAnimationTime(time: number): this;
    /**
     * Recalculates the parameters of the axis and rerenders
     * @returns this
     */
    redraw(): this;
    enumerateNodes(callback: INodeEnumerable.Callback<Region | Alarm>, target?: QueryBuilder): void;
}
export declare namespace Axis {
    /**
     * properties
     */
    type Options = AbstractNode.Options & {
        /**
         * Line style for main region
         */
        linestyle?: LineStyle.Type;
        /**
         * Function registry which will be used
         * as a source of handler functions (ex: animation easing functions)
         */
        functionregistry?: FunctionRegistry;
        /**
         * Animation time
         */
        animationtime?: number;
        /**
         * alarm to add, an array of such alarms, or object (array of objects) to be passed into the alarm
         */
        alarms?: Alarm.Options | Alarm | Alarm.Options[] | Alarm[];
        /**
         * range see {@link import("geotoolkit/gauges/axis/Axis").Axis.setRange}
         */
        range?: RangeIn;
        /**
         * units to append to the end
         */
        units?: string;
        /**
         * The tick generator for the axis
         */
        tickgenerator?: TickGenerator;
        /**
         * name of animation function
         */
        animationfunction?: EasingFunctions | string;
        /**
         * properties for ticks
         */
        ticks?: {
            /**
             * Major tick properties
             */
            major?: TickOptions;
            /**
             * Minor tick properties
             */
            minor?: TickOptions;
            /**
             * Edge tick properties
             */
            edge?: TickOptions;
        };
        /**
         * An array with regions that should be displayed by the gauge.
         * Regions will be added on top of existing regions.
         */
        regions?: Region[];
        /**
         * Value of the axis
         */
        value?: number;
        /**
         * JSON with styling of the value text
         */
        valuestyle?: ValueOptions;
        /**
         * Json with styling of the name text
         */
        namestyle?: NameOptions;
    };
    /**
     * properties
     */
    type OptionsOut = AbstractNode.OptionsOut & {
        /**
         * An array of alarms
         */
        alarms: Alarm[];
        /**
         * Range
         */
        range: Range;
        /**
         * Units
         */
        units: string;
        /**
         * The tick generator for the axis
         */
        tickgenerator: TickGenerator;
        /**
         * The animation function
         */
        animationfunction: EasingFunctions | string;
        /**
         * properties for ticks
         */
        ticks: {
            /**
             * Major tick properties
             */
            major: TickOptionsOut;
            /**
             * Minor tick properties
             */
            minor?: TickOptionsOut;
            /**
             * Edge tick properties
             */
            edge?: TickOptionsOut;
        };
        /**
         * An array with regions that should be displayed by the gauge.
         * Regions will be added on top of existing regions.
         */
        regions: Region[];
        /**
         * Value of the axis
         */
        value: number;
        /**
         * JSON with value text properties
         */
        valuestyle: ValueOptionsOut;
        /**
         * JSON with name text properties
         */
        namestyle: NameOptionsOut;
    };
    /**
     * New range to set
     */
    type RangeIn = Range | {
        /**
         * lower limit
         */
        min?: number;
        /**
         * upper limit
         */
        max?: number;
    };
    /**
     * properties
     */
    type TickOptions = Merge<Partial<TickOptionsOut>, {
        /**
         * JSON with label properties
         */
        labels?: LabelOptions;
        /**
         * Line style for the tick symbol
         */
        linestyle?: LineStyle.Type;
        /**
         * Fill style for the tick symbol
         */
        fillstyle?: FillStyle.Type;
        /**
         * Painter which will be used to render the tick
         */
        painter?: SymbolShape.Painter;
    }>;
    type TickOptionsOut = {
        /**
         * JSON with label properties
         */
        labels: LabelOptionsOut;
        /**
         * Line style for the tick symbol
         */
        linestyle: LineStyle;
        /**
         * Fill style for the tick symbol
         */
        fillstyle: FillStyle;
        /**
         * Painter which will be used to render the tick
         */
        painter: SymbolShape.PainterFunction;
        /**
         * Visibility flag for the ticks
         */
        visible: boolean;
        /**
         * Width of individual tick symbol
         */
        width: number | string;
        /**
         * Height of individual tick symbol
         */
        height: number | string;
        /**
         * Position of ticks relative to the axis
         */
        tickposition: TickPositions;
    };
    /**
     * properties
     */
    type LabelOptions = Merge<Partial<LabelOptionsOut>, {
        /**
         * Color of the label text
         */
        color?: string | RgbaColor;
        /**
         * Font for the label text
         */
        font?: string;
    }>;
    /**
     * properties
     */
    type LabelOptionsOut = {
        /**
         * Text style for the labels
         */
        textstyle?: TextStyle;
        /**
         * Position of the labels relative to the axis
         */
        position: TickPositions;
        /**
         * Formatter which will be applied to the value before rendering
         */
        formatter: Format;
        /**
         * Format of label value
         */
        format: string;
        /**
         * Visibility flag of the labels
         */
        visible: boolean;
        /**
         * Gap between the label and the tick or axis
         */
        gap: number | string;
    };
    /**
     * properties
     */
    type ValueOptions = Merge<Partial<ValueOptionsOut>, {
        /**
         * see {@link import("geotoolkit/scene/shapes/Text").Text.setProperties}
         */
        properties?: Text.Options;
        /**
         * Style of the text showing axis value
         */
        textstyle?: TextStyle.Type;
        /**
         * Color of the value text
         */
        color?: string | RgbaColor;
        /**
         * Font for the value text
         */
        font?: string;
        /**
         * Format of value to set on number formatter
         */
        format?: string;
        /**
         * if true value will be trimmed by range
         */
        trim?: boolean;
    }>;
    /**
     * properties
     */
    type ValueOptionsOut = {
        /**
         * see {@link import("geotoolkit/scene/shapes/Text").Text.getProperties}
         */
        properties: Text.OptionsOut;
        /**
         * Style of the text showing axis value
         */
        textstyle: TextStyle;
        /**
         * Visibility of the value
         */
        visible: boolean;
        /**
         * Region where the value will be rendered
         */
        position: Regions | string;
        /**
         * Strategy by which the value will fit the region
         */
        displaystrategy: ValueDisplayStrategies;
        /**
         * Formatter which will be applied to the value before rendering
         */
        formatter: Format;
        /**
         * Position of the value in the region
         */
        alignment: AnchorType;
    };
    /**
     * properties
     */
    type NameOptions = Merge<Partial<NameOptionsOut>, {
        /**
         * Style of the text showing axis name, overrides font and color
         */
        textstyle?: TextStyle.Type;
        /**
         * see {@link import("geotoolkit/scene/shapes/Text").Text.setProperties}
         */
        properties?: Text.Options;
        /**
         * Font of the name text
         */
        font?: string;
        /**
         * Font of the name text
         */
        color?: string | RgbaColor;
    }>;
    /**
     * properties
     */
    type NameOptionsOut = {
        /**
         * see {@link import("geotoolkit/scene/shapes/Text").Text.getProperties}
         */
        properties: Text.OptionsOut;
        /**
         * Style of the text showing axis name, overrides font and color
         */
        textstyle?: TextStyle;
        /**
         * Visibility of the name
         */
        visible: boolean;
        /**
         * Region where the name will be rendered
         */
        position: Regions | string;
        /**
         * Strategy by which the name will fit the region
         */
        displaystrategy: ValueDisplayStrategies;
        /**
         * Formatter which will be applied to the name before rendering
         */
        formatter: Format;
        /**
         * Position of the name in the region
         */
        alignment: AnchorType;
    };
    type EventMap = AbstractNode.EventMap & {
        [Events.NameChanged]: {
            old: string;
            new: string;
        };
        [GaugeEvents.StateUpdated]: void;
    };
}
