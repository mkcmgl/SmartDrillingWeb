/**
 * The map feature interface IFeature shows the basic properties that any feature should have.
 * @deprecated since 2022, use geotoolkit/map/features/AbstractFeature instead
 * @interface
 */
export declare abstract class IFeature {
    /**
     * Gets ID <br>
     * Id is a unique identifier of the feature, usually one of the attributes. It is used to simplify settings for the user, as a default 'annotation' (text info) for the feature.
     * @returns ID
     */
    abstract getId(): string;
    /**
     * Gets attributes (non-spatial properties) <br>
     * Attributes are some additional (non-spatial) properties. These attributes can be written as a text next to the feature itself for more information for the user.<br>
     * @returns attributes
     */
    abstract getAttributes(): IFeature.Attributes;
    /**
     * Gets geometry. Geometry is the place, where the feature should be rendered. It is point coordinates for a point feature or a points array for polygons and polylines.
     * @param [isMapCS] Map coordinate system flag
     * @returns geometry
     */
    abstract getGeometry(isMapCS?: boolean): IFeature.Geometry | IFeature.Geometry[];
}
export declare namespace IFeature {
    type Geometry = {
        x: number;
        y: number;
    } | {
        x: number[];
        y: number[];
    };
    type Attributes = Record<string, string | number | boolean>;
}
