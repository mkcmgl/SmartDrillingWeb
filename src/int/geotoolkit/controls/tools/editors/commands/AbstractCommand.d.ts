import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Abstract command to store information about actions made by {@link @int/geotoolkit/controls/tools/editors/AbstractEditor~AbstractEditor}
 */
export declare class AbstractCommand {
    constructor();
    /**
     * Rejects action
     * @returns this
     */
    reject(): this;
    /**
     * Returns rejected state
     * @returns the state
     */
    isRejected(): boolean;
    /**
     * Sets target node for the command
     * @param node node(s) for applying the command
     * @returns this
     */
    setNode(node: Node | Node[]): this;
    /**
     * Returns target command node
     */
    getNode(): Node | Node[];
    /**
     * Tries to merge current with another command. If successful, return true and second command won't be stored in history.
     * Returns false otherwise.
     * @param command command to merge
     */
    merge(command: AbstractCommand): boolean;
    /**
     * Returns inverse command
     */
    createInverse(): AbstractCommand;
    /**
     * Sets command to be separate or not (true by default). Not separate commands are ignored by history undo/redo actions
     * and considered as a part of the last separate command.
     * @param isSeparate true if command should be considered as a separate operation (in undo/redo history), false otherwise
     * @returns this
     */
    setSeparate(isSeparate: boolean): this;
    /**
     * Returns true if command is separate, false otherwise
     */
    isSeparate(): boolean;
    /**
     * Sets extra options to be stored in command
     * @param options some extra options for the command to store
     * @returns this
     */
    setOptions(options: Record<string, any>): this;
    /**
     * Returns command options
     */
    getOptions(): Record<string, any>;
    /**
     * Returns event to be fired when command is applied
     */
    getEventName(): string;
    static getClassName(): string;
    getClassName(): string;
}
