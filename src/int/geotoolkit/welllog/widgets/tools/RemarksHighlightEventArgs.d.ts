/**
 * @module geotoolkit/welllog/widgets/tools/RemarksHighlightEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
export declare class RemarksHighlightEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param [text] text value of the comment section highlighted, null if no section found
     */
    constructor(eventArgs: EventArgs, text?: string);
    /**
     * Returns comment section text value, null if no section found
     */
    getTextValue(): string | null;
}
