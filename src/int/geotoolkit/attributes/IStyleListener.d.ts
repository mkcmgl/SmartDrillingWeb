/**
 * @module geotoolkit/attributes/IAttributeNode
 */
import type { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
/**
 * Define an object which can connect to geotoolkit/attributes/Style
 * @interface
 */
export declare abstract class IStyleListener {
    /**
     * Connects style.<br>
     * <br>
     * This convenience method subscribes a listener to given style for the specified type.<br>
     * And automatically un-subscribes listener if node is disposed to prevent memory leaks
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     * @returns this
     */
    abstract connectStyle(style: EventDispatcher, type: string, callback: IStyleListener.AttributeCallback): this;
    /**
     * Disconnect style
     * <br>
     * This convenience method un-subscribes a listener to given style for the specified type.<br>
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     * @returns this
     */
    abstract disconnectStyle(style: EventDispatcher, type: string, callback: IStyleListener.AttributeCallback): this;
}
export declare namespace IStyleListener {
    /**
     * EventDispatcher standard callback
     */
    type AttributeCallback = (eventType: string, sender?: EventDispatcher, eventArgs?: any) => void;
}
