import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { ColorBar } from '@int/geotoolkit/controls/shapes/ColorBar';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Enum for symbol alignment
 * @enum
 * @readonly
 */
export declare enum SymbolAlignment {
    /**
     * Left
     */
    Left = "left",
    /**
     * Right
     */
    Right = "right",
    /**
     * Both
     */
    Both = "both"
}
/**
 * Add cursor to colorbar, which shows value from group
 * @throws error if ColorBar is not defined
 */
export declare class ColorBarCursorTool extends AbstractTool {
    constructor(options?: ColorBarCursorTool.Options);
    /**
     * set cursor offset across the colorbar
     * @param offset offset
     * @returns this
     */
    setOffset(offset: number): this;
    /**
     * set cursor position along the colorbar
     * @param value value
     * @returns this
     */
    setPosition(value: number): this;
    /**
     * update cursor position along the colorbar
     * @returns this
     */
    updatePosition(): this;
    /**
     * Sets new symbol
     * @param symbol new symbol
     * @returns this
     */
    setSymbol(symbol: SymbolShape): this;
}
export declare namespace ColorBarCursorTool {
    /**
     * tool options
     */
    export type Options = AbstractTool.Options & {
        /**
         * color bar
         */
        colorbar: ColorBar;
        /**
         * offset of cursor across color bar
         */
        offset?: number;
        /**
         * manipulator layer, by default parent of color bar
         */
        group?: CompositeNode;
        /**
         * option of orientation of cursor
         */
        symbolalignment?: SymbolAlignment;
        /**
         * symbol, by default black triangle
         */
        symbol?: SymbolShape;
        /**
         * symbol css class name
         */
        cssclass?: string;
        /**
         * callback to return current position in terms of value for colorbar
         */
        callback?: CursorCallback;
        /**
         * callback function to initialize tool
         */
        init?: InitCallback;
    };
    export type CursorCallback = (point: Point, event: Event, tool: ColorBarCursorTool) => number | null;
    type InitCallback = (tool?: ColorBarCursorTool) => void;
    export {};
}
