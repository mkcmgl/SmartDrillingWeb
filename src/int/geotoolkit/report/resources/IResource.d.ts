/**
 * @module geotoolkit/report/resources/IResource
 */
/**
 * Define resource interface
 * @interface
 */
export declare abstract class IResource {
    /** */
    abstract isReady(): boolean;
    /**
     * Load resource
     */
    abstract load(): Promise<any>;
}
