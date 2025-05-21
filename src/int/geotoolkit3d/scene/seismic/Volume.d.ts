/**
 * @module geotoolkit3d/scene/seismic/Volume
 */
import type { Object3D as _Object3D } from 'three';
import { Vector3 } from 'three';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { SeismicModes } from '@int/geotoolkit3d/Constants';
import { Slice } from '@int/geotoolkit3d/scene/seismic/Slice';
import type { IndexCoordinates } from '@int/geotoolkit3d/transformation/IndexCoordinates';
import type { XYCoordinates } from '@int/geotoolkit3d/transformation/XYCoordinates';
/**
 * A seismic volume object.<br>
 * <br>
 * This object is a container of seismic objects having coordinates defined in index domain (inline, xline, ...).<br>
 * It holds the transformation Index-to-XY and applies it to those seismic object if the display mode is XY.<br>
 * <br>
 * Objects added will be transformed on the fly to be displayed at the correct location with the appropriate size.<br>
 */
export declare class Volume extends Object3D {
    constructor(options: Volume.Options);
    /**
     * Set the Seismic Volume options.
     */
    setOptions(options?: Volume.OptionsBase): this;
    /**
     * Get the Seismic Volume options.
     */
    getOptions(): Volume.OptionsBaseOut;
    /**
     * Get the index coordinates
     */
    getIndexCoordinates(): IndexCoordinates;
    /**
     * Get the XY coordinates
     */
    getXYCoordinates(): XYCoordinates;
    /**
     * returns if the point is inside the xy volume
     * @param point point in xy coordinates
     */
    isPointInside(point: Vector3): boolean;
    /**
     * Returns slices
     */
    getSlices(): Slice[];
    /**
     * Apply seismic matrix to object
     */
    applyMatrixTo(object: _Object3D): void;
}
export declare namespace Volume {
    type Options = OptionsBase & {
        /**
         * The index coordinates, usually inline/crossline or IJ
         */
        index: IndexCoordinates;
        /**
         * The world coordinates, usually xy.
         */
        xy: XYCoordinates;
    };
    type OptionsBase = Object3D.Options & {
        /**
         * The display mode, either index or xy
         */
        displaymode?: SeismicModes;
    };
    type OptionsBaseOut = Required<OptionsBase>;
}
