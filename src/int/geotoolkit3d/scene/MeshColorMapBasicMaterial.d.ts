import type { Texture } from 'three';
import { ColorMapShaderMaterial } from '@int/geotoolkit3d/scene/ColorMapShaderMaterial';
/**
 * A material similar to THREE.BasicMaterial and implements colormap logic through a texture.<br>
 * <br>
 * This material requires the associated THREE.BufferGeometry to have a float attribute named upon ShaderUtil.COLORMAPVALUES_ATTRIBUTE_NAME value.<br>
 * This float value (per vertex) will be used to retrieve a color in the given colorprovider (converted to a colormap texture).<br>
 * The resulting color will be multiplied by the optional given static color (defaults to white unless explicitly set).<br>
 * <br>
 * If the given colorprovider is null then only the single color will be used.<br>
 * <br>
 */
export declare class MeshColorMapBasicMaterial extends ColorMapShaderMaterial {
    constructor(options?: MeshColorMapBasicMaterial.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * (see constructor of {@link @int/geotoolkit3d/scene/MeshColorMapBasicMaterial~MeshColorMapBasicMaterial} for more info)
     * @param options The options
     * @returns this
     */
    setOptions(options: MeshColorMapBasicMaterial.OptionsBase): this;
    /**
     * Get mesh colormap basic material options
     */
    getOptions(): MeshColorMapBasicMaterial.OptionsBaseOut;
}
export declare namespace MeshColorMapBasicMaterial {
    /**
     * The constructor options, see complete parameters in THREE.MeshBasicMaterial
     */
    export type Options = Partial<CommonOptions> & ColorMapShaderMaterial.Options;
    export type OptionsBase = Partial<CommonOptions> & ColorMapShaderMaterial.OptionsBase;
    export type OptionsBaseOut = CommonOptions & ColorMapShaderMaterial.OptionsBaseOut;
    type CommonOptions = {
        /**
         * The alpha map is a grayscale texture that controls the opacity across the surface
         */
        alphaMap?: Texture;
        /**
         * The red channel of this texture is used as the ambient occlusion map
         */
        aoMap?: Texture;
        /**
         * Intensity of the ambient occlusion effect
         */
        aoMapIntensity: number;
        /**
         * the map texture
         */
        map?: Texture;
        /**
         * Render geometry as wireframe
         */
        wireframe: boolean;
        /**
         * Define appearance of line ends
         */
        wireframeLinecap: string;
        /**
         * Define appearance of line joints
         */
        wireframeLinejoin: string;
    };
    export {};
}
