/**
 * @module geotoolkit/report/dom/Document
 */
import { Element } from '@int/geotoolkit/report/dom/Element';
import { StyleSheetList } from '@int/geotoolkit/report/dom/css/StyleSheetList';
import { DocumentEvents } from '@int/geotoolkit/report/dom/elements/Document';
import { CssStyleSheet } from '@int/geotoolkit/report/dom/css/CssStyleSheet';
import { Body } from '@int/geotoolkit/report/dom/elements/Body';
import { Attribute } from '@int/geotoolkit/report/dom/Attribute';
import { Node } from '@int/geotoolkit/report/dom/Node';
import type { Document as _Document } from '@int/geotoolkit/report/dom/elements/Document';
import type { IParser } from '@int/geotoolkit/report/dom/IParser';
import type { IElementsRegistry } from '@int/geotoolkit/report/dom/IElementsRegistry';
import type { ElementEventArgs } from '@int/geotoolkit/report/dom/ElementEventArgs';
/**
 * Document
 */
export declare class Document extends Element {
    constructor(options?: Document.Options);
    on<E extends keyof Document.EventMap>(type: E, callback: (eventType: E, sender: this, args: Document.EventMap[E]) => void): this;
    off<E extends keyof Document.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Document.EventMap[E]) => void): this;
    notify<E extends keyof Document.EventMap>(type: E, source: Document, args?: Document.EventMap[E]): this;
    /**
     * Returns a live style sheet list which maintains an up-to-date list of the css rule objects that comprise the stylesheet.
     * @name module:geotoolkit/report/dom/Document~Document#styleSheets
     */
    get styleSheets(): StyleSheetList;
    /**
     * Returns clone array of a live collection which contains application specific CssStyleSheets
     * Note: .adoptedStyleSheets can accept standard window.CssStyleSheet objects as well, but keep in mind that those kind of objects will be converted, and you will not be able to use it after
     * also, all Carnac specific styles will be lost, or converted, if standard CssStyleSheet can not recognise it
     * for example `{border: 1px [pattern] color;}`
     * @name module:geotoolkit/report/dom/Document~Document#adoptedStyleSheets
     * @example
     * import {CssStyleSheet} from '@int/geotoolkit/report/dom/css/CssStyleSheet';
     * const sheet = new CssStyleSheet();
     * sheet.replaceSync('a { color: red; }');
     * // Combine existing sheets with our new one:
     * document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
     */
    get adoptedStyleSheets(): CssStyleSheet[];
    /**
     * Returns clone array of a live collection which contains application specific CssStyleSheets
     * Note: .adoptedStyleSheets can accept standard window.CssStyleSheet objects as well, but keep in mind that those kind of objects will be converted, and you will not be able to use it after
     * also, all Carnac specific styles will be lost, or converted, if standard CssStyleSheet can not recognise it
     * for example `{border: 1px [pattern] color;}`
     * @name module:geotoolkit/report/dom/Document~Document#adoptedStyleSheets
     * @example
     * import {CssStyleSheet} from '@int/geotoolkit/report/dom/css/CssStyleSheet';
     * const sheet = new CssStyleSheet();
     * sheet.replaceSync('a { color: red; }');
     * // Combine existing sheets with our new one:
     * document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
     */
    set adoptedStyleSheets(styleSheets: CssStyleSheet[]);
    /**
     * Lock document
     */
    lock(): this;
    /**
     * Unlock document
     */
    unlock(): this;
    /**
     * DOM Document root element
     * @name module:geotoolkit/report/dom/Document~Document#documentElement
     */
    get documentElement(): _Document;
    /**
     * Return DOM root element
     */
    getDocumentElement(): _Document;
    /**
     * DOM Document root element
     * @name module:geotoolkit/report/dom/Document~Document#head
     */
    get head(): Element | null;
    /**
     * DOM Document body element
     * @name module:geotoolkit/report/dom/Document~Document#body
     */
    get body(): Body | null;
    /**
     * Create new element with specified tag name
     * @param options tag name or option
     * @param elementRegistry shadow registry
     */
    createElement(options: string | Node.Options, elementRegistry?: IElementsRegistry): Element | Node;
    /**
     * Create new Attribute
     * @param options or attribute name
     */
    createAttribute(options: string | object): Attribute;
}
export declare namespace Document {
    /**
     * The options
     */
    type Options = Node.Options & {
        /**
         * document parser
         */
        parser?: IParser | null;
    };
    type EventMap = Element.EventMap & {
        [DocumentEvents.ChildAdding]: ElementEventArgs;
    };
}
