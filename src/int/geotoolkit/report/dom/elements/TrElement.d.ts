import { ContainerElement } from '@int/geotoolkit/report/dom/elements/ContainerElement';
import { VerticalAlign } from '@int/geotoolkit/report/dom/css/VerticalAlign';
import { TdElement } from '@int/geotoolkit/report/dom/elements/TdElement';
import type { NodeList } from '@int/geotoolkit/report/dom/NodeList';
import type { TableElement } from '@int/geotoolkit/report/dom/elements/TableElement';
import type { Node } from '@int/geotoolkit/report/dom/Node';
import type { AbstractTextElement } from '@int/geotoolkit/report/dom/elements/AbstractTextElement';
/**
 * Tr is a container element
 */
export declare class TrElement extends ContainerElement {
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
     * Returns an iterable collection of cells in the table row number all the <td> or <th> element.
     * @name module:geotoolkit/report/dom/elements/TrElement~TrElement#cells
     */
    get cells(): NodeList<TdElement>;
    insertBefore(newChild: Node, refChild: Node): this;
    insertAfter(newChild: Node, refChild: Node): this;
    removeChild(child: Node): this;
    /**
     * Return Table element
     */
    getTableElement(): TableElement | null;
    /**
     * Sets the element properties
     * @param props props
     * @returns this
     */
    setProperties(props: TrElement.Options): this;
}
export declare namespace TrElement {
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
