import { Node } from '@int/geotoolkit/scene/Node';
import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Layout } from '@int/geotoolkit/layout/Layout';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { StateChanges } from '@int/geotoolkit/scene/Node';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * Define visual to render composite curve header
 */
export declare class LogCompositeVisualHeader<T extends Node = Node> extends LogVisualHeader<T> implements INodeEnumerable, ILayoutable {
    /**
     * Creates composite header
     * @param [options] visual for the header or properties object
     */
    constructor(options?: LogCompositeVisualHeader.Options<T> | T);
    clone(): LogCompositeVisualHeader;
    protected copyConstructor(src: LogCompositeVisualHeader<T>, deepCopy?: boolean): this;
    /**
     * Return header desired height
     */
    getDesiredHeight(): number;
    /**
     * Sets desired height of the header as a layoutable object
     * @param value desired height to set
     * @returns this
     */
    setDesiredHeight(value: string | number): this;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     * @param [silent] silent setting
     * @returns this
     */
    setLayoutStyle(layoutStyle: LayoutStyle | LayoutStyle.Options, silent?: boolean): this;
    /**
     * Return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Sets automatic model limits calculation mode
     * @param mode Model Limits Logics to be used
     * @returns this
     */
    setAutoModelLimitsMode(mode: boolean): this;
    /**
     * Get Model Limits Logics to use when no Model Limits have been set
     * set to true: will use parents width and height, starting at 0
     * set to false: will use parents bounds
     * @returns mode
     */
    getAutoModelLimitsMode(): boolean;
    /**
     * Sets inner model limits
     *
     * @param modelLimits inner limits
     * @returns this
     */
    setModelLimits(modelLimits: Rect): this;
    /**
     * Gets model limits, the limits of this container inside space
     *
     * @returns the current model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Associate layout with a header
     * @param layout layout to be set
     * @returns this
     */
    setLayout(layout: Layout): this;
    /**
     * Returns layout associated with the header
     * @returns layout
     */
    getLayout(): Layout;
    /**
     * Add a child node
     *
     * @param node the child node to be added
     * @returns this
     */
    addChild(node: Node | Node[] | Iterator<Node>): this;
    /**
     * Return iterator by child nodes
     *
     * @param [filter] a filter function. Returns all nodes if null
     */
    getChildren(filter?: (item: Node) => boolean): Iterator<Node>;
    /**
     * Remove child node
     *
     * @param node node or array of nodes to be removed
     * @returns this
     */
    removeChild(node: Node | Node[]): this;
    /**
     * Remove all child nodes from this composite group
     * @param [disposeChildren] automatically dispose children. If it is
     * true then method dispose is called for each child.
     * @returns this
     */
    clearChildren(disposeChildren?: boolean): this;
    /**
     * Return node by index
     *
     * @param i index of the node
     */
    getChild(i: number): Node;
    /**
     * Return number of child nodes
     */
    getChildrenCount(): number;
    enumerateNodes(callback: INodeEnumerable.Callback, target: any): void;
    /**
     * Mark this group to be updated.
     * @param [regions] optional array to return invalid rectangles
     * @param [changes] optional parameter to specify a reason of changes
     * @returns this
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bounds of the node
     * @returns this
     */
    setBounds(bounds: Rect): this;
    render(context: RenderingContext): void;
    /**
     * Sets border line style. This method just calls setLineStyle
     * @param lineStyle line style
     * @param [merge] merge style with the current one
     * @returns this
     */
    setBorderLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Returns border line style
     * @returns border line style
     */
    getBorderLineStyle(): LineStyle;
}
export declare namespace LogCompositeVisualHeader {
    /**
     * visual for the header or properties object
     */
    type Options<T extends Node = Node> = LogVisualHeader.Options<T>;
}
