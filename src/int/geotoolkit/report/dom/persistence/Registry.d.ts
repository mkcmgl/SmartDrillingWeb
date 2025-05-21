/**
 * @module geotoolkit/report/dom/persistence/Registry
 */
import { Registry as DefaultRegistry } from '@int/geotoolkit/persistence/Registry';
/**
 * The implementation of the default DOM serializer registry
 */
export declare class Registry extends DefaultRegistry {
    constructor();
    /**
     * Return instance of the default registry
     * @returns registry
     */
    static getInstance(): DefaultRegistry;
}
