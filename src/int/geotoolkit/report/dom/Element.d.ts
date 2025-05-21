/**
 * @module geotoolkit/report/dom/Element
 */
import { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
import { Node } from '@int/geotoolkit/report/dom/Node';
import { Events } from '@int/geotoolkit/scene/Node';
import type { NodeList } from '@int/geotoolkit/report/dom/NodeList';
import type { Attribute } from '@int/geotoolkit/report/dom/Attribute';
import type { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { NodeEventArgs } from '@int/geotoolkit/report/dom/NodeEventArgs';
/**
 * Element is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly;
 * for example, inheriting the same set of methods, or being testable in the same way.<br>
 */
export declare class Element extends Node implements IStyleListener {
    constructor(options: Node.Options);
    on<E extends keyof Element.EventMap>(type: E, callback: (eventType: E, sender: this, args: Element.EventMap[E]) => void): this;
    off<E extends keyof Element.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Element.EventMap[E]) => void): this;
    notify<E extends keyof Element.EventMap>(type: E, source: Element, args?: Element.EventMap[E]): this;
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    /**
     * Clean up cached properties
     * @param [silent] silent reset
     * @returns this
     */
    protected onResetCssProperties(silent?: boolean): this;
    /**
     * The children property returns a collection of an element's child elements, as an NodeList object.
     * @name module:geotoolkit/report/dom/Element~Element#children
     */
    get children(): NodeList<Element>;
    appendChild(newChild: Node): this;
    /**
     * Adds a new {@link @int/geotoolkit/report/dom/Attribute~Attribute}  node to the specified element.
     * @param newAttr attribute
     * @returns this
     */
    setAttributeNode(newAttr: Attribute): this;
    /**
     * Check if attribute exists
     * @param name attribute name
     */
    hasAttribute(name: string): boolean;
    /**
     * Return attribute value
     * @param name attribute name
     */
    getAttribute(name: string): string | null | undefined;
    /**
     * Set attribute value
     * @param name attribute name
     * @param value attribute value
     */
    setAttribute(name: string, value: string | null | undefined): this;
    /**
     * Remove attribute
     * @param name attribute name
     */
    removeAttribute(name: string): this;
    connectStyle(style: EventDispatcher, type: string, callback: IStyleListener.AttributeCallback): this;
    disconnectStyle(style: EventDispatcher, type: string, callback: IStyleListener.AttributeCallback): this;
    /**
     * Reset own styles
     */
    protected resetElementStyle(): this;
    /**
     * Return collected inner css style
     * @returns inner css style
     */
    getInnerCssStyle(): null | string;
    /**
     * Set text value
     * @param text text value
     * @returns this
     */
    setText(text: string): this;
    /**
     * Set XML content
     * @param xmlValue xml to parse
     * @returns promise
     */
    setXmlContent(xmlValue: string): Promise<NodeList<Node> | null>;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties: Element.Options): this;
    /**
     * Gets the element properties
     * @returns props
     */
    getProperties(): Element.Options;
}
export declare namespace Element {
    type Options = {
        /**
         * css class
         */
        cssclass?: string;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.Changed]: NodeEventArgs | {
            type: string;
            oldValue: any;
            newValue: any;
        };
    };
}
