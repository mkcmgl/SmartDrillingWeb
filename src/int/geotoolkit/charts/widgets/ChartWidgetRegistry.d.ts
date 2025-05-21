import { Registry } from '@int/geotoolkit/persistence/Registry';
/**
 * The implementation of the default serializer registry for ChartWidget
 */
export declare class ChartWidgetRegistry extends Registry {
    constructor();
    /**
     * Return instance of the default registry
     * @returns registry
     */
    static getInstance(): ChartWidgetRegistry;
}
