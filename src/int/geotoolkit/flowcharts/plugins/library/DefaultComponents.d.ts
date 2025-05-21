import type { IComponent } from '@int/geotoolkit/flowcharts/shapes/IComponent';
/**
 * This class provides a set of default diagram visuals prototypes, such as Link, Rectangle, Text, etc.
 * Method getComponents returns an array of available visual prototypes
 */
export declare class DefaultComponents {
    /**
     * Gets all components stored in the library
     * @returns an array of prototype instances
     */
    static getComponents(): IComponent[];
    /**
     * Default components' category name
     */
    static get Category(): string;
}
