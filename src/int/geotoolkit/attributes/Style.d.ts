/**
 * @module geotoolkit/attributes/Style
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Events } from '@int/geotoolkit/scene/Node';
/**
 * Parent class for all styles
 */
export declare abstract class Style extends EventDispatcher {
    /**
     * Creates style
     */
    protected constructor();
    /**
     * All inheritors should implement copy constructor or provide custom implementation for this method
     * @returns this
     */
    clone(): Style;
    on<E extends keyof Style.EventMap>(type: E, callback: (eventType: E, sender: this, args: Style.EventMap[E]) => void): this;
    off<E extends keyof Style.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Style.EventMap[E]) => void): this;
    notify<E extends keyof Style.EventMap>(type: E, source: Style, args?: Style.EventMap[E]): this;
    /**
     * copy constructor
     * @param src Source to copy from
     * @param [deepCopy] deep copy
     * @returns this
     */
    protected copyConstructor(src: Style, deepCopy?: boolean): this;
    /**
     * Gets time stamp
     *
     * @returns timeStamp
     */
    getTimeStamp(): number;
    /**
     * Update time stamp to indicate that style has been changed.
     * @param [silent] silent mode. If this parameter equals to true then
     * style doesn't send invalidate event
     * @returns this
     */
    updateTimeStamp(silent?: boolean): this;
    /**
     * Set silent mode
     *
     * @param bool flag to enable silent mode
     * @param [force] true if parent should be invalidated immediately
     * @returns this
     */
    setSilent(bool: boolean, force?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties properties
     */
    getProperties(): Record<string, any>;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties: Record<string, any>): this;
    /**
     * notify the node that the style is invalidated
     * @returns this
     */
    invalidate(): this;
    /**
     * Return status of the global notification for all styles.
     */
    static isStyleNotificationEnabled(): boolean;
}
export declare namespace Style {
    type EventMap = EventDispatcher.EventMap & {
        [Events.Invalidate]: void;
    };
}
