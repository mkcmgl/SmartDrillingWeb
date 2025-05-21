/**
 * @module geotoolkit/scene/exports/PageElement
 */
import { Dimension } from '@int/geotoolkit/util/Dimension';
import type { PageContext } from '@int/geotoolkit/scene/exports/PageContext';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Utility class used to create page component such as header and footer in a document. Used in PDF output.
 */
export declare abstract class PageElement {
    /**
     * @param width width of the component
     * @param height height of the component
     */
    protected constructor(width: number, height: number);
    /**
     * draw component
     *
     * @param context RenderingContext
     * @param [pageInfo] contains all data about the pdf page
     */
    abstract render(context: RenderingContext, pageInfo?: Record<string, any>, pageContext?: PageContext): void;
    /**
     * get the defaultSize of the component
     *
     * @returns dimension
     */
    getDefaultSize(): Dimension;
    /**
     * get the maximum size of the component
     *
     * @returns dimension
     */
    getMaximumSize(): Dimension;
    /**
     * Get function to check element visibility.
     * The default implementation returns null and standard
     * rule is used
     *
     * @returns function to check
     */
    isElementVisible(): PageElement.isVisiblePageElementCallback | null;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace PageElement {
    /**
     * Check page element visibility
     */
    type isVisiblePageElementCallback = (context?: PageContext) => boolean;
}
