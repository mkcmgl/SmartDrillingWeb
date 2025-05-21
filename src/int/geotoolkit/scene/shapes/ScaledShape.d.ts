/**
 * @module geotoolkit/scene/shapes/ScaledShape
 */
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * The abstract class for a number of shapes whose geometry
 * is scaled by specified transformation. The scaled shapes has bounds, which
 * specify geometry bounding box without applying local transformation
 */
export declare abstract class ScaledShape extends Shape {
    /**
     * Return bounds
     * @returns bounds
     */
    abstract getBounds(): Rect | null;
    /**
     * Check collision
     *
     * @param context Rendering Context
     * @returns true if object is inside of rendering area
     */
    checkCollision(context: RenderingContext): boolean;
}
