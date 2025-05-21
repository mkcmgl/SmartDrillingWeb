/**
 * @module geotoolkit3d/util/intersection/PlaneIntersection
 */
import type { Plane as ToolkitPlane } from '@int/geotoolkit3d/scene/plane/Plane';
import { Vector3 } from 'three';
import { AbstractIntersection } from '@int/geotoolkit3d/util/intersection/AbstractIntersection';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { ReservoirGrid } from '@int/geotoolkit3d/scene/reservoir/hexahedral/ReservoirGrid';
/**
 * A utilty class for setting intersections between a Plane and intersecting objects.
 * @deprecated since 4.0, please use geotoolkit3d/util/intersection/PlaneMeshIntersection instead.
 */
export declare class PlaneIntersection extends AbstractIntersection {
    constructor();
    protected drawReservoirIntersection(plane: ToolkitPlane, reservoir: ReservoirGrid, styleOptions?: AbstractIntersection.IntersectionOptions): AbstractIntersection.IntersectionShape[];
    protected drawSurfaceIntersection(plane: ToolkitPlane, surface: Object3D, styleOptions?: AbstractIntersection.IntersectionOptions): AbstractIntersection.IntersectionShape[];
    /**
     * Transform the bounding box of baseObject to intersectingObject's coordinate system<br>
     * Because baseObject is a 2D surface, its local bounding box doesn't have length in z axis.
     * So three points are picked to represent this transformation: min, max, top-left
     * @param plane the plane object
     * @param intersectingObject the intersecting object
     */
    transformBoundingBoxCoordinate(plane: ToolkitPlane, intersectingObject: Object3D): PlaneIntersection.BoundingBox;
}
export declare namespace PlaneIntersection {
    type BoundingBox = {
        p1: Vector3;
        p2: Vector3;
        p3: Vector3;
    };
}
