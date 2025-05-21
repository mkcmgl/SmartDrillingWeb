/**
 * @module geotoolkit/welllog/IExtendedDataSymbol
 */
/**
 * Extended data symbol interface
 * @interface
 */
export declare abstract class IExtendedDataSymbol<T extends any> {
    /**
     * Sets data from data source to symbol
     * @param data data
     * @returns this
     */
    abstract setMetaInfo(data: T): this;
    /**
     * Returns data from symbol
     */
    abstract getMetaInfo(): T;
    /**
     * Check data from source, true if source contains info for symbol
     * @param data data
     */
    abstract acceptMetaInfo(data: T): boolean;
}
