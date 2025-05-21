/**
 * @module geotoolkit3d/scene/surface/AbstractSurface
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { MeshColorMapLambertMaterial } from '@int/geotoolkit3d/scene/MeshColorMapLambertMaterial';
import type { AbstractSurfaceData } from '@int/geotoolkit3d/data/surface/AbstractSurfaceData';
import type { Texture } from 'three';
/**
 * Base class for geotoolkit3d.scene.surface <br>
 */
export declare abstract class AbstractSurface extends Object3D {
    protected constructor();
}
export declare namespace AbstractSurface {
    export namespace Geometry {
        type Options = {
            /**
             * The data constructor options
             */
            data: Data & {
                /**
                 * The surface geometry coordinates
                 */
                surface: AbstractSurfaceData;
            };
        };
        /**
         * @deprecated since 4.0
         */
        type OptionsBase = {
            /**
             * The data options
             * @deprecated since 4.0, get/setOptions are not meant for data, use getData/setData instead
             */
            data?: {
                /**
                 * Surface attribute values
                 * @deprecated since 4.0, get/setOptions are not meant for data, use getData/setData instead
                 */
                values?: Float32Array | number[] | Texture;
            };
        };
        type DataOut = {
            /**
             * Surface attribute values, if available
             */
            values?: Float32Array;
        };
        type Data = {
            /**
             * The Surface attribute values.
             * Texture as value map is only supported for HeightMap.
             */
            values?: Float32Array | number[] | Texture;
        };
    }
    export namespace Material {
        type Options = Shader.Options & MeshColorMapLambertMaterial.Options;
        type OptionsBase = Shader.Options & MeshColorMapLambertMaterial.OptionsBase;
        type OptionsBaseOut = Shader.OptionsOut & MeshColorMapLambertMaterial.OptionsBaseOut;
    }
    export namespace Shader {
        type Options = Partial<CommonShaderOptions> & {
            data?: {
                /**
                 * The surface nullvalue. Default is -999.25
                 */
                nullvalue?: number;
            };
        };
        type OptionsOut = CommonShaderOptions & {
            data: {
                /**
                 * The surface nullvalue. Default is -999.25
                 */
                nullvalue: number;
            };
        };
    }
    type CommonShaderOptions = {
        /**
         * If this surface should render in wireframe mode. Default is false.
         */
        wireframe: boolean;
        /**
         * How smooth the shading of the surface should be.
         * On a scale of 1 to 0, 1 being 100% smooth, 0 being flat-shaded.
         * Using 1 for 100% smoothshading might be faster on very large surfaces, due to using precomputed normals exclusively.
         * Default is 1.
         */
        smoothshadingfactor: number;
    };
    export {};
}
