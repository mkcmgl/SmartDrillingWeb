/**
 * @module geotoolkit/report/resources/ImageMap
 */
import { Image } from '@int/geotoolkit/scene/shapes/Image';
import { IResource } from '@int/geotoolkit/report/resources/IResource';
import { IResourceManager } from '@int/geotoolkit/report/resources/IResourceManager';
import type { ClassType } from '@int/geotoolkit/base';
/**
 * Define simple image map implementation, to resolve images in report specified by it short name
 * @example
 * import {ImageMap} from '@int/geotoolkit/report/resources/ImageMap';
 * import smallLogoPng from './images/logo-small.png';
 * import companyLogoPng from './images/company-logo.png';
 * import barCodePng from './images/bar-code.png';
 * const images = {
 *     'logo-small.png': smallLogoPng,
 *     'company-logo.png': companyLogoPng,
 *     'bar-code.png': barCodePng
 * };
 *
 * const imageMap = new ImageMap();
 * for (const imageName in images) {
 *     if (images.hasOwnProperty(imageName)) {
 *         imageMap.registerImage(imageName, images[imageName]);
 *     }
 * }
 *
 * DOMParser.parse(xmlTemplate)
 *     .then((cgDomDocument) => new Parser(cgDomDocument)
 *         .setResourceManager(imageMap)
 *         .parse())
 *     .then((geoDocument) => widget.loadDocument(geoDocument));
 */
export declare class ImageMap implements IResourceManager {
    /**
     * @param [options] image map options
     */
    constructor(options?: ImageMap.Options);
    /**
     * @param iResourceType
     * @param url
     */
    resolve(iResourceType: ClassType, url: string): IResource | null;
    /**
     * Register image element
     * @param url image URL or name
     * @param image image element or URL
     * @returns this
     */
    registerImage(url: string, image: HTMLImageElement | Image | string): this;
}
export declare namespace ImageMap {
    /**
     * image map options
     */
    type Options = {
        /**
         * lazy loading
         */
        lazyloading?: boolean;
        /**
         * crossorigin to set when loading images
         */
        crossorigin?: string | null;
    };
}
