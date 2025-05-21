import { Vector } from '@int/geotoolkit/map/sources/Vector';
import type { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
/**
 * Composite source that stores multiple vector sources for centralized control and processing
 */
export declare class CompositeSource extends Vector {
    /**
     * @param [options] source(s) for storing or properties object
     */
    constructor(options?: CompositeSource.Options);
    /**
     * Adds vector source to the list for getting new features
     * @param source source to add
     * @returns this
     */
    addFeatureSource(source: Vector): this;
    /**
     * Removes source from the sources list
     * @param source source to remove
     * @returns this
     */
    removeFeatureSource(source: Vector): this;
    /**
     * Gets current sources list used to add a new features
     */
    getFeatureSourceList(): Vector[];
    /**
     * Sets map coordinate system.
     * @param system map coordinate system
     * @returns this
     */
    setMapCoordinateSystem(system: string | AbstractSystem): this;
    /**
     * Sets initial features coordinate system.
     * @param system initial coordinate system
     * @returns this
     */
    setInitialCoordinateSystem(system: AbstractSystem): this;
    /**
     * Sets the grid size for layer partitioning that is used for server requests
     * @param resolution grid size
     * @returns this
     */
    setRequestResolution(resolution: number): this;
    /**
     * Sets the unique identifier for the features
     * @param field unique identifier
     * @returns this
     */
    setUniqueField(field: string): this;
    /**
     * Notifies source to remove all features added.
     * @returns this
     */
    clear(): this;
    /**
     * Disposes this source, once disposes a node should not be used anymore.<br>
     */
    dispose(): void;
}
export declare namespace CompositeSource {
    /**
     * source(s) for storing or properties object
     */
    type Options = Vector.Options & {
        /**
         * source(s) for storing
         */
        sources?: Vector | Vector[];
    };
}
