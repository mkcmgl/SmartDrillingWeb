/**
 * @module geotoolkit3d/data/util/Octree
 */
import type { Plane } from 'three';
import { Box3 } from 'three';
/**
 * This utility class allow to build an Octree structure to spatialy sort 3D elements.<br>
 * A user should instantiate this class only once, and then use insert() to add elements.<br>
 * This octree is a fixed boundaries octree. After calling "reduce" to optimize the octree, it becomes static and read-only.<br>
 * Because it is using fixed node boundaries, the octree will store duplicate elements in the
 * case the element have a size (is not a point) and this element sits on the boundary between several nodes.<br>
 *
 * In this implementation, the octree will add elements to each node intersecting the element's bounds.<br>
 * Upon reaching its capacity, a node will automatically split into eight sub-nodes, and reassign the elements in these sub nodes based on their boundaries.<br>
 * Common use cases are collision detection and fast search.<br>
 *
 * Because this octree implementation can store duplicate elements, this octree will return duplicate indices when searching via retrieveByPlane().<br>
 * The default capacity is set to 12,500 elements per node.
 * @deprecated since 4.0, this octree was a prototype and was not meant to be public.
 */
export declare class Octree {
    /**
     * Octree constructor.
     * @param level the level in octree. Starting from 0. This parameter has currently no effect.
     * @param bound the bounding box of this octree
     */
    constructor(level: number, bound: Box3);
    /**
     * Set the node capacity of this octree.<br>
     * The minimum capacity is 8, since an octree sub-divide itself in 8 elements.
     * @param capacity the max number of elements an octree node can store.
     * @returns this
     */
    setCapacity(capacity: number): this;
    /**
     * Insert content to Octree.<br>
     * For memory sake, we store content include bounds as an array.<br>
     * The format is [min.x, min.y, min.z, max.x, max.y, max.z, index].<br>
     * @param element the content
     */
    insert(element: Octree.ElementWithBounds): void;
    /**
     * Test if the given plane intersects with the bounds of this Octree node.
     * @param plane the plane to test intersection
     * @returns true if it intersect.
     */
    intersectsPlane(plane: Plane): boolean;
    /**
     * Recursively test if the given plane intersects this Octree node and its sub nodes.<br>
     * If it intersects any nodes, return the indices stored in the intersected leaf nodes.<br>
     * Please make sure to convert the plane (and the optional bounds) to the octree's local coordinate space for correct intersections.
     * @param plane the plane to test
     * @param bounds the optional plane boundaries, if the intersecting object is a rectangle or planar 3D polygon.
     * @returns the array of indices.
     */
    retrieveByPlane(plane: Plane, bounds?: Box3): number[];
    /**
     * Retrieve elements from each sub-node.<br>
     * Returns the result in an array, where each position in the array stores a node's data.
     * @returns data
     */
    retrieve(): Octree.NodeElement[][];
    /**
     * Returns, for this node, the number of sub-nodes which stores elements.<br>
     * This excludes empty nodes.
     * @returns count
     */
    getNumberOfNodes(): number;
    /**
     * Optimize and make the octree read-only.<br>
     * This step greatly reduce the octree memory usage by removing the provided elements bounds.<br>
     * While the octree will be more memory efficient and faster, it will also become read-only, as the necessary informations to further build the octree are discarded.
     */
    reduceSize(): void;
    /**
     * Returns true if size of Octree was reduced, and it's become read only.
     */
    isReduced(): boolean;
    /**
     * Returns the direct child nodes of this octree node.
     * @returns nodes
     */
    getNodes(): Octree[];
    /**
     * Returns the elements stored in this octree node.
     * @returns data
     */
    getElements(): Octree.NodeElement[];
    /**
     * Returns the bounding box of this octree node.
     * @returns bound
     */
    getBound(): Box3;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Octree {
    /**
     * This element has not been reduced yet, and still contain the boundaries of the element, along the index.
     */
    type ElementWithBounds = [
        /**
         * The minimum X boundary of this element.
         */
        minx: number,
        /**
         * The minimum Y boundary of this node.
         */
        miny: number,
        /**
         * The minimum Z boundary of this node.
         */
        minz: number,
        /**
         * The maximum X boundary of this node.
         */
        maxx: number,
        /**
         * The maximum Y boundary of this node.
         */
        maxy: number,
        /**
         * The maximum Z boundary of this node.
         */
        maxz: number,
        /**
         * The index this node represent.<br>
         * Ex: if this octree represent a mesh's triangles, then this indice might represent the triangle's index,
         * and accordingly, the boundaries of this node represent the triangle boundaries.<br>
         * Indices is the most efficient way to store geometric informations, and is up to the user to come with clever use of the octree layout.
         */
        index: number
    ];
    /**
     * An octree element. Each octree leaf node can contain up to 'capacity' elements.<br>
     * Depending on if this octree has been "reduced", this type actual content will vary:<ul>
     * <li>Before reducing, it will contain the element boundaries and its index).</li>
     * <li>After reducing, it will be just the element index, the boundaries are removed in the reduce operation to save memory.</li></ul>
     */
    type NodeElement = ElementWithBounds | number;
}
