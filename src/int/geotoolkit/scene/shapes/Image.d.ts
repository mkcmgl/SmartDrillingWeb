import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import { IBaseImage } from '@int/geotoolkit/platforms/IBaseImage';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
/**
 * Image's Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired when an image is done loading
     */
    ImageLoaded = "ImageLoaded",
    /**
     * Event type fired if an image loading is failed
     */
    ImageFailed = "ImageFailed"
}
/**
 * Defines image node. Image shapes help in manipulating pictures and support all common transformations such as scaling and rotation.<br>
 * Image shapes also support the anchoring technique.
 */
export declare class Image extends AnchoredShape {
    /**
     * @param [options] options
     */
    constructor(options?: Image.Options);
    /**
     * @param [x] left
     * @param [y] top
     * @param [url] Image dataUrls
     * @param [w] width
     * @param [h] height
     * @param [alignment] alignment
     * @param [sizeisindevicespace] image size is in pixel
     */
    constructor(x?: number, y?: number, url?: string, w?: number, h?: number, alignment?: AnchorType, sizeisindevicespace?: boolean);
    on<E extends keyof Image.EventMap>(type: E, callback: (eventType: E, sender: this, args: Image.EventMap[E]) => void): this;
    off<E extends keyof Image.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Image.EventMap[E]) => void): this;
    notify<E extends keyof Image.EventMap>(type: E, source: Image, args?: Image.EventMap[E]): this;
    clone(): Image;
    protected copyConstructor(src: Image, deepCopy?: boolean): this;
    /**
     * LoadImage image
     * @param [callback] callback function
     */
    loadImage(callback?: () => void): void;
    render(context: RenderingContext): void;
    /**
     * Returns this images aspect ratio, width over height
     * @returns ratio
     */
    getAspectRatio(): number;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Image.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties object containing the properties to set
     */
    setProperties(properties?: Image.Options): this;
    /**
     * Gets image element
     * @returns image
     */
    getImage(): IBaseImage;
    /**
     * Returns image url
     * @returns url
     */
    getUrl(): string;
    /**
     * Sets icon bounds for the sprite
     * @param sprite sprite icon bounds or null if image is not a sprite
     * @returns this
     */
    setSprite(sprite: Rect | null): this;
    /**
     * Returns icon bounds if image is a sprite (single image containing multiple icons), null otherwise
     * @returns sprite
     */
    getSprite(): Rect | null;
}
export declare namespace Image {
    /**
     * left or properties object
     */
    type Options = AnchoredShape.Options & {
        /**
         * left
         */
        x?: number;
        /**
         * top
         */
        y?: number;
        /**
         * Image dataUrls
         */
        url?: string;
        /**
         * width
         */
        w?: number;
        /**
         * height
         */
        h?: number;
        /**
         * image smoothing (true, false or undefined) https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
         */
        imagesmoothing?: null | boolean;
        /**
         * an instance of image instead of url
         */
        image?: IBaseImage | HTMLImageElement | HTMLCanvasElement;
        /**
         * alignment
         */
        alignment?: AnchorType;
        /**
         * crossorigin to set when loading images
         */
        crossorigin?: string | null;
        /**
         * if image is a sprite (single image containing multiple icons), set up the rendering icon bounds in device coordinates
         */
        sprite?: Rect;
        /**
         * lazy loading
         */
        lazyloading?: boolean;
        /**
         * alternative text
         */
        alt?: string;
        /**
         * load function
         */
        loadfunction?: (sources: object | Array<string>, callback: (images: {
            image: IBaseImage;
        }) => void, crossOrigin?: string) => void;
    };
    /**
     * properties
     */
    type OptionsOut = AnchoredShape.OptionsOut & {
        /**
         * Image dataUrls
         */
        url: string;
        /**
         * alternative text
         */
        alt: string;
        /**
         * image
         */
        image: IBaseImage;
        /**
         * image smoothing
         */
        imagesmoothing: boolean;
        /**
         * cross origin to set when loading images
         */
        crossorigin?: string;
        /**
         * lazy loading
         */
        lazyloading?: boolean;
    };
    type EventMap = AbstractNode.EventMap & {
        [Events.ImageLoaded]: string;
        [Events.ImageFailed]: string;
    };
}
