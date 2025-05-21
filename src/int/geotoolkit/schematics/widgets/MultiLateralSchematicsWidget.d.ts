import { Events, ViewMode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { MultiLateralWellBoreNode, ScalesRatioMode } from '@int/geotoolkit/schematics/scene/MultiLateralWellBoreNode';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { ISchematicsWidget } from '@int/geotoolkit/schematics/widgets/ISchematicsWidget';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { LabelingStrategy } from '@int/geotoolkit/schematics/labeling/LabelingStrategy';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import type { WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
/**
 * <p>
 * A schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget~AnnotatedWidget} class
 * to work with {@link @int/geotoolkit/schematics/scene/MultiLateralWellBoreNode~MultiLateralWellBoreNode} as a data model
 * </p>
 * <p>
 * MultiLateralSchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
 * The main way to configure and customize the widget is to use its setOptions() function
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode~WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
 * </ul>
 * </p>
 *
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoading
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoaded
 * @example
 * import {MultiLateralSchematicsWidget} from '@int/geotoolkit/schematics/widgets/MultiLateralSchematicsWidget';
 * // Initialize the data
 * // ...
 * // Create the widget using the data
 * const widget = new MultiLateralSchematicsWidget({...});
 */
export declare class MultiLateralSchematicsWidget extends AnnotatedWidget implements ISchematicsWidget {
    constructor(options?: MultiLateralSchematicsWidget.Options);
    on<E extends keyof MultiLateralSchematicsWidget.EventMap>(type: E, callback: (eventType: E, sender: this, args: MultiLateralSchematicsWidget.EventMap[E]) => void): this;
    off<E extends keyof MultiLateralSchematicsWidget.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: MultiLateralSchematicsWidget.EventMap[E]) => void): this;
    notify<E extends keyof MultiLateralSchematicsWidget.EventMap>(type: E, source: MultiLateralSchematicsWidget, args?: MultiLateralSchematicsWidget.EventMap[E]): this;
    /**
     * Gets well bore view mode (returns {@link @int/geotoolkit/schematics/scene/WellBoreNode~ViewMode.Regular} always)
     * @returns viewMode
     */
    getViewMode(): ViewMode.Regular;
    /**
     * Empty implementation
     * @param viewMode well bore view mode
     * @returns "model limits to bounds" depths mapping
     */
    setViewMode(viewMode: ViewMode | WellBoreNode.ViewModeInfo): IViewModeBuilder.BuildOptions;
    /**
     * Gets WellBoreNode's model limits
     */
    getCenterModelLimits(): Rect | null;
    protected initializeTools(options?: MultiLateralSchematicsWidget.Options): this;
    /**
     * Sets data
     * @param data wellbore data to set
     */
    setData(data?: MultiLateralWellBoreNode.DataItem[]): this;
    /**
     * Gets widget options (see "setOptions" API for the options format)
     *
     * @returns widget options
     */
    getOptions(): MultiLateralSchematicsWidget.OptionsOut;
    /**
     * Sets options
     * @param options widget options see {@link import("geotoolkit/schematics/widgets/MultiLateralSchematicsWidget").MultiLateralSchematicsWidget.setProperties}
     * @returns this
     */
    setOptions(options: MultiLateralSchematicsWidget.Options): this;
    /**
     * Updates layout(s)
     * @param [targets] not used (entire content gets layouted)
     */
    updateLayout(targets?: ILayoutable[]): this;
    /**
     * Returns all the properties pertaining to this object
     *
     * @returns properties
     */
    getProperties(): MultiLateralSchematicsWidget.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: MultiLateralSchematicsWidget.Options): this;
    /**
     * Gets labeling strategy (the widget currently does not support labeling)<br>
     * Returns "null"
     */
    getLabelingStrategy(): LabelingStrategy;
    setModelLimits(limits: Rect): this;
}
export declare namespace MultiLateralSchematicsWidget {
    /**
     * all widget options
     */
    export type Options = AnnotatedWidget.Options & OwnOptions;
    /**
     * all widget properties
     */
    export type OptionsOut = AnnotatedWidget.OptionsOut & OwnOptions;
    type OwnOptions = {
        /**
         * gap size value or object
         */
        gap?: number | {
            /**
             * horizontal gap size value or object
             */
            [Orientation.Horizontal]?: number | {
                left?: number;
                right?: number;
            };
            /**
             * vertical gap size value or object
             */
            [Orientation.Vertical]?: number | {
                top?: number;
                bottom?: number;
            };
        };
        /**
         * wellbore node options see {@link import("geotoolkit/schematics/scene/WellBoreNode").WellBoreNode.setProperties}
         */
        wellborenode?: MultiLateralWellBoreNode.Options;
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
         * Y-to-X scales ratio mode
         */
        scalesratiomode?: ScalesRatioMode;
        /**
         * Y-to-X scales ratio used for scalesratiomode=ScalesRatioMode.Keep only
         */
        scalesratio?: number;
        /**
         * sea level option
         */
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
        /**
         * data
         */
        data?: MultiLateralWellBoreNode.DataItem[];
    };
    export type EventMap = AnnotatedWidget.EventMap & {
        [Events.ComponentsLoading]: void;
        [Events.ComponentsLoaded]: void;
    };
    export {};
}
