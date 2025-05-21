import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { AxisMappingDimension } from '@int/geotoolkit/axis/AxisMappingDimension';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Area } from '@int/geotoolkit/util/Area';
import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import { Point } from '@int/geotoolkit/util/Point';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * Enum for Boxplot.BoxValueLocation
 * @enum
 * @readonly
 */
export declare enum LabelLocation {
    /**
     * on top of bubble
     */
    Top = "Top",
    /**
     * below the bubble
     */
    Bottom = "Bottom",
    /**
     * on center of the bubble
     */
    Center = "Center"
}
export declare class BubbleRect extends Rect {
    constructor(x1: number, y1: number, x2: number, y2: number);
    get index(): number;
    set index(value: number);
    get datax(): number;
    set datax(value: number);
    get datay(): number;
    set datay(value: number);
}
/**
 * A bubble chart is a variation of a scatter chart in which the data points are replaced with bubbles, <br>
 * and an additional dimension of the data is represented in the size of the bubbles. <br>
 * a bubble chart plots x values, y values, z (color) values and s (size) values. <br>
 * geotoolkit.controls.shapes.BubbleChart is used internally by the {@link @int/geotoolkit/widgets/BubbleChart~BubbleChart}.
 */
export declare class BubbleChart extends ScaledShape {
    constructor(options?: BubbleChart.Options, parentbounds?: Rect);
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     */
    setProperties(properties?: BubbleChart.Options): this;
    /**
     * Get data
     * @param [ignoreFixedLimit] if it is true, return real limit for each axis, otherwise return fixed limit
     * @param [ignoreAutoLimit] ignore the auto limits
     */
    getData(ignoreFixedLimit?: boolean, ignoreAutoLimit?: boolean): BubbleChart.Data;
    /**
     * Add values to chart
     * @param amount the amount of added values
     */
    addData(amount: number): void;
    /**
     * remove data from chart
     * @param from index where starting remove
     * @param amount amount of data to be removed
     */
    removeData(from: number, amount: number): void;
    /**
     * Set the real bounds (real size in pixel) for chart
     * @param parentbounds bounds of the chart in pixel
     * @returns this
     */
    setParentBounds(parentbounds: Rect): this;
    /**
     * Get the real bounds of chart in pixel
     */
    getParentBounds(): Rect;
    /**
     * Set the bounds of the chart in model unit
     * @param bounds bounds of the chart in model unit
     */
    setBounds(bounds: Rect): boolean;
    /**
     * Get the bounds of the chart in model unit
     */
    getBounds(): Rect;
    /**
     * Update the model bounds
     * @param [parentbounds] bounds of parent node
     * @param [start] the starting index for incrementally calculating new model bounds
     * @param [end] the ending index for incrementally calculating new model bounds
     */
    updateLimits(parentbounds?: Rect, start?: number, end?: number): void;
    /**
     * Return axis dimension for X axis
     */
    getAxisDimensionX(): AxisMappingDimension;
    /**
     * Return axis dimension for Y axis
     */
    getAxisDimensionY(): AxisMappingDimension;
    /**
     * Invalidate cache for rebuilding cache before rendering
     */
    invalidateCache(): void;
    render(context: RenderingContext): void;
    /**
     * get selected symbols
     * @param area selected model area
     * @param context rendering context or transformation
     * @param sort sort result by distance
     * @returns array of selected symbol
     */
    getIndicesAt(area: Area, context: RenderingContext | Transformation, sort?: boolean): BubbleRect[];
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns a collection of selected data
     */
    hitTest(area: Rect | Point, radius?: number): BubbleRect[] | null;
    /**
     * Gets symbol shape by index
     */
    getSymbolShape(index: number): SymbolShape | null;
}
export declare namespace BubbleChart {
    /**
     * options
     */
    type Options = Shape.Options & {
        /**
         * Data series x
         */
        datax?: number[];
        /**
         * The x minimum to use, can be used to clip the data
         */
        minx?: number;
        /**
         * The x maximum to use, can be used to clip the data
         */
        maxx?: number;
        /**
         * automatically adjust x limit to contain all symbols in x axis direction without clipping anyone
         */
        autominmaxx?: boolean;
        /**
         * enable calculation of neat limit for series x
         */
        neatlimitx?: boolean;
        /**
         * option for neat limits calculates only step and hide edge ticks. It is enabled only if neatlimits is set
         */
        preciselimitx?: boolean;
        /**
         * desired minimum distance between ticks in pixels for series x
         */
        minspanx?: number;
        /**
         * Data series y
         */
        datay?: number[];
        /**
         * The y minimum to use, can be used to clip the data
         */
        miny?: number;
        /**
         * The y maximum to use, can be used to clip the data
         */
        maxy?: number;
        /**
         * automatically adjust y limit to contain all symbols in  axis direction without clipping anyone
         */
        autominmaxy?: boolean;
        /**
         * enable calculation of neat limit for series y
         */
        neatlimity?: boolean;
        /**
         * option for neat limits calculates only step and hide edge ticks. It is enabled only if neatlimits is set
         */
        preciselimity?: boolean;
        /**
         * desired minimum distance between ticks in pixels for series y
         */
        minspany?: number;
        /**
         * Data series s
         */
        datas?: number[];
        /**
         * The s minimum to use
         */
        mins?: number;
        /**
         * The s maximum to use
         */
        maxs?: number;
        /**
         * enable automatically calculate minimum and maximum of series s
         */
        autominmaxs?: boolean;
        /**
         * Data series z
         */
        dataz?: number[];
        /**
         * The z minimum to use
         */
        minz?: number;
        /**
         * The z maximum to use
         */
        maxz?: number;
        /**
         * enable automatically calculate minimum and maximum of series z
         */
        autominmaxz?: boolean;
        /**
         * text value of labels
         */
        labels?: string[] | number[];
        /**
         * The relative location of label to bubble
         */
        labellocation?: string;
        /**
         * The relative location of label to bubble when first location is unable to show the label completely
         */
        secondarylocation?: string;
        /**
         * the text style of labels
         */
        labeltextstyle?: TextStyle.Type;
        /**
         * the padding between labels and bubble or view boundary
         */
        labelpadding?: number;
        /**
         * flag determine the visibility of labels
         */
        labelvisible?: boolean;
        /**
         * the min length of four data series
         */
        validlength?: number;
        /**
         * minimum size (side length of square) of symbol
         */
        minsize?: number;
        /**
         * maximum size (side length of square) of symbol
         */
        maxsize?: number;
        /**
         * the number of bins for showing different degree of size, default value is the number of items in data series
         */
        sizebin?: number;
        /**
         * The colorProvider used to color points based on their Z value
         */
        colorprovider?: ColorProvider;
        /**
         * The fillstyle to be used if there is no ColorProvider provided or if a point has no valid Z value
         */
        defaultfillstyle?: FillStyle.Type;
        /**
         * The linestyle to be used to render symbol
         */
        defaultlinestyle?: LineStyle.Type;
        /**
         * The painter to draw symbols
         */
        symbol?: SymbolShape.PainterFunction;
        /**
         * determine if the shape is selectable
         */
        selectable?: boolean;
        /**
         * width cache limit
         */
        cachewidthlimit?: number;
        /**
         * height cache limit
         */
        cacheheightlimit?: number;
    };
    type Data = {
        /**
         * Data series x
         */
        datax?: number[];
        /**
         * Return the fixed x minimum limit, the real x minimum model limit, or the minimum of x in dataset depend on ignoreFixedLimit and ignoreAutoLimit
         */
        minx?: number;
        /**
         * Return the fixed x maximum limit, the real x maximum model limit, or the maximum of x in dataset depend on ignoreFixedLimit and ignoreAutoLimit
         */
        maxx?: number;
        /**
         * automatically adjust x limit to contain all symbols in x axis direction without clipping anyone
         */
        autominmaxx?: boolean;
        /**
         * enable calculation of neat limit for series x
         */
        neatlimitx?: boolean;
        /**
         * option for neat limits calculates for series x only step and hide edge ticks. It is enabled only if neatlimits is set
         */
        preciselimitx?: boolean;
        /**
         * desired minimum distance between ticks in pixels for series x
         */
        minspanx?: number;
        /**
         * Data series y
         */
        datay?: number[];
        /**
         * Return the fixed y minimum limit, the real y minimum model limit, or the minimum of y in dataset depend on ignoreFixedLimit and ignoreAutoLimit
         */
        miny?: number;
        /**
         * Return the fixed y maximum limit, the real y maximum model limit, or the maximum of y in dataset depend on ignoreFixedLimit and ignoreAutoLimit
         */
        maxy?: number;
        /**
         * automatically adjust y limit to contain all symbols in x axis direction without clipping anyone
         */
        autominmaxy?: boolean;
        /**
         * enable calculation of neat limit for series y
         */
        neatlimity?: boolean;
        /**
         * option for neat limits calculates for series y only step and hide edge ticks. It is enabled only if neatlimits is set
         */
        preciselimity?: boolean;
        /**
         * desired minimum distance between ticks in pixels for series y
         */
        minspany?: number;
        /**
         * Data series s
         */
        datas?: number[];
        /**
         * Return the fixed s minimum limit, the real s minimum model limit, or the minimum of s in dataset depend on ignoreFixedLimit and ignoreAutoLimit
         */
        mins?: number;
        /**
         * Return the fixed s maximum limit, the real s maximum model limit, or the maximum of s in dataset depend on ignoreFixedLimit and ignoreAutoLimit
         */
        maxs?: number;
        /**
         * automatically calculate the min and max in s data series
         */
        autominmaxs?: boolean;
        /**
         * automatically calculate the min and max in z data series
         */
        autominmaxz?: boolean;
        /**
         * Data series z
         */
        dataz?: number[];
        /**
         * Return the fixed z minimum limit, the real z minimum model limit, or the minimum of z in dataset depend on ignoreFixedLimit and ignoreAutoLimit
         */
        minz?: number;
        /**
         * Return the fixed z maximum limit, the real z maximum model limit, or the maximum of z in dataset depend on ignoreFixedLimit and ignoreAutoLimit
         */
        maxz?: number;
        /**
         * Data series of label
         */
        labels?: string[] | number[];
        /**
         * The relative location of label to bubble
         */
        labellocation?: string;
        /**
         * The relative location of label to bubble when first location is unable to show the label completely
         */
        secondarylocation?: string;
        /**
         * the text style of labels
         */
        labeltextstyle?: TextStyle;
        /**
         * the padding between labels and bubble or view boundary
         */
        labelpadding?: number;
        /**
         * flag determine the visibility of labels
         */
        labelvisible?: boolean;
        /**
         * the min length of four data series
         */
        validlength?: number;
        /**
         * minimum size (side length of square) of symbol
         */
        minsize?: number;
        /**
         * maximum size (side length of square) of symbol
         */
        maxsize?: number;
        /**
         * the number of bins for showing different degree of size, default value is the number of items in data series
         */
        sizebin?: number;
        /**
         * The colorProvider used to color points based on their Z value
         */
        colorprovider?: ColorProvider;
        /**
         * The fillstyle to be used if there is no ColorProvider provided or if a point has no valid Z value
         */
        defaultfillstyle?: FillStyle;
        /**
         * The linestyle to be used to render symbol
         */
        defaultlinestyle?: LineStyle;
        /**
         * The painter to draw symbols
         */
        symbol?: SymbolShape.PainterFunction;
        /**
         * determine if the shape is selectable
         */
        selectable?: boolean;
    };
}
