import { Point } from '@int/geotoolkit/util/Point';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { Line } from '@int/geotoolkit/scene/shapes/Line';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * Enum to define types of heads that arrow can have
 * @enum
 * @readonly
 */
export declare enum Heads {
    /**
     * Symbol at start of arrow
     */
    Start = "start",
    /**
     * Symbol at end of arrow
     */
    End = "end",
    /**
     * Symbol on both ends of the arrow
     */
    Both = "both",
    /**
     * No symbols on arrow
     */
    None = "none"
}
/**
 * Defines arrow node, a line with a symbol on one, both, or no ends.
 */
export declare class Arrow extends Line {
    /**
     * @param [options] arrow properties
     */
    constructor(options?: Arrow.Options);
    /**
     * @param [from] origin point of arrow
     * @param [to] endpoint of arrow
     * @param [visible] arrow visible
     * @param [symbolStart] arrow start symbol
     * @param [symbolEnd] arrow end symbol
     * @param [linestyle] line style
     */
    constructor(from?: Point, to?: Point, visible?: boolean, symbolStart?: SymbolShape, symbolEnd?: SymbolShape, linestyle?: LineStyle | string | LineStyle.Options);
    protected copyConstructor(src: Arrow): this;
    /**
     * Sets the symbol to be drawn at the start of the arrow
     *
     * @param symbol symbol to be drawn at the start of the arrow
     * @returns this
     */
    setSymbolStart(symbol: SymbolShape): this;
    /**
     * Sets the symbol to be drawn at the end of the arrow
     *
     * @param symbol symbol to be drawn at the end of the arrow
     * @returns this
     */
    setSymbolEnd(symbol: SymbolShape): this;
    /**
     * Sets the symbol to be drawn at both ends of the arrow
     *
     * @param symbol symbol to be drawn at both ends of the arrow
     * @returns this
     */
    setSymbol(symbol: SymbolShape): this;
    /**
     * Returns arrow start symbol
     * @returns symbol
     */
    getSymbolStart(): SymbolShape;
    /**
     * Returns arrow end symbol
     * @returns symbol
     */
    getSymbolEnd(): SymbolShape;
    /**
     * Set heads
     * @param heads the type of ends that this arrow had
     * @returns this
     */
    setHeads(heads: Heads | string): this;
    /**
     * Returns arrow heads
     * @returns heads the type of ends that this arrow had
     */
    getHeads(): Heads;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Arrow.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     */
    setProperties(properties?: Arrow.Options): this;
}
export declare namespace Arrow {
    /**
     * origin point of arrow or the object with arrow properties
     */
    type Options = Line.Options & {
        /**
         * arrow start symbol
         */
        symbolstart?: SymbolShape | SymbolShape.OptionsOut;
        /**
         * arrow end symbol
         */
        symbolend?: SymbolShape | SymbolShape.OptionsOut;
        /**
         * the type of ends that this arrow had
         */
        heads?: Heads | string;
    };
    /**
     * properties
     */
    type OptionsOut = Line.OptionsOut & {
        /**
         * start symbol
         */
        symbolstart?: SymbolShape;
        /**
         * end symbol
         */
        symbolend?: SymbolShape;
        /**
         * arrow heads visible
         */
        heads: Heads;
    };
}
