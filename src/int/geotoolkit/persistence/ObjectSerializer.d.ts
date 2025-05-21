/**
 * @module geotoolkit/persistence/ObjectSerializer
 */
import type { SerializationContext } from '@int/geotoolkit/persistence/SerializationContext';
import type { DeserializationContext } from '@int/geotoolkit/persistence/DeserializationContext';
/**
 * The abstract serializer
 * @interface
 */
export declare abstract class ObjectSerializer {
    /**
     * Save object to context
     * @param object object to save
     * @param context context to save
     */
    abstract save(object: any, context: SerializationContext): void;
    /**
     * Load object from context
     * @param context context to save
     * @param [object] object save properties
     */
    abstract load(context: DeserializationContext, object?: any): any;
}
