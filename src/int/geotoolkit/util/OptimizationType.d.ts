/**
 * Enum of rendering optimization types
 * @enum
 * @readonly
 */
export declare enum OptimizationType {
    /**
     * Filter points which are close to each other and are rendered in one pixel
     */
    FilterClosePoints = "FilterClosePoints",
    /**
     * Ramer–Douglas–Peucker optimization
     */
    RDP = "RDP"
}
