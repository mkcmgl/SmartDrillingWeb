import { Vector3 } from 'three';
/**
 * Contour triangle class.<br>
 * This class calculates the center point on isoline, triangle normal,
 * and length of isoline intercepted an arbitrary triangle in 3D space.
 *
 * @example
 *           a                                a-------b
 *          / \                                \     /
 *      e1 /---\ e2      elevation           e1 \---/ e2
 *        /_____\                                \ /
 *       b       c                                c
 */
export declare class Triangle {
    /**
     * Constructor for the Triangle utility. It is advised to reuse the class instead of creating a new one for each calculation.
     * Triangle values and properties are optional and can be set later using setProperties().
     * @param a the first vertex
     * @param b the second vertex
     * @param c the third vertex
     * @param elevation the elevation that cross the triangle
     * @param [sorted] true if vertices are sorted in ascending by elevation
     */
    constructor(a?: number[], b?: number[], c?: number[], elevation?: number, sorted?: boolean);
    /**
     * Set triangle's properties such as vertices and elevation
     * @param a the first vertex
     * @param b the second vertex
     * @param c the third vertex
     * @param elevation the elevation that cross the triangle
     * @param [sorted] true if the given vertices are already sorted in ascending order by elevation
     */
    setProperties(a: number[], b: number[], c: number[], elevation: number, sorted?: boolean): void;
    /**
     * Returns if this triangle is made of points made of real numbers.
     */
    isVerticesValid(): boolean;
    /**
     * Returns if this triangle intersect the given elevation.
     */
    isIntersectElevation(): boolean;
    /**
     * Returns if the intersection between this triangle ad the given elevation form a line.
     */
    isLineIntersection(): boolean;
    /**
     * Return sorted vertices from highest to lowest elevation in an array
     * @returns vertices
     */
    getSortedVertices(): Vector3[];
    /**
     * Return the middle point of intersected isoline in triangle
     * @returns point
     */
    getPoint(): Vector3;
    /**
     * Return the normal of this triangle
     * @returns normal
     */
    getNormal(): Vector3;
    /**
     * Return the intersected length between isoline and triangle
     * @returns length
     */
    getIntersectedLength(): number;
    /**
     * Return the left intersected point in THREE.Vector3
     * @returns v3
     */
    getLeftIntersectionPoint(): Vector3;
    /**
     * Return the right intersected point in THREE.Vector3
     * @returns v3
     */
    getRightIntersectionPoint(): Vector3;
    /**
     * Return the left intersected point in array
     * @returns leftIntersection
     */
    getLeftIntersection(): number[];
    /**
     * Return the right intersected point in array
     * @returns rightIntersection
     */
    getRightIntersection(): number[];
    /**
     * Reset the properties of this triangle
     */
    reset(): void;
    static getClassName(): string;
    getClassName(): string;
}
