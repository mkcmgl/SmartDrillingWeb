/**
 * @module geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial
 */
import type { Material, Matrix4, ShaderMaterialParameters, Uniform, Vector4 } from 'three';
import { ShaderMaterial } from 'three';
import type { Plot } from '@int/geotoolkit3d/Plot';
import type { PickingModes } from '@int/geotoolkit3d/Constants';
import type { ObjectWithMaterial } from '@int/geotoolkit3d/scene/ObjectWithMaterial';
/**
 * The parent class for picking materials that uses a Shader based picking mechanism.<br>
 * <br>
 * The shader chunks and uniforms contained in this class should be used to compute/write picking information in pixels.<br>
 * <br>
 * @see {@link @int/geotoolkit3d/picking/RendererPicking~RendererPicking} For details about picking-renderer.
 */
export declare class AbstractShaderPickingMaterial extends ShaderMaterial {
    constructor(options?: ShaderMaterialParameters);
    /**
     * Set picking options, note that this setOptions expects all mandatory parameters to be set
     * @param options The picking options
     * @returns this
     */
    setOptions(options: AbstractShaderPickingMaterial.Options): this;
    /**
     * Get abstract shader picking material options
     * (see {@link import("geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial").AbstractShaderPickingMaterial.setOptions} for more info)
     * @returns options
     */
    getOptions(): AbstractShaderPickingMaterial.Options;
    /**
     * Computes a matrix to transform coordinates contained in the plot model space to ]0...1[.<br>
     * This is used to normalize coordinates during picking so that the GPU will only handle normalized coordinates.<br>
     * @param plot The plot to compute the normalization matrix for
     * @returns The matrix to normalize coordinates
     */
    static computePlotNormMatrix(plot: Plot): Matrix4;
    /**
     * Computes a matrix to transform coordinates contained in [0...1] to a plot model space.<br>
     * This is used to un-normalize coordinates returned by the GPU.<br>
     * @param plot The Plot to compute the inverse normalization matrix for
     * @returns The matrix to un-normalize coordinates
     */
    static computePlotNormInvMatrix(plot: Plot): Matrix4;
}
export declare namespace AbstractShaderPickingMaterial {
    /**
     * The picking options
     */
    type Options = AbstractShaderPickingOptions & {
        /**
         * The plot
         */
        plot?: Plot;
        /**
         * The x coordinate in device
         */
        x?: number;
        /**
         * The y coordinate in device
         */
        y?: number;
        /**
         * The picking mode
         */
        pickingmode?: PickingModes | number;
        /**
         * The objects being picked (mandatory for XYZ)
         */
        candidates?: ObjectWithMaterial[];
    };
    /**
     * The minimum options for picking shaders.
     */
    type AbstractShaderPickingOptions = {
        /**
         * The picking mode (X,Y,Z,ID, custom)
         * A custom value can be send for the extra picking passes.
         */
        pickingmode?: PickingModes;
        pickingrgba?: Vector4;
        candidates?: ObjectWithMaterial[];
        /**
         * The matrix that normalize model coordinates
         */
        normalizationmatrix?: Matrix4;
        /**
         * The inverse view matrix (mandatory for XYZ)
         */
        viewinversematrix?: Matrix4;
        /**
         * The inverse projection matrix (mandatory for XYZ)
         */
        projectioninversematrix?: Matrix4;
    };
    /**
     * Meant to define private classes PointCloudMaterial | PointsetMaterial | ScatterMaterial
     */
    type PointMaterial = Material & {
        /**
         * Return the material uniforms, generally used to create picking materials.
         */
        getUniforms: () => Record<string, Uniform>;
    };
}
