import { OrbitController } from '@int/geotoolkit3d/controller/OrbitController';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { AbstractDeviceSupport } from '@int/geotoolkit3d/tool/devicesupport/AbstractDeviceSupport';
/**
 * A controller that emulates an 'Orbit' behavior.<br>
 * <br>
 * This controller let the user manipulate the camera position using mouse or touch input.<br>
 * <br>
 * This controller uses a 3D anchor point and will revolve around it (named lookAt).<br>
 * This anchor point can be changed either by user action (double click/tap) or programmatically.<br>
 * <br>
 * It will let the user rotate the camera on the 'horizontal' axis infinitely.<br>
 * But it prevents the user from rotate the camera on the vertical axis more than 0-180 degrees.<br>
 * So that the user cannot put the camera upside down.<br>
 * <br>
 * This controller also support 'zooming' by moving the camera forward or backward.<br>
 * <br>
 * To be used, it should be set on the Plot through the setOptions function.
 * <br>
 * Most of the behaviors can be configured either for speed or even to disable some actions through the setOptions.
 * <br>
 *
 * @see {@link @int/geotoolkit3d/tool/AbstractGestureTool~AbstractGestureTool} for input device support.
 * @see {@link @int/geotoolkit3d/Plot~Plot} for more details
 */
export declare class FirstPersonController extends OrbitController {
    constructor(options?: FirstPersonController.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @returns this
     */
    setOptions(options?: FirstPersonController.Options): this;
    /**
     * Get first person controller options
     * @returns options
     */
    getOptions(): FirstPersonController.OptionsOut;
    onDrag(event: AbstractDeviceSupport.CustomPointerEvent & EventArgs): void;
    onSlide(event: AbstractDeviceSupport.CustomPointerEvent & EventArgs): void;
}
export declare namespace FirstPersonController {
    /**
     * The options that can be set using the constructor, or using setOptions(options)
     */
    export type Options = OrbitController.Options & Partial<OptionsBase>;
    /**
     * The options returned by getOptions().
     */
    export type OptionsOut = OrbitController.OptionsOut & OptionsBase;
    /**
     * The options specific to this file (this class excluding its parent classes)
     */
    type OptionsBase = {
        /**
         * Lock the cursor to the canvas on mouse down.
         * Default is false.
         */
        pointerlock: boolean;
        /**
         * Invert the y values, false = mouse down, camera looks down.
         * Default is false.
         */
        inverty: boolean;
        /**
         * Delta cap.
         * Default is 0.1
         */
        deltacap: number;
        /**
         * Key Pan speed, the speed factor when panning using keyboard.
         * Default is 168
         */
        keypanspeed: number;
    };
    export {};
}
