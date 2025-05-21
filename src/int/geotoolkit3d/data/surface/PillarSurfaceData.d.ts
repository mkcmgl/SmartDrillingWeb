import { AbstractSurfaceData } from '@int/geotoolkit3d/data/surface/AbstractSurfaceData';
import { Vector3 } from 'three';
/**
 * Surface data made of pillars that can be triangulated.<br>
 *
 * The triangulation algorithm will sort the given pillars by default, using a linear regression sorting.<br>
 * This sorting algorithm assumes that there is no overlapping/crossing between pillars.<br>
 * If only one pillar is provided, no surface will be visible/build. In this case, please consider using {@link @int/geotoolkit3d/scene/LineSegments~LineSegments} instead to represent single pillars.<br>
 * For more specialized pillars, the sorting can be disabled in the constructor options, to use the provided pillar order instead.<br>
 * Each pillar can have a different point count.
 * @throws {Error} if the Surface Data is not compliant and compromise the creation of the surface.
 */
export declare class PillarSurfaceData extends AbstractSurfaceData {
    constructor(options: PillarSurfaceData.Options);
    /**
     * Triangulate the given pillars into a surface mesh (made of a vertex and index arrays).
     * @param options options object
     */
    static triangulate(options: PillarSurfaceData.TriangulateOptions): PillarSurfaceData.TriangulatedPoints;
}
export declare namespace PillarSurfaceData {
    /**
     * The Fault Surface constructor options
     */
    type Options = AbstractSurfaceData.Options & TriangulateOptions & {
        /**
         * The data options
         */
        data: {
            /**
             * An array of fault pillars
             */
            pillars: PillarData[];
            /**
             * The X/Y/Z offset to apply to the entire fault surface.<br>
             * Use this to apply a coordinate offset if the pillar data comes with an anchor or offset position.
             */
            xyoffset?: Vector3;
        };
    };
    /**
     * The options related to pillar triangulation.
     */
    type TriangulateOptions = {
        /**
         * data object
         */
        data: {
            /**
             * An array of fault pillars
             * If only one pillar is provided, no surface will be visible/build. In this case, please consider using {@link @int/geotoolkit3d/scene/LineSegments~LineSegments} instead to represent single pillars.
             */
            pillars: PillarData[];
        };
        /**
         * Resample the given pillars to a fixed number of points each (Disabled by default).<br>
         * If null or 0 is provided, no resampling will occur.<br>
         * Otherwise, the provided number will define the number of points in each resampled pillar.
         */
        resamplingpointcount?: number;
        /**
         * If true, sort the pillars using the following algorithm (enabled by default):<br>
         * Sort the pillars based on each pillar's head X/Y coordinate using Linear regression sorting.<br>
         * First, each pillar head is gathered into a list, only considering the X and Y values.<br>
         * Then a linear equation is computed from these 2D points using linear regression.<br>
         * Finally, the pillars are sorted following the position of each point along the linear equation.<br>
         * This sorting technique is specific and might not be the adequate solution in each case.
         */
        autosortpillars?: boolean;
        /**
         * If true, automatically sort each pillar point. Enabled by default.
         */
        autosortpillarpoints?: boolean;
    };
    /**
     * The x/y/z coordinates which represent a pillar column
     */
    type PillarData = {
        x: number[];
        y: number[];
        z: number[];
    };
    type TriangulatedPoints = {
        /**
         * The triangulated points
         */
        triangles: {
            /**
             * The vertices positions in a contiguous arrray ( ie: [x0, y0, z0,  x1, y1, z1, ...] )
             */
            position: Float32Array;
            /**
             * The triangle indices used to assemble the vertices into triangles, each trio of indices define the points of a triangle.
             */
            index: Uint32Array | Uint16Array | Uint8Array;
        };
    };
}
