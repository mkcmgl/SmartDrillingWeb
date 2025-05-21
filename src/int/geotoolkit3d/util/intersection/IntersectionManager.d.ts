/**
 * @module geotoolkit3d/util/intersection/IntersectionManager
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { AbstractIntersection } from '@int/geotoolkit3d/util/intersection/AbstractIntersection';
import type { FencePanel } from '@int/geotoolkit3d/scene/seismic/FencePanel';
import type { Slice } from '@int/geotoolkit3d/scene/seismic/Slice';
import type { Plane } from '@int/geotoolkit3d/scene/plane/Plane';
/**
 * IntersectionManager class handles and keeps track of intersection-related features.
 * A default global instance of this class is created and used.
 */
export declare class IntersectionManager extends EventDispatcher {
    constructor();
    /**
     * Returns default instance of the IntersectionManager
     * @returns this
     */
    static getDefaultInstance(): IntersectionManager;
    /**
     * Register the intersection utility class to be used for specific types of intersection.<br>
     * Note that this method is needed for plane objects only.
     * @deprecated since 4.0, Intersection manager is now able to identify the required intersection type.
     * @param className the class name for intersection utility class
     * @param intersectionImplementation the intersection utility
     */
    static setBaseClass(className: string, intersectionImplementation: AbstractIntersection): void;
    /**
     * Set the intersectionManager automatic behavior.
     * Default is true.
     * When a pair of intersecting object have either of its 2 objects move since the last redraw, they become invalidated.
     * When set to true, the invalidated intersection is clreaed and redrawn.
     * When set to false, the invalidated intersection is only cleared.
     * When automatic redraw is disabled, the manual way to update an intersection is to call generateIntersection() again.
     */
    setAutoRedraw(auto: boolean): void;
    /**
     * Return if automatic redraw is enabled. See setAutoRedraw for more informations.
     */
    isAutoRedrawEnabled(): boolean;
    /**
     * Return true if the provided pair of objects can be used to create a new intersection.
     * @param planeObject the plane object that has overlay support (or one of its parents)
     * @param meshObject the object that intersects the plane object
     * @returns {boolean} if the pair is eligible or not.
     */
    elligibleForIntersection(planeObject: Object3D, meshObject: Object3D): boolean;
    /**
     * Draw intersections between the plane object and the intersecting object, with provided options.
     * @param planeObject the plane object that has overlay support (or one of its parents)
     * @param meshObject the object that intersects the plane object
     * @param [options] the options for intersection
     */
    generateIntersection(planeObject: Object3D, meshObject: Object3D, options?: IntersectionManager.PlaneMeshIntersectionOptions): void;
    /**
     * Remove the intersection between the given plane and mesh objects. <br>
     * User should call this if the intersection is no longer needed to avoid memory leaks, as the intersection
     * manager is a singleton, and keeps references to both objects until the intersection is removed.
     * @param planeObject the plane object that has overlay support
     * @param meshObject the mesh object that intersects the plane object
     */
    removeIntersection(planeObject: Object3D, meshObject: Object3D): void;
    /**
     * Set the options for intersection.<br>
     * Using this method can change intersection's properties without re-calculating intersecting points.
     * Note if the position of intersection has changed, use generateIntersection instead.
     *
     * @param planeObject the plane object that has overlay support
     * @param meshObject the object that intersects the plane object
     * @param properties the intersection properties
     */
    setPropertyByIntersection(planeObject: Object3D, meshObject: Object3D, properties: IntersectionManager.PlaneMeshIntersectionOptions): void;
    /**
     * Returns true, if intersection exists
     * @param planeObject the plane object that has overlay support
     * @param meshObject the object that intersects the plane object
     * @returns true if intersection exists
     */
    isIntersectionExists(planeObject: Object3D, meshObject: Object3D): boolean;
    /**
     * Returns true if matrix world has changed. Otherwise, return false.
     */
    isMatrixWorldChange(): boolean;
    /**
     * Returns the relationship of all intersections. <br>
     * The returned object stores relationship like: obj[meshObject.uuid] = planeObject.uuid
     * @deprecated since 4.0, please use getMeshMap() instead
     */
    getIntersectionGroup(): {};
    /**
     * Returns a copy of the relationship of all intersections. <br>
     * The returned object stores relationship like: obj[planeObject.uuid] = meshObject.uuid
     * @deprecated since 4.0, please use getPlaneMap() instead
     */
    getBaseGroup(): {};
    /**
     * Return the map of relationship between plane objects and the mesh(es) they intersect.
     * Map <planeuuid: string, meshessuuidSet: Set<string>>
     */
    getPlaneMap(): Map<string, Set<string>>;
    /**
     * Return the map of relationship between mesh objects and the plane(s) they intersect.
     * Map <meshuuid: string, planesuuidSet: Set<string>>
     */
    getMeshMap(): Map<string, Set<string>>;
    /**
     * Returns the map of all objects being part of intersections.
     * Key are objects's UUID, value is the object itself.
     */
    getObjectMap(): Map<string, {
        object: Object3D;
        matrixworld: number[];
    }>;
    /**
     * Dispose the instance and its properties.
     */
    dispose(): void;
}
export declare namespace IntersectionManager {
    /**
     * Options for intersections of type Plane-Mesh.
     */
    type PlaneMeshIntersectionOptions = {
        /**
         * If this intersection should be visible or not. Default is true.
         */
        visible?: boolean;
        /**
         * The line width, if the intersection is of line shape
         */
        linewidth?: number;
        /**
         * The line style for drawing the intersection lines (such as Surface intersections).
         */
        linestyle?: LineStyle;
        /**
         * The fill style for drawing the intersection fillings. (such as Reservoir intersections.)<br>
         * Can be used to color lines if 'linestyle' is not defined.
         */
        fillstyle?: FillStyle;
        /**
         * The flag to preserve the intersecting object's colors on intersections.<br>
         * If true, the intersected object (surface, reservoir) will be used to determine the intersection colors.<br>
         * If false, the defined 'linestyle' and 'fillstyle' option will be used instead.
         */
        preservecolor?: boolean;
    };
    /**
     * The plane-like objects that supports intersection and overlay capabilities.
     */
    type OverlayableObject = FencePanel | Plane | Slice;
}
