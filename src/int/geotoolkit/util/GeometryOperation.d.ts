/**
 * @module geotoolkit/util/GeometryOperation
 */
/**
 * GeometryOperation. Specifies a type of operation to be applied for clipping
 *
 * @enum
 * @readonly
 */
export declare enum GeometryOperation {
    /**
     * Replaces current area with new one
     */
    Replace = "replace",
    /**
     * Intersects current area with new one
     */
    Intersect = "intersect"
}
