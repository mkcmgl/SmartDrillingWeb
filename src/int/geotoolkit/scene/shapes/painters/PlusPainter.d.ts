import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Draws a plus symbol
 *
 * @function
 * @param symbol symbol
 * @param bbox bounding box this symbolPainter should paint within
 * @param context rendering Context
 */
export declare const PlusPainter: {
    (symbol: SymbolShape, bbox: Rect, context: RenderingContext): void;
    getClassName(): string;
};
