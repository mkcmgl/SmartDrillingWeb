import { Rect } from '@int/geotoolkit/util/Rect';
import { Point } from '@int/geotoolkit/util/Point';
import { Dimension } from '@int/geotoolkit/util/Dimension';
/**
 * HTMLOverlay is a wrapper for HTMLElement to add to {@link @int/geotoolkit/scene/HTMLOverlayLayer~HTMLOverlayLayer}
 * @example
 * import {HTMLOverlayLayer} from '@int/geotoolkit/scene/HTMLOverlayLayer';
 * import {HTMLOverlay} from '@int/geotoolkit/scene/HTMLOverlay';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 *
 * const htmlOverlayLayer = new HTMLOverlayLayer();
 * const htmlOverlay = new HTMLOverlay({
 *     'element': document.getElementById('htmlOverlay-element'),
 *     'ax': 0, // x coordinate in model space
 *     'ay': 0, // y coordinate in model space
 * });
 * htmlOverlayLayer.addHTMLOverlay(htmlOverlay);
 */
export declare class HTMLOverlay {
    constructor(options?: HTMLOverlay.Options);
    /**
     * Set options
     * @param [options] HTMLOverlay options
     * @returns this
     */
    setOptions(options?: HTMLOverlay.Options): this;
    /**
     * Get options
     * @returns Options
     */
    getOptions(): HTMLOverlay.Options;
    /**
     * Set id
     * @param id HTMLOverlay id
     * @returns this
     */
    setId(id: string): this;
    /**
     * Get id
     * @returns HTMLOverlay id
     */
    getId(): string;
    /**
     * Set htmlOverlay bounds in model space, bounds size only works when sizeisindevicespace = false
     * @param bounds new bounds in model space
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Get bounds in model space
     * @returns Bounds in model space
     */
    getBounds(): Rect;
    /**
     * Sets anchor point to given position
     *
     * @param point point
     * @returns this
     */
    setAnchor(point: Point): this;
    /**
     * Sets anchor point to given position
     *
     * @param x x coordinate
     * @param y y coordinate
     * @returns this
     */
    setAnchor(x: number, y: number): this;
    /**
     * Gets the anchor
     */
    getAnchor(): Point;
    /**
     * Sets x anchor position
     * @param ax anchor x position
     * @returns this
     */
    setAnchorX(ax: number): this;
    /**
     * Return anchored x position
     */
    getAnchorX(): number;
    /**
     * Sets y anchor position
     * @param ay anchor y position
     * @returns this
     */
    setAnchorY(ay: number): this;
    /**
     * Return anchored y position
     */
    getAnchorY(): number;
    /**
     * Sets size of the shape, will accept a width and height number or a Dimension object.
     *
     * @param width width of the shape
     * @param [height] height of the shape
     * @returns this
     */
    setSize(width: number | Dimension, height?: number): this;
    /**
     * Returns the size as a dimension object.
     * @returns size
     */
    getSize(): Dimension;
    /**
     * Return width of the shape
     */
    getWidth(): number;
    /**
     * Sets width of the shape
     * @param width width of the shape
     * @returns this
     */
    setWidth(width: number): this;
    /**
     * Return height of the shape
     */
    getHeight(): number;
    /**
     * Sets height of the shape
     * @param height height of the shape
     * @returns this
     */
    setHeight(height: number): this;
    /**
     * Set anchor offset in device space
     * @param x X coordinate
     * @param [y] Y coordinate
     * @returns this
     */
    setOffset(x: number | Point | Point.Options, y?: number): this;
    /**
     * Get anchor offset in device space
     * @returns offset Offset
     */
    getOffset(): Point;
    /**
     * Invalidate HTMLOverlay, should be call when HTMLOverlay changes
     * @returns this
     */
    invalidate(): this;
    /**
     * Set HTMLElement
     * @param element new HTMLElement
     * @returns this
     */
    setElement(element: HTMLElement): this;
    /**
     * Get HTMLElement
     * @returns HTMLElement
     */
    getElement(): HTMLElement;
    /**
     * Whether HTMLOverlay is already disposed
     * @returns True if HTMLOverlay is disposed, false otherwise
     */
    isDisposed(): boolean;
    /**
     * Dispose HTMLOverlay along with HTMLElement of it
     */
    dispose(): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace HTMLOverlay {
    /**
     * HTMLOverlay options
     */
    type Options = {
        /**
         * HTMLElement to display
         */
        element?: HTMLElement;
        /**
         * x coordinate in model space
         */
        ax?: number;
        /**
         * y coordinate in model space
         */
        ay?: number;
        /**
         * Whether if size is in device space. If true, options width and height will be ingored.
         */
        sizeisindevicespace?: boolean;
        /**
         * width in model space, only works with sizeisindevicespace = false
         */
        width?: number;
        /**
         * height in model space, only works with sizeisindevicespace = false
         */
        height?: number;
        /**
         * Offset in device space
         */
        offset?: {
            /**
             * X offset in device space
             */
            x?: number;
            /**
             * Y offset in device space
             */
            y?: number;
        } | Point;
    };
}
