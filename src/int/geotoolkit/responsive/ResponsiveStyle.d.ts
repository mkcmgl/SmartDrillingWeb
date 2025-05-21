import { Style } from '@int/geotoolkit/attributes/Style';
import { CssStyle } from '@int/geotoolkit/css/CssStyle';
import { Events, Node } from '@int/geotoolkit/scene/Node';
/**
 * Defines behavior of responsive nodes.
 *
 * @example
 * // Function as condition
 * import {ResponsiveStyle} from '@int/geotoolkit/responsive/ResponsiveStyle';
 * const rules = [
 *   {
 *       'condition': (node) => return node.getBounds().getWidth() < 500 && node.getBounds().getWidth() > 200,
 *       'properties': {
 *           'z': {
 *               'annotationsize': 0
 *           }
 *       }
 *  }];
 * const style = new ResponsiveStyle({
 *   'rules': rules
 * });
 * @example
 * // Object as condition
 * const rules = [
 *   {
 *      'condition': {
 *          'maxWidth': 500,
 *          'maxHeight': 500
 *        },
 *       'properties': {
 *           'z': {
 *               'annotationsize': 0
 *           }
 *       }
 *  }];
 * const style = new ResponsiveStyle({
 *   'rules': rules
 * });
 * @example
 * // Expressions as condition
 * const rules = [
 *   {
 *      'condition': 'node => width(node) < 500 || height(node) < 500',
 *       'properties': {
 *           'z': {
 *               'annotationsize': 0
 *           }
 *       }
 *  }];
 * const style = new ResponsiveStyle({
 *   'rules': rules
 * });
 * @example
 * // CSS style as properties
 * const rules = [
 *   {
 *       'condition': (node) => node.getBounds().getWidth() < 500 && node.getBounds().getWidth() > 200,
 *       'css': [
 *               '.Grid { ',
 *               ' visible: false;',
 *               '}',
 *               '.CrossPlot {',
 *               'z-annotationsize: 0;',
 *               'x-annotationsize: 0;',
 *               'y-annotationsize: 0;',
 *               '}'
 *       ].join('\n')
 *  }];
 */
export declare class ResponsiveStyle extends Style {
    constructor(options?: ResponsiveStyle.Options);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: ResponsiveStyle): this;
    /**
     * Check if style should be applied for the current event
     * @param event event to check
     */
    supportsEvent(event: string | Events): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): ResponsiveStyle.OptionsOut;
    /**
     * Apply rules for the current node
     * @param node current instance of the node
     * @param target current instance of the target node
     */
    apply(node: Node, target?: Node): this;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: ResponsiveStyle.Options): this;
    /**
     * Create or get responsive style from object
     *
     * @param object object can be in format of constructor {@link @int/geotoolkit/responsive/ResponsiveStyle~ResponsiveStyle}
     * @returns responsive style
     */
    static fromObject(object: ResponsiveStyle.Options | ResponsiveStyle | null): ResponsiveStyle | null;
}
export declare namespace ResponsiveStyle {
    /**
     * options
     */
    export type Options = {
        /**
         * start applying options
         */
        start?: ApplyCallback;
        /**
         * end applying options
         */
        end?: ApplyCallback;
        /**
         * optional target to apply styles
         */
        target?: Node;
        /**
         * an array of rules {@link import("geotoolkit/responsive/ResponsiveStyle").ResponsiveStyle.Options.Rule}
         */
        rules?: Rule[] | Rule;
        /**
         * events to apply responsive style
         */
        events?: Events[] | string[];
    };
    export type OptionsOut = {
        /**
         * start applying options
         */
        start: ApplyCallback;
        /**
         * end applying options
         */
        end: ApplyCallback;
        /**
         * optional target to apply styles
         */
        target: Node;
        /**
         * an array of rules {@link import("geotoolkit/responsive/ResponsiveStyle").ResponsiveStyle.Options.Rule}
         */
        rules: Rule[];
        /**
         * events
         */
        events: Events[] | string[];
    };
    /**
     * The rule definition.
     */
    export type Rule = {
        /**
         * a rule condition to apply. It can be a string to represent expression or function
         * with one parameter node or an object
         */
        condition?: string | {
            /**
             * a maximum width of the bounds to apply rule
             */
            maxwidth?: number;
            /**
             * a maximum height of the bounds to apply rule
             */
            maxheight?: number;
            /**
             * a minimum width of the bounds to apply rule
             */
            minwidth?: number;
            /**
             * a minimum height of the bounds to apply rule
             */
            minheight?: number;
        } | ConditionCallback;
        /**
         * a set of properties to apply for the current object if a condition is met.
         * It apply specified properties using setProperties method.
         */
        properties?: Record<string, any>;
        /**
         * a set of options with selectors specified as CSS style to be applied for selected
         * children of the current object if a condition is met
         */
        css?: string | CssStyle;
        /**
         * a function to apply changes if condition is met. If it is specified state is not saved and css and properties are ignored
         */
        apply?: ApplyCallback;
        /**
         * restore previous state before applying new rules
         */
        restore?: boolean;
        /**
         * true if restoring state includes node children's state
         */
        deep?: boolean;
    };
    export type ApplyCallback = (source: Node) => void;
    type ConditionCallback = (node: Node, css: CssStyle) => boolean;
    export {};
}
