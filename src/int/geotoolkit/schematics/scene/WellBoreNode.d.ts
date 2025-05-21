import { Group } from '@int/geotoolkit/scene/Group';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { ComponentNodeFactoryRegistry } from '@int/geotoolkit/schematics/factory/ComponentNodeFactoryRegistry';
import { Layer } from '@int/geotoolkit/scene/Layer';
import { Iterator } from '@int/geotoolkit/util/iterator';
import { Path } from '@int/geotoolkit/scene/shapes/Path';
import { CompressedViewModeBuilder } from '@int/geotoolkit/schematics/builder/CompressedViewModeBuilder';
import { KeepAspectRatioViewModeBuilder } from '@int/geotoolkit/schematics/builder/KeepAspectRatioViewModeBuilder';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import type { SortComponents } from '@int/geotoolkit/schematics/data/sort/SortComponents';
import type { BoundsCalculation } from '@int/geotoolkit/schematics/utils/BoundsCalculation';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { ComponentNodeProxy } from '@int/geotoolkit/schematics/scene/ComponentNodeProxy';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { RenderingHints as RenderingHintsClass } from '@int/geotoolkit/schematics/utils/RenderingHints';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
/**
 * Enum of components' names with predefined rendering hints
 * @enum
 * @readonly
 */
export declare enum PredefinedRenderingHints {
    Casing = "casing",
    CasingMD = "casingmd",
    OpenHole = "openhole",
    Perforation = "perforation",
    Fluid = "fluid",
    Default = "default"
}
/**
 * Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * Event type fired when components started loading
     */
    ComponentsLoading = "ComponentsLoading",
    /**
     * Event type fired when components are loaded
     */
    ComponentsLoaded = "ComponentsLoaded"
}
/**
 * ViewMode
 * @enum
 * @readonly
 */
export declare enum ViewMode {
    /**
     * Regular
     */
    Regular = "Regular",
    /**
     * Compressed
     */
    Compressed = "Compressed",
    /**
     * KeepAspectRatio
     */
    KeepAspectRatio = "KeepAspectRatio"
}
/**
 * ValueViewMode
 * @enum
 * @readonly
 */
export declare enum ValueViewMode {
    /**
     * Whole
     */
    Whole = "whole",
    /**
     * LeftHalf
     */
    LeftHalf = "lefthalf",
    /**
     * RightHalf
     */
    RightHalf = "righthalf"
}
/**
 * Top-most Well bore node implementation used to visualize schematics data.<br>
 * If user does not need any custom elements (i.e. {@link @int/geotoolkit/schematics/scene/ComponentNode~ComponentNode} implementations), reference to the data is the only argument to pass to WellBoreNode constructor.
 * If user does need any custom elements, then a {@link @int/geotoolkit/schematics/factory/ComponentNodeFactoryRegistry~ComponentNodeFactoryRegistry} instance used in the WellBoreNode object must contain an entry to make the custom data displayed within WellBoreNode.
 * If labeling is not needed the WellBoreNode object is the CarnacJS node instance to insert into {@link @int/geotoolkit/plot/Plot~Plot} as a root.
 * If labeling IS needed then {@link @int/geotoolkit/schematics/scene/WellBoreWithLabels~WellBoreWithLabels} object must be created based on user’s WellBoreNode object.
 *
 * @throws {TypeError} if options.units.depth or options.units.value does NOT belong to 'length' units
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoading
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoaded
 * @example
 * import {WellBoreNode, ViewMode} from '@int/geotoolkit/schematics/scene/WellBoreNode';
 * ...
 * const wellBoreNode = new WellBoreNode({
 *       'data': wellboreData,
 *       'viewmode': ViewMode.Compressed
 * });
 */
