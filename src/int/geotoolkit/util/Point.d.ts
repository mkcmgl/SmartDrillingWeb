/**
 * This class is a 2D Point implementation. It holds the xy values that define a point coordinates in two dimensions.<br>
 * It also provides some utility functions to manipulate Points, compare points or calculate distance between points.
 */
export declare class Point {
    constructor();
    /**
     * @param point Point or an object with 'x' and 'y' properties or [x,y] array
     */
    constructor(point: Point | Point.Options | number[]);
    /**
     * @param [x] x coordinate
     * @param [y] y coordinate
     */
    constructor(x: number, y: number);
    /**
     * X position
     * @name module:geotoolkit/util/Point~Point#x
     */
    get x(): number;
    /**
     * X position
     * @name module:geotoolkit/util/Point~Point#x
     */
    set x(value: number);
    /**
     * Y position
     * @name module:geotoolkit/util/Point~Point#y
     */
    get y(): number;
    /**
     * Y position
     * @name module:geotoolkit/util/Point~Point#y
     */
    set y(value: number);
    /**
     * Return x value
     * @returns x value
     */
    getX(): number;
    /**
     * Return x value
     * @returns x value
     */
    getY(): number;
    /**
     * set Point coordinates
     * @param point point
     */
    setPoint(point: Point): this;
    /**
     * set Point coordinates
     * @param x x coordinate or the point
     * @param y y coordinate
     */
    setPoint(x: number, y: number): this;
    /**
     * set X Point coordinate
     * @param x x coordinate
     */
    setX(x: number): this;
    /**
     * set Y Point coordinates
     * @param y y coordinate
     */
    setY(y: number): this;
    /**
     * translate point of dx, dy.
     * @param dx dx
     * @param dy dy
     */
    translate(dx: number, dy: number): this;
    /**
     * return clone object
     * @returns clone
     */
    clone(): Point;
    /**
     * Returns a string that represents the current point.
     * @returns A string that represents the current point.
     */
    toString(): string;
    /**
     * compares a point against this one, if equal returns true
     * @param point point to compare to
     * @param [epsilon] acceptance criteria
     * @returns if these two points are equal
     */
    equalsPoint(point: Point, epsilon?: number): boolean;
    /**
     * round point coordinates
     */
    round(): this;
    /**
     * Finds closest point from current to the segment provided (represented by two points)
     * @param x1 first segment point x-ordinate
     * @param y1 first segment point y-ordinate
     * @param x2 second segment point x-ordinate
     * @param y2 second segment point y-ordinate
     * @param [dst] destination point
     * @returns point
     */
    getClosest(x1: number, y1: number, x2: number, y2: number, dst?: Point): Point;
    /**
     * Calculates distance between two points
     * @param x1 first point x-ordinate
     * @param y1 first point y-ordinate
     * @param x2 second point x-ordinate
     * @param y2 second point y-ordinate
     * @returns distance between points
     */
    static getDistance(x1: number, y1: number, x2: number, y2: number): number;
    /**
     * Calculates distance between two points
     * @param p1 first point object
     * @param p2 second point object
     * @returns distance between points
     */
    static getDistance(p1: Point, p2: Point): number;
    /**
     * Returns squared distance between two points
     * @param p1 first point object
     * @param p2 second point object
     * @returns squared distance
     */
    static getSquaredDistance(p1: Point, p2: Point): number;
    /**
     * Returns squared distance between two points`{x1, y1}` and `{x2, y2}`
     * @param x1 first point x-ordinate
     * @param y1 first point y-ordinate
     * @param x2 second point x-ordinate
     * @param y2 second point y-ordinate
     * @returns squared distance
     */
    static getSquaredDistance(x1: number, y1: number, x2: number, y2: number): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): Point.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Point.Options): this;
    /**
     * Create or get point from object
     * @param [object] object can be in format of constructor of {@link @int/geotoolkit/attributes/LineStyle~LineStyle}
     * @returns point
     */
    static fromObject(object?: Point.Options | Point | [
        number,
        number
    ] | null): Point | null;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Point {
    /**
     * x coordinate or an object with 'x' and 'y' properties or [x,y] array
     */
    type Options = {
        /**
         * x coordinate
         */
        x?: number;
        /**
         * y coordinate
         */
        y?: number;
    };
    type OptionsOut = Required<Options>;
}
