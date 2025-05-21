/**
 * @module geotoolkit/controls/shapes/RoseChart
 */
import { Iterator } from '@int/geotoolkit/util/iterator';
import { Point } from '@int/geotoolkit/util/Point';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { PolarGrid } from '@int/geotoolkit/controls/shapes/PolarGrid';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Enum for RoseMode
 * @enum
 * @readonly
 */
export declare enum RoseMode {
    /**
     * bar
     */
    Bar = "bar",
    /**
     * histogram
     */
    Histogram = "histogram",
    /**
     * slices, each value can has own start and end angle, value, fillstyle and linestyle properties
     */
    Slices = "slices"
}
declare type SliceData = {
    fillstyle?: FillStyle.Type;
    linestyle?: LineStyle.Type;
    start?: number;
    end?: number;
    value?: number;
};
/**
 * A Rose Chart is a circular graph used for data comparison. Each category or interval in data is divided into equal segments on the radial chart.<br>
 * How far each segment extends from the center, in proportion to the value it represents, depends on a polar axis.<br>
 */
export declare class RoseChart extends Shape {
    constructor(options?: RoseChart.Options | LineStyle.Type);
    /**
     * Sets properties
     * @param [properties] options object
     * @returns this
     */
    setProperties(properties?: RoseChart.Options): this;
    /**
     * Returns properties
     * @returns options object
     */
    getProperties(): RoseChart.OptionsOut;
    /**
     * Set fill styles
     * @param [styles] line styles
     */
    setFillStyles(styles?: Iterator<FillStyle.Type> | FillStyle.Type[] | FillStyle.Type): this;
    /**
     * Return iterator with fill styles
     * @param [func] to filter fill styles
     */
    getFillStyles(func?: (item: FillStyle) => boolean): Iterator<FillStyle>;
    /**
     * Return fill style by specified index if any, or background fill style
     * @param [index] index of the fill style
     * @returns background fill style
     */
    getFillStyle(index?: number): FillStyle | null;
    /**
     * Returns amount of known fill styles
     */
    getFillStylesCount(): number;
    /**
     * Set line styles
     * @param [styles] line styles
     */
    setLineStyles(styles?: Iterator<LineStyle.Type> | LineStyle.Type[] | LineStyle.Type): this;
    /**
     * Return iterator with fill styles
     * @param [func] to filter fill styles
     */
    getLineStyles(func?: (item: LineStyle) => boolean): Iterator<LineStyle>;
    /**
     * Return line style by specified index if any, or border line style
     * @param [index] index of the line style
     * @returns border line style
     */
    getLineStyle(index?: number): LineStyle | null;
    /**
     * Returns amount of known line styles
     */
    getLineStylesCount(): number;
    /**
     * Set values
     * @param values values
     * @returns this
     */
    setValues(values: RoseChart.OptionsBase['values']): this;
    /**
     * Set rose mode
     * @param mode rose mode
     * @returns this
     */
    setRoseMode(mode: RoseMode): this;
    /**
     * Return rose mode
     * @returns mode
     */
    getRoseMode(): RoseMode;
    /**
     * Set model radius
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
     * Set the data to be plotted in the rose chart
     *
     * @param data Data to be charted in histogram
     * @returns this
     */
    setData(data: RoseChart.OptionsBase): this;
    /**
     * Returns rose chart options
     */
    getOptions(): RoseChart.OptionsBase;
    /**
     * Return bin count
     * @returns bincount binCount count
     */
    getBinCount(): number;
    /**
     * Set binCount count
     * @param binCount binCount count
     * @returns this
     */
    setBinCount(binCount: number): this;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bounds of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Returns current bounds
     *
     * @returns bounds
     */
    getBounds(): Rect;
    render(context: RenderingContext): void;
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns a collection of selected data indices
     */
    hitTest(area: Rect | Point, radius?: number): number[];
    /**
     * Highlights sectors for selected indices
     * @param indices indices to be highlighted
     * @param [append] un-highlights previously selected indices
     * @returns this
     */
    highlightIndices(indices: number[], append?: boolean): this;
    /**
     * Convert model radius to outer radius
     * @param value value of the outer radius
     */
    modelToOuterRadius(value: number): number;
}
export declare namespace RoseChart {
    /**
     * options object
     */
    type Options = Omit<Shape.Options, 'name'> & OptionsBase;
    /**
     * options object
     */
    type OptionsOut = Omit<Shape.OptionsOut, 'name'> & Required<OptionsBase>;
    /**
     * Data to be charted in histogram
     */
    type OptionsBase = {
        /**
         * name of the rose chart diagram
         */
        name?: string;
        /**
         * polar grid
         */
        polargrid?: PolarGrid;
        /**
         * Rosemode
         */
        rosemode?: RoseMode;
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
         * center
         */
        center?: Point;
        /**
         * background fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * border line style
         */
        linestyle?: LineStyle.Type;
        /**
         * values values
         */
        values?: number[];
        /**
         * data object
         */
        data?: {
            /**
             * bins bin count
             */
            bins?: number;
            /**
             * an array of fill styles
             */
            fillstyles?: FillStyle.Type[] | Iterator<FillStyle.Type>;
            fillstyle?: FillStyle.Type;
            /**
             * an array of line styles
             */
            linestyles?: LineStyle.Type[] | Iterator<LineStyle.Type>;
            linestyle?: LineStyle.Type;
            values?: number[] | SliceData[];
        };
        /**
         * creates fillstyle for selection
         * @param style original fillstyle
         * @returns selected fillstyle
         */
        createselectedstyle?: (style: FillStyle) => FillStyle;
    };
}
export {};
