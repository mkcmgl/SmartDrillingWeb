import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Interface for node, that can have own model limits
 * @interface
 */
export declare abstract class IModel {
    /**
     * Gets model limits, the limits of this node inside space.
     */
    abstract getModelLimits(): Rect | null;
    /**
     * Get the bounds in the parents model space.
     */
    abstract getBounds(): Rect | null;
}
