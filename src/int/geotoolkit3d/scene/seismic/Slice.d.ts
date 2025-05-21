import { Vector3 } from 'three';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { SliceMaterial } from '@int/geotoolkit3d/scene/seismic/SliceMaterial';
import type { IndexCoordinates } from '@int/geotoolkit3d/transformation/IndexCoordinates';
import type { Group } from '@int/geotoolkit/scene/Group';
import { ITiledSurface } from '@int/geotoolkit3d/scene/seismic/ITiledSurface';
/**
 * A seismic slice object.<br>
 * <br>
 * A seismic slice is a 2D seismic cross-section following one dimension of a seismic volume (inline, xline or time/depth slice).<br>
 * The actual seismic to be displayed is provided by the given {@link @int/geotoolkit3d/scene/seismic/SliceMaterial~SliceMaterial}.<br>
 * <br>
 * The resulting shape is a 2D plane displaying seismic.<br>
 * It is generally added to a {@link @int/geotoolkit3d/scene/seismic/Volume~Volume} that will handle the IJ-to-XY conversion.<br>
 */
export declare class Slice extends Object3D implements ITiledSurface {
    constructor(options: Slice.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @throws Error if Slice location is not set
     * @returns this
     */
    setOptions(options?: Slice.OptionsBase): this;
    /**
     * Get the Slice options
     */
    getOptions(): Slice.OptionsBaseOut;
    /**
     * Get the slice's material
     */
    getSliceMaterial(): SliceMaterial;
    /**
     * Get the slice location in I, J or Z
     */
    getSliceLocation(): Slice.Location;
    /**
     * Get the overlay Group of this slice, if any
     */
    getOverlay(): Group | null;
    /**
     * Get the index coordinates
     */
    getIndexCoordinates(): IndexCoordinates;
    /**
     * Dispose method for Slice material
     */
    dispose(): void;
    /**
     * Return the world position of a specific corner of this slice quad.
     * The indices represent the 4 corners of the quad like so:
     * 0---1
     * |   |
     * 2---3
     * If this slice (or a parent object) has been moved/rotated since the last render,
     * please call Volume.updateWorldMatrix(true, true), or Slice.updateWorldMatrix(true, true) first for correct results.
     * (Updating the Volume will update all its children Slices at once.)
     * @param index Index of the slice quad, from 0 to 3.
     * @param target Optional point Vector3, will be updated and returned if provided.
     */
    getCorner(index: number, target?: Vector3): Vector3;
    /**
     * Return the local position of a specific corner of this slice quad.
     * The indices represent the 4 corners of the quad like so:
     * 0---1
     * |   |
     * 2---3
     * If the slice is made of several subquads (using tiles) the corners will still represent the global slice, not just a subquad.
     * @param index Index of the slice quad, from 0 to 3.
     * @param target Optional point Vector3, will be updated and returned if provided.
     */
    getLocalCorner(index: number, target?: Vector3): Vector3;
    resetTiles(): void;
}
export declare namespace Slice {
    /**
     * Constructor options, where a few options are mandatory.
     */
    export type Options = OptionsBase & {
        /**
         * The slice's material containing the seismic textures
         */
        material: SliceMaterial;
        /**
         * The index coordinates
         */
        index: IndexCoordinates;
    };
    /**
     * Options used in setOptions, where most options are optionals.
     */
    export type OptionsBase = Partial<CommonOptions> & Object3D.Options & Partial<SliceMaterial.Options>;
    /**
     * Options returned by getOptions, where some options are sure to be defined.
     */
    export type OptionsBaseOut = Required<CommonOptions> & Required<Object3D.Options> & SliceMaterial.OptionsBaseOut;
    /**
     * Represent the position of the slice along the i,j,k axes.
     * One of the axes must be defined when creating the Slice.
     */
    export type Location = {
        /**
         * The inline number of the section
         */
        i?: number;
        /**
         * The xline number of the section
         */
        j?: number;
        /**
         * The sample <b>index</b> of the horizontal slice
         */
        z?: number;
    };
    /**
     * The base options related to this file.
     */
    type CommonOptions = {
        /**
         * The slice location in I, J or Z.
         * Must be defined with at least one of its sub-parameters in constructor options.
         */
        slicelocation?: Location;
        /**
         * The slice first trace number
         */
        xstart?: number;
        /**
         * The slice first sample number
         */
        ystart?: number;
        /**
         * The slice width (in traces), by default computes the size of the selected section
         */
        width?: number;
        /**
         * The slice height (in samples), by default computes the size of the selected section
         */
        height?: number;
        /**
         * the lowest level of resolution equals to log2(minTextureSize). The default minimum texture is 512
         */
        minlod: number;
        /**
         * the highest level of resolution to log2(maxTextureSize). The default maximum texture size is gl_max_texture_size / 2
         */
        maxlod: number;
        /**
         * Array of points for definition of plane
         */
        points?: Vector3[];
    };
    export {};
}
