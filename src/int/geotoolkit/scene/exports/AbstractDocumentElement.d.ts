import type { DocumentRenderingContext } from '@int/geotoolkit/renderer/DocumentRenderingContext';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { LayoutedDimension } from '@int/geotoolkit/scene/exports/LayoutedDimension';
/**
 * Abstract parent class used for PDF output.
 */
export declare abstract class AbstractDocumentElement {
    /**
     * Compute the dimension in the layout, this dimension is described by a fixed dimension and a scaled dimension
     */
    abstract getLayoutedDimension(): LayoutedDimension;
    /**
     * render the document in the context
     * @param context rendering context
     * @param position position of current document element relative to the parent document
     */
    abstract render(context: DocumentRenderingContext, position?: Point): void;
    /**
     * Render document in asynchronous mode. Default implementation creates call method "render" inside
     * @param context rendering context
     * @param position position of current document element relative to the parent document
     * @param callback callback function
     */
    renderAsync(context: DocumentRenderingContext, position: Point, callback: () => void): void;
    /**
     * Used to restore object's state after exporting
     */
    endExport(): void;
    /**
     * Used to prepare object before exporting
     */
    beginExport(): void;
    /**
     * Set the document bounds
     * @param [rect] document bounds
     */
    abstract updateLayout(rect?: Rect): void;
    /**
     * set the document scale depending on the parameters isScaledVertically and isScaledHorizontally
     * @param sx scale factor in x direction
     * @param sy scale factor in y direction
     * @returns this
     */
    abstract setScale(sx: number, sy: number): this;
    /**
     * set the document translation
     * @param x offset x coordinate
     * @param y offset y coordinate
     * @returns this
     */
    abstract setTranslation(x: number, y: number): this;
    static getClassName(): string;
    getClassName(): string;
}
