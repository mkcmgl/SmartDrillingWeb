import { NumericGauge } from '@int/geotoolkit/gauges/NumericGauge';
import { Range } from '@int/geotoolkit/util/Range';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { DynamicElementPosition } from '@int/geotoolkit/gauges/AbstractGauge';
import { Group } from '@int/geotoolkit/scene/Group';
import { Axis } from '@int/geotoolkit/axis/Axis';
import { Iterator } from '@int/geotoolkit/util/iterator';
import { Region } from '@int/geotoolkit/gauges/axis/Region';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Positions of axis relative to the indicator
 * @enum
 * @readonly
 */
export declare enum AxisPosition {
    /**
     * Position to the left of indicator
     */
    Left = "left",
    /**
     * Position to the right of indicator
     */
    Right = "right",
    /**
     * Position to the top of indicator
     */
    Top = "top",
    /**
     * Position to the bottom of indicator
     */
    Bottom = "bottom"
}
/**
 * Implements a class which defines a linear gauge. Linear gauge is a rectangular shape (possibly
 * with round corners), which represents a range of data. If horizontal - range is represented from left to right,
 * if vertical, range is represented from bottom to top (always from min to max). The linear gauge supports adding
 * one axis which can be placed on either sides of the main shape, or in the center. A indicator fill and a needle
 * are the tools which are used to visualize the current value of the gauge. Fill is filling the gauge shape
 * from min to the current value on the axis. Needle positions itself on the current value on top of the indicator shape.
 */
