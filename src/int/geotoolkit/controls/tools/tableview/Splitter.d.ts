/**
 * @module geotoolkit/controls/tools/tableview/Splitter
 */
import { Point } from '@int/geotoolkit/util/Point';
import { TableView } from '@int/geotoolkit/controls/shapes/tableview/TableView';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Plot } from '@int/geotoolkit/plot/Plot';
/**
 * Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * onResize
     */
    onResize = "onResize"
}
/**
 * SplitterMode
 * @enum
 * @readonly
 */
export declare enum SplitterMode {
    /**
     * Vertical
     */
    Vertical = "vertical",
    /**
     * Horizontal
     */
    Horizontal = "horizontal",
    /**
     * Horizontal
     */
    Both = "both"
}
/**
 * Defines Splitter tool for Table View shape
 *
 * Tool name: 'Splitter'
 */
export declare class Splitter extends AbstractTool {
    /**
     * @param [options] table view shape or tool options
     * @param [ignoreZeroSize] True to ignore any row height or column width less than 0, false otherwise
     */
    constructor(options?: Splitter.Options | TableView, ignoreZeroSize?: boolean);
    on<E extends keyof Splitter.EventMap>(type: E, callback: (eventType: E, sender: this, args: Splitter.EventMap[E]) => void): this;
    off<E extends keyof Splitter.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Splitter.EventMap[E]) => void): this;
    notify<E extends keyof Splitter.EventMap>(type: E, source: Splitter, args?: Splitter.EventMap[E]): this;
    /**
     * Returns splitter mode
     */
    getSplitterMode(): SplitterMode;
    /**
     * Set splitter mode
     * @param splitterMode splitter mode
     * @returns this
     */
    setSplitterMode(splitterMode: SplitterMode): this;
    /**
     * return splitter size
     */
    getSize(): number;
    /**
     * set splitter size
     * @param size splitter size
     */
    setSize(size: number): this;
    /**
     * Sets line style
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle | LineStyle.Options | string, merge?: boolean): this;
    /**
     * Return line style
     *
     * @returns lineStyle current line style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setFillStyle(fillStyle: FillStyle | FillStyle.Options | string, merge?: boolean): this;
    /**
     * Return fill style
     *
     * @returns fillStyle current fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Fires onHover events
     *
     * @param plot plot
     * @param position position
     */
    applyMouseMove(plot: Plot, position: Point): this;
    /**
     * Ignore zero column width or row height
     * @param ignoreZeroSize True to ignore zero column width and row height, false otherwise
     */
    setIgnoreZeroSize(ignoreZeroSize: boolean): this;
}
export declare namespace Splitter {
    /**
     * table view shape or tool options
     */
    type Options = AbstractTool.Options & {
        /**
         * table view shape
         */
        tableview?: TableView;
        /**
         * True to ignore any row height or column width less than 0, false otherwise
         */
        ignorezerosize?: boolean;
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onResize]: {
            column?: number;
            width?: {
                current: number;
                new: number;
            };
            row?: number;
            height?: {
                current: number;
                new: number;
            };
        };
    };
}
