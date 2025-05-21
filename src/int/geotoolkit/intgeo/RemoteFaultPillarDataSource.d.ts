/**
 * A connector for INTGeoServer 'Pillar' faults
 */
export declare class RemoteFaultPillarDataSource {
    constructor(options?: RemoteFaultPillarDataSource.Options);
    /**
     * Retrieves asynchronously the metadata for the fault
     * @param callback Success callback function
     * @param error Error callback function
     */
    readMetadata(callback: (json: any) => void, error: (xhr: XMLHttpRequest) => void): XMLHttpRequest;
    /**
     * Retrieves asynchronously the data for the fault as json
     * @param callback Success callback function
     * @param error Error callback function
     */
    readData(callback: (json: any) => void, error: (xhr: XMLHttpRequest) => void): XMLHttpRequest;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace RemoteFaultPillarDataSource {
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
