/**
 * @module geotoolkit/seismic/pipeline/QueryType
 */
/**
 * SeismicPipeline's Query type enumerator.
 * These types are used with select option
 * @readonly
 * @enum
 */
export declare enum QueryType {
    /**
     * Query type to use from and to in the model coordinate of the pipeline
     */
    Model = "model",
    /**
     * Query type to use from and to in trace coordinates of pipeline
     */
    Trace = "trace"
}
