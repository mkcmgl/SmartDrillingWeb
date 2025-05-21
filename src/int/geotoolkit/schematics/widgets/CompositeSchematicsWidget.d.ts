/**
 * @module geotoolkit/schematics/widgets/CompositeSchematicsWidget
 */
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { DeepMerge } from '@int/geotoolkit/base';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { RubberBandRenderMode } from '@int/geotoolkit/controls/tools/RubberBandRenderMode';
import { Events, ViewMode, WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { MultiDiameterSelectionMode } from '@int/geotoolkit/schematics/widgets/MultiDiameterSelectionMode';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { Alignment } from '@int/geotoolkit/layout/BoxLayout';
import { LabelsFilter } from '@int/geotoolkit/schematics/labeling/LabelsFilter';
import { LocationType } from '@int/geotoolkit/schematics/labeling/LocationType';
import { Mode } from '@int/geotoolkit/schematics/labeling/Mode';
import { ScalesRatioMode } from '@int/geotoolkit/schematics/scene/MultiLateralWellBoreNode';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { DisplayMode, DisplayMode as WellborewithlabelsDisplayMode, WellBoreWithLabels } from '@int/geotoolkit/schematics/scene/WellBoreWithLabels';
import type { LegendTool } from '@int/geotoolkit/widgets/tools/LegendTool';
import { Point } from '@int/geotoolkit/util/Point';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { ToolTipTool } from '@int/geotoolkit/controls/tools/ToolTipTool';
import type { AnnotatedNode } from '@int/geotoolkit/scene/AnnotatedNode';
import type { RubberBand } from '@int/geotoolkit/controls/tools/RubberBand';
import type { Selection } from '@int/geotoolkit/controls/tools/Selection';
import { LabelShape } from '@int/geotoolkit/schematics/labeling/LabelShape';
import { Rect } from '@int/geotoolkit/util/Rect';
import { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { TrackWidthStrategy } from '@int/geotoolkit/deviation/TrackWidthStrategy';
import type { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import type { AbstractLegendItemInfoProvider } from '@int/geotoolkit/schematics/widgets/legend/AbstractLegendItemInfoProvider';
import type { ScrollablePanel } from '@int/geotoolkit/controls/shapes/ScrollablePanel';
import type { DeviatedCompositeNode } from '@int/geotoolkit/deviation/scene/DeviatedCompositeNode';
import type { LabelingStrategyBase } from '@int/geotoolkit/schematics/labeling/LabelingStrategyBase';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { Direction } from '@int/geotoolkit/layout/VerticalPriorityLayout';
import type { ConnectorShape } from '@int/geotoolkit/schematics/labeling/ConnectorShape';
import type { Legend } from '@int/geotoolkit/controls/shapes/Legend';
import type { SymbolLegendItem } from '@int/geotoolkit/controls/shapes/SymbolLegendItem';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { ISchematicsWidget } from '@int/geotoolkit/schematics/widgets/ISchematicsWidget';
import type { LabelingStrategy } from '@int/geotoolkit/schematics/labeling/LabelingStrategy';
import { DepthAxisType } from '@int/geotoolkit/schematics/widgets/SchematicsWidget';
import type { CrossHair } from '@int/geotoolkit/controls/tools/CrossHair';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
import type { ScaleScrollStrategy } from '@int/geotoolkit/scene/ScaleScrollStrategy';
import type { SymbolLabelShape } from '@int/geotoolkit/schematics/labeling/SymbolLabelShape';
export { DisplayMode };
/**
 * <p>
 * A schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget~AnnotatedWidget} class
 * to work with {@link @int/geotoolkit/schematics/scene/DeviatedWellBoreWithLabels~DeviatedWellBoreWithLabels} as a data model
 * </p>
 * <p>
 * CompositeSchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
 * The main way to configure and customize the widget is to use its setOptions() function
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode~WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
 * </ul>
 * </p>
 */
export declare class CompositeSchematicsWidget extends AnnotatedWidget implements ISchematicsWidget {
    constructor(options?: CompositeSchematicsWidget.Options);
    getToolByName<T extends keyof CompositeSchematicsWidget.Tools>(toolName: T): CompositeSchematicsWidget.Tools[T];
    on<E extends keyof CompositeSchematicsWidget.EventMap>(type: E, callback: (eventType: E, sender: this, args: CompositeSchematicsWidget.EventMap[E]) => void): this;
    off<E extends keyof CompositeSchematicsWidget.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: CompositeSchematicsWidget.EventMap[E]) => void): this;
    notify<E extends keyof CompositeSchematicsWidget.EventMap>(type: E, source: CompositeSchematicsWidget, args?: CompositeSchematicsWidget.EventMap[E]): this;
    /**
     * Sets display mode
     * @param displayMode display mode
     */
    setDisplayMode(displayMode: WellborewithlabelsDisplayMode): this;
    /**
     * Gets display mode
     */
    getDisplayMode(): WellborewithlabelsDisplayMode;
    /**
     * Gets model coordinates (where y-ordinate is true MD-value) at given device ones.<br>
     * If conversion fails then returned point contains NaN values as its x- and y- ordinates.
     * @param devicePoint source device point
     * @param [modelPoint] destination model point
     */
    getModelPoint(devicePoint: Point, modelPoint?: Point): Point;
    /**
     * Gets device coordinates at given model ones
     * @param modelPoint source model point (where y-ordinate is true MD-value)
     * @param [devicePoint] destination device point
     */
    getDevicePoint(modelPoint: Point, devicePoint?: Point): Point;
    /**
     * Transforms depth value between linear and MD model space.<br>
     * If not possible returns NaN
     * @param val depth value to transform
     * @param [mdToLinear] direction of transformation
     * @returns transformed value
     */
    transformDepth(val: number, mdToLinear?: boolean): number;
    /**
     * Gets well bore view mode
     * @returns viewMode
     */
    getViewMode(): ViewMode;
    /**
     * Sets well bore view mode
     * @param viewMode well bore view mode
     * @returns "model limits to bounds" depths mapping
     */
    setViewMode(viewMode: ViewMode): IViewModeBuilder.BuildOptions;
    /**
     * Gets WellBoreNode's model limits
     */
    getCenterModelLimits(): Rect | null;
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
    protected initializeTools(options?: CompositeSchematicsWidget.Options): this;
    /**
     * Sets tools options
     * @param options options (see {@link import("geotoolkit/widgets/AnnotatedWidget").AnnotatedWidget.setToolsOptions} for inherited options)
     * @returns this
     */
    setToolsOptions(options: CompositeSchematicsWidget.ToolsOptions): this;
    getToolsOptions(): CompositeSchematicsWidget.ToolsOptionsOut;
    /**
     * Gets widget options (see "setOptions" API for the options format)
     * @returns widget options
     */
    getOptions(): CompositeSchematicsWidget.OptionsOut;
    /**
     * Sets all the options pertaining to this object
     * @param [options] options object
     * @returns this
     */
    setOptions(options?: CompositeSchematicsWidget.Options): this;
    /**
     * Gets wellbore
     */
    getWellBoreWithLabels(): WellBoreWithLabels;
    /**
     * Updates layout(s)
     * @param [targets] optional parameter about which element to layout
     * @param [point] device point to keep position
     * @returns this
     */
    updateLayout(targets?: ILayoutable[], point?: Point): this;
    /**
     * Gets {@link @int/geotoolkit/schematics/data/WellBoreData~WellBoreData} data instance
     */
    getData(): WellBoreData;
    /**
     * Sets data
     * @param data data object
     */
    setData(data: CompositeSchematicsWidget.Data): this;
    /**
     * Gets all the properties pertaining to this object
     *
     * @returns options object
     */
    getProperties(): CompositeSchematicsWidget.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param [options] options object
     * @returns this
     */
    setProperties(options?: CompositeSchematicsWidget.Options): this;
    /**
     * Set deviation properties
     * @param options deviation options
     * @returns this
     */
    setDeviation(options: CompositeSchematicsWidget.Options['deviation']): this;
    /**
     * Gets deviation properties
     * @returns deviation options
     */
    getDeviation(): CompositeSchematicsWidget.OptionsOut['deviation'] | null;
    /**
     * Sets labeling mode (convenience method with all labeling default settings).<br>
     * For fine tuning use "setOptions" with "labeling" customized parameters section
     * @param mode labeling mode
     * @returns this
     */
    setLabelsMode(mode: Mode): this;
    /**
     * Gets labeling strategy
     * @deprecated since 4.0. Use CompositeSchematicsWidget.getWellBoreWithLabels().getLabelingStrategy() instead;
     */
    getLabelingStrategy(): LabelingStrategy;
}
export declare namespace CompositeSchematicsWidget {
    /**
     * options object
     */
    type AnnotationOption = DeepMerge<AnnotatedNode.AnnotationOption, {
        axis?: {
            type?: DepthAxisType;
        };
    }>;
    type AnnotationOptions = {
        [key in AnnotationLocation]?: AnnotationOption;
    };
    /**
     * options object
     */
    type Options = DeepMerge<AnnotationOptions, AnnotatedWidget.Options & {
        /**
         * trajectory options
         */
        trajectory?: WellBoreWithLabels.Options['trajectory'];
        /**
         * labeling options
         */
        labeling?: {
            /**
             * labeling  mode
             */
            mode?: Mode;
            /**
             * gap from trajectory center in along trajectory labeling mode
             */
            gap?: number;
            /**
             * default labels location
             */
            defaultlocation?: LocationType;
            /**
             * regular label shape
             */
            labelshape?: LabelShape | SymbolLabelShape.Options;
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
        };
        /**
         * labeling strategy
         */
        labelingstrategy?: LabelingStrategyBase;
        /**
         * gap area options, in case of number - left and right gaps
         */
        gap?: Partial<Record<'left' | 'right' | 'top' | 'bottom', {
            visible?: boolean;
            /**
             * gap area resizable flag
             */
            resizable?: boolean;
            /**
             * gap area size
             */
            size?: string | number;
            /**
             * gap area linestyle
             */
            linestyle?: LineStyle.Type;
            /**
             * gap area fillstyle
             */
            fillstyle?: FillStyle.Type;
        }>>;
        /**
         * wellbore node options
         */
        wellborenode?: WellBoreNode.Options & {
            componentsvisibility?: WellBoreNode.ComponentsVisibility;
        };
        /**
         * track width strategy (used for vertical mode only, for deviated use options.deviation.transformer)
         */
        trackwidthstrategy?: TrackWidthStrategy;
        /**
         * scale scroll strategy
         */
        scalescrollstrategy?: ScaleScrollStrategy.Delegate;
        /**
         * data object
         */
        data?: {
            /**
             * WellBoreData instance or array of component data objects
             */
            elements?: WellBoreData | WellBoreData.Elements[];
            /**
             * trajectory
             */
            trajectory?: Trajectory2d;
        } | CompositeSchematicsWidget.Data;
        /**
         * tooltip settings
         */
        tooltip?: {
            /**
             * get tooltip text function (default displays top-most component's toString info)
             */
            gettext?: (componentNodes: ComponentNode[]) => string;
            /**
             * HTML div container element or it will be created with className cg-tooltip-container
             */
            divelement?: HTMLElement;
            /**
             * autoflip
             */
            autoflip?: boolean;
        };
        /**
         * legend alignment area.<br>
         */
        legendalignmentarea?: AnnotationLocation;
        /**
         * legend options
         */
        legend?: Legend.Options & {
            direction?: Direction;
            options?: ScrollablePanel.Options;
            /**
             * legend offset
             */
            offset?: {
                /**
                 * x-offset
                 */
                x: number;
                /**
                 * y-offset
                 */
                y: number;
            };
            sizeisindevicespace?: boolean;
            autosize?: boolean;
            /**
             * legend visibility
             */
            visible?: boolean;
            /**
             * legend alignment
             */
            alignment?: AnchorType;
            /**
             * legend line style
             */
            linestyle?: LineStyle.Type;
            /**
             * '] legend fill style
             */
            fillstyle?: FillStyle.Type;
            /**
             * paddings for each side of an legend
             */
            padding?: SpaceStyle.Options | SpaceStyle;
            /**
             * legend item options
             */
            legenditem?: {
                /**
                 * legend item text provider/method
                 */
                gettext?: AbstractLegendItemInfoProvider | ((componentNode: ComponentNode) => null | string);
                /**
                 * legend item text style
                 */
                textstyle?: TextStyle | TextStyle.Options;
                symbol?: SymbolShape.Options;
            };
        };
        /**
         * true for webgl rendering
         */
        webglrendering?: boolean;
        /**
         * alignment
         */
        alignment?: Alignment;
        /**
         * deviation options
         */
        deviation?: DeviatedCompositeNode.DeviationOptions & {
            /**
             * optional model area for {@link @int/geotoolkit/schematics/scene/WellBoreWithLabels~DisplayMode.Deviated} mode
             */
            datamodellimits?: Rect.Type;
        };
        /**
         * Y-to-X scales ratio mode
         */
        scalesratiomode?: ScalesRatioMode;
        /**
         * Y-to-X scales ratio used for scalesratiomode=ScalesRatioMode.Keep only
         */
        scalesratio?: number;
        /**
         * line style for border
         */
        border?: LineStyle.Type;
        /**
         * units info
         */
        units?: Trajectory2d.UnitsOptions;
        /**
         * tools tools options see {@link import("geotoolkit/widgets/AnnotatedWidget").AnnotatedWidget.setToolsOptions} for inherited options and {@link import("geotoolkit/schematics/widgets/CompositeSchematicsWidget").CompositeSchematicsWidget.setToolsOptions} for specific ones)
         */
        tools?: ToolsOptions;
        sealevel?: Shape.Options & {
            /**
             * depth
             */
            depth?: number;
            /**
             * symbol
             */
            symbol?: SymbolShape;
        };
        multidiameterselectionmode?: MultiDiameterSelectionMode;
    }>;
    /**
     * options (see {@link import("geotoolkit/widgets/AnnotatedWidget").AnnotatedWidget.setToolsOptions} for inherited options)
     */
    type ToolsOptions = AnnotatedWidget.ToolsOptions & {
        /**
         * rubber band zoom options
         */
        rubberbandzoom?: RubberBand.Options & {
            /**
             * mode rubber band zoom rendering mode
             */
            mode?: RubberBandRenderMode;
        };
        tooltip?: ToolTipTool.Options;
    };
    /**
     * options (see {@link import("geotoolkit/widgets/AnnotatedWidget").AnnotatedWidget.getToolsOptions} for inherited options)
     */
    type ToolsOptionsOut = AnnotatedWidget.ToolsOptionsOut & {
        /**
         * rubber band zoom options
         */
        rubberbandzoom?: RubberBand.Options & {
            /**
             * mode rubber band zoom rendering mode
             */
            mode: RubberBandRenderMode;
        };
        /**
         * JSON which defines cross-hair cursor.
         */
        crosshair?: CrossHair.OptionsOut;
        /**
         * JSON which defines selection.
         */
        selection?: Selection.Options & {
            /**
             * does the selection resets between two picks
             */
            resetselection?: boolean;
        };
        tooltip?: ToolTipTool.OptionsOut;
    };
    /**
     * options object
     */
    type OptionsOut = AnnotatedWidget.OptionsOut & {
        /**
         * trajectory options
         */
        trajectory: WellBoreWithLabels.OptionsOut['trajectory'];
        /**
         * alignment
         */
        alignment: Alignment;
        /**
         * labeling options
         */
        labeling: WellBoreWithLabels.OptionsOut['labeling'];
        /**
         * gap area options
         */
        gap?: Partial<Record<'left' | 'right' | 'top' | 'bottom', {
            visible?: boolean;
            /**
             * gap area resizable flag
             */
            resizable?: boolean;
            /**
             * gap area size
             */
            size?: string | number;
            /**
             * gap area linestyle
             */
            linestyle?: LineStyle.Type;
            /**
             * gap area fillstyle
             */
            fillstyle?: FillStyle.Type;
        }>>;
        /**
         * wellbore node options
         */
        wellborenode: WellBoreNode;
        /**
         * scale scroll strategy
         */
        scalescrollstrategy?: ScaleScrollStrategy.Delegate;
        /**
         * track width strategy (used for vertical mode only, for deviated use options.deviation.transformer)
         */
        trackwidthstrategy: TrackWidthStrategy;
        /**
         * legend alignment area.<br>
         */
        legendalignmentarea: AnnotationLocation;
        /**
         * legend options
         */
        legend?: {
            /**
             * legend offset
             */
            offset?: {
                /**
                 * x-offset
                 */
                x: number;
                /**
                 * y-offset
                 */
                y: number;
            };
            /**
             * legend visibility
             */
            visible?: boolean;
            /**
             * legend alignment
             */
            alignment?: AnchorType;
            /**
             * legend line style
             */
            linestyle?: LineStyle.Type;
            /**
             * legend fill style
             */
            fillstyle?: FillStyle.Type;
            /**
             * paddings for each side of an legend
             */
            padding?: {
                /**
                 * top padding in pixels
                 */
                top?: number | string;
                /**
                 * top padding  in pixels
                 */
                bottom?: number | string;
                /**
                 * right padding  in pixels
                 */
                right?: number | string;
                /**
                 * left padding  in pixels
                 */
                left?: number | string;
            } | SpaceStyle;
            /**
             * legend item options
             */
            legenditem?: {
                /**
                 * legend item text provider/method
                 */
                gettext?: AbstractLegendItemInfoProvider | ((componentNode: ComponentNode) => null | string);
                /**
                 * legend item text style
                 */
                textstyle?: TextStyle.Type;
                /**
                 * legend item symbol options see {@link import("geotoolkit/controls/shapes/SymbolLegendItem").SymbolLegendItem.setOptions}
                 */
                symbol?: SymbolLegendItem.Options;
            };
        };
        /**
         * true for webgl rendering
         */
        webglrendering: boolean;
        /**
         * deviation options
         */
        deviation?: DeviatedCompositeNode.DeviationOptions & {
            /**
             * optional model area for {@link @int/geotoolkit/schematics/scene/WellBoreWithLabels~DisplayMode.Deviated} mode
             */
            datamodellimits?: Rect;
        };
        /**
         * Labeling strategy
         */
        labelingstrategy?: LabelingStrategyBase;
        /**
         * Y-to-X scales ratio mode
         */
        scalesratiomode: ScalesRatioMode;
        /**
         * Y-to-X scales ratio used for scalesratiomode=ScalesRatioMode.Keep only
         */
        scalesratio: number;
        /**
         * units info
         */
        units: Trajectory2d.UnitsOptions;
        /**
         * tools options
         */
        tools: ToolsOptions;
        sealevel: Shape.OptionsOut & {
            /**
             * depth
             */
            depth?: number;
            /**
             * symbol
             */
            symbol?: SymbolShape;
        };
        multidiameterselectionmode: MultiDiameterSelectionMode;
    } & AnnotationOptions;
    type Tools = {
        'tooltip': ToolTipTool;
        'legendTool': LegendTool;
    } & AnnotatedWidget.Tools;
    type Data = WellBoreData.Elements[] | WellBoreData | {
        /**
         * WellBoreData instance or array of component data objects
         */
        elements?: WellBoreData | WellBoreData.Elements[];
        /**
         * trajectory
         */
        trajectory?: Trajectory2d;
    };
    type EventMap = AnnotatedWidget.EventMap & {
        [Events.ComponentsLoading]: void;
        [Events.ComponentsLoaded]: void;
    };
}
