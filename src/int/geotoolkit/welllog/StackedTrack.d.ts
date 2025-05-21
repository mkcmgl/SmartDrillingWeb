import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import type { Layout } from '@int/geotoolkit/layout/Layout';
import type { Range } from '@int/geotoolkit/util/Range';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * The StackedTrack serves as a container for all kinds of tracks and visuals like curves, fill etc.
 */
export declare class StackedTrack extends LogTrack {
    constructor(options?: LogTrack.Options);
    clone(): StackedTrack;
    protected copyConstructor(src: StackedTrack, deepCopy?: boolean): this;
    /**
     * @param event broadcast event
     * @param source who is initializing this event
     * @param args additional parameter
     */
    notify(event: string, source: CompositeNode, args: any): this;
    /**
     * Add a track
     * @param track track to insert
     * @throws Will throw an error if the track is not specified
     */
    addTrack(track: LogTrack | LogTrack[]): LogTrack | LogTrack[];
    /**
     * Insert track to the container at specified index
     * @param index index of the track
     * @param track track to insert
     * @param [trackWidth] optional track width
     * @throws Will throw an error if the track is not specified
     * @example
     * widget.insertTrack(0, track);
     */
    insertTrack(index: number | LogTrack, track: LogTrack | number, trackWidth?: number): LogTrack;
    /**
     * Remove the track
     * @param track track to remove
     * @throws Will throw an error if the track is not specified
     * @returns this
     */
    removeTrack(track: LogTrack): this;
    /**
     * Returns amount of tracks
     * @returns amount of tracks
     */
    getTracksCount(): number;
    /**
     * Returns {@link @int/geotoolkit/welllog/LogTrack~LogTrack} at specified index
     * @param index index to return track at
     */
    getTrackAt(index: number): LogTrack;
    /**
     * Return index of track
     * @param track to get index
     * @returns index of the track
     */
    getTrackIndex(track: LogTrack): number;
    /**
     * Associate layout with a track to layout children tracks
     * @param layout layout to be set
     * @returns this
     */
    setLayout(layout: Layout): this;
    /**
     * Returns layout associated with the group
     * @returns layout
     */
    getLayout(): Layout | null;
    /** */
    protected setLayoutInvalidated(invalidated: boolean): void;
    /**
     * Sets model depth range
     *
     * @param range a new depth range
     * @returns this
     */
    setDepthLimits(range: Range): this;
    /**
     * Sets model minimum and maximum depth
     *
     * @param minDepth minimum depth
     * @param maxDepth maximum depth
     * @returns this
     */
    setDepthLimits(minDepth: number, maxDepth: number): this;
}
