/**
 * A connector for INTGeoServer 'Stream' GridSurfaces
 */
export declare class RemoteGridSurfaceDataSource {
    constructor(options?: RemoteGridSurfaceDataSource.Options);
    /**
     * Retrieves asynchronously the metadata for the gridsurface
     * @param callback Success callback function
     * @param error Error callback function
     */
    readMetadata(callback: (json: any) => void, error: (xhr: XMLHttpRequest) => void): XMLHttpRequest;
    /**
     * Retrieves asynchronously the data for the gridsurface as Float32Array
     * @param callback Success callback function
     * @param error Error callback function
     */
    readDataArray(callback: (data: Float32Array) => void, error: (xhr: XMLHttpRequest) => void): XMLHttpRequest;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace RemoteGridSurfaceDataSource {
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
