/**
 * @module geotoolkit/controls/editing/TextShapeAdapter
 */
import { RectangularShapeAdapter } from '@int/geotoolkit/controls/editing/scaling/RectangularShapeAdapter';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Text } from '@int/geotoolkit/scene/shapes/Text';
/**
 * Defines adapter to move text shape
 */
export declare class TextShapeAdapter<T extends Text> extends RectangularShapeAdapter<T> {
    /**
     * OnInitialize
     *
     * @returns success true if initialized successfully
     */
    onInitialize(): boolean;
    /**
     * Sets shape
     * @param shape shape to be set
     */
    setShape(shape: T): this;
    /**
     * Active state is changed
     *
     * @param active active state or not
     */
    onActiveStateChanged(active: boolean): void;
    /**
     * Return shape bounds
     * @returns bounds
     */
    getShapeBounds(): Rect;
    /**
     * Update handles
     * @returns this
     */
    updateHandles(): this;
}
