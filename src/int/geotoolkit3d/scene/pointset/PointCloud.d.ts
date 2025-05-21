/**
 * @module geotoolkit3d/scene/pointset/PointCloud
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { Merge } from '@int/geotoolkit/base';
import type { Color, Texture as ThreeTexture } from 'three';
import { Points } from 'three';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { ColorMapShaderMaterial } from '@int/geotoolkit3d/scene/ColorMapShaderMaterial';
import type { ScatterPlot } from '@int/geotoolkit3d/widgets/scatter/ScatterPlot';
/**
 * Enum of built-in symbols.<br>
 * <br>
 * The textures provided by this enum are responsible of loading/creating a bump mapping Texture that will be used to display a symbol in 3D.
 * @enum
 * @readonly
 */
export declare const Symbol: {
    /**
     * A sphere symbol
     * @type {import("geotoolkit3d/THREE").Texture}
     */
    sphere: import("../../widgets/scatter/Symbols").SymbolTexture;
    /**
     * A square symbol
     * @type {import("geotoolkit3d/THREE").Texture}
     */
    square: import("../../widgets/scatter/Symbols").SymbolTexture;
    /**
     * A cube symbol
     * @type {import("geotoolkit3d/THREE").Texture}
     */
    cube: import("../../widgets/scatter/Symbols").SymbolTexture;
};
/**
 * PointCloud is a set of 3D coordinates rendered as symbols.<br>
 * <br>
 * It's similar to a PointSet and share most of the same API with it (even if they don't share a common parent interface).<br>
 * The main difference between PointSet and PointCloud is that a PointCloud can handle larger sets of data.<br>
 * However it uses BumpMapping to emulate the symbols which lowers the quality of the rendering of each symbol.<br>
 * <br>
 * For large datasets, it's recommended to use PointCloud.<br>
 */
export declare class PointCloud extends Object3D {
    constructor(options: PointCloud.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: PointCloud.OptionsBase): this;
    /**
     * Get point cloud options
     * (see {@link import("geotoolkit3d/scene/pointset/PointCloud").PointCloud.setOptions} for more info)
     * @returns options
     */
    getOptions(): PointCloud.OptionsBaseOut;
    /**
     * Set per point options, note that it's more efficient to use setOptions() to modify large ensemble of points.
     * @param index The index of the point to edit
     * @param options The options
     * @returns this
     */
    setPointOptions(index: number, options: PointCloud.PointOptions): this;
    /**
     * Get the attributes of a point at the given index, return null if index is not valid.
     * @param index index of point
     */
    getPointOptions(index: number): PointCloud.PointOptionsOut | null;
    /**
     * Return if this point index is valid (belong to a point in this point cloud).
     * @param index the point index.
     */
    isValidIndex(index: number): boolean;
    /**
     * Gets point cloud
     * @returns pointcloud
     */
    getPointCloud(): Points;
}
export declare namespace PointCloud {
    /**
     * The options
     */
    type Options = OptionsBase & {
        /**
         * The name of the PointCloud
         */
        name?: string;
        /**
         * The data options
         */
        data: {
            /**
             * The x values
             */
            x?: number[];
            /**
             * The y values
             */
            y?: number[];
            /**
             * The elevation values
             */
            z?: number[];
            /**
             * The x, y and z values already converted to a single xyz Float32Array.
             */
            xyz?: Float32Array;
            /**
             * The visibility of each point
             */
            visible?: boolean[];
            /**
             * An attribute used to compute the size of the symbols on screen, can be an array or a single value
             */
            sizes?: number[] | number;
            /**
             * A value attribute used for coloring the symbols
             */
            values?: number[];
        };
    };
    type OptionsBase = Object3D.Options & Material.Options & {
        /**
         * The data options
         */
        data?: {
            /**
             * A value attribute used for coloring the symbols
             */
            values?: number[];
            /**
             * An attribute used to compute the size of the symbols on screen, can be an array or a single value
             */
            sizes?: number[] | number;
            /**
             * An optional minimum to use for 'sizes' normalization (used only if new sizes are provided)
             */
            sizemin?: number;
            /**
             * An optional maximum to use for 'sizes' normalization (used only if new sizes are provided)
             */
            sizemax?: number;
            /**
             * An attribute used to turn on/off visibility of points
             */
            visible?: boolean[] | boolean;
        };
        /**
         * The symbol from the enum or a THREE.Texture
         */
        symbol?: Symbol | ThreeTexture;
        /**
         * The symbols minimum size, used to compute the final symbol size on screen (based on the 'sizes' attributes)
         */
        symbolminsize?: number;
        /**
         * The symbols maximum size, used to compute the final symbol size on screen (based on the 'sizes' attributes)
         */
        symbolmaxsize?: number;
    };
    type OptionsBaseOut = Omit<PointCloud.Material.OptionsOut, 'colorprovider'> & Required<Object3D.Options> & {
        data: {
            values: number[];
            sizes: number[];
            sizemin: number;
            sizemax: number;
            visible: boolean[];
        };
        symbolminsize: number;
        symbolmaxsize: number;
        colorprovider: ColorProvider | string | Color;
    };
    type PointOptions = {
        /**
         * The visibility of the point
         */
        visible?: boolean;
        /**
         * The size of the point
         */
        size?: number;
        /**
         * The value of the point (used for color)
         */
        value?: number;
    };
    type PointOptionsOut = {
        visible: boolean;
        size: number;
        value?: number;
        /**
         * the xyz coordinates
         */
        position: number[];
    };
    namespace Material {
        type Options = Merge<Shader.Options, ColorMapShaderMaterial.OptionsBase>;
        type OptionsOut = Merge<ScatterPlot.ShaderOptionsOut, ColorMapShaderMaterial.OptionsBaseOut>;
    }
    namespace Shader {
        type Options = {
            /**
             * The Symbol texture used for the projection drawing
             */
            symbol?: ThreeTexture;
            /**
             * The color of the projection
             */
            color?: Color;
            /**
             * The projection opacity
             */
            opacity?: number;
            /**
             * The alpha value to use for sharpness correction, the bigger the 'sharper' [0,1].
             */
            alphatest?: number;
            /**
             * The color of the projection
             */
            colorprovider?: string | Color;
        };
    }
}
