import { AbstractHttpService } from '@int/geotoolkit/http/AbstractHttpService';
/**
 * The base abstract class for data sources that can load data from IVAAP backend
 */
export declare abstract class AbstractRemoteDataSource<T extends object> {
    /**
     * Creates a new instance of {@link @int/geotoolkit/ivaapbackend/AbstractRemoteDataSource~AbstractRemoteDataSource} class
     * @param [options] options
     * @throws {Error} if proper http service was not passed
     */
    protected constructor(options?: AbstractRemoteDataSource.Options);
    /**
     * Loads meta data
     * @param url url of meta information
     */
    abstract loadMeta(url: string): Promise<T>;
    /**
     * Gets a http service associated with this data source
     */
    protected getHttpService(): AbstractHttpService;
    /**
     * Sets a http service associated with this data source
     * @param service the http service
     */
    protected setHttpService(service: AbstractHttpService): this;
    /**
     * Gets host name
     */
    protected getHostName(): string;
    /**
     * Sets host name
     * @param host the host name
     */
    protected setHostName(host: string): this;
    /**
     * Dispose
     */
    dispose(): void;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: AbstractRemoteDataSource.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties
     */
    getProperties(): AbstractRemoteDataSource.OptionsOut;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractRemoteDataSource {
    /**
     * The data source options
     */
    type Options = {
        /**
         * HTTP request headers as key-value pair. If it is specified then it will be applied
         */
        requestheaders?: Record<string, any>;
        /**
         * The http service to make any HTTP request
         */
        httpservice?: AbstractHttpService;
        /**
         * The host name for requests
         */
        hostname?: string;
    };
    /**
     * The data source options
     */
    type OptionsOut = {
        /**
         * HTTP request headers as key-value pair. If it is specified then it will be applied
         */
        requestheaders: Record<string, any>;
        /**
         * The http service to make any HTTP request
         */
        httpservice: AbstractHttpService;
        /**
         * The host name for requests
         */
        hostname?: string;
    };
}
