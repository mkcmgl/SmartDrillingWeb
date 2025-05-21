import { LocationType } from '@int/geotoolkit/schematics/labeling/LocationType';
import { Mode } from '@int/geotoolkit/schematics/labeling/Mode';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { RubberBandRenderMode } from '@int/geotoolkit/controls/tools/RubberBandRenderMode';
import { ViewMode, WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { ScalesRatioMode } from '@int/geotoolkit/schematics/scene/MultiLateralWellBoreNode';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { ISchematicsWidget } from '@int/geotoolkit/schematics/widgets/ISchematicsWidget';
import { Point } from '@int/geotoolkit/util/Point';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { RubberBand } from '@int/geotoolkit/controls/tools/RubberBand';
import { LabelShape } from '@int/geotoolkit/schematics/labeling/LabelShape';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
import type { ConnectorShape } from '@int/geotoolkit/schematics/labeling/ConnectorShape';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { ScaleScrollStrategy } from '@int/geotoolkit/scene/ScaleScrollStrategy';
import type { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import type { AbstractLegendItemInfoProvider } from '@int/geotoolkit/schematics/widgets/legend/AbstractLegendItemInfoProvider';
import type { Transformer2d } from '@int/geotoolkit/deviation/Transformer2d';
import type { AnnotatedNode } from '@int/geotoolkit/scene/AnnotatedNode';
import type { DeviatedCompositeNode } from '@int/geotoolkit/deviation/scene/DeviatedCompositeNode';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
import type { LabelingStrategy } from '@int/geotoolkit/schematics/labeling/LabelingStrategy';
/**
 * <p>
 * A schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget~AnnotatedWidget} class
 * to work with {@link @int/geotoolkit/schematics/scene/DeviatedWellBoreWithLabels~DeviatedWellBoreWithLabels} as a data model
 * </p>
 * <p>
 * DeviatedSchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
 * The main way to configure and customize the widget is to use its setOptions() function
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode~WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
 * </ul>
 * </p>
 * @deprecated since 4.0. Use {@link @int/geotoolkit/schematics/widgets/CompositeSchematicsWidget~CompositeSchematicsWidget} instead.
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoading
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoaded
 */
export declare class DeviatedSchematicsWidget extends AnnotatedWidget implements ISchematicsWidget {
    /**
     * @param [options] options object
     */
    constructor(options?: DeviatedSchematicsWidget.Options);
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
    setViewMode(viewMode: ViewMode | WellBoreNode.ViewModeInfo): IViewModeBuilder.BuildOptions;
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
    protected initializeTools(options?: any): this;
    /**
     * Gets widget options (see "setOptions" API for the options format)
     * @returns widget options
     */
    getOptions(): any;
    /**
     * Sets tools options
     * @param options options (see {@link import("geotoolkit/widgets/AnnotatedWidget").AnnotatedWidget.setToolsOptions} for inherited options)
     * @returns this
     */
    setToolsOptions(options: DeviatedSchematicsWidget.ToolsOptions | any): this;
    /**
     * Sets options
     * @param [options] options object
     * @returns this
     */
    setOptions(options?: DeviatedSchematicsWidget.OptionsBase): this;
    /**
     * Gets labeling strategy
     */
    getLabelingStrategy(): LabelingStrategy;
    /**
     * Updates layout(s)
     * @param [targets] optional parameter about which element to layout
     * @param [point] device point to keep position
     * @returns this
     */
    updateLayout(targets?: ILayoutable[], point?: Point): this;
    /**
     * Sets data
     * @param data data object
     */
    setData(data: DeviatedSchematicsWidget.Data): this;
    /**
     * Gets all the properties pertaining to this object
     *
     * @returns options object
     */
    getProperties(): DeviatedSchematicsWidget.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param [options] options object
     * @returns this
     */
    setProperties(options?: DeviatedSchematicsWidget.Options): this;
    /**
     * Set deviation properties
     * @param options deviation options
     * @returns this
     */
    setDeviation(options: DeviatedSchematicsWidget.DeviationOptions): this;
    /**
     * Gets deviation properties
     * @returns deviation options
     */
    getDeviation(): DeviatedCompositeNode.DeviationOptionsOut;
    /**
     * Sets labeling mode (convenience method with all labeling default settings).<br>
     * For fine tuning use "setOptions" with "labeling" customized parameters section
     * @param mode labeling mode
     * @returns this
     */
    setLabelsMode(mode: Mode): this;
}
export declare namespace DeviatedSchematicsWidget {
    /**
     * options object
     */
    type Options = AnnotatedWidget.Options & {
        options?: any;
        sealevel?: any;
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
            defaultLocation?: LocationType;
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
         * gap area options
         */
        gap?: {
            /**
             * left gap area options
             */
            left?: {
                /**
                 * left gap area visibility
                 */
                visible?: boolean;
                /**
                 * left gap area resizable flag
                 */
                resizable?: boolean;
                /**
                 * left gap area size
                 */
                size?: string;
                /**
                 * left gap area linestyle
                 */
                linestyle?: any;
                /**
                 * left gap area fillstyle
                 */
                fillstyle?: any;
            };
            /**
             * right gap area options
             */
            right?: {
                /**
                 * right gap area visibility
                 */
                visible?: boolean;
                /**
                 * right gap area resizable flag
                 */
                resizable?: boolean;
                /**
                 * right gap area size
                 */
                size?: string;
                /**
                 * right gap area linestyle
                 */
                linestyle?: any;
                /**
                 * right gap area fillstyle
                 */
                fillstyle?: any;
            };
            /**
             * top gap area options
             */
            top?: {
                /**
                 * top gap area visibility
                 */
                visible?: boolean;
                /**
                 * top gap area resizable flag
                 */
                resizable?: boolean;
                /**
                 * top gap area size
                 */
                size?: string;
                /**
                 * top gap area linestyle
                 */
                linestyle?: any;
                /**
                 * top gap area fillstyle
                 */
                fillstyle?: any;
            };
            /**
             * bottom gap area options
             */
            bottom?: {
                /**
                 * bottom gap area visibility
                 */
                visible?: boolean;
                /**
                 * bottom gap area resizable flag
                 */
                resizable?: boolean;
                /**
                 * bottom gap area size
                 */
                size?: string;
                /**
                 * bottom gap area linestyle
                 */
                linestyle?: any;
                /**
                 * bottom gap area fillstyle
                 */
                fillstyle?: any;
            };
        };
        /**
         * wellbore node options see {@link import("geotoolkit/schematics/scene/WellBoreNode").WellBoreNode.setProperties}
         */
        wellborenode?: any;
        /**
         * scale scroll strategy
         */
        scalescrollstrategy?: ScaleScrollStrategy;
        /**
         * data object
         */
        data?: {
            /**
             * WellBoreData instance or array of component data objects
             */
            elements?: any;
            /**
             * trajectory
             */
            trajectory?: Trajectory2d;
        };
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
        legend?: {
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
            linestyle?: any;
            /**
             * '] legend fill style
             */
            fillstyle?: any;
            /**
             * paddings for each side of an legend
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
                 * legend item symbol options see {@link import("geotoolkit/controls/shapes/SymbolLegendItem").SymbolLegendItem.setOptions}
                 */
                symbol?: any;
            };
        };
        /**
         * true for webgl rendering
         */
        webglrendering?: boolean;
        /**
         * deviation options
         */
        deviation?: {
            /**
             * 2d-transformer to use
             */
            transformer?: Transformer2d;
            /**
             * track width (pixels)
             */
            trackWidth?: number;
            /**
             * track offset (pixels)
             */
            offset?: number;
            /**
             * clipping flag
             */
            clip?: boolean;
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
         * widget units
         */
        units?: {
            /**
             * 'x' (horizontal) widget unit
             */
            x?: string | AbstractUnit;
            /**
             * 'y' (vertical) widget unit
             */
            y?: string | AbstractUnit;
        };
        /**
         * deviated shape padding settings
         */
        padding?: number | {
            /**
             * top padding
             */
            top?: number;
            /**
             * top padding
             */
            bottom?: number;
            /**
             * right padding
             */
            right?: number;
            /**
             * left padding
             */
            left?: number;
        } | Function;
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
                /**
                 * JSON for center label. See setLabelSettings for more details
                 */
                center?: {
                    /**
                     * lock x position, can be useful if vertical cursor is hidden
                     */
                    lockx?: boolean;
                    /**
                     * visibility of the text
                     */
                    visible?: boolean;
                    /**
                     * alignment of the text
                     */
                    alignment?: AnchorType;
                    /**
                     * strategy to convert x,y to text
                     */
                    textconverter?: Function;
                };
            };
            /**
             * rubber band zoom options
             */
            rubberbandzoom?: {
                /**
                 * mode rubber band zoom rendering mode
                 */
                mode?: RubberBandRenderMode;
            };
        };
    };
    /**
     * options (see {@link import("geotoolkit/widgets/AnnotatedWidget").AnnotatedWidget.setToolsOptions} for inherited options)
     */
    type ToolsOptions = {
        /**
         * rubber band zoom options
         */
        rubberbandzoom?: RubberBand.Options & {
            /**
             * rubberbandzoom mode
             */
            mode?: RubberBandRenderMode;
        };
    };
    /**
     * options object
     */
    type OptionsBase = AnnotatedNode.AnnotationOptions & {
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
            defaultLocation?: LocationType;
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
         * gap area options
         */
        gap?: {
            /**
             * left gap area options
             */
            left?: {
                /**
                 * left gap area visibility
                 */
                visible?: boolean;
                /**
                 * left gap area resizable flag
                 */
                resizable?: boolean;
                /**
                 * left gap area size
                 */
                size?: string;
                /**
                 * left gap area linestyle
                 */
                linestyle?: any;
                /**
                 * left gap area fillstyle
                 */
                fillstyle?: any;
            };
            /**
             * right gap area options
             */
            right?: {
                /**
                 * right gap area visibility
                 */
                visible?: boolean;
                /**
                 * right gap area resizable flag
                 */
                resizable?: boolean;
                /**
                 * right gap area size
                 */
                size?: string;
                /**
                 * right gap area linestyle
                 */
                linestyle?: any;
                /**
                 * right gap area fillstyle
                 */
                fillstyle?: any;
            };
            /**
             * top gap area options
             */
            top?: {
                /**
                 * top gap area visibility
                 */
                visible?: boolean;
                /**
                 * top gap area resizable flag
                 */
                resizable?: boolean;
                /**
                 * top gap area size
                 */
                size?: string;
                /**
                 * top gap area linestyle
                 */
                linestyle?: any;
                /**
                 * top gap area fillstyle
                 */
                fillstyle?: any;
            };
            /**
             * bottom gap area options
             */
            bottom?: {
                /**
                 * bottom gap area visibility
                 */
                visible?: boolean;
                /**
                 * bottom gap area resizable flag
                 */
                resizable?: boolean;
                /**
                 * bottom gap area size
                 */
                size?: string;
                /**
                 * bottom gap area linestyle
                 */
                linestyle?: any;
                /**
                 * bottom gap area fillstyle
                 */
                fillstyle?: any;
            };
        };
        /**
         * annotations sizes section
         */
        annotationssizes?: AnnotatedWidget.AnnotationSize;
        /**
         * wellbore node options see {@link import("geotoolkit/schematics/scene/WellBoreNode").WellBoreNode.setProperties}
         */
        wellborenode?: any;
        /**
         * scale scroll strategy
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
        legend?: {
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
            linestyle?: any;
            /**
             * legend fill style
             */
            fillstyle?: any;
            /**
             * paddings for each side of an legend
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
                 * legend item symbol options see {@link import("geotoolkit/controls/shapes/SymbolLegendItem").SymbolLegendItem.setOptions}
                 */
                symbol?: any;
            };
        };
        /**
         * true for webgl rendering
         */
        webglrendering?: boolean;
        /**
         * deviation options
         */
        deviation?: {
            /**
             * 2d-transformer to use
             */
            transformer?: Transformer2d;
            /**
             * track width (pixels)
             */
            trackWidth?: number;
            /**
             * track offset (pixels)
             */
            offset?: number;
            /**
             * clipping flag
             */
            clip?: boolean;
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
        border?: any;
        /**
         * widget units
         */
        units?: {
            /**
             * 'x' (horizontal) widget unit
             */
            x?: string | AbstractUnit;
            /**
             * 'y' (vertical) widget unit
             */
            y?: string | AbstractUnit;
        };
        /**
         * deviated shape padding settings
         */
        padding?: number | {
            /**
             * top padding
             */
            top?: number;
            /**
             * top padding
             */
            bottom?: number;
            /**
             * right padding
             */
            right?: number;
            /**
             * left padding
             */
            left?: number;
        } | Function;
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
                /**
                 * crosshair cursor's horizontal line style
                 */
                horizontal?: any;
                /**
                 * crosshair cursor's vertical line style
                 */
                vertical?: any;
                /**
                 * JSON for center label. See setLabelSettings for more details
                 */
                center?: {
                    /**
                     * lock x position, can be useful if vertical cursor is hidden
                     */
                    lockx?: boolean;
                    /**
                     * text style of the text
                     */
                    textstyle?: any;
                    /**
                     * fill style of the text
                     */
                    fillstyle?: any;
                    /**
                     * line style of the text border
                     */
                    linestyle?: any;
                    /**
                     * visibility of the text
                     */
                    visible?: boolean;
                    /**
                     * alignment of the text
                     */
                    alignment?: AnchorType;
                    /**
                     * padding between the text and the border
                     */
                    padding?: number;
                    /**
                     * radius of the cross-hair center target
                     */
                    radius?: number;
                    /**
                     * strategy to convert x,y to text
                     */
                    textconverter?: Function;
                };
            };
            /**
             * rubber band zoom options
             */
            rubberbandzoom?: {
                /**
                 * mode rubber band zoom rendering mode
                 */
                mode?: RubberBandRenderMode;
            };
        };
    };
    /**
     * data object
     */
    type Data = {
        /**
         * WellBoreData instance or array of component data objects
         */
        elements: any;
        /**
         * trajectory
         */
        trajectory: Trajectory2d;
    };
    /**
     * options object
     */
    type OptionsOut = AnnotatedWidget.OptionsOut & {
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
            defaultLocation?: LocationType;
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
         * gap area options
         */
        gap?: {
            /**
             * left gap area options
             */
            left?: {
                /**
                 * left gap area visibility
                 */
                visible?: boolean;
                /**
                 * left gap area resizable flag
                 */
                resizable?: boolean;
                /**
                 * left gap area size
                 */
                size?: string;
                /**
                 * left gap area linestyle
                 */
                linestyle?: any;
                /**
                 * left gap area fillstyle
                 */
                fillstyle?: any;
            };
            /**
             * right gap area options
             */
            right?: {
                /**
                 * right gap area visibility
                 */
                visible?: boolean;
                /**
                 * right gap area resizable flag
                 */
                resizable?: boolean;
                /**
                 * right gap area size
                 */
                size?: string;
                /**
                 * right gap area linestyle
                 */
                linestyle?: any;
                /**
                 * right gap area fillstyle
                 */
                fillstyle?: any;
            };
            /**
             * top gap area options
             */
            top?: {
                /**
                 * top gap area visibility
                 */
                visible?: boolean;
                /**
                 * top gap area resizable flag
                 */
                resizable?: boolean;
                /**
                 * top gap area size
                 */
                size?: string;
                /**
                 * top gap area linestyle
                 */
                linestyle?: any;
                /**
                 * top gap area fillstyle
                 */
                fillstyle?: any;
            };
            /**
             * bottom gap area options
             */
            bottom?: {
                /**
                 * bottom gap area visibility
                 */
                visible?: boolean;
                /**
                 * bottom gap area resizable flag
                 */
                resizable?: boolean;
                /**
                 * bottom gap area size
                 */
                size?: string;
                /**
                 * bottom gap area linestyle
                 */
                linestyle?: any;
                /**
                 * bottom gap area fillstyle
                 */
                fillstyle?: any;
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
                textstyle?: any;
            };
        };
        /**
         * southwest options
         */
        southwest?: {
            /**
             * title options
             */
            title?: {
                /**
                 * title textstyle
                 */
                textstyle?: any;
            };
        };
        /**
         * wellbore node options see {@link import("geotoolkit/schematics/scene/WellBoreNode").WellBoreNode.setProperties}
         */
        wellborenode?: any;
        /**
         * scale scroll strategy
         */
        scalescrollstrategy?: ScaleScrollStrategy;
        /**
         * legend alignment area.<br>
         */
        legendalignmentarea?: AnnotationLocation;
        /**
         * legend options
         */
        legend?: {
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
            linestyle?: any;
            /**
             * legend fill style
             */
            fillstyle?: any;
            /**
             * paddings for each side of an legend
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
                 * legend item symbol options see {@link import("geotoolkit/controls/shapes/SymbolLegendItem").SymbolLegendItem.setOptions}
                 */
                symbol?: any;
            };
        };
        /**
         * true for webgl rendering
         */
        webglrendering?: boolean;
        /**
         * deviation options
         */
        deviation?: {
            /**
             * 2d-transformer to use
             */
            transformer?: Transformer2d;
            /**
             * track width (pixels)
             */
            trackWidth?: number;
            /**
             * track offset (pixels)
             */
            offset?: number;
            /**
             * clipping flag
             */
            clip?: boolean;
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
         * widget units
         */
        units?: {
            /**
             * 'x' (horizontal) widget unit
             */
            x?: string | AbstractUnit;
            /**
             * 'y' (vertical) widget unit
             */
            y?: string | AbstractUnit;
        };
        /**
         * deviated shape padding settings
         */
        padding?: number | {
            /**
             * top padding
             */
            top?: number;
            /**
             * top padding
             */
            bottom?: number;
            /**
             * right padding
             */
            right?: number;
            /**
             * left padding
             */
            left?: number;
        } | Function;
    };
    /**
     * deviation options
     */
    type DeviationOptions = {
        /**
         * trajectory
         */
        trajectory: Trajectory2d;
        /**
         * transformer
         */
        transformer?: Transformer2d;
        /**
         * track width
         */
        trackWidth?: number;
        /**
         * offset
         */
        offset?: number;
        /**
         * clipping
         */
        clip?: boolean;
        /**
         * webgl rendering
         */
        webglrendering?: boolean;
    };
}
