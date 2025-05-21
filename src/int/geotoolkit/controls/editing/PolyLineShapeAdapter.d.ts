/**
 * @module geotoolkit/controls/editing/PolyLineShapeAdapter
 */
import { ShapeAdapter } from '@int/geotoolkit/controls/editing/ShapeAdapter';
import type { Polyline } from '@int/geotoolkit/scene/shapes/Polyline';
/**
 * Defines adapter to move and modify a positions of the polyline or polygon shape
 */
export declare class PolyLineShapeAdapter extends ShapeAdapter<Polyline> {
    constructor();
    /**
     * OnInitialize
     *
     * @returns success true if initialized successfully
     */
    onInitialize(): boolean;
    setShape(shape: Polyline): this;
    /**
     * Active state is changed
     *
     * @param active active state or not
     */
    onActiveStateChanged(active: boolean): void;
    protected onMove(x: number, y: number): this;
    updateHandles(): this;
}