export declare class LinearGauge extends NumericGauge {
    constructor(options?: LinearGauge.Options);
    protected copyConstructor(gauge: LinearGauge): this;
    /**
     * Gets an axis by its name or index from axes iterator
     * @param name Name of the axis or its index
     */
    getAxis(name: string | number): Axis | null;
    /**
     * Removes an axis from the gauge. If no such axis exists, nothing will be done.
     * @param name Name of the axis or its index
     */
    removeAxis(name: string | number): this;
    /**
     * Clears linear gauge axes
     */
    clearAxes(): void;
    /**
     * Returns an iterator over existing axes groups in this gauge
     * @param [filter] a filter function. Returns all axes groups if null
     */
    getAxes(filter?: (item: Group) => boolean): Iterator<Group>;
    /**
     * Adds an axis to the gauge
     * @param name Name of the new axis
     * @param axis New axis to add
     * @param [props] JSON with axis properties
     */
    addAxis(name: string, axis: LinearGauge.AxisType, props?: LinearGauge.AxisOptions): this;
    /**
     * Sets properties pertaining to axis of the gauge
     * @param name Name of the axis to apply properties. Name can also be passed inside props JSON.
     * @param props properties
     * @returns this
     */
    setAxisProperties(name: null | string, props: LinearGauge.AxisOptions): this;
    /**
     * Gets properties pertaining to axis of the gauge
     * @param [name] Name of the axis to get properties.
     * If null, properties will be retrieved from all axes
     * @returns properties, empty if no axis of name 'name' exists
     */
    getAxisProperties(name?: string): LinearGauge.AxisOptions | Record<string, LinearGauge.AxisOptions>;
    /**
     * Checks if the gauge contains specified axis
     * @param axis The axis or its name
     */
    hasAxis(axis: Axis | Group | string): boolean;
    /**
     * Adds a region, or an array of regions to the gauge. Regions of indicator are indexed by the name
     * that you provide. if no such name has been passed into the method, it will be impossible to do
     * any further manipulations with this region.
     * @param name Name of the region to add or a region which has the name set to it
     * @param [region] Region(s) to add
     */
    addIndicatorRegion(name: string | Region | Region[] | string[], region?: Region | Region[]): void;
    /**
     * Removes an earlier added region from the indicator
     * @param name region name or region
     */
    removeIndicatorRegion(name: string | Region): void;
    /**
     * Removes all the regions from the scene
     */
    clearRegions(): this;
    /**
     * Sets properties pertaining to linear gauge and its components.
     * @param props properties
     */
    setProperties(props?: LinearGauge.Options): this;
    /**
     * Gets properties pertaining to Linear Gauge
     * @returns properties
     */
    getProperties(): LinearGauge.OptionsOut;
    /**
     * Sets properties pertaining to needle shape of the gauge
     * @param props properties
     */
    setNeedleProperties(props: LinearGauge.NeedleOptions): this;
    /**
     * Returns properties pertaining to needle shape of the gauge
     * @returns properties
     */
    getNeedleProperties(): LinearGauge.NeedleOptionsOut;
    /**
     * Sets current value of the gauge
     * @param val New value for the gauge
     * @param [skipAnimation] Specifies if animation should be avoided
     * @returns this
     */
    setValue(val: number, skipAnimation?: boolean): this;
    /**
     * Returns range displayed by this range
     */
    getRange(): Range;
    /**
     * Sets range displayed by this gauge
     * @param range the range to set
     */
    setRange(range: Range): this;
    /**
     * Sets range displayed by this gauge
     * @param min Lower bounds of the range
     * @param max Higher bound of the range
     */
    setRange(min: number, max: number): this;
    /**
     * Returns orientation of the gauge.
     */
    getOrientation(): Orientation;
    /**
     * Sets the needle for the axis
     * @param params JSON with needle properties
     * @returns this
     */
    setNeedle(params: {
        geometry?: Group;
        center?: Point;
    }): this;
}
export declare namespace LinearGauge {
    /**
     * properties
     */
    type Options = NumericGauge.Options & {
        /**
         * Range displayed by this gauge
         */
        range?: Range;
        /**
         * Orientation of the gauge
         */
        orientation?: string | Orientation;
        /**
         * Regions to display in the indicator
         */
        regions?: Region[];
        /**
         * JSON with axes and properties
         */
        axes?: Record<string, AxisType>;
        /**
         * Properties pertaining to indicator and its fill
         */
        indicator?: IndicatorOptions;
        /**
         * JSON with needle properties
         */
        needle?: NeedleOptions;
    };
    /**
     * properties
     */
    type AxisType = Axis | Axis.Options | Group | AxisOptions & {
        /**
         * The axis to add
         */
        axis: Axis | Axis.Options | Group;
    };
    /**
     * properties
     */
    type AxisOptions = {
        /**
         * Axis name
         */
        name?: string;
        /**
         * Position of the axis relative to indicator shape
         */
        position?: AxisPosition;
        /**
         * Width of the axis (height if horizontal) in CSS format
         */
        width?: number | string;
        /**
         * Gap between axis and indicator shape in CSS format
         */
        gap?: number | string;
        /**
         * Visibility of the axis
         */
        visible?: boolean;
    };
    /**
     * properties
     */
    type OptionsOut = NumericGauge.OptionsOut & {
        /**
         * Range displayed by this gauge
         */
        range: Range;
        /**
         * Orientation of the gauge
         */
        orientation: Orientation;
        /**
         * Regions displayed in the indicator
         */
        regions: Region[];
        /**
         * Array with axes and properties
         */
        axes: Record<string, AxisOptions>;
        /**
         * Properties pertaining to indicator and its fill
         */
        indicator: IndicatorOptionsOut;
        /**
         * JSON with needle properties
         */
        needle: NeedleOptionsOut;
    };
    /**
     * properties
     */
    type NeedleOptions = {
        /**
         * Width of needle in CSS format (height if gauge is horizontal)
         */
        width?: number | string;
        height?: number | string;
        /**
         * A group containing the geometry of the needle
         */
        geometry?: Group;
    };
    /**
     * properties
     */
    type NeedleOptionsOut = Required<NeedleOptions>;
    /**
     * JSON with Properties pertaining to indicator and its fill
     */
    type IndicatorOptionsOut = Required<IndicatorOptions>;
    /**
     * properties pertaining to indicator and its fill
     */
    type IndicatorOptions = {
        /**
         * Width of the indicator in CSS format, relative to the gauge width
         */
        width?: number | string;
        /**
         * Height of the indicator in CSS format, relative to the gauge height
         */
        height?: number | string;
        /**
         * Fill style of the background of indicator
         */
        backgroundfill?: FillStyle;
        /**
         * Line style of the background of indicator
         */
        backgroundline?: LineStyle;
        /**
         * Fill style of the value fill in the indicator
         */
        valuefillstyle?: FillStyle.Type;
        /**
         * Line style of the value fill in the indicator
         */
        valuelinestyle?: LineStyle;
        /**
         * Corner radius of the indicator shape in CSS notation, relative to the width of the shape. (50% will create a circle)
         */
        cornerradius?: number | string;
        /**
         * fill width
         */
        fillwidth?: number | string;
        /**
         * Layer position of the fill
         */
        fillposition?: DynamicElementPosition | string;
    };
}
