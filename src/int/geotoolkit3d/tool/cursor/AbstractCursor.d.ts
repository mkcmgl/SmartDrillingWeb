/**
 * @module geotoolkit3d/tool/cursor/AbstractCursor
 */
import { Vector3 } from 'three';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
/**
 * Abstract class for 3D cursor shapes.<br>
 * <br>
 * Subclasses are responsible of implementing the actual rendering by adding a Mesh/Line to this object3d.<br>
 * The setCursorPosition will be called whenever the cursor is moved by the user.<br>
 * <br>
 */
export declare abstract class AbstractCursor extends Object3D {
    protected constructor();
    /**
     * Sets the cursor position in world coordinates.<br>
     * This can be called manually to move the cursor programmatically.<br>
     * @param position The new cursor position
     * @returns this
     */
    abstract setCursorPosition(position: Vector3): this;
}
