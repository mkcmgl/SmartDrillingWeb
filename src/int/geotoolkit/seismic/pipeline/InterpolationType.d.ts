/**
 * @module geotoolkit/seismic/pipeline/InterpolationType
 */
/**
 * Enum of seismic pipeline interpolation types
 * @enum
 * @readonly
 */
export declare enum InterpolationType {
    /**
     * Linear
     */
    Linear = "Linear",
    /**
     * Quadratic
     */
    Quadratic = "Quadratic",
    /**
     * Step interpolation
     */
    Step = "Step",
    /**
     * Centered Step interpolation
     */
    CenteredStep = "CenteredStep",
    /**
     * Cubic spline interpolation
     */
    Cubic = "Cubic",
    /**
     * Logarithmic interpolation
     */
    Logarithmic = "Logarithmic"
}
