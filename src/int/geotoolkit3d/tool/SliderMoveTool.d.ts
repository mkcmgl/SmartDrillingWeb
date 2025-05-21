import { AbstractMoveTool } from '@int/geotoolkit3d/tool/AbstractMoveTool';
import { Vector2 } from 'three';
import type { Object3D as ThreeObject3D } from 'three';
/**
 * This class offers the ability to drag an object across the scene.<br>
 * <br>
 * Internally it computes the distance dragged considering the Plot as a two dimension slider (horizontal/vertical).<br>
 * Calling code should provide the function that convert this 2D displacement in an actual 'move'.<br>
 */
export declare class SliderMoveTool extends AbstractMoveTool {
    constructor(options: SliderMoveTool.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options See {@link import("geotoolkit3d/tool/AbstractMoveTool").AbstractMoveTool.setOptions} for inherited options
     * @returns this
     */
    setOptions(options: SliderMoveTool.OptionsBase): this;
    getOptions(): SliderMoveTool.OptionsBaseOut;
    /**
     * Sets the function that should apply the computed 'move operation' to the targeted object.<br>
     * <br>
     * Function parameters are:<br>
     * `{THREE.Object3D}` object The object being moved<br>
     * `{THREE.Vector2}` move The displacement in screen space to apply<br>
     * `{THREE.Vector2}` initialPoint The initial point<br>
     * Function should return 'true' to reset the reference point used for distance calculation<br>
     * @param func The function
     * @returns this
     */
    setMoveFunction(func: SliderMoveTool.ApplyMoveFunction): this;
    /**
     * Function to clean up the references from this tool.
     */
    dispose(): void;
}
export declare namespace SliderMoveTool {
    type Options = AbstractMoveTool.Options & {
        /**
         * The starting point for displacement in device coordinates
         */
        initialpoint?: Vector2;
    };
    type ApplyMoveFunction = (object: ThreeObject3D, operation: Vector2, initialPoint: Vector2) => boolean;
    type OptionsBase = Options;
    type OptionsBaseOut = Required<OptionsBase>;
}
