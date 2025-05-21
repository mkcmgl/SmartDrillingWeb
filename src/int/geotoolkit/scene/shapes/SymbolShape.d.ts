import { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { IPainter } from '@int/geotoolkit/scene/shapes/painters/IPainter';
/**
 * Symbols are shapes created using Symbol Painters (geotoolkit.scene.shapes.painters). It has built-in function to draw the shape based on the selected painter.
 */
export declare class SymbolShape extends AnchoredShape implements INodeEnumerable {
    /**
     * Create SymbolShape
     * @param [options] symbol shape options
     */
    constructor(options?: SymbolShape.Options);
    /**
     * Create SymbolShape
     * @param [ax] anchor x position
     * @param [ay] anchor y position
     * @param [width] symbol width
     * @param [height] symbol height
     * @param [alignment] anchor type of symbol
     * @param [sizeisindevicespace] flag to indicate if size of the symbol in device
     * @param [painter] a function with has parameters: symbol, box, context or object, which must have method render at least
     * @param [lineStyle] line style of symbol
     * @param [fillStyle] fill style of symbol
     */
    constructor(ax?: number, ay?: number, width?: number, height?: number, alignment?: AnchorType, sizeisindevicespace?: boolean, painter?: SymbolShape.Painter, lineStyle?: LineStyle | string | LineStyle.Options, fillStyle?: FillStyle | string | FillStyle.Options);
    clone(): SymbolShape;
    protected copyConstructor(src: SymbolShape, deepCopy?: boolean): this;
    enumerateNodes(callback: (n: Node, x: any) => void, target: any): void;
    /**
     * Sets painter function for this symbol.
     *
     * @param painter painter function for this symbol
     * @returns this
     */
    setPainter(painter: SymbolShape.Painter): this;
    /**
     * Get painter function
     */
    getPainter(): (EventDispatcher & IPainter) | SymbolShape.PainterFunction;
    /**
     * Set cache flag
     * @param useCache cache flag
     * @returns this
     */
    setCache(useCache: boolean): this;
    /**
     * Get cache flag
     */
    hasCache(): boolean;
    render(context: RenderingContext): void;
    /**
     * Draw
     * @param context Rendering Context
     * @returns this
     */
    draw(context: RenderingContext): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): SymbolShape.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     * @returns this
     */
    setProperties(properties?: SymbolShape.Options): this;
}
export declare namespace SymbolShape {
    /**
     * anchor x position
     */
    type Options = AnchoredShape.Options & {
        /**
         * set it to true if you want to cache complex geometry to raster
         */
        cache?: boolean;
        /**
         * anchor type of symbol
         */
        alignment?: AnchorType;
        /**
         * a function with has parameters: symbol, box, context
         */
        painter?: Painter;
        /**
         * symbol's painter's properties
         */
        painterproperties?: any;
    };
    type PainterFunction = (symbol: SymbolShape, bbox: Rect, context: RenderingContext) => void;
    /**
     * properties
     */
    type OptionsOut = AnchoredShape.OptionsOut & {
        /**
         * symbol's cache flag
         */
        cache: boolean;
        /**
         * symbol's painter's className
         */
        painter: string;
        /**
         * symbol's painter's properties
         */
        painterproperties?: any;
    };
    type Painter = string | (EventDispatcher & IPainter) | PainterFunction;
}
