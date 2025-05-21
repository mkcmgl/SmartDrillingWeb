import { Node as ReportDomNode } from '@int/geotoolkit/report/dom/Node';
import type { Parser } from '@int/geotoolkit/report/Parser';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { Registry } from '@int/geotoolkit/report/parsers/Registry';
import type { IResourceManager } from '@int/geotoolkit/report/resources/IResourceManager';
import type { Node as CarnacSceneNode } from '@int/geotoolkit/scene/Node';
import type { IResource } from '@int/geotoolkit/report/resources/IResource';
import type { IInstanceResolver } from '@int/geotoolkit/report/resources/IInstanceResolver';
export declare class ParserContext {
    /**
     * @param parser
     * @param parent context
     * @param node xml node
     */
    constructor(parser: Parser, parent: ParserContext, node: ReportDomNode | Element);
    /**
     * Return text style
     * @returns text style
     */
    getTextStyle(): TextStyle;
    /**
     * Return xml node
     */
    getNode(): ReportDomNode | Element;
    /**
     * Returns active parsers registry
     */
    getRegistry(): Registry;
    /**
     * Set element parsers registry for parser context
     * @param registry parsers registry
     * @returns this
     */
    setRegistry(registry: Registry): this;
    /**
     * Register loadable resource
     * @param [resource] loadable resource
     * @returns this
     */
    registerResource(resource?: IResource | ParserContext): this;
    /**
     * Resolve resource
     * @param [resource] loadable resource
     * @returns this
     */
    resolveResource(resource?: IResource | ParserContext): this;
    /**
     * @returns IResourceManager
     */
    getResourceManager(): IResourceManager;
    /**
     * @returns IInstanceResolver
     */
    getClassMap(): IInstanceResolver;
    /**
     * Return parent context
     * @returns parent
     */
    getParent(): ParserContext;
    /**
     * Return geotoolkit node
     */
    getElement(): CarnacSceneNode;
    /**
     * Set geotoolkit node
     * @param element element
     */
    setElement(element: CarnacSceneNode): this;
    /**
     * Set geotoolkit content node
     * @param content content
     */
    setContent(content: CarnacSceneNode): this;
    /**
     * Return geotoolkit content node
     */
    getContent(): CarnacSceneNode;
    /**
     * Parse child node
     * @param childNode childNode
     */
    parseChild(childNode: ReportDomNode | Element): ParserContext;
}
