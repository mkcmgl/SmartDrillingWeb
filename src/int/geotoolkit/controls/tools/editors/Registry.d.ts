import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
/**
 * Registry that stores node editors
 */
export declare class Registry {
    constructor();
    /**
     * Return registry instance clone
     */
    clone(): Registry;
    /**
     * Returns editor to edit node with provided options
     * @param options editor options
     * @throws {Error} if supported editor was not found and default editor was not set
     */
    getEditor(options: Record<string, any>): AbstractEditorBase;
    /**
     * Registers editor to apply
     * @param editor editor
     * @returns this
     */
    register(editor: AbstractEditorBase | {
        new (): AbstractEditorBase;
    }): this;
    /**
     * Unregister editors of provided type
     * @param editorType the editor type
     */
    unregister(editorType: typeof AbstractEditorBase): this;
    /**
     * Sets default editor
     * @param editor the editor
     * @returns this
     */
    setDefaultEditor(editor: AbstractEditorBase): this;
    /**
     * Returns editors registry singleton instance
     */
    static getInstance(): Registry;
    static getClassName(): string;
    getClassName(): string;
}
