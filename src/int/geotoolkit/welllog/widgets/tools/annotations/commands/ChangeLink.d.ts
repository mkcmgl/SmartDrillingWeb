import { ExecutableCommand } from '@int/geotoolkit/controls/tools/editors/commands/ExecutableCommand';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
/**
 * The command for link/unlink the edited node
 */
export declare class ChangeLink extends ExecutableCommand {
    constructor();
    createInverse(): ChangeLink;
    static isLinked(editor: AbstractEditorBase): boolean;
    static canLink(editor: AbstractEditorBase): boolean;
}
