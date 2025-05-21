/**
 * Class for triangulation of points using Delaunay algorithm.
 * (based on implementation by Mapbox https://github.com/mapbox/delaunator, released under the ISC License)
 */
export declare class DelaunayTriangulator {
    /**
     * Triangulate the given points using Delaunay algorithm.
     * @param vertices vertices
     * @param [is2d] 2d/3d, 3d by default
     * @returns triangles
     */
    static triangulate(vertices: number[], is2d?: boolean): number[];
    /**
     * Triangulate the given 3D points using Delaunay algorithm (2D triangulation), this version works best for non-ordered point sets (that do not follow a row or column order layout).
     * This triangulation will produce more accurate results if the given points form a convex shape (ideally) but if not, concave artifacts can be filtered with the filtergaps options.
     * Because this triangulation algorithm only takes into account X and Y coordinates, users may want to pre-filter the points, or filter the generated indexed triangles based on potentially invalid Z values to avoid 3D issues.
     * @param vertices3D 3D vertices.
     * @param options the triangulation options.
     * @returns triangle indices in the form [t0p0,t0p1,t0p2,   t1p0,t1p1,t1p2 ...etc]
     */
    static triangulateSurface(vertices3D: number[], options: DelaunayTriangulator.TriangulateSurface): number[];
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace DelaunayTriangulator {
    /**
     * the triangulation options.
     */
    type TriangulateSurface = {
        /**
         * optional. Whether to filter out triangles that forms in large gaps where there is no data.
         * This help when the points are in a concave hull shape, but a too low threshold can remove useful triangles. For unordered triangulation only.
         */
        enablefiltergaps?: boolean;
        /**
         * optional. The threshold for gap filtering.
         * A smaller threshold  will filter out smaller triangles, for example a value of 5 will filter out triangles that have edges 5 times longer (or more) than the average edge length in the surface.
         */
        filtergapsthreshold?: number;
    };
}
