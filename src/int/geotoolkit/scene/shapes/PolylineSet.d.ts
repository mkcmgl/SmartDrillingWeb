/**
 * @module geotoolkit/scene/shapes/PolylineSet
 */
import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { PolylineSegment } from '@int/geotoolkit/scene/shapes/PolylineSegment';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * The set of polyline shape.
 */
export declare class PolylineSet extends ScaledShape {
    /**
     * @param [options] An object containing the properties to set
     */
    constructor(options?: PolylineSet.Options);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: PolylineSet): this;
    /**
     * Add new polyline segment
     * @param x x-coordinates
     * @param y y-coordinates
     */
    add(x: number[], y: number[]): void;
    /**
     * Return bounds and lock bounds rect from modification.
     * @returns bounds
     */
    getBounds(): Rect;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): PolylineSet.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: PolylineSet.Options): this;
}
export declare namespace PolylineSet {
    /**
     * An object containing the properties to set
     */
    type Options = Shape.Options & {
        /**
         * bounds of the model
         */
        bounds?: Rect;
        /**
         * polyline segment
         */
        segments?: PolylineSegment[];
    };
    /**
     * properties
     */
    type OptionsOut = Shape.OptionsOut & {
        /**
         * bounds of the model
         */
        bounds?: Rect;
        /**
         * polyline segment
         */
        segments?: PolylineSegment[];
    };
}
