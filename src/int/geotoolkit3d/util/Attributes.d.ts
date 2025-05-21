import type { BufferAttribute } from 'three';
import { Box3, Color, LineBasicMaterial, LineDashedMaterial, MeshLambertMaterial, MeshPhongMaterial } from 'three';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Utility class offering various functions to manipulate attributes and threejs materials.<br>
 * <br>
 */
export declare class Attributes {
    /**
     * Builds a line material for the given linestyle.<br>
     * Note that current implementation assumes that the given style is immutable and therefore will not listen to its changes.<br>
     * <br>
     * Note that supported patterns are only the simple regular ones.<br>
     * Per THREEJS requirements for the LineDashedMaterial you will also have to call line.computeLineDistances() on your THREE.Line object.<br>
     * <br>
     * Note that style.width is not supported on windows-webgl.<br>
     * See:<br>
     * {@link https://threejs.org/docs/#api/en/objects/Line.computeLineDistances}<br>
     * {@link http://alteredqualia.com/tmp/webgl-linewidth-test/}<br>
     * {@link http://en.wikipedia.org/wiki/WebGL#Desktop_browsers}<br>
     * {@link https://code.google.com/p/angleproject/issues/detail?id=334}<br>
     * <br>
     * @param style The style to use to create a material
     * @returns The created material
     */
    static createLineMaterial(style: LineStyle): LineBasicMaterial | LineDashedMaterial;
    /**
     * Build a mesh material (Lambertian reflectance) for the given fillstyle.<br>
     * Note that current implementation assumes that the given style is immutable and therefore will not listen to its changes.<br>
     *
     * @param style The style to build a material for
     * @returns The created material
     */
    static createMeshMaterial(style: FillStyle): MeshLambertMaterial;
    /**
     * Build a mesh material (Phong reflectance) for the given fillstyle.<br>
     * Note that current implementation assumes that the given style is immutable and therefore will not listen to its changes.<br>
     *
     * @param style The style to build a material for
     * @returns The created material
     */
    static createPhongMeshMaterial(style: FillStyle): MeshPhongMaterial;
    /**
     * Convert a color coded as a css-color to a THREE color.<br>
     * @param cssColor The color in css format
     * @returns A json containing the converted color and the corresponding opacity
     */
    static getThreeColor(cssColor: string): {
        color: Color;
        opacity: number;
    };
    /**
     * Updates a mesh material (Lambert) for the given fillstyle.<br>
     *
     * @param material The material to update
     * @param style The style to use to update the material
     * @returns The updated material
     */
    static updateMeshMaterial(material: MeshLambertMaterial, style: FillStyle): MeshLambertMaterial;
    /**
     * Fit the given index array to the smallest precision needed to be able to represent the maximum index.<br>
     * This ensure memory savings if the maximum index is below Uint16 or Uint8 max value.
     * @param array the array.
     * @param maxIndex the maximum index value if it is known. If not defined, the given array will be parsed to evaluate the max index value.
     * @returns the Uint BufferAttribute
     */
    static fitUintTypedArray(array: number[] | Uint8Array | Uint16Array | Uint32Array, maxIndex?: number): Uint8Array | Uint16Array | Uint32Array;
    /**
     * Compute the 3D bounding box, but only considering the triangles indexed by the given index buffer.<br>
     * This is useful when the BufferAttribute can include invalid data such as surfaces having NaN elevations in some Z values.
     */
    static computeBoundingBoxFromIndexedBuffer(positionBuffer: BufferAttribute, indexBuffer: BufferAttribute, target?: Box3): Box3;
    static getClassName(): string;
    getClassName(): string;
}
