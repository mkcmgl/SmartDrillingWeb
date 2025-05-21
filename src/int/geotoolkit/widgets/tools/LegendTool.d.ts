import { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import { LegendToolEvents as Events } from '@int/geotoolkit/widgets/tools/LegendToolEvents';
import type { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { LegendToolEventArgs } from '@int/geotoolkit/widgets/tools/LegendToolEventArgs';
import type { Legend } from '@int/geotoolkit/controls/shapes/Legend';
/**
 * Tool to handle moving and resizing of legend around annotated widget
 * @example
 * import {LegendTool} from '@int/geotoolkit/widgets/tools/LegendTool';
 * const legendTool = new LegendTool({
 *      'widget': widget,
 *      'layer': manipulatorLayer,
 *      'group': legendShape
 * });
 * // Insert the tool to the head of tool's collection
 * widget.getTool().insert(0, legendTool);
 */
export declare class LegendTool extends CompositeTool {
    constructor(options: LegendTool.Options);
    on<E extends keyof LegendTool.EventMap>(type: E, callback: (eventType: E, sender: this, args: LegendTool.EventMap[E]) => void): this;
    off<E extends keyof LegendTool.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: LegendTool.EventMap[E]) => void): this;
    notify<E extends keyof LegendTool.EventMap>(type: E, source: LegendTool, args?: LegendTool.EventMap[E]): this;
    /**
     * Set LegendTool options
     * @param options LegendTool options
     * @returns this
     */
    setOptions(options: LegendTool.Options): this;
    /**
     * Get LegendTool options
     * @returns LegendTool options
     */
    getOptions(): LegendTool.Options;
    /**
     * Update adapter handles
     * @returns this
     */
    updateHandles(): this;
    /**
     * Reset annotation size to original
     * @returns this
     */
    resetAnnotationSize(): this;
}
export declare namespace LegendTool {
    /**
     * LegendTool options
     */
    type Options = CompositeTool.Options & {
        /**
         * widget
         */
        widget?: AnnotatedWidget;
        /**
         * Collection of legends or shape.
         */
        group: Group | Legend;
        /**
         * Manipulator layer for holding shapes.
         */
        layer?: Group;
        /**
         * padding around the legends.
         */
        padding?: number;
        /**
         * Background fill style when LegendTool is inactive
         */
        inactivefillstyle?: FillStyle.Type;
        /**
         * Background fill style when LegendTool is active
         */
        activefillstyle?: FillStyle.Type;
        /**
         * handle style
         */
        handlestyle?: {
            /**
             * handle fill style
             */
            activefillstyle?: FillStyle.Type;
            /**
             * handle fill style
             */
            inactivefillstyle?: FillStyle.Type;
            /**
             * handle connection style when active
             */
            activelinestyle?: LineStyle.Type;
            /**
             * handle connection style when inactive
             */
            inactivelinestyle?: LineStyle.Type;
        };
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onAnnotationChanged]: LegendToolEventArgs;
        [Events.onMoveStart]: LegendToolEventArgs;
        [Events.onMoveEnd]: LegendToolEventArgs;
        [Events.onResize]: LegendToolEventArgs;
    };
}
