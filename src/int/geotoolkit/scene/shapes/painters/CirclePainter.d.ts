import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Draws a circle symbol
 *
 * @param symbol the parent symbol, used to set properties
 * @param bbox bounding box this symbolPainter should paint within
 * @param context Rendering Context
 */
export declare const CirclePainter: {
    (symbol: SymbolShape, bbox: Rect, context: RenderingContext): void;
    getClassName(): string;
};
