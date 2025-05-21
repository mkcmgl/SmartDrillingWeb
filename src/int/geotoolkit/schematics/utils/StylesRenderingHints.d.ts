/**
 * @module geotoolkit/schematics/utils/StylesRenderingHints
 */
import { RenderingHints } from '@int/geotoolkit/schematics/utils/RenderingHints';
import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
/**
 * Class to modify component's shape through their line and fill styles
 */
export declare class StylesRenderingHints extends RenderingHints {
    constructor(options?: StylesRenderingHints.Options);
    /**
     * Applies rendering hints
     * @param node schematics component node
     */
    apply(node: ComponentNode): void;
    /**
     * Saves default rendering state
     * @param node schematics component node
     */
    saveDefaults(node: ComponentNode): StylesRenderingHints.Defaults[];
    /**
     * Restores default rendering state
     * @param node schematics component node
     * @param defaults default rendering state
     */
    restoreDefaults(node: ComponentNode, defaults: StylesRenderingHints.Defaults[]): void;
}
export declare namespace StylesRenderingHints {
    type Options = {
        /**
         * function to calculate shape's fill style
         */
        getfillstyle?: (options: {
            componentnode: ComponentNode;
            shape: Node & {
                getLineStyle: () => LineStyle;
                getFillStyle: () => FillStyle;
            };
        }) => FillStyle | null;
        /**
         * function to calculate shape's line style
         */
        getlinestyle?: (options: {
            componentnode: ComponentNode;
            shape: Node & {
                getLineStyle: () => LineStyle;
                getFillStyle: () => FillStyle;
            };
        }) => LineStyle | null;
        /**
         * function to filter nodes
         */
        filternode?: (shape: Node) => boolean;
    };
    type Defaults = {
        shape: Shape;
        fillstyle?: FillStyle;
        linestyle?: LineStyle;
    };
}
