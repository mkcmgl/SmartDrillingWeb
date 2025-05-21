import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { CrossHairEventArgs } from '@int/geotoolkit/controls/tools/CrossHairEventArgs';
import type { MultiWellWidget } from '@int/geotoolkit/welllog/multiwell/MultiWellWidget';
/**
 * CorrelationCursor Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * onPositionChanged
     */
    onPositionChanged = "onPositionChanged",
    /**
     * onPointerUp
     */
    onPointerUp = "onPointerUp"
}
/**
 * Creates a CorrelationCursor tool. The tool supports events shown below. It provides built-in functions to customize the styles for the tool.
 */
export declare class CorrelationCursor extends AbstractTool {
    /**
     * @param [multiwell] object containing cursor options OR multi-well widget
     * @param [name] name of the tool
     */
    constructor(multiwell?: CorrelationCursor.Options | MultiWellWidget, name?: string);
    on<E extends keyof CorrelationCursor.EventMap>(type: E, callback: (eventType: E, sender: this, args: CorrelationCursor.EventMap[E]) => void): this;
    off<E extends keyof CorrelationCursor.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: CorrelationCursor.EventMap[E]) => void): this;
    notify<E extends keyof CorrelationCursor.EventMap>(type: E, source: CorrelationCursor, args?: CorrelationCursor.EventMap[E]): this;
    /**
     * Sets line style
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * return line style
     */
    getLineStyle(): LineStyle;
    /**
     * return visible state
     */
    isVisible(): boolean;
    /**
     * Sets visible
     * @param visible visible attribute set or not
     * @returns this
     */
    setVisible(visible: boolean): this;
    /**
     * The current well depth of the cursor
     */
    getDepth(): number;
    /**
     * Update position of cursor for the last mouse position. This code can be used
     * if content is scrolled to display the position of the cursor in the last mouse position
     * @returns this
     */
    updateCursorPosition(): this;
    /**
     * Place the cursor at the specified well depth
     * @param depth well depth
     * @param [silent] notification enabled or not
     */
    setDepth(depth: number, silent?: boolean): this;
    /**
     * Sets draw only existing depth mode
     * @param drawOnlyExistingDepth if true, draws only existing depth
     * @returns this
     */
    setDrawOnlyExistingDepth(drawOnlyExistingDepth: boolean): this;
    /**
     * Gets draw only existing depth mode
     * @returns draw only existing depth mode
     */
    getDrawOnlyExistingDepth(): boolean;
}
export declare namespace CorrelationCursor {
    /**
     * object containing cursor options OR multi-well widget
     */
    type Options = AbstractTool.Options & {
        /**
         * - multi-well widget
         */
        multiwell?: MultiWellWidget;
        /**
         * - cursor line style
         */
        linestyle?: LineStyle.Type;
        /**
         * if true, draws only existing depth
         */
        drawonlyexistingdepth?: boolean;
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onPositionChanged]: CrossHairEventArgs | null;
        [Events.onPointerUp]: CrossHairEventArgs;
    };
}
