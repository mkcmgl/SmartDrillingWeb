/**
 * @module geotoolkit/util/Transformation
 */
import { Point } from '@int/geotoolkit/util/Point';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { GraphicsPath } from '@int/geotoolkit/renderer/GraphicsPath';
import type { TextMetrics } from '@int/geotoolkit/renderer/TextMetrics';
/**
 * Create transformation matrix
 */
export declare class Transformation {
    /**
     * Creates identity matrix
     */
    constructor();
    /**
     * @param tr Transformation instance to copy
     */
    constructor(tr: Transformation);
    /**
     * @param properties object to copy
     */
    constructor(properties: Transformation.Properties);
    /**
     * @param xx x scale
     * @param yx yx skew
     * @param xy xy skew
     * @param yy y scale
     * @param dx x axis translation
     * @param dy y axis translation
     */
    constructor(xx: number, yx: number, xy: number, yy: number, dx: number, dy: number);
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): Transformation.Properties;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Transformation.Properties): this;
    /**
     * Transform point defined by two coordinates X and Y
     * @param x x coordinate
     * @param y y coordinate
     */
    transformXY(x: number, y: number): Point;
    /**
     * Inverse transform point defined by two coordinates X and Y
     * @param x x coordinate
     * @param y y coordinate
     */
    inverseTransformXY(x: number, y: number): Point;
    /**
     * Transforms from one point, rect, or dimension to another
     *
     * @param source origin to be transformed from
     * @param [destination] destination rectangle
     * @returns transformation from source to destination
     */
    transform<T extends Point | Rect | Dimension | GraphicsPath>(source: T, destination?: T): T;
    /**
     * Transform point defined by two coordinates X and Y
     * @param x x coordinate
     * @param y y coordinate
     */
    transform(x: number, y: number): Point;
    /**
     * Performs an inverse transform using points, rect or dimension
     *
     * @param source source rect
     * @param [destination] destination rect
     * @returns transformation from source to destination
     */
    inverseTransform<T extends Point | Rect | Dimension>(source: T, destination?: T): T;
    /**
     * Transform rectangle
     *
     * @param source source rectangle
     * @param [destination] destination rectangle
     * @throws {Error} if destination is readonly mode
     */
    transformRect(source: Rect, destination?: Rect): Rect | null;
    /**
     * Sets rect to rect transformation
     *
     * @param source source rectangle
     * @param destination destination rectangle
     * @param [horizontalFlip] horizontal flip
     * @param [verticalFlip] vertical flip
     * @param [aspectRatio] keeps aspect ratio
     * @throws {Error} if illegal source or destination rectangle
     * @returns this
     */
    setRectToRectTransformation(source: Rect, destination: Rect, horizontalFlip?: boolean, verticalFlip?: boolean, aspectRatio?: boolean): this;
    /**
     * Sets transformation based on three (source => destination) point pairs
     * @throws Error if determinant === 0
     * @param src1 first source point
     * @param src2 second source point
     * @param src3 third source point
     * @param dst1 first destination point
     * @param dst2 second destination point
     * @param dst3 third destination point
     * @returns this
     */
    setPointsToPointsTransformation(src1: Point, src2: Point, src3: Point, dst1: Point, dst2: Point, dst3: Point): this;
    /**
     * Inverse transform rectangle
     * @param source source rectangle
     * @param [destination] destination rectangle
     * @returns the transformed rect
     */
    inverseTransformRect(source: Rect, destination?: Rect): Rect;
    /**
     * Transform point
     *
     * @param src source point to transform
     * @param [dst] optional returned transformed point
     * @returns the transformed point
     */
    transformPoint(src: Point, dst?: Point): Point;
    /**
     * Inverse transforms the specified point
     * @param sourcePoint source point to transform
     * @param [destinationPoint] optional destination point
     * @returns the result of the inverse transform.
     */
    inverseTransformPoint(sourcePoint: Point, destinationPoint?: Point): Point;
    /**
     * Inverse transforms the specified dimension
     *
     * @param sourceSize the point to be inverse transformed
     * @param [targetSize] the size to hold the transformed point
     * @returns the result of the transform.
     */
    transformDimension(sourceSize: Dimension | TextMetrics, targetSize?: Dimension): Dimension;
    /**
     * Inverse transforms the specified dimension
     * @param sourceSize the point to be inverse transformed
     * @param [targetSize] the size to hold the transformed point
     * @returns the result of the inverse transform.
     */
    inverseTransformDimension(sourceSize: Dimension, targetSize?: Dimension): Dimension;
    /**
     * Resets this transform to the Identity transform.
     * @returns this
     */
    setToIdentity(): this;
    /**
     * Returns X Scale(xx)
     */
    getScaleX(): number;
    /**
     * Returns Y Scale(yy)
     */
    getScaleY(): number;
    /**
     * Sets X & Y Scale by xx and yy
     * @param xx x scale
     * @param yy y scale
     * @returns this
     */
    setScale(xx: number, yy: number): this;
    /**
     * Returns X sheer (xy)
     */
    getShearX(): number;
    /**
     * Returns Y sheer (yx)
     */
    getShearY(): number;
    /**
     * Returns X translation (dx)
     */
    getTranslateX(): number;
    /**
     * Returns Y translation (dy)
     */
    getTranslateY(): number;
    /**
     * Returns translation in both X & Y (dx, dy)
     */
    getTranslate(): Point;
    /**
     * Sets X & Y translation by dx and dy
     * @param dx x offset
     * @param dy y offset
     * @returns this
     */
    setTranslate(dx: number, dy: number): this;
    /**
     * Returns matrix determinant
     */
    getDeterminant(): number;
    /**
     * Pre-concatenates transformation matrix with Tx
     * @param Tx transformation
     * @returns this
     */
    preConcatenate(Tx: Transformation): this;
    /**
     * Is rotated transformation
     * @returns rotation flag
     */
    isRotated(): boolean;
    /**
     * Is identity transformation
     * @returns is this identity transformation.
     */
    isIdentity(): boolean;
    /**
     * Concatenates Tx to transformation
     * @param Tx transformation
     * @returns this
     */
    concatenate(Tx: Transformation): this;
    /**
     * Sets transformation
     * @param xx Transformation
     * @returns this
     */
    setTransformation(xx: Transformation): this;
    /**
     * Sets transformation
     * @param xx x scale
     * @param yx yx skew
     * @param xy xy skew
     * @param yy y scale
     * @param dx x axis translation
     * @param dy y axis translation
     * @returns this
     */
    setTransformation(xx: number, yx: number, xy: number, yy: number, dx: number, dy: number): this;
    /**
     * Create inverse transformation
     */
    createInverse(): Transformation;
    /**
     * Rotate
     *
     * @param theta angle to rotate
     * @returns this
     */
    rotate(theta: number): this;
    /**
     * Translate
     * @param tx x offset along x coordinate
     * @param ty y offset along y coordinate
     * @returns this
     */
    translate(tx: number, ty: number): this;
    /**
     * Scale
     * @param sx scale factor along x coordinate
     * @param sy scale factor along y coordinate
     * @returns this
     */
    scale(sx: number, sy: number): this;
    /**
     * Applies a shear mapping to the transform
     *
     * @param shx shear coefficient along x coordinate
     * @param shy shear coefficient along y coordinate
     * @returns this
     */
    shear(shx: number, shy: number): this;
    /**
     * Transform a set of point defined by two arrays
     *
     * @param x an array of x-coordinates
     * @param y an array of y-coordinates
     * @param count a count of point to transform
     */
    transformPoints(x: number[], y: number[], count: number): void;
    /**
     * Apply X transformation to x,y
     * @param x x coordinate
     * @param y y coordinate
     */
    transformX(x: number, y: number): number;
    /**
     * Apply Y transformation to x,y
     * @param x x coordinate
     * @param y y coordinate
     */
    transformY(x: number, y: number): number;
    /**
     * Transforms GraphicsPath
     *
     * @param srcPath source path to transform
     * @param [dstPath] transformed path
     * @returns transformed path
     */
    transformPath(srcPath: GraphicsPath, dstPath?: GraphicsPath): GraphicsPath;
    /**
     * Return true if transformation are identical
     * @param Tx transformation
     */
    fastEquals(Tx: Transformation): boolean;
    /**
     * Return length to X ratio
     */
    getLengthToXRatioAt(): number;
    /**
     * Return length to Y ratio
     */
    getLengthToYRatioAt(): number;
    /**
     * Return clone object.
     * @returns a copy of this transformation
     */
    clone(): Transformation;
    /**
     * Returns transformation parameters as one string
     */
    toString(): string;
    /**
     * Gets translate instance
     * @throws Error if x or y is null
     * @param x x coordinate
     * @param y y coordinate
     * @param [dst] destination transformation object
     * @returns new transformation
     */
    static getTranslateInstance(x: number, y: number, dst?: Transformation): Transformation;
    /**
     * Gets rotate instance
     * @throws Error if x, y or theta is null
     * @param theta angle
     * @param x x coordinate
     * @param y y coordinate
     * @param [dst] destination transformation object
     * @returns new transformation
     */
    static getRotateInstance(theta: number, x: number, y: number, dst?: Transformation): Transformation;
    /**
     * Gets rect to rect transformation
     * @throws Error if source or destination is null
     * @param source source rectangle
     * @param destination destination rectangle
     * @param [horizontalFlip] horizontal flip
     * @param [verticalFlip] vertical flip
     * @param [aspectRatio] keeps aspect ratio
     * @param [dst] destination transformation object
     * @returns new transformation
     */
    static getRectToRectInstance(source: Rect, destination: Rect, horizontalFlip?: boolean, verticalFlip?: boolean, aspectRatio?: boolean, dst?: Transformation): Transformation;
    /**
     * Return true if transformation can be created from source rectangle to destination rectangle.
     * Vertical or horizontal dimension can be empty
     * @param source source rectangle
     * @param destination destination rectangle
     */
    static canCreateRectToRectInstance(source: Rect, destination: Rect): boolean;
    /**
     * Returns transformation based on three (source => destination) point pairs
     * @param src1 first source point
     * @param src2 second source point
     * @param src3 third source point
     * @param dst1 first destination point
     * @param dst2 second destination point
     * @param dst3 third destination point
     * @param [destination] destination transformation object
     */
    static getPointsToPointsInstance(src1: Point, src2: Point, src3: Point, dst1: Point, dst2: Point, dst3: Point, destination?: Transformation): Transformation;
    /**
     * Returns true if transformation can be created from provided source points
     * @param src1 first source point
     * @param src2 second source point
     * @param src3 third source point
     */
    static canCreatePointsToPointsInstance(src1: Point, src2: Point, src3: Point): boolean;
    /**
     * Get a new transformation instance based on scale values
     * @throws Error if scaleX or scaleY is null
     * @param scaleX scale factor along x coordinate
     * @param scaleY scale factor along y coordinate
     * @param [dst] destination transformation object
     * @returns new transformation
     */
    static getScaleInstance(scaleX: number, scaleY: number, dst?: Transformation): Transformation;
    /**
     * Get a new transformation instance based on shear values
     * @throws Error if shx or shy is null
     * @param shx shear coefficient along x coordinate
     * @param shy shear coefficient along y coordinate
     * @param [dst] destination transformation object
     * @returns new transformation
     */
    static getShearInstance(shx: number, shy: number, dst?: Transformation): Transformation;
    /**
     * Multiply two matrices
     *
     * @param a the first matrix
     * @param b the second matrix
     * @param [dst] destination transformation object
     * @returns new transformation
     */
    static multiply(a: Transformation, b: Transformation, dst?: Transformation): Transformation;
    /**
     * Divide two matrices
     *
     * @param a the first matrix
     * @param b the second matrix
     * @param [dst] destination transformation object
     * @returns new transformation
     */
    static divide(a: Transformation, b: Transformation, dst?: Transformation): Transformation;
    /**
     * Gets rotation angle
     * Note: only for transformation without skewing
     * @returns rotation angle
     */
    getAngle(): number;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Transformation {
    /**
     * source object
     */
    type Properties = {
        /**
         * x scale
         */
        xx?: number;
        /**
         * yx skew
         */
        yx?: number;
        /**
         * xy skew
         */
        xy?: number;
        /**
         * y scale
         */
        yy?: number;
        /**
         * x axis translation
         */
        dx?: number;
        /**
         * y axis translation
         */
        dy?: number;
    };
}
