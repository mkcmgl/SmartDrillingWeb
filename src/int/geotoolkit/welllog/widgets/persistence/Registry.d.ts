import { Registry as DefaultRegistry } from '@int/geotoolkit/persistence/Registry';
/**
 * The implementation of the default serializer registry for WellLogWidgets
 */
export declare class Registry extends DefaultRegistry {
    constructor();
    /**
     * Add mapping, which class will be used during deserialization
     * @param shortName short name to serialize
     * @param className class name
     */
    addMapping(shortName: string, className: string): void;
    /**
     * Return instance of the default registry
     * @returns registry
     */
    static getInstance(): Registry;
}
