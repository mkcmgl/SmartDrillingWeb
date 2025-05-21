/**
 * @module geotoolkit/map/util/KML
 */
import { Point } from '@int/geotoolkit/util/Point';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { IGetId } from '@int/geotoolkit/map/features/strategies/IGetId';
import type { BaseTemplate } from '@int/geotoolkit/map/features/templates/BaseTemplate';
/**
 * KML (Keyhole Markup Language) parser
 */
export declare class KML {
    /**
     * Creates GeoToolkit Shape-based {@link @int/geotoolkit/map/features/AbstractFeature~AbstractFeature} objects based on KML features
     *
     * @param xmlElement DOMElement object that contains all the features data in KML format
     * @param [iGetFeatureId] how to retrieve feature id from geoJson feature's properties
     * @param [crsConversion] function for converting points into the map coordinate system
     * @param [invalidateHandler] function to be called when async templates are ready to be drawn
     * @param [styles] styles map that contains connection between style ids and feature templates
     * @param [features] features array to store parsed features (new array created if not provided)
     * @returns features
     */
    static parse(xmlElement: Element, iGetFeatureId?: IGetId, crsConversion?: KML.CrsConversion, invalidateHandler?: () => void, styles?: Record<string, Record<string, BaseTemplate>>, features?: AbstractFeature[]): AbstractFeature[];
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace KML {
    type CrsConversion = (src: Point, dst?: Point) => Point;
}
