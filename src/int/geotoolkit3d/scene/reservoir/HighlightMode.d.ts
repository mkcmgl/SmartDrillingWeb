/**
 * @module geotoolkit3d/scene/reservoir/HighlightMode
 */
/**
 * Enum of Reservoir Highlighting Modes.<br>
 * <br>
 * The values of this enums can be used to determine the highlight mode of a reservoir.
 * @enum
 * @readonly
 */
export declare enum HighlightMode {
    /**
     * When user clicks the reservoir, the face(s) exposed to user will be highlighted
     */
    FrontFace = "frontface",
    /**
     * When user clicks the reservoir, the selected cell will be highlighted
     * @deprecated Since geotoolkit 3.4, HighlightMode.Cell is deprecated. Use FrontFace mode instead.
     */
    Cell = "cell",
    /**
     * The highlight effect is disabled
     */
    None = "none"
}
