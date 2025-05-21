/**
 * @module geotoolkit/controls/tools/editors/commands/SceneChange
 */
import { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * Command for changing node's scene position
 */
export declare class SceneChange extends AbstractCommand {
    /**
     * @param fromParent node's current parent node
     * @param fromIndex node's current child position
     * @param toParent node's new parent node
     * @param toIndex node's new child position
     */
    constructor(fromParent: CompositeNode, fromIndex: number, toParent: CompositeNode, toIndex: number);
    /**
     * Returns node's parent before the command was applied
     */
    getFromParent(): CompositeNode;
    /**
     * Returns node index before the command was applied
     */
    getFromId(): number;
    /**
     * Returns node's parent after the command was applied
     */
    getToParent(): CompositeNode;
    /**
     * Returns node index after the command was applied
     */
    getToId(): number;
}
