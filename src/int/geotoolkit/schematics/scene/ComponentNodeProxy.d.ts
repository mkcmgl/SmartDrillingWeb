/**
 * @module geotoolkit/schematics/scene/ComponentNodeProxy
 */
import { ReusableComponentNode } from '@int/geotoolkit/schematics/scene/ReusableComponentNode';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AnimatedNode } from '@int/geotoolkit/scene/AnimatedNode';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Encapsulates {@link @int/geotoolkit/schematics/scene/ReusableComponentNode~ReusableComponentNode}  instance
 * The given data will be deeply copied
 */
export declare class ComponentNodeProxy extends ComponentNode {
    /**
     * @param [options] component node to re-use
     * @param [data] data to initialize "reusableComponentNode" with
     */
    constructor(options?: ComponentNodeProxy.Options | ComponentNode, data?: ComponentNode.Options);
    registerAnimationStyle(root: AnimatedNode): void;
    protected onInitialize(options?: ComponentNodeProxy.Options): void;
    enumerateNodes(callback: (n: Node, x: any) => any, target: any): void;
    /**
     * Gets component's textual description. <br>
     * The implementation returns underlying reusable component's string representation.
     */
    toString(): string;
    /**
     * Sets component data
     * @param data data to set
     * @param [deepCopy] deep copy flag
     * @returns this
     */
    setData(data: ComponentNode.Options, deepCopy?: boolean): this;
    /**
     * Gets "resource-based" indicator.
     * @returns underlying reusable component node's "resource-based" indicator
     */
    isResourceBased(): boolean;
    /**
     * Gets graphical styles associated with its underlying reusable component node.
     *
     * @returns array of objects
     */
    getStyles(): {
        classname: string;
        linestyle: LineStyle;
        fillstyle: FillStyle;
    }[];
    /**
     * Gets component bounds
     */
    getGeometryBounds(): Rect;
    /**
     * Check if component is within giving context
     *
     * @param context RenderingContext
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): ComponentNodeProxy.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] optional object containing the properties to set
     * @returns this
     */
    setProperties(properties?: ComponentNodeProxy.Options): this;
}
export declare namespace ComponentNodeProxy {
    /**
     * component node to re-use
     */
    type Options = ComponentNode.Options & {
        /**
         * component node to re-use
         */
        reusablecomponentnode?: ReusableComponentNode;
    };
    /**
     * properties
     */
    type OptionsOut = ComponentNode.OptionsOut & {
        /**
         * component node to re-use
         */
        reusablecomponentnode?: ReusableComponentNode;
    };
}
