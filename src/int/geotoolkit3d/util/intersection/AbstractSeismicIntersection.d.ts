/**
 * @module geotoolkit3d/util/intersection/AbstractSeismicIntersection
 */
import type { Mesh } from 'three';
import { Vector3 } from 'three';
import { AbstractIntersection } from '@int/geotoolkit3d/util/intersection/AbstractIntersection';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
/**
 * An abstract utility class for seismic intersection.
 */
export declare abstract class AbstractSeismicIntersection extends AbstractIntersection {
    protected constructor();
    /**
     * Transform the bounding box of the plane object to intersectingObject's coordinate system<br>
     * Because the plane object is a 2D surface,
     * three points are picked to represent this transformation: min, max, top-left
     * @param planeMesh the plane object's mesh
     * @param intersectingObject the intersecting object
     */
    transformBoundingBoxCoordinate(planeMesh: Mesh, intersectingObject: Object3D): AbstractSeismicIntersection.BoundingBox;
}
export declare namespace AbstractSeismicIntersection {
    type BoundingBox = {
        p1: Vector3;
        p2: Vector3;
        p3: Vector3;
    };
}
