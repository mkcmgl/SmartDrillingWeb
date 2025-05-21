import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
export declare class EditorEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param text string
     */
    constructor(eventArgs: EventArgs, text?: string);
    /**
     * Return current text
     */
    getText(): string;
}
