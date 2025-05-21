/**
 * @module geotoolkit/welllog/multiwell/IWellBehavior
 */
import type { MultiWellWidget } from '@int/geotoolkit/welllog/multiwell/MultiWellWidget';
import type { ITrack } from '@int/geotoolkit/welllog/ITrack';
import type { CorrelationTrack } from '@int/geotoolkit/welllog/multiwell/CorrelationTrack';
/**
 * Define interface for well actions
 * @interface
 */
export declare abstract class IWellBehavior {
    /**
     * Highlight well or track
     * @param widget
     * @param track track to remove
     * @param highlight
     */
    abstract highlight(widget: MultiWellWidget, track: ITrack | CorrelationTrack, highlight: boolean): void;
    /**
     * Resize the track width
     * @param widget
     * @param track track to remove
     * @param size a new size
     * @returns true if update is required.
     */
    abstract resize(widget: MultiWellWidget, track: ITrack | CorrelationTrack, size: number): boolean;
    /**
     * Return true if track is selectable
     * @param widget
     * @param track track to remove
     * @returns true if track is selectable
     */
    abstract isSelectable(widget: MultiWellWidget, track: ITrack | CorrelationTrack): boolean;
    /**
     * Return true if track is movable
     * @param widget
     * @param track track to remove
     * @returns true if track is movable
     */
    abstract isMovable(widget: MultiWellWidget, track: ITrack | CorrelationTrack): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties An object containing the properties to get
     */
    abstract getProperties(): any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties an object containing the properties to set
     * @returns this
     */
    abstract setProperties(properties: any): any;
}
