import type { OperationCallback, OperationDataMap } from '@int/geotoolkit/controls/tools/editors/operations/OperationType';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Registry that stores node edit operations
 */
export declare class Registry {
    constructor();
    /**
     * Registers edit operation for the specified node type
     * @param nodeType the node type
     * @param operationType the operation type
     * @param operation the edit operation callback
     */
    register<T extends OperationDataMap, U extends keyof T>(nodeType: typeof Node, operationType: U, operation: OperationCallback<T[U]>): this;
    /**
     * Unregisters edit operation for the specified node type
     * @param nodeType the node type
     * @param operationType the operation type
     */
    unregister<T extends OperationDataMap, U extends keyof T>(nodeType: typeof Node, operationType: U): this;
    /**
     * Determines if the specified operation type is registered for the specified `node`
     * @param node the node
     * @param operationType the operation type
     */
    isRegistered<T extends OperationDataMap, U extends keyof T>(node: Node, operationType: U): boolean;
    /**
     * Queries edit operation by its type for the specified node
     * @param node the node
     * @param operationType the operation type
     */
    getOperation<T extends OperationDataMap, U extends keyof T>(node: Node, operationType: U): OperationCallback<T[U]>;
    /**
     * Tries to apply the operation to the specified node
     * @param node the target node
     * @param operationType the operation type
     * @param data the operation data (corresponding to operation callback)
     * @returns `true` if operation was successfully applied and `false` otherwise
     */
    applyOperation<T extends OperationDataMap, U extends keyof T>(node: Node, operationType: U, data: T[U]): boolean;
    /**
     * Gets the singleton instance of {@link @int/geotoolkit/controls/tools/editors/operations/Registry~Registry} class
     */
    static getInstance(): Registry;
}
