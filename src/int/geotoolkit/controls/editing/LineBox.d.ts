import { GhostBearingHandle } from '@int/geotoolkit/controls/editing/GhostBearingHandle';
import { Point } from '@int/geotoolkit/util/Point';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Defines a shape to draw handles for line
 */
export declare class LineBox extends GhostBearingHandle {
    /**
     * Line box
     * @param [params] object with properties
     */
    constructor(params?: LineBox.Options);
    /**
     * Line box
     * @param [x1] x coordinate of the start
     * @param [y1] y coordinate of the start
     * @param [x2] x coordinate of the end
     * @param [y2] y coordinate of the end
     */
    constructor(x1?: number, y1?: number, x2?: number, y2?: number);
    /**
     * Gets properties pertaining to this handle
     */
    getProperties(): LineBox.OptionsOut;
    /**
     * Sets properties pertaining to this object
     * @param props An object containing the properties to set
     * @returns this
     */
    setProperties(props?: LineBox.Options): this;
    render(context: RenderingContext): void;
    /**
     * Sets two points defining the line, or one of the edges
     * @param point1 The first point defining the line (from), or an object with points
     * @param [point2] The second point defining the line (to)
     * @returns this
     */
    setLine(point1: LineBox.LinePoints | Point, point2?: Point): this;
    /**
     * Returns the point defining "From" coordinate of the line
     */
    getFrom(): Point;
    /**
     * Returns the point defining "To" coordinate of the line
     */
    getTo(): Point;
    /**
     * Changes the line to match its center point with the provided point. Length remains the same
     * @param anchor center point for line box
     * @returns this
     */
    setAnchor(anchor: Point): this;
}
export declare namespace LineBox {
    /**
     * x coordinate of the start or a object with properties
     */
    export type Options = GhostBearingHandle.Options & OptionsBase;
    export type OptionsOut = GhostBearingHandle.OptionsOut & OptionsBase;
    type OptionsBase = {
        /**
         * x coordinate of the start
         */
        x1?: number;
        /**
         * y coordinate of the start
         */
        y1?: number;
        /**
         * x coordinate of the end
         */
        x2?: number;
        /**
         * y coordinate of the end
         */
        y2?: number;
        /**
         * line width
         */
        linewidth?: number;
    };
    /**
     * The first point defining the line (from), or an object with points
     */
    export type LinePoints = {
        /**
         * The first point defining the line (from)
         */
        from?: Point;
        /**
         * The second point defining the line (to)
         */
        to?: Point;
    };
    export {};
}
