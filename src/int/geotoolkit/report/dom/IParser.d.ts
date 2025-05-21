/**
 * @module geotoolkit/report/dom/IParser
 */
import type { IElementsRegistry } from '@int/geotoolkit/report/dom/IElementsRegistry';
import type { Document as ReportDomDocument } from '@int/geotoolkit/report/dom/Document';
/**
 * Define elements parser interface
 * @interface
 */
export declare abstract class IParser {
    /**
     * Parse the given XML document
     * @param [doc] The document to parse
     * @param [registry] dom element registry
     * @returns promise
     */
    abstract parse(doc?: string | Document, registry?: IElementsRegistry): Promise<ReportDomDocument>;
}
