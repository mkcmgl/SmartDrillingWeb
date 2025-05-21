/**
 * @module geotoolkit/css/CssStyle
 */
import { Style } from '@int/geotoolkit/attributes/Style';
import { Node } from '@int/geotoolkit/scene/Node';
import type { Registry } from '@int/geotoolkit/persistence/Registry';
/**
 * Enum of the supported css pseudo classes
 * @readonly
 * @enum
 */
export declare enum PseudoClass {
    /**
     * Hover pseudo class is added for nodes under current cursor position
     */
    Hover = "hover",
    /**
     * Selection pseudo class is added for nodes to mark it as selected by the user
     */
    Selection = "selection",
    /**
     * Enabled pseudo class is added to show the current status of nodes with enabled/disabled states
     */
    Enabled = "enabled",
    /**
     * Disabled pseudo class is added to show the current status of nodes with enabled/disabled states
     */
    Disabled = "disabled",
    /**
     * Highlight pseudo class is added for highlighted nodes
     */
    Highlight = "highlight"
}
/**
 * Defines a CSS style which has a set of css rules to be applied for a node and all children.
 * This CSS wrapper class can parse css given as a String.<br>
 * <b>CSS Styles Tutorial</b> in CarnacJS shows how CSS Styles can be applied.
 * @example
 * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
 * const css = ['',
 *  '* {',
 *  '   textstyle-color: darkblue;',
 *  '   textstyle-font: 42px Roboto; ',
 *  '   textstyle-alignment: center;  ',
 * '}'
 * ].join('\n');
 * // Style will be applied for all shapes
 * group.setCss(new CssStyle({'css': css}));
 * @example
 * // CSS as an object
 * const css = {
 *  'selector': '.Group',
 *      'properties': {
 *          'fillstyle': {
 *              'color': 'green'
 *          },
 *          'visible': false
 *       }
 * };
 * group.setCss(new CssStyle({
 *   'css': css
 * }));
 */
export declare class CssStyle extends Style {
    /**
     * Create CssStyle
     * @param [options] Object containing css and additional properties or the CSS string
     */
    constructor(options?: CssStyle.Options | CssStyle.Css | CssStyle.Css[] | string);
    /**
     * Return the current CSS properties
     */
    getCss(): CssStyle.Css | CssStyle.Css[] | string;
    clone(): CssStyle;
    /**
     * Apply CSS for the current node
     * @param node current instance of the node
     */
    apply(node: Node | Node[]): this;
    /**
     * Return a state of node and selected children before applying style
     * @param [node] node to apply selectors
     * @param [deep] true if state should include node children's state
     * @returns object with serialized properties to be changed
     */
    getState(node?: Node, deep?: boolean): any;
    /**
     * Create or get css style from object
     * @param [object] object can be in format of constructor of {@link @int/geotoolkit/css/CssStyle~CssStyle}
     * @returns css style
     */
    static fromObject(object?: CssStyle.Type): CssStyle | null;
    /**
     * Enable / disable applying style
     * If style is disabled it will not be applied for any node
     * @param enabled sets the enabled state
     * @returns this
     */
    setEnabled(enabled: boolean): this;
    /**
     * Returns enable state
     * @returns state
     */
    isEnabled(): boolean;
}
export declare namespace CssStyle {
    type Type = CssStyle | CssStyle.Options | CssStyle.Css | CssStyle.Css[] | string;
    /**
     * Object containing css and additional properties or the CSS string
     */
    type Options = {
        /**
         * css The css string to parse or object with selector and properties or array of objects with selector and properties
         */
        css?: string | Css | Css[];
        /**
         * registry of serializers for declaration blocks
         */
        registry?: Registry;
    };
    type Css = {
        /**
         * selector of CSS
         */
        selector: string;
        /**
         * properties to apply
         */
        properties: any;
    };
}
