import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Default sea level drawing
 */
export declare class SeaLevelSymbolPainter {
    render(symbol: SymbolShape, bbox: Rect, context: RenderingContext): void;
    static getClassName(): string;
    getClassName(): string;
}
