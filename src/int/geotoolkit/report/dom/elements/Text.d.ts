/**
 * @module geotoolkit/report/dom/elements/Text
 */
import { AbstractTextElement } from '@int/geotoolkit/report/dom/elements/AbstractTextElement';
import { IPhrasingContainer } from '@int/geotoolkit/report/dom/elements/IPhrasingContainer';
import type { AnchorType } from '@int/geotoolkit/util/AnchorType';
import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * Text  element
 */
export declare class Text extends AbstractTextElement implements IPhrasingContainer {
    constructor(options: Node.Options);
    /**
     * Return text alignment type
     */
    getAlignment(): AnchorType;
    /**
     * Sets the text alignment type.
     * @param alignment text alignment type
     * @returns this
     */
    setAlignment(alignment: AnchorType): this;
    /**
     * Return text value
     * @returns text value
     */
    getText(): null | string;
}
