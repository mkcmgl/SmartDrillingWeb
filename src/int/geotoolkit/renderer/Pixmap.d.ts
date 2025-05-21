/**
 * @module geotoolkit/renderer/Pixmap
 */
import { Raster } from '@int/geotoolkit/attributes/Raster';
import type { TypedArray } from '@int/geotoolkit/util/TypedArray';
/**
 * Represent interface for an off-screen image representation
 */
export declare class Pixmap extends Raster {
    /**
     * Return a one-dimensional array containing the data in the
     * RGBA order, with integer values between 0 and 255 (included).
     * @returns the actual width, a one-dimensional array containing the data in the
     * RGBA order, with integer values between 0 and 255 (included).
     */
    getData(): TypedArray;
}
