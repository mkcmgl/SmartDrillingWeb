import { IParser } from '@int/geotoolkit/report/dom/IParser';
import { Document as ReportDomDocument } from '@int/geotoolkit/report/dom/Document';
import type { IElementsRegistry } from '@int/geotoolkit/report/dom/IElementsRegistry';
/**
 * DOM parser, class to convert standard DOM to geotoolkit report DOM
 */
export declare class DOMParser implements IParser {
    /**
     * @param xmlDocument
     * @param [options] options
     */
    constructor(xmlDocument: string | Document, options?: DOMParser.Options);
    /**
     * Parses the given XML document
     *
     * @param [xml] The document to parse
     * @param [registry] dom element registry
     * @returns promise
     */
    static parse(xml?: string | Document, registry?: IElementsRegistry): Promise<ReportDomDocument>;
    parse(doc?: string | Document, registry?: IElementsRegistry): Promise<ReportDomDocument>;
}
export declare namespace DOMParser {
    /**
     * options
     */
    type Options = {
        /**
         * registry to resolve custom DOM elements
         */
        elements?: IElementsRegistry | null;
    };
}
