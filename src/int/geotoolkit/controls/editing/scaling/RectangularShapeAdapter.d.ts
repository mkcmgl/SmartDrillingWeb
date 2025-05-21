/**
 * @module geotoolkit/controls/editing/scaling/RectangularShapeAdapter
 */
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { ShapeAdapter } from '@int/geotoolkit/controls/editing/ShapeAdapter';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { BoxHandle } from '@int/geotoolkit/controls/editing/BoxHandle';
import { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Rectangle } from '@int/geotoolkit/scene/shapes/Rectangle';
/**
 * Defines adapter to scale and move rectangular shape
 */
export declare class RectangularShapeAdapter<T extends AbstractNode & {
    getBounds: () => Rect | null;
} = Rectangle> extends ShapeAdapter<T> {
    constructor(options?: RectangularShapeAdapter.Options);
    /**
     * Set display options
     * @param [options] options
     * @returns this
     */
    setOptions(options?: RectangularShapeAdapter.Options): this;
    /**
     * Get display options
     * @returns options
     */
    getOptions(): RectangularShapeAdapter.OptionsBase;
    /**
     * Sets shape
     * @param shape current shape
     */
    setShape(shape: T): this;
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
     * Return box handle
     */
    getHandle(): BoxHandle;
    /**
     * OnInitialize
     *
     * @returns success true if initialized successfully
     */
    onInitialize(): boolean;
    protected onMove(x: number, y: number): this;
    /**
     * Sets linestyle and fillstyle for the main handle (rectangle) and all the corner handles (squares)
     *
     * @param [json] json object for new style
     * @returns this
     */
    setStyle(json?: RectangularShapeAdapter.Style): this;
    updateHandles(): this;
}
export declare namespace RectangularShapeAdapter {
    /**
     * options
     */
    type Options = {
        /**
         * options for box
         */
        box?: Partial<OptionsBase['box']>;
        /**
         * handlers positions
         */
        handlers?: AnchorType[];
        /**
         * handle style
         */
        handlestyle?: Partial<OptionsBase['handlestyle']>;
    };
    /**
     * options
     */
    type OptionsBase = {
        /**
         * options for box
         */
        box: {
            /**
             * options for active box fill style
             */
            activefillstyle: FillStyle.Type;
            /**
             * options for inactive box fill style
             */
            inactivefillstyle: FillStyle.Type;
        };
        /**
         * handlers positions
         */
        handlers: AnchorType[];
        /**
         * handle style
         */
        handlestyle: {
            /**
             * handle fill style
             */
            activefillstyle: FillStyle.Type;
            /**
             * handle fill style
             */
            inactivefillstyle: FillStyle.Type;
            /**
             * handle connection style when active
             */
            activelinestyle: LineStyle.Type;
            /**
             * handle connection style when inactive
             */
            inactivelinestyle: LineStyle.Type;
        };
    };
    /**
     * json object for new style
     */
    type Style = {
        /**
         * object contains properties for main rectangle
         */
        main?: {
            /**
             * linestyle
             */
            linestyle?: LineStyle.Type;
            /**
             * fillstyle
             */
            fillstyle?: FillStyle.Type;
        };
        /**
         * object contains properties for all the corners and sides handles
         */
        corners?: {
            /**
             * linestyle
             */
            linestyle?: LineStyle.Type;
            /**
             * fillstyle
             */
            fillstyle?: FillStyle.Type;
        };
    };
}
