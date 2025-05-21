/**
 * Base interface for commands
 * @interface
 */
export declare abstract class ICommand {
    /**
     * Executes the command
     * @returns true on success, false if not executed
     */
    abstract execute(): boolean;
    /**
     * Rewinds the command
     * @returns true on success, false if couldn't be undone
     */
    abstract undo(): boolean;
    static getClassName(): string;
    getClassName(): string;
}
