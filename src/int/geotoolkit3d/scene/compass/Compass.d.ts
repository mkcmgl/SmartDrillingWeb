import type { Object3D, OrthographicCamera, WebGLRendererParameters } from 'three';
import { PerspectiveCamera } from 'three';
/**
 * A 3D compass.<br>
 * <br>
 * This class adds a canvas in the given HTML element that will be used to render a 3D compass shape.<br>
 * <br>
 * The compass will rotate the camera to look at the compass shape in the same direction that the parent plot is looking.<br>
 * The compass shape itself can be static.<br>
 */
export declare class Compass {
    constructor(options: Compass.Options);
    /**
     * Return the compass shape
     *
     * @returns The compass shape
     */
    getCompassObject(): Object3D;
    /**
     * Sets the compass shape
     *
     * @param newObject The new compass shape
     * @returns this
     */
    setCompassObject(newObject: Object3D): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Compass {
    /**
     * The options
     */
    type Options = {
        /**
         * The div element in which the canvas will be created and added.
         */
        container?: HTMLElement;
        /**
         * The canvas element to render to.
         */
        canvas?: HTMLElement;
        /**
         * renderer options for the compass
         */
        renderer?: {
            /**
             * renderer parameters for the compass
             */
            parameters?: WebGLRendererParameters;
        };
        /**
         * The visibility
         */
        visible?: boolean;
        camera?: PerspectiveCamera | OrthographicCamera;
    };
}
