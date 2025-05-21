/**
 * @module geotoolkit/renderer/RenderingContext
 */
import { Graphics } from '@int/geotoolkit/renderer/Graphics';
import { BlendMode } from '@int/geotoolkit/util/BlendMode';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { IFilter } from '@int/geotoolkit/renderer/IFilter';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { RenderingState } from '@int/geotoolkit/renderer/RenderingState';
import type { Surface } from '@int/geotoolkit/renderer/Surface';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { TextMetrics } from '@int/geotoolkit/renderer/TextMetrics';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Point } from '@int/geotoolkit/util/Point';
import type { SelectionContext } from '@int/geotoolkit/selection/SelectionContext';
import type { Area } from '@int/geotoolkit/util/Area';
/**
 * Represents context to traverse nodes during picking and rendering
 */
export declare abstract class RenderingContext extends Graphics {
    /**
     * @param [deviceUnit] represent the `{string}` name, `{string}` symbol or `{AbstractUnit}` unit to be used as unit for device
     * @param [filters] an array of filters
     */
    protected constructor(deviceUnit?: string | AbstractUnit, filters?: (IFilter | ((node: Node, context?: RenderingContext) => boolean))[]);
    /**
     * Add filter to be applied
     * @param filter filter to add
     */
    addFilter(filter: IFilter): this;
    /**
     * Remove an instance of the filter
     * @param filter filter to remove
     */
    removeFilter(filter: IFilter): this;
    /**
     * Gets an array of filters
     */
    protected getFilters(): (IFilter | ((node: Node, context?: RenderingContext) => boolean))[] | null;
    /**
     * Sets an array of filters
     * @param filters filters
     */
    protected setFilters(filters: (IFilter | ((node: Node, context?: RenderingContext) => boolean))[] | null): this;
    /**
     * Gets the current transformation, which defines transformation from model
     * coordinates to device coordinates
     */
    abstract getTransformation(): Transformation;
    /**
     * Sets the current transformation, which defines transformation from model
     * coordinates to device coordinates
     * @param transformation transformation to be set
     * @returns this
     */
    abstract setTransformation(transformation: Transformation): this;
    /**
     * Gets the current transformation, which defines transformation from device
     * coordinates to model coordinates.
     * Note, that inverse transformation can be calculated based on
     * getTransformation() call (and vice versa).
     */
    abstract getInverseTransformation(): Transformation;
    /**
     * Creates rendering state
     * @returns a new instance of the rendering state
     */
    abstract createRenderingState(): RenderingState;
    /**
     * Creates a new surface
     * @param width width of surface
     * @param height height of surface
     * @param [devicePixel] If set to true, width and height will be used as 'device' pixels.
     * @returns a new instance of surface
     */
    abstract createSurface(width: number, height: number, devicePixel?: boolean): Surface;
    /**
     * Creates a new context with concatenated transformation
     * @param tr a transformation to concatenate
     * @returns a new context
     */
    abstract pushTransformation(tr: Transformation): RenderingContext;
    /**
     * Gets rectangular area (defined in device space) to invalidate
     */
    abstract getDeviceRect(): Rect;
    /**
     * Gets "global" view port (defined in device space).
     * The implementation calls for "this.getDeviceRect()"
     */
    getGlobalViewPort(): Rect;
    /**
     * Sets "global" view port (defined in device space)
     * The implementation is empty
     * @param globalViewPort "global" view port
     */
    setGlobalViewPort(globalViewPort: Rect): this;
    /**
     * Gets rectangular area (defined in model space) to invalidate.
     * Note, that having called getTransformation() (or getInverseTransformation())
     * model rect can be calculated based on device rect (and vice versa).
     */
    abstract getModelRect(): Rect;
    /**
     * Returns model area (rect/polygon/etc) of current context.
     */
    getModelArea(): Area;
    /**
     * Sets device rectangle area of interest
     * @param rect
     * @returns this
     */
    abstract setDeviceRect(rect: Rect): this;
    /**
     * Sets model rectangle
     * @param rect model area of interest
     * @returns this
     */
    abstract setModelRect(rect: Rect): this;
    /**
     * Return true if context is doing picking now
     * @returns true if is is picking context
     */
    abstract isPicking(): this is SelectionContext;
    /**
     * Return text metrics
     * @param text text
     * @param [textStyle] the text style
     * @returns text metrics
     */
    abstract measureText(text: string, textStyle?: TextStyle): TextMetrics;
    /**
     * Returns line dimension at the current context
     * @param lineStyle the line style
     * @returns the line width
     */
    measureLine(lineStyle: LineStyle): number;
    /**
     * Save the current state
     * @returns this
     */
    abstract save(): this;
    /**
     * Restore current state
     * @returns this
     */
    abstract restore(): this;
    /**
     * Filter node
     * @param node node to be rendered
     */
    filter(node: Node): boolean;
    /**
     * Specify node to be rendered
     * @param node node to be rendered
     * @returns this
     */
    setCurrentNode(node: Node): this;
    /**
     * Prepare rendering context. The default implementation blocks notifications from nodes and
     * styles. if you call beginRendering then call the endRendering.
     * @returns this
     */
    beginRendering(): this;
    /**
     * End usage ot the rendering context
     * @returns this
     */
    endRendering(): this;
    /**
     * Gets path length in device space. <br>
     * The default implementation returns straight distance between transformed points
     * @param pt1 first model point
     * @param pt2 second model point
     */
    getDevicePathLength(pt1: Point, pt2: Point): number;
    /**
     * Specifies the alpha (transparency) value that is applied to shapes and images before they are drawn
     * @param alpha A number between 0.0 (fully transparent) and 1.0 (fully opaque).
     * Not all implementations can support it
     * @param [mode] defines mode to blend opacity
     * @returns this
     */
    setGlobalAlpha(alpha: number, mode?: BlendMode): this;
    /**
     * Gets the alpha (transparency) value that is applied to shapes and images before they are drawn
     */
    getGlobalAlpha(): number;
    /**
     * Enable or disable image smoothing if context is supported determines whether scaled images are smoothed.
     * When enlarging images, the default resizing algorithm will blur the pixels. Set this property to false
     * to retain the pixels' sharpness. By default is ignored
     * @param enable enable or disable smoothing
     * @returns this
     */
    setImageSmoothing(enable: boolean): this;
    /**
     * Return images smoothing enabled flag if context is supported. By default it returns false
     * @returns enable enable or disable smoothing
     */
    getImageSmoothing(): boolean;
}
