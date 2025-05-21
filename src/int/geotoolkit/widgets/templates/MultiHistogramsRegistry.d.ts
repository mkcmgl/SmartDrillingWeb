/**
 * @module geotoolkit/widgets/templates/MultiHistogramsRegistry
 */
import { Registry } from '@int/geotoolkit/persistence/Registry';
/**
 * The implementation of the default serializer registry for MultiHistograms widget
 */
export declare class MultiHistogramsRegistry extends Registry {
    constructor();
    /**
     * Return instance of the default registry
     * @returns registry
     */
    static getInstance(): MultiHistogramsRegistry;
}
