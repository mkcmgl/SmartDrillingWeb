import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { PanningEventArgs } from '@int/geotoolkit/controls/tools/PanningEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Group } from '@int/geotoolkit/scene/Group';
/**
 * Panning Events
 * @readonly
 * @enum
 * @events
 */
export declare enum Events {
    /**
     * This Event is fired when the Tool start Panning
     * @event module:geotoolkit/controls/tools/Panning~Events~onPanningStart
     * @param {import("geotoolkit/controls/tools/PanningEventArgs").PanningEventArgs} eventArgs
     */
    onPanningStart = "onPanningStart",
    /**
     * This Event is fired when the Tool is Panning
     * @event module:geotoolkit/controls/tools/Panning~Events~onPanning
     * @param {import("geotoolkit/controls/tools/PanningEventArgs").PanningEventArgs} eventArgs
     */
    onPanning = "onPanning",
    /**
     * This Event is fired when the Tool end Panning
     * @event module:geotoolkit/controls/tools/Panning~Events~onPanningEnd
     * @param {import("geotoolkit/controls/tools/PanningEventArgs").PanningEventArgs} eventArgs
     */
    onPanningEnd = "onPanningEnd",
    /**
     * This Event is fired on double click
     * @event module:geotoolkit/controls/tools/Panning~Events~onDoubleClick
     * @param {import("geotoolkit/controls/tools/PanningEventArgs").PanningEventArgs} eventArgs
     */
    onDoubleClick = "onDoubleClick"
}
/**
 * Defines a Panning tool for the target or object to pan. It supports various events shown below and has built-in functions to capture the panning direction and wheel ratios.<br>
 * User can use the default panning function or customize the function and add listeners.
 */
export declare class Panning extends AbstractTool {
    constructor(options?: Panning.Options);
    on<E extends keyof Panning.EventMap>(type: E, callback: (eventType: E, sender: this, args: Panning.EventMap[E]) => void): this;
    off<E extends keyof Panning.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Panning.EventMap[E]) => void): this;
    notify<E extends keyof Panning.EventMap>(type: E, source: Panning, args?: Panning.EventMap[E]): this;
    /**
     * returns Panning direction
     * @param eventArgs contains info of the event
     */
    getDirection(eventArgs: EventArgs): Panning.Direction;
    /**
     * Sets the target for panning
     * @param target the target for panning
     * @param [translateMethod] method that is responsible to translate the target
     * @returns this
     */
    setTarget(target: Group, translateMethod?: (dx: number, dy: number) => void): this;
    /**
     * returns acceptX
     * @returns acceptX
     */
    getAcceptX(): boolean;
    /**
     * set acceptX
     * @param acceptX true, if panning need to accept X in mouse wheel zooming
     * @returns this
     */
    setAcceptX(acceptX: boolean): this;
    /**
     * returns wheel ratio
     */
    getWheelRatio(): number;
    /**
     * set wheel ratio
     * @param ratio wheel ratio
     * @returns this
     */
    setWheelRatio(ratio: number): this;
    /**
     * Sets inertia coefficient for inertia effect while panning
     * WARNING: if you set positive inertia coefficient, some panning events'll be fired with null eventArgs
     * @param inertiaCoef inertia coefficient
     * @returns this
     */
    setInertia(inertiaCoef: number | boolean): this;
    /**
     * Stop panning inertia effect
     * @fires @int/geotoolkit/controls/tools/Panning~Events.onPanningEnd
     * @returns this
     */
    stopInertia(): this;
    /**
     * Enable window events for moving mouse, when pointer is not on canvas
     * @param enabled true, if window events enabled
     * @returns this
     */
    setWindowEventsEnabled(enabled: boolean): this;
    /**
     * Threshold to prevent panning.
     * If direction is under this value the panning will be ignore.
     * @param threshold Threshold value
     * @returns this
     */
    setPanningThreshold(threshold: number): this;
    /**
     * Get panning threshold
     * @returns Threshold
     */
    getPanningThreshold(): number;
}
export declare namespace Panning {
    /**
     * options for the tool
     */
    type Options = AbstractTool.Options & {
        /**
         * number that represent the number default
         */
        wheelratio?: number;
        acceptx?: boolean;
        /**
         * inertia coefficient for inertia effect
         */
        inertiacoef?: number | boolean;
        /**
         * Threshold to prevent panning. If user pointer movement is under this value the panning will be ignore.
         * WARNING: if you set positive inertia coefficient, some panning events'll be fired with null eventArgs
         */
        panningthreshold?: number;
    };
    type Direction = {
        x: number;
        y: number;
        start: {
            x: number;
            y: number;
        };
        end: {
            x: number;
            y: number;
        };
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onPanningStart]: PanningEventArgs;
        [Events.onPanning]: PanningEventArgs;
        [Events.onPanningEnd]: PanningEventArgs;
        [Events.onDoubleClick]: PanningEventArgs;
    };
}
