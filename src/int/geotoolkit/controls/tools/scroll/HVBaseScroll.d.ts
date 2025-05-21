/**
 * @module geotoolkit/controls/tools/scroll/HVBaseScroll
 */
import { AbstractScroll } from '@int/geotoolkit/controls/tools/scroll/AbstractScroll';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Range } from '@int/geotoolkit/util/Range';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
/**
 * Abstract base class for common Vertical and Horizontal scrollers
 */
export declare class HVBaseScroll extends AbstractScroll {
    constructor(options?: HVBaseScroll.Options);
    /**
     * specify scroll bar orientation
     * @param flip scroll bar orientation
     * @returns this
     */
    setFlip(flip: boolean): this;
    /**
     * set size of the scrollbar
     * @param size size of the scrollbar, size should not be even
     * @returns this
     */
    setSize(size: number): this;
    /**
     * Gets the scrolls Model Limits Range
     */
    getModelRange(): Range;
    /**
     * Gets the scroll visible Model Range
     */
    getVisibleModelRange(): Range;
    /**
     * specify current model limits
     * @param modelLimits model limits
     * @param [visibleLimits] visible model limits
     * @param [flipped] orientation flipped or not
     * @param [enableAnimation] show animation or not
     */
    setModelLimits(modelLimits: Rect, visibleLimits?: Rect, flipped?: boolean, enableAnimation?: boolean): this;
    protected onMouseMove(eventArgs: EventArgs): void;
    protected onMouseDown(eventArgs: EventArgs): void;
    protected onWindowMouseMove(evt: EventArgs): void;
    protected onMouseUp(eventArgs: EventArgs): void;
    protected onMouseWheel(eventArgs: EventArgs): void;
    /**
     * Gets all the properties pertaining to this object
     * @see {@link import("geotoolkit/controls/tools/scroll/HVBaseScroll").HVBaseScroll.setOptions} for parameters
     * @returns props properties.
     */
    getOptions(): HVBaseScroll.OptionsOut;
    /**
     * Set Options
     * @param [properties] properties
     */
    setOptions(properties?: HVBaseScroll.Options): this;
}
export declare namespace HVBaseScroll {
    type Options = AbstractScroll.Options & {
        isvertical?: boolean;
        /**
         * model limits
         */
        modellimits?: Rect;
        /**
         * visible model limits
         */
        visiblelimits?: Rect;
        /**
         * rounded borders
         */
        rounded?: boolean;
        /**
         * minimum size of the carriage
         */
        minimumcarretsize?: number;
        /**
         * minscrollbutton properties
         */
        minscrollbutton?: {
            /**
             * minscrollbutton visibility
             */
            visible?: boolean;
        };
        /**
         * maxscrollbutton properties
         */
        maxscrollbutton?: {
            /**
             * maxscrollbutton visibility
             */
            visible?: boolean;
        };
        /**
         * border line style
         */
        borderlinestyle?: LineStyle.Type;
        /**
         * fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * line style
         */
        linestyle?: LineStyle.Type;
        /**
         * caret line style
         */
        caretlinestyle?: LineStyle.Type;
        /**
         * caret fill style
         */
        caretfillstyle?: FillStyle.Type;
        /**
         * arrow line style
         */
        arrowlinestyle?: LineStyle.Type;
        /**
         * true for resizable
         */
        resizable?: boolean;
    };
    type OptionsOut = AbstractScroll.OptionsOut & {
        /**
         * rounded borders
         */
        rounded: boolean;
        /**
         * minimum size of the carriage
         */
        minimumcarretsize: number;
        /**
         * minscrollbutton properties
         */
        minscrollbutton?: {
            /**
             * minscrollbutton visibility
             */
            visible?: boolean;
        };
        /**
         * maxscrollbutton properties
         */
        maxscrollbutton?: {
            /**
             * maxscrollbutton visibility
             */
            visible?: boolean;
        };
        /**
         * border line style
         */
        borderlinestyle: LineStyle;
        /**
         * caret line style
         */
        caretlinestyle: LineStyle;
        /**
         * caret fill style
         */
        caretfillstyle: FillStyle;
        /**
         * arrow line style
         */
        arrowlinestyle: LineStyle;
        /**
         * true for resizable
         */
        resizable: boolean;
    };
}
