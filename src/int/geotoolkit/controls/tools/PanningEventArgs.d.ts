/**
 * @module geotoolkit/controls/tools/PanningEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Panning } from '@int/geotoolkit/controls/tools/Panning';
export declare class PanningEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param [direction] direction of the object
     * @param [wheel] is eventArgs is wheel event args
     */
    constructor(eventArgs: EventArgs, direction?: Panning.Direction, wheel?: boolean);
    /**
     * Return wheel flag
     */
    isWheel(): boolean;
    /**
     * Return direction object for e.g.: `{x: 0 , y: -10}` will go
     */
    getDirection(): Panning.Direction;
}
