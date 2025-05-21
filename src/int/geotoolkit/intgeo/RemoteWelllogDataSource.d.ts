/**
 * A connector for INTGeoServer welllogs
 */
export declare class RemoteWelllogDataSource {
    constructor(options?: RemoteWelllogDataSource.Options);
    /**
     * Retrieves asynchronously the metadata for the gridwell
     * @param callback Success callback function
     * @param error Error callback function
     */
    readMetadata(callback: (json: any) => void, error: (xhr: XMLHttpRequest) => void): XMLHttpRequest;
    /**
     * Retrieves asynchronously the data for the well
     * @param curveId The curve to request id
     * @param callback Success callback function
     * @param error Error callback function
     */
    readCurve(curveId: string, callback: (json: any) => void, error: (xhr: XMLHttpRequest) => void): XMLHttpRequest;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace RemoteWelllogDataSource {
    /**
     * The options
     */
    type Options = {
        /**
         * The server url
         */
        server?: string;
        /**
         * The metadata service name
         */
        metaservice?: string;
        /**
         * The data service name
         */
        dataservice?: string;
        /**
         * The file path
         */
        file?: string;
    };
}
