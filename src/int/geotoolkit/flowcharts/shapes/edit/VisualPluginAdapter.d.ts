/**
 * @module geotoolkit/flowcharts/shapes/edit/VisualPluginAdapter
 */
import { ShapeAdapter } from '@int/geotoolkit/controls/editing/ShapeAdapter';
import type { Node } from '@int/geotoolkit/scene/Node';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * The class for visual plugins manipulation
 */
export declare class VisualPluginAdapter extends ShapeAdapter {
    constructor();
    /**
     * Sets shape
     * @param shapes current shape
     * @returns this
     */
    setShape(shapes: Node[] | Node): this;
    /**
     * Return shape bounds
     * @returns bounds
     */
    getShapeBounds(): Rect;
    /**
     * Active state is changed
     *
     * @param active active state or not
     */
    onActiveStateChanged(active: boolean): void;
    /**
     * OnInitialize
     *
     * @returns success true if initialized successfully
     */
    onInitialize(): boolean;
    /**
     * OnMove
     * @param x x coordinate
     * @param y y coordinate
     * @returns this
     */
    onMove(x: number, y: number): this;
    /**
     * Sets linestyle and fillstyle for the main handle (rectangle) and all the corner handles (squares)
     * @param [json] a object with style
     * @returns this
     */
    setStyle(json?: VisualPluginAdapter.StyleOptions): this;
    updateHandles(): this;
}
export declare namespace VisualPluginAdapter {
    /**
     * a object with style
     */
    type StyleOptions = {
        /**
         * object contains properties for main rectangle
         */
        main?: {
            /**
             * linestyle
             */
            linestyle?: LineStyle.Options | LineStyle;
            /**
             * fillstyle
             */
            fillstyle?: FillStyle.Options | FillStyle;
        };
        /**
         * object contains properties for all the corners and sides handles
         */
        corners?: {
            /**
             * linestyle
             */
            linestyle?: LineStyle.Options | LineStyle;
            /**
             * fillstyle
             */
            fillstyle?: FillStyle.Options | FillStyle;
        };
    };
}
