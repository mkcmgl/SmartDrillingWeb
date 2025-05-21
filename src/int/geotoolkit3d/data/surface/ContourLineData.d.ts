import { AbstractSurfaceData } from '@int/geotoolkit3d/data/surface/AbstractSurfaceData';
/**
 * A Surface data made of contour isolines that can be triangulated.
 * @throws {Error} if the Surface Data is not compliant and compromise the creation of the surface.
 */
export declare class ContourLineData extends AbstractSurfaceData {
    constructor(options: ContourLineData.Options);
}
export declare namespace ContourLineData {
    /**
     * The options
     */
    type Options = AbstractSurfaceData.Options & ContourLineData.TriangulateOptions;
    /**
     * options object
     */
    type TriangulateOptions = {
        /**
         * The data object used to triangulate and build the Contour surface.
         */
        data: {
            /**
             * An array of isolines.<br>
             * Each isoline represent a Z level.
             */
            lines: {
                /**
                 * The X positions of the points in the current isoline.
                 */
                x: number[];
                /**
                 * The Y positions of the points in the current isoline.
                 */
                y: number[];
                /**
                 * The elevation of the current isoline.<br>
                 * Since an isoline gather points of same-elevation, this z parameter is not an array, and represent the elevation of all points in this isoline.
                 */
                z: number;
            }[];
        };
        /**
         * Apply the given line depth (z) to the triangulated results. If set to false, depth is set to 0 instead.
         * Default is true.
         */
        applydepth?: boolean;
        /**
         * Defines a custom triangulator function.<br>
         * (optional, a default triangulator is used if not defined).<br>
         * The given vertices coordinates are in a [x1, y1, z1, x2, y2, z2...] fashion.<br>
         * The function returns an index array, where each trio of indices makes a triangle based on the given vertices.
         */
        triangulator?: (verticesXYZ: number[]) => number[];
    };
}
