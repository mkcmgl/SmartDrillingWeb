/**
 * data object
 */
export declare type PickSampleCallbackData = {
    /**
     * trace id
     */
    traceId?: number;
    /**
     * trace number
     */
    traceNumber: number;
    /**
     * trace header
     */
    traceHeader: null | {
        /**
         * trace header
         */
        header?: any;
        /**
         * trace header data
         */
        data?: any;
    } | number;
    /**
     * sample index
     */
    sampleIndex: number;
    /**
     * sample value
     */
    sampleValue: number;
    /**
     * location
     */
    location?: {
        /**
         * x
         */
        x: number;
        /**
         * y
         */
        y: number;
    };
};
/**
 * Callback for pickSample
 */
export declare type pickSampleCallback = (data: PickSampleCallbackData) => void;
