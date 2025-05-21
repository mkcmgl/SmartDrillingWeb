import { DeserializationContext } from '@int/geotoolkit/persistence/DeserializationContext';
/**
 * The deserialization context to Memento
 */
export declare class MementoDeserializationContext extends DeserializationContext {
    constructor(memento?: any, registry?: DeserializationContext.Registry);
    /**
     * Get value
     * @param name name of the property
     * @param [type] optional type
     * @param [dest] destination object
     * @returns value
     */
    getValue(name: string, type?: string, dest?: any): any;
    getObject(type?: string, name?: string, dest?: any): any;
    requestObject(id: string, callback: (value: any) => void): void;
    addReference(id: string, reference: any): void;
    getReference(id: string): any;
    queryChildren(callback: (property: string, context: MementoDeserializationContext) => void, propertyName?: string): void;
    getRegistry(): DeserializationContext.Registry;
    pushCurrentObject(object: any): void;
    popCurrentObject(): any;
    getCurrentObject(): any;
    /**
     * Gets memento associated with context
     */
    getMemento(): any;
}
