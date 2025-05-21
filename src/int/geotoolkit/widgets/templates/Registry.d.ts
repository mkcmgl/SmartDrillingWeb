import { Registry as DefaultRegistry } from '@int/geotoolkit/persistence/Registry';
/**
 * The implementation of the default serializer registry for widgets
 */
export declare class Registry extends DefaultRegistry {
    constructor();
    /**
     * Return instance of the default registry
     * @returns registry
     */
    static getDefault(): Registry;
}
