import { Orientation } from '@int/geotoolkit/util/Orientation';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { SplitterEventArgs } from '@int/geotoolkit/controls/tools/splitter/SplitterEventArgs';
import type { Group } from '@int/geotoolkit/scene/Group';
/**
 * Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * onPlotSizeChanged
     */
    onPlotSizeChanged = "onPlotSizeChanged",
    /**
     * beforePlotSizeChanged
     */
    beforePlotSizeChanged = "beforePlotSizeChanged",
    /**
     * onShow
     */
    onShow = "onShow"
}
/**
 * Creates default implementation of the splitter
 * Tool name: 'splitter'
 */
export declare class Splitter extends AbstractTool {
    /**
     * @param [options] layer for holding temporary shapes or tool options
     * @param [orientation] splitter orientation
     */
    constructor(options?: Splitter.Options | CompositeNode, orientation?: Orientation);
    on<E extends keyof Splitter.EventMap>(type: E, callback: (eventType: E, sender: this, args: Splitter.EventMap[E]) => void): this;
    off<E extends keyof Splitter.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Splitter.EventMap[E]) => void): this;
    notify<E extends keyof Splitter.EventMap>(type: E, source: Splitter, args?: Splitter.EventMap[E]): this;
    /**
     * Set the plots managed by the splitter in the correct order (order on screen)
     * @param plots group for which we want to change the size
     */
    setPlots(plots: Group[]): this;
    /**
     * Sets splitter linestyle
     * @param linestyle splitter linestyle
     */
    setLineStyle(linestyle: LineStyle.Type): void;
}
export declare namespace Splitter {
    /**
     * layer for holding temporary shapes or tool options
     */
    type Options = AbstractTool.Options & {
        /**
         * splitter orientation
         */
        orientation?: Orientation;
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onPlotSizeChanged]: SplitterEventArgs;
        [Events.beforePlotSizeChanged]: SplitterEventArgs;
        [Events.onShow]: SplitterEventArgs;
    };
}
