/**
 * @module geotoolkit/welllog/LogAxis
 */
import { Axis } from '@int/geotoolkit/axis/Axis';
import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
/**
 * Enum of axis tick positions
 * @enum
 * @readonly
 */
export declare enum TitleAlignment {
    /**
     * Title is on the top side.
     */
    Top = "top",
    /**
     * Title is on the center.
     */
    Center = "center",
    /**
     * Title is on the bottom side.
     */
    Bottom = "bottom"
}
/**
 * Creates the standard representation of a well log axis. It can be added to the track and a tickgenerator like {@link @int/geotoolkit/welllog/axis/DateTimeTickGenerator~DateTimeTickGenerator} can be assigned to it based on the trajectory data.
 */
export declare class LogAxis extends Axis {
    /**
     * Creates axis
     * @param [options] axis tick generator or options object
     */
    constructor(options?: Axis.Options | TickGenerator);
    clone(): LogAxis;
    /**
     * Returns a parent log track
     */
    getTrack(): LogTrack | null;
    /**
     * Get title alignment
     * @returns alignment
     */
    getTitleAlignment(): TitleAlignment;
    /**
     * Set title alignment
     * @param titleAlignment title alignment
     */
    setTitleAlignment(titleAlignment: TitleAlignment): this;
    /**
     * Set properties
     * @param [properties] properties to set
     */
    setProperties(properties?: Axis.Options & {
        title?: {
            alignment?: TitleAlignment;
        };
    }): this;
}
