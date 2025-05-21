/**
 * @module geotoolkit/scene/shapes/painters/GeometryPainter
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Group } from '@int/geotoolkit/scene/Group';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import { IPainter } from '@int/geotoolkit/scene/shapes/painters/IPainter';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Draws specified geometry
 */
export declare class GeometryPainter extends EventDispatcher implements INodeEnumerable, IPainter {
    constructor(options?: {
        geometry?: Group | null;
    } | Group);
    /**
     * Returns clone
     * @returns clone
     */
    clone(): GeometryPainter;
    enumerateNodes(callback: (n: Node, x: any) => void, target: any): void;
    /**
     * Set geometry
     * @param geometry root geometry
     */
    setGeometry(geometry: Group | null): this;
    /**
     * Return geometry
     * @returns geometry
     */
    getGeometry(): Group | null;
    /**
     * Renders parsed svg file on provided context
     * @param context Rendering context
     * @param symbol symbol to render
     * @param bbox Bounds of the symbol in context transformation
     */
    render(context: RenderingContext, symbol: SymbolShape, bbox: Rect): void;
}
