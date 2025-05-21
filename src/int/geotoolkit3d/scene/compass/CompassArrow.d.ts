/**
 * @module geotoolkit3d/scene/compass/CompassArrow
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { Color, Vector3 } from 'three';
/**
 * A compass made of a red/green arrow pointing north.<br>
 */
export declare class CompassArrow extends Object3D {
    constructor(options?: CompassArrow.Options);
}
export declare namespace CompassArrow {
    /**
     * The options
     */
    type Options = {
        /**
         * The origin of the arrow in normalized coordinates
         */
        origin?: Vector3;
        /**
         * The direction of the arrow in normalized coordinates
         */
        direction?: Vector3;
        /**
         * Optional color for top of the compass arrow
         */
        topcolor?: Color;
        /**
         * Optional color for bottom of the compass arrow
         */
        bottomcolor?: Color;
        /**
         * Optional color for compass arrow outline
         */
        outlinecolor?: Color;
    };
}
