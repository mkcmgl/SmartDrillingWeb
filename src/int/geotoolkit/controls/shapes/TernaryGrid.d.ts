import { RectangularShape } from '@int/geotoolkit/scene/shapes/RectangularShape';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Point } from '@int/geotoolkit/util/Point';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Defines a ternary grid and conversion from ternary coordinates to cartesian and vice versa.
 * It renders border, grid lines,
 * Ternary grid is required for all ternary diagrams.<br>
 * The grid in the ternary chart can be customized very easily, please refer to the gridlines properties in the constructor below.<br>
 */
export declare class TernaryGrid extends RectangularShape {
    constructor(options?: TernaryGrid.Options);
    /**
     * Convert ternary coordinates to cartesian coordinates. Any two of three should be provided.
     * @param [values] values in ternary coordinates
     * @returns cartesian coordinates
     */
    ternaryToCartesian(values?: TernaryGrid.ConvertValues): Point;
    /**
     * Convert cartesian coordinates to ternary coordinates.
     * @param [point] coordinates
     * @returns values in ternary coordinates
     */
    cartesianToTernary(point?: Point): TernaryGrid.ConvertValues;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing grid properties
     */
    getProperties(): TernaryGrid.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] new properties for this object
     * @returns this
     */
    setProperties(properties?: TernaryGrid.Options): this;
}
export declare namespace TernaryGrid {
    type OptionsBase = {
        textstyle?: TextStyle.Type;
        /**
         * size of ternary chart
         */
        size?: number;
        /**
         * a center of the ternary grid
         */
        center?: Point | {
            /**
             * x coordinate of the center
             */
            x: number;
            /**
             * y coordinate of the center
             */
            y: number;
        };
        /**
         * value limits for axes (by default from 0 to 100)
         */
        limits?: {
            /**
             * value limits for top corner value (by default from 0 to 100)
             */
            top?: {
                /**
                 * minimum value for top corner value
                 */
                min?: number;
                /**
                 * maximum value for top corner value
                 */
                max?: number;
            };
            /**
             * value limits for left corner value (by default from 0 to 100)
             */
            left?: {
                /**
                 * minimum value for left corner value
                 */
                min?: number;
                /**
                 * maximum value for left corner value
                 */
                max?: number;
            };
            /**
             * value limits for right corner value (by default from 0 to 100)
             */
            right?: {
                /**
                 * minimum value for right corner value
                 */
                min?: number;
                /**
                 * maximum value for right corner value
                 */
                max?: number;
            };
        };
        /**
         * gridlines properties
         */
        gridlines?: {
            /**
             * define options of top corner value gridlines
             */
            top?: {
                /**
                 * line style of top corner value gridlines
                 */
                linestyle?: LineStyle.Type;
                /**
                 * step of top corner value gridlines
                 */
                step?: number;
                /**
                 * visibility of top corner value grid
                 */
                visible?: boolean;
                /**
                 * define visibility of value labels next to top corner value grid lines
                 */
                visiblelabels?: boolean;
                /**
                 * value labels style for top corner value
                 */
                textstyle?: TextStyle.Type;
            };
            /**
             * define options of left corner value gridlines
             */
            left?: {
                /**
                 * line style of left corner value gridlines
                 */
                linestyle?: LineStyle.Type;
                /**
                 * step of left corner value gridlines
                 */
                step?: number;
                /**
                 * visibility of left corner value grid
                 */
                visible?: boolean;
                /**
                 * define visibility of value labels next to left corner value grid lines
                 */
                visiblelabels?: boolean;
                /**
                 * value labels style for left corner value
                 */
                textstyle?: TextStyle.Type;
            };
            /**
             * define options of right corner value gridlines
             */
            right?: {
                /**
                 * line style of right corner value gridlines
                 */
                linestyle?: LineStyle.Type;
                /**
                 * step of right corner value gridlines
                 */
                step?: number;
                /**
                 * visibility of right corner value grid
                 */
                visible?: boolean;
                /**
                 * define visibility of value labels next to right corner value grid lines
                 */
                visiblelabels?: boolean;
                /**
                 * value labels style for right corner value
                 */
                textstyle?: TextStyle.Type;
            };
        };
        /**
         * corner annotations properties
         */
        labels?: {
            /**
             * top corner annotation properties
             */
            top?: {
                /**
                 * text to be displayed at top corner
                 */
                text?: string;
                /**
                 * style for top corner annotations
                 */
                textstyle?: TextStyle.Type;
            };
            /**
             * left corner annotation properties
             */
            left?: {
                /**
                 * text to be displayed at left corner
                 */
                text?: string;
                /**
                 * style for left corner annotations
                 */
                textstyle?: TextStyle.Type;
            };
            /**
             * right corner annotation properties
             */
            right?: {
                /**
                 * text to be displayed at right corner
                 */
                text?: string;
                /**
                 * style for right corner annotations
                 */
                textstyle?: TextStyle.Type;
            };
        };
        /**
         * border properties
         */
        border?: {
            /**
             * visibility of border
             */
            visible?: boolean;
            /**
             * line style of border
             */
            linestyle?: LineStyle.Type;
        };
    };
    export type Options = RectangularShape.Options & OptionsBase & {
        options?: OptionsBase;
    };
    /**
     * values in ternary coordinates
     */
    export type ConvertValues = {
        /**
         * value of the top corner coordinate
         */
        top?: number;
        /**
         * value of the left corner coordinate
         */
        left?: number;
        /**
         * value of the right corner coordinate
         */
        right?: number;
    };
    /**
     * object containing grid properties
     */
    export type OptionsOut = RectangularShape.OptionsOut & Required<OptionsBase> & {
        options: OptionsBase;
    };
    export {};
}
