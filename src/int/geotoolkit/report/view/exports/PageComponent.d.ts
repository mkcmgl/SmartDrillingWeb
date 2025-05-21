import { PageElement } from '@int/geotoolkit/scene/exports/PageElement';
import type { Element } from '@int/geotoolkit/report/elements/Element';
import type { DocumentRenderingContext } from '@int/geotoolkit/renderer/DocumentRenderingContext';
import type { PageContext } from '@int/geotoolkit/scene/exports/PageContext';
/**
 * Header/Footer Component that print the title, date or page information
 */
export declare class PageComponent extends PageElement {
    /**
     * @param documentElement document element
     * @param [options] optional object
     */
    constructor(documentElement: Element, options?: PageContext.PageInfo);
    /**
     * Get title
     * @returns title
     */
    getTitle(): string;
    /**
     * get date
     * @returns date
     */
    getDate(): Date;
    /**
     * @param context PdfRenderingContext
     * @param [pageInfo] JSON Object
     * @param [pageContext] page context
     */
    render(context: DocumentRenderingContext, pageInfo?: PageContext.PageInfo, pageContext?: PageContext): void;
}
