/**
 * @module geotoolkit/scene/shapes/painters/LineAndSymbolPainter
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Rect } from '@int/geotoolkit/util/Rect';
import { IPainter } from '@int/geotoolkit/scene/shapes/painters/IPainter';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
/**
 * Draws line and symbol defined by painter
 */
export declare class LineAndSymbolPainter extends EventDispatcher implements IPainter {
    /**
     * Create LineAndSymbolPainter
     * @param [painter] Painter to be displayed with Horizontal line painter or properties object
     */
    constructor(painter?: LineAndSymbolPainter.Options | SymbolShape.Painter);
    /**
     * Gets all the properties pertaining to the line and symbol painter
     * @returns line and symbol painter properties
     */
    getProperties(): Required<LineAndSymbolPainter.Options>;
    /**
     * Sets all the properties pertaining to this object
     * @param props line and symbol painter properties
     * @returns this
     */
    setProperties(props?: LineAndSymbolPainter.Options): this;
    /**
     * Sets symbol painter for Line Chart
     * @param [painter] Painter to be displayed with Horizontal line painter
     * @returns this
     */
    setPainter(painter: SymbolShape.Painter): this;
    /**
     * Returns symbol painter
     * @returns painter
     */
    getPainter(): (EventDispatcher & IPainter) | SymbolShape.PainterFunction;
    /**
     * Sets style for the line (if it should be different with the symbol)
     * @param style style for the line (if it should be different with the symbol)
     * @returns this
     */
    setLineStyle(style: LineStyle | null): this;
    /**
     * Draw text on context
     * @param context rendering context
     * @param symbol symbol, which uses this painter
     * @param bbox bounding box
     */
    render(context: RenderingContext, symbol: SymbolShape, bbox: Rect): void;
}
export declare namespace LineAndSymbolPainter {
    /**
     * Painter to be displayed with Horizontal line painter or properties object
     */
    type Options = {
        /**
         * Painter to be displayed with Horizontal line painter
         */
        painter?: SymbolShape.Painter;
        /**
         * style for the line (if it should be different with the symbol)
         */
        linestyle?: LineStyle;
    };
}
