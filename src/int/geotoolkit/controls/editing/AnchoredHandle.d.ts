import { GhostBearingHandle } from '@int/geotoolkit/controls/editing/GhostBearingHandle';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Point } from '@int/geotoolkit/util/Point';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
/**
 * Implements a handle which has an anchor point and a size. The shape uses symbols to render and accepts painters
 * to change the rendering shape. Anchored handle extends Ghost Bearing Handle, thus handles ghost rendering in device
 * space as well as model space
 */
export declare class AnchoredHandle extends GhostBearingHandle {
    /**
     * Anchored handle
     * @param [params] JSON with handle properties
     */
    constructor(params?: AnchoredHandle.Options);
    /**
     * Anchored handle
     * @param x X coordinate of handle anchor
     * @param y Y coordinate of handle anchor
     * @param [size] The two dimensional size of the anchor
     */
    constructor(x: number, y: number, size?: number | Dimension);
    /**
     * Sets the point defining the anchor of this handle (coordinates of the symbol)
     * @param anchor position
     */
    setAnchor(anchor: Point): this;
    /**
     * Returns the position of the handle
     */
    getAnchor(): Point;
    /**
     * Sets the size of the handle. Size is defined in two dimensions and is rendered
     * with respect to the anchor of this handle
     * @param size size of the handle
     */
    setHandleSize(size: Dimension | number): this;
    /**
     * Return handle size as a two-dimensional unit
     */
    getHandleSize(): Dimension;
    render(context: RenderingContext): void;
    /**
     * Gets properties pertaining to this handle
     * @returns properties
     */
    getProperties(): AnchoredHandle.OptionsOut;
    /**
     * Gets properties pertaining to this handle
     * @param props properties
     */
    setProperties(props?: AnchoredHandle.Options): this;
}
export declare namespace AnchoredHandle {
    /**
     * X coordinate of handle anchor or a JSON with handle properties
     */
    type Options = GhostBearingHandle.Options & {
        /**
         * The two dimensional size of the anchor
         */
        size?: Dimension | number;
        /**
         * X coordinate of handle's anchor
         */
        x?: number;
        /**
         * Y coordinate of handle's anchor
         */
        y?: number;
        width?: number;
        height?: number;
        /**
         * Painter used to draw the handle
         */
        painter?: SymbolShape.Painter;
        /**
         * Flag defining if the handle is in device space
         */
        isindevicespace?: boolean;
    };
    /**
     * properties
     */
    type OptionsOut = GhostBearingHandle.OptionsOut & {
        /**
         * The two dimensional size of the anchor
         */
        size: Dimension;
        /**
         * X coordinate of handle's anchor
         */
        x: number;
        /**
         * Y coordinate of handle's anchor
         */
        y: number;
        /**
         * Painter used to draw the handle
         */
        painter: SymbolShape.Painter;
        /**
         * Flag defining if the handle is in device space
         */
        isindevicespace: boolean;
    };
}
