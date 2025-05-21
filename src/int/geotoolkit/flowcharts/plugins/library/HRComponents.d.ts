import type { IComponent } from '@int/geotoolkit/flowcharts/shapes/IComponent';
/**
 * This class provides a set of HR diagram visuals prototypes.
 * Method getComponents returns an array of available visual prototypes
 */
export declare class HRComponents {
    /**
     * Gets all components stored in the library
     * @returns an array of prototype instances
     */
    static getComponents(): IComponent[];
    /**
     * Category name
     */
    static get Category(): string;
}
