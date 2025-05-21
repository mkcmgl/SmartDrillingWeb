/**
 * @module geotoolkit/report/dom/INamedItem
 */
import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * Define named item interface
 * @interface module:geotoolkit/report/dom/INamedItem~INamedItem
 */
export declare abstract class INamedItem {
    /**
     * The element holding the item.
     * @name module:geotoolkit/report/dom/INamedItem~INamedItem#ownerElement
     */
    abstract get ownerElement(): Node;
    /**
     * Item name
     * @name module:geotoolkit/report/dom/INamedItem~INamedItem#name
     */
    abstract get name(): string;
    /**
     * Item value
     * @name module:geotoolkit/report/dom/INamedItem~INamedItem#value
     */
    abstract get value(): string;
    /**
     * Item value
     * @name module:geotoolkit/report/dom/INamedItem~INamedItem#value
     */
    abstract set value(value: string);
}
