import { HoldTitle } from '@int/geotoolkit/welllog/header/HoldTitle';
import { Group } from '@int/geotoolkit/scene/Group';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { WellTrack } from '@int/geotoolkit/welllog/multiwell/WellTrack';
import type { LogVisualHeaderProvider } from '@int/geotoolkit/welllog/header/LogVisualHeaderProvider';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * Define Header for WellTrack
 */
export declare class WellTrackHeader extends Group {
    /**
     * @param [options] a log track to create header or properties object
     * @param [provider] provider of the headers
     */
    constructor(options?: WellTrackHeader.Options | WellTrack, provider?: LogVisualHeaderProvider);
    clone(): WellTrackHeader;
    protected copyConstructor(src: WellTrackHeader, deepCopy?: boolean): this;
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
     * Sets header provider
     *
     * @param provider header provider
     * @returns this
     */
    setHeaderProvider(provider: LogVisualHeaderProvider): this;
    /**
     * Returns the current header provider
     */
    getHeaderProvider(): LogVisualHeaderProvider | null;
    addChild(node: Node | Node[] | Iterator<Node>): this;
    insertChild(index: number, node: Node): this;
    /**
     * Updates layout(s)
     * @param [targets] optional parameter about which element to layout
     * @returns this
     */
    updateLayout(targets?: ILayoutable[]): this;
    /**
     * Return desired height of the header
     */
    getDesiredHeight(): number;
    /**
     * Returns instance of the track to display header
     */
    getWellTrack(): WellTrack;
    rebuild(force?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): WellTrackHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: WellTrackHeader.Options): this;
}
export declare namespace WellTrackHeader {
    /**
     * a log track to create header or properties object
     */
    type Options = Group.Options & {
        /**
         * a log track to create header
         */
        track?: WellTrack;
        /**
         * provider of the headers
         */
        provider?: LogVisualHeaderProvider;
        /**
         * if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
         */
        holdtitle?: HoldTitle;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = Group.OptionsOut & {
        /**
         * header provider
         */
        provider: LogVisualHeaderProvider;
        /**
         * defines well title hold
         */
        holdtitle: HoldTitle;
    };
}
