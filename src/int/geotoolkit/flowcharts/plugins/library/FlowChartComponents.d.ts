import type { IComponent } from '@int/geotoolkit/flowcharts/shapes/IComponent';
/**
 * This class provides a set of Flow Chart related diagram visuals prototypes
 * Method getComponents returns an array of available visual prototypes
 */
export declare class FlowChartComponents {
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
