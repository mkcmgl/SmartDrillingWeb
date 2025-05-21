/**
 * @module geotoolkit3d/tool/MeshNormalsHelper
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { BufferAttribute, BufferGeometry, InterleavedBufferAttribute } from 'three';
/**
 * Generate line segments that represent the geometry's normals, for debug purposes.
 * Please note that scaling the geometry or the scene along any axis might stretch the lines and not represent the normals as intended.
 */
export declare class MeshNormalsHelper extends Object3D {
    constructor(options: MeshNormalsHelper.Options);
    /**
     * Generate lines representing the average normal vector of each triangle, based on the average between the 3 normals of each triangle vertex normal attribute.
     * @param indexBuffer the buffer holding the indices.
     * @param vertexBuffer the buffer holding the vertex xyz coordinates.
     * @param normalBuffer the buffer holding the normals.
     * @param length the length of the lines to generate.
     * @returns the pairs of xyz points coordinates, each pair form a line segment.
     */
    static createLinesFromSmoothshadingNormals(indexBuffer: BufferAttribute, vertexBuffer: BufferAttribute | InterleavedBufferAttribute, normalBuffer: BufferAttribute | InterleavedBufferAttribute, length: number): number[];
    /**
     * Generate lines representing the normal vector of each triangle, based on the triangle vertice coordinates.
     * Those lines represent accurately the flat shading direction of the normals.
     * @param indexBuffer the buffer holding the indices.
     * @param vertexBuffer the buffer holding the vertex xyz coordinates.
     * @param length the length of the lines to generate.
     * @returns the pairs of xyz points coordinates, each pair form a line segment.
     */
    static createLinesFromFlatshadingNormals(indexBuffer: BufferAttribute, vertexBuffer: BufferAttribute | InterleavedBufferAttribute, length: number): number[];
}
export declare namespace MeshNormalsHelper {
    /**
     * options for MeshNormalsHelper
     */
    type Options = {
        /**
         * the geometry to display the normals of.
         */
        geometry: BufferGeometry;
        /**
         * whether to display the averaged normals used for smooth shading for each triangle.
         */
        showsmoothnormals?: boolean;
        /**
         * the scale of the smooth shading normals.
         */
        smoothnormalsscale?: boolean;
        /**
         * the color of the smooth shading normals.
         */
        smoothnormalscolor?: boolean;
        /**
         * whether to display the averaged normals used for smooth shading for each triangle.
         */
        showflatnormals?: boolean;
        /**
         * the scale of the smooth shading normals.
         */
        flatnormalsscale?: boolean;
        /**
         * the color of the smooth shading normals.
         */
        flatnormalscolor?: boolean;
    };
}
