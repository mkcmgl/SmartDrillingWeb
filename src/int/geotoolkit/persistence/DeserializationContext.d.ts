/**
 * @module geotoolkit/persistence/DeserializationContext
 */
import type { ObjectSerializer } from '@int/geotoolkit/persistence/ObjectSerializer';
/**
 * The deserialization context
 */
export declare abstract class DeserializationContext {
    /**
     * Get value
     * @param name name of the property
     * @param [type] optional type
     * @returns value
     */
    abstract getValue(name?: string, type?: string, dest?: any): any;
    /**
     * Get object
     * @param type type of the object
     * @param name name of the property
     * @returns value
     */
    abstract getObject(type?: string, name?: string, dest?: any): any;
    /**
     * Request object
     * @param id unique id of the object
     * @param callback function contains parameter object that can be requested
     */
    abstract requestObject(id: string, callback: (value: any) => void): void;
    /**
     * Enumerate each child property
     * @param callback function called by each object child
     * @param [propertyName] optional property name
     */
    abstract queryChildren(callback: (property: string, context: DeserializationContext) => void, propertyName?: string): void;
    /**
     * Get object by reference
     * @param id reference id
     */
    abstract getReference(id: string): any;
    /**
     * Register instance of the object
     * @param id unique id of the object
     * @param object instance of the deserialised class
     */
    abstract addReference(id: string, object: any): void;
    /**
     * Get registry of memento deserializers
     */
    abstract getRegistry(): DeserializationContext.Registry;
    /**
     * Push the current deserialized object. This method can be used if it is necessary to
     * provide the existing object for deserialization
     * @param object instance of the deserialised class
     */
    abstract pushCurrentObject(object: any): void;
    /**
     * Pop the current object from the stack
     */
    abstract popCurrentObject(): any;
    /**
     * Return the current object on the stack
     */
    abstract getCurrentObject(): any;
}
export declare namespace DeserializationContext {
    type Registry = {
        addSerializer: (type: string, serializer: ObjectSerializer) => void;
        removeSerializer: (type: string) => void;
        getSerializer: (type: any) => ObjectSerializer;
    };
}
