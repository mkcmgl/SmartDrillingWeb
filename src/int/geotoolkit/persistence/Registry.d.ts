import type { ObjectSerializer } from '@int/geotoolkit/persistence/ObjectSerializer';
/**
 * The implementation of the default serializer registry
 */
export declare class Registry {
    constructor();
    /**
     * Return instance of the default registry
     * @returns registry
     */
    static getInstance(): Registry;
    /**
     * Add serializer
     * @throws Error type is null
     * @param type type of the serializer
     * @param serializer serializer
     */
    addSerializer(type: string, serializer: ObjectSerializer): void;
    /**
     * Remove serializer
     * @throws Error type is null
     * @param type type of the serializer
     */
    removeSerializer(type: string): void;
    /**
     * Return serializer for the specified type
     * @param type serializer for the specified type
     */
    getSerializer(type: string | {
        getClassName: () => string;
    }): ObjectSerializer;
    getClassName(): string;
    static getClassName(): string;
}
