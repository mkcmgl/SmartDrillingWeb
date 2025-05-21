import { Span } from '@int/geotoolkit/report/dom/elements/Span';
import { IPhrasingContainer } from '@int/geotoolkit/report/dom/elements/IPhrasingContainer';
import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * Label is a text container element binded to another element
 */
export declare class Label extends Span implements IPhrasingContainer {
    /**
     * @param [options] properties object
     */
    constructor(options?: Label.Options);
    /**
     * Return target element reference id
     * @name module:geotoolkit/report/dom/elements/Label~Label#for
     * @readonly
     */
    get for(): string;
    /**
     * Return target element reference id
     * @returns target element reference id
     */
    getFor(): null | string;
    /**
     * Set element reference id
     * @param forId element reference id
     */
    setFor(forId: null | string): this;
    /**
     * Sets the element properties
     * @param props properties object
     * @returns this
     */
    setProperties(props: Label.OptionsIn): this;
}
export declare namespace Label {
    /**
     * properties object
     */
    type Options = Node.Options & {
        /**
         * properties binding object id
         */
        for?: null | string;
    };
    /**
     * properties object
     */
    type OptionsIn = Span.Options & {
        /**
         * properties binding object id
         */
        for?: null | string;
    };
}
