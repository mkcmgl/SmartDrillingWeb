import { Paint } from '@int/geotoolkit/controls/tools/Paint';
import { Point } from '@int/geotoolkit/util/Point';
import { JsonSerializer } from '@int/geotoolkit/persistence/JsonSerializer';
import type { Registry as PersistenceRegistry } from '@int/geotoolkit/persistence/Registry';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * Paint tool is used to create/modify nodes, using {@link @int/geotoolkit/controls/tools/editors/AbstractEditor~AbstractEditor}'s
 */
export declare class AnnotationEditor extends Paint {
    /**
     * @param [options] tool options
     */
    constructor(options?: Paint.Options);
    /**
     * Save annotations layer
     * @param [annotationsLayer] annotation layer to save
     * @param [registry] registry
     * @param [options] serialization options
     * @returns return annotations serialized as a string
     */
    saveAnnotations(annotationsLayer: CompositeNode, registry?: PersistenceRegistry, options?: JsonSerializer.Options): string;
    /**
     * Load annotations template to specified layer
     * @param annotationsData template to be applied to the annotation layer
     * @param annotationsLayer target annotation layer
     * @param [registry] registry
     */
    loadAnnotations(annotationsData: string, annotationsLayer: CompositeNode, registry?: PersistenceRegistry): this;
    /**
     * Sets Node Uuid resolver
     * @param resolver This allows to resolver target nodes.
     */
    setNodeUuidResolver(resolver: AnnotationEditor.ResolveNodeUuidCallback | null): this;
    /**
     * Sets Node Uuid resolver
     * @param resolver This allows to resolver target nodes.
     */
    setNodeResolverByUuid(resolver: AnnotationEditor.NodeResolverByUuidCallback | null): this;
    /**
     * Sets resolver
     * @param resolver This allows to resolver target nodes.
     */
    setNodeResolver(resolver: AnnotationEditor.NodeResolverCallback | null): this;
    /**
     * For internal use
     * @param editor editor to use
     * @returns this
     */
    protected setEditor(editor: AbstractEditorBase | null): this;
}
export declare namespace AnnotationEditor {
    type NodeResolverCallback = (srcNode: AbstractNode, x: number | Point, y?: number) => {
        anchor: Point;
        node: AbstractNode;
    };
    type NodeResolverByUuidCallback = (uid: string) => AbstractNode;
    type ResolveNodeUuidCallback = (node: AbstractNode) => string;
}
