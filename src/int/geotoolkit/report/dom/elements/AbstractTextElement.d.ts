import { AbstractElement } from '@int/geotoolkit/report/dom/elements/AbstractElement';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { VerticalAlign } from '@int/geotoolkit/report/dom/css/VerticalAlign';
import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * AbstractTextElement is an interface from which allow to specify text style;
 * for example, inheriting the same set of methods, or being testable in the same way.<br>
 * <br>
 */
export declare class AbstractTextElement extends AbstractElement {
    constructor(options?: Node.Options);
    protected onResetCssProperties(silent: boolean): this;
    /**
     * Sets text style
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * Return text style
     * @returns text style
     */
    getTextStyle(): TextStyle | null;
    /**
     * Gets element properties
     * @returns props
     */
    getProperties(): AbstractTextElement.OptionsOut;
    /**
     * Sets the element properties
     * @param props props
     * @returns this
     */
    setProperties(props: AbstractTextElement.Options): this;
}
export declare namespace AbstractTextElement {
    /**
     * props
     */
    type OptionsOut = AbstractElement.Options & {
        /**
         * text style
         */
        textstyle?: TextStyle;
        /**
         * vertical alignment type
         */
        verticalalign?: VerticalAlign;
    };
    /**
     * The options
     */
    type Options = AbstractElement.Options & {
        /**
         * text style
         */
        textstyle?: TextStyle;
    };
}
