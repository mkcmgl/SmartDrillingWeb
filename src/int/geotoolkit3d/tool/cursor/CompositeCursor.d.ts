/**
 * @module geotoolkit3d/tool/cursor/CompositeCursor
 */
import { AbstractCursor } from '@int/geotoolkit3d/tool/cursor/AbstractCursor';
import type { Vector3 } from 'three';
/**
 * A composite cursor that can contain several cursors.<br>
 * <br>
 * The main advantage of using CompositeCursor instead of having several CursorTool is that is avoid doing a Picking operation for each sub cursor.
 */
export declare class CompositeCursor extends AbstractCursor {
    /**
     * @param options See geotoolkit3d.scene.Object3D for inherited options
     */
    constructor(options: CompositeCursor.Options);
    /**
     * Set the cursor position in world coordinates
     * @param position The new cursor position
     * @returns this
     */
    setCursorPosition(position: Vector3): this;
}
export declare namespace CompositeCursor {
    /**
     * See geotoolkit3d.scene.Object3D for inherited options
     */
    type Options = {
        /**
         * The cursors to add
         */
        cursors: AbstractCursor[];
    };
}
