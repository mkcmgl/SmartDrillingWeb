import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { TableView } from '@int/geotoolkit/widgets/TableView';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * onValueChanged
     */
    onValueChanged = "onValueChanged",
    /**
     * onActiveCellChanged
     */
    onActiveCellChanged = "onActiveCellChanged"
}
/**
 * Focus trigger type
 * @readonly
 * @enum
 */
export declare enum FocusTriggerType {
    /**
     * Double click to make text input area focused
     */
    DoubleClick = "doubleclick",
    /**
     * Single click to make text input area focused
     */
    SingleClick = "singleclick"
}
/**
 * InPlace Editor
 *
 * Double click to activate InPLace Editor.
 * EscapeKey to exit from editing mode (without submitting new value)
 * EnterKey (or CtrlKey + ArrowKey) to submit value and edit next cell
 * CtrlKey + EnterKey to submit value and exit from editing mode
 */
export declare class InPlaceEditor extends AbstractTool {
    constructor(tableViewWidget: TableView, options?: InPlaceEditor.Options);
    on<E extends keyof InPlaceEditor.EventMap>(type: E, callback: (eventType: E, sender: this, args: InPlaceEditor.EventMap[E]) => void): this;
    off<E extends keyof InPlaceEditor.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: InPlaceEditor.EventMap[E]) => void): this;
    notify<E extends keyof InPlaceEditor.EventMap>(type: E, source: InPlaceEditor, args?: InPlaceEditor.EventMap[E]): this;
    /**
     * Return active cell coords
     */
    getActiveCell(): InPlaceEditor.Coordinates | null;
    /**
     * set active cell
     * @param cell call coordinates
     * @param [highlight] True to highlight row and column the cell is at, False otherwise
     * @param [customCellBounds] Select a cell with custom bounds other than calculate from row and column size
     * @returns this
     */
    setActiveCell(cell: Partial<InPlaceEditor.Coordinates>, highlight?: boolean, customCellBounds?: Rect): this;
    /**
     * Get editor input
     */
    getEditorInput(): HTMLTextAreaElement;
}
export declare namespace InPlaceEditor {
    type Options = AbstractTool.Options & {
        /**
         * True to highlight both row and column at cell position, false to only highlight cell
         */
        highlight?: boolean;
        /**
         * True to automatically submit new value, can still use EscapeKey to dismiss, false otherwise
         */
        autosubmit?: boolean;
        /**
         * Type of click to make text input area focused
         */
        focustrigger?: FocusTriggerType;
        /**
         * CSS background color string for text input area
         */
        backgroundcolor?: string;
    };
    /**
     * cell coordinates
     */
    type Coordinates = {
        /**
         * row
         */
        row: number;
        /**
         * column
         */
        column: number;
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onValueChanged]: {
            cell: {
                row: number;
                column: number;
            };
            value: string;
        };
        [Events.onActiveCellChanged]: {
            cell: {
                row: number;
                column: number;
            };
            value: string;
        };
    };
}
