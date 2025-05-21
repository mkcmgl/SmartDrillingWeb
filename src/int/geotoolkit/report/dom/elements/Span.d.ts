import { ContainerElement } from '@int/geotoolkit/report/dom/elements/ContainerElement';
import { IPhrasingContainer } from '@int/geotoolkit/report/dom/elements/IPhrasingContainer';
import { VerticalAlign } from '@int/geotoolkit/report/dom/css/VerticalAlign';
import type { Node } from '@int/geotoolkit/report/dom/Node';
import type { AbstractTextElement } from '@int/geotoolkit/report/dom/elements/AbstractTextElement';
/**
 * Span is a text container element
 */
export declare class Span extends ContainerElement implements IPhrasingContainer {
    constructor(options: Node.Options);
    /**
     * Return vertical alignment type
     * @returns vertical alignment type
     */
    getVerticalAlign(): VerticalAlign;
    /**
     * Set vertical element alignment type
     * @param verticalAlign vertical alignment type
     * @returns this
     */
    setVerticalAlign(verticalAlign: VerticalAlign): this;
    /**
     * Return text value
     * @returns text value
     */
    getText(): null | string;
    /**
     * Gets the properties
     * @returns properties object
     */
    getProperties(): Span.OptionsOut;
    /**
     * Sets the element properties
     * @param props properties object
     * @returns this
     */
    setProperties(props: Span.Options): this;
}
export declare namespace Span {
    /**
     * properties object
     */
    type OptionsOut = AbstractTextElement.OptionsOut & {
        /**
         * vertical alignment type
         */
        verticalalign?: VerticalAlign | null;
    };
    /**
     * properties object
     */
    type Options = AbstractTextElement.Options & {
        /**
         * vertical alignment type
         */
        verticalalign?: VerticalAlign;
    };
}
