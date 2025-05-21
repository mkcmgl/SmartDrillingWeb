import { AbstractSurfaceData } from '@int/geotoolkit3d/data/surface/AbstractSurfaceData';
/**
 * A Surface data class created from raw vertices (non-indexed set of 3D points).<br>
 * This class triangulate the given vertices using Delaunay algorithms, to produce a valid Surface.
 * @throws {Error} if the Surface Data is not compliant and compromise the creation of the surface.
 */
export declare class SurfaceData extends AbstractSurfaceData {
    constructor(options: SurfaceData.Options);
}
export declare namespace SurfaceData {
    /**
     * The options
     */
    type Options = AbstractSurfaceData.Options & {
        /**
         * The data options
         */
        data: {
            /**
             * The X values to triangulate
             */
            x: number[];
            /**
             * The Y values to triangulate
             */
            y: number[];
            /**
             * The Z values to triangulate
             */
            z: number[];
            /**
             * The value representing a non-value elevation
             */
            nullvalue?: number;
            /**
             * optional Value array to instantiate
             */
            values?: number[];
        };
        /**
         * optional. options for triangulation of unordered surface points.
         */
        unorderedtriangulation?: {
            /**
             * optional. Try changing this value if experiencing artifacts on the rendered surface.
             * If true, use the default triangulation algorithm for non-ordered (random) point sets.
             * If false, use an alternative triangulation algorithm for already ordered point sets. The alternative triangulation is much slower, and works better for pointsets ordered in row/columns, in this case only will it produce more accurate results.
             */
            enable?: boolean;
            /**
             * optional. Whether to filter out triangles that forms in large gaps where there is no data.
             * This help when the points are in a concave hull shape, but a too low threshold can remove useful triangles. For non-ordered triangulation only.
             */
            enablefiltergaps?: boolean;
            /**
             * optional. The threshold for gap filtering.
             * A smaller threshold  will filter out smaller triangles, for example a value of 5 will filter out triangles that have edges 5 times longer (or more) than the average edge length in the surface.
             */
            filtergapsthreshold?: number;
        };
    };
}
