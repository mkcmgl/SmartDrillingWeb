/**
 * States ViewMode.KeepAspectRatio "regular" effective range height calculator interface
 * @interface
 */
export declare abstract class IGetRangeHeight {
    /**
     * Calculates range effective height
     * @param kars array of KeepAspectRatio-elements infos
     * @returns range height
     */
    abstract getHeight(kars: {
        effectiveheight: number;
    }[]): number;
    getClassName(): string;
    static getClassName(): string;
}
