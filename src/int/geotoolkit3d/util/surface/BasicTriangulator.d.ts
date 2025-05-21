import { BufferAttribute, InterleavedBuffer, InterleavedBufferAttribute } from 'three';
/**
 * Basic implementation, triangulate the grid as a 'complete' plane using nullvalue to mark missing/null vertices.<br>
 * Shape implementation are responsible to check the z value to determine if the vertex should be rendered or not.
 */
export declare class BasicTriangulator {
    /**
     * Triangulate
     * @throws {Error} if grid has less than 3 rows or less than 2 columns
     * @param options options object
     * @returns result object
     */
    static triangulate(options: BasicTriangulator.Options): BasicTriangulator.ResultObject;
    /**
     * Compute the triangle normals.
     * This produces unweighted normals, normalize unweighted normals in glsl for better performance.
     * Copmpute the normal of each vertex's triangle, so that each vertex store the sum of the normals of all triangles it is part of.
     * This means that a vertex normal which is part of 6 triangles for example, will have the sum of those 6 triangle normal stored, which will be normalized later.
     * @param indexBuffer the buffer holding the indices.
     * @param vertexBuffer the buffer holding the vertex xyz coordinates.
     * @param normalBuffer the empty buffer that will hold the resulting normals.
     * @param nullvalue the z value that indicate an absence of value.
     */
    static createNormals(indexBuffer: BufferAttribute, vertexBuffer: BufferAttribute | InterleavedBufferAttribute, normalBuffer: BufferAttribute | InterleavedBufferAttribute, nullvalue?: number): void;
    /**
     * Filter triangle indices based on the triangle vertex values, in order to clean the geometry and lighten the load at render time.
     * If any of the vertices is not a valid number, or match de defined nullvalue, the triangle indices are not kept.
     * @param indexBuffer buffer that contains the indices to filter
     * @param vertexBuffer buffer that contain the xzy vertex data
     * @param nullvalue the z value that represent an absence of data.
     */
    static filterIndices(indexBuffer: BufferAttribute, vertexBuffer: BufferAttribute | InterleavedBufferAttribute, nullvalue: number): BufferAttribute;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace BasicTriangulator {
    /**
     * options object
     */
    type Options = {
        /**
         * data object
         */
        data: Data;
        /**
         * buffer padding
         * @deprecated since 4.0, Interleaved buffers are not beneficials, regular BufferAttribute are to be used instead (which don't require padding).
         */
        bufferpadding?: number;
        /**
         * interleaved
         * @deprecated since 4.0, Interleaved buffers are not beneficials, regular BufferAttribute are to be used instead.
         */
        interleaved?: boolean;
        /**
         * If true, surface data will be interpolated and smoothed
         */
        surfacesmooth?: boolean;
    };
    /**
     * result object
     */
    type ResultObject = {
        /**
         * triangles object
         */
        triangles: {
            /**
             * positions
             */
            position: InterleavedBufferAttribute | BufferAttribute;
            /**
             * normals
             */
            normal?: InterleavedBufferAttribute | BufferAttribute;
            /**
             * indices
             */
            index: BufferAttribute;
            /**
             * vertex count
             */
            vertexcount: number;
        };
        /**
         * minimum x
         */
        xmin: number;
        /**
         * minimum y
         */
        ymin: number;
        /**
         * minimum z
         */
        zmin: number;
        /**
         * maximum z
         */
        zmax: number;
        /**
         * buffer padding
         * @deprecated since 4.0, Interleaved buffers are not beneficials, regular BufferAttribute are to be used instead (which don't require padding).
         */
        bufferpadding: number;
        /**
         * number of components for data
         */
        bufferused: number;
        /**
         * interleaved buffer
         * @deprecated since 4.0, please use regular BufferAttribute instead (ResultObject.triangles.position/normal buffers).
         */
        buffer: InterleavedBuffer;
        /**
         * maximum x
         */
        xmax: number;
        /**
         * maximum y
         */
        ymax: number;
    };
    /**
     * data object
     */
    type Data = {
        /**
         * width of data
         */
        width?: number;
        /**
         * height of data
         */
        height?: number;
        /**
         * minimum x
         */
        xmin?: number;
        /**
         * step x
         */
        xstep?: number;
        /**
         * minimum y
         */
        ymin?: number;
        /**
         * step y
         */
        ystep?: number;
        /**
         * true for creating normals, default is false. Normals can be generated by the THREE.js geometry themselves, and is usually not necessary to compute here.
         */
        normals?: boolean;
        /**
         * elevation of data
         */
        elevation?: number[];
        /**
         * x coordinates of data
         */
        xvalues?: number[];
        /**
         * y coordinates of data
         */
        yvalues?: number[];
        /**
         * null value
         */
        nullvalue?: number;
    };
}
