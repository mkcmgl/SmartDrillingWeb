/**
 * @module geotoolkit/report/dom/elements/TrContainer
 */
import { AbstractTextElement } from '@int/geotoolkit/report/dom/elements/AbstractTextElement';
import { ITrContainer } from '@int/geotoolkit/report/dom/elements/ITrContainer';
import { VerticalAlign } from '@int/geotoolkit/report/dom/css/VerticalAlign';
import { TrElement } from '@int/geotoolkit/report/dom/elements/TrElement';
import type { TableElement } from '@int/geotoolkit/report/dom/elements/TableElement';
import type { NodeList } from '@int/geotoolkit/report/dom/NodeList';
import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * Table rows container element
 */
export declare class TrContainer extends AbstractTextElement implements ITrContainer {
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
     * Return Table element
     */
    getTableElement(): TableElement;
    /**
     * The rows return an iterable collection of all <tr> elements in a table.
     * @name module:geotoolkit/report/dom/elements/TableElement~TableElement#rows
     */
    get rows(): NodeList<TrElement>;
    /**
     * Sets the element properties
     * @param props props
     * @returns this
     */
    setProperties(props: TrContainer.Options): this;
}
export declare namespace TrContainer {
    /**
     * props
     */
    type Options = AbstractTextElement.Options & {
        /**
         * vertical alignment type
         */
        verticalalign?: VerticalAlign;
    };
}
