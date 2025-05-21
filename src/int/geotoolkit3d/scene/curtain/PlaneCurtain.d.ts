import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { CurtainVerticalMode } from '@int/geotoolkit3d/scene/curtain/CurtainVerticalMode';
import { IntersectionManager } from '@int/geotoolkit3d/util/intersection/IntersectionManager';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * The PlaneCurtain is an implementation of a 3D Curtain object made of Planes.
 * A Curtain is a vertical geometry defined by a serie of horizontal points coordinates.
 * These points define a path in the X and Y axes, and the vertical size of the curtain is then defined by the
 * user.<br>
 *
 * This implementation represent the curtain geometry using multiple geotoolkit3d/scene/plane/Plane
 * This enable powerfull features such as intersections between the curtain ond 3D objects (such as ReservoirGrids, Surfaces).<br>
 *
 * Because each Plane will handle its own canvas and texture for drawing intersections, it is highly recommended to
 * leave the decimation option enabled for performance reasons.<br>
 *
 * This object provide these additional features over handling your own Planes:<ul>
 * <li>Automatic and customizable Curtain path decimation</li>
 * <li>Plane creation and handling</li>
 * <li>Intersection handling (resizing Curtain if needed)</li>
 * <li>Curtain shading</li>
 * </ul>
 */
export declare class PlaneCurtain extends Object3D {
    constructor(options: PlaneCurtain.Options);
    setOptions(options?: PlaneCurtain.OptionsBase): this;
    getOptions(): PlaneCurtain.OptionsBaseOut;
    /**
     * Generate or update an intersection between this curtain and the provided mesh object.
     * Supported objects include ReservoirGrids and Surfaces.
     * @param object the mesh object to intersect.
     * @param options the options for the intersection.
     */
    generateIntersection(object: Object3D, options?: IntersectionManager.PlaneMeshIntersectionOptions): void;
    /**
     * Update an intersection property without recomputing the intersection coordinates.
     * @param object the mesh object to update the intersection of.
     * @param options the options for the intersection.
     */
    setIntersectionProperties(object: Object3D, options: IntersectionManager.PlaneMeshIntersectionOptions): void;
    /**
     * Remove the intersection between this curtain and the given object.
     * @param object the object to remove the intersection of.
     */
    removeIntersection(object: Object3D): void;
}
export declare namespace PlaneCurtain {
    export type Options = CommonOptions & {
        /**
         * The curtain path datas.
         */
        data: {
            /**
             * The X coordinates of the points in the curtain path.
             */
            x: number[] | Float32Array;
            /**
             * The Y coordinates of the points in the curtain path.
             */
            y: number[] | Float32Array;
        };
        /**
         * The options for curtain point path decimation.<br>
         * Decimation allow to reduce the number of points in order to generate less Planes, and improve performances and intersection quality.<br>
         * This decimation will linearly resample the points in the given path, to generate Planes of equal size.
         */
        decimation?: {
            /**
             * If decimation is enabled, true by default.<br>
             * If set to false, the curtain will generate (number of provided points - 1) Planes, and this can cause serious performance issues if the number of points is high.<br>
             * We recommend leaving decimation enabled when the curtain have more than 20 or 30 points. Decimation will have no effect if the count of provided points is < option.maxsegments.
             */
            enabled?: boolean;
            /**
             * The maximum number of segments in the resulting decimated path. One segment will account to one Plane.<br>
             * Can be set to 0 to ignore the limit (not advised for performances, and very small Planes can result in artifacts.).<br>
             * Default is 30.
             */
            maxsegments?: number;
        };
    };
    export type OptionsBase = Partial<CommonOptions> & Object3D.Options;
    export type OptionsBaseOut = Required<CommonOptions> & Required<Object3D.Options>;
    type CommonOptions = {
        /**
         * The lower limit ofthe Curtain on the Z axis. The effect will change based on the defined 'verticalmode'.
         */
        zmin: number;
        /**
         * The higher limit ofthe Curtain on the Z axis. The effect will change based on the defined 'verticalmode'.
         */
        zmax: number;
        /**
         * The behavior of the Curtain in regard to its vertical position/size.<br>
         * Default is CurtainVerticalMode.AdjustToIntersections.
         */
        verticalmode?: CurtainVerticalMode;
        /**
         * If the Curtain surface should receive shading. This allow to more easily see the details of the curtain path.
         * Default is true.
         */
        shading?: boolean;
        /**
         * The Curtain Plane background fillStyle. This can be either a string color, css color or a geotoolkit/attributes/FillStyle.<br>
         * Default is '#800000' (Dark red).
         */
        fillstyle?: FillStyle.Type;
        /**
         * The texture resolution used for the overlay intersection. Define the vertical resolution
         */
        resolution?: number;
    };
    export {};
}
