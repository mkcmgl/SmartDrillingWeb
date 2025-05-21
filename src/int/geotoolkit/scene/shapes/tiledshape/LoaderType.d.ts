/**
 * @module geotoolkit/scene/shapes/tiledshape/LoaderType
 */
/**
 * Tile receiver mode
 * @enum
 * @readonly
 */
export declare enum LoaderType {
    /**
     * Image - use if tile receiver will get image
     */
    Image = "Image",
    /**
     * Base64 - use if tile receiver will get base64 of image
     */
    Base64 = "Base64",
    /**
     * Canvas - use if tile receiver will get canvas with drawn image
     */
    Canvas = "Canvas"
}
