import { ElementParser } from '@int/geotoolkit/report/parsers/ElementParser';
import type { Node as ReportDomNode } from '@int/geotoolkit/report/dom/Node';
import type { ParserContext } from '@int/geotoolkit/report/ParserContext';
export declare class SchematicsWidgetParser extends ElementParser {
    constructor(tagName: string);
    createElement(node: ReportDomNode | Element, context: ParserContext): ParserContext;
}
