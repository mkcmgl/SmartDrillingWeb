/**
 * @module geotoolkit/http/HttpError
 */
/**
 * Http error
 */
export declare class HttpError extends Error {
    /**
     * @param message message
     * @param [options] options
     * @param [code] code
     * @param [request] request
     * @param [response] response
     */
    constructor(message: string, options?: any, code?: string, request?: any, response?: any);
    /**
     * name
     * @name module:geotoolkit/http/HttpError~HttpError#name
     */
    get name(): string;
    /**
     * name
     * @name module:geotoolkit/http/HttpError~HttpError#name
     */
    set name(value: string);
    get code(): string;
    /**
     * Return information about error
     */
    toJSON(): HttpError.JSON;
    /**
     * Returns a string representing the specified object
     */
    toString(): string;
}
export declare namespace HttpError {
    type JSON = {
        /**
         * message
         */
        message: string;
        /**
         * error name
         */
        name: string;
        /**
         * error description
         */
        description: string;
        /**
         * error description
         */
        number: number;
        /**
         * file name
         */
        fileName: string;
        /**
         * line number
         */
        lineNumber: string;
        /**
         * column number
         */
        columnNumber: string;
        /**
         * stack
         */
        stack: string;
        /**
         * options
         */
        options: any;
        /**
         * error code
         */
        code: string;
    };
}
