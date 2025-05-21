import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Position
 * @enum
 * @readonly
 */
export declare enum Position {
    /**
     * Left
     */
    Left = "Left",
    /**
     * Right
     */
    Right = "Right",
    /**
     * Both
     */
    Both = "Both"
}
/**
 * Defines visual to displayed blocks of the depths
 */
export declare class LogBlock extends LogAbstractVisual {
    /**
     * @param [options] An object containing the properties to set
     */
    constructor(options?: LogBlock.Options);
    clone(): LogBlock;
    protected copyConstructor(src: LogBlock, deepCopy?: boolean): this;
    /**
     * Sets reference depths
     * @param depths an array of numbers specifying point along the track
     */
    setReferenceDepths(depths: number[]): this;
    /**
     * Sets depths
     * @param depths an array of numbers
     */
    setDepths(depths: number[]): this;
    /**
     * Gets position
     */
    getPosition(): Position;
    /**
     * Sets position
     *
     * @param pos position(left or right or both)
     * @returns this
     */
    setPosition(pos: Position): this;
    /**
     * Gets fill style
     */
    getFillStyle(): FillStyle | null;
    /**
     * Sets fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    render(inputContext: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): LogBlock.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogBlock.Options): this;
}
export declare namespace LogBlock {
    /**
     * An object containing the properties to set
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * position (left or right or both)
         */
        position?: Position;
        /**
         * The fill style
         */
        fillstyle?: FillStyle.Type;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * position (left or right or both)
         */
        position: Position;
        /**
         * The fill style
         */
        fillstyle: FillStyle;
    };
}
