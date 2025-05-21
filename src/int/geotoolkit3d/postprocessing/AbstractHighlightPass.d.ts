/**
 * @module geotoolkit3d/postprocessing/AbstractHighlightPass
 */
import { AbstractPass } from '@int/geotoolkit3d/postprocessing/AbstractPass';
import type { Object3D as ThreeObject3D } from 'three';
/**
 * Base class for highlight passes
 */
export declare abstract class AbstractHighlightPass extends AbstractPass {
    protected constructor();
    /**
     * Clears highlighted objects
     */
    clearSelectedObjects(): void;
    /**
     * Add new object to highlight
     * @param object object to highlight
     */
    addSelectedObjects(object: ThreeObject3D): void;
}
