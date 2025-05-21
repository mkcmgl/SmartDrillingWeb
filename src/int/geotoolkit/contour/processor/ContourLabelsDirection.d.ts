/**
 * @module geotoolkit/contour/processor/ContourLabelsDirection
 */
/**
 * Direction rendering Labels.
 * @enum
 * @readonly
 */
export declare enum ContourLabelsDirection {
    /**
     * By default labels are rendered along isoline upside up.
     */
    Default = "Default",
    /**
     * Labels are rendered towards positive gradient of the isoline
     */
    TowardsIsolineGradient = "TowardsIsolineGradient",
    /**
     * Labels are rendered towards negative gradient of the isoline
     */
    AwayFromIsolineGradient = "AwayFromIsolineGradient"
}
