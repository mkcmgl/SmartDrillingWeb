/**
 * @module geotoolkit/renderer/Graphics
 */
import type { GraphicsPath } from '@int/geotoolkit/renderer/GraphicsPath';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Region } from '@int/geotoolkit/util/Region';
import type { GeometryOperation } from '@int/geotoolkit/util/GeometryOperation';
import type { Surface } from '@int/geotoolkit/renderer/Surface';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Pattern } from '@int/geotoolkit/attributes/Pattern';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { IBaseImage } from '@int/geotoolkit/platforms/IBaseImage';
import type { LinearGradientStyle } from '@int/geotoolkit/attributes/LinearGradientStyle';
/**
 * Graphics
 */
export declare abstract class Graphics {
    /**
     * Sets clipping
     * @param geometry geometry to clip
     * @param [operation] operation to be applied for a new clipping
     * @param [isModel] model coordinates flag
     * @param [evenOdd] Defines if clipping to apply is even-odd
     * @returns this
     */
    abstract setClip(geometry: Rect | GraphicsPath | Region, operation?: GeometryOperation, isModel?: boolean, evenOdd?: boolean): this;
    /**
     * Draw and fill rectangle with the current style. If fill style is null
     * then it draws outline only.
     * @param x X coordinate of the start point
     * @param [y] Y coordinate of the start point
     * @param [width] Width of rectangle
     * @param [height] Height of rectangle
     * @returns this
     */
    abstract drawRectangle(x: Rect | number, y?: number, width?: number, height?: number): this;
    /**
     * Draw line
     * @param x1 x-position of start point
     * @param y1 y-position of start point
     * @param x2 x-position of end point
     * @param y2 y-position of end point
     * @returns this
     */
    abstract drawLine(x1: number, y1: number, x2: number, y2: number): this;
    /**
     * Draw polyline
     * @param x array of x coordinates of points
     * @param y array of y coordinates of points
     * @param [start] index of the first point in the array
     * @param [end] index of the last point in the array
     * @param [multiDirection] false for one direction array
     * @returns this
     */
    abstract drawPolyline(x: number[], y: number[], start?: number, end?: number, multiDirection?: boolean): this;
    /**
     * Draw and fill polygon. If fill style is null
     * then it draws outline only.
     * @param x array of x coordinates of points
     * @param array of y coordinates of points
     * @param [start] index of the first point in the array
     * @param [end] index of the last point in the array
     * @returns this
     */
    abstract drawPolygon(x: number[], array: number[], start?: number, end?: number): this;
    /**
     * Draw and fill ellipse
     * @param x x-coordinate of the upper-left corner of the bounding rectangle that defines the ellipse
     * @param y y--coordinate of the upper-left corner of the bounding rectangle that defines the ellipse
     * @param width width of the bounding rectangle that defines the ellipse.
     * @param height height of the bounding rectangle that defines the ellipse.
     * @returns this
     */
    abstract drawEllipse(x: number, y: number, width: number, height: number): this;
    /**
     * Draws an arc clockwise from startAngle to endAngle.
     * If endAngle exceeds startAngle by Math.PI * 2 or more than ellipse is drawn.
     * If fillStyle is not null, will fill the arc area using a direct line
     * to close the path between start and end of arc.
     * By default, this function renders a "pie" shape, using given fill and stroke style. In order to draw a real arc,
     * set suppressLineToCenter=true.
     * @param x x-coordinate of the upper-left corner of the rectangle that bounds the ellipse.
     * @param y y-coordinate of the upper-left corner of the rectangle that bounds the ellipse.
     * @param width width of the rectangle that bounds the ellipse.
     * @param height height of the rectangle that bounds the ellipse.
     * @param startAngle angle in radians measured clockwise from positive x-axis to the starting point of the arc.
     * @param endAngle Angle in radians measured clockwise from positive x-axis to the ending point of the arc.
     * @param [sweepAngle] Defines the sweep of the arc in radians. This parameter used if and only if
     * startAngle == endAngle
     * @param [suppressLineToCenter] Does not draw lines from the edges of arc to center point
     * @returns this
     */
    abstract drawArc(x: number, y: number, width: number, height: number, startAngle: number, endAngle: number, sweepAngle?: number, suppressLineToCenter?: boolean): this;
    /**
     * Draws a portion of an annulus clockwise ranging from startAngle to endAngle.
     * If endAngle exceeds startAngle by Math.PI * 2 or more than annulus is drawn.
     * Will fill in between the two arcs if fillStyle exists.
     * @param x x-coordinate of the center of the arc.
     * @param y y-coordinate of the center of the arc.
     * @param innerRadius inner radius of the arc
     * @param outerRadius outer radius of the arc
     * @param startAngle angle in radians measured from x-axis to the starting point of the arc
     * (clockwise means positive angle; counterclockwise - otherwise).
     * @param endAngle Angle in radians measured from x-axis to ending point of the arc.
     * @param [sweepAngle] Defines the sweep of the arc
     * @returns this
     */
    abstract drawAnnulusArc(x: number, y: number, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, sweepAngle?: number): this;
    /**
     * Draw text
     * @param x x anchor position
     * @param y y anchor position
     * @param text text to draw
     * @returns this
     */
    abstract drawText(x: number, y: number, text: string): this;
    /**
     * Draw an image onto the graphics context
     * @param image image to be rendered
     * @param srcX The x-axis coordinate of the top left corner of the sub-rectangle of the source image to
     * draw into the destination context. Use the 7- or 9-argument syntax to use it as a source
     * or the x-axis coordinate in the destination context at which to place the top-left corner of the source image.
     * Use the 3- or 5-argument syntax to apply this argument as destination position.
     * @param srcY The y-axis coordinate of the top left corner of the sub-rectangle of the source image to
     * draw into the destination context. Use the 7- or 9-argument syntax to use it as a source
     * or the y-axis coordinate in the destination context at which to place the top-left corner of the source image.
     * Use the 3- or 5-argument syntax to apply this argument as destination position.
     * @param [srcW] source width if 7- or 9-argument is used or image width for other cases
     * @param [srcH] source height if y-argument | image height for other cases
     * @param [dstX] destination x position
     * @param [dstY] destination y position
     * @param [dstW] destination width This allows scaling of the drawn image. If not specified, the image is not scaled
     * in height when drawn.
     * @param [dstH] destination height. If not specified, the image is not scaled
     * in height when drawn.
     * @returns this
     * @example
     * // Draw image can be used it the three different ways
     *
     * // Provide only destination x and y
     * graphics.drawImage(image, dstX, dstY);
     * // Provide destination x and y and destination width and height
     * graphics.drawImage(image, dstX, dstY, dstW, dstW);
     * // Provide source x, y, width, height and destination x and y and destination width and height
     * graphics.drawImage(image, srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstW);
     */
    abstract drawImage(image: IBaseImage | Surface, srcX: number, srcY: number, srcW?: number, srcH?: number, dstX?: number, dstY?: number, dstW?: number, dstH?: number): this;
    /**
     * Set fill style
     * @param style fill style
     * @param [area] area
     * @returns this
     */
    abstract setFillStyle(style: FillStyle, area?: Rect): this;
    /**
     * Set fill pattern
     * @param pattern pattern to fill the area
     * @returns this
     */
    abstract setFillPattern(pattern: Pattern): this;
    /**
     * Set line style
     * @param style a line style
     * @param [area] area to apply fill property of line style
     * @returns this
     */
    abstract setLineStyle(style: LineStyle | LinearGradientStyle, area?: Rect): this;
    /**
     * Set text style
     * @param textStyle style
     * @returns this
     */
    abstract setTextStyle(textStyle: TextStyle): this;
    /**
     * Begin path
     * @returns this
     */
    abstract beginPath(): this;
    /**
     * Move current position to x,y. Create a new subpath with the specified
     * point as its first (and only) point.
     * @param x x position
     * @param y y position
     * @returns this
     */
    abstract moveTo(x: number, y: number): this;
    /**
     * Draw line from the current position to the specified position
     * @param x x position
     * @param y y position
     * @returns this
     */
    abstract lineTo(x: number, y: number): this;
    /**
     * Draws a cubic B\u00e9zier curve from the current point to the point (x,
     * y), with control points (cp1x, cp1y) and (cp2x, cp2y).
     * @param cp1x the x coordinate of the first control point
     * @param cp1y the y coordinate of the first control point
     * @param cp2x the x coordinate of the second control point
     * @param cp2y the y coordinate of the second control point
     * @param x the x coordinate of the end point
     * @param y the y coordinate of the end point
     * @returns this
     */
    abstract bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;
    /**
     * Calculate the strokes of all the subpaths of the current path
     * @returns this
     */
    abstract stroke(): this;
    /**
     * Draws an arc to the target point as part of a path.
     * @param x1 coordinate of destination
     * @param y1 coordinate of destination
     * @param x2 coordinate
     * @param y2 coordinate
     * @param radius radius of arc
     * @returns this
     */
    abstract arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this;
    /**
     * Do nothing if the context has no subpaths. Otherwise, it marks the last
     * subpath as closed, create a new subpath whose first point is the same as
     * the previous subpath's first point, and finally add this new subpath to
     * the path.
     * @returns this
     */
    abstract closePath(): this;
    /**
     * Fill all the subpaths of the current path, using fillStyle, and using the
     * non-zero winding number rule. Open subpaths will be implicitly closed
     * when being filled (without affecting the actual subpaths).
     * @returns this
     */
    abstract fillPath(): this;
    /**
     * Apply geometry on the rendering context. The method stroke must be called to draw path outlines or fillPath to fill the geometry
     * @param path path to draw
     * @returns this
     */
    drawPath(path: GraphicsPath): this;
}
