/**
 * @module geotoolkit/schematics/data/WellBoreData
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Events } from '@int/geotoolkit/util/Collection';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * WellBore data container. Schematics data are stored in “geotoolkit.schematics.data.WellBoreData” object.
 * “addComponent” is the method to accumulate components in the object.
 *
 * @throws {TypeError} if param.units.depth or param.units.value does NOT belong to 'length' units
 */
export declare class WellBoreData extends EventDispatcher {
    constructor(options?: WellBoreData.Options | WellBoreData.Elements[]);
    on<E extends keyof WellBoreData.EventMap>(type: E, callback: (eventType: E, sender: this, args: WellBoreData.EventMap[E]) => void): this;
    off<E extends keyof WellBoreData.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: WellBoreData.EventMap[E]) => void): this;
    notify<E extends keyof WellBoreData.EventMap>(type: E, source: WellBoreData, args?: WellBoreData.EventMap[E]): this;
    /**
     * Creates or gets {@link @int/geotoolkit/schematics/data/WellBoreData~WellBoreData} instance from object (array of component data objects)
     *
     * @param [object] object can be in format of constructor
     */
    static fromObject(object?: WellBoreData | WellBoreData.Options | WellBoreData.Elements[]): WellBoreData | null;
    /**
     * Updates contents with the elements data
     *
     * @param modified element(s) to update
     * @returns this
     */
    updateComponents(modified: WellBoreData.Elements | WellBoreData.Elements[]): this;
    /**
     * Gets a component by its ID. Returns instance if the component
     * exists or null if id is null or no such component has been registered
     * @param id component id
     * @returns a meta information for component with the given id or null if not found.
     */
    getComponentById(id: string): WellBoreData.Elements;
    /**
     * Generates unique component id
     * @returns id
     */
    generateId(): string;
    /**
     * Adds the component's data to the well bore
     * @fires @int/geotoolkit/util/Collection~Events.Add
     * @param componentName element name
     * @param data data to build component node
     * @param [index] index to add the component at (@see {@link @int/geotoolkit/schematics/scene/WellBoreNode~WellBoreNode}'s 'setRenderingHints' method API for subset usage example)
     * @example
     * const wellBoreData = new WellBoreData();
     * // Adding standard component - i.e. component inherited
     * // from @int/geotoolkit/schematics/scene/ReusableComponentNode:
     * wellBoreData.addComponent('tubing', { geometry: { depth: { from: 350, to: 400}} });
     * // Adding custom component  - i.e. component inherited
     * // from {@int/geotoolkit/schematics/scene/ComponentNode}:
     * wellBoreData.addComponent('MyCustomComponentName', { parA: valueA, parB: valueB, setOfParametersC: { C1: valueC1, C2: valueC2 } });
     *
     * // (adding) - casings & cements:
     * wellBoreData.addComponent('casing', {
     *    description: 'Drive Pipe',
     *    geometry: {
     *        depth: {from: 0, to: 341},
     *        diameter: {outer: 26, inner: 25}
     *    }
     * });
     * @returns this
     */
    addComponent(componentName: string, data: WellBoreData.Element, index?: number): this;
    /**
     * Adds the component's data to the well bore
     * @fires @int/geotoolkit/util/Collection~Events.Add
     * @param elements schematics element(s) to add
     * @returns this
     */
    addComponents(elements: WellBoreData.Elements | WellBoreData.Elements[]): this;
    /**
     * Gets all the component's data if available; "undefined" otherwise
     *
     * @param componentName component name
     * @returns the component's data array
     */
    getComponent(componentName: string): WellBoreData.Element[];
    /**
     * Removes all data elements with the name specified
     * @fires @int/geotoolkit/util/Collection~Events.Remove
     * @param componentName element name
     * @returns this
     */
    removeComponent(componentName: string): this;
    /**
     * Removes an element with the specified ID
     * @fires @int/geotoolkit/util/Collection~Events.Remove
     * @param componentId element ID
     * @returns this
     */
    removeComponentById(componentId: string): this;
    /**
     * Removes all data elements from the well bore
     *
     * @fires @int/geotoolkit/util/Collection~Events.Remove
     * @returns this
     */
    removeAll(): this;
    /**
     * Gets geometry bounds
     */
    getGeometryBounds(): Rect | null;
    /**
     * Gets geometry bounds
     * @param components the components array
     */
    protected static getGeometryBounds(components: WellBoreData.Elements[]): Rect | null;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): WellBoreData.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: WellBoreData.Options): this;
}
export declare namespace WellBoreData {
    /**
     * input parameters object or just an array of elements to add
     */
    type Options = {
        /**
         * elements to add
         */
        elements?: Elements[] | WellBoreData;
        /**
         * units options
         */
        units?: UnitsOptions;
    };
    type OptionsOut = {
        /**
         * elements to add
         */
        elements: Elements[];
        /**
         * units options
         */
        units: UnitsOptions;
    };
    type Elements = {
        name: string;
        data: Element;
    };
    /**
     * Data units type
     */
    type UnitsOptions = {
        /**
         * depth units
         */
        depth?: string | AbstractUnit;
        /**
         * value units
         */
        value?: string | AbstractUnit;
    };
    type Description = string | string[];
    type Element = {
        description?: Description;
        geometry: Entity;
        id?: string;
        emulated?: boolean;
        subset?: string;
        [key: string]: any;
    };
    type Entity = EntityRange | EntityRange[];
    type EntityRange = {
        compressedscale?: number;
        horizontalcompressedscale?: number;
        /**
         * an object with depths descriptors (from and to)
         */
        depth?: {
            /**
             * depth from
             */
            from?: number;
            /**
             * depth to
             */
            to?: number;
            units?: string | AbstractUnit;
        };
        /**
         * an object with diameter descriptor
         */
        diameter?: {
            /**
             * outer diameter
             */
            outer?: number;
            inner?: number;
            units?: string | AbstractUnit;
        };
        /**
         * offset
         */
        offset?: number;
        level?: {
            /**
             * depth from
             */
            from?: number;
            /**
             * depth to
             */
            to?: number;
        };
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.Change]: WellBoreData.Elements[];
        [Events.Add]: {
            name: string;
            data: WellBoreData.Element;
        } | WellBoreData.Elements | WellBoreData.Elements[];
        [Events.Remove]: WellBoreData.Elements;
    };
}
