import { Group } from '@int/geotoolkit/scene/Group';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Element } from '@int/geotoolkit/report/elements/Element';
/**
 * Enum of element content orientation (Element.Orientation.Vertical | Element.Orientation.Horizontal)
 * @enum
 * @readonly
 */
export declare enum Orientation {
    /**
     * Vertical: default orientation
     */
    Vertical = "vertical",
    /**
     * Horizontal: horizontal orientation, all content is rotated -90° degree
     */
    Horizontal = "horizontal"
}
export declare class ElementContent extends Group {
    /**
     * @param [options] content options
     */
    constructor(options?: Group.Options);
    getParent(): Element;
    protected isOverflowClippingEnabled(): boolean;
    /**
     * Returns if soft clipping is enabled or not for this node.
     */
    isSoftClippingEnabled(): boolean;
    /**
     * Enables or disables soft clipping of content. If enabled,
     * shapes will be rendered semi-transparent outside of its bounds.
     *
     * @param doClip enable soft clipping on this node
     * @returns this
     */
    enableSoftClipping(doClip: boolean): this;
    /**
     * Returns content orientation
     */
    getOrientation(): Orientation;
    /**
     * Set content orientation
     * @param orientation orientation
     * @returns this
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Set flip content
     * @param flip content flip flag
     * @returns this
     */
    setFlip(flip: boolean): this;
    /**
     * Returns content flip flag
     */
    getFlip(): boolean;
    /**
     * Gets model limits, the limits of this groups inside space
     *
     * @returns the current model limits
     */
    getModelLimits(): Rect | null;
    /**
     * <code>getContentsTransform()</code> retrieves the world transformation of the node.
     *
     * @returns transformation from model coordinates to bounds of the element
     */
    getContentsTransform(): Transformation;
    /**
     * Apply layout
     */
    applyLayout(): this;
    /**
     * Rebuild layout
     */
    dropCache(): this;
}
