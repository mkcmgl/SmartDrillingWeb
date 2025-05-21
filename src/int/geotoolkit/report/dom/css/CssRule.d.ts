import type { CssStyleSheet } from '@int/geotoolkit/report/dom/css/CssStyleSheet';
/**
 * Defines CSS Rule
 */
export declare class CssRule {
    constructor();
    /**
     * Represents the textual representation of the rule, e.g. "h1,h2 \{ font-size: 16pt \}" or "@import 'url'". To access or modify parts of the rule (e.g. the value of "font-size" in the example)
     * @name module:geotoolkit/report/dom/css/CssRule~CssRule#cssText
     */
    get cssText(): string;
    /**
     * Returns the containing rule, otherwise null. E.g. if this rule is a style rule inside an @media block, the parent rule would be that CSSMediaRule.
     * @name module:geotoolkit/report/dom/css/CssRule~CssRule#parentRule
     */
    get parentRule(): CssRule;
    /**
     * Returns the object for the style sheet that contains this rule
     * @name module:geotoolkit/report/dom/css/CssRule~CssRule#parentStyleSheet
     */
    get parentStyleSheet(): CssStyleSheet;
    static getClassName(): string;
    getClassName(): string;
}
