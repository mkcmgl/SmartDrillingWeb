/**
 * @module geotoolkit/controls/tools/editors/commands/ReplaceNode
 */
import { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
/**
 * Command for replace node in scene by another instance
 */
export declare class ReplaceNode extends AbstractCommand {
    /**
     * @param fromNode current node
     * @param toNode new node
     */
    constructor(fromNode: Shape, toNode: Shape);
    /**
     * Returns node's instance before replacement was applied
     */
    getFromShape(): Shape;
    /**
     * Returns new node's instance after replacement will be applied
     */
    getToShape(): Shape;
}
