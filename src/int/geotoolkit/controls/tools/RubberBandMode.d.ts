/**
 * @module geotoolkit/controls/tools/RubberBandMode
 */
/**
 * Enums of RubberBand Selection Mode
 * @readonly
 * @enum
 */
export declare enum RubberBandMode {
    /**
     * Collision
     * will select if the object is touching the section rect
     */
    Collision = "collision",
    /**
     * Inside
     * will only select if the object is completely inside the section rect
     */
    Inside = "inside"
}
