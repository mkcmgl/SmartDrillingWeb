/**
 * @module geotoolkit/persistence/XmlSerializationContext
 */
import { SerializationContext } from '@int/geotoolkit/persistence/SerializationContext';
import { Registry } from '@int/geotoolkit/persistence/Registry';
/**
 * The serialization context to XML
 */
export declare class XmlSerializationContext extends SerializationContext {
    constructor(doc: Document, node?: Node, registry?: Registry, owner?: any);
    /**
     * Commit changes
     */
    commit(): void;
    addValue(name: string, value: any): void;
    setValue(value: any): this;
    getRegistry(): Registry;
    addReference(obj: any): string | number;
    getReferenceId(obj: any): string | number | null;
    setObject(object: any, type?: string): XmlSerializationContext;
    addObject(name: string, object: any, type?: string): XmlSerializationContext;
    createChild(name: string, type?: string): XmlSerializationContext;
    /**
     * Return a result of the  serialization to Node
     */
    getNode(): Node;
}
