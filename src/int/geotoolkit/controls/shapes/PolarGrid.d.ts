/**
 * @module geotoolkit/controls/shapes/PolarGrid
 */
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Point } from '@int/geotoolkit/util/Point';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { Merge } from '@int/geotoolkit/base';
import { RectangularShape } from '@int/geotoolkit/scene/shapes/RectangularShape';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Defines a basic polar grid. This class is a base class for rendering polar grid. Polar grid is a base class for all diagrams in polar coordinates.<br>
 * Three parameters should be passed to polar visual to make it work properly:<br>
 * 1) Center of the diagram(in model coordinates)<br>
 * 2) Radius of the grid(in model coordinates)<br>
 * 3) Angle increment to draw sectors <br>
 * The grid in the polar chart can be customized very easily, please refer to the gridlines properties in the constructor below.<br>
 * Sectors can be added to highlight areas in the grid as shown in the example
 * @example
 *         polarGrid.setSectors([{
 *           'start': 0,
 *           'end': 45,
 *           'color': 'orange'
 *       }]);
 */
export declare class PolarGrid extends RectangularShape {
    constructor(options?: PolarGrid.Options);
    /**
     * Sets an array of sectors
     * @param sectors
     * @returns this
     */
    setSectors(sectors: PolarGrid.Sector[]): this;
    /**
     * Gets an array of sectors
     * @returns sectors
     */
    getSectors(): PolarGrid.Sector[];
    /**
     * Set options
     * @param options object containing grid options
     * @param [refresh] invalidate graph
     * @returns this
     */
    setOptions(options: PolarGrid.OptionsBase, refresh?: boolean): this;
    /**
     * Return option to be used to draw a grid
     */
    getOptions(): PolarGrid.OptionsBaseOut;
    /**
     * Convert model radius to outer radius
     * @param value value of the outer radius
     */
    modelToOuterRadius(value: number): number;
    render(context: RenderingContext): void;
    /**
     * Convert point from polar to cartesian coordinate system. the center is int e
     * @param r radius
     * @param theta angle in grad
     */
    polarToCartesian(r: number, theta: number): Point;
    /**
     * Convert point from polar to cartesian coordinate system
     * @param x x coordinate (offset from center point)
     * @param y coordinate (offset from center point)
     */
    cartesianToPolar(x: number, y: number): Point;
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing grid properties
     */
    getProperties(): PolarGrid.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties object containing grid properties
     * @returns this
     */
    setProperties(properties?: PolarGrid.Options): this;
}
export declare namespace PolarGrid {
    type Options = RectangularShape.Options & OptionsBase & {
        options?: OptionsBase;
    };
    type GridLines = {
        /**
         * define options of radius gridlines
         */
        radius?: {
            /**
             * line style
             */
            linestyle?: LineStyle.Type;
            /**
             * step by radius in model coordinates
             */
            step?: number;
            /**
             * optional positions of lines. In this case step ignored. values are in raduses
             */
            values?: number[];
            /**
             * visibility of radius grid
             */
            visible?: boolean;
            /**
             * define a color to highlight grid
             */
            highlighted?: FillStyle.Type;
        };
        /**
         * define options of angles gridlines
         */
        angles?: {
            /**
             * visibility of angles grid
             */
            visible?: boolean;
            /**
             * visibility of angles labels
             */
            visiblelabels?: boolean;
            /**
             * line style
             */
            linestyle?: LineStyle.Type;
            /**
             * labels style
             */
            textstyle?: TextStyle.Type;
            /**
             * define optional labels instead of standard
             */
            labels?: {
                /**
                 * define optional array of angles
                 */
                values?: number[];
                /**
                 * define optional array of text labels
                 */
                text?: (string | number)[];
            };
            /**
             * labels drawn along outer circumference
             */
            labelsalongcircumference?: boolean;
            /**
             * radius offset for labels
             */
            labeloffset?: number;
        };
    };
    /**
     * object containing grid options
     */
    type OptionsBase = {
        /**
         * a center of the polar chart
         */
        center?: Point | {
            x: number;
            y: number;
        };
        /**
         * radius of the polar chart in the model coordinates
         */
        modelradius?: number;
        /**
         * a start angle to be used for 0 angle (by default it is E direction)
         */
        startangle?: number;
        /**
         * an increment angle of the grid
         */
        angle?: number;
        /**
         * a radius of the polar chart
         */
        outerradius?: number;
        /**
         * line style to specify style for outer circle
         */
        linestyle?: LineStyle.Type;
        /**
         * gridlines properties
         */
        gridlines?: GridLines;
    };
    type OptionsBaseOut = Merge<OptionsBase, {
        /**
         * a center of the polar chart
         */
        center: Point;
    }>;
    /**
     * object containing grid properties
     */
    type OptionsOut = RectangularShape.OptionsOut & OptionsBaseOut & {
        options: OptionsBaseOut;
    };
    /**
     * Grid sector info
     */
    type Sector = {
        start: number;
        end: number;
        length?: number;
        color: string;
    };
}
