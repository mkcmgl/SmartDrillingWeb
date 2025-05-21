/**
 * @module geotoolkit/controls/shapes/BoxPlot
 */
import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LineStyle, Patterns } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { Events as SceneEvents } from '@int/geotoolkit/scene/Node';
import { Rect } from '@int/geotoolkit/util/Rect';
import { SeriesElementInfo } from '@int/geotoolkit/controls/data/SeriesElementInfo';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { DataSource } from '@int/geotoolkit/data/DataSource';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Enum for BoxPlot.DataMode
 * @readonly
 * @enum
 */
export declare enum DataMode {
    /**
     * Raw
     */
    Raw = "Raw",
    /**
     * Associative
     */
    Associative = "Associative"
}
/**
 * Enum for Boxplot.BoxValueLocation
 * @enum
 * @readonly
 */
export declare enum BoxValueLocation {
    /**
     * on top of line
     */
    Top = "Top",
    /**
     * below the line
     */
    Below = "Below",
    /**
     * on left of the line
     */
    Left = "Left",
    /**
     * on right of the line
     */
    Right = "Right"
}
/**
 * Box plot is a convenient way of graphically depicting groups of numerical data
 * through their five-number summaries (the smallest observation, lower quartile (Q1), median (Q2), upper quartile (Q3), and largest observation).
 * One axis of the chart shows the specific categories being compared, and the other axis represents a discrete value. <br>
 * Display Modes and Styles can be selected based on the Enum. <br>
 */
export declare class BoxPlot extends ScaledShape {
    /**
     * Creates box plot
     * @param options options
     * @param data data
     */
    constructor(options?: BoxPlot.Options, data?: BoxPlot.Data);
    on<E extends keyof BoxPlot.EventMap>(type: E, callback: (eventType: E, sender: this, args: BoxPlot.EventMap[E]) => void): this;
    off<E extends keyof BoxPlot.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: BoxPlot.EventMap[E]) => void): this;
    notify<E extends keyof BoxPlot.EventMap>(type: E, source: BoxPlot, args?: BoxPlot.EventMap[E]): this;
    /**
     * get the bounds of model
     * @returns current bounds
     */
    getBounds(): Rect;
    /**
     * Sets data to display
     *
     * @param [data] data object
     * @returns this
     */
    setData(data?: BoxPlot.Data): this;
    /**
     * Sets display options
     *
     * @param [options] options object see {@link import("geotoolkit/controls/shapes/BoxPlot").BoxPlot.setProperties}
     * @returns this
     */
    setOptions(options?: BoxPlot.Options): this;
    /**
     * get orientation of boxes
     */
    isHorizontal(): boolean;
    /**
     * set model limits
     * @param limits current model limits
     * @returns this
     */
    setModelLimits(limits: Rect): this;
    /**
     * get model limits
     * @returns current model limits
     */
    getModelLimits(): Rect;
    /**
     * return processed data sets
     * @returns processed data sets
     */
    getProcessedDatasets(): BoxPlot.DataSet[];
    /**
     * calculate model unit width of each component based on the absolute value of box width
     * @param context rendering context
     */
    calculateAbsWidth(context: RenderingContext): void;
    render(context: RenderingContext): void;
    /**
     * Hit test in the device coordinate
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns a collection of selected data
     */
    hitTest(area: Rect | Point, radius?: number): SeriesElementInfo[];
    /** */
    dispose(): void;
    /**
     * Sets properties
     * @param [properties] properties object
     * @returns this
     */
    setProperties(properties?: BoxPlot.Options): this;
    /**
     * Returns properties
     * @returns properties object
     */
    getProperties(): BoxPlot.OptionsOut;
}
export declare namespace BoxPlot {
    /**
     * options object
     */
    export type Options = Shape.Options & OptionsBase & {
        /**
         * pattern of connected line
         * @deprecated since 4.0. Use connectedlinestyle property
         */
        connectedlinepattern?: Patterns;
        /**
         * missing value verification criteria; default is `function(value){ return (value===null); }`
         */
        ismissingvalue?: IsMissingValue;
        fillstyles?: FillStyles[] | FillStyle.Type[] | (FillStyles | FillStyle.Type)[];
    };
    /**
     * properties object
     */
    export type OptionsOut = Shape.OptionsOut & OptionsBase & {
        fillstyles?: FillStyles[] | FillStyle[] | (FillStyles | FillStyle)[];
    };
    /**
     * options object
     */
    type OptionsBase = {
        /**
         * value limits parameters
         */
        valuelimits?: {
            /**
             * min value to set
             */
            minvalue?: number;
            /**
             * max value to set
             */
            maxvalue?: number;
            /**
             * neat limits flag
             */
            neatlimits?: boolean;
        };
        /**
         * box values parameters
         */
        boxvalues?: BoxValues;
        /**
         * orientation of the plot
         */
        orientation?: Orientation;
        /**
         * width of the boxs
         */
        boxwidth?: number;
        /**
         * padding between the box group (datasets)
         */
        boxpad?: number;
        /**
         * width of whiskers (the line representing max and min value)
         */
        whiskerswidth?: number;
        /**
         * set unit for the width of box when using absolute width value
         */
        boxwidthunit?: string;
        /**
         * set absolute value for the width of box
         */
        fixedboxwidth?: number;
        /**
         * linestyle of connected line
         */
        connectedlinestyle?: LineStyle.Type;
        /**
         * enable display of outliers
         */
        isoutliersvisible?: boolean;
        primaryfillstyle?: FillStyle;
        secondaryfillstyle?: FillStyle;
        linestyles?: LineStyle.Type[] | LineStyle.Type[][];
    };
    /**
     * data object
     */
    export type Data = {
        /**
         * Data mode for the BoxPlot
         */
        mode?: DataMode;
        /**
         * Array (or instance) of dataset, each item is an object containing property values and fillstyle
         */
        datasets?: DataSet | DataSet[];
    };
    /**
     * The dataset definition.
     */
    export type DataSet = {
        /**
         * collection of values to be rendered
         */
        values?: number[][];
        /**
         * fillstyle object for corresponding values.
         */
        fillstyle?: FillStyles | FillStyle.Type | FillStyles[] | FillStyle.Type[] | (FillStyles | FillStyle.Type)[];
        datasource?: DataSource;
    };
    type IsMissingValue = (v: number | number[]) => boolean;
    export type BoxValues = {
        /**
         * box values visibility flag
         */
        visible?: boolean;
        /**
         * enable label suppress when intersection
         */
        suppress?: boolean;
        /**
         * box values' label location
         */
        location?: BoxValueLocation;
        /**
         * box values' vertical offset from original position
         */
        verticaloffset?: number;
        /**
         * box values' horizontal offset from original position
         */
        horizontaloffset?: number;
        /**
         * box values decimal precision
         */
        decimalprecision?: number;
        /**
         * box value text style
         */
        textstyle?: TextStyle.Type;
    };
    export type FillStyles = {
        /**
         * fillstyle for the box area between third quartile and median
         */
        primaryfillstyle?: FillStyle.Type;
        /**
         * fillstyle for the box area between first quartile and median
         */
        secondaryfillstyle?: FillStyle.Type;
    };
    export type EventMap = AbstractNode.EventMap & {
        [SceneEvents.ModelLimitsChanged]: void;
    };
    export {};
}
