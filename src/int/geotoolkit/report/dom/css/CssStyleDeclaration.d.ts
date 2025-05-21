import type { CssRule } from '@int/geotoolkit/report/dom/css/CssRule';
/**
 * Defines CSS Style Declaration
 */
export declare class CssStyleDeclaration {
    constructor();
    /**
     * Textual representation of the declaration block, if and only if it is exposed via HTMLElement.style.
     * Setting this attribute changes the inline style. If you want a text representation of a computed declaration block, you can get it with JSON.stringify().
     * @name module:geotoolkit/report/dom/css/CssStyleDeclaration~CssStyleDeclaration#cssText
     */
    get cssText(): string;
    /**
     * Returns the containing rule, otherwise null. E.g. if this rule is a style rule inside an @media block, the parent rule would be that CSSMediaRule.
     * @name module:geotoolkit/report/dom/css/CssStyleDeclaration~CssStyleDeclaration#parentRule
     */
    get parentRule(): CssRule;
    /**
     * Return length of the rules list
     * @name module:geotoolkit/report/dom/css/CssStyleDeclaration~CssStyleDeclaration#length
     */
    get length(): number;
    /**
     * Returns the optional priority, "important".
     * @param property CSS style property
     * @returns property priority
     */
    getPropertyPriority(property: string): null | string;
    /**
     * Returns the property value given a property name.
     * @param property CSS style property name
     * @returns property value
     */
    getPropertyValue(property: string): null | string;
    /**
     * Removes a property from the CSS declaration block.
     * @param property CSS style property
     * @returns oldValue is a string equal to the value of the CSS property before it was removed.
     */
    removeProperty(property: string): string | null;
    /**
     * Modifies an existing CSS property or creates a new CSS property in the declaration block.
     * @param property CSS style property name
     * @param value CSS style property value
     * @param [priority] CSS style property priority
     * @returns this
     */
    setProperty(property: string, value: string, priority?: string): this;
    static getClassName(): string;
    getClassName(): string;
}
