/**
 * Base image interface
 * @interface
 */
export declare abstract class IBaseImage {
    /**
     * A string that reflects the src HTML attribute, which contains the full URL of the image including base URI.
     * You can load a different image into the element by changing the URL in the src attribute.
     * @type {string}
     */
    abstract get src(): string;
    abstract set src(src: string);
    /**
     * A string that reflects the alt HTML attribute, thus indicating the alternate fallback content to be displayed if the image has not been loaded.
     * @type {number}
     */
    abstract get width(): number;
    abstract set width(width: number);
    /**
     * An integer value that reflects the height HTML attribute, indicating the rendered height of the image in CSS pixels.
     * @type {number}
     */
    abstract get height(): number;
    abstract set height(height: number);
    /**
     * The HTMLImageElement interface's read-only naturalWidth property returns the intrinsic (natural), density-corrected width of the image in CSS pixels.
     * @type {number}
     */
    abstract get naturalWidth(): number;
    /**
     * The HTMLImageElement interface's read-only naturalHeight property returns the intrinsic (natural), density-corrected height of the image in CSS pixels.
     * @type {number}
     */
    abstract get naturalHeight(): number;
    /**
     * A string that reflects the alt HTML attribute, thus indicating the alternate fallback content to be displayed if the image has not been loaded.
     * @type {string}
     */
    abstract get alt(): string;
    abstract set alt(alt: string);
    /**
     * Returns a boolean value that is true if the browser has finished fetching the image, whether successful or not. That means this value is also true if the image has no src value indicating an image to load.
     */
    abstract get complete(): boolean;
    abstract get onload(): Function;
    abstract set onload(onload: Function);
    abstract get onerror(): Function;
    abstract set onerror(onerror: Function);
    /**
     * Native image instance, that can be rendered by native context
     */
    abstract getNativeImage(): any;
    getClassName(): string;
    static getClassName(): string;
}
