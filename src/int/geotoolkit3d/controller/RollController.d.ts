import { AbstractController } from '@int/geotoolkit3d/controller/AbstractController';
/**
 * Plane to be rolled by RollController
 * @enum
 * @readonly
 * @type {string}
 */
export declare enum Plane {
    /**
     * XY plane
     */
    XY = "xy",
    /**
     * XZ plane
     */
    XZ = "xz",
    /**
     * YZ plane
     */
    YZ = "yz"
}
/**
 * Use is discouraged as it's currently not possible to maintain roll when moving camera using the API.<br>
 */
export declare class RollController extends AbstractController {
    constructor(options?: RollController.Options);
    /**
     * Set roll controller options
     * @returns this
     */
    setOptions(options?: RollController.Options): this;
    /**
     * Get roll controller options
     * @returns options
     */
    getOptions(): RollController.OptionsOut;
    onMouseWheel(event: WheelEvent): void;
}
export declare namespace RollController {
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
         * Panning speed factor.
         * Default is 0.001
         */
        panspeed: number;
        /**
         * Disable camera roll rotation.
         * Default is false.
         */
        noroll: boolean;
        /**
         * Plane to roll camera.
         * Default is Plane.XZ
         */
        plane: Plane;
    };
    export {};
}
