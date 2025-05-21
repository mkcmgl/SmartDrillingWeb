import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Create the standard representation of a well linear value grid.
 */
export declare class LogLinearValueGrid extends LogAbstractVisual {
    /**
     * Constructor
     * @param [options] number of lines by default 10 or properties object
     */
    constructor(options?: LogLinearValueGrid.Options | number);
    clone(): LogLinearValueGrid;
    protected copyConstructor(src: LogLinearValueGrid, deepCopy?: boolean): this;
    /**
     * Return counts line
     */
    getLinesCount(): number;
    /**
     * Sets lines count
     *
     * @param linesCount number of lines to display
     */
    setLinesCount(linesCount: number): this;
    /**
     * Sets first and the last line visible. It is visible by default
     * @param visible show / hide the edge lines
     */
    setVisibleEdgeLines(visible: boolean): this;
    /**
     * Returns visible edge lines
     * @returns the visibility of the edge lines
     */
    getVisibleEdgeLines(): boolean;
    /**
     * return meaning data limits
     *
     * @param fullLimits default value is false
     */
    getDataLimits(fullLimits?: boolean): Rect | null;
    /**
     * Return bound in the parent coordinates
     */
    getBounds(): Rect | null;
    /**
     * Sets _bounds of the curve in the parent coordinates
     *
     * @param bounds _bounds or position of the visual
     * @returns this
     */
    setBounds(bounds: Rect): this;
    render(context: RenderingContext): void;
    /**
     * Put grid inside track (to avoid clipping)
     * @param inside default is false
     * @returns this
     */
    setInsideTrack(inside: boolean): this;
    /**
     * Get grid state, is it inside track or not
     */
    isInsideTrack(): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): LogLinearValueGrid.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: LogLinearValueGrid.Options): this;
}
export declare namespace LogLinearValueGrid {
    /**
     * number of lines by default 10 or properties object
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * number of lines to display
         */
        linescount?: number;
        /**
         * edge object
         */
        edge?: {
            /**
             * show / hide the edge lines
             */
            visible?: boolean;
        };
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * number of lines to display
         */
        linescount: number;
        /**
         * edge object
         */
        edge: {
            /**
             * show / hide the edge lines
             */
            visible: boolean;
        };
    };
}
