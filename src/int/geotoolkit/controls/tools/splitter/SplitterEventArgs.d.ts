import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Group } from '@int/geotoolkit/scene/Group';
/**
 * SplitterEventArgs
 */
export declare class SplitterEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs info about the event arguments
     * @param delta delta
     * @param [affectedPlots] json object contains information about affected plots
     */
    constructor(eventArgs: EventArgs, delta: number, affectedPlots?: SplitterEventArgs.Plots);
    /**
     * Return effective delta
     */
    getDelta(): number;
    /**
     * Returns affected plots
     */
    getPlots(): SplitterEventArgs.Plots;
}
export declare namespace SplitterEventArgs {
    /**
     * json object contains information about affected plots
     */
    type Plots = {
        /**
         * top plot
         */
        top?: Group | null;
        /**
         * bottom plot
         */
        bottom?: Group | null;
        /**
         * left plot
         */
        left?: Group | null;
        /**
         * right plot
         */
        right?: Group | null;
    };
}
