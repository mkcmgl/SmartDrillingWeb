import { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import { SeismicImage } from '@int/geotoolkit/seismic/image/SeismicImage';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Defines seismic image to render data from seismic pipeline
 */
export declare class WaveSeismicImage extends SeismicImage {
    /**
     * @param [options] represents seismic data or options object
     * @param [x1] model coordinate in the parent object.
     * @param [y1] model coordinate in the parent object.
     * @param [x2] model coordinate in the parent object.
     * @param [y2] model coordinate in the parent object.
     */
    constructor(options?: SeismicImage.Options | SeismicPipeline, x1?: number, y1?: number, x2?: number, y2?: number);
    /**
     * Sets the location and size of the framing rectangle of this
     * rectangular shape to the specified values. This method is the same as setRect.
     *
     * @param rect bounds rect
     * @returns this
     */
    setBounds(rect: Rect): this;
    /**
     * Sets the location and size of the framing rectangle of this
     * rectangular shape to the specified values. This method is the same as setRect.
     *
     * @param x1 x coordinate of the top left corner
     * @param y1 y coordinate of the top left corner
     * @param x2 x coordinate of the bottom right corner
     * @param y2 y coordinate of the bottom right corner
     * @returns this
     */
    setBounds(x1: number | Rect, y1: number, x2: number, y2: number): this;
    invalidateParent(bounds: Rect | undefined | null, force?: boolean): this;
}
