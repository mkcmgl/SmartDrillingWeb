import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Merge } from '@int/geotoolkit/base';
import { RectangularShape } from '@int/geotoolkit/scene/shapes/RectangularShape';
import { Point } from '@int/geotoolkit/util/Point';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { SelectionContext } from '@int/geotoolkit/selection/SelectionContext';
import type { INumericalDataSeries } from '@int/geotoolkit/data/INumericalDataSeries';
import type { AbstractDataSeries } from '@int/geotoolkit/data/AbstractDataSeries';
/**
 * @enum
 * @readonly
 */
declare enum SelectedType {
    Axes = "axes",
    Series = "series"
}
/**
 * Defines a radar(spider) chart. The data points in the dataset are drawn around the chart. The value of each point in the dataset is represented as the distance from the center of the chart. The center of the chart represents the minimum value and the chart edge represents the maximum value. Grid lines, which typically represents the Y axis, are displayed by default to represent values from the center of the chart to the perimeter.
 * The X axis is plotted along the perimeter using the data category variables <br>
 */
export declare class RadarChart extends RectangularShape {
    constructor(options?: RadarChart.Options);
    /**
     * Convert model radius to outer radius
     * @param value value of the outer radius
     */
    modelToOuterRadius(value: number): number;
    /**
     * set the content for this shape
     * @param [content] content that defines the polygons in the chart
     * @returns this
     */
    setContent(content?: RadarChart.ContentOptions[]): this;
    /**
     * get the content for this shape
     * @returns current content
     */
    getContent(): RadarChart.Content[];
    render(context: RenderingContext | SelectionContext): void;
    /**
     * Render content
     * @param context Rendering Context
     */
    renderContent(context: RenderingContext): void;
    /**
     * Highlight selected visuals
     * @param selection array of indexes
     * @returns this
     */
    highlightSelected(selection: Record<SelectedType, number[]>): this;
    /**
     * Reset highlihting of visuals
     * @returns this
     */
    resetHighlighting(): this;
    /**
     * Sets shape highlight styles handler
     * @param handler function for set highlight style of shapes
     * @returns this
     */
    setHighlightStylesHandler(handler: RadarChart.HighlightStyleHandler): this;
    /**
     * Gets shape highlight styles handler
     */
    getHighlightStylesHandler(): RadarChart.HighlightStyleHandler;
    /**
     * Hit test in the device coordinate. This method checks if any point is inside the area and shape
     * intersects area.
     * @param area model area or position
     * @param [radius] radius of selection
     */
    hitTest(area: Rect | Point, radius?: number): RadarChart.Hits;
    /**
     * Convert point from polar to cartesian coordinate system. the center is int e
     * @param r radius
     * @param theta angle in grad
     */
    polarToCartesian(r: number, theta: number): Point;
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing the properties
     */
    getProperties(): RadarChart.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties object containing the properties to set
     * @returns this
     */
    setProperties(properties?: RadarChart.Options): this;
}
export declare namespace RadarChart {
    /**
     * RadarChart parameters object
     */
    type Options = RectangularShape.Options & {
        /**
         * a center of the polar chart
         */
        center?: Point | Point.Options;
        /**
         * a radius of the polar chart
         */
        outerradius?: number;
        /**
         * radius of the polar chart in the model coordinates
         */
        modelradius?: number;
        /**
         * a start angle to be used for 0 angle (by default it is E direction)
         */
        startangle?: number;
        /**
         * outline visibility
         */
        outlinevisible?: boolean;
        /**
         * gridlines properties
         */
        gridlines?: {
            /**
             * line style
             */
            linestyle?: LineStyle.Type;
            /**
             * step by radius in model coordinates. Will be ignored, if options.gridlines.count is defined
             */
            step?: number;
            /**
             * number of gridlines
             */
            count?: number;
            /**
             * visibility of radius grid
             */
            visible?: boolean;
        };
        /**
         * define options of the categories
         */
        categories?: {
            /**
             * line style
             */
            linestyle?: LineStyle.Type;
            /**
             * labels style
             */
            textstyle?: TextStyle.Type;
            /**
             * labels style
             */
            labelstyle?: LabelStyle;
            /**
             * data that is the names of the categories to rate
             */
            data?: string[];
            /**
             * labels drawn along outer circumference
             */
            labelsalongcircumference?: boolean;
        };
        /**
         * content that defines the polygons in the chart
         */
        content?: ContentOptions[];
    };
    /**
     * Content that defines the polygons in the chart
     */
    type Content = {
        /**
         * line style
         */
        linestyle?: LineStyle;
        /**
         * fill style
         */
        fillstyle?: FillStyle;
        /**
         * name of the item
         */
        name?: string;
        /**
         * data to show on the chart
         */
        data?: INumericalDataSeries & AbstractDataSeries;
        /**
         * highlighted
         */
        highlighted?: boolean;
    };
    /**
     * Callback for set the highlight style of shapes
     */
    type HighlightStyleHandler = (styles: HighlightStyles) => HighlightStyles;
    /**
     * object containing the properties
     */
    type OptionsOut = RectangularShape.OptionsOut & {
        /**
         * a center of the polar chart
         */
        center?: {
            /**
             * center x coordinate
             */
            x: number;
            /**
             * center y coordinate
             */
            y: number;
        };
        /**
         * a radius of the polar chart
         */
        outerradius?: number;
        /**
         * radius of the polar chart in the model coordinates
         */
        modelradius?: number;
        /**
         * a start angle to be used for 0 angle (by default it is E direction)
         */
        startangle?: number;
        /**
         * outline visibility
         */
        outlinevisible?: boolean;
        /**
         * gridlines properties
         */
        gridlines?: {
            /**
             * line style
             */
            linestyle?: LineStyle;
            /**
             * step by radius in model coordinates
             */
            step?: number;
            /**
             * lines count
             */
            count?: number;
            /**
             * visibility of radius grid
             */
            visible?: boolean;
        };
        /**
         * define properties of the categories
         */
        categories?: {
            /**
             * line style
             */
            linestyle?: LineStyle;
            /**
             * labels text style
             */
            textstyle?: TextStyle;
            /**
             * labels style
             */
            labelstyle?: LabelStyleOut;
            /**
             * data that is the names of the categories to rate
             */
            data?: string[];
            /**
             * labels drawn along outer circumference
             */
            labelsalongcircumference?: boolean;
        };
        /**
         * content that defines the polygons in the chart
         */
        content?: Content[];
    };
    type Hits = Record<SelectedType, number[]>;
    type LabelStyle = {
        /**
         * labels visibility
         */
        visible?: boolean;
        /**
         * label pointingup flag
         */
        ispointingup?: boolean;
        /**
         * label offset
         */
        offset?: number;
        /**
         * label padding
         */
        padding?: number;
        /**
         * label radius
         */
        radius?: number;
        /**
         * label border style
         */
        linestyle?: LineStyle.Type;
        /**
         * label background style
         */
        fillstyle?: FillStyle.Type;
    };
    type LabelStyleOut = Merge<LabelStyle, {
        /**
         * label border style
         */
        linestyle?: LineStyle;
        /**
         * label background style
         */
        fillstyle?: FillStyle;
    }>;
    /**
     * Object to set the polygons in the chart
     */
    type ContentOptions = {
        /**
         * line style
         */
        linestyle?: LineStyle.Type;
        /**
         * fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * name of the item
         */
        name?: string;
        /**
         * data to show on the chart
         */
        data?: number[] | (INumericalDataSeries & AbstractDataSeries);
    };
    /**
     * highlight styles
     */
    type HighlightStyles = {
        /**
         * linestyle for series lines
         */
        linestyle?: LineStyle;
        /**
         * fillstyle for series
         */
        fillstyle?: FillStyle;
        /**
         * linestyle for axis lines
         */
        axislinestyle?: LineStyle;
        /**
         * textstyle for label
         */
        textstyle?: TextStyle;
        /**
         * label style
         */
        labelstyle?: LabelStyleOut;
    };
}
export {};
