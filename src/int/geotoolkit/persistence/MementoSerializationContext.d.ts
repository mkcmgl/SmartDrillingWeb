/**
 * @module geotoolkit/persistence/MementoSerializationContext
 */
import { SerializationContext } from '@int/geotoolkit/persistence/SerializationContext';
import type { DeserializationContext } from '@int/geotoolkit/persistence/DeserializationContext';
/**
 * The serialization context to Memento
 */
export declare class MementoSerializationContext extends SerializationContext {
    constructor(object?: any, registry?: DeserializationContext.Registry);
    addValue(name: string, value: any): void;
    setValue(value: any): this;
    getRegistry(): DeserializationContext.Registry;
    /**
     * Add reference to the object
     * @param obj object to get reference
     * @param [memento] serialized view of object
     * @returns id of the reference
     */
    addReference(obj: any, memento?: any): number;
    getReferenceId(obj: any): number | null;
    /**
     * Get serialized view of object by reference id
     * @param id reference id
     * @returns serialized view of object
     */
    getReference(id: number): any;
    setObject(object: any, type?: string): MementoSerializationContext;
    /**
     * Commits changes
     */
    commit(): void;
    addObject(name: string | number, object: any, type?: string): MementoSerializationContext;
    createChild(name: string, type?: string): MementoSerializationContext;
    /**
     * Gets a result of the serialization to memento
     */
    getMemento(): any;
}
