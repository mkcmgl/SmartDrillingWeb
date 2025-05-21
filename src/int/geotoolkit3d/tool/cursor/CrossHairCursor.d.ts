/**
 * @module geotoolkit3d/tool/cursor/CrossHairCursor
 */
import { AbstractCursor } from '@int/geotoolkit3d/tool/cursor/AbstractCursor';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { Box3, Vector3 } from 'three';
/**
 * A crosshair representation of the cursor.
 */
export declare class CrossHairCursor extends AbstractCursor {
    constructor(options: CrossHairCursor.Options);
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
    setOptions(options?: CrossHairCursor.OptionsBase): this;
    getOptions(): CrossHairCursor.OptionsBaseOut;
}
export declare namespace CrossHairCursor {
    /**
     * See geotoolkit3d.scene.Object3D for inherited options
     */
    type Options = {
        /**
         * The linestyle for the visible part of the cursor
         */
        visiblelinestyle?: LineStyle;
        /**
         * The linestyle for the hidden part of the cursor
         * To turn the part off, set this to false
         */
        hiddenlinestyle?: LineStyle | boolean;
        /**
         * The limiting bounding box for the crosshair, used to compute the line length
         */
        limits: Box3;
    };
    /**
     * The options
     */
    type OptionsBase = Object3D.Options & Partial<Options>;
    type OptionsBaseOut = Required<Object3D.Options> & Options;
}
