import { AbstractController } from '@int/geotoolkit3d/controller/AbstractController';
/**
 * A controller that emulates an 'Trackball' behavior.<br>
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
export declare class TrackballController extends AbstractController {
    constructor(options?: TrackballController.Options);
    /**
     * Set trackball controller options
     * @returns this
     */
    setOptions(options?: TrackballController.Options): this;
    /**
     * Get trackball controller options
     * @returns options
     */
    getOptions(): TrackballController.OptionsOut;
    onMouseWheel(event: WheelEvent): void;
}
export declare namespace TrackballController {
    /**
     * The options that can be set using the constructor, or using setOptions(options)
     */
    export type Options = AbstractController.Options & Partial<OptionsBase>;
    /**
     * The options returned by getOptions().
     */
    export type OptionsOut = AbstractController.OptionsOut & OptionsBase;
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
         * Panning speed factor.
         * Default is 0.001
         */
        panspeed: number;
        /**
         * Disable camera rolling.
         * Default is false.
         */
        noroll: boolean;
        /**
         * Disable lookAt redefinition using double click
         * Default is false.
         */
        nodblclick: boolean;
        /**
         * Double click speed emulation (for touch devices) in ms
         * Default is 250.
         */
        dblclickspeed: number;
        /**
         * Static moving.
         * If set to true, disable dynamic dampening, making controller moves more sharp.
         * Default is false.
         */
        staticmoving: boolean;
        /**
         * Dynamic damping factor applied when moving the controller.
         * A higher value will smooth more the controls, while a smaller value will make controls more sharp.
         * Default is 0.2, suggested values are between 0.1 and 0.9
         */
        dynamicdampingfactor: number;
    };
    export {};
}
