import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { Locale } from '@int/geotoolkit/util/Locale';
import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import { HorizontalAlignment } from '@int/geotoolkit/util/HorizontalAlignment';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Point } from '@int/geotoolkit/util/Point';
import { Group } from '@int/geotoolkit/scene/Group';
import { ColorBar } from '@int/geotoolkit/controls/shapes/ColorBar';
import type { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * enum of FloatingColorBar Events
 * @readonly
 * @enum
 * @events
 */
export declare enum Events {
    /**
     * onPositionChanged - fires when position of floating colorbar is changed
     */
    onPositionChanged = "onPositionChanged",
    /**
     * onVisibilityChanged - fires when visibility is toggled
     */
    onVisibilityChanged = "onVisibilityChanged",
    /**
     * onDropping - fires when colorbar is being dropped
     */
    onDropping = "onDropping",
    /**
     * onDropped - fires when colorbar has been dropped
     */
    onDropped = "onDropped"
}
/**
 * Tool to handle moving and resizing of floating colorbar around widget
 * @example
 * import {FloatingColorBarTool, Events as FloatingColorBarEvents} from '@int/geotoolkit/widgets/tools/FloatingColorBarTool';
 * const floatingColorBarTool = new FloatingColorBarTool({
 *      'widget': widget,
 *      'layer': manipulatorLayer,
 *      'group': legendShape
 * });
 * // Insert the tool to the head of tool's collection
 * widget.getTool().insert(0, floatingColorBarTool);
 *
 * attach listeners to events to add functionality conditional on moving floating colorbar
 * floatingColorbarTool.on(FloatingColorBarEvents.onPositionChanged,
 *    (evt, colorbar, eventArgs) => {
 *        // check
 * });
 */
export declare class FloatingColorBarTool extends AbstractTool {
    constructor(options: FloatingColorBarTool.Options);
    on<E extends keyof FloatingColorBarTool.EventMap>(type: E, callback: (eventType: E, sender: this, args: FloatingColorBarTool.EventMap[E]) => void): this;
    off<E extends keyof FloatingColorBarTool.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: FloatingColorBarTool.EventMap[E]) => void): this;
    notify<E extends keyof FloatingColorBarTool.EventMap>(type: E, source: FloatingColorBarTool, args?: FloatingColorBarTool.EventMap[E]): this;
    /**
     * Set options
     * @param options floating color bar options
     */
    setOptions(options: FloatingColorBarTool.OptionsBase): this;
    /**
     * @see {@link import("geotoolkit/widgets/tools/FloatingColorBarTool").FloatingColorBarTool.setOptions} for parameters
     * @returns props properties.
     */
    getOptions(): FloatingColorBarTool.OptionsBaseOut;
    /**
     * Hides floating colorbar
     */
    hideFloatingColorBar(): this;
    /**
     * Show floating point at specified position
     * @param [position] window position
     */
    showFloatingColorBar(position?: Point): this;
    /**
     * @param eventArgs
     */
    protected start(eventArgs: ProxyEventArgs): this;
}
export declare namespace FloatingColorBarTool {
    type Options = AbstractTool.Options & {
        /**
         * widget
         */
        widget: BaseWidget;
        /**
         * Collection of legends or shape.
         */
        group?: Group;
        /**
         * color bar to manipulate
         */
        colorbar?: ColorBar;
        /**
         * color bar orientation
         */
        orientation?: Orientation;
        /**
         * color bar alignment in vertical mode
         */
        alignment?: HorizontalAlignment;
        /**
         * border linestyle
         */
        linestyle?: LineStyle | string | LineStyle.Options;
        /**
         * border fillstyle
         */
        fillstyle?: FillStyle | string | FillStyle.Options;
        /**
         * labels textstyle
         */
        textstyle?: TextStyle | string | TextStyle.Options;
        /**
         * labels background fillstyle
         */
        textfillstyle?: FillStyle | string | FillStyle.Options;
        /**
         * size of the floating window
         */
        size?: Dimension | Dimension.Options;
        /**
         * position of the floating window
         */
        position?: Point | Point.Options;
        /**
         * border radius
         */
        radius?: number;
        /**
         * floating colorbar range
         */
        range?: {
            /**
             * floating colorbar range min value
             */
            min?: number;
            /**
             * floating colorbar range max value
             */
            max?: number;
        };
        /**
         * padding around the legends.
         */
        padding?: SpaceStyle | string | SpaceStyle.Options;
        /**
         * locale for number format
         */
        locale?: Locale;
        /**
         * number format for labels
         */
        labelformat?: NumberFormat;
    };
    /**
     * floating color bar options
     */
    type OptionsBase = Omit<Options, 'widget'> & {
        visible?: boolean;
        colorprovider?: ColorProvider;
        tickgenerator?: TickGenerator;
    };
    type OptionsBaseOut = {
        visible: boolean;
        layer: CompositeNode;
        orientation: Orientation;
        padding: SpaceStyle;
        size: Dimension;
        position: Point;
        linestyle: LineStyle;
        fillstyle: FillStyle;
        textstyle: TextStyle;
        textfillstyle: FillStyle;
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onPositionChanged]: ProxyEventArgs;
        [Events.onVisibilityChanged]: void;
        [Events.onDropping]: ProxyEventArgs;
        [Events.onDropped]: ProxyEventArgs;
    };
}
