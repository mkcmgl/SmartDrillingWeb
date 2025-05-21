/**
 * @module geotoolkit/scene/shapes/painters/IPainter
 */
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
/**
 * Define an interface to support a simple iteration over a nodes
 * @interface
 */
export declare abstract class IPainter {
    /**
     * Renders node
     * @param context The rendering context to be used to draw the node
     */
    abstract render(context: RenderingContext, symbol: SymbolShape, bbox: Rect): void;
}
