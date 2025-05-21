import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { Range } from '@int/geotoolkit/util/Range';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import { Grid } from '@int/geotoolkit/axis/Grid';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { AxisMappingDimension } from '@int/geotoolkit/axis/AxisMappingDimension';
/**
 * Create the standard representation of a well value grid.
 */
export declare class LogGrid extends LogAbstractVisual {
    constructor(options?: LogGrid.Options);
    constructor(htg?: TickGenerator, vtg?: TickGenerator);
    clone(): LogGrid;
    protected copyConstructor(src: LogGrid, deepCopy?: boolean): this;
    /**
     * Gets value grid limits, the limits of this grid inside space
     *
     * @returns the current value limits
     */
    getValueRange(): Range;
    /**
     * Sets value grid limits
     *
     * @param low Lower range boundary or Range instance
     * @param high Upper range boundary
     * @returns this
     */
    setValueRange(low: Range): this;
    setValueRange(low: number, high: number): this;
    /**
     * Retrieves the local transformation of the node which represents multiplication of parent to bounds and
     * contents transformations.
     */
    getWorldTransform(): Transformation;
    /**
     * Return tick generator
     *
     * @param orient orientation
     * @returns tickgenerator
     */
    getTickGenerator(orient: Orientation): TickGenerator | null;
    /**
     * Sets tick generator
     *
     * @param orient orientation
     * @param tg a new tick generator
     */
    setTickGenerator(orient: Orientation, tg: TickGenerator | null): this;
    /**
     * Gets line style for the specified tick type and orientation
     * @param orient orientation
     * @param tickGrade tick type, which supports tick generator like "major", "minor"
     */
    getTickStyle(orient: Orientation | string, tickGrade: string): LineStyle | null;
    /**
     * Sets line style for the specified tick type and orientation
     * @param orient orientation
     * @param tickGrade tick type, which supports tick generator like "major", "minor"
     * @param lineStyle line style for the specified tick type
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setTickStyle(orient: Orientation | string, tickGrade: string, lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Returns axis dimension to synchronize tick generator parameters with external source
     * @param orient orientation
     */
    getAxisDimension(orient: Orientation): AxisMappingDimension;
    /**
     * Sets axis dimension to synchronize tick generator parameters with external source
     * @param orient orientation
     * @param dimension dimension
     */
    setAxisDimension(orient: Orientation, dimension: AxisMappingDimension): this;
    render(context: RenderingContext): void;
}
export declare namespace LogGrid {
    /**
     * An object containing the properties to set
     */
    type Options = LogAbstractVisual.Options & Grid.Options;
}
