/**
 * Defines bar series of TimeSeries
 */
export declare class BarSeries {
    constructor(barSeriesObject: BarSeries.Options);
    /**
     * Get bar series
     * @returns BarSeries setting
     */
    getBarSeries(): BarSeries.OptionsOut;
    /**
     * Compare to other bar series
     * @param otherBarSeries Other bar series
     * @returns True if this bar series is the same with other bar series, false otherwise
     */
    compareTo(otherBarSeries: BarSeries): boolean;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace BarSeries {
    /**
     * BarSeries setting
     */
    type Options = {
        /**
         * Index of data in x coordinate
         */
        datapointindex: number;
        /**
         * Index of curve
         */
        lineindex: number;
        /**
         * Bar left coordinate in model space
         */
        barleft: number;
        /**
         * Bar bottom coordinate in model space
         */
        barbottom: number;
        /**
         * Bar height in model space
         */
        barheight: number;
        /**
         * Bar width in model space
         */
        barwidth: number;
        /**
         * Bar value
         */
        barvalue: number;
        /**
         * Formatted bar value
         */
        text?: string;
        /**
         * Bar value text anchor x
         */
        textax?: number;
        /**
         * Bar value text anchor y
         */
        textay?: number;
        /**
         * Bar value text width
         */
        textwidth?: number;
        /**
         * Bar value text height
         */
        textheight?: number;
    };
    /**
     * BarSeries setting
     */
    type OptionsOut = {
        /**
         * Index of data in x coordinate
         */
        datapointindex: number;
        /**
         * Index of curve
         */
        lineindex: number;
        /**
         * Bar left coordinate in model space
         */
        barleft: number;
        /**
         * Bar bottom coordinate in model space
         */
        barbottom: number;
        /**
         * Bar height in model space
         */
        barheight: number;
        /**
         * Bar width in model space
         */
        barwidth: number;
        /**
         * Bar value
         */
        barvalue: number;
        /**
         * Formatted bar value
         */
        text: string;
        /**
         * Bar value text anchor x
         */
        textax: number;
        /**
         * Bar value text anchor y
         */
        textay: number;
        /**
         * Bar value text width
         */
        textwidth: number;
        /**
         * Bar value text height
         */
        textheight: number;
    };
}
