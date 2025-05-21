import { Text } from '@int/geotoolkit/scene/shapes/Text';
import type { IGeometryToShape } from '@int/geotoolkit/map/features/adapters/IGeometryToShape';
import type { IGeometryToText } from '@int/geotoolkit/map/features/adapters/IGeometryToText';
import type { IGetAnnotation } from '@int/geotoolkit/map/features/strategies/IGetAnnotation';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
/**
 * Manages {@link @int/geotoolkit/map/features/AbstractFeature~AbstractFeature}-to-{@link @int/geotoolkit/scene/Node~Node} logic used by
 * {@link @int/geotoolkit/map/layers/Template~Template} class or its inheritants
 *
 * @example
 * function myShapeCallback(feature, shape) {
 *     if(feature.getId() === 'Houston') shape.setFillStyle({ 'color': 'red' });
 * };
 * @example
 * import {BaseTemplate} from '@int/geotoolkit/map/features/templates/BaseTemplate';
 * import {Text} from '@int/geotoolkit/scene/shapes/Text';
 * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
 * const template = new BaseTemplate({
 *      ...,
 *      'textshape': new Text({
 *          'textstyle': new TextStyle('blue'), // style for annotation
 *          'height': 12
 *      }),
 *      'textSizeInfo': {   // change annotation size dynamically
 *          'field': 'pop2015', // base size on population field
 *          'minDataValue': 500, // population varies from 500 to 3000
 *          'maxDataValue': 3000,
 *          'minSize': 10, // annotation size varies from 10px (for features with pop2015 <= 500) to 15px (pop2015 >= 3000)
 *          'maxSize': 15 // e.g. if pop2015 field value is 2000, it's annotation size is 13px (linear interpolation)
 *      }
 * });
 */
export declare class BaseTemplate {
    /**
     * @param [options] options
     */
    constructor(options?: BaseTemplate.Options);
    /**
     * Gets template options
     */
    getProperties(): BaseTemplate.OptionsOut;
    /**
     * Sets template options. For the new options to take effect on layer, the layer has to be invalidated.
     *
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: BaseTemplate.Options): this;
    /**
     * Sets callback function
     * @param callback callback function
     * @returns this
     */
    setShapeCallback(callback: BaseTemplate.ShapeCallback): this;
    /**
     * Gets {@link @int/geotoolkit/scene/Node~Node} carnac shape associated with a feature
     *
     * @returns carnac shape
     */
    getShape(): Shape;
    /**
     * Gets feature_geometry-to-shape_geometry adapter
     */
    getGeometryToShape(): IGeometryToShape;
    /**
     * Gets feature_geometry-to-text_anchor_position adapter
     */
    getGeometryToText(): IGeometryToText;
    /**
     * Gets {@link @int/geotoolkit/scene/shapes/Text~Text} text shape for annotations
     * @param [feature] feature to annotate
     */
    getTextShape(feature?: AbstractFeature): Text;
    /**
     * Gets optional shape callback
     */
    getShapeCallback(): BaseTemplate.ShapeCallback;
    /**
     * Returns strategy for getting annotation expression (if set)
     * @returns strategy
     */
    getTextStrategy(): IGetAnnotation;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace BaseTemplate {
    /**
     * options
     */
    type Options = {
        /**
         * carnac shape to visualize a feature instance
         */
        shape?: Shape;
        /**
         * text shape to visualize a feature annotations
         */
        textshape?: Text;
        /**
         * feature geometry to carnac shape state adapter
         */
        geometrytoshape?: IGeometryToShape;
        /**
         * feature geometry to text shape state adapter
         */
        geometrytotext?: IGeometryToText;
        /**
         * callback to modify template's shape parameter(s) dynamically (see example below)
         */
        shapecallback?: ShapeCallback;
        /**
         * strategy for getting annotation expression (overrides layer strategy if set)
         */
        textstrategy?: IGetAnnotation;
        /**
         * options for dynamically changing the annotation size basing on some attribute value
         */
        textsizeinfo?: TextSizeInfo;
    };
    type OptionsOut = {
        /**
         * carnac shape to visualize a feature instance
         */
        shape: Shape;
        /**
         * text shape to visualize a feature annotations
         */
        textshape: Text;
        /**
         * feature geometry to carnac shape state adapter
         */
        geometrytoshape?: IGeometryToShape;
        /**
         * feature geometry to text shape state adapter
         */
        geometrytotext?: IGeometryToText;
    };
    type ShapeCallback = (feature: AbstractFeature, shape: Shape, context?: RenderingContext) => void;
    type TextSizeInfo = {
        /**
         * feature attribute field name that specifies the annotation size
         */
        field: string;
        /**
         * attribute value minimum limit
         */
        mindatavalue: number;
        /**
         * attribute value maximum limit
         */
        maxdatavalue: number;
        /**
         * annotation size (in px) for minDataValue attribute. The size is calculated dynamically from the attribute value using linear interpolation between minSize and maxSize values.
         */
        minsize: number;
        /**
         * annotation size (in px) for maxDataValue attribute. The size is calculated dynamically from the attribute value using linear interpolation between minSize and maxSize values.
         */
        maxsize: number;
    };
}
