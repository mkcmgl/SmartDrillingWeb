/**
 * @module geotoolkit/controls/tools/PaintEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
export declare class PaintEventArgs extends ProxyEventArgs {
    constructor(eventArgs: EventArgs, options: PaintEventArgs.Options);
    /**
     * Gets command
     * @returns command
     */
    getCommand(): AbstractCommand;
    /**
     * Gets editor
     * @returns editor
     */
    getEditor(): AbstractEditorBase;
    /**
     * Gets nodes array or null
     */
    getNodes(): Node[] | null;
    /**
     * Returns distances array
     */
    getDistances(): number[];
    /**
     * Returns value
     */
    getValue(): number;
}
export declare namespace PaintEventArgs {
    /**
     * properties object
     */
    type Options = {
        /**
         * node
         */
        node?: Node | Node[];
        /**
         * command
         */
        command?: AbstractCommand;
        /**
         * editor
         */
        editor?: AbstractEditorBase;
        /**
         * distances array
         */
        distances?: number[];
        /**
         * value
         */
        value?: number;
    };
}
