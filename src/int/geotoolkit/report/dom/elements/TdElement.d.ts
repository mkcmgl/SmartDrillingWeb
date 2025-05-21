/**
 * @module geotoolkit/report/dom/elements/TdElement
 */
import { ContainerElement } from '@int/geotoolkit/report/dom/elements/ContainerElement';
import { IElementContainer } from '@int/geotoolkit/report/dom/elements/IElementContainer';
import { VerticalAlign } from '@int/geotoolkit/report/dom/css/VerticalAlign';
import type { TrElement } from '@int/geotoolkit/report/dom/elements/TrElement';
import type { TableElement } from '@int/geotoolkit/report/dom/elements/TableElement';
import type { Node } from '@int/geotoolkit/report/dom/Node';
import type { AbstractTextElement } from '@int/geotoolkit/report/dom/elements/AbstractTextElement';
/**
 * Td is a container element
 */
export declare class TdElement extends ContainerElement implements IElementContainer {
    constructor(options: Node.Options);
    /**
     * Return vertical alignment type
     * @returns vertical alignment type
     */
    getVerticalAlign(): VerticalAlign | null;
    /**
     * Set vertical alignment type
     * @param verticalAlign vertical alignment type
     * @returns this
     */
    setVerticalAlign(verticalAlign: VerticalAlign | null): this;
    /**
     * Return Tr element
     */
    getTrElement(): TrElement;
    /**
     * Return Table element
     */
    getTableElement(): TableElement;
    /**
     * Return text value
     * @returns text value
     */
    getText(): string | null;
    /**
     * Gets element properties
     * @returns props
     */
    getProperties(): TdElement.OptionsOut;
    /**
     * Sets the element properties
     * @param props props
     * @returns this
     */
    setProperties(props: TdElement.Options): this;
}
export declare namespace TdElement {
    /**
     * props
     */
    type OptionsOut = AbstractTextElement.OptionsOut & {
        /**
         * vertical alignment type
         */
        verticalalign?: VerticalAlign | null;
    };
    /**
     * The options
     */
    type Options = AbstractTextElement.Options & {
        /**
         * vertical alignment type
         */
        verticalalign?: VerticalAlign;
    };
}
