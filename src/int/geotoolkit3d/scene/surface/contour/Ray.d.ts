/**
 * @module geotoolkit3d/scene/surface/contour/Ray
 */
import { Vector3 } from 'three';
/**
 * Contour Ray class<br>
 * Ray is used to travese contour mesh and find intersections for building labels
 */
export declare class Ray {
    /**
     * @param origin The origin of Ray
     * @param direction The direction of Ray
     * @param contourLevel The contour level that Ray is located at
     */
    constructor(origin?: Vector3, direction?: Vector3, contourLevel?: number);
    /**
     * Set origin and direction for Ray
     * @param origin the origin of ray
     * @param direction the direction of ray
     * @returns this
     */
    set(origin: Vector3, direction: Vector3): this;
    /**
     * Return a new Ray with the same origin and direction
     * @returns this
     */
    clone(): Ray;
    /**
     * Copy the passed ray's properties to this ray
     * @param ray the passed ray
     * @returns this
     */
    copy(ray: Ray): this;
    /**
     * Get a Vector3 that is a given distance along this Ray
     * @param distance the distance in float
     * @param target the target vector
     * @returns result vector
     */
    at(distance: number, target: Vector3): Vector3;
    /**
     * Check if ray intersects the triangle
     * // from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
     * @param a the first vertex in triangle
     * @param b the second vertex in triangle
     * @param c the third vertex in triangle
     * @param backfaceCulling if true then not checking the backface
     * @param target the target that stored possible intersection
     * @param normal the normal of triangle
     * @returns intersected point
     */
    intersectTriangle(a: Vector3, b: Vector3, c: Vector3, backfaceCulling: boolean, target: Vector3, normal: Vector3): Vector3;
    /**
     * Get the origin of ray
     * @returns origin
     */
    getOrigin(): Vector3;
    /**
     * Get the direction of ray
     * @returns direction
     */
    getDirection(): Vector3;
    /**
     * Get contour level of this ray
     * @returns elevation
     */
    getContourLevel(): number;
    static getClassName(): string;
    getClassName(): string;
}
