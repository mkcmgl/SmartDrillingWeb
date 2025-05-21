/**
 * @module geotoolkit3d/scene/map/TiledMap
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { Box2 } from 'three';
/**
 * A 3D map object.<br>
 * <br>
 * This object provides a shape that can be used to display a tiledMap in a 3D scene.<br>
 * The Map is composed of planes that are dynamically altered to increase level of detail.<br>
 * <br>
 * The map's location and size can be configured independently of the map's extent<br>
 * The map's location can be configured through setting the maplimits property in setOptions<br>
 * The map's extent can be configured through setting the extent property in setOptions<br>
 * <br>
 */
export declare class TiledMap extends Object3D {
    constructor(options: TiledMap.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param [options] to set on this object
     * @returns this
     */
    setOptions(options?: TiledMap.Options): this;
    /**
     * Get options
     * see {@link import("geotoolkit3d/scene/map/TiledMap").TiledMap.setOptions} for more info)
     * @returns options
     */
    getOptions(): Required<TiledMap.Options>;
}
export declare namespace TiledMap {
    /**
     * The options
     */
    export type Options = Object3D.Options & {
        /**
         * This defines the area that the TiledMap should occupy
         */
        maplimits?: Box2;
        /**
         * This defines the max Resolution of the map
         */
        maxlod?: number;
        /**
         * This defines the min Resolution of the map this is for maps that do not support tiles lower than
         * this resolution
         */
        minlod?: number;
        /**
         * This defines the area of the map we want to show.
         */
        extent?: Box2;
        /**
         * Server that this object will pull tiles from
         */
        server?: string | string[];
        /**
         * opacity of the map
         */
        opacity?: number;
        /**
         * function that takes x y z values and turns them into a path on the connected server
         */
        formatterfunction?: FormatterFunction;
    };
    type FormatterFunction = (depth: number, x: number, y: number) => string;
    export {};
}
