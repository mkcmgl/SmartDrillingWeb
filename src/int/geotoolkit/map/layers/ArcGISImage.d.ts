import { Point } from '@int/geotoolkit/util/Point';
import { Image } from '@int/geotoolkit/map/layers/Image';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
import type { ArcGISFeature } from '@int/geotoolkit/map/layers/ArcGISFeature';
/**
 * This shape connects to an Esri Map Server and displays a single dynamic layer from that server. Supports ArcGIS version 9.3 and higher.
 */
export declare class ArcGISImage extends Image {
    /**
     * Creates layer
     * @param [options] options
     */
    constructor(options?: ArcGISImage.Options);
    on<E extends keyof ArcGISImage.EventMap>(type: E, callback: (eventType: E, sender: this, args: ArcGISImage.EventMap[E]) => void): this;
    off<E extends keyof ArcGISImage.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ArcGISImage.EventMap[E]) => void): this;
    notify<E extends keyof ArcGISImage.EventMap>(type: E, source: ArcGISImage, args?: ArcGISImage.EventMap[E]): this;
    /**
     * Queries layer legend data.
     * WARNING! Only ArcGIS version 10.0 and higher supports this operation.
     * @param [callback] callback to call when the legend data is loaded
     * @returns this
     */
    queryLegend(callback?: (err: Error | null, data?: ArcGISFeature.Legend[]) => void): this;
    hitTest(pt: Point, radius?: number): AbstractFeature[];
}
export declare namespace ArcGISImage {
    /**
     * options
     */
    type Options = Image.Options & {
        /**
         * authorization token for ArcGIS data server (if needed)
         */
        token?: string;
        tooltip?: {
            layers?: number | number[];
        };
    };
    type EventMap = AbstractLayer.EventMap & {};
}
