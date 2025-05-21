/**
 * @module geotoolkit3d/util/intersection/AbstractIntersection
 */
import type { Mesh } from 'three';
import { Plane as THREEPlane } from 'three';
import { LinearGradientStyle } from '@int/geotoolkit/attributes/LinearGradientStyle';
import { Polyline } from '@int/geotoolkit/scene/shapes/Polyline';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { PolylineSet } from '@int/geotoolkit/scene/shapes/PolylineSet';
import { Polygon } from '@int/geotoolkit/scene/shapes/Polygon';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Surface } from '@int/geotoolkit3d/scene/surface/Surface';
import type { ReservoirGrid } from '@int/geotoolkit3d/scene/reservoir/hexahedral/ReservoirGrid';
import type { Slice } from '@int/geotoolkit3d/scene/seismic/Slice';
import type { FencePanel } from '@int/geotoolkit3d/scene/seismic/FencePanel';
import type { Plane } from '@int/geotoolkit3d/scene/plane/Plane';
/**
 * Abstract utility class for setting intersections. <br>
 * The derived classes handle different plane-like objects (seismic slice, fence, and plane).
 * It's discouraged to store object-specfic data in those classes. As a utility class,
 * it is supposed to be reused among different objects. <br>
 * The main method for the class is <em>generateIntersection<em>, and each derived class
 * should overwrite this method to serve different type of plane object.<br>
 *
 * Intersections are drawn with geotoolkit 2D shapes, via an overlay. So a qualified plane
 * object needs to support overlay.<br>
 * @deprecated since 4.0
 */
export declare abstract class AbstractIntersection {
    protected constructor();
    /**
     * Draw intersection between the plane-like object and a reservoir
     * @param planeObject the object with overlay capabilities
     * @param reservoir the reservoir object to test intersection with
     * @param [styleOptions] style options
     * @returns shapes
     */
    protected abstract drawReservoirIntersection(planeObject: AbstractIntersection.OverlayableObject, reservoir: ReservoirGrid, styleOptions?: AbstractIntersection.IntersectionOptions): AbstractIntersection.IntersectionShape[];
    /**
     * Draw intersection between the plane-like object and a surface
     * @param planeObject the object with overlay capabilities
     * @param surface the surface object to test intersection with
     * @param [styleOptions] style options
     * @returns shapes
     */
    protected abstract drawSurfaceIntersection(planeObject: AbstractIntersection.OverlayableObject, surface: Object3D, styleOptions?: AbstractIntersection.IntersectionOptions): AbstractIntersection.IntersectionShape[];
    /**
     * Draw intersections between the plane object and the intersecting object, with provided options.
     *
     * @param planeObject the plane object that has overlay support
     * @param intersectingObject the object that intersects the plane object
     * @param [options] the options for intersection
     * @returns shapes
     */
    generateIntersection(planeObject: AbstractIntersection.OverlayableObject, intersectingObject: Object3D, options?: AbstractIntersection.IntersectionOptions): AbstractIntersection.IntersectionShape[];
    /**
     * Return a helper plane in object's local coordinates. <br>
     * The helper plane is a representation of the plane object, in type of THREE.Plane.
     * @param referPlane The reference plane
     * @param object The intersected object
     * @returns plane
     */
    protected generateHelperPlaneLocal(referPlane: Mesh, object: Object3D): THREEPlane;
    /**
     * Generate filled line style to display the color of surface
     * @param colors Ratio and css format color
     * @returns lineargradientstyle Line style
     */
    protected generateFilledLinestyle(colors: [
        number,
        string
    ][]): LinearGradientStyle | null;
    /**
     * Draw polyline as overlay on top of plane object
     * @param pointsInfo intersection points info
     * @param planeObject plane object
     * @param intersectingObject intersecting object
     * @param [isVertical] is the plane object vertical
     * @returns shapes
     */
    protected drawPolyline(pointsInfo: AbstractIntersection.DrawPolylinePointsInfo, planeObject: AbstractIntersection.OverlayableObject, intersectingObject: Object3D, isVertical?: boolean): AbstractIntersection.IntersectionShape[];
    /**
     * Draw polygon as overlay on top of plane object
     * @param pointsInfo intersection points info
     * @param planeObject plane object
     * @param [intersectingObject] intersecting object
     * @returns shapes
     */
    protected drawPolygon(pointsInfo: AbstractIntersection.DrawPolygonPointsInfo, planeObject: AbstractIntersection.OverlayableObject, intersectingObject?: Object3D): AbstractIntersection.IntersectionShape[];
    /**
     * Generate intersection points between helper plane and the surface
     * @param helperPlane The helper plane
     * @param surface The surface to check intersection with the slice
     * @param ifCalculateColor If calculate colors for intersection points
     * @returns Information of intersection points
     */
    protected getSurfaceIntersectedPoints(helperPlane: THREEPlane, surface: Surface, ifCalculateColor: boolean): AbstractIntersection.SurfaceIntersectedPoints;
    /**
     * Use a cell's 12 edges to test intersection with plane and return the points
     * @param helperPlane the helper plane
     * @param reservoir the reservoir to test intersection
     * @param ifCalculateColor the flag to calculate color values
     * @returns points info
     *
     * 0 ------- 1
     * |\        |\
     * | \       | \
     * |  2 ------- 3
     * 4 -|----- 5  |
     * \ |       \ |
     * \|        \|
     * 6 ------- 7
     */
    protected getReservoirIntersectedPoints(helperPlane: THREEPlane, reservoir: ReservoirGrid, ifCalculateColor: boolean): AbstractIntersection.ReservoirIntersectedPoints;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractIntersection {
    /**
     * The objects that currently support overlay capabilities
     */
    type OverlayableObject = FencePanel | Plane | Slice;
    /**
     * the options for intersection
     */
    type IntersectionOptions = {
        /**
         * If this intersection should be visible or not. Default is true.
         */
        visible?: boolean;
        /**
         * the line width, if the intersection is of line shape
         */
        linewidth?: number;
        /**
         * The line style for drawing the intersection
         */
        linestyle?: LineStyle;
        /**
         * the fill style for drawing the intersection filling. (when the intersection is not just a line.)
         */
        fillstyle?: FillStyle;
        /**
         * the flag to preserve intersecting object's color on intersections.
         * If set to false, will ignore the defined linestyle and fillstyle, to instead use the intersected object's color.
         */
        preservecolor?: boolean;
    };
    type IntersectionShape = Polyline | Polygon | PolylineSet;
    type DrawPolylinePointsInfo = {
        /**
         * the coordinates
         */
        coordinates: {
            /**
             * the x coordinate
             */
            x: number[];
            /**
             * the y coordinate
             */
            y: number[];
        };
        /**
         * the line width for polyline
         */
        linewidth: number;
        /**
         * the fill style for polyline
         */
        fillstyle: FillStyle;
    };
    type DrawPolygonPointsInfo = {
        /**
         * the coordinates
         */
        coordinates: {
            /**
             * the x coordinate
             */
            x: number[][];
            /**
             * the y coordinate
             */
            y: number[][];
        };
        /**
         * the fill style for polyline
         */
        fillstyle: FillStyle[];
    };
    type SurfaceIntersectedPoints = {
        /**
         * coordinates of intersection points
         */
        coordinates: number[][];
        /**
         * css format color of intersection points
         */
        colors: (string | null)[];
    };
    type ReservoirIntersectedPoints = {
        /**
         * coordinates of intersection points
         */
        coordinates: number[][];
        /**
         * css format color of intersection points
         */
        colors: number[];
    };
}
