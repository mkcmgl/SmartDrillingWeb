/**
 * @module geotoolkit/data/DataBindingRegistry
 */
import { DataBinding } from '@int/geotoolkit/data/DataBinding';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Define DataBindingRegistry
 */
export declare class DataBindingRegistry extends DataBinding {
    constructor();
    /**
     * Add a data connector
     * @param connector binding between node and data
     */
    add(connector: DataBinding | DataBindingRegistry.DataBindingObject): this;
    /**
     * Return connector by index
     *
     * @param i index of the node
     */
    getConnector(i: number): DataBinding | DataBindingRegistry.DataBindingObject;
    /**
     * Return number of connectors
     */
    getCount(): number;
    /**
     * Remove data connector
     * @param connector binding between node and data
     */
    remove(connector: DataBinding | DataBindingRegistry.DataBindingObject): this;
    /**
     * Check if binding accept node
     * @param node node to check
     */
    accept(node: Node): boolean;
    /**
     * Unbind data
     * @param node instance to apply the databinding to
     * @param data data to bind to the node
     */
    bind(node: Node, data: any): void;
    /**
     * Disconnect data
     * @param node instance to apply the databinding to
     * @param data data to bind to the node
     */
    unbind(node: Node, data: any): void;
    /**
     * Return default instance of the registry
     * @returns registry
     */
    static getInstance(): DataBindingRegistry;
}
declare namespace DataBindingRegistry {
    type DataBindingObject = {
        accept: (node: Node) => boolean;
        bind: (node: Node, data: any) => void;
        unbind?: (node: Node, data?: any) => void;
    };
}
export {};
