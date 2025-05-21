/**
 * @module geotoolkit/report/dom/elements/Document
 */
import { Element } from '@int/geotoolkit/report/dom/Element';
import { ElementEventArgs } from '@int/geotoolkit/report/dom/ElementEventArgs';
import { PaperFormat } from '@int/geotoolkit/scene/exports/PaperFormat';
import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * Document Events
 * @readonly
 * @enum
 * @events
 */
export declare enum DocumentEvents {
    /**
     * ChildAdding
     * @event module:geotoolkit/report/dom/elements/Document~DocumentEvents~ChildAdding
     */
    ChildAdding = "ChildAdding"
}
/**
 * Document is root document element
 */
export declare class Document extends Element {
    constructor(options: Node.Options);
    on<E extends keyof Document.EventMap>(type: E, callback: (eventType: E, sender: this, args: Document.EventMap[E]) => void): this;
    off<E extends keyof Document.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Document.EventMap[E]) => void): this;
    notify<E extends keyof Document.EventMap>(type: E, source: Document, args?: Document.EventMap[E]): this;
    /**
     * Return true if document is locked
     */
    isLocked(): boolean;
    /**
     * Lock document
     */
    lock(): this;
    /**
     * Unlock document
     */
    unlock(): this;
    /**
     * Return document paper format
     * @returns paper format
     */
    getPaperFormat(): PaperFormat | null;
    /**
     * Set document paper format
     * @param paperFormat paper format
     * @returns this
     */
    setPaperFormat(paperFormat: PaperFormat | null): this;
    /**
     * Gets document properties
     * @returns object containing document properties
     */
    getProperties(): Document.Properties;
    /**
     * Sets document properties
     * @param [properties] document properties
     * @returns this
     */
    setProperties(properties: Document.Properties): this;
}
export declare namespace Document {
    /**
     * document properties
     */
    type Properties = Element.Options & {
        /**
         * paper format
         */
        paperformat?: PaperFormat;
    };
    type EventMap = Element.EventMap & {
        [DocumentEvents.ChildAdding]: ElementEventArgs;
        'unlock': void;
    };
}
