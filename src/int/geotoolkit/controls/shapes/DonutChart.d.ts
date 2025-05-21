/**
 * @module geotoolkit/controls/shapes/DonutChart
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Merge } from '@int/geotoolkit/base';
import { Group } from '@int/geotoolkit/scene/Group';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Point } from '@int/geotoolkit/util/Point';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AbstractDataSeries } from '@int/geotoolkit/data/AbstractDataSeries';
/**
 * Enum defining PieMode
 * @enum
 * @readonly
 */
export declare enum PieMode {
    /**
     * Pie2D
     */
    Pie2D = "Pie2D",
    /**
     * Pie3D
     */
    Pie3D = "Pie3D"
}
/**
 * Enum defining donut charts model limits mode
 * @enum
 * @readonly
 */
export declare enum ModelLimitsMode {
    /**
     * Radius - Model Limits will be the based on the outerRadius
     */
    Radius = "radius",
    /**
     * Padded - Model Limits will be the based on the outerRadius plus the slice shift
     */
    Padded = "padded",
    /**
     * Dynamic - Model Limits will adjust to fit the shape in the bounds
     */
    Dynamic = "dynamic",
    /**
     * Auto - Model Limits will be the based on the maxOuterRadius
     */
    Auto = "auto"
}
/**
 * Enum defining DataMode
 * @enum
 * @readonly
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
 * Enum defining LabelLocation
 * @enum
 * @readonly
 */
export declare enum LabelLocation {
    /**
     * Inside
     */
    Inside = "Inside",
    /**
     * Outside
     */
    Outside = "Outside"
}
/**
 * Enum defining LabelDirection
 * @enum
 * @readonly
 */
export declare enum LabelDirection {
    /**
     * Horizontal
     */
    Horizontal = "Horizontal",
    /**
     * Radial
     */
    Radial = "Radial"
}
/**
 * Enum defining Direction
 * @enum
 * @readonly
 */
export declare enum Direction {
    /**
     * Clockwise
     */
    Clockwise = "Clockwise",
    /**
     * CounterClockwise
     */
    CounterClockwise = "CounterClockwise"
}
/**
 * Enum defining Data Order Mode
 * @enum
 * @readonly
 */
export declare enum DataOrder {
    /**
     * Ascending
     */
    Ascending = "Ascending",
    /**
     * Descending
     */
    Descending = "Descending",
    /**
     * Natural
     */
    Natural = "Natural"
}
/**
 * This class defines a DonutChart object. The donut and pie charts are generally equal. <br>
 * The only difference is that donut chart has a hole in the center so it has one extra parameter - inner radius. <br>
 */
