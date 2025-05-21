import { GhostBearingHandle } from '@int/geotoolkit/controls/editing/GhostBearingHandle';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Defines a shape to draw handles for rectangle.
 */
export declare class BoxHandle extends GhostBearingHandle {
    /**
     * Box Handle
     * @param [params] object with propertiesner
     */
    constructor(params?: BoxHandle.Options);
    /**
     * Box Handle
     * @param [x1] x coordinate of the top left corner
     * @param [y1] y coordinate of the top left corner
     * @param [x2] x coordinate of the bottom right corner
     * @param [y2] y coordinate of the bottom right corner
     */
    constructor(x1?: number, y1?: number, x2?: number, y2?: number);
    /**
     * Sets properties pertaining to this object
     * @param [props] object with properties
     */
    setProperties(props?: BoxHandle.Options): this;
    /**
     * Invalidate node
     * @param [bounds] optional rectangular area to be invalidated, or force flag if rectangle is empty
     * @param [force] optional boolean parameter that can force invalidation
     * @returns this
     */
    invalidate(bounds?: Rect, force?: boolean): this;
    /**
     * Gets properties pertaining to this handle
     */
    getProperties(): BoxHandle.OptionsOut;
    /**
     * Sets rectangle
     * @param bounds Bounds of rectangle
     */
    setRect(bounds: Rect): this;
    /**
     * Gets rectangle
     * @returns bounds Bounds of rectangle
     */
    getRect(): Rect;
    render(context: RenderingContext): void;
}
export declare namespace BoxHandle {
    /**
     * x coordinate of the top left corner or an object with properties
     */
    type Options = GhostBearingHandle.Options & {
        /**
         * Rect object
         */
        rect?: Rect;
    };
    type OptionsOut = GhostBearingHandle.OptionsOut & {
        /**
         * Rect object
         */
        rect?: Rect;
    };
}
