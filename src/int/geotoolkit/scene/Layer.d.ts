import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { Node } from '@int/geotoolkit/scene/Node';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { ModelLimitsStrategy } from '@int/geotoolkit/scene/ModelLimitsStrategy';
import type { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * Define a composite node, which always has the same bounds and model limits as its parent
 */
export declare class Layer<T extends Node = Node> extends CompositeNode<T> {
    /**
     * Creates layer
     * @param [options] layer options
     */
    constructor(options?: Layer.Options<T>);
    clone(): Layer;
    protected copyConstructor(src: Layer, deepCopy?: boolean): this;
    /**
     * Returns infinite flag, flag that indicates infinite limits of the layer
     */
    getIsInfinite(): boolean | undefined;
    /**
     * Set infinite flag, this flag indicates that the layer has infinite limits
     * @param infinite infinite flag
     * @returns this
     */
    setIsInfinite(infinite: boolean | undefined): this;
    /**
     * Set a strategy for calculating model limits. If it is null, the limits of the parent model are used.
     * @param strategy Model Limits logic strategy to use
     * @returns this
     */
    setAutoModelLimitsStrategy(strategy: ModelLimitsStrategy): this;
    /**
     * Get a strategy for calculating model limits
     * @returns strategy If it is null, the limits of the parent model are used.
     */
    getAutoModelLimitsStrategy(): ModelLimitsStrategy;
    /**
     * Returns parent bounds
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * Returns parent model limits
     */
    getModelLimits(): Rect;
    /**
     * Invalidate parent and notify all listeners.
     * @param [bounds] bounds of the invalid rectangle in the inner node coordinates
     * @param [force] force invalidate
     * @returns this
     */
    invalidateParent(bounds?: Rect, force?: boolean): this;
}
export declare namespace Layer {
    /**
     * addition options
     */
    type Options<T extends Node = Node> = CompositeNode.Options<T> & {
        /**
         * vertical axis goes from bottom to top
         */
        verticalflip?: boolean;
        /**
         * horizontal axis goes from right to left
         */
        horizontalflip?: boolean;
        /**
         * define inner model coordinates of the group
         */
        modellimits?: Rect | null;
        /**
         * define position of the group in the parent
         */
        bounds?: Rect | null;
        /**
         * auto model limits strategy
         */
        automodellimitsstrategy?: ModelLimitsStrategy;
        /**
         * the child nodes to be added
         */
        children?: Node | Node[] | Iterator<Node>;
        /**
         * Define dynamic layer
         */
        dynamic_layer?: boolean;
    };
}
