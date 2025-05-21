import { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
/**
 * Abstract tool to edit/create {@link @int/geotoolkit/scene/AbstractNode~AbstractNode}. Can be used both separately or in {@link @int/geotoolkit/controls/tools/Paint~Paint}
 * tool to emulate the standard editors behavior.
 */
export declare class AbstractEditor extends AbstractEditorBase {
    /**
     * @param [options] editor options
     */
    constructor(options?: AbstractEditorBase.Options);
    /**
     * @param options options
     */
    protected initialize(options: AbstractEditorBase.Options): void;
    /**
     * Ends current node creation, fires the corresponding event and clones new empty node for the new creation
     * @param eventArgs event args
     */
    protected end(eventArgs: EventArgs): void;
    /**
     * Resets current node to the initial state before all the changes were made
     * @param [unlink] true, for remove node from parent, else false
     * @returns this
     */
    protected resetNode(unlink?: boolean): this;
    protected resetNodeToGhost(): this;
}
