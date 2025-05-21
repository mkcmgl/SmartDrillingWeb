/**
 * @module geotoolkit3d/scene/plane/PlaneMaterial
 */
import { CanvasTexture, Vector2 } from 'three';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Group } from '@int/geotoolkit/scene/Group';
import { MeshColorMapLambertMaterial } from '@int/geotoolkit3d/scene/MeshColorMapLambertMaterial';
/**
 * Plane material.
 * Is responsible for handling the plane image and overlay parameters and redering.
 */
export declare class PlaneMaterial extends MeshColorMapLambertMaterial {
    constructor(options?: PlaneMaterial.Options);
    /**
     * Set this material options.
     */
    setOptions(options?: PlaneMaterial.OptionsBase): this;
    /**
     * Returns the texture of the overlay, if any.
     */
    getOverlayTexture(): CanvasTexture | null;
    /**
     * Returns the dimension of the plane's overlay texture, if any.
     * @deprecated since 4.0, use getImageTextureDimension() or getOverlayTextureDimension() instead
     */
    getTextureDimension(): Vector2;
    /**
     * Returns the dimension of the plane base image texture, if any.
     * @param [vec2] (optional) the Vector2 to hold the dimension, to avoid creating new object.
     */
    getImageTextureDimension(vec2?: Vector2): Vector2 | null;
    /**
     * Returns the dimension of the plane overlay texture, if any.
     * @param [vec2] (optional) the Vector2 to hold the dimension, to avoid creating new object.
     */
    getOverlayTextureDimension(vec2?: Vector2): Vector2 | null;
    /**
     * Return the overlay Group holding the 2D shapes
     */
    getOverlay(): Group;
}
export declare namespace PlaneMaterial {
    export type OptionsBase = MeshColorMapLambertMaterial.OptionsBase & DeprecatedOptions & {
        /**
         * Contains the options related to the overlay. Type Group is deprecated since 4.0
         * For compatibility reason, the final texture size is then clamped between 128 and 4096.
         */
        overlayoptions?: OverlayOptions;
    };
    export type Options = MeshColorMapLambertMaterial.Options & DeprecatedOptions & {
        /**
         * Contains the options related to the overlay. Type Group is deprecated since 4.0
         * For compatibility reason, the final texture size is then clamped between 128 and 4096.
         */
        overlayoptions?: OverlayOptions;
        /**
         * Set the mipmap usage for the plane textures at creation.
         * Using mipmaps lead to improved performances (when limited by texture bandwidth) an improved texture quality for most cases.<br>
         * In some cases however (such as when using very streched textures) disabling mipmaps can reduce the texture bluriness.
         */
        usemipmaps?: boolean;
    };
    export type OverlayOptions = {
        /**
         * A group that will be used to render 2D shapes on top of the plane as 'overlay'. Will be drawn on top of the base image if any.
         */
        shapegroup?: Group;
        /**
         * Define the overlay background fillstyle.<br>
         * Accept CSS color as well as FillStyles.<br>
         * Can be set to 'null' to prevent drawing the background.<br>
         * Default color is 50% opacity grey.
         */
        backgroundfillstyle?: FillStyle.Type;
        /**
         * the rendering scale of the overlay. Overlay resolution is (pixelscale * width) * (pixelscale * height)
         */
        pixelscale?: number;
        /**
         * the width of the overlay, in pixels. Default is 2048.
         */
        width?: number;
        /**
         * the height of the overlay, in pixels. Default is 2048.
         */
        height?: number;
    };
    /**
     * @deprecated since 4.0, will be removed on next version.
     */
    type DeprecatedOptions = {
        /**
         * @deprecated since 4.0, please use options.overlayoptions.shapegroup instead.
         */
        overlay?: Group;
        /**
         * @deprecated since 4.0, see options.overlay.width and options.overlayoptions.pixelscale instead.
         */
        texturewidth?: number;
        /**
         * @deprecated since 4.0, see options.overlay.height and options.overlayoptions.pixelscale instead.
         */
        textureheight?: number;
        /**
         * @deprecated since 4.0, use options.overlayoptions.backgroundfillstyle instead.
         */
        backgroundfillstyle?: FillStyle.Type;
    };
    export {};
}
