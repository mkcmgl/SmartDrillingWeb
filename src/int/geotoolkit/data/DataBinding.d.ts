import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Define DataBinding
 */
export declare abstract class DataBinding {
    /**
     * Check if connector accepts node
     * @param node instance to apply the databinding to
     */
    abstract accept(node: Node): boolean;
    /**
     * Bind data
     * @param node instance to apply the databinding to
     * @param data data to bind to the node
     */
    abstract bind(node: Node, data: any): void;
    /**
     * Unbind data
     * @param node instance to apply the databinding to
     * @param data data to bind to the node
     */
    abstract unbind(node: Node, data?: any): void;
    static getClassName(): string;
    getClassName(): string;
}
