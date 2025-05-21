import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Group } from '@int/geotoolkit/scene/Group';
import { SymbolLabelShape } from '@int/geotoolkit/schematics/labeling/SymbolLabelShape';
import { LabelsFilter } from '@int/geotoolkit/schematics/labeling/LabelsFilter';
import type { DeepMerge } from '@int/geotoolkit/base';
import { DeviatedCompositeNode } from '@int/geotoolkit/deviation/scene/DeviatedCompositeNode';
import type { ViewMode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { Events, WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LabelShape } from '@int/geotoolkit/schematics/labeling/LabelShape';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { LabelingStrategy } from '@int/geotoolkit/schematics/labeling/LabelingStrategy';
import type { ConnectorShape } from '@int/geotoolkit/schematics/labeling/ConnectorShape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LabelData } from '../labeling/LabelData';
import type { LocationType } from '@int/geotoolkit/schematics/labeling/LocationType';
import type { LabelingStrategyBase } from '@int/geotoolkit/schematics/labeling/LabelingStrategyBase';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
import type { Mode } from '@int/geotoolkit/schematics/labeling/Mode';
/**
 * Enum of labeling mode
 * @deprecated since 4.0 Use LabelingStrategy instead.
 * @enum
 * @readonly
 */
export declare enum LabelingMode {
    /**
     * Docked
     */
    LabelingModeDocked = "Docked",
    /**
     * Adjacent
     */
    LabelingModeAdjacent = "Adjacent"
}
/**
 * Enum of display modes
 * @enum
 * @readonly
 */
export declare enum DisplayMode {
    /**
     * Vertical display mode
     */
    Vertical = "vertical",
    /**
     * Deviated display mode.
     * Can not be set if trajectory data not provided.
     */
    Deviated = "deviated"
}
/**
 * Represents deviated well bore node with labels. It wraps well bore node with automatically created DeviatedCompositeNode.
 */
export declare class WellBoreWithLabels extends Group implements INodeEnumerable {
    constructor(options?: WellBoreWithLabels.Options);
    on<E extends keyof WellBoreWithLabels.EventMap>(type: E, callback: (eventType: E, sender: this, args: WellBoreWithLabels.EventMap[E]) => void): this;
    off<E extends keyof WellBoreWithLabels.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: WellBoreWithLabels.EventMap[E]) => void): this;
    notify<E extends keyof WellBoreWithLabels.EventMap>(type: E, source: WellBoreWithLabels, args?: WellBoreWithLabels.EventMap[E]): this;
    /**
     * Sets display mode
     * @param displayMode display mode
     */
    setDisplayMode(displayMode: DisplayMode): this;
    /**
     * Gets display mode
     */
    getDisplayMode(): DisplayMode;
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: WellBoreWithLabels.Options): this;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): WellBoreWithLabels.OptionsOut;
    enumerateNodes(callback: (n: Node, x: any) => void, target: any): void;
    /**
     * Gets well bore view mode
     * @returns viewMode
     */
    getViewMode(): ViewMode;
    /**
     * Sets well bore view mode.
     * @param [viewMode] well bore view mode
     * @returns "model limits to bounds" depths mapping
     */
    setViewMode(viewMode?: ViewMode): IViewModeBuilder.BuildOptions;
    render(context: RenderingContext): this;
    /**
     * Sets visualization options
     * @param [options] options see {@link @int/geotoolkit/schematics/scene/WellBoreWithLabels~WellBoreWithLabels#setProperties}
     * @returns this
     */
    setOptions(options?: DeepMerge<WellBoreWithLabels.Options, {
        labeling?: {
            labelshape?: LabelShape | SymbolLabelShape.Options;
        };
    }>): this;
    /**
     * Sets WebGL rendering
     * @param webGLRendering true for enable webgl rendering
     * @returns this
     */
    setWebGLRendering(webGLRendering: boolean): this;
    /**
     * Sets deviation options.
     *
     * @param deviation deviation
     * @returns this
     */
    setDeviation(deviation: DeviatedCompositeNode.DeviationOptions): this;
    setModelLimits(limits: Rect): this;
    /**
     * Gets deviation options
     *
     * @returns deviation optionssetWellBoreNode
     */
    getDeviation(): DeviatedCompositeNode.DeviationOptionsOut | null;
    /**
     * Sets layout handler
     * @param handler layout handler
     * @returns this
     */
    setOnDoLayoutHandler(handler: (aLabelData: LabelData[], fitContent: boolean) => void): this;
    /**
     * Gets layout handler
     * @returns layout handler
     */
    getOnDoLayoutHandler(): (aLabelData: LabelData[], fitContent: boolean) => void;
    /**
     * Gets well bore node
     */
    getWellBoreNode(): WellBoreNode;
    /**
     * Sets well bore node
     * @param wellBoreNode well bore node
     */
    setWellBoreNode(wellBoreNode: WellBoreNode): this;
    /**
     * Gets labeling strategy.
     */
    getLabelingStrategy(): LabelingStrategy;
    /**
     * Sets labeling strategy
     * @param strategy labeling strategy
     */
    setLabelingStrategy(strategy: LabelingStrategy): this;
    /**
     * Gets current labeling mode
     * @deprecated since 4.0 Use LabelingStrategy instead.
     * @returns labeling mode ("Docked", "Adjacent" or "Custom")
     */
    getLabelingMode(): LabelingMode;
    /**
     * Sets labeling mode. NOTE: to setup custom labeling mode use "setLabelingStrategy" method directly.
     * @deprecated since 4.0 Use LabelingStrategy instead.
     * @param labelingMode labeling mode
     * @throws {Error} if parameter is not neither "Docked" nor "Adjacent" value.
     */
    setLabelingMode(labelingMode: LabelingMode): this;
}
export declare namespace WellBoreWithLabels {
    type Options = Group.Options & {
        /**
         * wellBore node
         */
        wellborenode?: WellBoreNode;
        /**
         * labeling options
         */
        labeling?: {
            /**
             * labeling strategy
             */
            strategy?: LabelingStrategyBase;
            /**
             * highlighted label shape
             */
            labelshapehighlighted?: LabelShape;
            /**
             * regular label shape
             */
            labelshape?: LabelShape;
            /**
             * connector shape
             */
            connectorshape?: ConnectorShape;
            /**
             * labels filter
             */
            labelsfilter?: LabelsFilter;
            /**
             * legend mode
             */
            legendmode?: boolean;
            /**
             * labeling  mode
             */
            mode?: Mode;
            /**
             * default labels location
             */
            defaultlocation?: LocationType;
            /**
             * labeling location map
             */
            locationmap?: {
                location: LocationType;
                component: string[];
                id?: string | string[];
            }[];
        };
        /**
         * labeling strategy
         */
        strategy?: LabelingStrategy;
        /**
         * label shape
         */
        labelshape?: LabelShape;
        /**
         * connector shape
         */
        connectorshape?: ConnectorShape;
        /**
         * use nextlabel callback for labeling
         */
        legendmode?: boolean;
        /**
         * label filter
         */
        labelsfilter?: LabelsFilter;
        /**
         * trajectory options
         */
        trajectory?: {
            /**
             * lines options
             */
            lines?: {
                /**
                 * lines visibility
                 */
                visible?: boolean;
                /**
                 * linestyle
                 */
                linestyle?: LineStyle.Type;
            };
            /**
             * stations options
             */
            stations?: {
                /**
                 * stations visibility
                 */
                visible?: boolean;
                /**
                 * stations symbol properties see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#setProperties}
                 */
                symbol?: SymbolShape.Options;
            };
        };
        /**
         * define highlight properties
         */
        highlight?: {
            /**
             * define label highlight properties
             */
            label?: {
                /**
                 * define line style attribute for label highlight
                 */
                linestyle?: LineStyle;
                /**
                 * define fill style attribute for label highlight
                 */
                fillstyle?: FillStyle;
            };
        };
        /**
         * deviation options
         */
        deviation?: DeviatedCompositeNode.DeviationOptions;
    };
    /**
     * properties
     */
    type OptionsOut = Group.OptionsOut & {
        /**
         * wellBore node
         */
        wellborenode?: WellBoreNode;
        /**
         * labeling strategy and strategy properties see {@link @int/geotoolkit/schematics/labeling/DefaultDeviatedStrategy~DefaultDeviatedStrategy#setProperties}
         */
        labeling?: {
            strategy?: LabelingStrategyBase;
            labelshapehighlighted?: LabelShape;
            mode?: Mode;
            labelshape?: LabelShape;
            connectorshape?: ConnectorShape;
            labelsfilter?: LabelsFilter;
            legendmode?: boolean;
            defaultlocation?: LocationType;
            locationmap?: {
                location: LocationType;
                component: string[];
                id?: string | string[];
            }[];
        };
        /**
         * trajectory properties
         */
        trajectory?: {
            /**
             * lines properties
             */
            lines?: {
                /**
                 * lines visibility
                 */
                visible?: boolean;
                /**
                 * linestyle
                 */
                linestyle?: LineStyle.Type;
            };
            /**
             * stations properties
             */
            stations?: {
                /**
                 * stations visibility
                 */
                visible?: boolean;
                /**
                 * stations symbol properties see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#setProperties}
                 */
                symbol?: SymbolShape.Options;
            };
        };
        /**
         * define highlight properties
         */
        highlight?: {
            /**
             * define label highlight properties
             */
            label?: {
                /**
                 * define line style attribute for label highlight
                 */
                linestyle?: LineStyle;
                /**
                 * define fill style attribute for label highlight
                 */
                fillstyle?: FillStyle;
            };
        };
        /**
         * deviation properties
         */
        deviation?: DeviatedCompositeNode.DeviationOptionsOut;
    };
    type EventMap = Group.EventMap & {
        [Events.ComponentsLoading]: void;
        [Events.ComponentsLoaded]: void;
    };
}
