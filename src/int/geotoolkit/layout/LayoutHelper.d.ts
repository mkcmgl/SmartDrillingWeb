import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import type { Node } from '@int/geotoolkit/scene/Node';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Dimension } from '@int/geotoolkit/util/Dimension';
import type { Text } from '@int/geotoolkit/scene/shapes/Text';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * This utility class provides functions used by {@link @int/geotoolkit/layout/LayoutStyle~LayoutStyle} implementations
 */
export declare class LayoutHelper {
    /**
     * Converts desired width of the "node" layoutable component to number if possible
     *
     * @param node layoutable component
     * @param totalWidth parent width of the container or layoutable area
     * @returns converted value; or 0 if the node is not visible; or "undefined" the conversion failed.
     * @example
     * node.setDesiredWidth('15');
     * const w1 = LayoutHelper.getDesiredWidth(node); // So, w1==15.
     * node.setDesiredWidth('15%');
     * const w2 = LayoutHelper.getDesiredWidth(node, 200); // So, w2==30.
     */
    static getDesiredWidth(node: ILayoutable, totalWidth: number): number | undefined;
    /**
     * Converts desired height of the "node" layoutable component to number if possible
     *
     * @param node layoutable component
     * @param totalHeight parent height of the container or layoutable area
     * @returns converted value; or 0 if the node is not visible; or "undefined" the conversion failed.
     * @example
     * node.setDesiredHeight('15');
     * const h1 = LayoutHelper.getDesiredHeight(node); // So, h1==15.
     * node.setDesiredHeight('15%');
     * const h2 = LayoutHelper.getDesiredHeight(node, 200); // So, h2==30.
     */
    static getDesiredHeight(node: ILayoutable, totalHeight: number): number | undefined;
    /**
     * Returns left margin
     * @param node layoutable component
     * @param [totalWidth] parent width of the container or layoutable area
     */
    static getLeftMargin(node: ILayoutable, totalWidth?: number): number;
    /**
     * Returns right margin
     * @param node layoutable component
     * @param [totalWidth] parent width of the container or layoutable area
     */
    static getRightMargin(node: ILayoutable, totalWidth?: number): number;
    /**
     * Returns top margin
     * @param node layoutable component
     * @param [totalHeight] parent height of the container or layoutable area
     */
    static getTopMargin(node: ILayoutable, totalHeight?: number): number;
    /**
     * Returns bottom margin
     * @param node layoutable component
     * @param [totalHeight] parent height of the container or layoutable area
     */
    static getBottomMargin(node: ILayoutable, totalHeight?: number): number;
    /**
     * Gets the Maximum Height of layoutable component
     * @param node layoutable component
     * @param [totalHeight] parent height of the container or layoutable area
     * @returns Maximum Height
     */
    static getDesiredMaxHeight(node: ILayoutable, totalHeight?: number): number;
    /**
     * Gets the Minimum Height of layoutable component
     * @param node layoutable component
     * @param [totalHeight] parent height of the container or layoutable area
     * @returns Minimum Height
     */
    static getDesiredMinHeight(node: ILayoutable, totalHeight?: number): number;
    /**
     * Gets the Maximum Width of layoutable component
     * @param node layoutable component
     * @param [totalWidth] parent width of the container or layoutable area
     * @returns Maximum Width
     */
    static getDesiredMaxWidth(node: ILayoutable, totalWidth?: number): number;
    /**
     * Gets the Minimum Width of layoutable component
     * @param node layoutable component
     * @param [totalWidth] parent width of the container or layoutable area
     * @returns Minimum Width
     */
    static getDesiredMinWidth(node: ILayoutable, totalWidth?: number): number;
    /**
     * Gets the Flex Grow of layoutable component
     * @param node layoutable component
     * @returns Flex Grow
     */
    static getFlexGrow(node: ILayoutable): number;
    /**
     * Gets the Flex Shrink of layoutable component
     * @param node layoutable component
     * @returns Flex Shrink
     */
    static getFlexShrink(node: ILayoutable): number;
    /**
     * Update layout style preferred size based on size constrains from calculated size
     * @param style style to be updated
     * @param [rect] desired rect to layout
     */
    static getPreferredStyle(style: LayoutStyle, rect?: Rect | Dimension): LayoutStyle;
    /**
     * Notify that layout is invalidated. Send event {@link import("geotoolkit/layout/Events").Events.LayoutInvalidated}
     * @param item item
     * @param [propagate] propagate invalidate layout to parent
     */
    static invalidateParentLayout(item: Node, propagate?: boolean): void;
    /**
     * Notify that layout is invalidated. Send event {@link import("geotoolkit/layout/Events").Events.LayoutInvalidated}
     * @param item item
     * @param [propagate] propagate invalidate layout to parent
     */
    static invalidateLayout(item: CompositeNode, propagate?: boolean): void;
    /**
     * Sets desired size of text group, depends on text metrics
     * @param text text
     * @param groupText group with this text
     * @param location location of text
     */
    static setDesiredTextSize(text: Text, groupText: Group, location: AnnotationLocation): void;
}
