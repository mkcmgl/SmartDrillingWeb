import { Node } from '@int/geotoolkit/scene/Node';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AxisMappingDimension } from '@int/geotoolkit/axis/AxisMappingDimension';
import type { AxisDimension } from '@int/geotoolkit/axis/AxisDimension';
import { IModel } from '@int/geotoolkit/scene/IModel';
/**
 * Creates a grid that will fill its parent container with grid lines
 */
export declare class Grid extends Node implements IModel {
    constructor(options?: Grid.Options);
    constructor(htg: TickGenerator, vtg?: TickGenerator);
    clone(): Grid;
    protected copyConstructor(src: Grid, deepCopy?: boolean): this;
    render(context: RenderingContext): void;
    /**
     * Set infinity mode flag to draw axis outside the model limits
     * @param infinityMode infinity mode flag
     * @returns this
     */
    setInfiniteMode(infinityMode: boolean): this;
    /**
     * Return infinity mode flag
     * @returns flag
     */
    getInfiniteMode(): boolean;
    /**
     * Gets bounds in the parent coordinates
     *
     * @returns a bounds in the parent coordinates.
     */
    getBounds(): Rect;
    getModelLimits(): Rect;
    /**
     * Gets line style for the specified tick type and orientation
     * @param orient orientation
     * @param tickGrade tick type, which supports tick generator like "major", "minor"
     */
    getLineStyle(orient: Orientation | string, tickGrade: string): LineStyle | null;
    /**
     * Sets line style for the specified tick type and orientation
     * @param orient orientation
     * @param tickGrade tick type, which supports tick generator like "major", "minor"
     * @param lineStyle line style for the specified tick type
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(orient: Orientation | string, tickGrade: string, lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return tick generator
     *
     * @param orient orientation
     * @returns tickgenerator
     */
    getTickGenerator(orient: Orientation | string): TickGenerator | null;
    /**
     * Sets tick generator
     *
     * @param orient orientation
     * @param tg a new tick generator
     */
    setTickGenerator(orient: Orientation | string, tg: TickGenerator | null): this;
    /**
     * Returns axis dimension to synchronize tick generator parameters with external source
     * @param orient orientation
     */
    getAxisDimension(orient: Orientation | string): AxisMappingDimension;
    /**
     * Sets axis dimension to synchronize tick generator parameters with external source
     * @param orient orientation
     * @param dimension dimension
     */
    setAxisDimension(orient: Orientation | string, dimension: AxisMappingDimension): this;
    /**
     * Called if axis dimension is changed
     * @param dimension dimension
     */
    protected onAxisDimensionChanged(dimension: AxisDimension): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Grid.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: Grid.Options): this;
}
export declare namespace Grid {
    /**
     * horizontal tick generator or object with all props
     */
    type Options = Node.Options & {
        /**
         * horizontal tick generator
         */
        htg?: TickGenerator;
        /**
         * vertical tick generator
         */
        vtg?: TickGenerator;
        /**
         * line style for horizontal ticks
         */
        hstyles?: Record<string, LineStyle.Type>;
        /**
         * line style for vertical ticks
         */
        vstyles?: Record<string, LineStyle.Type>;
        /**
         * infinity mode flag
         */
        infinity?: boolean;
    };
    /**
     * properties
     */
    type OptionsOut = Node.OptionsOut & {
        /**
         * horizontal tick generator
         */
        htg: TickGenerator;
        /**
         * vertical tick generator
         */
        vtg: TickGenerator;
        /**
         * line style for horizontal ticks
         */
        hstyles: Record<string, LineStyle>;
        /**
         * line style for vertical ticks
         */
        vstyles: Record<string, LineStyle>;
        /**
         * infinity mode flag
         */
        infinity: boolean;
    };
}
