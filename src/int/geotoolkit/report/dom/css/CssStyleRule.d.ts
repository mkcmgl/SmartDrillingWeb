/**
 * @module geotoolkit/report/dom/css/CssStyleRule
 */
import { CssRule } from '@int/geotoolkit/report/dom/css/CssRule';
import { CssStyleDeclaration } from '@int/geotoolkit/report/dom/css/CssStyleDeclaration';
/**
 * Defines CSS Style Rule
 */
export declare class CssStyleRule extends CssRule {
    constructor();
    /**
     * Returns the textual representation of the selector for this rule, e.g. "h1,h2".
     * @name module:geotoolkit/report/dom/css/CssStyleRule~CssStyleRule#selectorText
     */
    get selectorText(): string;
    /**
     * Returns the textual representation of the selector for this rule, e.g. "h1,h2".
     * @name module:geotoolkit/report/dom/css/CssStyleRule~CssStyleRule#selectorText
     */
    set selectorText(selectorText: string);
    /**
     * Returns the style declaration object for the rule.
     * @name module:geotoolkit/report/dom/css/CssStyleRule~CssStyleRule#style
     */
    get style(): CssStyleDeclaration | null;
}
