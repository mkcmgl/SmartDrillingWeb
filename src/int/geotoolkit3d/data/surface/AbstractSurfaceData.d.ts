import { BufferAttribute } from 'three';
/**
 * Parent class for surfaces data.<br>
 * <br>
 * Surface data is responsible of converting the user's raw data into triangles.<br>
 * Those triangles will be stored in {@link https://threejs.org/docs/index.html#api/en/core/BufferAttribute THREE.BufferAttribute} as vertices and indices.<br>
 * <br>
 * Inheriting classes should provide data for surface objects through the usage of protected setAttributes().<br>
 * @throws {Error} if the Surface Data is not compliant and compromise the creation of the surface.
 */
export declare abstract class AbstractSurfaceData {
    protected constructor(options?: AbstractSurfaceData.Options);
    /**
     * Returns the vertex/index attributes, and any other defined attributes of this surface as BufferAttribute.
     */
    getAttributes(): AbstractSurfaceData.AttributesOut;
    /**
     * Dispose this surface data to allow for garbage collection.
     */
    dispose(): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractSurfaceData {
    /**
     * The options to use to create the surface.
     */
    type Options = {
        /**
         * Interleaved buffers were initially used to improve performances, but they are counter productive on modern GPUs and are being phased out.
         * @deprecated since 4.0, starting now buffers will not be interleaved. This do not impact user's access to surface datas.<br>
         */
        interleaved?: boolean;
        /**
         * Resulting interleaved data should leave bufferpadding.
         * @deprecated since 4.0, buffers are no longer interleaved.
         */
        bufferpadding?: number;
    };
    type FloatType = number[] | Float32Array | Float64Array | BufferAttribute;
    type UintType = number[] | Uint8Array | Uint16Array | Uint32Array | BufferAttribute;
    /**
     * The attributes
     */
    type AttributesOut = {
        /**
         * The vertices buffer, holding the 3D positions of each vertex this surface is made of.<br>
         * To retrieve a specific triangle point, one must first look for the vertex index of the triangle, using the index bufferAttribute.<br>
         * Internal BufferAttribute.array is of type Float32Array.
         */
        position: BufferAttribute;
        /**
         * The indices buffer, used to index the rendering order of the vertices.<br>
         * Indexing vertices allow to save memory by only storing each vertex once in the position buffer, then we just need to index which vertex must be drawn for each consecutive triangle.<br>
         * Internal BufferAttribute.array is of type Uint8Array, Uint16Array or Uint32Array.
         */
        index: BufferAttribute;
        /**
         * The vertice computed normals, if available.<br>
         * It not present, they are usually computed before the first render by THREE.js.<br>
         * Normals are the unit vectors indicating each triangle's normal direction to their individual planes, and are responsible for the shading/lighting effects on the surface.<br>
         * Normal buffer is usually freed in CPU RAM to save memory after it has been loaded in GPU VRAM.<br>
         * Internal BufferAttribute.array is of type Float32Array.
         */
        normal?: BufferAttribute;
        /**
         * If this surface use interleaved rendering.
         * @deprecated since 4.0, regular BufferAttributes are now the default.
         * Will now always return false.
         */
        interleaved: boolean;
        /**
         * The colormap values, if available.<br>
         * Internal BufferAttribute.array is of type Float32Array.
         */
        values?: BufferAttribute;
        /**
         * The nullvalue, a specific value number to ignore in rendering/coloring the surface. Null if not defined.
         */
        nullvalue: number | null;
        /**
         * The x minimum in local coordinates.<br>
         * Please see {@link @int/geotoolkit3d/util/Helper~Helper.localToBusiness},
         * or {@link https://threejs.org/docs/#api/en/core/Object3D.localToWorld}, to convert local coordinates into world coordinates.
         */
        xmin: number;
        /**
         * The x maximum in local coordinates.<br>
         * Please see {@link @int/geotoolkit3d/util/Helper~Helper.localToBusiness},
         * or {@link https://threejs.org/docs/#api/en/core/Object3D.localToWorld}, to convert local coordinates into world coordinates.
         */
        xmax: number;
        /**
         * The y minimum in local coordinates.<br>
         * Please see {@link @int/geotoolkit3d/util/Helper~Helper.localToBusiness},
         * or {@link https://threejs.org/docs/#api/en/core/Object3D.localToWorld}, to convert local coordinates into world coordinates.
         */
        ymin: number;
        /**
         * The y maximum in local coordinates.<br>
         * Please see {@link @int/geotoolkit3d/util/Helper~Helper.localToBusiness},
         * or {@link https://threejs.org/docs/#api/en/core/Object3D.localToWorld}, to convert local coordinates into world coordinates.
         */
        ymax: number;
        /**
         * The z minimum in local coordinates.<br>
         * Please see {@link @int/geotoolkit3d/util/Helper~Helper.localToBusiness},
         * or {@link https://threejs.org/docs/#api/en/core/Object3D.localToWorld}, to convert local coordinates into world coordinates.
         */
        zmin: number;
        /**
         * The z maximum in local coordinates.<br>
         * Please see {@link @int/geotoolkit3d/util/Helper~Helper.localToBusiness},
         * or {@link https://threejs.org/docs/#api/en/core/Object3D.localToWorld}, to convert local coordinates into world coordinates.
         */
        zmax: number;
        /**
         * The minimum colormap value, if available.
         */
        valuemin?: number;
        /**
         * The maximum colormap value, if available.
         */
        valuemax?: number;
    };
}
