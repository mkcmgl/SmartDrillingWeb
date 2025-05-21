/**
 * @module geotoolkit/controls/shapes/Legend
 */
import { Group } from '@int/geotoolkit/scene/Group';
import type { Merge } from '@int/geotoolkit/base';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { Collection } from '@int/geotoolkit/util/Collection';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { ShapeLegendAdapter } from '@int/geotoolkit/controls/shapes/ShapeLegendAdapter';
import { Events as LegendEvents, LegendItem } from '@int/geotoolkit/controls/shapes/LegendItem';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { Layout } from '@int/geotoolkit/layout/Layout';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
/**
 * This class defines a legend container in which legends items are laid out using specified layout.
 * Items can be located in the legend vertically using {@link @int/geotoolkit/layout/VerticalPriorityLayout~VerticalPriorityLayout} or
 * horizontally using {@link @int/geotoolkit/layout/HorizontalPriorityLayout~HorizontalPriorityLayout} or in any location inside the legend with other layout or manually.
 * The legend has an anchor position in the parent coordinates and width and height of the legend in model
 * or device coordinates. This position can be specified with setAnchor method and size with setSize method. In addition
 * it is possible to use automatic calculation of the legend size, which is supported for device size legend only.
 * Legends can be customized using .setOptions().
 *
 * @example
 * // Example of creating a legend with automatic size calculation in the device coordinates
 * import {Collection} from '@int/geotoolkit/util/Collection';
 * import {SymbolLegendItem} from '@int/geotoolkit/controls/shapes/SymbolLegendItem';
 * import {HorizontalLinePainter} from '@int/geotoolkit/scene/shapes/painters/HorizontalLinePainter';
 * import {Legend} from '@int/geotoolkit/controls/shapes/Legend';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * import {Point} from '@int/geotoolkit/util/Point';
 * import {VerticalPriorityLayout} from '@int/geotoolkit/layout/VerticalPriorityLayout';
 * const dataCollection = new Collection();
 * dataCollection.add(new SymbolLegendItem(null, {
 *   'text': 'Item',
 *   'textstyle': {'font': '12px Arial'},
 *   'symbol': {
 *       'painter': HorizontalLinePainter,
 *       'width': 10,
 *       'height': 10,
 *       'linestyle': {'color': 'red' }
 *   }
 * }));
 * const legendShape = new Legend({
 *   'data': dataCollection,
 *   'linestyle': {'color': 'red'}
 *   'sizeisindevicespace': true,
 *   'alignment': AnchorType.Center,
 *   'autosize': true
 * });
 * legendShape.setAnchor(new Point(40, 10));
 * legendShape.setLayout(new VerticalPriorityLayout());
 * @example
 * // Example of creating a legend with manual size in model coordinates
 * const legendShape = new Legend({
 *   'data': dataCollection,
 *   'linestyle': {'color': 'red'}
 *   'sizeisindevicespace': false,
 *   'alignment': AnchorType.Center
 * });
 * legendShape.setAnchor(new Point(0.5, 0.5));
 * legendShape.setSize(0.5, 0.5);
 * legendShape.setLayout(new VerticalPriorityLayout());
 */
