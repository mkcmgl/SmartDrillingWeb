/**
 * @module geotoolkit3d/scene/compass/CompassAxis
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { Color } from 'three';
/**
 * A compass made of 3 colored lines.<br>
 * <br>
 * <ul>
 *     <li> X axis: Red</li>
 *     <li> Y axis: Green</li>
 *     <li> Z axis: blue</li>
 * </ul>
 */
export declare class CompassAxis extends Object3D {
    /**
     * @param [options] The options
     */
    constructor(options?: CompassAxis.Options);
}
export declare namespace CompassAxis {
    /**
     * The options
     */
    type Options = {
        /**
         * Optional color for Z axis
         */
        zaxiscolor?: Color;
        /**
         * Optional color for Y axis
         */
        yaxiscolor?: Color;
        /**
         * Optional color for X axis
         */
        xaxiscolor?: Color;
    };
}
