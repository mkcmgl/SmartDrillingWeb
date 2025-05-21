import { AbstractMoveTool } from '@int/geotoolkit3d/tool/AbstractMoveTool';
import type { Object3D as _Object3D } from 'three';
import { Vector3 } from 'three';
import type { AbstractPicking } from '@int/geotoolkit3d/picking/AbstractPicking';
/**
 * This class offers the ability to drag an object across the scene.<br>
 * <br>
 * It internally uses a plane facing the camera to compute the movement to be applied to the object.<br>
 * Which mean that the object will move in a 2D plane facing the camera.<br>
 * <br>
 * The movement operation applied to the object can be adjusted to fit a specific need by changing the adjust-function.<br>
 * <br>
 */
export declare class PlanarMoveTool extends AbstractMoveTool {
    constructor(options: PlanarMoveTool.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @returns this
     */
    setOptions(options: PlanarMoveTool.OptionsBase): this;
    /**
     * Get planar move tool options
     * (see {@link import("geotoolkit3d/tool/PlanarMoveTool").PlanarMoveTool.setOptions} for more info)
     * @returns options
     */
    getOptions(): PlanarMoveTool.OptionsBaseOut;
    /**
     * Sets the function to use in order to control the displacement to be applied.<br>
     * <br>
     * Can be used to snap the object to a given step or to limit maximum/minimum position.<br>
     * Function parameters are:<br>
     * `{THREE.Object3D}` object The object being moved<br>
     * `{THREE.Vector3}` move The displacement to adjust<br>
     * @param func The function to use
     * @returns this
     */
    setAdjustFunction(func: PlanarMoveTool.AdjustFunction): this;
}
export declare namespace PlanarMoveTool {
    /**
     * The options
     */
    type Options = AbstractMoveTool.Options & {
        /**
         * The center point of the plane used to compute displacement
         */
        pickingplanecenter?: Vector3;
        /**
         * A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link import("geotoolkit3d/picking/RendererPicking").RendererPicking filtering} documentation)
         */
        filter?: AbstractPicking.FilterFunction;
    };
    type AdjustFunction = (object: _Object3D, operation: Vector3) => void;
    /**
     * The options
     */
    type OptionsBase = Options;
    type OptionsBaseOut = Required<OptionsBase>;
}
