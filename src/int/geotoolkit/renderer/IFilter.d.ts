/**
 * @module geotoolkit/renderer/IFilter
 */
import type { Node } from '@int/geotoolkit/scene/Node';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Define an interface that controls whether or not to render a particular nodes
 * @interface
 */
export declare abstract class IFilter {
    /**
     * Checks if the node should be drawn.
     * <p>
     * All children nodes will be given the chance to render or not to render.
     * </p>
     * @param node node to check
     * @param [context] rendering context
     * @returns flag filter flag ("true" to render node; "false" otherwise)
     */
    abstract filter(node: Node, context?: RenderingContext): boolean;
    /**
     * Begin filtering. If a filter should be applied to children nodes it needs to
     * be added to context and removed in the method end
     * @example
     * // Implementation of the filter to be applied for children
     * begin (context?: RenderingContext) {
     *   context.addFilter(this);
     * }
     * @param [context] rendering context
     * @returns this
     */
    abstract begin(context?: RenderingContext): this;
    /**
     * End filtering. If a filter should be applied to children nodes it needs to
     * be added to context and removed in the method end
     * @example
     * // Implementation of the filter to be applied for children
     * end (context?: RenderingContext) {
     *   context.removeFilter(this);
     * }
     * @param [context] rendering context
     * @returns this
     */
    abstract end(context?: RenderingContext): this;
    getClassName(): string;
    static getClassName(): string;
}
