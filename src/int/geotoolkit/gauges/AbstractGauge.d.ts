/**
 * @module geotoolkit/gauges/AbstractGauge
 */
import { Group } from '@int/geotoolkit/scene/Group';
import { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import { FunctionRegistry } from '@int/geotoolkit/gauges/registry/FunctionRegistry';
import { Rect } from '@int/geotoolkit/util/Rect';
import { GaugeLayout } from '@int/geotoolkit/gauges/layout/GaugeLayout';
import type { Node } from '@int/geotoolkit/scene/Node';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { Layers } from '@int/geotoolkit/gauges/layout/Layers';
import { Iterator } from '@int/geotoolkit/util/iterator';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Regions } from '@int/geotoolkit/gauges/layout/Regions';
import type { Region } from '@int/geotoolkit/gauges/layout/Region';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Alarm } from '@int/geotoolkit/gauges/Alarm';
import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
/**
 * Layer to which a dynamic element should be added
 * @enum
 * @readonly
 */
export declare enum DynamicElementPosition {
    /**
     * Top layer, displayed over everything else
     */
    Top = "top",
    /**
     * Bottom layer, displayed under everything else
     */
    Bottom = "bottom"
}
/**
 * Events fired by AbstractGauge
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * When gauge value has been updated
     */
    ValueUpdated = "gaugeValueUpdated"
}
export declare abstract class AbstractGauge extends AbstractNode implements INodeEnumerable<AbstractGauge.CustomComponent | Node | Alarm>, ILayoutable {
    protected constructor(options?: AbstractGauge.Options);
    protected copyConstructor(gauge: AbstractGauge): this;
    on<E extends keyof Group.EventMap>(type: E, callback: (eventType: E, sender: this, args: Group.EventMap[E]) => void): this;
    off<E extends keyof Group.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Group.EventMap[E]) => void): this;
    /**
     * Returns current bounds of the gauge
     */
    getBounds(): Rect;
    /**
     * Sets bounds to the gauge
     * @param bounds New bounds
     */
    setBounds(bounds: Rect): this;
    /**
     * For North, South sides sets height, for East and West sets width, for custom regions sets x, y, width and height
     * @param regionType Name of the region
     * @param size Width or height of a side in CSS format, or an object with properties for custom regions
     */
    setRegionSize(regionType: Regions | string, size: GaugeLayout.Region | string | number): this;
    /**
     * Sets innergroup clipping
     * @param clipping clipping
     */
    enableClipping(clipping: boolean): this;
    render(context: RenderingContext): this;
    /**
     * Adds a custom component to provided specified region. A custom component is a group with any geometry
     * inside. The group bounds will be changed to fit the region it is added to. To maintain the size of your custom
     * group it is better to add a custom region to the gauge.
     * @param component A group with custom shape(s)
     * @param region Name of the region to add component to. If such region does not
     * exist nothing will happen and the custom shape will not be added
     * @param layer name of gauge layer to add component
     */
    addCustomComponent(component: Group, region: Regions | string, layer: Layers | string): this;
    /**
     * Return iterator on registered custom components
     * @param [filter] a filter function. Returns all nodes if null
     */
    getCustomComponents(filter?: (item: Group) => boolean): Iterator;
    /**
     * Returns a registered custom component by its index
     * @param index Index or name of the component to return
     * @returns Null if no such index exists
     */
    getCustomComponent(index: number | string): Group | null;
    /**
     * Removes a registered custom component from the gauge. If such component was not registered, does nothing.
     * @param component The component which has to be deleted, or its index
     * in iterator.
     */
    removeCustomComponent(component: Group | number): this;
    /**
     * Adds a new region to the gauge. Region is a rectangular area on the gauge defined by x, y, width and height
     * all set in CSS format.
     * @param name Name of the region or a json with region parameters (including name)
     * @param [region] JSON with region parameters
     * @throws {Error} When name is not provided to the custom region
     */
    addRegion(name: string | Region.Options, region?: Region.Options): this;
    /**
     * Deletes a region from the layout. Only custom added regions can be removed. Will do nothing if
     * no such region was registered
     * @param name Name of the region
     */
    removeRegion(name: string): this;
    /**
     * Returns the region registered with provided name.
     * @param name Name of the region to return
     */
    getRegion(name: Regions | string): Region;
    /**
     * Debug method to display regions of the gauge in different colors
     * @param [name] If you want to display only one region, pass its name here
     */
    displayRegions(name?: string): this;
    /**
     * Hides the regions displayed for debug reasons
     */
    hideRegions(): this;
    /**
     * Returns the current layout of the gauge
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     * @param [merge] true if you want to merge layoutStyle with existing attribute, false by default
     */
    setLayoutStyle(layoutStyle: LayoutStyle | LayoutStyle.Options, merge?: boolean): this;
    /**
     * Sets function registry which will provide handlers for gauges animation and alarms
     * @param registry New registry to set
     */
    setFunctionRegistry(registry: FunctionRegistry): this;
    /**
     * Returns function registry which provides handlers for gauges animation and alarms
     * @returns registry New registry to set
     */
    getFunctionRegistry(): FunctionRegistry;
    /**
     * Update scene transformation
     * @returns this
     */
    updateSceneTransformation(): this;
    /**
     * Check if gauge falls within visible area on the screen
     *
     * @param context Rendering Context
     * @returns true if object is inside of rendarable area
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Sets properties pertaining to this gauge.
     * @param props properties
     */
    setProperties(props?: AbstractGauge.Options): this;
    /**
     * Gets properties pertaining to this gauge.
     * @returns properties
     */
    getProperties(): AbstractGauge.OptionsOut;
    enumerateNodes(callback: INodeEnumerable.Callback<AbstractGauge.CustomComponent | Node | Alarm>, target?: QueryBuilder): void;
    /**
     * Returns transformation from node to root scene
     * @returns a transformation from node to root scene
     */
    getSceneTransform(): Transformation;
    /**
     * Retrieves the transformation of bounds to parent
     * @returns transform the local transform.
     */
    getLocalTransform(): Transformation;
    /**
     * Sets local transformation to be used to transform from local to parent coordinate
     * @param localTransform local transformation for this node
     */
    setLocalTransform(localTransform: Transformation): this;
}
export declare namespace AbstractGauge {
    /**
     * JSON with gauge properties
     */
    type Options = AbstractNode.Options & {
        /**
         * X coordinate of left top corner of the gauge in its parent model limits
         */
        x?: number;
        /**
         * Y coordinate of left top corner of the gauge in its parent model limits
         */
        y?: number;
        /**
         * Width of the gauge in its parent model limits
         */
        width?: number;
        /**
         * Height of the gauge in its parent model limits
         */
        height?: number;
        /**
         * Bounds of the gauge in parent model limits. Will override x,y,widht,height
         */
        bounds?: Rect;
        /**
         * Function registry which will be used
         * as a source of handler functions (ex: animation easing functions)
         */
        functionregistry?: FunctionRegistry;
        /**
         * Container group clipping
         */
        clipping?: boolean;
        /**
         * a new fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * line style
         */
        linestyle?: LineStyle.Type;
    };
    /**
     * properties
     */
    type OptionsOut = AbstractNode.OptionsOut & {
        /**
         * Bounds of the gauge in parent model limits. Overrides x, y, width, and Height
         */
        bounds?: Rect;
        /**
         * Function registry which will be used
         */
        functionregistry?: FunctionRegistry;
        /**
         * Enables/disables axis label clipping
         */
        clipping?: boolean;
        /**
         * a new fill style
         */
        fillstyle?: FillStyle;
        /**
         * line style
         */
        linestyle?: LineStyle;
    };
    /**
     * Defines custom component for gauges
     */
    type CustomComponent = {
        /**
         * The component to display
         */
        component: Group;
        /**
         * The region to add a component
         */
        region: Regions | string;
        /**
         * The layer to add a component
         */
        layer: Layers | string;
    };
}