export declare class DonutChart extends Group {
    /**
     * This class defines a DonutChart object. The donut and pie charts are generally equal.
     * @param [options] options object
     * @param [data] (see {@link import("geotoolkit/controls/shapes/DonutChart").DonutChart.setData} for more info)
     */
    constructor(options?: DonutChart.Options, data?: DonutChart.Data);
    /**
     * Sets data to display. Sends {@link import("geotoolkit/scene/Node").Events.Changed} event at the end.
     *
     * @param data data object
     * @returns this
     */
    setData(data: DonutChart.Data): this;
    /**
     * Gets display options
     * (see {@link import("geotoolkit/controls/shapes/DonutChart").DonutChart.setOptions} for more info)
     * @returns display options
     */
    getOptions(): DonutChart.OptionsBaseOut;
    /**
     * Sets display options. Sends {@link import("geotoolkit/scene/Node").Events.Changed} event at the end.
     *
     * @param options options object
     * @returns this
     */
    setOptions(options: DonutChart.Options): this;
    /**
     * Sets chart bounds
     * @param rect bounds
     * @returns this
     */
    setBounds(rect: Rect): this;
    /**
     * Check collision
     *
     * @param context Rendering Context
     * @returns true if object is inside of rendering area
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): DonutChart.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties options object
     * @returns this
     */
    setProperties(properties?: DonutChart.Options & Group.Options): this;
    /**
     * return the number of slices in the donut chart
     */
    getSlicesCount(): number;
    /**
     * return slice at specific index if it exists, null otherwise
     *
     * @param index specified index to return the slice at
     * @returns object that describes slice information - the corresponding slice information contains
     * @example
     * { 'label: 'slice1', 'value': 42, 'percentage' : 14.01, 'color': 'red', 'angleDegStart' : 10, 'angleDegEnd' : 45 }
     */
    getSliceByIndex(index: number): null | DonutChart.SliceInfo;
    /**
     * Selects elements at a specified device point
     * @param x x-ordinate
     * @param y y-ordinate
     * @param [highlight] true to highlight selected elements, false otherwise
     * @returns array of selected slices' indices
     */
    selectSlicesAt(x: number, y: number, highlight?: boolean): number[];
    /**
     * Selects elements at a specified device point or rectangle
     * @param x device point or rectangle to select
     * @param [y] optional unnecessary parameter
     * @param [highlight] true to highlight selected elements, false otherwise
     * @returns array of selected slices' indices
     */
    selectSlicesAt(x: Point | Rect, y?: null, highlight?: boolean): number[];
    /**
     * Selects elements at a specified device polygon
     * @param x array of polygon x-ordinates
     * @param y array of polygon y-ordinates
     * @param [highlight] true to highlight selected elements, false otherwise
     * @returns array of selected slices' indices
     */
    selectSlicesAt(x: number[], y: number[], highlight?: boolean): number[];
    /**
     * Highlight specified slices
     *
     * @param slices array of slices' indices to highlight
     * @param [append] append or replace flag
     * @returns this
     */
    highlightSlices(slices: number[], append?: boolean): this;
    /**
     * Dispose DonutChart and its shapes
     */
    dispose(): void;
}
export declare namespace DonutChart {
    /**
     * params object
     */
    export type Options = {
        /**
         * outer radius
         */
        outerradius?: number;
        /**
         * max outer radius
         */
        maxouterradius?: number;
        /**
         * inner radius
         */
        innerradius?: number;
        /**
         * 2d- or 3d-representation
         */
        piemode?: PieMode;
        /**
         * starting angle of the first slice drawn, in degrees
         */
        startangle?: number;
        totalangle?: number;
        /**
         * slices' rendering direction
         */
        direction?: Direction;
        /**
         * fill styles OR colors, in css or rgb (the color order follow "data.order" parameter in "setData" call)
         */
        fillstyles?: FillStyle.Type[];
        /**
         * fill styles OR colors, in css or rgb (the color order follow "data.order" parameter in "setData" call)
         */
        ['selected-fillstyles']?: FillStyle.Type[];
        /**
         * autogradient flag
         */
        autogradient?: boolean;
        /**
         * method to create selected style based on "regular" one (used when "selected_fillstyles" not set explicitly)
         */
        createselectedstyle?: (src: FillStyle) => FillStyle;
        /**
         * minimum percentage cutoff for a slice before it becomes part of "other". 0 for no limit
         */
        minpercentage?: number;
        /**
         * maximum amount of slices the graph can have including an "other" slice. 0 for infinite
         */
        maxslices?: number;
        /**
         * below this threshold (from 0 to 100) the percentage is not displayed
         */
        showpercentagesthreshold?: number;
        /**
         * model limits mode
         */
        modellimitsmode?: ModelLimitsMode | string;
        /**
         * labeling options object
         */
        label?: {
            text?: string;
            /**
             * hide an inside label if it doesn't fit
             */
            hideifdontfit?: boolean;
            /**
             * label formatting method
             */
            format?: FormatLabel;
            /**
             * label location
             */
            location?: LabelLocation;
            /**
             * label direction
             */
            direction?: LabelDirection;
            /**
             * label text style
             */
            textstyle?: TextStyle.Type;
            preservereadingorientation?: boolean;
            ispointingup?: boolean;
            preserverightangle?: boolean;
            preserveaspectratio?: boolean;
        };
        /**
         * outside line options object
         */
        outsideline?: {
            /**
             * outside line style
             */
            linestyle?: LineStyle.Type;
            /**
             * outside line length
             */
            length?: number;
            /**
             * outside line pad
             */
            pad?: number;
        };
        /**
         * slice shift options object
         */
        sliceshift?: {
            /**
             * slices shift offsets. Index in the array to match the index of slice
             */
            offsets?: number[];
        };
        /**
         * height of a pseudo-3d chart
         */
        depth3d?: number;
        /**
         * angle of the pseudo-3d chart. should be between 0 and 90
         */
        inclination3d?: number;
        /**
         * linestyle
         */
        linestyle?: LineStyle.Type;
    };
    /**
     * properties object
     */
    export type OptionsOut = Merge<Group.OptionsOut, OptionsBaseOut>;
    export type OptionsBaseOut = {
        /**
         * outer radius
         */
        outerradius: number;
        /**
         * max outer radius
         */
        maxouterradius: number;
        /**
         * inner radius
         */
        innerradius: number;
        /**
         * 2d- or 3d-representation
         */
        piemode: PieMode;
        /**
         * starting angle of the first slice drawn, in degrees
         */
        startangle: number;
        totalangle: number;
        /**
         * slices' rendering direction
         */
        direction: Direction;
        /**
         * fill styles OR colors, in css or rgb (the color order follow "data.order" parameter in "setData" call)
         */
        fillstyles: FillStyle[];
        /**
         * fill styles OR colors, in css or rgb (the color order follow "data.order" parameter in "setData" call)
         */
        ['selected-fillstyles']: FillStyle[];
        /**
         * slice line style
         */
        linestyle: LineStyle;
        /**
         * autogradient flag
         */
        autogradient: boolean;
        /**
         * method to create selected style based on "regular" one (used when "selected_fillstyles" not set explicitly)
         */
        createselectedstyle: (src: FillStyle) => FillStyle;
        /**
         * minimum percentage cutoff for a slice before it becomes part of "other". 0 for no limit
         */
        minpercentage: number;
        /**
         * maximum amount of slices the graph can have including an "other" slice. 0 for infinite
         */
        maxslices: number;
        /**
         * below this threshold (from 0 to 100) the percentage is not displayed
         */
        showpercentagesthreshold: number;
        /**
         * model limits mode
         */
        modellimitsmode: ModelLimitsMode;
        /**
         * labeling options object
         */
        label: {
            text?: string;
            /**
             * hide an inside label if it doesn't fit
             */
            hideifdontfit: boolean;
            /**
             * label formatting method in form `function myLabelFormat(annotation, value) {...}` returning `{string}` value
             */
            format: FormatLabel;
            /**
             * label location
             */
            location: LabelLocation;
            /**
             * label direction
             */
            direction: LabelDirection;
            /**
             * label text style
             */
            textstyle: TextStyle;
        };
        /**
         * outside line options object
         */
        outsideline: {
            /**
             * outside line style
             */
            linestyle: LineStyle;
            /**
             * outside line length
             */
            length: number;
            /**
             * outside line pad
             */
            pad: number;
        };
        /**
         * slice shift options object
         */
        sliceshift: {
            /**
             * slices shift offsets. Index in the array to match the index of slice
             */
            offsets: number[];
        };
        /**
         * height of a pseudo-3d chart
         */
        depth3d: number;
        /**
         * angle of the pseudo-3d chart. should be between 0 and 90
         */
        inclination3d: number;
    };
    /**
     * data object
     */
    export type Data = {
        /**
         * data mode
         */
        mode?: DataMode | string;
        /**
         * data order
         */
        order?: DataOrder | string;
        /**
         * Array of values or associative object
         */
        values?: AbstractDataSeries | Record<string, number> | number[] | string[] | string | number | boolean;
    };
    /**
     * returned slice object
     */
    export type SliceInfo = {
        /**
         * label
         */
        label: string;
        /**
         * value
         */
        value: number;
        /**
         * percentage
         */
        percentage: number;
        /**
         * color
         */
        color: FillStyle.Type;
        /**
         * start angle
         */
        angledegstart: number;
        /**
         * end angle
         */
        angledegend: number;
    };
    /**
     * label format function
     */
    type FormatLabel = (annotation: string | number, value?: number) => string;
    export {};
}
