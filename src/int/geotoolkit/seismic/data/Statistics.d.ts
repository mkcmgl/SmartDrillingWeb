/**
 * Define statistics to be used in pipeline normalization. It includes
 * minimum, maximum, average, rms of seismic data source
 */
export declare type Statistics = {
    /**
     * minimum
     */
    min: number;
    /**
     * maximum
     */
    max: number;
    /**
     * average
     */
    average: number;
    /**
     * rms
     */
    rms: number;
};
