import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Create horizontal depth grid.
 */
export declare class LogHorizontalGrid extends LogAbstractVisual {
    /**
     * Constructor
     * @param [options] The algorithm used to generate lines along the grid(default is adaptive tick generator) or properties object
     */
    constructor(options?: LogHorizontalGrid.Options | TickGenerator);
    clone(): LogHorizontalGrid;
    protected copyConstructor(src: LogHorizontalGrid, deepCopy?: boolean): this;
    /**
     * Sets the new tick generator
     *
     * @param tickGenerator The algorithm used to generate lines along the grid(default is adaptive tick generator)
     * @returns this
     */
    setTickGenerator(tickGenerator: TickGenerator): this;
    /**
     * Gets the current tick generator
     */
    getTickGenerator(): TickGenerator;
    /**
     * Sets minor line style. This method does the same as setMinorLineStyle.
     * This line style is used if the tick generator is not set otherwise the
     * tick generator style is used.
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     */
    setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Returns the minor line style
     */
    getLineStyle(): LineStyle;
    /**
     * Returns the minor line style
     */
    getMinorLineStyle(): LineStyle;
    /**
     * Sets minor line style This line style is used if the tick generator is
     * not set otherwise the tick generator style is used.
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setMinorLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Returns the major line style
     */
    getMajorLineStyle(): LineStyle;
    /**
     * Sets major line style This line style is used if the tick generator is
     * not set otherwise the tick generator style is used.
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setMajorLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * return meaning data limits
     *
     * @param fullLimits default value is false
     */
    getDataLimits(fullLimits?: boolean): Rect | null;
    /**
     * Gets track model limits
     */
    getBounds(): Rect;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogHorizontalGrid.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogHorizontalGrid.Options): this;
}
export declare namespace LogHorizontalGrid {
    /**
     * The algorithm used to generate lines along the grid(default is adaptive tick generator) or properties object
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * minor line style
         */
        minorlinestyle?: LineStyle.Type;
        /**
         * major line style
         */
        majorlinestyle?: LineStyle.Type;
        /**
         * The algorithm to generate lines along the grid
         */
        tickgenerator?: TickGenerator;
    };
    /**
     * properties object
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * minor line style
         */
        minorlinestyle?: LineStyle;
        /**
         * major line style
         */
        majorlinestyle?: LineStyle;
        /**
         * The algorithm to generate lines along the grid
         */
        tickgenerator?: TickGenerator;
    };
}
