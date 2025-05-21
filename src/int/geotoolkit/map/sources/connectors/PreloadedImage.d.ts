/**
 * @module geotoolkit/map/sources/connectors/PreloadedImage
 */
import { DOMImage } from '@int/geotoolkit/map/sources/connectors/DOMImage';
import { HttpRequest } from '@int/geotoolkit/map/sources/connectors/HttpRequest';
import { Image } from '@int/geotoolkit/scene/shapes/Image';
/**
 * Source connector that sends http requests to load the data, and after that creates DOM image with the received base64 data
 * This approach allows user to effectively abort the requests, if necessary, and the DOM image data reload occurs quickly due to browser cache
 */
export declare class PreloadedImage extends DOMImage {
    /**
     * @param [options] options
     */
    constructor(options?: HttpRequest.Options);
    send(url: string, options: PreloadedImage.SendOptions | null, callback: (err: Error | null, data?: Image) => void): void;
}
export declare namespace PreloadedImage {
    type SendOptions = HttpRequest.SendOptions & DOMImage.Options;
}
