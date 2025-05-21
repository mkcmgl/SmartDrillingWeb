/**
 * @module geotoolkit/controls/tools/editors/commands/ExecutableCommand
 */
import { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
/**
 * The command for deleting the edited node
 */
export declare class ExecutableCommand extends AbstractCommand {
    constructor();
    execute(editor: AbstractEditorBase): boolean;
}
