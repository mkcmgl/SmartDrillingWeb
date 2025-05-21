/**
 * @module geotoolkit3d/scene/plane/Plane
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { PlaneMaterial } from '@int/geotoolkit3d/scene/plane/PlaneMaterial';
import type { Box3, CanvasTexture, Texture, Vector2 } from 'three';
import { Mesh, PlaneGeometry, Vector3 } from 'three';
import { Group } from '@int/geotoolkit/scene/Group';
/**
 * Plane is a 3D "quad" rectangle which can be used to draw and display 2D toolkit shapes.<br>
 * The rendering options of the shapes are fully customizable (background fillstyle, size, scale).
 *
 * The Plane shape/geometry can be defined by various ways:<ul>
 * <li>by defining 3 points of the rectangle.</li>
 * <li>by passing down a THREE.js PlaneGeometry.</li>
 * <li>by defining the rectangle width/height then rotating/translating the object.</li></ul>
 *
 * Additionally, a Texture can be used as a background to the plane render.<br>
 * The main advantage is that this texture resolution can be different from the overlay resolution, to avoid stretching and full control over the quality and scale.
 */
export declare class Plane extends Object3D {
    constructor(options?: Plane.Options);
    /**
     * Set this Plane options
     */
    setOptions(options?: Plane.OptionsBase): this;
    /**
     * Returns the texture of the plane image, if any.
     * @deprecated since 4.0, use getImageTexture() or getOverlayTexture() instead.
     * @returns texture
     */
    getTexture(): CanvasTexture;
    /**
     * Returns the texture of the plane base image, if any.
     * @returns texture
     */
    getImageTexture(): Texture | null;
    /**
     * Returns the texture of the plane overlay, if any.
     * @returns texture
     */
    getOverlayTexture(): CanvasTexture;
    /**
     * Returns the overlay of this plane, if any.
     */
    getOverlay(): Group;
    /**
     * Return the plane mesh.
     */
    getMesh(): Mesh;
    /**
     * Returns the dimension of plane's texture, if any.
     * @deprecated since 4.0, use getImageTextureDimension() or getOverlayTextureDimension() instead
     * @returns dimension in Vector2
     */
    getTextureDimension(): Vector2;
    /**
     * Returns the dimension of the plane base image texture, if any.
     * @param {Vector2} [vec2] (optional) the Vector2 to hold the dimension, to avoid creating new object.
     * @returns dimension in Vector2
     */
    getImageTextureDimension(vec2?: Vector2): Vector2;
    /**
     * Returns the dimension of the plane overlay texture, if any.
     * @param {Vector2} [vec2] (optional) the Vector2 to hold the dimension, to avoid creating new object.
     * @returns dimension in Vector2
     */
    getOverlayTextureDimension(vec2?: Vector2): Vector2;
    /**
     * Returns the bounding box in local coordinate
     * @returns bbox
     */
    getBoundingBox(): Box3;
    /**
     * Return the world position of a specific corner of this plane quad.
     * The indices represent the 4 corners of the quad like so:
     * 0---1
     * |   |
     * 2---3
     * If this plane (or a parent object) has been moved/rotated since the last render,
     * please call Plane.updateWorldMatrix(true, true) first for correct results.
     * @param index Index of the plane quad, from 0 to 3.
     * @param target Optional point Vector3, will be updated and returned if provided.
     */
    getCorner(index: number, target?: Vector3): Vector3;
    /**
     * Return the local position of a specific corner of this plane quad.
     * The indices represent the 4 corners of the quad like so:
     * 0---1
     * |   |
     * 2---3
     * Note: If the plane has been generated from a custom PlaneGeometry made of mode than 2 triangle, this will not return the correct corners.
     * @param index Index of the plane quad, from 0 to 3.
     * @param target Optional point Vector3, will be updated and returned if provided.
     */
    getLocalCorner(index: number, target?: Vector3): Vector3;
}
export declare namespace Plane {
    type OptionsBase = Object3D.Options & PlaneMaterial.OptionsBase;
    /**
     * The constructor options.<br>
     * The Plane shape/geometry can be defined by (exclusively) one of the following options: options.createfrompoints, options.planegeometry, or options.width/height.
     */
    type Options = Object3D.Options & PlaneMaterial.Options & {
        /**
         * Define the Plane geometric shape (size, position and orientation) by providing the corner A, B and C such that:
         * @example
         * A---B
         * |   |
         * C---D
         * The point D is then deduced internally since Planes are rectangles.<br>
         * This is the recommended way to create Planes as the most intuitive way to define its size and orientation in 3D.<br>
         * If defined, options.planegeometry, options.width and options.height will be ignored.
         */
        createfrompoints?: {
            /**
             * The 3D coordinates of the point A.
             */
            a: Vector3;
            /**
             * The 3D coordinates of the point B.
             */
            b: Vector3;
            /**
             * The 3D coordinates of the point C.
             */
            c: Vector3;
        };
        /**
         * Define the Plane geometric shape (size, position and orientation) by providing a user defined THREE.js PlaneGeometry.<br>
         * This option will only take effect if the user do not specify options.createfrompoints.<br>
         * If defined, options.width and options.height will be ignored.
         */
        planegeometry?: PlaneGeometry;
        /**
         * The width of this plane object in local coordinates.<br>
         * This option will only take effect if the user do not specify options.createfrompoints or options.planegeometry.
         * Default is 1.
         */
        width?: number;
        /**
         * The height of this plane object in local coordinates.<br>
         * This option will only take effect if the user do not specify options.createfrompoints or options.planegeometry.
         * Default is 1.
         */
        height?: number;
        /**
         * The number of quads on the horizontal axis for this plane geometry. Highly advised to leave at 1.
         * @deprecated since 4.0, Plane should be made of a single Quad to perform correctly. If multiple quad per plane is needed please instead use THREE.PlaneGeometry.
         */
        widthsegments?: number;
        /**
         * The number of quads on the vertical axis for this plane geometry. Highly advised to leave at 1.
         * @deprecated since 4.0, Plane should be made of a single Quad to perform correctly. If multiple quad per plane is needed please instead use THREE.PlaneGeometry.
         */
        heightsegments?: number;
    };
}
