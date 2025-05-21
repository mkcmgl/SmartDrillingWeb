import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { Rect } from '@int/geotoolkit/util/Rect';
import { DensityGrid } from '@int/geotoolkit/controls/util/density/DensityGrid';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * Density contour shape geometry mode
 * @enum
 * @readonly
 */
export declare enum GeometryMode {
    /**
     * Path geometry
     */
    Path = "path",
    /**
     * Spline geometry
     */
    Spline = "spline"
}
/**
 * Defines shape to draw contour polygons to be provided from density grid.
 */
export declare class DensityContourShape extends Shape {
    constructor(options?: DensityContourShape.Options | LineStyle.Type);
    clone(): DensityContourShape;
    protected copyConstructor(src: DensityContourShape, deepCopy?: boolean): this;
    /**
     * Return density grid
     * @returns density grid
     */
    getDensityGrid(): DensityGrid;
    /**
     * Set density grid
     * @param densityGrid density grid or density grid options, see {@link import("geotoolkit/controls/util/density/DensityGrid").DensityGrid.setProperties}
     * @param [merge] true if you want to merge grid options with existing grid, false by default
     * @returns this
     */
    setDensityGrid(densityGrid: DensityGrid | DensityGrid.Options | null, merge?: boolean): this;
    /**
     * Return color provider
     * @returns color provider
     */
    getColorProvider(): ColorProvider;
    /**
     * Set color provider
     * @param colorProvider color provider
     * @returns this
     */
    setColorProvider(colorProvider: ColorProvider): this;
    /**
     * Return shape geometry mode
     * @returns geometry mode
     */
    getGeometry(): GeometryMode;
    /**
     * Set shape geometry mode
     * @param geometryMode geometry mode
     * @returns this
     */
    setGeometry(geometryMode: GeometryMode): this;
    /**
     * Return band spacing
     * @returns band spacing
     */
    getBandSpacing(): number;
    /**
     * Set band spacing
     * @param bandSpacing band spacing
     * @returns this
     */
    setBandSpacing(bandSpacing: number): this;
    /**
     * Return  band opacity
     * @returns band opacity
     */
    getBandOpacity(): number;
    /**
     * Set  band opacity
     * @param opacity band opacity
     * @returns this
     */
    setBandOpacity(opacity: number): this;
    /**
     * Sets band options
     * @param [options] the band rendering options
     * @returns this
     */
    setBandOptions(options?: DensityContourShape.BandOptions): this;
    /**
     * Return bounds
     * @returns bounds
     */
    getBounds(): Rect;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): DensityContourShape.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set, see {@link import("geotoolkit/scene/shapes/Shape").Shape.setProperties}
     * @returns this
     */
    setProperties(properties?: DensityContourShape.Options): this;
}
export declare namespace DensityContourShape {
    /**
     * An object containing the properties to set
     */
    export type Options = Shape.Options & OptionsBase & {
        /**
         * density grid or properties
         */
        grid?: DensityGrid | DensityGrid.Options;
    };
    /**
     * properties
     */
    export type OptionsOut = Shape.OptionsOut & OptionsBase & {
        /**
         * density grid
         */
        grid?: DensityGrid | null;
    };
    type OptionsBase = {
        /**
         * band spacing
         */
        bandspacing?: number;
        /**
         * band opacity
         */
        bandopacity?: number;
        /**
         * color provider
         */
        colorprovider?: ColorProvider | null;
        /**
         * geometry mode
         */
        geometry?: GeometryMode;
    };
    /**
     * the band rendering options
     */
    export type BandOptions = {
        /**
         * band spacing
         */
        bandspacing?: number;
        /**
         * band opacity
         */
        bandopacity?: number;
    };
    export {};
}
