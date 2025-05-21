/**
 * @module geotoolkit/welllog/multiwell/AbstractWellTrackFactory
 */
import type { TrackType } from '@int/geotoolkit/welllog/multiwell/TrackType';
import type { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import type { CorrelationTrack } from '@int/geotoolkit/welllog/multiwell/CorrelationTrack';
import type { LogBaseTrackHeader } from '@int/geotoolkit/welllog/header/LogBaseTrackHeader';
import type { WellTrackHeader } from '@int/geotoolkit/welllog/multiwell/WellTrackHeader';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { LogVisualHeaderProvider } from '@int/geotoolkit/welllog/header/LogVisualHeaderProvider';
import type { AbstractWellTrack } from '@int/geotoolkit/welllog/multiwell/AbstractWellTrack';
import type { ITrack } from '@int/geotoolkit/welllog/ITrack';
import type { WellTrack } from '@int/geotoolkit/welllog/multiwell/WellTrack';
import type { ProxyWellTrack } from '@int/geotoolkit/welllog/multiwell/ProxyWellTrack';
/**
 * Define abstract track factory
 */
export declare abstract class AbstractWellTrackFactory {
    /**
     * Create track
     * @param track track to insert
     * @param options options
     */
    abstract createTrack(track: TrackType.CorrelationTrack, options: CorrelationTrack.Options): CorrelationTrack;
    abstract createTrack(track: TrackType.WellTrack, options: WellTrack.Options): WellTrack;
    abstract createTrack(track: TrackType.ProxyTrack, options: ProxyWellTrack.Options): ProxyWellTrack;
    abstract createTrack(track: TrackType | LogTrack, options: WellTrack.Options | CorrelationTrack.Options | ProxyWellTrack.Options): ITrack;
    /**
     * Create track header
     * @param track track to create header
     * @param [options] optional track header properties
     * @param [provider] header provider
     */
    abstract createTrackHeader(track: LogTrack | AbstractWellTrack | Group, options?: AbstractWellTrackFactory.TrackOptions, provider?: LogVisualHeaderProvider): LogBaseTrackHeader | WellTrackHeader | Group;
    /**
     * Create track footer
     * @param track track to create header
     * @param [options] optional track header properties
     * @param [provider] footer provider
     */
    abstract createTrackFooter(track: LogTrack | AbstractWellTrack | Group, options?: AbstractWellTrackFactory.TrackOptions, provider?: LogVisualHeaderProvider): LogBaseTrackHeader | WellTrackHeader | Group;
    getClassName(): string;
    static getClassName(): string;
}
export declare namespace AbstractWellTrackFactory {
    /**
     * track header/footer options
     */
    type TrackOptions = {
        /**
         * track header/footer border options
         */
        border?: {
            /**
             * visibility of the border
             */
            visible?: boolean;
            /**
             * color of the border
             */
            color?: string;
            /**
             * line width of the border
             */
            width?: number;
        };
    };
}
