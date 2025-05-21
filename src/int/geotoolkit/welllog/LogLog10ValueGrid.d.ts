import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Create a logarithmic value grid where you can specify a count of decades as shown in example
 *
 * @example
 * const grid = new LogLog10ValueGrid(3);
 */
export declare class LogLog10ValueGrid extends LogAbstractVisual {
    /**
     * Constructor
     * @param [options] options object
     */
    constructor(options?: LogLog10ValueGrid.Options);
    /**
     * Constructor
     * @param [number] number of decades to be displayed
     * @param [intermediate] enables or disables display of minor lines in the grid
     */
    constructor(number?: number, intermediate?: boolean);
    clone(): LogLog10ValueGrid;
    protected copyConstructor(src: LogLog10ValueGrid, deepCopy?: boolean): this;
    /**
     * Enable or disable reverse direction
     *
     * @param reverse enables or disables reverse direction
     * @returns this
     */
    setReverse(reverse: boolean): this;
    /**
     * Returns reverse direction flag
     * @returns reverse direction flag
     */
    getReverse(): boolean;
    /**
     * Enable or disable displaying intermediate lines
     *
     * @param enable enables or disables display of minor lines in the grid
     * @returns this
     */
    setIntermediate(enable: boolean): this;
    /**
     * Returns true if visual displays intermediate lines
     */
    getIntermediate(): boolean;
    /**
     * Return a decade count
     */
    getDecadeCount(): number;
    /**
     * Sets decade count
     *
     * @param decadeCount number of decades to be displayed
     * @returns this
     */
    setDecadeCount(decadeCount: number): this;
    /**
     * Sets a logarithmic scale
     * @param scale Must be more than zero (because logarithmic).
     * @returns this
     */
    setLogScale(scale: number): this;
    /**
     * Sets logarithmic line range.
     *
     * @param start start value of tick generator
     * @param stop stop value of tick generator
     * @returns this
     */
    setLogarithmicRange(start: number, stop: number): this;
    /**
     * get log start and log stop
     */
    getLogarithmicRange(): {
        logstart: number;
        logstop: number;
    };
    /**
     * return meaning data limits
     *
     * @param fullLimits default value is false
     */
    getDataLimits(fullLimits?: boolean): Rect | null;
    /**
     * Returns model limits
     */
    getBounds(): Rect;
    /**
     * Sets bounds
     *
     * @param bounds bounds of the visual
     * @returns this
     */
    setBounds(bounds: Rect): this;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties of this object
     */
    getProperties(): LogLog10ValueGrid.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: LogLog10ValueGrid.Options): this;
}
export declare namespace LogLog10ValueGrid {
    /**
     * number of decades to be displayed or options object
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * number of decades to be displayed
         */
        decadecount?: number;
        /**
         * enables or disables display of minor lines in the grid
         */
        intermediate?: boolean;
        /**
         * enables or disables reverse direction
         */
        reverse?: boolean;
        /**
         * left limits of log grid
         */
        logstart?: number;
        /**
         * right limits of log grid
         */
        logstop?: number;
        /**
         * a logarithm base
         */
        logbase?: number;
    };
    /**
     * properties of this object
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * number of decades to be displayed
         */
        decadecount: number;
        /**
         * enables or disables display of minor lines in the grid
         */
        intermediate: boolean;
        /**
         * enables or disables reverse direction
         */
        reverse: boolean;
        /**
         * left limits of log grid
         */
        logstart: number;
        /**
         * right limits of log grid
         */
        logstop: number;
        /**
         * a logarithm base
         */
        logbase: number;
    };
}
