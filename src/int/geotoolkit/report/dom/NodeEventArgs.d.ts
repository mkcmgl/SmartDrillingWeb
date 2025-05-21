/**
 * @module geotoolkit/report/dom/NodeEventArgs
 */
import { BaseEventArgs } from '@int/geotoolkit/controls/tools/BaseEventArgs';
import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * Type of DOM node changes
 * @enum
 * @readonly
 */
export declare enum NodeChanges {
    /**
     * For internal use
     */
    Internal = "internal",
    /**
     * Happens when element style has been changed
     */
    Style = "style",
    /**
     * Happens when element attribute value has been changed
     */
    Attribute = "attribute",
    /**
     * Happens when element property value has been changed
     */
    Property = "property",
    /**
     * Happens when child collection has been changed
     */
    Collection = "collection"
}
/**
 * DOM Node event class.
 */
export declare class NodeEventArgs extends BaseEventArgs {
    /**
     * @param options node event args options
     */
    constructor(options: NodeEventArgs.Options);
    /**
     * Node changes type
     * @name module:geotoolkit/report/dom/NodeEventArgs~NodeEventArgs#type
     */
    get type(): NodeChanges;
    /**
     * Return Node changes type
     *
     * @returns Node changes type
     */
    getType(): NodeChanges;
    /**
     * Name
     * @name module:geotoolkit/report/dom/NodeEventArgs~NodeEventArgs#name
     */
    get name(): string | string[];
    /**
     * Return Node changes name
     *
     * @returns Node changes name
     */
    getName(): string | string[];
    /**
     * Value
     * @name module:geotoolkit/report/dom/NodeEventArgs~NodeEventArgs#value
     */
    get value(): any | any[];
    /**
     * Return Node changes value
     *
     * @returns Node changes value
     */
    getValue(): any | any[];
    /**
     * New Value
     * @name module:geotoolkit/report/dom/NodeEventArgs~NodeEventArgs#newValue
     */
    get newValue(): any;
    /**
     * Return Node changes new-value
     *
     * @returns Node changes new-value
     */
    getNewValue(): any;
    /**
     * Old Value
     * @name module:geotoolkit/report/dom/NodeEventArgs~NodeEventArgs#oldValue
     */
    get oldValue(): any;
    /**
     * Return Node changes old-value
     *
     * @returns Node changes old-value
     */
    getOldValue(): any;
    /**
     * Reset flag
     * @name module:geotoolkit/report/dom/NodeEventArgs~NodeEventArgs#reset
     */
    get reset(): boolean;
    /**
     * Return Node changes reset flag
     *
     * @returns Node changes reset flag
     */
    getReset(): boolean;
    /**
     * Silent flag
     * @name module:geotoolkit/report/dom/NodeEventArgs~NodeEventArgs#silent
     */
    get silent(): boolean;
    /**
     * Return Node changes silent flag
     *
     * @returns Node changes silent flag
     */
    getSilent(): boolean;
    /**
     * Source
     * @name module:geotoolkit/report/dom/NodeEventArgs~NodeEventArgs#source
     */
    get source(): Node;
    /**
     * Return Node changes source
     *
     * @returns Node changes source
     */
    getSource(): Node;
    /**
     * Source
     * @name module:geotoolkit/report/dom/NodeEventArgs~NodeEventArgs#source
     */
    set source(value: Node);
    /**
     * Set Node changes source
     *
     * @param source Node Changes source
     */
    setSource(source: Node): this;
}
export declare namespace NodeEventArgs {
    /**
     * children collection changes event args
     */
    type Options = {
        /**
         * event name
         */
        event?: string;
        /**
         * event type
         */
        type: NodeChanges;
        /**
         * style/property/attribute/collection? name
         */
        name?: string | string[];
        /**
         * value
         */
        value?: any | any[];
        /**
         * new value
         */
        newValue?: any;
        /**
         * old value
         */
        oldValue?: any;
        /**
         * reset flag
         */
        reset?: boolean;
        /**
         * silent flag
         */
        silent?: boolean;
        /**
         * original source initially raised an event
         */
        source?: Node;
    };
}
