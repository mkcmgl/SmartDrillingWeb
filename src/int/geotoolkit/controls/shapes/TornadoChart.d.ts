/**
 * @module geotoolkit/controls/shapes/TornadoChart
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { Point } from '@int/geotoolkit/util/Point';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { Merge } from '@int/geotoolkit/base';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { ColoredStyle } from '@int/geotoolkit/attributes/ColoredStyle';
/**
 * Sort Mode
 * @enum
 * @readonly
 */
export declare enum SortMode {
    /**
     * Max to Min
     */
    MaxToMin = "maxtomin",
    /**
     * Min to Max
     */
    MinToMax = "mintomax",
    /**
     * None
     */
    None = "none"
}
/**
 * Text placement
 * @enum
 * @readonly
 */
export declare enum TextPlacement {
    /**
     * Inside
     */
    Inside = "Inside",
    /**
     * Outside
     */
    Outside = "Outside",
    /**
     * Center
     */
    Center = "Center"
}
/**
 * Tornado Chart
 */
export declare class TornadoChart extends Shape {
    constructor(options?: TornadoChart.Options | LineStyle.Type);
    /**
     * This function is primarily used to set or change the left and right data of the tornado shape. The sort will work only if the left and right data is provided with it.
     * If you want to only sort the data after creating the shape, then use the setSort() function instead.
     *
     * @param data data object defining the data
     */
    setData(data: TornadoChart.Data): this;
    /**
     * private
     */
    sortData(): void;
    /**
     * Highlight bars for specified sample indices
     * @param leftSamples sample indices to highlight on left side
     * @param rightSamples sample indices to highlight on right side
     * @param [append] append or replace flag
     * @returns this
     */
    highlightIndices(leftSamples: number[], rightSamples: number[], append?: boolean): this;
    /**
     * gets the ticks and labels for the axis that will be attached via discrete value tick generator
     */
    getTicksAndLabels(): {
        ticks: {
            position: number;
            grade: string;
        }[];
        labels: {
            position: number;
            grade: string;
            label: string;
        }[];
    };
    /**
     * set Auto Gradient
     *
     * @param autogradient Autogradient on or off
     */
    setAutoGradient(autogradient: boolean): this;
    /**
     * get Auto Gradient
     *
     * @returns autogradient
     */
    getAutoGradient(): boolean;
    /**
     * set spacing between bars
     *
     * @param spacing spacing between bars
     */
    setSpacing(spacing: number): this;
    /**
     * get spacing percentage between bars
     *
     * @returns spacing
     */
    getSpacing(): number;
    /**
     * sets if we are drawing the labels
     *
     * @param draw drawing the labels or not
     */
    setDrawLabels(draw: boolean): this;
    /**
     * gets if we are drawing the labels
     *
     * @returns draw
     */
    getDrawLabels(): boolean;
    /**
     * sets the location of where the text will be rendered
     *
     * @param position location or position of the text
     */
    setLabelPosition(position: TextPlacement): this;
    /**
     * gets the location of where the text will be rendered
     */
    getLabelPosition(): TextPlacement | number;
    render(context: RenderingContext): void;
    /**
     * Sets right line style
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setRightLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Sets left line style
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLeftLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Sets right fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     */
    setRightFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Gets right line style
     * @returns lineStyle
     */
    getRightLineStyle(): LineStyle;
    /**
     * Gets left line style
     * @returns lineStyle
     */
    getLeftLineStyle(): LineStyle;
    /**
     * Gets right fill style
     * @returns fillStyle
     */
    getRightFillStyle(): FillStyle;
    /**
     * Gets left fill style
     * @returns fillStyle
     */
    getLeftFillStyle(): FillStyle;
    /**
     * Sets left fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     */
    setLeftFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Sets left text style
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     */
    setLeftTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * Sets right text style
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     */
    setRightTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns a collection of selected data
     */
    hitTest(area: Rect | Point, radius?: number): TornadoChart.Hits[];
    /**
     * Gets model limits
     *
     * @returns the current model limits
     */
    getModelLimits(): Rect;
    /**
     * Gets sort mode
     *
     * @returns sort mode
     */
    getSort(): SortMode | string;
    /**
     * Sets sort mode
     * @param sort sort mode
     * @returns this
     */
    setSort(sort: SortMode | string): this;
    /**
     * Returns current bounds
     *
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): TornadoChart.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     * @returns this
     */
    setProperties(properties?: TornadoChart.Options): this;
}
export declare namespace TornadoChart {
    type Options = Shape.Options & {
        /**
         * leftData
         */
        left?: number[];
        /**
         * rightData
         */
        right?: number[];
        /**
         * labels
         */
        label?: string[];
        /**
         * data
         */
        data?: Data;
        /**
         * bounds for the chart
         */
        bounds?: Rect;
        /**
         * left fillstyle
         */
        leftfillstyle?: FillStyle.Type;
        /**
         * right fillstyle
         */
        rightfillstyle?: FillStyle.Type;
        /**
         * center line style
         */
        linestyle?: LineStyle.Type;
        /**
         * right line style
         */
        rightlinestyle?: LineStyle.Type;
        /**
         * left line style
         */
        leftlinestyle?: LineStyle.Type;
        /**
         * left text style
         */
        lefttextstyle?: TextStyle.Type;
        /**
         * right text style
         */
        righttextstyle?: TextStyle.Type;
        /**
         * label position
         */
        labelposition?: TextPlacement;
        /**
         * spacing
         */
        spacing?: number;
        /**
         * autogradient
         */
        autogradient?: boolean;
        /**
         * draw labels flag
         */
        drawlabels?: boolean;
        /**
         * sort mode
         */
        sort?: SortMode;
        /**
         * creates fillstyle for selection
         * @param style original fillstyle
         * @returns selected fillstyle
         */
        createselectedstyle?: (style: ColoredStyle) => FillStyle;
    };
    /**
     * data object defining the data
     */
    type Data = {
        /**
         * leftData
         */
        left?: number[];
        /**
         * rightData
         */
        right?: number[];
        /**
         * labels
         */
        label?: string[];
        /**
         * Determines if the data will be sorted or not.
         */
        sort?: SortMode | string;
    };
    /**
     * properties
     */
    type OptionsOut = Merge<Shape.OptionsOut, {
        /**
         * bounds
         */
        bounds: Rect;
        /**
         * left text style
         */
        lefttextstyle: TextStyle;
        /**
         * left fill style
         */
        leftfillstyle: FillStyle;
        /**
         * left line style
         */
        leftlinestyle: LineStyle;
        /**
         * line style
         */
        linestyle: LineStyle;
        /**
         * right text style
         */
        righttextstyle: TextStyle;
        /**
         * right fill style
         */
        rightfillstyle: FillStyle;
        /**
         * right line style
         */
        rightlinestyle: LineStyle;
        /**
         * autogradient flag
         */
        autogradient: boolean;
        /**
         * spacing
         */
        spacing: number;
        /**
         * sort mode
         */
        sort: SortMode | string;
        /**
         * label position
         */
        labelposition: TextPlacement;
        /**
         * draw labels flag
         */
        drawlabels: boolean;
    }>;
    type Hits = {
        left?: number;
        right?: number;
    };
}
