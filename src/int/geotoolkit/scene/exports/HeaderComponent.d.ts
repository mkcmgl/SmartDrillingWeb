/**
 * @module geotoolkit/scene/exports/HeaderComponent
 */
import { PageElement } from '@int/geotoolkit/scene/exports/PageElement';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { DocumentRenderingContext } from '@int/geotoolkit/renderer/DocumentRenderingContext';
import type { PageContext } from '@int/geotoolkit/scene/exports/PageContext';
/**
 * Header Component that print the title and the date of the pdf document
 */
export declare class HeaderComponent extends PageElement {
    constructor(width: number, height: number, title?: string, date?: Date, textStyle?: TextStyle.Type);
    /**
     * print title and date in the context
     *
     * @param context PdfRenderingContext
     * @param [pageInfo] JSON Object
     * @param [pageContext] page context
     */
    render(context: DocumentRenderingContext, pageInfo?: PageContext.PageInfo, pageContext?: PageContext): void;
    /**
     * get title
     * @returns title
     */
    getTitle(): string;
    /**
     * get date
     * @returns date
     */
    getDate(): Date;
    /**
     * get date
     * @returns date
     */
    getTextStyle(): TextStyle;
}
