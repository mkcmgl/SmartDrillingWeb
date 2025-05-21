import type { Range } from '@int/geotoolkit/util/Range';
/**
 * Define event to be used to notify about data changed
 */
export declare class LogDataEvent {
    /**
     * Constructor
     * @param [startDepth] start depth
     * @param [endDepth] end depth
     * @param [oldStartDepth] old start depth
     * @param [oldEndDepth] old end depth
     * @param [valueLimitsChanged] defines if values limits are changed or not
     * @param [valueAddedToTail] defines if values are added to the tail
     */
    constructor(startDepth?: number, endDepth?: number, oldStartDepth?: number, oldEndDepth?: number, valueLimitsChanged?: boolean, valueAddedToTail?: boolean);
    /**
     * Return start depth
     */
    getStartDepth(): number;
    /**
     * Return end depth
     */
    getEndDepth(): number;
    /**
     * Return old start depth
     */
    getOldStartDepth(): number;
    /**
     * Return old end depth
     */
    getOldEndDepth(): number;
    /**
     * Return true if values limits are changed
     */
    isValueLimitsChanged(): boolean;
    /**
     * Return true if values are added to the tail. This could happen in case of real time
     */
    isValueAddedToTail(): boolean;
    /**
     * Return true if values was removed from the top of the datasource
     */
    isValueRemovedFromStart(): boolean;
    /**
     * Return true if values was removed from the bottom of the datasource
     */
    isValueRemovedFromEnd(): boolean;
    getIndexRange(): Range | number[] | null;
    /**
     * Returns the same instance of the event arguments to void multiple events creation.
     * It means that this event cannot be kept.
     * @param [startDepth] start depth
     * @param [endDepth] end depth
     * @param [oldStartDepth] old start depth
     * @param [oldEndDepth] old end depth
     * @param [valueLimitsChanged] defines if values limits are changed or not
     * @param [valueAddedToTail] defines if values are added to the tail
     * @returns event
     */
    static getEvent(startDepth?: number, endDepth?: number, oldStartDepth?: number, oldEndDepth?: number, valueLimitsChanged?: boolean, valueAddedToTail?: boolean): LogDataEvent;
    static getClassName(): string;
    getClassName(): string;
}
