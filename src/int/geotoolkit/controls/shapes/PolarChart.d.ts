/**
 * @module geotoolkit/controls/shapes/PolarChart
 */
import { Point } from '@int/geotoolkit/util/Point';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { PolarGrid } from '@int/geotoolkit/controls/shapes/PolarGrid';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
/**
 * A Polar Chart is a circular graph used for data comparison.
 */
export declare class PolarChart extends Shape {
    constructor(options?: PolarChart.Options | LineStyle.Type);
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     */
    setProperties(properties?: PolarChart.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): PolarChart.OptionsOut;
    /**
     * set model radius
     * @param radius model radius
     * @returns this
     */
    setModelRadius(radius: number): this;
    /**
     * Return model radius
     * @returns radius
     */
    getModelRadius(): number;
    /**
     * Set the data to be plotted in chart
     *
     * @param data polar chart options
     * @returns this
     */
    setData(data: PolarChart.OptionsBase): this;
    /**
     * Returns current bounds
     *
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * Return array of chart options
     * @deprecated since 4.0 use getProperties instead
     * @returns options
     */
    getOptions(): PolarChart.Options;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect): this;
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
     * @returns a collection of objects, contains selection info `{visual: PolarChart, series: number, indices: number[], points: Array.<*>}`
     */
    hitTest(area: Rect | Point, radius?: number): PolarChart.Hits;
    render(context: RenderingContext): void;
    /**
     * Returns associated polar grid
     * @returns polar grid
     */
    getPolarGrid(): PolarGrid;
    /**
     * Converting a point from polar to Cartesian coordinates, where x and y are offsets from the polar grid center
     * @param r radius
     * @param theta angle in grad
     */
    polarToCartesian(r: number, theta: number): Point;
    /**
     * Convert point from polar to cartesian coordinate system
     * @param x x coordinate (offset from center point)
     * @param y coordinate (offset from center point)
     */
    cartesianToPolar(x: number, y: number): Point;
    /**
     * Convert model radius to outer radius
     * @param value value of the outer radius
     * @returns result
     */
    modelToOuterRadius(value: number): number;
}
export declare namespace PolarChart {
    type Visual = {
        name?: string;
        data: {
            radius: number[];
            angle: number[];
            selected?: boolean[];
        };
        linestyle: LineStyle.Type;
        fillstyle: FillStyle.Type;
        symbol?: SymbolShape;
        hightlightedsymbol?: SymbolShape;
    };
    type Options = Shape.Options & Omit<OptionsBase, 'name'>;
    /**
     * An object containing the properties to set
     */
    type OptionsOut = Shape.OptionsOut & Omit<OptionsBase, 'name' | 'data'>;
    /**
     * polar chart options
     */
    type OptionsBase = {
        /**
         * chart name
         */
        name?: string;
        /**
         * chart grid
         */
        polargrid?: PolarGrid;
        /**
         * outer radius
         */
        outerradius?: number;
        /**
         * model radius
         */
        modelradius?: number;
        /**
         * start angle
         */
        startangle?: number;
        /**
         * center point
         */
        center?: Point;
        /**
         * to be charted in polar chart
         */
        data?: Visual[];
    };
    type Hits = {
        visual: PolarChart;
        series: number;
        indices: number[];
        points: {
            index: number;
            angle: number;
            value: number;
        }[];
    };
}
