/**
 * @module geotoolkit3d/tool/cursor/CrossHair2DCursor
 */
import { AbstractCursor } from '@int/geotoolkit3d/tool/cursor/AbstractCursor';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Mode } from '@int/geotoolkit3d/scene/grid/Grid';
import type { Box3, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { Vector3 } from 'three';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { Plot } from '@int/geotoolkit3d/Plot';
/**
 * A cross hair 2D representation of the cursor
 */
export declare class CrossHair2DCursor extends AbstractCursor {
    constructor(options: CrossHair2DCursor.Options);
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
    setOptions(options?: CrossHair2DCursor.OptionsBase): this;
    getOptions(): Required<CrossHair2DCursor.OptionsBaseOut>;
    beforeRender(scene: Scene, camera: PerspectiveCamera | OrthographicCamera, plot: Plot, renderer: WebGLRenderer): this;
}
export declare namespace CrossHair2DCursor {
    /**
     * See geotoolkit3d.scene.Object3D for inherited options
     */
    type Options = {
        /**
         * The linestyle for the cursor
         */
        linestyle?: LineStyle;
        /**
         * The limiting bounding box for the crosshair, used to compute the line length
         */
        limits: Box3;
        /**
         * The display strategy to show/hide lines depending on camera position
         */
        mode?: Mode;
    };
    /**
     * The options
     */
    type OptionsBase = Object3D.Options & Partial<Options>;
    type OptionsBaseOut = OptionsBase;
}
