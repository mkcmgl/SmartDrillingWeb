import type { TextureFilter, Wrapping } from 'three';
export declare const WEBGL_FILTERS: Record<number, TextureFilter>;
export declare const WEBGL_WRAPPINGS: Record<number, Wrapping>;
export declare const WEBGL_TYPE_SIZES: Record<string, number>;
export declare const ATTRIBUTES: Record<string, string>;
export declare const PRIMITIVE_MODE: {
    POINTS: number;
    LINES: number;
    LINE_LOOP: number;
    LINE_STRIP: number;
    TRIANGLES: number;
    TRIANGLE_STRIP: number;
    TRIANGLE_FAN: number;
};
/**
 * The different alpha modes for MaterialType.alphaMode
 * @enum
 * @readonly
 */
export declare enum ALPHA_MODES {
    OPAQUE = "OPAQUE",
    MASK = "MASK",
    BLEND = "BLEND"
}
/**
 * The different extensions for GltfType.extensionsUsed and GltfType.extensionsRequired
 * @enum
 * @readonly
 */
export declare enum EXTENSIONS {
    KHR_BINARY_GLTF = "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION = "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL = "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT = "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR = "KHR_materials_ior",
    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS = "KHR_materials_pbrSpecularGlossiness",
    KHR_MATERIALS_SHEEN = "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR = "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION = "KHR_materials_transmission",
    KHR_MATERIALS_UNLIT = "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME = "KHR_materials_volume",
    KHR_TEXTURE_BASISU = "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM = "KHR_texture_transform",
    KHR_MESH_QUANTIZATION = "KHR_mesh_quantization",
    EXT_TEXTURE_WEBP = "EXT_texture_webp",
    EXT_MESHOPT_COMPRESSION = "EXT_meshopt_compression"
}
/**
 * The different types for AccessorType.type
 * @enum
 * @readonly
 */
export declare enum ACCESSOR_TYPES {
    SCALAR = "SCALAR",
    VEC2 = "VEC2",
    VEC3 = "VEC3",
    VEC4 = "VEC4",
    MAT2 = "MAT2",
    MAT3 = "MAT3",
    MAT4 = "MAT4"
}
/**
 * The different types for BufferType.type
 * @enum
 * @readonly
 */
export declare enum BUFFER_TYPE {
    ArrayBuffer = "arraybuffer",
    Text = "text"
}
/**
 * The different image formats for ImageType.mimeType
 * @enum
 * @readonly
 */
export declare enum IMAGE_MIME_TYPE {
    JPEG = "image/jpeg",
    PNG = "image/png"
}
/**
 * The different camera types for CameraType.type
 * @enum
 * @readonly
 */
export declare enum CAMERA_TYPE {
    Perspective = "perspective",
    Orthographic = "orthographic"
}
/**
 * The different morph types for AnimationChannelTargetType.path
 * @enum
 * @readonly
 */
export declare enum ANIM_TARGET_PATH {
    Translation = "translation",
    Rotation = "rotation",
    Scale = "scale",
    Weights = "weights"
}
/**
 * The different interpolation types for AnimationSamplerType.interpolation
 * @enum
 * @readonly
 */
export declare enum ANIMATION_INTERPOLATION {
    /**
     * The animated values are linearly interpolated between keyframes.
     * When targeting a rotation, spherical linear interpolation (slerp) **SHOULD** be used to interpolate quaternions.
     * The number of output elements **MUST** equal the number of input elements.
     */
    LINEAR = "LINEAR",
    /**
     * The animated values remain constant to the output of the first keyframe, until the next keyframe.
     * The number of output elements **MUST** equal the number of input elements.
     */
    STEP = "STEP",
    /**
     * The animation's interpolation is computed using a cubic spline with specified tangents.
     * The number of output elements **MUST** equal three times the number of input elements.
     * For each input element, the output stores three elements, an in-tangent, a spline vertex, and an out-tangent.
     * There **MUST** be at least two keyframes when using this interpolation.
     */
    CUBICSPLINE = "CUBICSPLINE"
}
/**
 * glTF Property
 */
export declare type GLTFPropertyType = {
    /**
     * object with extension-specific objects.
     */
    extensions?: Record<string, object>;
    /**
     * Application-specific data.
     * Although 'extras' **MAY** have any type, it is common for applications to store and access custom data as key/value pairs.
     * Therefore, 'extras' **SHOULD** be a object rather than a primitive value for best portability.
     */
    extras?: Record<string, any>;
};
/**
 * Metadata about the glTF asset.
 */
export declare type AssetType = GLTFPropertyType & {
    /**
     * A copyright message suitable for display to credit the content creator.
     */
    copyright?: string;
    /**
     * Tool that generated this glTF model.  Useful for debugging.
     */
    generator?: string;
    /**
     * The glTF version in the form of `<major>.<minor>` that this asset targets.
     */
    version: string;
    /**
     * The minimum glTF version in the form of `<major>.<minor>` that this asset targets.
     * This property **MUST NOT** be greater than the asset version.
     */
    minVersion?: string;
};
