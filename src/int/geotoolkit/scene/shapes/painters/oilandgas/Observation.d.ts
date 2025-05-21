import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Draws a Observation symbol
 *
 * @function
 * @param symbol symbol
 * @param bbox bounding box
 * @param context rendering context
 */
export declare const Observation: (symbol: SymbolShape, bbox: Rect, context: RenderingContext) => void;
