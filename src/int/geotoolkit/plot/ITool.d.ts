/**
 * @module geotoolkit/plot/ITool
 */
/**
 * Define an interface that implement plot tool
 * @interface
 */
export declare abstract class ITool {
    /**
     * return tool name if any
     * @returns name of the tool
     */
    abstract getName(): string;
    /**
     * set enable state
     * @param enabled sets the enabled state
     * @returns this
     */
    abstract setEnabled(enabled: boolean): this;
    /**
     * returns enable state
     * @returns state
     */
    abstract isEnabled(): boolean;
}
