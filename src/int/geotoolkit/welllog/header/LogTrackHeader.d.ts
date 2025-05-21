import { HoldTitle } from '@int/geotoolkit/welllog/header/HoldTitle';
import { LogBaseTrackHeader } from '@int/geotoolkit/welllog/header/LogBaseTrackHeader';
import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import type { LogVisualHeaderProvider } from '@int/geotoolkit/welllog/header/LogVisualHeaderProvider';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
/**
 * Define header of LogTrack
 */
export declare class LogTrackHeader extends LogBaseTrackHeader {
    /**
     * Create track header
     * @param [track] a log track to create header or properties object
     * @param [provider] provider of the headers
     */
    constructor(track?: LogTrackHeader.Options | LogTrack, provider?: LogVisualHeaderProvider);
    protected copyConstructor(src: LogTrackHeader): this;
    /**
     * Sets visible track title. This method removes all headers and build it
     * again.
     *
     * @param visible defines track visibility
     */
    setVisibleTrackTitle(visible: boolean): this;
    /**
     * Return true if track title is visible
     */
    isVisibleTrackHeader(): boolean;
    /**
     * Sets order of the track title header.
     *
     * @param titleFirst track child order
     */
    setTitleFirst(titleFirst: boolean): this;
    /**
     * Return order of the track title header.
     */
    getTitleFirst(): boolean;
    /**
     * Sets order of the track child headers.
     *
     * @param firstToLast track child order
     * @returns this
     */
    setFirstToLast(firstToLast: boolean): this;
    /**
     * Return order of the track child headers
     */
    getFirstToLast(): boolean;
    /**
     * Sets position of the track child headers.
     * @param topToBottom track child order
     */
    setTopToBottom(topToBottom: boolean): this;
    /**
     * Return position of the track child headers
     */
    getTopToBottom(): boolean;
    /**
     * Sets track title hold
     * @param holdTitle if true then title always display atop
     * all visuals in header even when panning/scrolling header
     */
    setHoldTitle(holdTitle: HoldTitle): this;
    /**
     * Return track title hold
     */
    getHoldTitle(): HoldTitle;
    /**
     * Sets microposition merging. Header merging is enabled by default.
     * The header will try to fit as many micropositioned headers on a line as it can without overlap.
     * If CURVE-1's micropositioning would overlap with CURVE-2, its header is placed on a new row.
     * @param mergeMicroposition merge micropositioned headers
     */
    setMergeMicroposition(mergeMicroposition: boolean): this;
    /**
     * Return microposition merging
     */
    getMergeMicroposition(): boolean;
    /**
     * Return desired height of the header
     */
    getDesiredHeight(): number;
    notify(event: string, source: LogTrackHeader, args?: any): this;
    /**
     * Returns active visual
     */
    getActiveVisual(): LogAbstractVisual;
    /**
     * Set active visual
     * @param activeVisual new instance of the active visual
     * @returns this
     */
    setActiveVisual(activeVisual: LogAbstractVisual): this;
    /**
     * Update layout
     */
    updateLayout(): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): LogTrackHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogTrackHeader.Options): this;
}
export declare namespace LogTrackHeader {
    /**
     * a log track to create header or properties object
     */
    type Options = LogBaseTrackHeader.Options & {
        /**
         * defines track title header visibility
         */
        visibletracktitle?: boolean;
        /**
         * defines track track title header order
         */
        titlefirst?: boolean;
        /**
         * defines track item headers order
         */
        firsttolast?: boolean;
        /**
         * defines position of the track child headers
         */
        toptobottom?: boolean;
        /**
         * defines track title hold
         */
        holdtitle?: HoldTitle;
        /**
         * defines whether to merge micropositioned headers
         */
        mergemicroposition?: boolean;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = LogBaseTrackHeader.OptionsOut & {
        /**
         * defines track title header visibility
         */
        visibletracktitle: boolean;
        /**
         * defines track track title header order
         */
        titlefirst: boolean;
        /**
         * defines track item headers order
         */
        firsttolast: boolean;
        /**
         * defines position of the track child headers
         */
        toptobottom: boolean;
        /**
         * defines track title hold
         */
        holdtitle: HoldTitle;
        /**
         * defines whether to merge micropositioned headers
         */
        mergemicroposition: boolean;
    };
}
