import { IFeature } from '@int/geotoolkit/map/features/IFeature';
import type { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
/**
 * Abstract map feature class. Feature must have an ID (unique within a layer it's contained in) and geometry;<br>
 * may have set of attributes (non-spatial properties)
 */
export declare abstract class AbstractFeature implements IFeature {
    /**
     * @param options options
     */
    protected constructor(options: AbstractFeature.Options);
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     * Returns shallow copy of the feature
     * @returns clone
     */
    shallowClone(): AbstractFeature;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * Makes a shallow copy of the feature.
     * @param src Source to copy from
     * @returns this
     */
    protected copyConstructor(src: AbstractFeature): this;
    /**
     * Gets ID
     * Id is a unique identifier of the feature, usually one of the attributes. It is used to simplify settings for the user, as a default 'annotation' (text info) for the feature.
     * @returns ID
     */
    getId(): string;
    /**
     * Gets geometry
     * Geometry is the place, where the feature should be rendered. It is point coordinates for a point feature or a points array for polygons and polylines.
     * @param [isMapCS] Map coordinate system flag
     * @returns geometry
     */
    getGeometry(isMapCS?: boolean): AbstractFeature.Geometry | AbstractFeature.Geometry[];
    /**
     * Gets attributes (non-spatial properties)
     * Attributes are some additional (non-spatial) properties. These attributes can be written as a text next to the feature itself for more information for the user.<br>
     * @returns attributes
     */
    getAttributes(): AbstractFeature.Attributes;
    /**
     * Applies Map coordinate system to itself
     * @param layer map layer to use for coordinate system conversion
     * @returns this
     */
    abstract applyMapCS(layer: AbstractLayer): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractFeature {
    /**
     * options
     */
    type Options = {
        /**
         * geometry
         */
        geometry: Geometry | Geometry[];
        /**
         * ID
         */
        id?: string | number;
        /**
         * attributes (non-spatial properties)
         */
        attributes?: Attributes;
    };
    type Geometry = {
        x: number;
        y: number;
    } | {
        x: number[];
        y: number[];
    };
    type Attributes = Record<string, any>;
}
