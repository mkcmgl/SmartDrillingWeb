/**
 * @module geotoolkit/schematics/factory/GrayScaleComponentFactoryRegistry
 */
import { ComponentNodeFactoryRegistry } from '@int/geotoolkit/schematics/factory/ComponentNodeFactoryRegistry';
/**
 * Schematics components factory registry extension to make use of gray-scale elements representation
 */
export declare class GrayScaleComponentFactoryRegistry extends ComponentNodeFactoryRegistry {
    /**
     * Populates the factory registry with default mapping for component factories
     * @returns this
     */
    setupDefaults(): this;
}
