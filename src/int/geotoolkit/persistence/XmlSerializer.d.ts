import type { Registry } from '@int/geotoolkit/persistence/Registry';
/**
 * The XmlSerializer class exposes the trivial serialization functions from a JavaScript object to
 * XML
 */
export declare class XmlSerializer {
    /**
     * @param registry registry of serializers
     */
    constructor(registry: Registry);
    /**
     * Serialize data
     * @param name property name
     * @param value object value
     */
    serialize(name: string, value: any): string;
    /**
     * Deserialize data
     * @param data text to be deserialized
     */
    deserialize(data: string | Node): any;
}
