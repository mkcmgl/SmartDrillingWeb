/**
 * @module geotoolkit/map/layers/Template
 */
import { BaseTemplate } from '@int/geotoolkit/map/features/templates/BaseTemplate';
import { Point } from '@int/geotoolkit/util/Point';
import { Rect } from '@int/geotoolkit/util/Rect';
import { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
import { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import { Iterator } from '@int/geotoolkit/util/iterator';
import { Events } from '@int/geotoolkit/scene/Node';
import { Events as SourceEvents } from '@int/geotoolkit/map/sources/Events';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { IGeometryToText } from '@int/geotoolkit/map/features/adapters/IGeometryToText';
import type { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import type { GeodeticSystem } from '@int/geotoolkit/map/GeodeticSystem';
/**
 * The layer uses {@link @int/geotoolkit/map/features/templates/BaseTemplate~BaseTemplate} instance(s)
 * to render its {@link @int/geotoolkit/map/features/AbstractFeature~AbstractFeature} elements.
 *
 * @example
 * import {Template as TemplateLayer} from '@int/geotoolkit/map/layers/Template';
 * import {Point as MapFeaturePoint} from '@int/geotoolkit/map/features/Point';
 * import {BaseTemplate} from '@int/geotoolkit/map/features/templates/BaseTemplate';
 * ...
 * const layer = new TemplateLayer({
 *      'templates': {
 *          'featureclassname': MapFeaturePoint.getClassName(),
 *          'template': new BaseTemplate({
 *              'shape': circle,
 *              'geometrytoshape': geometryToAnchor,
 *              'geometrytotext': geometryToAnchor
 *          })
 *      }
 * });
 */
export declare class Template extends AbstractFeatureLayer {
    /**
     * Creates template layer
     * @param [options] options
     */
    constructor(options?: Template.Options);
    on<E extends keyof Template.EventMap>(type: E, callback: (eventType: E, sender: this, args: Template.EventMap[E]) => void): this;
    off<E extends keyof Template.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Template.EventMap[E]) => void): this;
    /**
     * Sets properties
     * @param properties options
     * @returns this
     */
    setProperties(properties: Template.Options): this;
    /**
     * If no features provided then resets all shape templates to their initial states;<br>
     * otherwise resets specific templates for the features provided
     * @param [features] features to reset their specific template(s) to a default one
     * @param [suppressInvalidate] suppress layer invalidation flag
     */
    resetFeatureTemplates(features?: AbstractFeature | AbstractFeature[] | Iterator<AbstractFeature>, suppressInvalidate?: boolean): this;
    /**
     * Gets template associated with a feature or its class name
     * @param parameter reference to a feature instance OR feature class name
     * @returns template
     */
    getTemplate(parameter: AbstractFeature | string): BaseTemplate;
    /**
     * Sets template associated with a feature or features
     *
     * @param parameter feature class name OR reference to a feature instance OR feature iterator
     * @param template feature(s) template or feature class template
     * @param [suppressInvalidate] suppress layer invalidation flag
     */
    setTemplate(parameter: string | AbstractFeature | Iterator<AbstractFeature> | AbstractFeature[], template: BaseTemplate, suppressInvalidate?: boolean): this;
    /**
     * The implementation builds default limits from scratch if no iterator is provided;
     * otherwise, it extends previously calculated limits with limits calculated over new features.
     * @param [features] iterator or array of the new features
     */
    protected calculateDefaultModelLimits(features?: AbstractFeature[] | Iterator<AbstractFeature>): Rect;
    /**
     * updates the geometry for the feature in this layer
     *
     * @param feature feature to be modified
     * @param geometry the geometry to be set on the feature
     */
    updateGeometry(feature: AbstractFeature, geometry: AbstractFeature.Geometry | AbstractFeature.Geometry[]): this;
    /**
     * Adds feature(s)
     *
     * @param parameter feature(s) to be added
     * @throws {Error} if a feature to add is not supported
     */
    addFeature(parameter: AbstractFeature | AbstractFeature[]): this;
    /**
     * Removes feature(s)
     *
     * @param parameter feature(s) to be removed
     * @returns this
     */
    removeFeature(parameter: AbstractFeature): this;
    /**
     * Removes all feature(s)
     *
     * @returns this
     */
    clearFeatures(): this;
    /**
     * Renders features.<br>
     * NOTE:<br>
     * When picking is performed, then feature is selected if its shape gets picked.
     *
     * @param featuresIt iterator over filtered features
     * @param context rendering context
     */
    renderFeatures(featuresIt: AbstractFeature[], context: RenderingContext): void;
    /**
     * Gets feature_geometry-to-text_anchor_position adapter
     *
     * @param feature feature to get adapter for
     */
    getGeometryToText(feature: AbstractFeature): IGeometryToText;
    /**
     * Renders annotations (to filtered features only)
     *
     * @param featuresIt features iterator
     * @param context rendering context
     */
    renderAnnotations(featuresIt: AbstractFeature[], context: RenderingContext): void;
    /**
     * Performs selection of the features with its device coordinates
     * @param pt is the device coordinates received by mouse event
     * @param [radius] the radius of selection (in px)
     * @returns features features selected
     */
    hitTest(pt: Point, radius?: number): AbstractFeature[];
    /**
     * Sets a map coordinate system
     * @param system coordinate system
     * @returns this
     */
    setMapCoordinateSystem(system: AbstractSystem | GeodeticSystem): this;
    notify<E extends keyof Template.EventMap>(event: E, source: Template, args?: Template.EventMap[E]): this;
}
export declare namespace Template {
    /**
     * options
     */
    type Options = AbstractFeatureLayer.Options & {
        /**
         * shape template(s) to visualize features (see example below)
         */
        templates?: TemplateInfo | TemplateInfo[];
        /**
         * annotations options
         */
        annotations?: {
            /**
             * annotations visibility on zoom
             */
            visibleonzoom?: boolean;
        };
    };
    type TemplateInfo = {
        featureclassname: string | string[];
        template: BaseTemplate;
    };
    type EventMap = AbstractFeatureLayer.EventMap & {
        [Events.CssClassChanged]: string;
        [SourceEvents.InfoUpdated]: AbstractFeature | null;
    };
}
