import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Draws a cross symbol
 *
 * @function
 * @param symbol the parent symbol, used to set properties
 * @param bbox bounding box this symbolPainter should paint within
 * @param context rendering Context
 */
export declare const CrossPainter: {
    (symbol: SymbolShape, bbox: Rect, context: RenderingContext): void;
    getClassName(): string;
};
