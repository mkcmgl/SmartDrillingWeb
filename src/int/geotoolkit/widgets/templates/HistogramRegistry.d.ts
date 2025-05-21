import { Registry } from '@int/geotoolkit/persistence/Registry';
/**
 * The implementation of the default serializer registry for HistogramWidget
 */
export declare class HistogramRegistry extends Registry {
    constructor();
    /**
     * Return instance of the default registry
     * @returns registry
     */
    static getInstance(): HistogramRegistry;
}
