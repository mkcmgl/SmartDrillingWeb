import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Draws a plus bar symbol that can be filled in by color
 *
 * @function
 * @param symbol the parent symbol, used to set properties
 * @param bbox bounding box this symbolPainter should paint within
 * @param context rendering Context
 */
export declare const PlusBarPainter: {
    (symbol: SymbolShape, bbox: Rect, context: RenderingContext): void;
    getClassName(): string;
};
