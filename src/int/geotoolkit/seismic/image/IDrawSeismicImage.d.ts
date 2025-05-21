/**
 * @module geotoolkit/seismic/image/IDrawSeismicImage
 */
import type { SeismicImage } from '@int/geotoolkit/seismic/image/SeismicImage';
/**
 * Define an interface to provide rendering seismic image
 * @interface
 */
export declare abstract class IDrawSeismicImage {
    /**
     * Draw seismic image
     * @param image seismic image
     * @param callback callback function
     */
    abstract drawSeismicImage(image: SeismicImage, callback: () => void): void;
}
