import { MementoDeserializationContext } from '@int/geotoolkit/persistence/MementoDeserializationContext';
import type { Registry } from '@int/geotoolkit/persistence/Registry';
/**
 * The JsonSerializer class exposes the trivial serialization functions from a
 * JavaScript object to JSON and back
 */
export declare class JsonSerializer {
    /**
     * @param registry registry of serializers
     * @param [options] serialization options
     */
    constructor(registry: Registry, options?: JsonSerializer.Options);
    /**
     * Serializes an object to a JSON string
     * @param name the name of the object or the object to mementoize
     * @param [value] The value to mementoize
     * @param [source] the source project to add property
     */
    serialize(name: string, value?: any, source?: any): string;
    /**
     * Deserializes a JSON string to the original object
     * @param str text to be deserialised
     */
    deserialize(str: string): MementoDeserializationContext;
}
export declare namespace JsonSerializer {
    /**
     * serialization options
     */
    type Options = {
        /**
         * A function that alters the behavior of the serialization process
         */
        filter?: (object: any, type: string) => boolean;
        /**
         * A function that alters the behavior of the stringification process
         */
        replacer?: (this: any, key: string, value: any) => any;
        /**
         * A String or Number object that's used to insert white space into the output JSON string for readability purposes.
         */
        space?: string | number;
    };
}
