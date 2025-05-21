import { Rect } from '@int/geotoolkit/util/Rect';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { DeepMerge } from '@int/geotoolkit/base';
import { Events, ViewMode, WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { WellBoreWithLabels } from '@int/geotoolkit/schematics/scene/WellBoreWithLabels';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import type { LegendTool } from '@int/geotoolkit/widgets/tools/LegendTool';
import { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import { ISchematicsWidget } from '@int/geotoolkit/schematics/widgets/ISchematicsWidget';
import { RubberBand } from '@int/geotoolkit/controls/tools/RubberBand';
import { MultiDiameterSelectionMode } from '@int/geotoolkit/schematics/widgets/MultiDiameterSelectionMode';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import { ToolTipTool } from '@int/geotoolkit/controls/tools/ToolTipTool';
import type { LabelingStrategy } from '@int/geotoolkit/schematics/labeling/LabelingStrategy';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { ComponentNodeFactoryRegistry } from '@int/geotoolkit/schematics/factory/ComponentNodeFactoryRegistry';
import type { CompositeSchematicsWidget } from '@int/geotoolkit/schematics/widgets/CompositeSchematicsWidget';
import type { SymbolLabelShape } from '@int/geotoolkit/schematics/labeling/SymbolLabelShape';
/**
 * <p>
 * A L-shaped schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget~AnnotatedWidget} class
 * to work with {@link @int/geotoolkit/schematics/scene/LShapedWellBoreNode~LShapedWellBoreNode} as a data model with labeling capabilities
 * </p>
 * <p>
 * LShapedSchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
 * The main way to configure and customize the widget is to use its setOptions() function
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode~WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
 * </ul>
 * </p>
 *
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoading
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoaded
 */
export declare class LShapedSchematicsWidget extends AnnotatedWidget implements ISchematicsWidget {
    getToolByName<T extends keyof LShapedSchematicsWidget.Tools>(toolName: T): LShapedSchematicsWidget.Tools[T];
    constructor(options?: LShapedSchematicsWidget.Options);
    on<E extends keyof LShapedSchematicsWidget.EventMap>(type: E, callback: (eventType: E, sender: this, args: LShapedSchematicsWidget.EventMap[E]) => void): this;
    off<E extends keyof LShapedSchematicsWidget.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: LShapedSchematicsWidget.EventMap[E]) => void): this;
    notify<E extends keyof LShapedSchematicsWidget.EventMap>(type: E, source: LShapedSchematicsWidget, args?: LShapedSchematicsWidget.EventMap[E]): this;
    /**
     * Gets wellbore
     */
    getWellBoreWithLabels(): WellBoreWithLabels;
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
     * Gets well bore view mode
     * @returns viewMode
     */
    getViewMode(): ViewMode;
    /**
     * Sets well bore view mode
     * @param viewMode well bore view mode
     * @returns JSON-object
     */
    setViewMode(viewMode: ViewMode | WellBoreNode.ViewModeInfo): {
        modellimitsdepths: number[];
        boundsdepths: number[];
    };
    /**
     * Gets {@link @int/geotoolkit/schematics/data/WellBoreData~WellBoreData} data instance
     */
    getData(): WellBoreData;
    /**
     * Sets data
     * @param data wellbore data to set
     * @returns this
     */
    setData(data: WellBoreData | WellBoreData.Elements | WellBoreData.Elements[]): this;
    /**
     * Gets WellBoreWithLabels's model limits
     */
    getCenterModelLimits(): Rect | null;
    /**
     * Gets labeling strategy
     */
    getLabelingStrategy(): LabelingStrategy;
    /**
     * Sets labeling strategy
     * @param labelingStrategy labeling strategy
     */
    setLabelingStrategy(labelingStrategy: LabelingStrategy): this;
    /**
     * Updates layout(s)
     * @param [targets] not used (entire content gets layouted)
     */
    updateLayout(targets?: ILayoutable[]): this;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect | Rect.Options): this;
    /**
     * Gets widget options (see "setOptions" API for the options format)
     *
     * @returns widget options
     */
    getOptions(): LShapedSchematicsWidget.Options;
    /**
     * Sets properties
     *
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: LShapedSchematicsWidget.Options): this;
    /**
     * Returns properties
     *
     * @returns properties
     */
    getProperties(): LShapedSchematicsWidget.OptionsOut;
    /**
     * Sets options
     *
     * @param [options] options
     * @returns this
     */
    setOptions(options?: LShapedSchematicsWidget.OptionsBase): this;
    protected initializeTools(options?: AnnotatedWidget.Options & {
        tooltip?: {
            divelement?: HTMLDivElement;
            autoflip?: boolean;
        };
    }): this;
    /**
     * Resets well bore to its original state
     */
    fitToBounds(): this;
    /**
     * Translates model
     * @param dx dx
     * @param dy dy
     */
    translateModel(dx: number, dy: number): this;
    /**
     * Scales active ('horizontal' or 'vertical') group
     * @param scaleX scaleX
     * @param scaleY scaleY
     * @param [posX] posX
     * @param [posY] posY
     */
    scaleModel(scaleX: number, scaleY: number, posX?: number, posY?: number): this;
    setToolsOptions(options?: AnnotatedWidget.ToolsOptions & {
        rubberbandzoom?: {
            vertical?: RubberBand.Options;
            horizontal?: RubberBand.Options;
        };
    }): this;
}
export declare namespace LShapedSchematicsWidget {
    /**
     * options
     */
    type Options = AnnotatedWidget.Options & OptionsBase & {
        data?: WellBoreData | WellBoreData.Options | WellBoreData.Elements[];
        multidiameterselectionmode?: MultiDiameterSelectionMode;
    };
    /**
     * options
     */
    type OptionsBase = {
        /**
         * dev points labels parameters
         */
        labeldevpoints?: {
            /**
             * dev points visibility
             */
            visible?: boolean;
            /**
             * dev points labels text formatter
             */
            gettext?: (devPointType: string, devDepth: number) => string;
            /**
             * text padding
             */
            padding?: number;
            /**
             * dev points linestyle
             */
            linestyle?: LineStyle.Type;
            /**
             * dev points fillstyle
             */
            fillstyle?: FillStyle.Type;
            /**
             * dev points textstyle
             */
            textstyle?: TextStyle | TextStyle.Options;
        };
        /**
         * labeling options
         */
        labeling?: DeepMerge<WellBoreWithLabels.Options['labeling'], {
            labelshape?: SymbolLabelShape.Options;
            /**
             * method to retrieve component node info
             */
            labelinfoprovider?: (node: ComponentNode) => string;
        }>;
        /**
         * labeling strategy
         */
        labelingstrategy?: LabelingStrategy;
        /**
         * wellbore node options
         */
        wellborenode?: {
            /**
             * view mode
             */
            viewmode?: ViewMode;
            /**
             * track width
             */
            trackwidth?: number;
            /**
             * deviation depth value or object (if "null" then it's calculated based on the data)
             */
            deviationdepth?: number | {
                kop: number;
                eoc: number;
            };
            /**
             * accuracy (bigger number means smoother L-shape)
             */
            lshapeaccuracy?: number;
            renderinghints?: WellBoreNode.RenderingHints;
            registry?: ComponentNodeFactoryRegistry;
        };
        /**
         * skips options
         */
        skips?: {
            /**
             * skips visibility
             */
            visible?: boolean;
            /**
             * skips linestyle
             */
            linestyle?: LineStyle.Type;
            /**
             * skips thickness
             */
            thickness?: number;
        };
        /**
         * tooltip settings
         */
        tooltip?: {
            /**
             * get tooltip text function (default displays top-most component's toString info)
             */
            gettext?: (node: ComponentNode[]) => string;
            /**
             * HTML div container element or it will be created with className cg-tooltip-container
             */
            divelement?: HTMLElement;
            /**
             * true if need to flip the tooltip near the edge of the window to avoid cropped tooltip
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
        legend?: CompositeSchematicsWidget.Options['legend'];
        /**
         * gap size value or object
         */
        gap?: {
            /**
             * horizontal gap size value or object
             */
            horizontal?: {
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
            vertical?: {
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
    };
    /**
     * properties
     */
    type OptionsOut = AnnotatedWidget.OptionsOut & OptionsBase;
    type Tools = {
        'tooltip': ToolTipTool;
        'legendTool': LegendTool;
        'rubberband_horizontal': RubberBand;
        'rubberband_vertical': RubberBand;
    } & AnnotatedWidget.Tools;
    type EventMap = AnnotatedWidget.EventMap & {
        [Events.ComponentsLoading]: void;
        [Events.ComponentsLoaded]: void;
    };
}
