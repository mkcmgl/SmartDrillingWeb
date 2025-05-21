/**
 * @module geotoolkit/widgets/tools/DataSheetSelection
 */
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { DataSheetSelectionEventArgs } from '@int/geotoolkit/widgets/tools/DataSheetSelectionEventArgs';
import type { DataSheet } from '@int/geotoolkit/widgets/datasheet/DataSheet';
/**
 * DataSheet selection events
 * @readonly
 * @enum
 */
export declare enum DataSheetSelectionEvents {
    /**
     * Event type fired when a header or column is clicked
     */
    HeaderClicked = "onHeaderClicked",
    /**
     * Event type fired when a index or row is clicked
     */
    IndexClicked = "onIndexClicked",
    /**
     * Event type fired when a cell is clicked
     */
    CellClicked = "onCellClicked",
    /**
     * onMove
     */
    onPointerMoved = "onPointerMoved"
}
/**
 * DataSheet selection tool
 * Selection tool specifically for DataSheet, supports selection of cells group and provide an event contains
 * first cell (top left) and last cell (bottom right) indicates position and size of selection box
 */
export declare class DataSheetSelection extends AbstractTool {
    constructor(dataSheet: DataSheet, options?: DataSheetSelection.Options);
    on<E extends keyof DataSheetSelection.EventMap>(type: E, callback: (eventType: E, sender: this, args: DataSheetSelection.EventMap[E]) => void): this;
    off<E extends keyof DataSheetSelection.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DataSheetSelection.EventMap[E]) => void): this;
    notify<E extends keyof DataSheetSelection.EventMap>(type: E, source: DataSheetSelection, args?: DataSheetSelection.EventMap[E]): this;
    getDataSheet(): DataSheet;
}
export declare namespace DataSheetSelection {
    /**
     * See {@link @int/geotoolkit/controls/tools/AbstractTool~AbstractTool} constructor
     */
    type Options = AbstractTool.Options & {
        /**
         * Selection rectangle options
         */
        selectionrect?: SelectionRect;
    };
    type SelectionRect = {
        /**
         * Selection box fill style for single cell selection
         */
        fillstyle?: FillStyle;
        /**
         * Selection box fill style for group of cells selection
         */
        groupfillstyle?: FillStyle;
        /**
         * Selection box border line style
         */
        linestyle?: LineStyle;
    };
    type EventMap = AbstractTool.EventMap & {
        [DataSheetSelectionEvents.HeaderClicked]: DataSheetSelectionEventArgs;
        [DataSheetSelectionEvents.IndexClicked]: DataSheetSelectionEventArgs;
        [DataSheetSelectionEvents.CellClicked]: DataSheetSelectionEventArgs;
        [DataSheetSelectionEvents.onPointerMoved]: DataSheetSelectionEventArgs;
    };
}
