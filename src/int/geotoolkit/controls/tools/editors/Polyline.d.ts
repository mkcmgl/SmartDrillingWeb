import { Polygon as PolygonShape } from '@int/geotoolkit/scene/shapes/Polygon';
import { Polygon } from '@int/geotoolkit/controls/tools/editors/Polygon';
import { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
/**
 * Polyline editor can be used to create and modify {@link @int/geotoolkit/scene/shapes/Polyline~Polyline} shapes
 */
export declare class Polyline extends Polygon {
    /**
     * @param [options] editor options
     */
    constructor(options?: Polygon.Options);
    /**
     * Convert active shape to Polygon
     */
    close(): PolygonShape;
    /**
     * Start to add joint point at specified node index (can be 0 or end index)
     * @param index start or end polyline index
     * @param eventArgs event args
     * @returns this
     */
    addPointAt(index: number, eventArgs?: EventArgs | Event): this;
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: Polygon.Options): this;
}
