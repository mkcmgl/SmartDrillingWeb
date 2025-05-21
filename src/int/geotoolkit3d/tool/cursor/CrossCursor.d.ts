/**
 * @module geotoolkit3d/tool/cursor/CrossCursor
 */
import { AbstractCursor } from '@int/geotoolkit3d/tool/cursor/AbstractCursor';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { OrthographicCamera, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three';
import type { Plot } from '@int/geotoolkit3d/Plot';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
/**
 * A small 3D cross representation of the cursor
 */
export declare class CrossCursor extends AbstractCursor {
    constructor(options?: CrossCursor.Options);
    /**
     * Set the cursor position in world coordinates
     * @param position The new cursor position
     * @returns this
     */
    setCursorPosition(position: Vector3): this;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: CrossCursor.OptionsBase): this;
    getOptions(): CrossCursor.OptionsBaseOut;
    beforeRender(scene: Scene, camera: PerspectiveCamera | OrthographicCamera, plot: Plot, renderer: WebGLRenderer): this;
}
export declare namespace CrossCursor {
    /**
     * See geotoolkit3d.scene.Object3D for inherited options
     */
    type Options = {
        /**
         * The linestyle for the cursor
         */
        linestyle?: LineStyle;
        /**
         * The cursor size in device
         */
        cursorsize?: number;
    };
    /**
     * The options
     */
    type OptionsBase = Object3D.Options & Options;
    type OptionsBaseOut = Required<Object3D.Options> & Options;
}
