/**
 * @module geotoolkit/schematics/widgets/SchematicsWidget
 */
import { LocationType } from '@int/geotoolkit/schematics/labeling/LocationType';
import { AlignmentType } from '@int/geotoolkit/schematics/labeling/AlignmentType';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Point } from '@int/geotoolkit/util/Point';
import { Alignment } from '@int/geotoolkit/layout/BoxLayout';
import type { Merge } from '@int/geotoolkit/base';
import { Mode } from '@int/geotoolkit/schematics/labeling/Mode';
import { RubberBandRenderMode } from '@int/geotoolkit/controls/tools/RubberBandRenderMode';
import { LabelPosition, TickPosition } from '@int/geotoolkit/axis/TickInfo';
import { ViewMode, WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { MultiDiameterSelectionMode } from '@int/geotoolkit/schematics/widgets/MultiDiameterSelectionMode';
import { LabelingStrategy } from '@int/geotoolkit/schematics/labeling/LabelingStrategy';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { LegendTool } from '@int/geotoolkit/widgets/tools/LegendTool';
import { ISchematicsWidget } from '@int/geotoolkit/schematics/widgets/ISchematicsWidget';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import { ToolTipTool } from '@int/geotoolkit/controls/tools/ToolTipTool';
import { LabelShape } from '@int/geotoolkit/schematics/labeling/LabelShape';
import { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { AnnotatedNode } from '@int/geotoolkit/scene/AnnotatedNode';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import type { TrackWidthStrategy } from '@int/geotoolkit/deviation/TrackWidthStrategy';
import type { ScaleScrollStrategy } from '@int/geotoolkit/scene/ScaleScrollStrategy';
import type { BoundsCalculation } from '@int/geotoolkit/schematics/utils/BoundsCalculation';
import type { ConnectorShape } from '@int/geotoolkit/schematics/labeling/ConnectorShape';
import type { AnchorType } from '@int/geotoolkit/util/AnchorType';
import type { AbstractLegendItemInfoProvider } from '@int/geotoolkit/schematics/widgets/legend/AbstractLegendItemInfoProvider';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
/**
 * Enum of depth (vertical) axis types
 * @enum
 * @readonly
 */
export declare enum DepthAxisType {
    /**
     * Auto: instance of {@link @int/geotoolkit/axis/DiscreteValueTickGenerator~DiscreteValueTickGenerator} is used for "Compressed"
     * and "KeepAspectRatio" view modes; instance of {@link @int/geotoolkit/axis/AdaptiveTickGenerator~AdaptiveTickGenerator} is used for
     * "Regular" view mode
     */
    Auto = "Auto",
    /**
     * Linear: instance of {@link @int/geotoolkit/axis/AdaptiveTickGenerator~AdaptiveTickGenerator} is used for every view mode
     */
    Linear = "Linear"
}
/**
 * <p>
 * A schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget~AnnotatedWidget} class
 * to work with {@link @int/geotoolkit/schematics/scene/WellBoreNode~WellBoreNode} as a data model with labeling capabilities
 * </p>
 * <p>
 * SchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
 * The main way to configure and customize the widget is to use its setOptions() function
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode~WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
 * </ul>
 * </p>
 * @deprecated since 4.0. Use {@link @int/geotoolkit/schematics/widgets/CompositeSchematicsWidget~CompositeSchematicsWidget} instead.
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoading
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoaded
 * @example
 * import {WellBoreData} from '@int/geotoolkit/schematics/data/WellBoreData';
 * import {SchematicsWidget} from '@int/geotoolkit/schematics/widgets/SchematicsWidget';
 * // Initialize the data
 * const wellBoreData = new WellBoreData();
 * wellBoreData.addComponents([...]);
 * // Create the widget using the data
 * const widget = new SchematicsWidget({'options': options, 'data': wellBoreData});
 */
export declare class SchematicsWidget extends AnnotatedWidget implements ISchematicsWidget {
    constructor(options?: SchematicsWidget.Options);
    getToolByName<T extends keyof SchematicsWidget.Tools>(toolName: T): SchematicsWidget.Tools[T];
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
    setViewMode(viewMode: ViewMode | WellBoreNode.ViewModeInfo): IViewModeBuilder.BuildOptions;
    /**
     * Gets model coordinates (where y-ordinate is true MD-value) at given device ones
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
     * Gets labeling strategy
     */
    getLabelingStrategy(): LabelingStrategy;
    /**
     * Gets WellBoreNode's model limits
     */
    getCenterModelLimits(): Rect | null;
    /**
     * Sets tools options
     * @param options options (see {@link import("geotoolkit/widgets/AnnotatedWidget").AnnotatedWidget.setToolsOptions} for inherited options)
     * @returns this
     */
    setToolsOptions(options: SchematicsWidget.ToolsOptions): this;
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
    protected initializeTools(options?: any): this;
    /**
     * Gets {@link @int/geotoolkit/schematics/data/WellBoreData~WellBoreData} data instance
     */
    getData(): WellBoreData | null;
    /**
     * Sets data
     * @param data wellbore data to set
     */
    setData(data: any): this;
    /**
     * Gets widget options (see "setOptions" API for the options format)
     *
     * @returns widget options
     */
    getOptions(): any;
    /**
     * Sets widget options
     *
     * @param [options] properties
     */
    setOptions(options?: SchematicsWidget.OptionsBase): this;
    /**
     * Updates layout(s)
     * @param [targets] not used (entire content gets layouted)
     */
    updateLayout(targets?: ILayoutable[]): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): SchematicsWidget.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: SchematicsWidget.Options): this;
}
export declare namespace SchematicsWidget {
    /**
     * options
     */
    type Options = AnnotatedWidget.Options & {
        options?: any;
        /**
         * labeling strategy
         */
        labelingStrategy?: LabelingStrategy | {
            /**
             * labels alignment type
             */
            defaultAlignment?: AlignmentType;
            /**
             * labels default location area type
             */
            defaultLocation?: LocationType;
        };
        /**
         * wellbore horizontal alignment
         */
        alignment?: Alignment;
        /**
         * gap size value or object
         */
        gap?: number | {
            /**
             * horizontal gap size value or object
             */
            horizontal?: number | {
                /**
                 * left gap size
                 */
                left?: number;
                /**
                 * right gap size
                 */
                right?: number;
            };
            /**
             * vertical gap size value or object
             */
            vertical?: number | {
                /**
                 * top gap size
                 */
                top?: number;
                /**
                 * bottom gap size
                 */
                bottom?: number;
            };
        };
        /**
         * annotations sizes section
         */
        annotationssizes?: AnnotatedWidget.AnnotationSize;
        /**
         * west annotation configuration
         */
        west?: {
            /**
             * west axis configuration
             */
            axis?: {
                /**
                 * west axis tick position
                 */
                tickposition?: TickPosition;
                /**
                 * west axis label position
                 */
                labelposition?: LabelPosition;
                /**
                 * depth axis type (NOTE: the 'type' parameter is ignored if 'tickgenerator' is set explicitly)
                 */
                type?: DepthAxisType;
            };
        };
        /**
         * northwest options
         */
        northwest?: {
            /**
             * title options
             */
            title?: {
                /**
                 * title textstyle
                 */
                textstyle?: TextStyle.Type;
            };
        };
        /**
         * sea level options
         */
        sealevel?: {
            /**
             * sea level display depth
             */
            depth?: object;
            /**
             * sea level visibility flag
             */
            visible?: boolean;
        };
        /**
         * wellbore node options see {@link import("geotoolkit/schematics/scene/WellBoreNode").WellBoreNode.setProperties}
         */
        wellborenode?: {
            highlight?: any;
            /**
             * wellbore node auto model limits mode flag
             */
            automodellimitsmode?: boolean;
            /**
             * components visibility options
             */
            componentsvisibility?: {
                /**
                 * array of visible component names or object
                 */
                visible?: any;
                /**
                 * array of invisible component names or object
                 */
                invisible?: any;
            };
        };
        /**
         * label shape options
         */
        labelshape?: {
            /**
             * paddings for each side of the DefaultLabelShape
             */
            padding?: {
                /**
                 * top padding in pixels
                 */
                top?: number;
                /**
                 * top padding in pixels
                 */
                bottom?: number;
                /**
                 * right padding in pixels
                 */
                right?: number;
                /**
                 * left padding in pixels
                 */
                left?: number;
            } | SpaceStyle;
        };
        /**
         * track width strategy
         */
        trackWidthStrategy?: TrackWidthStrategy;
        scalescrollstrategy?: ScaleScrollStrategy;
        /**
         * wellbore data
         */
        data?: any;
        /**
         * tooltip settings
         */
        tooltip?: {
            /**
             * get tooltip text function (default displays top-most component's toString info)
             */
            gettext?: Function;
            /**
             * HTML div container element or it will be created with className cg-tooltip-container
             */
            divelement?: HTMLElement;
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
                 * define label highlight class name (see cssstyle.html tutorial)
                 */
                cssclass?: string;
                /**
                 * define line style attribute for label highlight
                 */
                linestyle?: LineStyle;
                /**
                 * define fill style attribute for label highlight
                 */
                fillstyle?: FillStyle;
            };
            /**
             * define component highlight properties
             */
            component?: {
                /**
                 * implementation to define component's area to highlight
                 */
                boundscalculation?: BoundsCalculation;
                /**
                 * define component highlight class name (see cssstyle.html tutorial)
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
        };
        /**
         * labeling options
         */
        labeling?: {
            /**
             * labeling mode
             */
            mode?: Mode;
            /**
             * regular label shape
             */
            labelShape?: LabelShape;
            /**
             * highlighted label shape
             */
            labelShapeHighlighted?: LabelShape;
            /**
             * method to retrieve component node info
             */
            labelInfoProvider?: Function;
            /**
             * connector shape
             */
            connectorShape?: ConnectorShape;
        };
        /**
         * legend alignment area.<br>
         */
        legendalignmentarea?: AnnotationLocation;
        /**
         * legend options
         */
        legend?: {
            /**
             * legend alignment
             */
            alignment?: AnchorType;
            /**
             * legend line style
             */
            linestyle?: any;
            /**
             * '] legend fill style
             */
            fillstyle?: any;
            /**
             * paddings for each side of a legend
             */
            padding?: {
                /**
                 * top padding in pixels
                 */
                top?: number;
                /**
                 * top padding  in pixels
                 */
                bottom?: number;
                /**
                 * right padding  in pixels
                 */
                right?: number;
                /**
                 * left padding  in pixels
                 */
                left?: number;
            } | SpaceStyle;
            /**
             * legend visibility
             */
            visible?: boolean;
            /**
             * legend item options
             */
            legenditem?: {
                /**
                 * legend item text provider/method
                 */
                gettext?: AbstractLegendItemInfoProvider | Function;
                /**
                 * legend item text style
                 */
                textstyle?: TextStyle;
                /**
                 * legend item symbol options (see {@link @int/geotoolkit/controls/shapes/SymbolLegendItem~SymbolLegendItem} for more details)
                 */
                symbol?: any;
            };
        };
        /**
         * tools tools options see {@link import("geotoolkit/widgets/AnnotatedWidget").AnnotatedWidget.setToolsOptions} for inherited options and {@link import("geotoolkit/schematics/widgets/SchematicsWidget").SchematicsWidget.setToolsOptions} for specific ones)
         */
        tools?: {
            /**
             * crosshair cursor options
             */
            crosshair?: {
                /**
                 * crosshair cursor enabled state
                 */
                enabled?: boolean;
            };
            /**
             * rubber band zoom options
             */
            rubberbandzoom?: {
                /**
                 * mode rubber band zoom rendering mode
                 */
                mode?: RubberBandRenderMode;
                /**
                 * rubber band enabled state
                 */
                enabled?: boolean;
            };
        };
        /**
         * multi diameter selection/highlight/tooltip mode
         */
        multidiameterselectionmode?: MultiDiameterSelectionMode;
    };
    /**
     * properties
     */
    type OptionsBase = Merge<AnnotatedNode.AnnotationOptions, {
        /**
         * labeling strategy
         */
        labelingStrategy?: LabelingStrategy | {
            /**
             * labels alignment type
             */
            defaultAlignment?: AlignmentType;
            /**
             * labels default location area type
             */
            defaultLocation?: LocationType;
        };
        /**
         * wellbore horizontal alignment
         */
        alignment?: Alignment;
        /**
         * gap size value or object
         */
        gap?: number | {
            /**
             * horizontal gap size value or object
             */
            horizontal?: number | {
                /**
                 * left gap size
                 */
                left?: number;
                /**
                 * right gap size
                 */
                right?: number;
            };
            /**
             * vertical gap size value or object
             */
            vertical?: number | {
                /**
                 * top gap size
                 */
                top?: number;
                /**
                 * bottom gap size
                 */
                bottom?: number;
            };
        };
        /**
         * annotations sizes section
         */
        annotationssizes?: AnnotatedWidget.AnnotationSize;
        /**
         * west annotation configuration
         */
        west?: {
            /**
             * west axis configuration
             */
            axis?: {
                /**
                 * west axis tick position
                 */
                tickposition?: TickPosition;
                /**
                 * west axis label position
                 */
                labelposition?: LabelPosition;
                /**
                 * depth axis type (NOTE: the 'type' parameter is ignored if 'tickgenerator' is set explicitly)
                 */
                type?: DepthAxisType;
            };
        };
        /**
         * northwest properties
         */
        northwest?: {
            /**
             * title properties
             */
            title?: {
                /**
                 * title textstyle
                 */
                textstyle?: any;
            };
        };
        /**
         * sea level properties
         */
        sealevel?: {
            /**
             * sea level display depth
             */
            depth?: object;
            /**
             * sea level visibility flag
             */
            visible?: boolean;
        };
        /**
         * wellbore node properties see {@link import("geotoolkit/schematics/scene/WellBoreNode").WellBoreNode.setProperties}
         */
        wellborenode?: WellBoreNode.Options;
        /**
         * label shape properties
         */
        labelshape?: {
            /**
             * paddings for each side of the DefaultLabelShape
             */
            padding?: {
                /**
                 * top padding in pixels
                 */
                top?: number;
                /**
                 * top padding in pixels
                 */
                bottom?: number;
                /**
                 * right padding in pixels
                 */
                right?: number;
                /**
                 * left padding in pixels
                 */
                left?: number;
            } | SpaceStyle;
        };
        /**
         * track width strategy
         */
        trackWidthStrategy?: TrackWidthStrategy;
        /**
         * scalescrollstrategy
         */
        scalescrollstrategy?: ScaleScrollStrategy;
        /**
         * tooltip settings
         */
        tooltip?: {
            /**
             * get tooltip text function (default displays top-most component's toString info)
             */
            gettext?: Function;
            /**
             * HTML div container element or it will be created with className cg-tooltip-container
             */
            divelement?: HTMLElement;
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
                 * define label highlight class name (see cssstyle.html tutorial)
                 */
                cssclass?: string;
                /**
                 * define line style attribute for label highlight
                 */
                linestyle?: LineStyle;
                /**
                 * define fill style attribute for label highlight
                 */
                fillstyle?: FillStyle;
            };
            /**
             * define component highlight properties
             */
            component?: {
                /**
                 * implementation to define component's area to highlight
                 */
                boundscalculation?: BoundsCalculation;
                /**
                 * define component highlight class name (see cssstyle.html tutorial)
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
        };
        /**
         * labeling properties
         */
        labeling?: {
            /**
             * labeling mode
             */
            mode?: Mode;
            /**
             * regular label shape
             */
            labelShape?: LabelShape;
            /**
             * highlighted label shape
             */
            labelShapeHighlighted?: LabelShape;
            /**
             * method to retrieve component node info
             */
            labelInfoProvider?: Function;
            /**
             * connector shape
             */
            connectorShape?: ConnectorShape;
        };
        /**
         * legend alignment area.<br>
         */
        legendalignmentarea?: AnnotationLocation;
        /**
         * legend properties
         */
        legend?: {
            /**
             * legend alignment
             */
            alignment?: AnchorType;
            /**
             * legend line style
             */
            linestyle?: any;
            /**
             * legend fill style
             */
            fillstyle?: any;
            /**
             * paddings for each side of a legend
             */
            padding?: {
                /**
                 * top padding in pixels
                 */
                top?: number;
                /**
                 * top padding  in pixels
                 */
                bottom?: number;
                /**
                 * right padding  in pixels
                 */
                right?: number;
                /**
                 * left padding  in pixels
                 */
                left?: number;
            } | SpaceStyle;
            /**
             * legend visibility
             */
            visible?: boolean;
            /**
             * legend item properties
             */
            legenditem?: {
                /**
                 * legend item text provider/method
                 */
                gettext?: AbstractLegendItemInfoProvider | Function;
                /**
                 * legend item text style
                 */
                textstyle?: TextStyle;
                /**
                 * legend item symbol properties (see {@link @int/geotoolkit/controls/shapes/SymbolLegendItem~SymbolLegendItem} for more details)
                 */
                symbol?: object;
            };
        };
        /**
         * tools tools options see {@link import("geotoolkit/widgets/AnnotatedWidget").AnnotatedWidget.setToolsOptions} for inherited properties and {@link import("geotoolkit/schematics/widgets/SchematicsWidget").SchematicsWidget.setToolsOptions} for specific ones)
         */
        tools?: {
            /**
             * crosshair cursor properties
             */
            crosshair?: {
                /**
                 * crosshair cursor enabled state
                 */
                enabled?: boolean;
                /**
                 * crosshair cursor's horizontal line style
                 */
                horizontal?: any;
                /**
                 * crosshair cursor's vertical line style
                 */
                vertical?: any;
            };
            /**
             * rubber band zoom properties
             */
            rubberbandzoom?: {
                /**
                 * mode rubber band zoom rendering mode
                 */
                mode?: RubberBandRenderMode;
                /**
                 * rubber band enabled state
                 */
                enabled?: boolean;
                /**
                 * rubber band linestyle
                 */
                linestyle?: LineStyle.Type;
                /**
                 * rubber band fillstyle
                 */
                fillstyle?: FillStyle.Type;
            };
        };
        /**
         * multi diameter selection/highlight/tooltip mode
         */
        multidiameterselectionmode?: MultiDiameterSelectionMode;
    }>;
    /**
     * properties
     */
    type OptionsOut = AnnotatedWidget.OptionsOut & {
        /**
         * labeling strategy
         */
        labelingStrategy?: LabelingStrategy | {
            /**
             * labels alignment type
             */
            defaultAlignment?: AlignmentType;
            /**
             * labels default location area type
             */
            defaultLocation?: LocationType;
        };
        /**
         * wellbore horizontal alignment
         */
        alignment?: Alignment;
        /**
         * gap size value or object
         */
        gap?: number | {
            /**
             * horizontal gap size value or object
             */
            horizontal?: number | {
                /**
                 * left gap size
                 */
                left?: number;
                /**
                 * right gap size
                 */
                right?: number;
            };
            /**
             * vertical gap size value or object
             */
            vertical?: number | {
                /**
                 * top gap size
                 */
                top?: number;
                /**
                 * bottom gap size
                 */
                bottom?: number;
            };
        };
        /**
         * west annotation configuration
         */
        west?: {
            /**
             * west axis configuration
             */
            axis?: {
                /**
                 * west axis tick position
                 */
                tickposition?: TickPosition;
                /**
                 * west axis label position
                 */
                labelposition?: LabelPosition;
                /**
                 * depth axis type (NOTE: the 'type' parameter is ignored if 'tickgenerator' is set explicitly)
                 */
                type?: DepthAxisType;
            };
        };
        /**
         * northwest properties
         */
        northwest?: {
            /**
             * title properties
             */
            title?: {
                /**
                 * title textstyle
                 */
                textstyle?: any;
            };
        };
        /**
         * sea level properties
         */
        sealevel?: {
            /**
             * sea level display depth
             */
            depth?: object;
            /**
             * sea level visibility flag
             */
            visible?: boolean;
        };
        /**
         * wellbore node properties see {@link import("geotoolkit/schematics/scene/WellBoreNode").WellBoreNode.setProperties}
         */
        wellborenode?: {
            /**
             * wellbore node auto model limits mode flag
             */
            automodellimitsmode?: boolean;
            /**
             * components visibility properties
             */
            componentsvisibility?: {
                /**
                 * array of visible component names or object
                 */
                visible?: any;
                /**
                 * array of invisible component names or object
                 */
                invisible?: any;
            };
        };
        /**
         * label shape properties
         */
        labelshape?: {
            /**
             * paddings for each side of the DefaultLabelShape
             */
            padding?: {
                /**
                 * top padding in pixels
                 */
                top?: number;
                /**
                 * top padding in pixels
                 */
                bottom?: number;
                /**
                 * right padding in pixels
                 */
                right?: number;
                /**
                 * left padding in pixels
                 */
                left?: number;
            } | SpaceStyle;
        };
        /**
         * track width strategy
         */
        trackWidthStrategy?: TrackWidthStrategy;
        /**
         * scalescrollstrategy
         */
        scalescrollstrategy?: ScaleScrollStrategy;
        /**
         * define highlight properties
         */
        highlight?: {
            /**
             * define label highlight properties
             */
            label?: {
                /**
                 * define label highlight class name (see cssstyle.html tutorial)
                 */
                cssclass?: string;
                /**
                 * define line style attribute for label highlight
                 */
                linestyle?: LineStyle;
                /**
                 * define fill style attribute for label highlight
                 */
                fillstyle?: FillStyle;
            };
            /**
             * define component highlight properties
             */
            component?: {
                /**
                 * implementation to define component's area to highlight
                 */
                boundscalculation?: BoundsCalculation;
                /**
                 * define component highlight class name (see cssstyle.html tutorial)
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
        };
        /**
         * labeling properties
         */
        labeling?: {
            /**
             * labeling mode
             */
            mode?: Mode;
            /**
             * regular label shape
             */
            labelShape?: LabelShape;
            /**
             * highlighted label shape
             */
            labelShapeHighlighted?: LabelShape;
            /**
             * method to retrieve component node info
             */
            labelInfoProvider?: Function;
            /**
             * connector shape
             */
            connectorShape?: ConnectorShape;
        };
        /**
         * legend alignment area.<br>
         */
        legendalignmentarea?: AnnotationLocation;
        /**
         * legend properties
         */
        legend?: {
            /**
             * legend alignment
             */
            alignment?: AnchorType;
            /**
             * legend line style
             */
            linestyle?: any;
            /**
             * legend fill style
             */
            fillstyle?: any;
            /**
             * paddings for each side of a legend
             */
            padding?: {
                /**
                 * top padding in pixels
                 */
                top?: number;
                /**
                 * top padding  in pixels
                 */
                bottom?: number;
                /**
                 * right padding  in pixels
                 */
                right?: number;
                /**
                 * left padding  in pixels
                 */
                left?: number;
            } | SpaceStyle;
            /**
             * legend visibility
             */
            visible?: boolean;
            /**
             * legend item properties
             */
            legenditem?: {
                /**
                 * legend item text provider/method
                 */
                gettext?: AbstractLegendItemInfoProvider | Function;
                /**
                 * legend item text style
                 */
                textstyle?: TextStyle;
                /**
                 * legend item symbol properties (see {@link @int/geotoolkit/controls/shapes/SymbolLegendItem~SymbolLegendItem} for more details)
                 */
                symbol?: any;
            };
        };
        /**
         * multi diameter selection/highlight/tooltip mode
         */
        multidiameterselectionmode?: MultiDiameterSelectionMode;
    };
    /**
     * options (see {@link import("geotoolkit/widgets/AnnotatedWidget").AnnotatedWidget.setToolsOptions} for inherited options)
     */
    type ToolsOptions = any;
    type Tools = {
        'tooltip': ToolTipTool;
        'legendTool': LegendTool;
    } & AnnotatedWidget.Tools;
}