export declare class Legend extends AnchoredShape implements INodeEnumerable {
    constructor(options?: Legend.Options | string | number);
    on<E extends keyof Legend.EventMap>(type: E, callback: (eventType: E, sender: this, args: Legend.EventMap[E]) => void): this;
    off<E extends keyof Legend.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Legend.EventMap[E]) => void): this;
    notify<E extends keyof Legend.EventMap>(type: E, source: Legend, args?: Legend.EventMap[E]): this;
    /**
     * Sets padding style.
     * Legend supports only numbers as padding
     * @param paddingStyle padding style
     * @param [merge] true if you want to merge paddingStyle with existing attribute, false by default
     */
    setPaddingStyle(paddingStyle: SpaceStyle | number | SpaceStyle.Options, merge?: boolean): this;
    /**
     * Return padding style
     * @returns padding
     */
    getPaddingStyle(): SpaceStyle;
    /**
     * Sets visualization options
     * @param options options
     * @returns this
     */
    setOptions(options: Legend.OptionsBase): this;
    /**
     * Return the collection of {@link @int/geotoolkit/controls/shapes/SymbolLegendItem~SymbolLegendItem} to be displayed
     * @returns a collection of items to be displayed
     */
    getData(): Collection<LegendItem | ShapeLegendAdapter>;
    /**
     * Sets bounds of the node in the parent coordinates. This method
     * takes anchor position and width and height if size is not in device space
     *
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect): this;
    render(context: RenderingContext): void;
    /**
     * Return device area occupied by legend shape
     * @param legendToDevice transformation of the unit rectangle [0,0,1,1] to device
     */
    getLegendDeviceSize(legendToDevice: Transformation): Rect;
    enumerateNodes(callback: (n: Node, x: any) => void, target: any): void;
    /**
     * Add a child node
     *
     * @param node the child node to be added
     * @returns this
     */
    protected addChild(node: LegendItem | LegendItem[] | Iterator<LegendItem>): this;
    /**
     * Return iterator by child nodes
     *
     * @param [filter] a filter function. Returns all nodes if null
     */
    getChildren(filter?: (node: Node) => boolean): Iterator<LegendItem>;
    /**
     * Remove child node
     *
     * @param node node or array of nodes to be removed
     * @returns this
     */
    protected removeChild(node: LegendItem | LegendItem[]): this;
    /**
     * Remove all child nodes from this composite group
     * @param [disposeChildren] automatically dispose children. If it is
     * true then method dispose is called for each child.
     * @returns this
     */
    protected clearChildren(disposeChildren?: boolean): this;
    /**
     * Sets inner model limits for legends' items
     *
     * @param limits inner limits
     * @returns this
     */
    setModelLimits(limits: Rect): this;
    /**
     * Returns if clipping is enabled or not for this node.
     */
    isClippingEnabled(): boolean;
    /**
     * Enables or disables clipping of this node. If enabled,
     * shapes will not be rendered outside of its bounds.
     *
     * @param doClip enable clipping on this node
     * @returns this
     */
    enableClipping(doClip: boolean): this;
    /**
     * Gets model limits, the limits of this groups inside space
     *
     * @returns the current model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Associate layout with a group.
     * @param layout layout to be set
     * @returns this
     */
    setLayout(layout: Layout): this;
    /**
     * Returns layout associated with the group
     * @returns layout
     */
    getLayout(): Layout;
    /**
     * Updates layout(s)
     * @param [targets] optional parameter about which element to layout
     * @returns this
     */
    updateLayout(targets?: ILayoutable[]): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing the properties
     */
    getProperties(): Legend.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Legend.Options): this;
    /**
     * Returns desired width of the group as a layoutable object.
     * This method is a helper method to get access to getLayoutStyle()
     * @returns desired width ("undefined" by default)
     */
    getDesiredWidth(): string | number | undefined;
    /**
     * Sets desired width of the group as a layoutable object
     * @param value desired width to set
     * @returns this
     */
    setDesiredWidth(value: string | number): this;
    /**
     * Returns desired height of the group as a layoutable object
     * This method is a helper method to get access to getLayoutStyle()
     * @returns desired height ("undefined" by default)
     */
    getDesiredHeight(): string | number | undefined;
    /**
     * Sets desired height of the group as a layoutable object
     * @param value desired height to set
     * @returns this
     */
    setDesiredHeight(value: string | number): this;
}
export declare namespace Legend {
    /**
     * options
     */
    type Options = Merge<AnchoredShape.Options, OptionsBase>;
    /**
     * options
     */
    type OptionsBase = {
        autobounds?: boolean;
        /**
         * collection containing an array or an array itself of {@link @int/geotoolkit/controls/shapes/LegendItem~LegendItem} and/or {@link @int/geotoolkit/controls/shapes/ShapeLegendAdapter~ShapeLegendAdapter} elements
         */
        data?: Collection<LegendItem | ShapeLegendAdapter> | (LegendItem | ShapeLegendAdapter)[] | ShapeLegendAdapter | LegendItem;
        /**
         * whole legend line style
         */
        linestyle?: LineStyle.Type;
        /**
         * whole legend fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * legend width (it is ignored if autosize is true)
         */
        width?: number;
        /**
         * legend height (it is ignored if autosize is true)
         */
        height?: number;
        /**
         * auto size to calculate device size of the legend. it doesn't work if legend in the model space.
         */
        autosize?: boolean;
        /**
         * It has properties for specifying the padding for each side of an legend
         * Legend supports only numbers as padding
         */
        padding?: SpaceStyle | SpaceStyle.Options;
    };
    /**
     * object containing the properties
     */
    type OptionsOut = Merge<AnchoredShape.OptionsOut, {
        /**
         * collection containing an array of {@link @int/geotoolkit/controls/shapes/LegendItem~LegendItem} and/or {@link @int/geotoolkit/controls/shapes/ShapeLegendAdapter~ShapeLegendAdapter} elements
         */
        data?: Collection<LegendItem | ShapeLegendAdapter>;
        /**
         * auto size
         */
        autosize?: boolean;
        /**
         * padding for each side of an legend
         */
        padding?: SpaceStyle;
        /**
         * auto bounds
         */
        autobounds?: boolean;
    }>;
    type EventMap = Group.EventMap & {
        [LegendEvents.StateChanged]: LegendItem;
    };
}
