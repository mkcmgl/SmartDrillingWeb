import { Registry as DefaultRegistry } from '@int/geotoolkit/persistence/Registry';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
/**
 * The implementation of the default serializer registry for Annotations
 */
export declare class Registry extends DefaultRegistry {
    constructor(options: Registry.Options);
}
export declare namespace Registry {
    type NodeResolverByUuidCallback = (uid: string) => AbstractNode;
    type ResolveNodeUuidCallback = (node: AbstractNode) => string;
    /**
     * addition options
     */
    export type Options = {
        noderesolverbyuuid: NodeResolverByUuidCallback;
        resolvenodeuuid: ResolveNodeUuidCallback;
    };
    export {};
}
