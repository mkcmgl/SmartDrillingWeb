/**
 * @module geotoolkit/widgets/timeseries/TimeSeriesObjectBase
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Axis } from '@int/geotoolkit/axis/Axis';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import type { Dimension } from '@int/geotoolkit/util/Dimension';
import type { NumericTickGenerator } from '@int/geotoolkit/axis/NumericTickGenerator';
import { Format } from '@int/geotoolkit/util/Format';
/**
 * Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * AxisPositionChanged
     */
    AxisPositionChanged = "AxisPositionChanged",
    /**
     * AxisUpdated
     */
    AxisUpdated = "AxisUpdated"
}
/**
 * Base class for TimeSeriesObject and TimeSeriesObjectGroup.
 * This class contains the set/get AxisOptions and ID
 */
export declare class TimeSeriesObjectBase extends EventDispatcher {
    constructor(options?: TimeSeriesObjectBase.Options);
    on<E extends keyof TimeSeriesObjectBase.EventMap>(type: E, callback: (eventType: E, sender: this, args: TimeSeriesObjectBase.EventMap[E]) => void): this;
    off<E extends keyof TimeSeriesObjectBase.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: TimeSeriesObjectBase.EventMap[E]) => void): this;
    notify<E extends keyof TimeSeriesObjectBase.EventMap>(type: E, source: TimeSeriesObjectBase, args?: TimeSeriesObjectBase.EventMap[E]): this;
    /**
     * Get object's ID
     */
    getId(): string;
    /**
     * Gets time series object name
     * @returns {string}
     */
    getName(): string;
    /**
     * Set time series object name
     * @protected
     * @param {string} name name of the object
     */
    protected setName(name: string): void;
    /**
     * get axis
     */
    getAxis(): Axis | null;
    /**
     * Get axis options
     * @returns JSON which defines curve axis
     */
    getAxisOptions(): TimeSeriesObjectBase.AxisOptionsOut;
    /**
     * Sets axis options. Refer to example below to make a curve's axis invisible. This can be useful to save space while displaying several curves that use the same vertical unit.<br>
     * User would have to determine which curves share the same units and limits and hide the redundant axis.
     * @param [options] JSON which defines curve axis
     */
    setAxisOptions(options?: TimeSeriesObjectBase.AxisOptions): this;
    /** */
    dispose(): void;
    /**
     * Update layout if it is necessary if object is changed
     */
    updateLayout(): void;
    /**
     * Returns all properties
     * @returns properties object
     */
    getProperties(): TimeSeriesObjectBase.OptionsOut;
    /**
     * Sets all properties
     * @param props properties object
     * @returns this
     */
    setProperties(props?: TimeSeriesObjectBase.Options): this;
}
export declare namespace TimeSeriesObjectBase {
    /**
     * JSON which defines object
     */
    type Options = {
        /**
         * Object's id/uri
         */
        id?: string;
        /**
         * Object/curve's name
         */
        name?: string;
        /**
         * JSON which defines axis object
         */
        curveaxis?: AxisOptions;
    };
    /**
     * JSON which defines curve axis
     */
    type AxisOptionsOut = {
        /**
         * visibility of curve axis
         */
        visible: boolean;
        /**
         * curve axis position 'left'/'right'
         */
        position: string;
        /**
         * synchronize axis color with curve color
         */
        autocoloraxis: boolean;
        /**
         * synchronize axis and label color with curve color
         */
        autocolorlabel: boolean;
        /**
         * curve axis label visibility
         */
        titlevisible: boolean;
        /**
         * axis visibility
         */
        axisvisible: boolean;
        /**
         * compact
         */
        compact: boolean;
        /**
         * automatic label rotation
         */
        autolabelrotation: boolean;
        /**
         * text color if autocolorlabel is false
         */
        textcolor: string;
        /**
         * axis color is autocoloraxis is false
         */
        axiscolor: string;
        /**
         * title text override
         */
        labeltext: string;
        /**
         * curve axis width
         */
        axiswidth: number;
        /**
         * curve text width
         */
        textwidth: number;
        /**
         * curve axis text font
         */
        font: string;
        /**
         * JSON which defines title
         */
        title: {
            /**
             * title anchor
             */
            anchor: AnchorType;
            /**
             * title offset
             */
            offset: Dimension;
        };
        /**
         * title rotate angle
         */
        titlerotateangle: number;
        /**
         * logarithmic scale
         */
        logarithmicscale: boolean;
        /**
         * tick generator
         */
        tickgenerator: NumericTickGenerator;
        /**
         * JSON which defines tick generator options. See {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getProperties} for details
         */
        tickgeneratoroptions: {
            /**
             * label formatter for tick generator
             */
            format: TickGenerator.LabelFormatHandler | Format;
        };
        /**
         * base line style. Color set to curve's color, width = 1 by default.
         */
        baselinestyle: LineStyle;
        /**
         * microposition limits
         */
        microposition: {
            /**
             * upper bound of microposition (range from 0 to 1)
             */
            top: number;
            /**
             * lower bound of microposition (range from 0 to 1)
             */
            bottom: number;
        };
        /**
         * rotation of the curveaxis labels; can be automatic, vertical, horizontal
         */
        labelorientation?: string | Orientation | number;
    };
    /**
     * JSON which defines curve axis
     */
    type AxisOptions = {
        /**
         * visibility of curve axis
         */
        visible?: boolean;
        /**
         * curve axis position 'left'/'right'
         */
        position?: string;
        /**
         * synchronize axis color with curve color
         */
        autocoloraxis?: boolean;
        /**
         * synchronize axis and label color with curve color
         */
        autocolorlabel?: boolean;
        /**
         * curve axis label visibility
         */
        titlevisible?: boolean;
        /**
         * axis visibility
         */
        axisvisible?: boolean;
        /**
         * compact
         */
        compact?: boolean;
        /**
         * automatic label rotation
         */
        autolabelrotation?: boolean;
        axisautolabelrotation?: boolean;
        /**
         * text color if autocolorlabel is false
         */
        textcolor?: string;
        /**
         * axis color is autocoloraxis is false
         */
        axiscolor?: string;
        /**
         * title text override
         */
        labeltext?: string;
        /**
         * curve axis width
         */
        axiswidth?: number;
        /**
         * curve text width
         */
        textwidth?: number;
        /**
         * curve axis text font
         */
        font?: string;
        /**
         * JSON which defines title
         */
        title?: {
            /**
             * title anchor
             */
            anchor?: AnchorType;
            /**
             * title offset
             */
            offset?: Dimension;
        };
        /**
         * title rotate angle
         */
        titlerotateangle?: number;
        /**
         * logarithmic scale
         */
        logarithmicscale?: boolean;
        /**
         * tick generator
         */
        tickgenerator?: NumericTickGenerator;
        /**
         * JSON which defines tick generator options. See {@link import("geotoolkit/axis/TickGenerator").TickGenerator.setProperties} for details
         */
        tickgeneratoroptions?: {
            /**
             * label formatter for tick generator
             */
            format?: TickGenerator.LabelFormatHandler | Format;
            /**
             * edge
             */
            edge?: {
                /**
                 * edge tick visibility
                 */
                tickvisible?: boolean;
                /**
                 * edge label visibility
                 */
                labelvisible?: boolean;
            };
            /**
             * major
             */
            major?: {
                /**
                 * major tick visibility
                 */
                tickvisible?: boolean;
                /**
                 * major label visibility
                 */
                labelvisible?: boolean;
            };
            /**
             * minor
             */
            minor?: {
                /**
                 * minor tick visibility
                 */
                tickvisible?: boolean;
                /**
                 * minor label visibility
                 */
                labelvisible?: boolean;
            };
        };
        /**
         * base line style. Color set to curve's color, width = 1 by default.
         */
        baselinestyle?: LineStyle | LineStyle.Options;
        /**
         * microposition limits
         */
        microposition?: {
            /**
             * upper bound of microposition (range from 0 to 1)
             */
            top?: number;
            /**
             * lower bound of microposition (range from 0 to 1)
             */
            bottom?: number;
        };
        /**
         * rotation of the curveaxis labels; can be automatic, vertical, horizontal
         */
        labelorientation?: string | Orientation | number;
    };
    /**
     * properties object
     */
    type OptionsOut = {
        /**
         * Object's id/uri
         */
        id: string;
        /**
         * Object/curve's name
         */
        name: string;
        /**
         * axis options
         */
        curveaxis: AxisOptionsOut;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.AxisPositionChanged]: {
            id: string;
            oldposition: string;
            axisposition: string;
        };
        [Events.AxisUpdated]: TimeSeriesObjectBase;
    };
}
