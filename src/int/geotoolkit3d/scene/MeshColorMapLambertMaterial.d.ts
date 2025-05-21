import type { Texture } from 'three';
import { Color } from 'three';
import type { Merge } from '@int/geotoolkit/base';
import { ColorMapShaderMaterial } from '@int/geotoolkit3d/scene/ColorMapShaderMaterial';
/**
 * A material similar to THREE.MeshLambertMaterial, implements Lambertertian reflectance and colormap logic through a texture.<br>
 * <br>
 * This material requires the associated THREE.BufferGeometry to have a float attribute named upon ShaderUtil.COLORMAPVALUES_ATTRIBUTE_NAME value.<br>
 * This float value (per vertex) will be used to retrieve a color in the given colorprovider (converted to a colormap texture).<br>
 * The resulting color will be multiplied by the optional given static color (defaults to white unless explicitly set).<br>
 * Lighting will be applied to this color using the same algorithm that THREE.LambertMeshMaterial.<br>
 * <br>
 * If the given colorprovider is null then only the single color will be used (lighting still applies).<br>
 * <br>
 */
export declare class MeshColorMapLambertMaterial extends ColorMapShaderMaterial {
    constructor(options?: MeshColorMapLambertMaterial.Options);
    /**
     * Set the MeshColorMapLambertMaterial options.
     */
    setOptions(options: MeshColorMapLambertMaterial.OptionsBase): this;
    /**
     * Get the MeshColorMapLambertMaterial options.
     */
    getOptions(): MeshColorMapLambertMaterial.OptionsBaseOut;
}
export declare namespace MeshColorMapLambertMaterial {
    type Options = Merge<ColorMapShaderMaterial.Options, Partial<CommonOptions>>;
    type OptionsBase = Merge<ColorMapShaderMaterial.OptionsBase, Partial<CommonOptions>>;
    type OptionsBaseOut = Merge<ColorMapShaderMaterial.OptionsBaseOut, CommonOptions>;
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
         * Intensity of the ambient occlusion effect, default is 1.
         */
        aoMapIntensity: number;
        /**
         * Optional single color, default is white, overrided by texture and/or colormap.
         */
        color: Color;
        /**
         * the texture for diffuse color
         */
        map?: Texture;
        /**
         * Render geometry as wireframe, default is false.
         */
        wireframe: boolean;
        /**
         * Define appearance of line ends, default is 'round'.
         */
        wireframeLinecap: string;
        /**
         * Define appearance of line joints, default is 'round'.
         */
        wireframeLinejoin: string;
        /**
         * emissive color, default is black (not emissive).
         */
        emissive: Color;
        /**
         * The emissive (glow) map
         */
        emissiveMap?: Texture;
        /**
         * intensity emissive, default is 1.
         */
        emissiveintensity: number;
        /**
         * Defines whether this material uses lighting or not.
         * When set to false, the material will display at full brightness, with no shadow.
         * When set to true, the material will use the camera position to compute light exposure to the object's geometry, creating shadow effetcs.
         */
        lights: boolean;
    };
}
