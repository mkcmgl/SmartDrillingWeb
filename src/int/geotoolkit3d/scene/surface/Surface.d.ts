/**
 * @module geotoolkit3d/scene/surface/Surface
 */
import type { Box2, Texture } from 'three';
import { Color } from 'three';
import { AbstractSurface } from '@int/geotoolkit3d/scene/surface/AbstractSurface';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { HeightMapColorBarValueMode } from '@int/geotoolkit3d/Constants';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
/**
 * A Surface 3D object.<br>
 * <br>
 * This object represents a 3D surface with an optional attribute used for coloring.<br>
 * The surface's geometry is defined by the given SurfaceData.<br>
 * <br>
 * The surface will contains holes whenever the given attribute or elevation is equals to nullvalue.<br>
 * Note that the current implementation still generates the vertices for those points but abstain itself from rendering them.<br>
 * <br>
 * @throws {Error} if options object has no AbstractSurfaceData inside
 */
export declare class Surface extends AbstractSurface {
    constructor(options: Surface.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param [options] The options to change
     * @returns this
     */
    setOptions(options?: Surface.OptionsBase): this;
    /**
     * Get surface options
     */
    getOptions(): Surface.OptionsBaseOut;
    /**
     * Return this object's data (geometry, values) when available.
     * Because data can be large, they are returned by reference (no copies).
     */
    getData(): AbstractSurface.Geometry.DataOut;
    /**
     * Set this Surface datas.
     */
    setData(datas: AbstractSurface.Geometry.Data): this;
}
export declare namespace Surface {
    /**
     * The options to use to create the surface
     */
    export type Options = AbstractSurface.Geometry.Options & AbstractSurface.Material.Options & CommonOptionsBase;
    export type OptionsBase = Object3D.Options & AbstractSurface.Material.OptionsBase & AbstractSurface.Geometry.OptionsBase & CommonOptionsBase;
    export type OptionsBaseOut = Required<Object3D.Options> & AbstractSurface.Material.OptionsBaseOut & AbstractSurface.Geometry.OptionsBase & CommonOptionsBaseOut;
    type CommonOptionsBase = Partial<CommonOptions> & {
        /**
         * texture to paint surface
         */
        texture?: Texture;
        /**
         * A color provider or a single color in css format
         */
        colorprovider?: ColorProvider | string | Color;
        /**
         * value mode for color map texture
         */
        valuemode?: HeightMapColorBarValueMode;
    };
    type CommonOptionsBaseOut = CommonOptions & {
        /**
         * The value used to signel the absence of value in the data values.
         */
        nullvalue: number;
        /**
         * The minimum z value
         */
        zmin: number;
        /**
         * The maximum z value
         */
        zmax: number;
    };
    type CommonOptions = {
        /**
         * the lowest level of tile layer
         */
        minlod: number;
        /**
         * the highest level of tile layer
         */
        maxlod: number;
        /**
         * visible model limits of elevation (WGS84 full limits by default)
         */
        extent: Box2;
        /**
         * model limits of elevation (WGS84 full limits by default)
         */
        maplimits: Box2;
        /**
         * tile width
         */
        tilewidth: number;
        /**
         * tile height
         */
        tileheight: number;
        /**
         * object for loading texture tiles
         */
        material: CanvasServer;
        /**
         * object for loding geometry tiles
         */
        geometry: CanvasServer;
        /**
         * maximum requests at the same time (for network optimization)
         */
        maximumrequests: number;
    };
    export type CanvasServer = {
        /**
         * server for loading tiles
         */
        server: string;
        /**
         * formatter function for loading tiles
         */
        formatterfunction: FormatterFunction;
    };
    type FormatterFunction = (z: number, y: number, x: number) => string;
    export {};
}
