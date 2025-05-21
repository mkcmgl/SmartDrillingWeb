/**
 * @module geotoolkit/controls/tools/EventArgs
 */
import { BaseEventArgs } from '@int/geotoolkit/controls/tools/BaseEventArgs';
import { Point } from '@int/geotoolkit/util/Point';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Plot } from '@int/geotoolkit/plot/Plot';
/**
 * Native event wrapper class.
 */
export declare class EventArgs extends BaseEventArgs {
    /**
     * @param eventName name of the event
     * @param nativeEventArgs arguments of the DOM event
     * @param [plotPoint] position of the mouse inside the plot
     * @param [node] owner of the event
     * @param [plot] plot which renders nodes
     */
    constructor(eventName: string, nativeEventArgs?: Event, plotPoint?: Point, node?: Node, plot?: Plot);
    /**
     * Returns native event target
     */
    getEventTarget(): Node | EventTarget | null;
    /**
     * Returns point in plot coordinate
     */
    getPlotPoint(): Point | null;
    /**
     * Returns plot
     * @returns plot
     */
    getPlot(): Plot | null;
    /**
     * Returns node on the plot
     */
    getNode(): Node | null;
    /**
     * Returns original event args
     */
    getNativeEventArgs(): Event;
    /**
     * Cancels event processing
     * @param [preventDefault] prevent default system events
     * @param [stopPropagation] stop propagation to next listener
     * @returns this
     */
    stopPropagation(preventDefault?: boolean, stopPropagation?: boolean): this;
    /**
     * Returns whether event position is inside of plot
     */
    inPlot(): boolean;
    /**
     * Returns point in css coordinates
     */
    getCSSPoint(): Point;
}
