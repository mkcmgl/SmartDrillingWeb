import { ElementContent } from '@int/geotoolkit/report/elements/ElementContent';
import { Element } from '@int/geotoolkit/report/elements/Element';
import { IElement } from '@int/geotoolkit/report/elements/IElement';
import { IWireElement } from '@int/geotoolkit/report/elements/IWireElement';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
/**
 * Define representation of Composite DOM element
 */
export declare class CompositeElement extends Element implements IElement, IWireElement {
    /**
     * @param [options] options object
     */
    constructor(options?: Element.Options | ElementContent);
    clone(): CompositeElement;
    protected copyConstructor(src: CompositeElement, deepCopy?: boolean): this;
    /**
     * Return text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text style
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
}
