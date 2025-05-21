/**
 * @module geotoolkit/report/parsers/widgets/TemplateNodeParser
 */
import { NodeParser } from '@int/geotoolkit/report/parsers/NodeParser';
import type { ParserContext } from '@int/geotoolkit/report/ParserContext';
import type { Node as ReportDomNode } from '@int/geotoolkit/report/dom/Node';
export declare class TemplateNodeParser extends NodeParser {
    /**
     * @param nodeName
     * @param nodeType
     */
    constructor(nodeName?: string, nodeType?: number);
    createElement(node: ReportDomNode | Element, context: ParserContext): ParserContext;
}
