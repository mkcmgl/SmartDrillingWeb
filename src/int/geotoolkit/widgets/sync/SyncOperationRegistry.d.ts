import { SyncOperation } from '@int/geotoolkit/widgets/sync/SyncOperation';
/**
 * Define a registry for synchronization operations.
 */
export declare class SyncOperationRegistry {
    constructor();
    /**
     * Register operation
     * @param operation operation of synchronization
     * @param [type] type of the object
     */
    registerOperation(operation: SyncOperation, type?: string): void;
    /**
     * Return registered operation
     * @param name name of operation
     * @param [type] type of object to apply operation
     */
    getOperation(name: string, type?: string): SyncOperation;
    /**
     * Return instance of the registry
     * @returns registry
     */
    static getInstance(): SyncOperationRegistry;
}
