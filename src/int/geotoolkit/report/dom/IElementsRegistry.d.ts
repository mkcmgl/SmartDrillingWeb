/**
 * @module geotoolkit/report/dom/IElementsRegistry
 */
import type { Element } from '@int/geotoolkit/report/dom/Element';
import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * Define elements registry interface
 * @interface
 */
export declare abstract class IElementsRegistry {
    /**
     * Check if registry can create specific element
     * @param tagName element name
     */
    abstract hasElement(tagName: string): boolean;
    /**
     * Create specific element
     * @param tagName element name
     * @param options of element
     */
    abstract createElement(tagName: string, options: Node.Options): Element;
}
