/**
 * @module geotoolkit/schematics/factory/MultiDiameterComponentFactoryRegistry
 */
import { ComponentNodeFactoryRegistry } from '@int/geotoolkit/schematics/factory/ComponentNodeFactoryRegistry';
/**
 * Schematics components factory registry with extra {@link @int/geotoolkit/schematics/scene/MultiDiameterComponentNode~MultiDiameterComponentNode} elements
 */
export declare class MultiDiameterComponentFactoryRegistry extends ComponentNodeFactoryRegistry {
    /**
     * Populates the factory registry with default mapping for component factories
     * @returns this
     */
    setupDefaults(): this;
}
