/**
 * @module geotoolkit/schematics/factory/ComponentNodeFactoryRegistry
 */
import { EventDispatcher, Events } from '@int/geotoolkit/util/EventDispatcher';
import { AbstractComponentNodeFactory } from '@int/geotoolkit/schematics/factory/AbstractComponentNodeFactory';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
/**
 * Schematics components factory registry
 */
export declare class ComponentNodeFactoryRegistry extends EventDispatcher {
    /**
     * @param [setupDefaults] when "false" the registry is created empty
     * @param [aliases] components names aliases
     */
    constructor(setupDefaults?: boolean, aliases?: Record<string, string | string[]>);
    on<E extends keyof ComponentNodeFactoryRegistry.EventMap>(type: E, callback: (eventType: E, sender: this, args: ComponentNodeFactoryRegistry.EventMap[E]) => void): this;
    off<E extends keyof ComponentNodeFactoryRegistry.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ComponentNodeFactoryRegistry.EventMap[E]) => void): this;
    notify<E extends keyof ComponentNodeFactoryRegistry.EventMap>(type: E, source: ComponentNodeFactoryRegistry, args?: ComponentNodeFactoryRegistry.EventMap[E]): this;
    /**
     * Gets aliases map<br>
     * Note that a copy of aliases map is returned.
     * @returns aliases
     */
    getAliases(): Record<string, string | string[]>;
    /**
     * Sets component name(s) aliases map
     * @param jsonNamesToAliases aliases
     * @param [extendExisting] extend existing overlapping mapping nodes flag;
     * "false" stands for replacing existing mapping nodes if overlapped
     * @returns this
     */
    setAliases(jsonNamesToAliases: Record<string, string | string[]>, extendExisting?: boolean): this;
    /**
     * Clears the content.
     * @returns this
     */
    clear(): this;
    /**
     * Populates the factory registry with default mapping for component factories
     * @returns this
     */
    setupDefaults(): this;
    /**
     * Set componentName-to-nodeFactory link.
     * @param componentName component name associated with node factory
     * @param parameter2 node factory OR method returning a ComponentNode implementation instance.
     * @param [parameter3] method to validate component geometry data
     * @returns this
     */
    setFactory(componentName: string, parameter2: AbstractComponentNodeFactory | ((data?: WellBoreData.Element) => ComponentNode), parameter3?: (geometryData: WellBoreData.Entity) => boolean): this;
    /**
     * Checks if componentName is associatedwith a node factory
     * @param componentName component name associated with node factory
     * @returns true if a factory is found; false otherwise
     */
    containsFactory(componentName: string): boolean;
    /**
     * Gets node factory associated with the componentName passed.
     * Return null if  node factory not found.
     * @param componentName component name associated with node factory
     */
    getFactory(componentName: string): AbstractComponentNodeFactory;
    /**
     * Gets array of registered component names
     */
    getRegisteredComponents(): string[];
    /**
     * Sets componentName-to-componentFactory mapping.
     * @param mapping array of pairs as follows:
     * @returns this
     * @example
     * factoryRegistry.setMapping([
     *     { name: 'MyComponent1', factory: new MyComponent1Factory()},
     *     { name: 'MyComponent2', factory: new MyComponent2Factory()},
     *     //...
     * ]);
     */
    setMapping(mapping: {
        name: string;
        factory: AbstractComponentNodeFactory | ((data?: WellBoreData.Element) => ComponentNode);
    }[]): this;
}
export declare namespace ComponentNodeFactoryRegistry {
    type EventMap = EventDispatcher.EventMap & {
        [Events.PropertyChanged]: void;
    };
}
