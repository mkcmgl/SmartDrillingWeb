/**
 * @module geotoolkit/controls/tools/MeasureEvents
 */
/**
 * Events fired by {@link @int/geotoolkit/controls/tools/Measure~Measure} tool
 * @enum
 * @readonly
 */
export declare enum MeasureEvents {
    /**
     * Distance measured with polyline has changed
     */
    DistanceChanged = "DistanceChanged",
    /**
     * Area measured with polygon has changed
     */
    AreaChanged = "AreaChanged",
    /**
     * Measures defined by current mouse position were changed
     */
    PositionChanged = "PositionChanged"
}
