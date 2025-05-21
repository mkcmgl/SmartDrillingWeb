/**
 * @module geotoolkit/map/sources/connectors/Stub
 */
import { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
/**
 * Source connector that simulates the request sending and receives the predefined object
 */
export declare class Stub extends AbstractConnector {
    /**
     * @param [options] options
     */
    constructor(options?: Stub.Options);
    send(url: string, options: AbstractConnector.SendOptions | null, callback: (err: Error | null, data?: Record<string, any> | string) => void): void;
}
export declare namespace Stub {
    /**
     * options
     */
    type Options = {
        /**
         * the predefined data object
         */
        data?: Record<string, any> | string;
    };
}
