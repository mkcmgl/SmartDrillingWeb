/**
 * @module geotoolkit/map/sources/connectors/DOMImage
 */
import { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
import { Image } from '@int/geotoolkit/scene/shapes/Image';
/**
 * Source connector that sends requests by creating DOM image with appropriate url
 */
export declare class DOMImage extends AbstractConnector<DOMImage.Connection> {
    constructor();
    send(url: string, options: DOMImage.Options | null, callback: (err: Error | null, data?: Image) => void): void;
    protected abortConnection(connection: DOMImage.Connection): this;
}
export declare namespace DOMImage {
    /**
     * extra options for the request (null if no needed)
     */
    type Options = AbstractConnector.SendOptions & {
        /**
         * destination image if there's no need to create a new object
         */
        dst?: Image;
    };
    type Connection = {
        image: Image;
        onload: () => void;
    };
}
