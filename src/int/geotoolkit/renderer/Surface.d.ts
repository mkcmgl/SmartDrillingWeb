/**
 * @module geotoolkit/renderer/Surface
 */
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Pixmap } from '@int/geotoolkit/renderer/Pixmap';
import type { IBaseImage } from '@int/geotoolkit/platforms/IBaseImage';
/**
 * Define interface for a raster surface. This surface can be rendered to
 * context
 */
export declare abstract class Surface {
    /**
     * Begin paint
     * @param [tr] transformation
     * @param offset The offset of the surface relative to device.
     * @param [rect] The rectangle area to be cleared
     * @param [clearArea] clear rendering area
     * @returns a node rendering context
     */
    abstract beginPaint(tr?: Transformation, offset?: Point, rect?: Rect, clearArea?: boolean): RenderingContext;
    /**
     * End paint
     */
    abstract endPaint(): void;
    /**
     * Render a surface at specified position of the target device. This method ignores transformation,
     * which is set on context.
     * @param context context to render surface
     * @param x the x coordinate of the upper-left corner of the destination rectangle
     * @param y the y coordinate of the upper-left corner of the destination rectangle
     * @param [dstW] device width
     * @param [dstH] device height
     * @param [xImg] xPosition of the image to start rendering
     * @param [yImg] yPosition of the image to start rendering
     * @param [imgW] width of the image to draw
     * @param [imgH] height of the image to draw
     */
    abstract render(context: RenderingContext, x: number, y: number, dstW?: number, dstH?: number, xImg?: number, yImg?: number, imgW?: number, imgH?: number): void;
    /**
     * Return width of the surface
     */
    abstract getWidth(): number;
    /**
     * Sets surface size
     * @param width width of canvas
     * @param height height of canvas
     * @returns this
     */
    abstract setSize(width: number, height: number): this;
    /**
     * Return height of the surface
     */
    abstract getHeight(): number;
    /**
     * Draw image to surface
     * @param image image to draw
     * @param dx the x coordinate of the upper-left corner of the destination rectangle
     * @param dy the y coordinate of the upper-left corner of the destination rectangle
     */
    abstract drawImage(image: IBaseImage | Surface, dx: number, dy: number): void;
    /**
     * Clear surface
     */
    abstract clear(): void;
    /**
     * Release surface
     */
    abstract release(): void;
    /**
     * Create pixmap object with the specified dimensions
     * @param width width of the image data
     * @param height height of the image data
     */
    abstract createPixmap(width: number, height: number): Pixmap;
    /**
     * Get pixmap object representing the underlying pixel data for the area of the surface
     * denoted by the rectangle which starts at (x, y) and has width and height.
     * @param x The x coordinate of the upper left corner of the rectangle from which the Pixmap will be extracted.
     * @param y The y coordinate of the upper left corner of the rectangle from which the Pixmap will be extracted.
     * @param width width of the image data
     * @param height height of the image data
     */
    abstract getPixmap(x: number, y: number, width: number, height: number): Pixmap;
    /**
     * Renders data from the given Pixmap object onto the surface. If a dirty rectangle is provided, only the
     * pixels from that rectangle are rendered.
     * @param pixmap pixmap, which contains pixels to be rendered
     * @param srcX horizontal position (x-coordinate) of the upper-left corner of the pixmap data rectangle in the target surface.
     * @param srcY vertical position (y-coordinate) of the upper-left corner of the pixmap data rectangle in the target surface
     * @param [dstX] horizontal position (x-coordinate) where to place the image on the surface. Defaults to the top left
     * of the whole pixmap.
     * @param [dstY] vertical position (y-coordinate) where to place the image on the surface. Defaults to the top left of the
     * whole image data.
     * @param [dstWidth] width of the rectangle to be rendered, in the origin image data. Defaults to the width of the image data.
     * @param [dstHeight] width of the rectangle to be rendered, in the origin image data. Defaults to the width of the image data.
     */
    abstract putPixmap(pixmap: Pixmap, srcX: number, srcY: number, dstX?: number, dstY?: number, dstWidth?: number, dstHeight?: number): void;
    /**
     * Flip surface content vertically
     * @returns this
     */
    abstract flipVertical(): this;
    /**
     * Flip surface content horizontally
     * @returns this
     */
    abstract flipHorizontal(): this;
    /**
     * Check if surface is valid. If it was created for different pixel scale it is marked as invalid
     */
    abstract isValid(contextAttributes?: any): boolean;
    /**
     * Returns base64 representation
     */
    getBase64(): string;
    /**
     * Returns canvas surface pixels amount
     */
    getPixelsCount(): number;
    /**
     * Sets device pixel
     * @param devicePixel If set to true, width and height will be used as 'device' pixels.
     * @returns this
     */
    abstract setDevicePixel(devicePixel: boolean): this;
}
export declare namespace Surface {
    type Options = {
        width?: number;
        height?: number;
        devicepixel?: boolean;
        adjust?: boolean;
        pixelscale?: number;
        contextattributes?: CanvasRenderingContext2DSettings;
    };
}
