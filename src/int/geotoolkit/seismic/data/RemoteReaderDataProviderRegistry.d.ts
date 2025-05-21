import type { RemoteReaderDataProvider } from '@int/geotoolkit/seismic/data/RemoteReaderDataProvider';
/**
 * Define registry of data providers for {@link @int/geotoolkit/seismic/data/RemoteSeismicDataSource~RemoteSeismicDataSource}. A new provider can be
 * registered and be called by version
 */
export declare class RemoteReaderDataProviderRegistry {
    constructor();
    /**
     * Return instance of the registry
     * @returns registry
     */
    static getInstance(): RemoteReaderDataProviderRegistry;
    /**
     * Register a provider
     * @param version unique version of provider
     * @param provider provider or be registered
     */
    register(version: string | number, provider: RemoteReaderDataProvider): void;
    /**
     * Return a registered provider for the specified version. This method doesn't create a new instance.
     * @param version version of protocol
     */
    getProvider(version: string | number): RemoteReaderDataProvider | null;
    /**
     * Create a new instance of {@link @int/geotoolkit/seismic/data/RemoteReaderDataProvider~RemoteReaderDataProvider}
     * @param version version of protocol
     * @param [options] optional options to pass to an instance of provider
     */
    createProvider(version: string | number, options?: any): RemoteReaderDataProvider;
    /**
     * Enumerate each provider
     * @throws Error if callback is not a function
     * @param [callback] a function with two parameters version and provider
     * @example
     * import {RemoteReaderDataProviderRegistry} from '@int/geotoolkit/seismic/data/RemoteReaderDataProviderRegistry';
     * const registry = RemoteReaderDataProviderRegistry.getInstance()
     * registry.forEach((version, provider) => {
     *   ...
     * });
     */
    forEach(callback?: (version: string | number, provider: RemoteReaderDataProvider) => void): void;
}
