import { Point } from '@int/geotoolkit/util/Point';
/**
 * Defines types of intersection detectable by the line
 * Assume line segments are: p1----p2 and p3----p4
 * @enum
 * @readonly
 */
export declare enum IntersectionType {
    /**
     * Lie on the same line and overlap
     * p1---p3-p2---p4
     */
    Overlapping = "overlapping",
    /**
     * Lie on the same line but don't overlap
     * p1----p2 p3----p4
     */
    Disjoint = "disjoint",
    /**
     * Lie on parallel lines
     * p1----p2
     *   p3----p4
     */
    Parallel = "parallel",
    /**
     * Lie on different lines and intersect
     */
    Intersecting = "intersecting",
    /**
     * Lie on different lines but don't intersect
     */
    NonIntersecting = "nonintersecting"
}
/**
 * This class is a 2D Line implementation. It holds two points define a line segment two dimensions.</br>
 * It also provides some utility functions to manipulate Lines and do basic geometrical calculations</br>
 * The line segment is defined by two points: start and end. </br>
 * StartPoint----------------------------EndPoint
 */
export declare class LineSegment {
    constructor();
    /**
     * @param start start Point
     * @param end end point
     */
    constructor(start: Point, end: Point);
    constructor(options: LineSegment.Options);
    setStart(start: Point): this;
    setStart(x: number, y: number): this;
    setEnd(end: Point): this;
    setEnd(x: number, y: number): this;
    /**
     * Return end point of the line segment
     * @returns End point
     */
    getEnd(): Point;
    /**
     * Return start point of the line segment
     * @returns Start point
     */
    getStart(): Point;
    /**
     * Returns the length of the line segment
     * @returns Length of the segment
     */
    getLength(): number;
    /**
     * Sets the two points which define a line segment.
     * @param start Point representing the "start" position
     * @param end Point representing the "end" position
     * @returns this
     */
    setLineSegment(start: Point, end: Point): this;
    /**
     * Translates the line segment by the deltas passed as arguments
     * @param dx Change in x coordinates
     * @param dy Change in y coordinates
     * @returns this
     */
    translate(dx: number, dy: number): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): LineSegment.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LineSegment.Options): this;
    /**
     * Clones this line segment and returns the newly created clone object
     * @returns clone
     */
    clone(): LineSegment;
    /**
     * Create or get LineSegment from object
     * @param [object] object can be in format of constructor of {@link @int/geotoolkit/util/LineSegment~LineSegment}
     * @returns line segment
     */
    static fromObject(object?: LineSegment.Options | LineSegment): LineSegment | null;
    /**
     * Checks if two lines are intersecting. If they do, will return intersection point, if they don't,
     * will return null. If second argument is passed, it will be assigned a property "intersectiontype",
     * which will contain one of the {@link @int/geotoolkit/util/LineSegment~IntersectionType} types defining how the two
     * line segments are correlated. If a destination point is provided, the point will be filled with
     * intersection coordinates and returned. (optimization)
     * @param ls1 The line to check intersection with
     * @param [typeObject] An optional to which a property called "intersectiontype" will be added
     * @returns Point of intersection if intersecting. Null otherwise
     * @param [dst] Destination point to fill with intersection coordinates
     */
    findIntersection(ls1: LineSegment, typeObject?: {
        intersectiontype?: IntersectionType;
        [key: string]: any;
    }, dst?: Point): Point | null;
    getDistance(x: number, y: number): number;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace LineSegment {
    /**
     * start Point
     */
    type Options = {
        /**
         * start point
         */
        start?: Point;
        /**
         * end point
         */
        end?: Point;
    };
    type OptionsOut = {
        /**
         * start point
         */
        start: Point;
        /**
         * end point
         */
        end: Point;
    };
}
