/**
 * @module geotoolkit3d/util/Helper
 */
import type { BufferAttribute, Camera } from 'three';
import { Box2, Box3, Color, Group, Matrix4, Object3D as BASEObject3D, Plane as ThreePlane, Vector2, Vector3 } from 'three';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { Plot } from '@int/geotoolkit3d/Plot';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { Slice } from '@int/geotoolkit3d/scene/seismic/Slice';
import type { Plane } from '@int/geotoolkit3d/scene/plane/Plane';
/**
 * Utility class providing help functions for 3D scene operations.<br>
 */
export declare class Helper {
    static get BBOX_EPSILON(): number;
    /**
     * Convert the given 3D point of the given 3D object from local coordinates into "business" coordinates.
     * Business coordinates are world coordinates minus the Plot's scale applied.<br>
     * The given Vector3 is modified in the process, and is returned for method-chaining.<br>
     * For more informations on transformations, see {@link https://threejs.org/docs/#manual/en/introduction/Matrix-transformations} <br>
     * @example
     * // How to retrieve a 3D Surface 50th triangle points, and convert them to business coordinates:
     * import {Vector3} from 'three';
     * import {Surface} from 'geotoolkit3d.scene.surface.Surface';
     * import {Helper} from 'geotoolkit3d.util.Helper';
     * // ...
     * const surface = new Surface({
     *     data: {
     *         surface: surfaceData
     *     }
     * });
     * plot.getRoot().add(surface);
     * // ...
     * const attributes = surfaceData.getAttributes();
     * const idx = attributes.index.getX(50 * 3);
     * const buffer = attributes.position;
     * const p1 = new Vector3().fromBufferAttribute(buffer, idx);
     * const p2 = new Vector3().fromBufferAttribute(buffer, idx + 1);
     * const p3 = new Vector3().fromBufferAttribute(buffer, idx + 2);
     * // Now we transform them from local to 'business' world position
     * Helper.localToBusiness(p1, surface, plot);
     * Helper.localToBusiness(p2, surface, plot);
     * Helper.localToBusiness(p3, surface, plot);
     * @param localPoint the 3D point position in local coordinates.
     * @param object the 3D object the point belong to.
     * @param plot the 3D plot view, in which the object is rendered.
     */
    static localToBusiness(localPoint: Vector3, object: Object3D, plot: Plot): Vector3;
    /**
     * Convert the given 3D point from "business" coordinates into local coordinates.
     * For more information see {@link @int/geotoolkit3d/util/Helper~Helper#localToBusiness}().
     * The given Vector3 is modified in the process, and is returned for method-chaining.<br>
     * @param point the 3D point position in business coordinates.
     * @param object the 3D object the point belong to.
     * @param plot the 3D plot view, in which the object is rendered.
     */
    static businessToLocal(point: Vector3, object: Object3D, plot: Plot): Vector3;
    /**
     * Convert the given 3D point from world coordinates into "business" coordinates.
     * Business coordinates are world coordinates minus the Plot's scale applied.<br>
     * The given Vector3 is modified in the process, and is returned for method-chaining.<br>
     * For more informations on transformations, see {@link https://threejs.org/docs/#manual/en/introduction/Matrix-transformations} <br>
     * @param point the 3D point position in world coordinates.
     * @param plot the 3D plot view, in which the object is rendered.
     */
    static worldToBusiness(point: Vector3, plot: Plot): Vector3;
    /**
     * Convert the given 3D point from "business" coordinates into world coordinates.
     * Business coordinates are world coordinates minus the Plot's scale applied.<br>
     * The given Vector3 is modified in the process, and is returned for method-chaining.<br>
     * For more informations on transformations, see {@link https://threejs.org/docs/#manual/en/introduction/Matrix-transformations} <br>
     * @param point the 3D point position in business coordinates.
     * @param plot the 3D plot view, in which the object is rendered.
     */
    static businessToWorld(point: Vector3, plot: Plot): Vector3;
    /**
     * Computes the world bounding box of the given object and its children.<br>
     * This function uses geometries boundingBox and matrixWold to do so.<br>
     * Note that this function uses all nodes by default (even the not visible ones)<br>
     * <br>
     * @param object The object to compute world bounding box of
     * @param [filter] A filter function to ignore some nodes
     * @param [alwaysTraverseChildren] Forces the calculation to traverse children to get the extents of the whole view
     * @param [excludeGrid] When used to update grid model limits, it should not take grid itself into account
     * @returns The computed world bounding box
     */
    static computeWorldBoundingBox(object: BASEObject3D, filter?: (o: BASEObject3D) => boolean, alwaysTraverseChildren?: boolean, excludeGrid?: boolean): Box3 | null;
    /**
     * Return the diagonal size of the given THREE.Box3
     * The size returned is the distance between the Box min and max points.
     * If the Box is empty (min and max are set to infinity) or if it contains NaN or the box is null, it will return 0.
     */
    static getBoxSize(box: Box3): number;
    /**
     * Dispose an object's WebGL resources and all its children recursively.<br>
     * The sequence in witch the dispose steps will occur is:
     * <ul>
     * <li> disposeResources : If the object has any specific resources to dispose, the disposeResources() function will be called.</li>
     * <li> dispose children: Calls Helper.dispose() on the children of this object.</li>
     * <li> dispose object: If the object has any custom implementation of the dispose function.</li>
     * <li> remove object: Removes the object from its parent.</li>
     * <li> dispose geometry: Disposes the geometry, releasing the memory used on the graphic card.</li>
     * <li> dispose material: Disposes the material, releasing the memory used on the graphic card.</li>
     * <ul>
     * <li> dispose texture: Disposes the texture stored in the material (if any).</li>
     * </ul>
     * </ul>
     *
     * @param object The object or array of objects to dispose
     */
    static dispose(object: BASEObject3D | Group | BASEObject3D[]): void;
    /**
     * Compute the device coordinates for the given world coordinates.<br>
     * This function will compute the projection of the given position using the given parameters.<br>
     *
     * @param position The position to project
     * @param camera The camera
     * @param rendererSize The renderer dimension in virtual pixels
     * @param [target] An optional target to store the result
     * @param [matrixWorld] The world transform matrix of this point
     * @returns The z is the 'depth' in the screen
     */
    static worldToDevice(position: Vector3, camera: Camera, rendererSize: Dimension, target?: Vector3, matrixWorld?: Matrix4): Vector3;
    /**
     * Compute the device coordinates for the given world coordinates.<br>
     * This function will compute the projection of the given position using the given parameters.<br>
     *
     * @param position The position to project
     * @param camera The camera
     * @param rendererSize The renderer dimension in virtual pixels
     * @param [target] An optional target to store the result
     * @returns the device position as a Vector2
     */
    static worldToDevice2D(position: Vector3, camera: Camera, rendererSize: Dimension, target: Vector2): Vector2;
    /**
     * Compute the world coordinates for the given device coordinates (require a device coordinate with depth).<br>
     * This function will compute the un-projection of the given position using the given parameters.<br>
     *
     * @param position The position to un-project from device to world space.
     * @param camera The camera.
     * @param rendererSize The renderer dimension in virtual pixels.
     * @param [target] An optional target to store the result.
     * @returns The resulting position in world space coordinates.
     */
    static deviceToWorld(position: Vector3, camera: Camera, rendererSize: Dimension, target: Vector3): Vector3;
    /**
     * Convert any type of color to {@link @int/geotoolkit/util/DefaultColorProvider~DefaultColorProvider}
     */
    static convertToColorProvider(options: Helper.OptionsWithColor): void;
    /**
     * Returns WGS84 full extent (default model limits for map)
     */
    static getWGS84DefaultExtent(): Box2;
    /**
     * Returns position in an array by given THREE.Box3<br>
     * The positions are repeating triangles in order of x,y,z<br>
     * If an offset is provided, the resulting positions will be multiplied by the offset.
     *
     * @param box the input box
     * @param offset the offset that applies to positions
     * @returns positions
     */
    static computeBoxPositions(box: Box3, offset: number): number[];
    /**
     * Determine the orientation of triangles in a box-like shape, i.e. a reservoir cell.<br>
     * If triangles are facing inward the box, then we only need to render back face (THREE.BackFace).
     * Otherwise, we render the front face (THREE.FrontFace). <br>
     * In some cases, ReservoirGrid cells can be provided with inverted vertice order, which result in inverted triangles.
     * By deducing the vertex order, we can avoid rendering both triangle faces and improve performances.
     * @param verticesPosition the box positions, in a contiguous [x,y,z...] array or splitted in 3 BufferAttributes.
     * @returns if the triangles of the given boxes geometries are facing inward.
     */
    static isTriangleFacingInward(verticesPosition: number[] | Helper.ReservoirAttributes): boolean;
    /**
     * Create or update a THREE.js Plane based on the provided planar object, like a Slice or a Plane.
     * Because planar objects are actually quads, it might be more accurate to say this method will make a THREE.js Plane that 'contains' the (quad) plane.
     * @param planarObject The reference object to create a THREE.js Plane from.
     * @param threePlane If provided, this THREE Plane will be updated and returned. If null, a new THREE plane is created.
     * @param direction If provided, the created/updated plane will face that direction. Usefull when used for clipping.
     * If this direction is perpendicular to the reference plane, this will result in undefined behavior.
     */
    static createUpdateThreePlane(planarObject: Plane | Slice, threePlane?: ThreePlane, direction?: Vector3): ThreePlane;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Helper {
    type OptionsWithColor = {
        /**
         * If this option field was set, it will be converted to colorprovider as a ColorProvider, and color will be set to null.
         */
        color?: ColorProvider | string | Color;
        /**
         * The option field which will be set as a ColorProvider, based on the content of color and colorprovider.
         */
        colorprovider?: ColorProvider | string | Color;
    };
    type ReservoirAttributes = {
        x: BufferAttribute;
        y: BufferAttribute;
        z: BufferAttribute;
    };
}
