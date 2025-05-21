/**
 * @module geotoolkit/map/sources/connectors/WebSocket
 */
import { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
import { $window } from '@int/geotoolkit/window';
/**
 * Source connector that sends requests by creating WebSocket
 */
export declare class WebSocket extends AbstractConnector<InstanceType<typeof $window.WebSocket>> {
    constructor();
    send(url: string, options: AbstractConnector.SendOptions | null, callback: (err: Error | null, data?: Record<string, any> | string) => void): void;
    protected abortConnection(connection: InstanceType<typeof $window.WebSocket>): this;
}
