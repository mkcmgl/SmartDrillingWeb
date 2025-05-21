import type { AbstractHttpService } from '@int/geotoolkit/http/AbstractHttpService';
/**
 * Default data provider for SVG application. Implements standard XMLHttpRequest to load
 * data from the same server that the page was loaded
 */
export declare class SvgDataProvider {
    constructor(options?: SvgDataProvider.Options);
    /**
     * Loads the file accessible by the path parameter provided and passes it to callback
     * @param path Path to the file on server, or url
     * @param cb Callback to call
     */
    loadXmlData(path: string, cb: (error: Error | null, data?: any) => void): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace SvgDataProvider {
    /**
     * options
     */
    type Options = {
        /**
         * http service to make any HTTP request
         */
        httpservice?: AbstractHttpService;
    };
}
