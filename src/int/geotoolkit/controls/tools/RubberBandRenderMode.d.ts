/**
 * @module geotoolkit/controls/tools/RubberBandRenderMode
 */
/**
 * Enum for the rendering of the rubber band tool
 * @readonly
 * @enum
 */
export declare enum RubberBandRenderMode {
    /**
     * As is - no modifications to resize area
     */
    Free = "Free",
    /**
     * Horizontal resize only
     */
    Horizontal = "Horizontal",
    /**
     * Vertical resize only
     */
    Vertical = "Vertical",
    /**
     * Keep aspect ratio resize
     */
    AspectRatio = "AspectRatio"
}
