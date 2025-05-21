/**
 * @module geotoolkit/welllog/widgets/tools/Navigation
 */
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Range } from '@int/geotoolkit/util/Range';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import { NavigationEventArgs } from '@int/geotoolkit/welllog/widgets/tools/NavigationEventArgs';
/**
 * Navigation events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * This events occurs when virtual depth model limit is changed. For example, if you call method setDepthLimits.
     */
    DepthRangeChanged = "depthRangeChanged",
    /**
     * This events occurs when navigation starts
     */
    NavigationStart = "navigationStart",
    /**
     * This events occurs when navigation ends
     */
    NavigationEnd = "navigationEnd"
}
/**
 * Creates default implementation of the Navigation tool
 * Tool name: 'navigation-tool'
 */
export declare class Navigation extends AbstractTool {
    /**
     * @param [options] layer for holding temporary shapes or tool options
     */
    constructor(options?: Navigation.Options | CompositeNode);
    on<E extends keyof Navigation.EventMap>(type: E, callback: (eventType: E, sender: this, args: Navigation.EventMap[E]) => void): this;
    off<E extends keyof Navigation.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Navigation.EventMap[E]) => void): this;
    notify<E extends keyof Navigation.EventMap>(type: E, source: Navigation, args?: Navigation.EventMap[E]): this;
    /**
     * returns visible depth limits
     * @returns depth range
     */
    getVisibleDepthLimits(): Range;
    /**
     * Set visible model limits
     * @param visibleDepthLimits visible depth limits
     * @returns this
     */
    setVisibleDepthLimits(visibleDepthLimits: Range): this;
    /**
     * set enable state
     * @param enabled sets the enabled state
     * @returns this
     */
    setEnabled(enabled: boolean): this;
    /**
     * Gets all the options pertaining to this object
     * @returns properties
     */
    getOptions(): Navigation.Options;
    /**
     * Sets options
     * @param [options] options
     */
    setOptions(options?: Navigation.Options): this;
    protected start(eventArgs?: ProxyEventArgs): this;
}
export declare namespace Navigation {
    /**
     * layer for holding temporary shapes or tool options
     */
    export type Options = AbstractTool.Options & {
        /**
         * range edit flag
         */
        rangeedit?: boolean;
        /**
         * background fill style
         */
        background?: FillStyle | FillStyle.Options | string;
        /**
         * scale options
         */
        scale?: {
            /**
             * enabled flag
             */
            enabled?: boolean;
            /**
             * scale handle line style
             */
            linestyle?: LineStyle | LineStyle.Options | string;
            /**
             * scale handle fill style
             */
            fillstyle?: FillStyle | FillStyle.Options | string;
            /**
             * a function with has parameters: symbol, box, context
             */
            painter?: SymbolShape.PainterFunction | string;
            /**
             * scale hover styles
             */
            hover?: Hover;
        };
        /**
         * panning options
         */
        panning?: {
            /**
             * enabled flag
             */
            enabled?: boolean;
            /**
             * minimum handle size in device pixels
             */
            minimumsize?: number;
            /**
             * panning handle line style
             */
            linestyle?: LineStyle | LineStyle.Options | string;
            /**
             * panning handle fill style
             */
            fillstyle?: FillStyle | FillStyle.Options | string;
        };
    };
    type Hover = {
        /**
         * scale hover line style
         */
        linestyle?: LineStyle | LineStyle.Options | string;
        /**
         * scale hover fill style
         */
        fillstyle?: FillStyle | FillStyle.Options | string;
    };
    export type EventMap = AbstractTool.EventMap & {
        [Events.DepthRangeChanged]: NavigationEventArgs;
        [Events.NavigationStart]: EventArgs;
        [Events.NavigationEnd]: EventArgs;
    };
    export {};
}
