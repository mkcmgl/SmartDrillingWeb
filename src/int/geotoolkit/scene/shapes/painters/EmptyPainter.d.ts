import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Draws nothing. The class is implemented to keep current behavior
 * of {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape} rendering in case its painter is set to "null".
 *
 * @param symbol the parent symbol, used to set properties
 * @param bbox bounding box this symbolPainter should paint within
 * @param context Rendering Context
 */
export declare const EmptyPainter: (symbol: SymbolShape, bbox: Rect, context: RenderingContext) => void;
