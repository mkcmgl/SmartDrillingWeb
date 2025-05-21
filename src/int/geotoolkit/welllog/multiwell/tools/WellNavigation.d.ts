import { AbstractWellTrack } from '@int/geotoolkit/welllog/multiwell/AbstractWellTrack';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { Navigation } from '@int/geotoolkit/welllog/widgets/tools/Navigation';
import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
/**
 * Creates default implementation of the well navigation tool for well track.
 * This tool displays navigation for each index track
 */
export declare class WellNavigation extends AbstractTool {
    /**
     * Creates navigation tool
     * @param [options] well track or tool options
     */
    constructor(options?: WellNavigation.Options | AbstractWellTrack | LogTrack);
    on<E extends keyof Navigation.EventMap>(type: E, callback: (eventType: E, sender: this, args: Navigation.EventMap[E]) => void): this;
    off<E extends keyof Navigation.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Navigation.EventMap[E]) => void): this;
    notify<E extends keyof Navigation.EventMap>(type: E, source: WellNavigation, args?: Navigation.EventMap[E]): this;
    /**
     * Returns navigation tool
     */
    getNavigation(): Navigation;
}
export declare namespace WellNavigation {
    /**
     * well track or tool options
     */
    type Options = AbstractTool.Options & {
        /**
         * well track or tool options
         */
        welltrack?: AbstractWellTrack | LogTrack;
    };
}
