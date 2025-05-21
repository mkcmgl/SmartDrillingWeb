/**
 * @module geotoolkit/report/dom/elements/InlineElement
 */
import { Element } from '@int/geotoolkit/report/dom/Element';
/**
 * Text  element
 */
export declare class InlineElement extends Element {
    protected onResetCssProperties(): this;
    /**
     * Return text value
     * @returns text value
     */
    getText(): null | string;
}
