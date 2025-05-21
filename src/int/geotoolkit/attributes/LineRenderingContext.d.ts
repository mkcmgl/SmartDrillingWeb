/**
 * @module geotoolkit/attributes/LineRenderingContext
 */
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Represents context to render line
 */
export declare abstract class LineRenderingContext {
    protected constructor(context?: RenderingContext);
    /**
     * Set line style
     * @param style a line style
     * @param [area] area to apply fill property of line style
     */
    abstract setLineStyle(style: LineStyle, area?: Rect): this;
    /**
     * Draw line
     * @param x1 x-position of start point
     * @param y1 y-position of start point
     * @param x2 x-position of end point
     * @param y2 y-position of end point
     */
    abstract drawLine(x1: number, y1: number, x2: number, y2: number): void;
}
