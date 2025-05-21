import { NodeParser } from '@int/geotoolkit/report/parsers/NodeParser';
import type { Node as ReportDomNode } from '@int/geotoolkit/report/dom/Node';
import type { ParserContext } from '@int/geotoolkit/report/ParserContext';
export declare class PropertyParser extends NodeParser {
    constructor();
    createElement(node: ReportDomNode | Element, context: ParserContext): ParserContext;
    /**
     * Convert contexts to JSON
     * @param childContexts array of parsed contexts
     */
    static getJSON(childContexts: ParserContext[]): object | null;
}
