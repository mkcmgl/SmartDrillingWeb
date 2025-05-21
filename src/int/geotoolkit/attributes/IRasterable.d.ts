/**
 * @module geotoolkit/attributes/IRasterable
 */
import type { Raster } from '@int/geotoolkit/attributes/Raster';
/**
 * Define an object which can return Raster
 * @interface
 */
export declare abstract class IRasterable {
    /**
     * Returns a new instance of {@link @int/geotoolkit/attributes/Raster~Raster}
     * @param [xMin] x Min position to get color
     * @param [yMin] y Min position to get color
     * @param [xMax] x Max position to get color
     * @param [yMax] y Max position to get color
     */
    abstract getRaster(xMin?: number, yMin?: number, xMax?: number, yMax?: number): Raster;
}
