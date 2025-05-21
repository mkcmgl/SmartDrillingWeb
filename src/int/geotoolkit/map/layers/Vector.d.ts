import { Template } from '@int/geotoolkit/map/layers/Template';
import type { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
/**
 * Vector layer differs from the others in that it does not draw pictures, but vector data (called "features"): points, polylines and polygons. <br>
 * These features can be either used as additional information for drawing on top of another layer — for example, set of points-capitals from the maplayers.html tutorial — or cover the entire space and not requiring any background.<br>
 * Most of the layers —  ArcGISFeature, CSV, GeoJSON, GeoRSS, KML, WFS, etc. — are vector and allows to automatically parse vector data and drawing styles from different formats.
 * The implementation is capable of loading features data from files (objects) in different formats.<br>
 * It has following predefined shape templates:<br>
 * ```
 * import {Polygon} from '@int/geotoolkit/map/features/Polygon';
 * import {Polygon as PolygonTpl} from '@int/geotoolkit/map/features/templates/Polygon';
 * //...
 * 'templates': [
 *     { 'featureclassname': Polygon.getClassName(), 'template': new PolygonTpl() },
 *     { 'featureclassname': MultiPolygon.getClassName(), 'template': PolygonTpl() },
 *     { 'featureclassname': LineString.getClassName(), 'template': new LineStringTpl() },
 *     { 'featureclassname': MultiLineString.getClassName(), 'template': new LineStringTpl() },
 *     { 'featureclassname': Point.getClassName(), 'template': new PointTpl() },
 *     { 'featureclassname': MultiPoint.getClassName(), 'template': new PointTpl() }
 * ]
 * ```
 */
export declare class Vector extends Template {
    /**
     * @param [options] options
     */
    constructor(options?: Vector.Options);
    /**
     * Sets the unique identifier for the features
     * @param field unique identifier
     * @returns this
     */
    setUniqueField(field: string): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Vector.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * see {@link import("geotoolkit/map/layers/Vector").Vector.getProperties}
     * @param [properties] object containing the properties to set
     * @returns this
     */
    setProperties(properties: Vector.Options): this;
}
export declare namespace Vector {
    /**
     * options
     */
    type Options = Template.Options & {
        /**
         * field that contains the id for this shape
         */
        idfield?: string;
    };
    /**
     * properties
     */
    type OptionsOut = AbstractFeatureLayer.OptionsOut & {
        /**
         * field that contains the id for this shape
         */
        idfield?: string;
    };
}
