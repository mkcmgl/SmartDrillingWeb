import type { AbstractVisual } from '@int/geotoolkit/contour/visuals/AbstractVisual';
/**
 * This class stores the colorMap table for the Visuals (AbstractVisual and its derivatives).
 */
export declare class VisualColorMap {
    /**
     * @param [visual] The associated visual
     * @param [colors] the colorMap
     */
    constructor(visual: AbstractVisual, colors?: VisualColorMap);
    constructor(visual?: VisualColorMap.Options);
    /**
     * Gets the colorMap as an array of color strings.
     * @returns colors The colorMap colors in string format.
     */
    getColors(): string[];
    /**
     * Sets the colorMap colors.
     * @param colors The colorMap colors in string format.
     * @returns this
     */
    setColors(colors: string[]): this;
    /**
     * Gets the size of the colorMap.
     * @returns size The size of the colorMap.
     */
    getSize(): number;
    /**
     * Returns the Color for the supplied index.
     * @param index Index for the requested color.
     * @returns color The requested color for this index.
     */
    getColorFor(index: number): string;
    /**
     * Sets the Color object for the supplied colorMap index.
     * This is required for the Editor dialog boxes, and is not used by any of the visuals
     * to modify a supplied colorMap.
     * @param index Index into the colorMap.
     * @param color The new color for this index.
     * @returns this
     */
    setColorFor(index: number, color: string): this;
    /**
     * Make and return a deep copy of this colorMap
     * @returns clone The cloned colorMap.
     */
    clone(): VisualColorMap;
    /**
     * Rotates colors in the colorMap, in a positive direction.
     * Ie. index 0 -> index (delta). Can also handle negative delta values
     * @param nStart Start of range to rotate.
     * @param nEnd End (inclusive) of range to rotate.
     * @param delta The rotation value.
     */
    rotate(nStart: number, nEnd: number, delta: number): void;
    /**
     * Delete the colors in the range nStart->nEnd inclusive.
     * Not used by any of the Visuals classes - only used by the Editor classes.
     * @param start Start of range to delete
     * @param end End of range to delete
     */
    deleteColors(start: number, end: number): void;
    /**
     * Insert a new color into the colorMap.
     * Not used by any of the Visuals classes - only used by the Editor classes.
     * Set nStart to Size to insert at the end of the colorMap
     * @param nStart Index to insert new color at. The color at this index will be copied.
     */
    insertColor(nStart: number): void;
    /**
     * Interpolate colors in the colorMap.
     * Not used by any of the Visuals classes - only used by the Editor classes.
     * @param nStart Start of range to interpolate (this color stays the same)
     * @param nEnd End of range to delete (this color stays the same)
     */
    interpolate(nStart: number, nEnd: number): void;
    /**
     * Gets the colorMap properties
     * @returns colorMap properties
     */
    getProperties(): VisualColorMap.Options;
    /**
     * Sets the colorMap properties
     * @param props colorMap properties
     * @returns this
     */
    setProperties(props?: VisualColorMap.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace VisualColorMap {
    /**
     * The associated visual
     */
    type Options = {
        /**
         * The associated visual
         */
        visual?: AbstractVisual;
        /**
         * The colorMap
         */
        colors?: string[];
    };
}
