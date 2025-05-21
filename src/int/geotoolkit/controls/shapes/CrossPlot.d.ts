import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import { RectangularShape } from '@int/geotoolkit/scene/shapes/RectangularShape';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Area } from '@int/geotoolkit/util/Area';
import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { Point } from '@int/geotoolkit/util/Point';
import { Rect } from '@int/geotoolkit/util/Rect';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { INumericalDataSeries } from '@int/geotoolkit/data/INumericalDataSeries';
import type { AbstractDataSeries } from '@int/geotoolkit/data/AbstractDataSeries';
/**
 * Cross plot is a two dimensional chart, that uses horizontal and vertical axes to plot the data points. <br/>
 * Crossplot shows how much one variable is affected by another. The relationship between two variables is called their correlation. </br>
 * Crossplots usually consist of a large body of data. <br>
 * The closer the data points plotted as making a straight line, the higher the correlation between variables.<br/>
 * geotoolkit.controls.shapes.CrossPlot is used internally by the {@link @int/geotoolkit/widgets/CrossPlot~CrossPlot}.
 */
export declare class CrossPlot extends RectangularShape {
    constructor(options?: CrossPlot.Options);
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: CrossPlot.Options): this;
    /**
     * Modifies the crossplot content, the content of the given object will be merged with the current state of the shape.
     * IE: If you pass only one parameter, all the others will remain unchanged.
     * @param data data
     * @returns this
     */
    setData(data: CrossPlot.Options): this;
    /**
     * Get Data
     */
    getData(): CrossPlot.Data;
    /**
     * Return ColorProvider
     * @returns colorProvider
     */
    getColorProvider(): ColorProvider;
    /**
     * Return false if bounds is equal to zero
     */
    isEmpty(): boolean;
    /**
     * Update limits
     * @returns result true if worked
     */
    updateLimits(): boolean;
    setHighLightColors(colors: Record<string, RgbaColor>): this;
    /**
     * Sets the painter that will be used to draw crossplot points
     * @param painter The symbol painter function to draw
     */
    setSymbolPainter(painter: SymbolShape.Painter): this;
    /**
     * Get the current painter used to draw points
     */
    getSymbolPainter(): SymbolShape.Painter;
    render(context: RenderingContext): void;
    /**
     * Returns if clipping is enabled or not for this node.
     */
    isClippingEnabled(): boolean;
    /**
     * Enables or disables clipping of this node. If enabled,
     * shapes will not be rendered outside of its bounds.
     *
     * @param doClip enable clipping on this node
     */
    enableClipping(doClip: boolean): this;
    /**
     * Gets Highlighted Indices
     */
    getHighlightedIndices(): number[];
    /**
     * Gets symbol shape by index
     */
    getSymbolShape(index: number): SymbolShape;
    /**
     * Highlights the selected area
     * @param rect search area
     * @param reset un-highlights previously selected indices
     */
    highlightArea(rect: Rect, reset: boolean): this;
    /**
     * Highlights the selected indices
     * @param indices indices to be highlighted
     * @param reset un-highlights previously selected indices
     */
    highlightIndices(indices: number[], reset: boolean): this;
    /**
     * Return indices in search area
     * @param area search area
     * @param includeSize true for symbol size(s) to be included in the search, false by default
     */
    getIndicesAt(area: Area, includeSize?: boolean): number[];
    /**
     * Return points in search area
     * @param rect search area
     */
    getPointsAt(rect: Rect): {
        x: number;
        y: number;
        z: number;
    }[];
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): CrossPlot.OptionsOut;
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param [radius] radius of selection
     * @param [ignoreOrientation] Orientation to ignore - this parameter is ignored for arrays of points
     * @returns a collection of selected data
     */
    hitTest(area: Rect | Point, radius?: number, ignoreOrientation?: Orientation): {
        indices: number[];
    } | null;
}
export declare namespace CrossPlot {
    type Options = RectangularShape.Options & {
        /**
         * The x object containing values, min and max
         */
        x?: {
            /**
             * The x values
             */
            data?: number[] | (INumericalDataSeries & AbstractDataSeries);
            /**
             * The x minimum to use, can be used to clip the data
             */
            min?: number;
            /**
             * The x maximum to use, can be used to clip the data
             */
            max?: number;
        };
        /**
         * The y object containing values, min and max
         */
        y?: {
            /**
             * The y values
             */
            data?: number[] | (INumericalDataSeries & AbstractDataSeries);
            /**
             * The y minimum to use, can be used to clip the data
             */
            min?: number;
            /**
             * The y maximum to use, can be used to clip the data
             */
            max?: number;
        };
        /**
         * The z object containing values, min and max
         */
        z?: {
            /**
             * The z values
             */
            data?: number[] | (INumericalDataSeries & AbstractDataSeries);
        };
        /**
         * The dynamic size object containing info for symbols size dimension
         */
        size?: {
            /**
             * The size values
             */
            data?: number[] | (INumericalDataSeries & AbstractDataSeries);
            /**
             * The minimum size value to use, can be used to clip the data
             */
            min?: number;
            /**
             * The maximum size value to use, can be used to clip the data
             */
            max?: number;
            /**
             * The symbol size for minimum value (in device)
             */
            minsymbolsize?: number;
            /**
             * The symbol size for maximum value (in device)
             */
            maxsymbolsize?: number;
        };
        /**
         * The dynamic symbol painters object containing info for symbols painters dimension
         */
        symbol?: {
            /**
             * The symbol painters values
             */
            data?: number[] | (INumericalDataSeries & AbstractDataSeries);
            /**
             * The painters list to use for symbols
             */
            painters?: SymbolShape.Painter[];
            /**
             * The ranges (either [from, to] segments or constant values) for each painter to use
             */
            ranges?: (number | [
                number,
                number
            ])[];
        };
        /**
         * The x values
         */
        datax?: number[] | (INumericalDataSeries & AbstractDataSeries);
        /**
         * The x minimum to use, can be used to clip the data
         */
        minx?: number;
        /**
         * The x maximum to use, can be used to clip the data
         */
        maxx?: number;
        /**
         * The y values
         */
        datay?: number[] | (INumericalDataSeries & AbstractDataSeries);
        /**
         * The y minimum to use, can be used to clip the data
         */
        miny?: number;
        /**
         * The y maximum to use, can be used to clip the data
         */
        maxy?: number;
        /**
         * The z values
         */
        dataz?: number[] | (INumericalDataSeries & AbstractDataSeries);
        /**
         * True to logarithm x values, false otherwise
         */
        logx?: boolean;
        /**
         * True to logarithm y values, false otherwise
         */
        logy?: boolean;
        /**
         * True to logarithm z values, false otherwise
         */
        logz?: boolean;
        /**
         * The colorProvider used to color points based on their Z value
         */
        colorprovider?: ColorProvider;
        /**
         * The color to be used if there is no ColorProvider provided or if a point has no valid Z value
         */
        defaultcolor?: string;
        /**
         * The color of line to be used in symbol
         */
        defaultlinecolor?: string;
        /**
         * The painter to draw symbols
         */
        painter?: SymbolShape.Painter;
        /**
         * The symbol size in pixel
         */
        symbolsize?: number;
        /**
         * The color to use for highlighted shapes
         */
        highlightcolor?: string;
    };
    /**
     * data
     */
    type Data = {
        /**
         * The x values
         */
        datax: number[];
        /**
         * The x minimum to use, can be used to clip the data
         */
        minx: number;
        /**
         * The x maximum to use, can be used to clip the data
         */
        maxx: number;
        /**
         * The y values
         */
        datay: number[];
        /**
         * The y minimum to use, can be used to clip the data
         */
        miny: number;
        /**
         * The y maximum to use, can be used to clip the data
         */
        maxy: number;
        /**
         * The z values
         */
        dataz: null | number[];
        /**
         * The dynamic size object containing info for symbols size dimension
         */
        size: {
            /**
             * The size values
             */
            data: null | number[];
            /**
             * The minimum size value to use, can be used to clip the data
             */
            min: number;
            /**
             * The maximum size value to use, can be used to clip the data
             */
            max: number;
            /**
             * The symbol size for minimum value (in device)
             */
            minsymbolsize: number;
            /**
             * The symbol size for maximum value (in device)
             */
            maxsymbolsize: number;
        };
        /**
         * The dynamic symbol painters object containing info for symbols painters dimension
         */
        symbol: {
            /**
             * The symbol painters values
             */
            data: null | number[];
            /**
             * The painters list to use for symbols
             */
            painters: SymbolShape.Painter[];
            /**
             * The ranges (either [from, to] segments or constant values) for each painter to use
             */
            ranges: (number | [
                number,
                number
            ])[];
        };
        /**
         * The colorProvider used to color points based on their Z value
         */
        colorprovider: ColorProvider;
        /**
         * The color to use if there is no ColorProvider provided or if a point has no valid Z value
         */
        defaultcolor: RgbaColor;
        /**
         * The color of line to be used in symbol
         */
        defaultlinecolor: RgbaColor | null;
        /**
         * The color to use for highlighted shapes
         */
        highlightcolor: RgbaColor;
        /**
         * The symbol size in pixel
         */
        symbolsize: number;
        /**
         * The painter to draw symbols
         */
        painter: SymbolShape.Painter;
    };
    /**
     * properties
     */
    type OptionsOut = RectangularShape.OptionsOut & {
        /**
         * The x object containing values, min and max
         */
        x?: {
            /**
             * The x minimum to use, can be used to clip the data
             */
            min?: number;
            /**
             * The x maximum to use, can be used to clip the data
             */
            max?: number;
        };
        /**
         * The y object containing values, min and max
         */
        y?: {
            /**
             * The y minimum to use, can be used to clip the data
             */
            min?: number;
            /**
             * The y maximum to use, can be used to clip the data
             */
            max?: number;
        };
        /**
         * The dynamic size object containing info for symbols size dimension
         */
        size?: {
            /**
             * The minimum size value to use, can be used to clip the data
             */
            min?: number;
            /**
             * The maximum size value to use, can be used to clip the data
             */
            max?: number;
            /**
             * The symbol size for minimum value (in device)
             */
            minsymbolsize?: number;
            /**
             * The symbol size for maximum value (in device)
             */
            maxsymbolsize?: number;
        };
        /**
         * The x minimum to use, can be used to clip the data
         */
        minx?: number;
        /**
         * The x maximum to use, can be used to clip the data
         */
        maxx?: number;
        /**
         * The y minimum to use, can be used to clip the data
         */
        miny?: number;
        /**
         * The y maximum to use, can be used to clip the data
         */
        maxy?: number;
        /**
         * The colorProvider used to color points based on their Z value
         */
        colorprovider?: ColorProvider;
        /**
         * The color to be used if there is no ColorProvider provided or if a point has no valid Z value
         */
        defaultcolor?: string;
        /**
         * The color of line to be used in symbol
         */
        defaultlinecolor?: string;
        /**
         * The painter to draw symbols
         */
        painter?: SymbolShape.Painter;
        /**
         * The symbol size in pixel
         */
        symbolsize?: number;
        /**
         * The color to use for highlighted shapes
         */
        highlightcolor?: string;
    };
}
