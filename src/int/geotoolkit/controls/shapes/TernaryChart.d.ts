import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { TernaryGrid } from '@int/geotoolkit/controls/shapes/TernaryGrid';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Point } from '@int/geotoolkit/util/Point';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
/**
 * A Ternary Chart is displays data on ternary grid. Reference to ternary grid should be provided
 */
export declare class TernaryChart extends Shape {
    constructor(options?: TernaryChart.Options | LineStyle.Type);
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     */
    setProperties(properties?: TernaryChart.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns ternary chart options
     */
    getProperties(): TernaryChart.OptionsOut;
    /**
     * Set the data to be plotted in chart
     *
     * @param [data] ternary chart options
     */
    setData(data?: TernaryChart.Data): this;
    /**
     * Set the data to be plotted in chart
     *
     * @returns ternary chart data
     */
    getData(): TernaryChart.Data;
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
     * @returns this
     */
    setBounds(bounds: Rect): this;
    render(context: RenderingContext): void;
    /**
     * Reset highlighting
     */
    resetHighlighting(): void;
    /**
     * Highlights the selected indices
     * @param indices indices to be highlighted
     * @param [series] series number
     * @param [reset] un-highlights previously selected indices
     */
    highlightIndices(indices: number[], series?: number, reset?: boolean): this;
    /**
     * Hit test in the device coordinate
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns a collection of objects
     */
    hitTest(area: Rect | Point, radius?: number): TernaryChart.Hits;
}
export declare namespace TernaryChart {
    type Options = Shape.Options & {
        /**
         * reference to ternary grid
         */
        ternarygrid?: TernaryGrid;
        /**
         * contains list of visuals in this chart
         */
        data?: Visual[];
    };
    /**
     * ternary chart options
     */
    type OptionsOut = Shape.OptionsOut & {
        /**
         * reference to ternary grid
         */
        ternarygrid?: TernaryGrid;
    };
    type Data = {
        /**
         * name of ternary chart object
         */
        name?: string;
        /**
         * reference to ternary grid
         */
        ternarygrid?: TernaryGrid;
        /**
         * contains list of visuals in this chart
         */
        data?: Visual[];
    };
    /**
     * Defines Ternary Chart Visual
     */
    type Visual = {
        /**
         * string contains name of visual
         */
        name?: string;
        /**
         * object contains top, left or right value arrays, only two of them are necessary
         * size and color are optional
         */
        values?: {
            /**
             * top values
             */
            top?: number[];
            /**
             * left values
             */
            left?: number[];
            /**
             * right values
             */
            right?: number[];
            /**
             * size values
             */
            size?: number[];
            /**
             * color values
             */
            color?: number[];
        };
        /**
         * symbol to display data points
         */
        symbol?: SymbolShape;
        colorprovider?: ColorProvider;
        /**
         * symbol to be used when mouse cursor hover over data point
         */
        hightlightedsymbol?: SymbolShape;
        /**
         * must be provided if points should be connected with line
         */
        linestyle?: LineStyle.Type;
        /**
         * must be provided if polygon should be filled
         */
        fillstyle?: FillStyle.Type;
    };
    type Hits = {
        series: number;
        indices: number[];
        points: {
            index: number;
            top: number;
            left: number;
            right: number;
            color: number;
            size: number;
        }[];
    };
}
