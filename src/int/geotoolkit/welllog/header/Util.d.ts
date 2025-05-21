import { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Helper class
 */
export declare class Util {
    /**
     * Symbol size
     */
    static get SymbolSize(): number;
    static fillRectangle(context: RenderingContext, fillStyle: FillStyle, x: Rect): void;
    static fillRectangle(context: RenderingContext, fillStyle: FillStyle, x: number, y: number, w: number, h: number): void;
}
