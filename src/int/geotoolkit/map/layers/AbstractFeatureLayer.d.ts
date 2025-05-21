import { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
import { Text } from '@int/geotoolkit/scene/shapes/Text';
import { Iterator } from '@int/geotoolkit/util/iterator';
import { Query } from '@int/geotoolkit/map/util/Query';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Point } from '@int/geotoolkit/util/Point';
import { IFilter } from '@int/geotoolkit/map/features/filters/IFilter';
import { BaseConverter } from '@int/geotoolkit/map/features/converters/BaseConverter';
import { Events as LayerEvents } from '@int/geotoolkit/map/layers/Events';
import { GeoJSON } from '@int/geotoolkit/map/util/GeoJSON';
import type { IGetAnnotation } from '@int/geotoolkit/map/features/strategies/IGetAnnotation';
import type { IGeometryToText } from '@int/geotoolkit/map/features/adapters/IGeometryToText';
import { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import type { GeodeticSystem } from '@int/geotoolkit/map/GeodeticSystem';
import type { IFilter as SceneFilter } from '@int/geotoolkit/renderer/IFilter';
import type { IFormatter } from '@int/geotoolkit/map/features/formatters/IFormatter';
/**
 * This layer is a collection of features (see {@link @int/geotoolkit/map/features/AbstractFeature~AbstractFeature}).<br>
 * addFeature() and removeFeature() are used to add and remove features; getFeatures() to iterate.
 */
export declare abstract class AbstractFeatureLayer extends AbstractLayer {
    /**
     * Creates feature layer
     * @param [options] options
     */
    protected constructor(options?: AbstractFeatureLayer.Options);
    on<E extends keyof AbstractFeatureLayer.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractFeatureLayer.EventMap[E]) => void): this;
    off<E extends keyof AbstractFeatureLayer.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractFeatureLayer.EventMap[E]) => void): this;
    notify<E extends keyof AbstractFeatureLayer.EventMap>(type: E, source: AbstractFeatureLayer, args?: AbstractFeatureLayer.EventMap[E]): this;
    /**
     * Gets features iterator
     * @param [filter] features query filter.
     * @returns feature iterator (over all features if filter is null)
     */
    getFeatures(filter?: Query | ((feature: AbstractFeature) => boolean)): Iterator<AbstractFeature>;
    /**
     * Gets feature_geometry-to-text_anchor_position adapter
     * @param [feature] feature  to get adapter for
     */
    abstract getGeometryToText(feature?: AbstractFeature): IGeometryToText;
    /**
     * Gets feature by feature id.
     *
     * @param id feature identifier
     * @returns feature if found; null otherwise
     */
    getFeatureById(id: number | string): AbstractFeature;
    /**
     * queries layer for items that match the search
     *
     * @param query query
     * @returns features selected features
     */
    queryFeatures(query: Query | ((feature: AbstractFeature) => boolean)): AbstractFeature[];
    /**
     * Renders features. The basic implementations iterates over the features provided and
     * renders them if derived from {@link @int/geotoolkit/scene/Node~Node}.
     *
     * @param featuresIt features iterator
     * @param context rendering context
     */
    renderFeatures(featuresIt: Iterator<AbstractFeature> | AbstractFeature[], context: RenderingContext): void;
    /**
     * Renders annotations (to filtered features only)
     *
     * @param featuresIt features iterator
     * @param context rendering context
     */
    renderAnnotations(featuresIt: Iterator<AbstractFeature> | AbstractFeature[], context: RenderingContext): void;
    /**
     * Renders content. The implementation:
     * 1. Applies features filter(s) if set;
     * 2. Execute "renderFeatures";
     * If annotations visible then:
     * 3. Applies annotations filter(s) if set;
     * 4. Execute "renderAnnotations"
     *
     * @param context to render layer
     */
    renderContent(context: RenderingContext): void;
    /**
     * Sets a map coordinate system
     * @param system coordinate system
     * @returns this
     */
    setMapCoordinateSystem(system: AbstractSystem | GeodeticSystem): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing the properties
     */
    getProperties(): AbstractFeatureLayer.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties: AbstractFeatureLayer.Options): this;
    /**
     * Sets options
     * @param [options] options
     * @returns this
     */
    setOptions(options: AbstractFeatureLayer.OptionsBase): this;
    /**
     * Converts layer features into GeoJSON format
     * @returns geoJson geoJson object
     */
    toGeoJSON(): GeoJSON.Feature;
    /**
     * Converts layer features into CSV formatted object
     * @param [base] latitude/longitude accuracy base
     * @returns geoJson geoJson object
     */
    toCSV(base?: number): string[][];
    /**
     * Disposes this layer, once disposed it should not be used anymore.<br>
     */
    dispose(): void;
}
export declare namespace AbstractFeatureLayer {
    /**
     * options
     */
    type Options = AbstractLayer.Options & {
        /**
         * features options
         */
        features?: {
            /**
             * features filter(s)
             */
            filter?: IFilter | IFilter[];
        };
        /**
         * annotations options
         */
        annotations?: {
            /**
             * annotations filter(s)
             */
            filter?: IFilter | IFilter[];
            /**
             * annotations visibility flag
             */
            visible?: boolean;
            /**
             * annotation strategy
             */
            strategy?: IGetAnnotation;
            /**
             * JSON-object or text shape instance (see {@link @int/geotoolkit/scene/shapes/Text~Text} constructor JSON-object for details)
             */
            text?: Text.Options | Text;
        };
        /**
         * converter that is used for vector data conversions
         */
        converters?: BaseConverter | BaseConverter[];
        geometrytotext?: IGeometryToText;
    };
    /**
     * object containing the properties
     */
    type OptionsOut = AbstractLayer.OptionsOut & {
        /**
         * features properties
         */
        features?: {
            /**
             * features filter(s)
             */
            filter?: IFilter | IFilter[];
        };
        /**
         * annotations properties
         */
        annotations?: {
            /**
             * annotations filter(s)
             */
            filter?: IFilter | IFilter[];
            /**
             * annotations visibility flag
             */
            visible?: boolean;
            /**
             * annotation strategy
             */
            strategy?: IGetAnnotation;
            /**
             * text options
             */
            text?: Text | Text.Options;
        };
        /**
         * tooltip properties
         */
        tooltip?: {
            /**
             * tooltip visibility flag
             */
            visible?: boolean;
            /**
             * tooltip data formatter
             */
            formatter?: IFormatter | ((data: AbstractFeature[], tooltip: string, pt: Point) => string);
        };
        /**
         * converter that is used for vector data conversions
         */
        converters?: BaseConverter | BaseConverter[];
    };
    /**
     * options
     */
    type OptionsBase = {
        /**
         * features options
         */
        features?: {
            /**
             * features filter(s)
             */
            filter?: IFilter | IFilter[];
        };
        /**
         * annotations options
         */
        annotations?: {
            /**
             * annotations filter(s)
             */
            filter?: IFilter | IFilter[];
            /**
             * annotations visibility flag
             */
            visible?: boolean;
            /**
             * annotation strategy
             */
            strategy?: IGetAnnotation;
            /**
             * JSON-object or text shape instance (see {@link @int/geotoolkit/scene/shapes/Text~Text} constructor JSON-object for details)
             */
            text?: Text.Options;
        };
        /**
         * converter that is used for vector data conversions
         */
        converters?: BaseConverter | BaseConverter[];
        /**
         * limits of this layer
         */
        limits?: Rect;
        /**
         * layer drawing filter (default "layerfilter=null" means layer _is_ drawn)
         */
        layerfilter?: SceneFilter;
        /**
         * the alpha of the layer
         */
        alpha?: number;
    };
    type EventMap = AbstractLayer.EventMap & {
        [LayerEvents.FeaturesUpdated]: void;
    };
}
