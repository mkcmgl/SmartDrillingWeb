/**
 * @module geotoolkit/renderer/DocumentRenderingContext
 */
import { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * Represents context to traverse nodes during picking and rendering
 */
export declare abstract class DocumentRenderingContext extends RenderingContext {
    protected constructor();
    abstract pushTransformation(tr: Transformation): DocumentRenderingContext;
    /**
     * Sets the pages count
     *
     * @param xPageCount page count along x
     * @param yPageCount page count along y
     */
    abstract setPagesCount(xPageCount: number, yPageCount: number): void;
    /**
     * Sets the page info settings
     *
     * @param pageX index of the page by x
     * @param pageY index of the page by y
     */
    abstract setPageInfoSettings(pageX: number, pageY: number): void;
    /**
     * Sets document settings
     * @param documentSettings document settings
     */
    setDocumentSettings(documentSettings: Record<string, any>): this;
    /**
     * Return document settings
     */
    getDocumentSettings(): Record<string, any>;
}
