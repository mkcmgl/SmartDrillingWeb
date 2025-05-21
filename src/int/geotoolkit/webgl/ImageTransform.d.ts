/**
 * Utility class that transforms image with webgl
 */
export declare class ImageTransform {
    /**
     * Transforms image
     * @param image source image
     * @param options options
     * @returns image
     */
    static processImage(image: HTMLImageElement | HTMLCanvasElement, options: ImageTransform.ProcessImageOptions): HTMLCanvasElement;
    /**
     * Dispose
     */
    static dispose(): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace ImageTransform {
    /**
     * options
     */
    type ProcessImageOptions = {
        /**
         * resulting element width
         */
        width: number;
        /**
         * resulting element height
         */
        height: number;
        /**
         * destination coordinates
         */
        destination: {
            /**
             * array of 'x' coordinates to transform (normalized to [0,1])
             */
            x: number[];
            /**
             * array of 'y' coordinates to transform (normalized to [0,1])
             */
            y: number[];
        };
        /**
         * source coordinates
         */
        source: {
            /**
             * array of 'x' transformed coordinates (in device)
             */
            x: number[];
            /**
             * array of 'y' transformed coordinates (in device)
             */
            y: number[];
        };
        /**
         * array of triangles
         */
        triangles?: number[];
    };
}
