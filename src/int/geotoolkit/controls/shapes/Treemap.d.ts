import { RectangularShape } from '@int/geotoolkit/scene/shapes/RectangularShape';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Point } from '@int/geotoolkit/util/Point';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
/**
 * Enum for LayoutMode
 * @readonly
 * @enum
 */
export declare enum LayoutMode {
    /**
     * Squarify
     */
    Squarify = "Squarify",
    /**
     * HorizontalSliceAndDice
     */
    HorizontalSliceAndDice = "HorizontalSliceAndDice",
    /**
     * VerticalSliceAndDice
     */
    VerticalSliceAndDice = "VerticalSliceAndDice",
    /**
     * AlternateSliceAndDice
     */
    AlternateSliceAndDice = "AlternateSliceAndDice"
}
/**
 * Enum for NodeValueLocation
 * @readonly
 * @enum
 */
export declare enum NodeValueLocation {
    /**
     * on top of line
     */
    Top = "Top",
    /**
     * below the line
     */
    Below = "Below",
    /**
     * on left of the line
     */
    Left = "Left",
    /**
     * on right of the line
     */
    Right = "Right"
}
/**
 * Treemap Event's enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired after Data Changed
     */
    DataChanged = "onDataChanged"
}
/**
 * Treemap allows visualization of hierarchical data using nested rectangles.
 * Each branch of the tree is displayed as rectangle. Area of rectangle is proportional to specified dimension of data.
 * e.g. Array of datasets object provided to Treemap <b> must contain 'value' property </b>. It can be initialized following ways:
 * 1. datasets object containing value only:
 *    `const data = [{'value' : 6}, {'value': 4}, {'value': 1}, {'value': 3}];`
 * 2. datasets object can also have optional properties 'name': name of the node, 'color': color of the node, 'level': children of the node(datasets object)
 *    ```
 *    var data =
 *        [
 *          {'value': 6, 'name': 'A', 'level': [
 *              {'value': 6, 'color': 'orange', 'name': 'A1'},
 *              {'value': 6, 'color': 'orange', 'name': 'A2'},
 *              {'value': 4, 'color': 'orange', 'name': 'A3'},
 *              {'value': 3, 'color': 'orange', 'name': 'A4'}
 *          ]},
 *          {'value': 5, 'color': 'red', 'name': 'B'},
 *          {'value': 7, 'color': 'yellow', 'name': 'C'},
 *          {'value': 3, 'color': 'green', 'name': 'D'}
 *       ];
 *   ```
 */
export declare class Treemap extends RectangularShape {
    constructor(options?: Treemap.Options, data?: Treemap.Data);
    on<E extends keyof Treemap.EventMap>(type: E, callback: (eventType: E, sender: this, args: Treemap.EventMap[E]) => void): this;
    off<E extends keyof Treemap.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Treemap.EventMap[E]) => void): this;
    notify<E extends keyof Treemap.EventMap>(type: E, source: Treemap, args?: Treemap.EventMap[E]): this;
    /**
     * Sets properties
     * @param [properties] properties object
     * @returns this
     */
    setProperties(properties?: Treemap.Options): this;
    /**
     * Returns properties
     * @returns properties object
     */
    getProperties(): Treemap.OptionsOut;
    /**
     * Set Layout mode of Treemap
     * @param mode LayoutMode for the Treemap
     * @returns this
     */
    setLayoutMode(mode: LayoutMode): this;
    /**
     * Returns LayoutMode selection
     * @returns Layout mode selection
     */
    getLayoutMode(): LayoutMode | number;
    /**
     * Sets data to display
     * @param [data] data object
     * @returns this
     */
    setData(data?: Treemap.Data): this;
    /**
     * Get data on treemap
     */
    getData(): {
        mode: number | LayoutMode;
        datasets: Treemap.DataSets;
    };
    /**
     * Update Dataset
     * @param [datasets] Array of dataset
     */
    updateDataSets(datasets?: Treemap.DataSets): void;
    /**
     * set display options
     * @param [options] options object
     */
    setOptions(options?: Treemap.OptionsBase): this;
    /**
     * Returns options pertaining nodevalues.
     * @returns options see {@link import("geotoolkit/controls/shapes/Treemap").Treemap.setOptions}
     */
    getOptions(): {
        nodevalues: {
            visible: boolean;
            location: NodeValueLocation;
            textstyle: TextStyle;
        };
    };
    render(context: RenderingContext): void;
    /**
     * It will return array of id specified by name.
     * @param name name of node
     * @returns array of ids
     */
    lookUpForIdByName(name: string): number[];
    /**
     * Returns Array of Rectangles in which the pointer is including it's ancestors.
     * @param pt pt is the device coordinates received by mouse event
     * @returns Rect Array of Rect
     */
    hitTest(pt: Point): Treemap.Node[];
    /**
     * Display parent level or children level of id. If goToParent is set to true it will display it's parent level.
     * @param id id of node
     * @param [goToParent] Whether to display parent or children level
     */
    showLevel(id: number, goToParent?: boolean): void;
    /**
     * Display the parent level at specific distance
     * @example
     * treemap.showParentLevelAtDistance(0); // will stay to it's current level
     * treemap.showParentLevelAtDistance(1); // will go to it's parent
     * treemap.showParentLevelAtDistance(2); // will go to it's parent's parent and so on
     * @param distance distance From Current Level
     */
    showParentLevelAtDistance(distance: number): void;
}
export declare namespace Treemap {
    /**
     * options object
     */
    type Options = RectangularShape.Options & {
        /**
         * node values parameters
         */
        nodevalues?: {
            /**
             * node values visibility flags
             */
            visible?: boolean;
            /**
             * node values' label location
             */
            location?: NodeValueLocation;
            /**
             * node values' label text style
             */
            textstyle?: TextStyle.Type;
        };
    };
    type Data = {
        /**
         * Array of dataset
         */
        datasets?: DataSets;
        /**
         * LayoutMode for the Treemap
         */
        mode?: LayoutMode;
    };
    /**
     * properties object
     */
    type OptionsOut = RectangularShape.OptionsOut & {
        /**
         * node values parameters
         */
        nodevalues?: {
            /**
             * node values visibility flags
             */
            visible?: boolean;
            /**
             * node values' label location
             */
            location?: NodeValueLocation;
            /**
             * node values' label text style
             */
            textstyle?: TextStyle;
        };
    };
    /**
     * options object
     */
    type OptionsBase = {
        /**
         * node values parameters
         */
        nodevalues?: {
            /**
             * node values visibility flags
             */
            visible?: boolean;
            /**
             * node values' label location
             */
            location?: NodeValueLocation;
            /**
             * node values' label text style
             */
            textstyle?: TextStyle.Type;
        };
        /**
         * Treemap node linestyle
         */
        linestyle?: LineStyle.Type;
        /**
         * Treemap node fillstyle
         */
        fillstyle?: FillStyle.Type;
    };
    type Node = {
        x: number;
        y: number;
        width: number;
        height: number;
        color: string | RgbaColor;
        name: string;
        children: number;
        id: number;
        atlevel: number;
        parent: number;
        visible?: boolean;
        visibleborder?: boolean;
    };
    type DataSets = {
        name: string;
        value: number;
        color?: string | RgbaColor;
        level?: DataSets;
    }[];
    type EventMap = AbstractNode.EventMap & {
        [Events.DataChanged]: DataSets;
    };
}