export declare class WellBoreNode extends Group {
    constructor(options?: WellBoreNode.Options);
    on<E extends keyof WellBoreNode.EventMap>(type: E, callback: (eventType: E, sender: this, args: WellBoreNode.EventMap[E]) => void): this;
    off<E extends keyof WellBoreNode.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: WellBoreNode.EventMap[E]) => void): this;
    notify<E extends keyof WellBoreNode.EventMap>(type: E, source: WellBoreNode, args?: WellBoreNode.EventMap[E]): this;
    protected getHighlightLayersIterator(): Iterator<Layer<Path>>;
    protected getHighlightShapes(nodeId: string | number, type: 'highlight' | 'selection'): Path[];
    protected getHighlightBoundsCalculator(): BoundsCalculation;
    /**
     * Draws specified component node as highlighted or non-highlighted
     * @param node node to highlight
     * @param on highlight flag
     */
    highlightComponentNode(node: ComponentNode, on: boolean): void;
    /**
     * @param componentNode component node
     */
    getComponentNodeProxy(componentNode: ComponentNode): ComponentNodeProxy | null;
    /**
     * Gets selected component nodes
     */
    getSelectedComponentNodes(): ComponentNode[];
    /**
     * Sets selected component nodes
     * @param selectedComponentNodes selected component nodes
     * @returns this
     */
    setSelectedComponentNodes(selectedComponentNodes: ComponentNode[]): this;
    /**
     * Sets  builder for the view mode passed
     * @param builder the mode builder to set
     * @param viewMode view mode
     * @returns this
     */
    setBuilder(builder: IViewModeBuilder, viewMode: ViewMode): this;
    /**
     * Gets the view mode's builder
     * @param viewMode view mode
     * @returns the mode builder if found
     */
    getBuilder(viewMode: ViewMode): IViewModeBuilder | null;
    /**
     * Gets well bore value view mode
     */
    getValueViewMode(): ValueViewMode;
    /**
     * Sets well bore value view mode
     * @param [mode] value view mode
     * @returns this
     */
    setValueViewMode(mode?: ValueViewMode): this;
    /**
     * Gets well bore view mode.
     * @returns viewMode
     */
    getViewMode(): ViewMode;
    /**
     * Sets well bore view mode.
     * @param [viewMode] view mode type or an object containing view mode type and options
     * @returns "model limits to bounds" depths mapping
     */
    setViewMode(viewMode?: ViewMode | WellBoreNode.ViewModeInfo): IViewModeBuilder.BuildOptions;
    /**
     * Rebuilds all components with a given "componentName"
     * @param componentName component name
     * @returns this
     * @throws {Error} when the node is not in sync with its WellBoreData.
     */
    replaceComponent(componentName: string): this;
    /**
     * Gets rendering hints for various component types (if any)
     * @returns rendering hints
     */
    getRenderingHints(): WellBoreNode.RenderingHints;
    /**
     * Sets rendering hints for various component types (if any)
     *
     * @param hints rendering hints
     * @returns this
     * @example
     * // Customizing 'fluid' component's subsets:
     * const renderingHints = {
     *     'fluid': {
     *         'Mud': { 'fillstyle': { 'color': 'rgb(191,127,127)' } },
     *         'Spacer Fluid': { 'fillstyle': { 'color': 'rgb(113,244,151)' } },
     *         'Head Slurry': { 'fillstyle': { 'color': 'rgb(127,127,127)' } },
     *         'Tail Slurry': { 'fillstyle': { 'color': 'rgb(80,80,80)' } }
     *     }
     * };
     * // The call tells wellbore node to render fluid's subsets: 'Mud', 'Spacer Fluid', 'Head Slurry' and 'Tail Slurry'
     * // with their corresponding fill colors:
     * wellBoreNode.setRenderingHints(renderingHints);
     * @example
     * // Customizing casing shoe painter, proportions and styles:
     * import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
     * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
     * const renderingHints = {
     *     'casing': {
     *         'shoe': {
     *             'painter': (symbol, bbox, context) => { // Replace default shoe painter
     *                 const x = [bbox.x, bbox.x + bbox.width, bbox.x + bbox.width, bbox.x + bbox.width, bbox.x];
     *                 const y = [bbox.y, bbox.y, bbox.y + bbox.height / 2, bbox.y + bbox.height, bbox.y + bbox.height];
     *
     *                 context.drawPolygon(x, y);
     *             },
     *             'height': 10,
     *             'width': 10,
     *             'linestyle': new LineStyle('red'),
     *             'fillstyle': new FillStyle('blue')
     *         }
     *     }
     * };
     * wellBoreNode.setRenderingHints(renderingHints);
     * @example
     * // Add a color gradient
     * import {Point} from '@int/geotoolkit/util/Point';
     * import {LinearGradientStyle} from '@int/geotoolkit/attributes/LinearGradientStyle';
     * const gradStyleMud = new LinearGradientStyle( {
     *    'startPoint': new Point(0, 0), 'endPoint': new Point(1, 1), 'startColor': 'red', 'endColor': 'blue'
     * });
     * const renderingHints = {
     *    'casing':
     *           {'shoe': {'fillstyle': gradStyleMud}}
     * };
     * wellBoreNode.setRenderingHints(renderingHints);
     */
    setRenderingHints(hints: WellBoreNode.RenderingHints): this;
    /**
     * Gets forced open hole state
     */
    getForceOpenHole(): boolean;
    /**
     * Sets forced open hole mode
     * @param force mode state
     * @returns this
     */
    setForceOpenHole(force: boolean): this;
    /**
     * @param [disposeComponents] automatically dispose components
     */
    protected clearComponents(disposeComponents?: boolean): void;
    /**
     * Gets iterator over its {@link @int/geotoolkit/schematics/scene/ComponentNode~ComponentNode} components
     * @param [filter] a filter function
     */
    getComponents(filter?: (node: Node) => boolean): Iterator<ComponentNode>;
    /**
     * Gets factory registry associated with the node.
     * @returns registry
     */
    getFactoryRegistry(): ComponentNodeFactoryRegistry;
    /**
     * Associates the factory registry with the node.
     * @param factoryRegistry factory registry to be associated with the node
     * @returns this
     */
    setFactoryRegistry(factoryRegistry: ComponentNodeFactoryRegistry): this;
    /**
     * Gets well bore data the node is built on.
     * @returns data
     */
    getWellBoreData(): WellBoreData;
    /**
     * Sets well bore data to build the node on.
     * @param wellBoreData well bore data the node is built on
     * @returns this
     */
    setWellBoreData(wellBoreData: WellBoreData): this;
    /**
     * Sets visibility for all components, or just the components with specified name or ID
     * @param visible visibility state
     * @param [value] component name or ID
     * @returns this
     */
    setVisible(visible: boolean, value?: string): this;
    /**
     * Gets visibility (convenience method)
     *
     * @param [componentName] component name
     */
    getVisible(componentName?: string): boolean;
    /**
     * Gets visibility settings (see "setComponentsVisibility" for detailed format)
     */
    getComponentsVisibility(): WellBoreNode.ComponentsVisibility;
    /**
     * Sets component visibility according to the component names/ID-s passed (convenience method).
     *
     * @param parameter visibility options
     * @returns this
     */
    setComponentsVisibility(parameter: WellBoreNode.ComponentsVisibility): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): WellBoreNode.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: WellBoreNode.Options): this;
    /**
     * Gets units options (see "setUnitsOptions"  API for the options format)
     * @returns object containing units options
     */
    getUnitsOptions(): WellBoreData.UnitsOptions;
    /**
     * Gets depth unit
     */
    getDepthUnit(): AbstractUnit;
    /**
     * Gets value unit
     */
    getValueUnit(): AbstractUnit;
    /**
     * Sets units options
     * @deprecated since 4.0
     * @param unitOptions An object containing the properties to set
     * @returns this
     * @throws TypeError
     */
    setUnitsOptions(unitOptions: WellBoreData.UnitsOptions): this;
}
export declare namespace WellBoreNode {
    type Options = Group.Options & {
        /**
         * @deprecated
         */
        units?: WellBoreData.UnitsOptions;
        /**
         * well bore data
         */
        data?: WellBoreData;
        /**
         * sort components
         */
        sortcomponents?: SortComponents;
        /**
         * component highlight options
         */
        highlight?: {
            /**
             * implementation to calculate component's area to highlight
             */
            boundscalculation?: BoundsCalculation;
            /**
             * define component highlight class name
             */
            cssclass?: string;
            /**
             * define line style attribute for component highlight
             */
            linestyle?: LineStyle;
            /**
             * define fill style attribute for component highlight
             */
            fillstyle?: FillStyle;
        };
        /**
         * component selection options
         */
        selection?: {
            /**
             * define component selection class name
             */
            cssclass?: string;
            /**
             * define line style attribute for component selection
             */
            linestyle?: LineStyle;
            /**
             * define fill style attribute for component selection
             */
            fillstyle?: FillStyle;
        };
        /**
         * force showing open hole (even if it's not in the data)
         */
        forceopenhole?: boolean;
        /**
         * rendering hints for components
         */
        renderinghints?: RenderingHints;
        /**
         * factory registry
         */
        registry?: ComponentNodeFactoryRegistry;
        /**
         * view mode type or
         * an object containing view mode type and options
         */
        viewmode?: ViewModeInfo | ViewMode;
        /**
         * value view mode
         */
        valueviewmode?: ValueViewMode;
    };
    /**
     * view mode type or
     * an object containing view mode type and options
     */
    type ViewModeInfo = {
        name?: ViewMode.Compressed;
        options?: CompressedViewModeBuilder.Options;
    } | {
        name?: ViewMode.Regular;
        options?: null | {};
    } | {
        name?: ViewMode.KeepAspectRatio;
        options?: KeepAspectRatioViewModeBuilder.Options;
    };
    type ComponentRenderingHints = {
        [PredefinedRenderingHints.Casing]?: ComponentNode.RenderingHintsBase & {
            shoe?: SymbolShape.Options;
            inner?: {
                fillstyle: FillStyle.Type;
            };
            outer?: {
                fillstyle?: FillStyle.Type;
                linestyle?: LineStyle.Type;
            };
        };
        [PredefinedRenderingHints.CasingMD]?: ComponentNode.RenderingHintsBase & {
            shoe?: SymbolShape.Options;
        };
        [PredefinedRenderingHints.OpenHole]?: ComponentNode.RenderingHintsBase & {
            wiggle?: boolean;
            close?: {
                top: boolean;
                bottom: boolean;
            };
            sine?: {
                amplitude: number;
                period: number;
                accuracy: number;
            };
        };
        [PredefinedRenderingHints.Perforation]?: ComponentNode.RenderingHintsBase & {
            height?: number;
            thresholdheight?: number;
            minimalwidth?: number;
            cutoff?: boolean;
        };
        [PredefinedRenderingHints.Fluid]?: ComponentNode.RenderingHintsBase & Record<string, ComponentNode.RenderingHintsBase>;
        [PredefinedRenderingHints.Default]?: ComponentNode.RenderingHintsBase & {
            selectableinterior?: boolean;
            close?: {
                top: boolean;
                bottom: boolean;
            };
        };
    };
    type RenderingHints = ComponentRenderingHints | Record<string, ComponentNode.RenderingHintsBase | RenderingHintsClass>;
    /**
     * visibility options
     */
    type ComponentsVisibility = {
        /**
         * array of visible component names or object
         */
        visible?: string[] | string | {
            name?: string | string[];
            id?: string | string[];
        };
        /**
         * array of invisible component names or object
         */
        invisible?: string[] | string | {
            name?: string | string[];
            id?: string | string[];
        };
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = Group.OptionsOut & {
        /**
         * well bore data the node is built on
         */
        data?: WellBoreData;
        /**
         * sort components
         */
        sortcomponents?: SortComponents;
        /**
         * component highlight options
         */
        highlight?: {
            /**
             * implementation to calculate component's area to highlight
             */
            boundscalculation?: BoundsCalculation;
            /**
             * define component highlight class name
             */
            cssclass?: string;
            /**
             * define line style attribute for component highlight
             */
            linestyle?: LineStyle;
            /**
             * define fill style attribute for component highlight
             */
            fillstyle?: FillStyle;
        };
        /**
         * force showing open hole
         */
        forceopenhole?: boolean;
        /**
         * rendering hints for components
         */
        renderinghints?: RenderingHints;
        /**
         * well bore view mode
         */
        viewmode?: ViewMode;
        /**
         * value view mode
         */
        valueviewmode?: ValueViewMode;
    };
    type EventMap = Group.EventMap & {
        [Events.ComponentsLoading]: void;
        [Events.ComponentsLoaded]: void;
    };
}
