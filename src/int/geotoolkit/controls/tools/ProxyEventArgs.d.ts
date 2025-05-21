/**
 * @module geotoolkit/controls/tools/ProxyEventArgs
 */
import { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * ProxyEventArgs
 */
export declare class ProxyEventArgs extends EventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param [eventName] name of the event
     */
    constructor(eventArgs: EventArgs, eventName?: string);
    /**
     * Set event target
     * @param target event target
     */
    setEventTarget(target: EventTarget | Node): this;
}
