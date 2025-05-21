/**
 * @module geotoolkit/report/dom/css/StyleSheet
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Events } from '@int/geotoolkit/scene/Node';
import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * Defines CSS Style Sheet
 */
export declare class StyleSheet extends EventDispatcher {
    constructor(options?: StyleSheet.Options);
    on<E extends keyof StyleSheet.EventMap>(type: E, callback: (eventType: E, sender: this, args: StyleSheet.EventMap[E]) => void): this;
    off<E extends keyof StyleSheet.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: StyleSheet.EventMap[E]) => void): this;
    notify<E extends keyof StyleSheet.EventMap>(type: E, source: StyleSheet, args?: StyleSheet.EventMap[E]): this;
    /**
     * Is a boolean value representing whether the current stylesheet has been applied or not.
     * @name module:geotoolkit/report/dom/css/StyleSheet~StyleSheet#disabled
     */
    get disabled(): boolean;
    /**
     * Is a boolean value representing whether the current stylesheet has been applied or not.
     * @name module:geotoolkit/report/dom/css/StyleSheet~StyleSheet#disabled
     */
    set disabled(disabled: boolean);
    /**
     * Returns a string representing the location of the stylesheet.
     * @name module:geotoolkit/report/dom/css/StyleSheet~StyleSheet#href
     */
    get href(): string;
    /**
     * Returns a string representing the intended destination medium for style information.
     * @name module:geotoolkit/report/dom/css/StyleSheet~StyleSheet#media
     */
    get media(): string;
    /**
     * Returns a Node associating this style sheet with the current document.
     * @name module:geotoolkit/report/dom/css/StyleSheet~StyleSheet#ownerNode
     */
    get ownerNode(): Node;
    /**
     * Returns a string representing the advisory title of the current style sheet.
     * @name module:geotoolkit/report/dom/css/StyleSheet~StyleSheet#parentStyleSheet
     */
    get parentStyleSheet(): StyleSheet;
    /**
     * Returns a string representing the style sheet language for this style sheet.
     * @name module:geotoolkit/report/dom/css/StyleSheet~StyleSheet#type
     */
    get type(): string;
    /**
     * Returns a string representing the style sheet language for this style sheet.
     * @name module:geotoolkit/report/dom/css/StyleSheet~StyleSheet#type
     */
    set type(type: string);
    /**
     * Returns a string representing the advisory title of the current style sheet.
     * @name module:geotoolkit/report/dom/css/StyleSheet~StyleSheet#title
     */
    get title(): string;
}
export declare namespace StyleSheet {
    /**
     * optionals options
     */
    type Options = {
        /**
         * A string containing the baseURL used to resolve relative URLs in the stylesheet.
         */
        baseurl?: string;
        /**
         * A MediaList containing a list of media rules, or a string containing a single rule.
         */
        media?: string;
        /**
         * A Boolean indicating whether the stylesheet is disabled. False by default.
         */
        disabled?: string;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.Invalidate]: void;
    };
}
