/**
 * @module geotoolkit/persistence/XmlDeserializationContext
 */
import { DeserializationContext } from '@int/geotoolkit/persistence/DeserializationContext';
import { Registry } from '@int/geotoolkit/persistence/Registry';
/**
 * The deserialization context from XML
 */
export declare class XmlDeserializationContext extends DeserializationContext {
    constructor(node?: Node, owner?: any, registry?: Registry);
    getValue(name: string, type?: string, dest?: any): any;
    getObject(type: string, name: string, dest?: any): any;
    requestObject(id: string, callback: (value: any) => void): void;
    addReference(id: string, reference: any): void;
    getReference(id: string): any;
    queryChildren(callback: (property: string, context: DeserializationContext) => void, propertyName?: string): void;
    getRegistry(): Registry;
    pushCurrentObject(object: any): void;
    popCurrentObject(): any;
    getCurrentObject(): any;
}
