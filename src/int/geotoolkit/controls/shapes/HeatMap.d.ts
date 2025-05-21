import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Events } from '@int/geotoolkit/scene/Node';
import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import { Point } from '@int/geotoolkit/util/Point';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { IDataTable } from '@int/geotoolkit/data/IDataTable';
/**
 * Enum of Plotting types
 * @enum
 * @readonly
 */
export declare enum PlotType {
    /**
     * Step plot mode (no interpolation)
     */
    Step = "STEP",
    /**
     * Linear interpolation between data point, first column(or row) and last column(or row)
     * are mapped to the bound of the image
     */
    LinearInbound = "LINEARINBOUND",
    /**
     * Linear interpolation between data point, and also calculate interpolation for the area where outside of
     * the first column(or row) and last column(or row) by interpolate between them.
     */
    LinearLoop = "LINEARLOOP",
    /**
     * Linear interpolation between data point, and draw outside area of the
     * first column(or row) and last column(or row) by mirror the color of them.
     */
    LinearMirror = "LINEARMIRROR"
}
/**
 * Defines a 2D heatmap, A heat map  is a graphical representation
 * of data where the individual values contained in a matrix are represented as colors
 */
export declare class HeatMap extends ScaledShape {
    constructor(options?: HeatMap.Options | LineStyle.Type | number[][]);
    on<E extends keyof HeatMap.EventMap>(type: E, callback: (eventType: E, sender: this, args: HeatMap.EventMap[E]) => void): this;
    off<E extends keyof HeatMap.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: HeatMap.EventMap[E]) => void): this;
    notify<E extends keyof HeatMap.EventMap>(type: E, source: HeatMap, args?: HeatMap.EventMap[E]): this;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     */
    setProperties(properties?: HeatMap.Options): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): HeatMap.OptionsOut;
    /**
     * Get model limit
     * @returns model limit
     */
    getModelLimits(): Rect | null;
    /**
     * Set model bounds
     * @param bounds model bounds
     */
    setBounds(bounds: Rect): this;
    /**
     * Get model bounds
     */
    getBounds(): Rect;
    /**
     * Set options of heatmap
     * @param options options
     * @returns this
     */
    setOptions(options: HeatMap.OptionsBase): this;
    /**
     * Get options of heatmap
     */
    getOptions(): HeatMap.OptionsBaseOut;
    /**
     * set if keep model limit of shape when setting offset property
     * @param iskeepmodellimits set if keep model limits when offsetting heatmap
     * @returns this
     */
    setKeepModelLimits(iskeepmodellimits: boolean): this;
    /**
     * get keep model limits property
     */
    isKeepModelLimits(): boolean;
    /**
     * set x and y offset separately
     * @example
     * // the heatmap would shift toward higher x limit with 2 model x unit and toward lower y limit with 3 model y unit
     * heatmap.setModelOffset(2, -3)
     * @param offsetx offsets for each column
     * @param offsety offsets for each row
     * @returns this
     */
    setModelOffset(offsetx: number | number[], offsety: number | number[]): this;
    /**
     * get offset x and y
     */
    getModelOffset(): {
        offsetx: number | number[];
        offsety: number | number[];
    };
    /**
     * set min and max value limit
     * @param min customized min value
     * @param max customized max value
     * @returns this
     */
    setMinMax(min: number, max: number): this;
    /**
     * Set color provider
     * @param colorProvider the color provider
     * @returns this
     */
    setColorProvider(colorProvider: ColorProvider): this;
    /**
     * Gets color provider
     */
    getColorProvider(): null | ColorProvider;
    /**
     * Set plot mode of column
     * @param type plot type
     * @returns this
     */
    setColPlotMode(type: PlotType): this;
    /**
     * get plot mode of column
     */
    getColumnPlotMode(): PlotType;
    /**
     * Set plot mode of row
     * @param type plot type
     * @returns this
     */
    setRowPlotMode(type: PlotType): this;
    /**
     * get plot mode of row
     */
    getRowPlotMode(): PlotType;
    /**
     * Set data source
     * @param data the data source
     */
    setData(data: IDataTable | number[][]): this;
    getContentsTransform(): Transformation | null;
    render(context: RenderingContext): void;
    /**
     * set the visibility of labels
     * @param visible the flag to set the visibility of labels
     * @returns this
     */
    setLabelsVisible(visible: boolean): this;
    /**
     * return the visibility of labels
     * @returns the visibility of labels
     */
    isLabelsVisible(): boolean;
    /**
     * set textstyle for labels
     * @param textstyle textstyle for labels
     * @param [merge] merge flag is true if textStyle should be merged with the current style
     * @returns this
     */
    setLabelsTextStyle(textstyle: TextStyle | string | TextStyle.Options, merge?: boolean): this;
    /**
     * return textstyle of labels
     */
    getLabelsTextStyle(): TextStyle;
    /**
     * Gets hit test result (at given device coordinates) in the form of array of Points (in general case)<br>
     * Each found point's getX() mean index of column, correspondingly, getY() means index of row
     * @param area model area or position
     * @param [radius] radius of selection (default is "0")
     * @param [ignoreOrientation] Orientation to ignore - this parameter is ignored for arrays of points
     * @param [allowIntersection] allow intersection flag (default is "true")
     * @param [evenOdd] even odd mode
     * @returns hit point(s)' coordinates (indices in `{x; y}`-space); or null if not found
     */
    hitTest(area: Rect | Point, radius?: number, ignoreOrientation?: Orientation, allowIntersection?: boolean, evenOdd?: boolean): Point[] | Point | null;
}
export declare namespace HeatMap {
    /**
     * the data source or options object
     */
    type Options = Shape.Options & OptionsBase & {
        /**
         * the data source
         */
        data?: IDataTable | number[][];
    };
    type OptionsOut = Shape.OptionsOut & OptionsBaseOut;
    /**
     * options
     */
    type OptionsBase = {
        bounds?: Rect;
        /**
         * plot type of column
         */
        colplottype?: PlotType;
        /**
         * plot type of row
         */
        rowplottype?: PlotType;
        /**
         * minimum value limit in data source
         */
        min?: number;
        /**
         * maximum value limit in data source
         */
        max?: number;
        /**
         * offset of x axis
         */
        offsetx?: number | number[];
        /**
         * offset of y axis
         */
        offsety?: number | number[];
        /**
         * flag to keep model limits
         */
        keepmodellimits?: boolean;
        /**
         * options for labels
         */
        labels?: {
            /**
             * visibility of labels
             */
            visible?: boolean;
            /**
             * of labels
             */
            textstyle?: TextStyle;
        };
        /**
         * color provider for rendering heatmap
         */
        colorprovider?: ColorProvider;
    };
    type OptionsBaseOut = Required<Omit<OptionsBase, 'bounds'>>;
    type EventMap = AbstractNode.EventMap & {
        [Events.ModelLimitsChanged]: void;
    };
}
