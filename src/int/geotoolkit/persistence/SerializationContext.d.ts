import type { DeserializationContext } from '@int/geotoolkit/persistence/DeserializationContext';
/**
 * The serialization context
 */
export declare abstract class SerializationContext {
    /**
     * Adds the specified value with name "name" to the current context
     * @param name unique property name
     * @param value object value
     */
    abstract addValue(name: string, value: any): void;
    /**
     * Adds child element with the specified name and optional type to the current context.
     * Unlike "setObject", this method creates a child node to store the object.
     * @param name unique property name
     * @param object object to be serialized
     * @param [type] the optional serialization type
     */
    abstract addObject(name: string | number, object: any, type?: string): SerializationContext;
    /**
     * Sets value to the current context (no child nodes for the value will be created in current context)
     * @param value object value
     */
    abstract setValue(value: any): this;
    /**
     * Sets object to the current context (no child nodes for the object will be created in current context)
     * @param value object value
     * @param [type] the optional serialization type
     */
    abstract setObject(value: any, type?: string): SerializationContext;
    /**
     * Create child element in the current context
     * @param name unique property name
     * @param [type] type of the object
     */
    abstract createChild(name: string, type?: string): SerializationContext;
    /**
     * Get reference id for the specified object. Null as return value means that the object
     * was not saved before
     * @param object object value
     * @returns reference id or null if not found
     */
    abstract getReferenceId(object: any): string | number | null;
    /**
     * Add reference to the object
     * @param object object to get reference
     * @returns id of the reference
     */
    abstract addReference(object: any): string | number;
    /**
     * Get registry of memento serializers
     */
    abstract getRegistry(): DeserializationContext.Registry;
    /**
     * Commit changes
     */
    abstract commit(): void;
}
