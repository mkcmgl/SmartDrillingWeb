import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { IGeometryToText } from '@int/geotoolkit/map/features/adapters/IGeometryToText';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Enum for heatmap calculation mode (point intensity distribution)
 * @enum
 * @readonly
 */
export declare enum Mode {
    /**
     * Influence decreases linearly with the distance to the point
     */
    Linear = "Linear",
    /**
     * Impact decreases with the squared distance to the point
     */
    Quad = "Quad",
    /**
     * Impact decreases with the cube of the distance to the point
     */
    Cubic = "Cubic",
    /**
     * Impact decreases with the distance to the point exponentially
     */
    Exp = "Exp"
}
/**
 * The Heatmap layer is a visualization used to depict the intensity of data at geographical points
 * (geotoolkit.map.features.Point features). Use vector data source to add features to the layer.
 * @example
 * import {Heatmap} from '@int/geotoolkit/map/layers/Heatmap';
 * import {GeoJSON} from '@int/geotoolkit/map/layers/GeoJSON';
 * const layer = new Heatmap({
 *     'source': new GeoJSON({ // use geojson formatted file as a data source
 *         'url': './data/points.json' // file url
 *     })
 * });
 * @example
 * const layer = new Heatmap({
 *     'weight': 'magnitude', // use feature attribute as weight
 *     'radius': () => map.getZoomLevel() > 5 ? 10 : 15 // adjust value on-the-fly
 * });
 */
export declare class Heatmap extends AbstractFeatureLayer {
    /**
     * @param [options] heatmap options
     */
    constructor(options?: Heatmap.Options);
    /**
     * Sets heatmap radius
     * @param radius heatmap radius
     * @returns this
     */
    setRadius(radius: number | Heatmap.RadiusCallback): this;
    /**
     * Returns heatmap radius (or a callback for it)
     */
    getRadius(): number | Heatmap.RadiusCallback;
    /**
     * Sets maximum intensity value
     * @param intensity max intensity (0 to calculate automatically)
     * @returns this
     */
    setMaxIntensity(intensity: number | Heatmap.IntensityCallback): this;
    /**
     * Returns maximum intensity value (or a callback for it). If not set, returns calculated value
     */
    getMaxIntensity(): number | Heatmap.IntensityCallback;
    /**
     * Sets heatmap calculation mode
     * @param mode heatmap calculation mode
     * @returns this
     */
    setMode(mode: Mode): this;
    /**
     * Returns heatmap calculation mode
     */
    getMode(): Mode;
    /**
     * Sets color provider for heatmap colors interpolation
     * @param provider heatmap color provider
     * @returns this
     */
    setColorProvider(provider: ColorProvider): this;
    /**
     * Returns current heatmap color provider
     */
    getColorProvider(): ColorProvider;
    /**
     * Sets features' field name to use as the weight value (or a callback for it)
     * @param field features' attribute field name (if exists)
     * @returns this
     */
    setWeightField(field: string | Heatmap.WeightCallback): this;
    /**
     * Returns current weight field name or a callback for it (if exists, null otherwise)
     */
    getWeightField(): string | Heatmap.WeightCallback;
    /**
     * Calculates features influence into 2d pixel array for the later rendering
     * @param featuresIt iterator over filtered features
     * @param context rendering context
     */
    renderFeatures(featuresIt: Iterator<AbstractFeature> | AbstractFeature[], context: RenderingContext): void;
    /**
     * Gets feature_geometry-to-text_anchor_position adapter
     * @param feature feature to get adapter for
     */
    getGeometryToText(feature: AbstractFeature): IGeometryToText;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] the properties to set
     * @returns this
     */
    setProperties(properties: Heatmap.Options): this;
    /**
     * Returns all the properties pertaining to this object
     * @returns the properties to set
     */
    getProperties(): Heatmap.OptionsOut;
}
export declare namespace Heatmap {
    /**
     * heatmap options
     */
    type Options = AbstractFeatureLayer.Options & {
        /**
         * field name for features' weight value (if needed) or a (feature) => weight callback
         */
        weight?: string | WeightCallback;
        /**
         * heatmap radius (in px) or a callback that returns current radius value
         */
        radius?: number | RadiusCallback;
        /**
         * heatmap maximum intensity or a callback that returns current value. If not set,
         * will be calculated automatically based on current features
         */
        maxintensity?: number | IntensityCallback;
        /**
         * color provider
         * for heatmap colors interpolation (for 0-1 values)
         */
        colorprovider?: ColorProvider;
        /**
         * heatmap calculation mode, see enum for details
         */
        mode?: Mode;
    };
    type RadiusCallback = () => number;
    type IntensityCallback = () => number;
    type WeightCallback = (feature: AbstractFeature) => number;
    /**
     * the properties to set
     */
    type OptionsOut = AbstractFeatureLayer.OptionsOut & {
        /**
         * field name for features' weight value (if needed)
         */
        weight?: string | WeightCallback;
        /**
         * heatmap radius (in px)
         */
        radius?: number | RadiusCallback;
        /**
         * heatmap maximum intensity. If not set, will be calculated automatically based on
         * current features
         */
        maxintensity?: number | IntensityCallback;
        /**
         * color provider for heatmap colors interpolation (for 0-1 values)
         */
        colorprovider?: ColorProvider;
        /**
         * heatmap calculation mode, see enum for details
         */
        mode?: Mode;
    };
}
