import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Registry as ParsersRegistry } from '@int/geotoolkit/report/parsers/Registry';
import { Document as ReportDocument } from '@int/geotoolkit/report/Document';
import type { Document as DomDocument } from '@int/geotoolkit/report/dom/Document';
import type { Registry as _Registry } from '@int/geotoolkit/report/dom/elements/Registry';
import type { IResourceManager } from '@int/geotoolkit/report/resources/IResourceManager';
import type { IInstanceResolver } from '@int/geotoolkit/report/resources/IInstanceResolver';
export declare class Parser extends EventDispatcher {
    /**
     * @param xmlDocument
     * @param [options] additional options
     */
    constructor(xmlDocument: string | DomDocument, options?: Parser.Options);
    /**
     * Set Resource Manager instance
     * @param resourceManager resource manager
     * @returns this
     */
    setResourceManager(resourceManager: IResourceManager): this;
    /**
     * Return Resource Manager instance
     * @returns resource manager
     */
    getResourceManager(): IResourceManager;
    /**
     * Set class map instance
     * @param instanceResolver instance resolver
     * @returns this
     */
    setClassMap(instanceResolver: IInstanceResolver): this;
    /**
     * Return Resource Manager instance
     * @returns resource manager
     */
    getClassMap(): IInstanceResolver;
    /**
     * Parses the given XML document
     *
     * @param [doc] The document to parse
     * @param [registry] DOM elements registry
     * @returns promise
     */
    static parse(doc?: string | DomDocument, registry?: _Registry): Promise<ReportDocument>;
    /**
     * Parses the given XML document
     *
     * @param [doc] The document to parse
     * @param [registry] DOM element registry
     * @returns promise
     */
    parse(doc?: string | Document | DomDocument, registry?: _Registry): Promise<ReportDocument>;
}
export declare namespace Parser {
    /**
     * additional options
     */
    type Options = {
        /**
         * DOM Elements parsers
         */
        parsers?: ParsersRegistry | null;
        /**
         * DOM elements registry
         */
        elements?: _Registry | null;
        /**
         * external resource resolver
         */
        resourcemanager?: IResourceManager | null;
        /**
         * external classes and method resolver
         */
        classmap?: IInstanceResolver | null;
    };
}
