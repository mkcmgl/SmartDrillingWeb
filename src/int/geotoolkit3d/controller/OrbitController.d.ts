import { AbstractController } from '@int/geotoolkit3d/controller/AbstractController';
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
export declare class OrbitController extends AbstractController {
    constructor(options?: OrbitController.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @returns this
     */
    setOptions(options?: OrbitController.Options): this;
    /**
     * Get orbit controller options
     * @returns options
     */
    getOptions(): OrbitController.OptionsOut;
    onMouseWheel(event: WheelEvent): void;
}
export declare namespace OrbitController {
    /**
     * The options that can be set using the constructor, or using setOptions(options)
     */
    export type Options = Partial<OptionsBase> & AbstractController.Options;
    /**
     * The options returned by getOptions().
     */
    export type OptionsOut = OptionsBase & AbstractController.OptionsOut;
    /**
     * The options specific to this file (this class excluding its parent classes)
     */
    type OptionsBase = {
        /**
         * Minimum distance when zooming.
         * Default is 0.
         */
        mindistance: number;
        /**
         * Maximum distance when zooming.
         * Default is (positive) Infinity.
         */
        maxdistance: number;
        /**
         * Disable rotation.
         * Default is false.
         */
        norotate: boolean;
        /**
         * Rotation speed factor.
         * Default is 1.
         */
        rotatespeed: number;
        /**
         * Disable lookAt redefinition using double click.
         * Default is false.
         */
        nodblclick: boolean;
        /**
         * Double click speed emulation (for touch devices) in ms.
         * Default is 250.
         */
        dblclickspeed: number;
        /**
         * Auto rotate camera around object.
         * Default is false.
         */
        autorotate: boolean;
        /**
         * The speed for auto rotating, in rotation per minute.
         * Default is 2.
         */
        autorotatespeed: number;
        /**
         * The minimum camera angle from the polar axis, in radian.
         * Default is 0.
         */
        minpolarangle: number;
        /**
         * The maximum camera angle from the polar axis, in radian.
         * Default is PI.
         */
        maxpolarangle: number;
        /**
         * The minimum azimuth angle, to lock the camera azimuth rotation.
         * Default is -Inifinity (not locked).
         */
        minazimuthangle: number;
        /**
         * The maximum azimuth angle, to lock the camera azimuth rotation.
         * Default is (positive) Inifinity (not locked).
         */
        maxazimuthangle: number;
        /**
         * If true, lock the zoom speed to be constant (linear).
         * If false, zoom speed will adapt to zoom distance from focus point.
         * Default is false.
         */
        constantzoom: boolean;
    };
    export {};
}
