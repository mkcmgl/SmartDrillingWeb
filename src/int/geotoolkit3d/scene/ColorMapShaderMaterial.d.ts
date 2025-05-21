import type { Blending, BlendingDstFactor, BlendingEquation, BlendingSrcFactor, Color, DepthModes, Plane, ShaderMaterialParameters, Side } from 'three';
import { ShaderMaterial } from 'three';
import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { Merge, ToRecord } from '@int/geotoolkit/base';
/**
 * A material similar to THREE.ShaderMaterial, rendered with custom shaders and supports color maps through a texture
 * <br>
 * If the given colorprovider is null then only the single color will be used.<br>
 * <br>
 */
export declare class ColorMapShaderMaterial extends ShaderMaterial {
    constructor(options?: ColorMapShaderMaterial.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param options The options
     * @returns this
     */
    setOptions(options: ColorMapShaderMaterial.OptionsBase): this;
    /**
     * Get mesh colormap basic material options
     * (see {@link import("geotoolkit3d/scene/ColorMapShaderMaterial").ColorMapShaderMaterial.setOptions} for more info)
     * @returns options
     */
    getOptions(): ColorMapShaderMaterial.OptionsBaseOut;
    /**
     * Return the function which trigger an update to the color map.
     * Is used automatically internally by the toolkit after this material.setOptions() has been used to change the colorprovider.
     * @deprecated since 2023 (4.0)
     */
    getUpdateColorMap(): Function;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace ColorMapShaderMaterial {
    export type Options = Merge<ToRecord<ShaderMaterialParameters>, OptionsBase>;
    export type OptionsBase = ColorMap.Options & Partial<CommonOptions>;
    export type OptionsBaseOut = ColorMap.OptionsOut & CommonOptions;
    type CommonOptions = {
        /**
         * Opacity. Default is 1.
         */
        opacity: number;
        /**
         * Is handled by the rendering passes.
         */
        transparent: boolean;
        /**
         * Defines which of the face sides will be rendered - front, back or both.
         * Default is THREE.FrontSide. Other options are THREE.BackSide and THREE.DoubleSide.
         */
        side: Side;
        /**
         * Sets the alpha value to be used when running an alpha test.
         */
        alphaTest: number;
        /**
         * Blending destination.
         */
        blendDst: BlendingDstFactor;
        /**
         * Blending equation to use when applying blending.
         */
        blendEquation: BlendingEquation;
        /**
         * Which blending to use when displaying objects with this material. Default is NormalBlending.
         */
        blending: Blending;
        /**
         * Blending source. It's one of the blending mode constants defined in Three.js. Default is SrcAlphaFactor.
         */
        blendSrc: BlendingSrcFactor | BlendingDstFactor;
        /**
         * Whether to render the material's color. This can be used in conjunction with a mesh's .renderOrder property to create invisible objects that occlude other objects. Default is true.
         */
        colorWrite: boolean;
        /**
         * Which depth function to use. Default is LessEqualDepth. See the depth mode constants for all possible values. Default is LessEqualDepth.
         */
        depthFunc: DepthModes;
        /**
         * Whether to have depth test enabled when rendering this material. Default is true.
         */
        depthTest: boolean;
        /**
         * Whether rendering this material has any effect on the depth buffer. Default is true.
         * When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
         */
        depthWrite: boolean;
        /**
         * Whether the material is affected by fog.
         */
        fog: boolean;
        /**
         * Defines whether this material is tone mapped according to the renderer's toneMapping setting. Default is true.
         */
        toneMapped: boolean;
        /**
         * Defines whether this material supports clipping
         */
        clipping: boolean;
        /**
         * Defines the clipping planes
         * see {@link https://threejs.org/docs/#api/en/materials/Material.clippingPlanes})
         */
        clippingplanes: Plane[];
        /**
         * Define clip intersection
         * see {@link https://threejs.org/docs/#api/en/materials/Material.clipIntersection})
         */
        clipintersection: boolean;
    };
    export namespace ColorMap {
        type Options = {
            /**
             * Optional single color (reset to white if a colorprovider is given)
             */
            color?: Color;
            /**
             * A color provider to generate the colormap of this material.
             * Used to associate colors to value on your 3D Object render.
             */
            colorprovider?: ColorProvider | string | Color;
        };
        /**
         * The color map options
         */
        type OptionsOut = {
            /**
             * Optional single color (reset to white if a colorprovider is given)
             */
            color: Color;
            /**
             * A color provider to generate the colormap of this material.
             * Used to associate colors to value on your 3D Object render.
             */
            colorprovider: ColorProvider;
        };
    }
    export {};
}
