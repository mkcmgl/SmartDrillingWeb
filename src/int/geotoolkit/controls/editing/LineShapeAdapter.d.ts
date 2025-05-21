/**
 * @module geotoolkit/controls/editing/LineShapeAdapter
 */
import { ShapeAdapter } from '@int/geotoolkit/controls/editing/ShapeAdapter';
import type { Line } from '@int/geotoolkit/scene/shapes/Line';
/**
 * Defines adapter to move and modify a Line shape
 */
export declare class LineShapeAdapter extends ShapeAdapter<Line> {
    constructor();
    /**
     * OnInitialize
     *
     * @returns success true if initialized successfully
     */
    onInitialize(): boolean;
    /**
     * Sets shape
     * @param shape shape to be modified
     * @returns this
     */
    setShape(shape: Line): this;
    /**
     * Active state is changed
     *
     * @param active active state or not
     */
    onActiveStateChanged(active: boolean): void;
    protected onMove(x: number, y: number): this;
    updateHandles(): this;
}
