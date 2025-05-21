import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Draws a location permit symbol
 *
 * @param symbol symbol
 * @param bbox bounding box
 * @param context rendering context
 */
export declare const LocationPermit: (symbol: SymbolShape, bbox: Rect, context: RenderingContext) => void;
