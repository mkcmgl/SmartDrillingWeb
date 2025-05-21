/**
 * @module geotoolkit/schematics/factory/ComponentNodeProxyFactory
 */
import { AbstractComponentNodeFactory } from '@int/geotoolkit/schematics/factory/AbstractComponentNodeFactory';
import { ComponentNodeProxy } from '@int/geotoolkit/schematics/scene/ComponentNodeProxy';
import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
/**
 * ComponentNodeProxyFactory
 */
export declare class ComponentNodeProxyFactory extends AbstractComponentNodeFactory {
    /**
     * @param parameter callback method to create an instance of a component node OR
     * an instance of a component node factory to create the component node
     * @param [componentNode] reusable component node instance
     */
    constructor(parameter: ((data?: WellBoreData.Element) => ComponentNode) | AbstractComponentNodeFactory, componentNode?: ComponentNode);
    /**
     * Creates component node and return it.
     *
     * @param [data] data to build the node of
     * @param [forceCreateNewNode] if "true" brand new component node instance is placed in the proxy
     * @param [deepCopyData] if "true" the data will be fully copied before set
     * @returns new proxy instance that incapsulates reusable component node instance
     */
    createComponentNode(data?: WellBoreData.Element, forceCreateNewNode?: boolean, deepCopyData?: boolean): ComponentNodeProxy;
}
