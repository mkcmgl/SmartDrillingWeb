/**
 * @module geotoolkit/scene/exports/FooterComponent
 */
import { PageElement } from '@int/geotoolkit/scene/exports/PageElement';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { DocumentRenderingContext } from '@int/geotoolkit/renderer/DocumentRenderingContext';
import type { PageContext } from '@int/geotoolkit/scene/exports/PageContext';
/**
 * Footer Component that print the page number of the document, and any additional data
 */
export declare class FooterComponent extends PageElement {
    constructor(width: number, height: number, textStyle?: TextStyle.Type);
    /**
     * render the footer
     *
     * @param context PdfRenderingContext
     * @param [pageInfo] JSON Object
     */
    render(context: DocumentRenderingContext, pageInfo?: PageContext.PageInfo): void;
}
