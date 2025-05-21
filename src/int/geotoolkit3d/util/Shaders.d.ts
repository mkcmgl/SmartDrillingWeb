/**
 * @module geotoolkit3d/util/Shaders
 */
import { Vector4 } from 'three';
/**
 * Utility class providing glsl code snippets that can be included in shaders.<br>
 */
export declare class Shaders {
    /**
     * CPU version of geotoolkit3d.util.Shaders.SHADER_FLOAT_TO_VEC4;
     * @param {number} float The value contained in [0...1[ to be converted to a THREE.Vector4
     * @returns {import("geotoolkit3d/THREE").Vector4} Normalized vector4 (Caller should make a defensive copy of the returned vector)
     */
    static packFloatToVec4(float: number): Vector4;
    /**
     * Pack the given float [0...1[ value into a vec4 where each member is a [0-255] int value
     * @see Shaders.packFloatToVec4
     * @param float [0...1[
     * @returns RGBA vector4 (Caller should make a defensive copy)
     */
    static packFloatToRGBA(float: number): Vector4;
    /**
     * Unpack a RGBA as a float value
     * @see Shaders.unpackVec4ToFloat
     * @param {import("geotoolkit3d/THREE").Vector4|number[]} vec4 RGBA vector4 components should be contained in [0...256[
     * @returns {number} The converted float value
     */
    static unpackRGBAToFloat(v4: number[] | Vector4): number;
    /**
     * Unpack a Vector4 as a float value
     * @see Shaders.packFloatToVec4
     * @param vec4 RGBA vector4 components values should be contained in [0...1[
     * @returns The converted float value
     */
    static unpackVec4ToFloat(vec4: Vector4): number;
    static getClassName(): string;
    getClassName(): string;
}
