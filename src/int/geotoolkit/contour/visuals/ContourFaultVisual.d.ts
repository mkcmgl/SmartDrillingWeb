import { AbstractVisual } from '@int/geotoolkit/contour/visuals/AbstractVisual';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * The Contour Fault Visual. This renders the polylines that represent faults.
 */
export declare class ContourFaultVisual extends AbstractVisual {
    /**
     * @param [options] An object containing the properties to set
     */
    constructor(options?: ContourFaultVisual.Options);
    /**
     * Open fault lines.
     */
    static get OPEN_FAULTS(): number;
    /**
     * Closed fault lines.
     */
    static get CLOSED_FAULTS(): number;
    /**
     * Gets the fault visual style.
     * By default, it is combination of OPEN_FAULTS and CLOSED_FAULTS.
     * @returns style The fault visual style
     */
    getStyle(): number;
    /**
     * Sets the fault visual style.
     * @param style The fault visual style
     * @returns this
     */
    setStyle(style: number): this;
    /**
     * Gets the current LineStyle used to draw the open fault lines of this fault visual.
     * @returns attribute The open fault line style.
     */
    getOpenLineStyle(): LineStyle;
    /**
     * Sets the current LineStyle used to draw the open fault lines of this fault visual.
     * @param attribute The open fault line style.
     * @returns this
     */
    setOpenLineStyle(attribute: LineStyle): this;
    /**
     * Gets the current LineStyle used to draw the closed fault lines of this fault visual.
     * @returns attribute The closed fault line style.
     */
    getClosedLineStyle(): LineStyle;
    /**
     * Sets the current LineStyle used to draw the closed fault lines of this fault visual.
     * @param attribute The closed fault line style.
     * @returns this
     */
    setClosedLineStyle(attribute: LineStyle): this;
    /**
     * Renders the fault visual.
     * @param renderingContext The rendering context.
     */
    render(renderingContext: RenderingContext): void;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     */
    setProperties(properties?: ContourFaultVisual.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns visual properties
     */
    getProperties(): ContourFaultVisual.OptionsOut;
}
export declare namespace ContourFaultVisual {
    /**
     * An object containing the properties to set
     */
    type Options = AbstractVisual.Options & {
        /**
         * The fault visual style
         */
        faultvisualstyle?: number;
        /**
         * The open fault line style
         */
        openlinestyle?: LineStyle;
        /**
         * The closed fault line style
         */
        closedlinestyle?: LineStyle;
    };
    /**
     * visual properties
     */
    type OptionsOut = AbstractVisual.OptionsOut & {
        /**
         * The fault visual style
         */
        faultvisualstyle?: number;
        /**
         * The open fault line style
         */
        openlinestyle?: LineStyle;
        /**
         * The closed fault line style
         */
        closedlinestyle?: LineStyle;
    };
}
