/**
 * @module geotoolkit3d/scene/reservoir/AbstractReservoirGrid
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { EventDispatcher } from '@int/geotoolkit3d/scene/reservoir/EventDispatcher';
import type { Type } from '@int/geotoolkit3d/Event';
/**
 * Base class for geotoolkit3d Reservoir Grid's
 */
export declare abstract class AbstractReservoirGrid extends Object3D {
    protected constructor();
    /**
     * A decorator implements EventDispatcher.on()
     * @param type type of event
     * @param callback callback function
     */
    on(type: Type, callback: EventDispatcher.ReservoirEventCallback): void;
    /**
     * A decorator implements EventDispatcher.off()
     * @param type type of event
     * @param callback callback function
     */
    off(type: Type, callback: EventDispatcher.ReservoirEventCallback): void;
    /**
     * Remove the helper shape representing the selected cell from being displayed.
     */
    abstract removeHighlightShape(): void;
}
