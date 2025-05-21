/**
 * @module geotoolkit/util/BlendMode
 */
/**
 * Describes how colors should appear when elements overlap
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode|blend-mode}
 * @enum
 * @readonly
 */
export declare enum BlendMode {
    /**
     * This attribute applies no blending whatsoever
     */
    Normal = "Normal",
    /**
     * The element is multiplied by the background
     * and replaces the background color. The resulting
     * color is always as dark as the background.
     */
    Multiply = "Multiply"
}
