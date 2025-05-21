import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
/**
 * RejectableEventArgs
 */
export declare class RejectableEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     */
    constructor(eventArgs: EventArgs);
    /**
     * set target
     * @deprecated since 4.0, use setEventTarget() instead
     * @param target object that initialised this event
     * @returns this
     */
    setTarget(target: any): this;
    /**
     * returns target
     * @deprecated since 4.0, use getEventTarget() instead
     * @returns target
     */
    getTarget(): any;
    /**
     * reject action
     * @param doReject reject event or not, true by default
     * @returns this
     */
    reject(doReject?: boolean): this;
    /**
     * return rejected state
     * @returns the state
     */
    isRejected(): boolean;
}
