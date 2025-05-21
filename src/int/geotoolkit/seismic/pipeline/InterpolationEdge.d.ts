/**
 * @module geotoolkit/seismic/pipeline/InterpolationEdge
 */
/**
 * Enum of interpolation edge behavior, specify how interpolation will handle edges (beginning and end) of data
 * @enum
 * @readonly
 */
export declare enum InterpolationEdge {
    /**
     * Use a value of 0 when interpolation needs value beyond the edge of the data
     */
    Zero = "Zero",
    /**
     * Duplicate the nearest value when interpolation needs value beyond the edge of the data
     */
    Duplicate = "Duplicate"
}
