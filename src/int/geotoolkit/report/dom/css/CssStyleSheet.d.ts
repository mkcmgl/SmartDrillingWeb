import { StyleSheet } from '@int/geotoolkit/report/dom/css/StyleSheet';
import { CssRuleList } from '@int/geotoolkit/report/dom/css/CssRuleList';
/**
 * Defines CSS Style Sheet
 */
export declare class CssStyleSheet extends StyleSheet {
    constructor(options?: StyleSheet.Options);
    /**
     * Returns a live css rules list which maintains an up-to-date list of the css rule objects that comprise the stylesheet.
     * @name module:geotoolkit/report/dom/css/CssStyleSheet~CssStyleSheet#cssRules
     */
    get cssRules(): CssRuleList;
    /**
     * Delete Rule at specified index
     * @param index rule index to delete
     * @returns this
     */
    deleteRule(index: number): this;
    /**
     * Insert new CSS rule into the current style sheet
     * @param cssttext a DOMString containing the rule to be inserted. What the inserted rule must contain depends on its type:
     * @param [index] A positive integer less than or equal to stylesheet.cssRules.length, representing the newly inserted rule's position in CssStyleSheet.cssRules. The default is 0.
     * @returns The newly inserted rule's index within the stylesheet's rule-list.
     */
    insertRule(cssttext: string, index?: number): number;
    /**
     * Asynchronously replaces the content of the stylesheet and returns a Promise that resolves with the updated CssStyleSheet.
     * @param cssText A string containing the style rules to replace the content of the stylesheet. If the string does not contain a parseable list of rules, then the value will be set to an empty string.
     * @returns A Promise that resolves with a CssStyleSheet.
     */
    replace(cssText: string): Promise<CssStyleSheet>;
    /**
     * Synchronously replaces the content of the stylesheet.
     * @param cssText A string containing the style rules to replace the content of the stylesheet. If the string does not contain a parseable list of rules, then the value will be set to an empty string.
     * @throws {Error} if cssText is invalid
     * @returns this
     */
    replaceSync(cssText: string): this;
}
