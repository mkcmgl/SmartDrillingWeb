import type { AbstractHttpService } from '@int/geotoolkit/http/AbstractHttpService';
/**
 * Provide a container for HTTP service
 */
export declare class HttpClient {
    /**
     * Return instance of the client
     */
    static getInstance(): HttpClient;
    /**
     * Return an instance of http service
     */
    getHttp(): AbstractHttpService;
    /**
     * Sets default instance of HTTP service
     * @param service a new default service
     * @returns this
     */
    setHttp(service: AbstractHttpService): this;
    static getClassName(): string;
    getClassName(): string;
}
