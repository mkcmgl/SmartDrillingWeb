/**
 * @module geotoolkit/seismic/widgets/persistence/Registry
 */
import { Registry as DefaultRegistry } from '@int/geotoolkit/persistence/Registry';
/**
 * The implementation fo the default serializer registry for SeismicViewWidget
 */
export declare class Registry extends DefaultRegistry {
    constructor();
    /**
     * Return instance of the default registry
     * @returns registry
     */
    static getInstance(): DefaultRegistry;
}
