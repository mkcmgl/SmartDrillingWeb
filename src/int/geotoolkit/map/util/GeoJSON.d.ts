/**
 * @module geotoolkit/map/util/GeoJSON
 */
import { Point } from '@int/geotoolkit/util/Point';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { IGetId } from '@int/geotoolkit/map/features/strategies/IGetId';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * GeoJSON parser and converter
 */
export declare class GeoJSON {
    /**
     * Creates GeoToolkit Shape-based {@link @int/geotoolkit/map/features/AbstractFeature~AbstractFeature} objects based on GeoJSON features
     *
     * @param geoJsonFeatures array of GeoJSON features
     * @param [iGetFeatureId] how to retrieve feature id from geoJson feature's properties
     * @param [crsConversion] function for converting points into the map coordinate system
     * @param [coordinateOrder] x/y coordinate order ([1, 0] to reverse)
     */
    static parse(geoJsonFeatures: GeoJSON.FeatureObject | GeoJSON.FeatureObject[], iGetFeatureId?: IGetId, crsConversion?: GeoJSON.CrsConversion, coordinateOrder?: GeoJSON.CoordinateOrder): AbstractFeature[];
    /**
     * Converts GeoToolkit Shape-based {@link @int/geotoolkit/map/features/AbstractFeature~AbstractFeature} objects to GeoJSON format
     *
     * @param features features to be converted to GeoJSON
     * @param [crsConversion] function for converting points into the result coordinate system
     * @param [coordinateOrder] x/y coordinate order ([1, 0] to reverse)
     */
    static toGeoJSON(features: AbstractFeature | AbstractFeature[] | Iterator<AbstractFeature>, crsConversion?: GeoJSON.CrsConversion, coordinateOrder?: GeoJSON.CoordinateOrder): GeoJSON.Feature;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace GeoJSON {
    export type FeatureObject = GeometryObject & {
        id?: string;
        properties?: Record<string, string>;
        crs?: Crs;
        geometry?: GeometryObject;
        features?: FeatureObject[];
    };
    export type CrsConversion = (src: Point, dst?: Point) => Point;
    export type CoordinateOrder = [
        0,
        1
    ] | [
        1,
        0
    ];
    export type GeometryObject = {
        type: string;
        coordinates?: Geometry | Geometry[];
        geometries?: GeometryObject[];
    };
    export type Feature = {
        type: string;
        properties?: Record<string, any>;
        geometry?: {
            type?: string;
            coordinates?: Geometry | Geometry[];
        };
        features?: Feature[];
    };
    type Geometry = number[] | number[][] | number[][][];
    export {};
}
declare type Crs = {
    type: string;
    properties: Record<string, any>;
    coordinate_order?: GeoJSON.CoordinateOrder;
};
export {};
