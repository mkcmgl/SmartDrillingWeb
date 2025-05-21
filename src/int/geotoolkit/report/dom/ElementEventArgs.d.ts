/**
 * @module geotoolkit/report/dom/ElementEventArgs
 */
import { BaseEventArgs } from '@int/geotoolkit/controls/tools/BaseEventArgs';
import type { Element } from '@int/geotoolkit/report/dom/Element';
/**
 * Element event args
 */
export declare class ElementEventArgs extends BaseEventArgs {
    /**
     * @param eventName name of the event
     */
    constructor(eventName: string);
    /**
     * Set parent element
     * @param parentElement parent element
     * @returns this
     */
    setParentElement(parentElement: Element): this;
    /**
     * Get parent element
     * @returns parent element
     */
    getParentElement(): Element;
    /**
     * Set element
     * @param element element
     * @returns this
     */
    setElement(element: Element): this;
    /**
     * Get element
     * @returns element
     */
    getElement(): Element;
    /**
     * Cancel event
     * @returns this
     */
    cancel(): this;
}
