/**
 * @module geotoolkit3d/data/surface/TrimeshSurfaceData
 */
import { AbstractSurfaceData } from '@int/geotoolkit3d/data/surface/AbstractSurfaceData';
/**
 * A Surface data built using indexed triangles.<br>
 * Indexed triangles consist of a position buffer and an indices buffer:<ul>
 * <li>The position buffer represents the x, y, z positions of the vertices</li>
 * <li>The index buffer indicates the order in which these vertices should be assembled to form the surface's triangles.</li></ul>
 * @throws {Error} if the Surface Data is not compliant and compromise the creation of the surface.
 */
export declare class TrimeshSurfaceData extends AbstractSurfaceData {
    constructor(options: TrimeshSurfaceData.Options);
}
export declare namespace TrimeshSurfaceData {
    type Options = AbstractSurfaceData.Options & {
        data: {
            /**
             * The vertices positions values as x, y and z (elevation).<br>
             * It is recommended to use Float32Array for better memory efficiency.
             */
            xyz: AbstractSurfaceData.FloatType;
            /**
             * The indices buffer.<br>
             * Indicates in which order the vertices should be assembled to form the surface's triangles.<br>
             * It is recommended to use the smallest typed array type for better memory efficiency.<br>
             * As a convenience, the given array type will be automatically adjusted to the most efficient type possible.
             */
            indices: AbstractSurfaceData.UintType;
            /**
             * The value representing a non-value elevation
             */
            nullvalue?: number;
            /**
             * The values of each vertex, will be used along the defined ColorProvider.<br>
             * It is recommended to use Float32Array for better memory efficiency.
             */
            values?: AbstractSurfaceData.FloatType;
            /**
             * The computed normal vector of each vertex, can be used to define custom shading/lighting of the triangles.<br>
             * It is recommended to use Float32Array for better memory efficiency.
             */
            normal?: AbstractSurfaceData.FloatType;
        };
    };
}
