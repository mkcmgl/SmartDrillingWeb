/**
 * @module geotoolkit/report/dom/css/CssUtil
 */
import { CssStyleRule } from '@int/geotoolkit/report/dom/css/CssStyleRule';
import { CssStyleSheet } from '@int/geotoolkit/report/dom/css/CssStyleSheet';
import { Document } from '@int/geotoolkit/report/dom/Document';
/**
 * Helper class for CSS Object Mode
 * The class CssUtil contains common methods for procession Css Styles in document.
 */
export declare class CssUtil {
    /**
     * Return all availabls CSS Classes <tag class=""/> in specified CSS object or document
     * @param cssObject css style sheet
     * @param tagName tag name
     * @param [classNames] class names
     * @returns available class names
     */
    static getClassesByTag(cssObject: Document | CssStyleSheet | CssStyleRule, tagName: string, classNames?: string[]): string[];
    static getClassName(): string;
    getClassName(): string;
}
