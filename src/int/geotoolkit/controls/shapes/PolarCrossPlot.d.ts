import { CrossPlot } from '@int/geotoolkit/controls/shapes/CrossPlot';
import { Point } from '@int/geotoolkit/util/Point';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { PolarGrid } from '@int/geotoolkit/controls/shapes/PolarGrid';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
/**
 * Defines a crossplot shape in the polar coordinates. First a polar grid will need to be created and then CrossPlot shape can be added to the grid as shown in the example below.<br>
 * Sectors can be added to highlight the area and third dimension can be defined for each point in the cross plot. To display a tool tip while clicking a symbol on polar cross plot, refer to the Polar Plot section Polar Chart tutorial.
 * @example
 * const crossPlotShape = new PolarCrossPlot({
 *   'center': {x: 100, y: 100},
 *   'outerradius': 100,
 *   'data': {
 *      'radius': [0, 15, 50, 70],
 *      'angle': [0, 15, 25, 35]
 *   }
 * });
 */
export declare class PolarCrossPlot extends CrossPlot {
    constructor(options?: PolarCrossPlot.Options);
    /**
     * Sets data
     * @param options options
     * @returns this
     */
    setData(options: PolarCrossPlot.DataOptions): this;
    /**
     * Returns associated polar grid
     * @returns polar grid
     */
    getPolarGrid(): PolarGrid;
    /**
     * Converting a point from polar to Cartesian coordinates, where x and y are offsets from the polar grid center
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
     * @returns properties
     */
    getProperties(): PolarCrossPlot.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: PolarCrossPlot.Options): this;
}
export declare namespace PolarCrossPlot {
    type Options = Shape.Options & DataOptions & {
        options?: DataOptions;
    };
    /**
     * options
     */
    type DataOptions = CrossPlot.Options & {
        /**
         * a center of the polar chart
         */
        center?: Point | {
            x: number;
            y: number;
        };
        /**
         * a radius of the polar chart
         */
        outerradius?: number;
        /**
         * a radius of the polar chart in the model coordinates
         */
        modelradius?: number;
        /**
         * a start angle to be used for 0 angle (by default it is E direction)
         */
        startangle?: number;
        /**
         * a painter
         */
        painter?: SymbolShape.Painter;
        /**
         * grid to get initialization parameters. If grid is specified other
         * parameters are ignored
         */
        polargrid?: PolarGrid;
        /**
         * a data in polar coordinates
         */
        data?: {
            /**
             * an array of radius
             */
            radius?: number[];
            /**
             * an array of angles in grad
             */
            angle?: number[];
            /**
             * an array of numbers to be used for third dimension
             */
            variable?: number[];
        };
    };
    /**
     * properties
     */
    type OptionsOut = Shape.OptionsOut & {
        /**
         * a center of the polar chart
         */
        center?: Point;
        /**
         * a radius of the polar chart
         */
        outerradius?: number;
        /**
         * a radius of the polar chart in the model coordinates
         */
        modelradius?: number;
        /**
         * a start angle to be used for 0 angle (by default it is E direction)
         */
        startangle?: number;
    };
}
