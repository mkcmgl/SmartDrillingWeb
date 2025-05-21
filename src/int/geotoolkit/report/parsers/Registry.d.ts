/**
 * @module geotoolkit/report/parsers/Registry
 */
import { Node as ReportDomNode } from '@int/geotoolkit/report/dom/Node';
import { ElementParser } from '@int/geotoolkit/report/parsers/ElementParser';
import { NodeParser } from '@int/geotoolkit/report/parsers/NodeParser';
import type { AbstractElement } from '@int/geotoolkit/report/dom/elements/AbstractElement';
/**
 * Define a registry of element parsers.
 */
export declare class Registry {
    constructor();
    /**
     * Returns default parser to be used if parser is not found for node
     * @returns default parser
     */
    getDefaultParser(): NodeParser;
    /**
     * Set default parser to be used if parser is not found for node
     * @param parser parser
     */
    setDefaultParser(parser: NodeParser): this;
    /**
     * Register an instance of a parser
     * @param parser parser instance or element constructor
     * @param [node] node name or node DOM type
     * @param [nodeType] node type
     * @returns this
     */
    register(parser: NodeParser | Registry.ParserResolverCallback | any, node?: string | typeof AbstractElement, nodeType?: number): this;
    /**
     * Unregister an instance of parser
     * @param nodeName node name
     * @param [nodeType] node type
     * @returns this
     */
    unregister(nodeName: string, nodeType?: number): this;
    /**
     * Return parser by tag name
     * @param node node
     */
    getParser(node: string | ReportDomNode | Element): NodeParser;
    /**
     * Return default instance of the parsers Registry
     */
    static getDefaultInstance(): Registry;
}
export declare namespace Registry {
    /**
     * Parser resolver callback
     */
    type ParserResolverCallback = (node: string, nodeType: number) => ElementParser;
}
