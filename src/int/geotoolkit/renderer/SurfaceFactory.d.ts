import type { Surface } from '@int/geotoolkit/renderer/Surface';
/**
 * Surface factory
 */
export declare class SurfaceFactory {
    /**
     * Create surface
     * @param width The width of the surface. Must be greater than zero
     * @param height The height of the surface. Must be greater than zero
     * @param [devicePixel] If set to true, width and height will be used as 'device' pixels.
     * @param [adjust] If set to true, (x,y) will be snapped to pixel and adjusted with browser scale
     * @param [pixelScale] pixel scale, equals {@link @int/geotoolkit/base~getPixelScale}() by default
     */
    static createCanvasSurface(width: number, height: number, devicePixel?: boolean, adjust?: boolean, pixelScale?: number): Surface;
    static createCanvasSurface(options?: Surface.Options): Surface;
    static getClassName(): string;
    getClassName(): string;
}
