import { IElementsRegistry } from '@int/geotoolkit/report/dom/IElementsRegistry';
import type { Element } from '@int/geotoolkit/report/dom/Element';
import type { Constructable } from '@int/geotoolkit/base';
import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * Define a registry of DOM element.
 */
export declare class Registry implements IElementsRegistry {
    constructor();
    hasElement(tagName: string): boolean;
    createElement(tagName: string, options: Node.Options): Element;
    /**
     * Register an element constructor
     * @param nodeName node name
     * @param constructor to register
     * @returns this
     */
    register(nodeName: string, constructor: Constructable): this;
    /**
     * Register element
     * @param nodeName node name
     * @returns this
     */
    unregister(nodeName: string): this;
    /**
     * Create a copy of Registry
     * @returns new copy
     */
    clone(): Registry;
    /**
     * Return default instance of the DOM elements Registry
     */
    static getDefaultInstance(): Registry;
}
