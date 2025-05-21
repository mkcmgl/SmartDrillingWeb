import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import { TrackType } from '@int/geotoolkit/welllog/TrackType';
import { LogTrackHeader } from '@int/geotoolkit/welllog/header/LogTrackHeader';
import type { Merge } from '@int/geotoolkit/base';
import type { HoldTitle } from '@int/geotoolkit/welllog/header/HoldTitle';
import type { LogVisualHeaderProvider } from '@int/geotoolkit/welllog/header/LogVisualHeaderProvider';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { TimeZone } from '@int/geotoolkit/axis/TimeZone';
import { BorderStyle } from '@int/geotoolkit/scene/shapes/Border';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { IndexType } from '@int/geotoolkit/welllog/IndexType';
/**
 * Define factory to create tracks
 */
export declare class TrackFactory {
    constructor();
    /**
     * Create track
     * @param trackType track to create
     * @param [options] track options
     * @example
     * import {TrackFactory} from '@int/geotoolkit/welllog/TrackFactory';
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * const factory = TrackFactory.getInstance();
     * const track = factory.createTrack(TrackType.IndexTrack, {
     *   'width': 30
     * });
     * widget.addTrack(track);
     * @example
     * // index tracks has 'INDEX_TRACK' css class defined, so it can be used to modify style with css:
     * widget.getTrackContainer().setCss('*[cssclass="INDEX_TRACK"] { visible: false; }');
     * // or differ it from another tracks:
     * if (track.getCssClass() === 'INDEX_TRACK') {
     *     // do smth
     * }
     */
    createTrack(trackType: TrackType | LogTrack, options?: TrackFactory.TrackOptions): LogTrack;
    /**
     * Create track header
     * @param track log track
     * @param [options] track header options
     * @param [provider] header provider
     */
    createTrackHeader(track: LogTrack, options?: TrackFactory.TrackHeaderOptions, provider?: LogVisualHeaderProvider): LogTrackHeader;
    /**
     * Create track footer
     * @param track log track
     * @param [options] track header options
     * @param [provider] header provider
     */
    createTrackFooter(track: LogTrack, options?: TrackFactory.TrackHeaderOptions, provider?: LogVisualHeaderProvider): LogTrackHeader;
    /**
     * Return factory instance
     * @returns factory
     */
    static getInstance(): TrackFactory;
}
export declare namespace TrackFactory {
    /**
     * track options
     */
    type TrackOptions = Merge<LogTrack.Options, {
        background?: FillStyle.Type;
        /**
         * track width
         */
        width?: number;
        /**
         * track name
         */
        name?: string;
        /**
         * track border options
         */
        border?: {
            type?: BorderStyle;
            /**
             * visibility of the border
             */
            visible?: boolean;
            /**
             * color of border border
             */
            color?: string;
        };
        /**
         * primary index types
         */
        indextype?: 'time' | 'depth' | IndexType;
        /**
         * primary index unit
         */
        indexunit?: string | AbstractUnit;
        /**
         * defines properties for index track
         */
        indextrack?: {
            /**
             * index track line styles and text styles
             */
            styles?: {
                tick?: Record<string, LineStyle.Type>;
                label?: Record<string, TextStyle.Type>;
            };
            /**
             * custom label format function
             */
            labelformat?: TickGenerator.LabelFormatHandler;
            /**
             * axis settings
             */
            axis?: {
                /**
                 * name of axis
                 */
                name?: string;
                /**
                 * locale for tickgenerator of axis
                 */
                locale?: string;
            };
        };
        /**
         * timezone
         */
        timezone?: string | TimeZone;
        /**
         * time zone offset in hours
         */
        timezoneoffset?: number;
        /**
         * gridlines
         */
        gridlinestyle?: LineStyle | LineStyle.Options;
        /**
         * log10 track options
         */
        logtrack?: {
            /**
             * log20 grid decadecount, see {@link @int/geotoolkit/welllog/LogLog10ValueGrid~LogLog10ValueGrid}
             */
            decadecount?: number;
            /**
             * log20 grid direction, see {@link @int/geotoolkit/welllog/LogLog10ValueGrid~LogLog10ValueGrid}
             */
            reverse?: boolean;
        };
    }>;
    /**
     * track header options
     */
    type TrackHeaderOptions = {
        /**
         * track visible track title
         */
        visibletracktitle?: boolean;
        /**
         * display title first
         */
        titlefirst?: boolean;
        /**
         * display headers from first to last
         */
        firsttolast?: boolean;
        /**
         * display headers from top to bottom
         */
        toptobottom?: boolean;
        /**
         * if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
         */
        holdtitle?: HoldTitle;
        /**
         * border property
         */
        border?: {
            /**
             * border visibility
             */
            visible?: boolean;
            /**
             * border color
             */
            color?: string;
            /**
             * border width
             */
            width?: number;
            /**
             * border background
             */
            background?: FillStyle.Type;
        };
    };
}
