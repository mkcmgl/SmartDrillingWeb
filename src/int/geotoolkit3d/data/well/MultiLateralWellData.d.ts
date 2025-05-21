/**
 * Multilateral well data combines an array of wells into one object.
 */
export declare class MultiLateralWellData {
    /**
     * @param options The object of wells data
     */
    constructor(options: MultiLateralWellData.Options);
    /**
     * Returns the well data as an array
     */
    getWellArray(): MultiLateralWellData.Data[];
    /**
     * Returns the well data's options
     * @returns options The array of well objects
     */
    getOptions(): MultiLateralWellData.OptionsOut;
    /**
     * Add a well into existing well object
     * @param well The new well object
     * @returns this
     */
    addWell(well: MultiLateralWellData.Data): this;
    /**
     * Get n-th well
     * @param index The index of well
     * @returns The index-th well
     */
    getWell(index: number): MultiLateralWellData.Data | null;
    /**
     * Remove n-th well from current wells
     * @param index The index of well
     * @returns this
     */
    removeWell(index: number): this | null;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace MultiLateralWellData {
    /**
     * The object of wells data
     */
    type Options = {
        /**
         * The array of wells
         */
        data: Data[];
    };
    /**
     * Well data
     */
    type Data = {
        /**
         * The well x coordinate array
         */
        x: number[];
        /**
         * The well y coordinate array
         */
        y: number[];
        /**
         * The elevation of the well
         */
        z: number[];
        /**
         * Colors
         */
        values?: number[];
    };
    type OptionsOut = Data & {
        tops: number[];
        bots: number[];
        num: number;
    };
}
