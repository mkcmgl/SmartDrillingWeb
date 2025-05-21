/**
 * @module geotoolkit3d/scene/well/DynamicTube
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { MeshColorMapLambertMaterial } from '@int/geotoolkit3d/scene/MeshColorMapLambertMaterial';
/**
 * Trajectory tube with possibility to add point in real-time.
 * @see {@link @int/geotoolkit3d/scene/well/TrajectoryTube~TrajectoryTube}
 */
export declare class DynamicTube extends Object3D {
    /**
     * @param [options] The options
     */
    constructor(options?: DynamicTube.Options);
    /**
     * Sets options
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: DynamicTube.OptionsBase): this;
    /**
     * Gets options
     * @returns The options
     */
    getOptions(): DynamicTube.OptionsBaseOut;
    /**
     * Clears the geometry of all points and data
     * @returns this
     */
    resetData(): this;
    /**
     * Gets the current data
     * @returns data object
     */
    getData(): DynamicTube.Data;
    /**
     * Adds the geometry to the Tube, if the options are changed the geometry will be recalculated.
     * @param xs The x deviation values
     * @param ys The y deviation values
     * @param zs The elevation values
     * @param [values] A value attribute used for coloring the trajectory (see options.colorprovider)
     * @param [widths] Radiuses of the ellipsis for the East-West axis (For first ellipsis)
     * @param [heights] Radiuses of the ellipsis for the North-South axis (For first ellipsis)
     * @param [rolls] Rolling angles in radians
     * @returns this
     */
    addGeometry(xs: number[], ys: number[], zs: number[], values?: number[], widths?: number[], heights?: number[], rolls?: number[]): this;
}
export declare namespace DynamicTube {
    /**
     * The options
     */
    type Options = MeshColorMapLambertMaterial.OptionsBase & GeometryOptionsBase & {
        /**
         * the number of points this will create as a starting buffer for vertexs
         */
        startbuffersize?: number;
    };
    /**
     * The options
     */
    type OptionsBase = Object3D.Options & Options;
    type OptionsBaseOut = Required<Object3D.Options & GeometryOptionsBase> & MeshColorMapLambertMaterial.OptionsBaseOut;
    /**
     * data object
     */
    type Data = {
        /**
         * X coordinates
         */
        xs: number[];
        /**
         * Y coordinates
         */
        ys: number[];
        /**
         * Z coordinates
         */
        zs: number[];
        /**
         * values for the vertexes
         */
        values: number[];
        /**
         * width attribute for the vertexes
         */
        widths: number[];
        /**
         * heights attribute for the vertexes
         */
        heights: number[];
        /**
         * roll value for the vertexes
         */
        rolls: number[];
    };
    /**
     * The options
     */
    type GeometryOptionsBase = {
        /**
         * The minimum radius, this is used as a size factor applied to the ellipses
         */
        radiusmin?: number;
        /**
         * The maximum radius, this is used as a size factor applied to the ellipses
         */
        radiusmax?: number;
        /**
         * The minimum radius value this corresponds to the value that will be mapped to radiusmin
         */
        axismin?: number;
        /**
         * The maximum radius value this corresponds to the value that will be mapped to radiusmax
         */
        axismax?: number;
        /**
         * The ellipsis shape is approximated using triangles. This defines how many segments will be used for the approximation.
         */
        tubeprecision?: number;
        /**
         * False if the tube should have a cap at both ends
         */
        openended?: boolean;
        /**
         * the amount to grow GPU buffers when points overflow
         */
        bufferresizefactor?: number;
    };
}
