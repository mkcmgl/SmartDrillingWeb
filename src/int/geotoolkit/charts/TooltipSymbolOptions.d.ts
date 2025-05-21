import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
/**
 * Define symbol options
 */
export declare type TooltipSymbolOptions = {
    /**
     * Width of the symbol
     */
    width?: number;
    /**
     * Height of the symbol
     */
    height?: number;
    /**
     * Painter function
     * @param symbol symbol to paint
     * @param bbox area to paint
     * @param context rendering context
     */
    painter?: SymbolShape.Painter;
    /**
     * Line style
     */
    linestyle?: LineStyle.Type;
    /**
     * Fill style
     */
    fillstyle?: FillStyle.Type;
};
