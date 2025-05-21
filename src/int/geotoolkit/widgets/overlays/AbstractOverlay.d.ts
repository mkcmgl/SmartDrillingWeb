/**
 * @module geotoolkit/widgets/overlays/AbstractOverlay
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
/**
 * AbstractOverlay Events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * This Event is fired when the Abstract Overlay State (props: visible, enable) has been changed
     */
    StateChanged = "StateChanged"
}
/**
 * Defines an abstract implementation of a widget overlay. Abstract overlay supports ...
 */
export declare class AbstractOverlay<T extends BaseWidget = BaseWidget> extends EventDispatcher {
    /**
     * @param widget widget to create overlay
     */
    constructor(widget: T);
    on<E extends keyof AbstractOverlay.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractOverlay.EventMap[E]) => void): this;
    off<E extends keyof AbstractOverlay.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractOverlay.EventMap[E]) => void): this;
    notify<E extends keyof AbstractOverlay.EventMap>(type: E, source: AbstractOverlay, args?: AbstractOverlay.EventMap[E]): this;
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    /**
     * Returns widget
     * @returns widget
     */
    getWidget(): T;
    /**
     * @param state state
     */
    protected onStateChanged(state: 'Visible' | 'Enabled'): this;
    /**
     * Return visibility state
     * @returns visible state
     */
    getVisible(): boolean;
    /**
     * Set visibility state
     * @param visible visibility of overlay
     * @returns this
     */
    setVisible(visible: boolean): this;
    /**
     * Return enabled state
     * @returns enabled state
     */
    getEnabled(): boolean;
    /**
     * Set enabled state
     * @param enabled enable or disable tools
     * @returns this
     */
    setEnabled(enabled: boolean): this;
}
export declare namespace AbstractOverlay {
    type EventMap = EventDispatcher.EventMap & {
        [Events.StateChanged]: 'Visible' | 'Enabled';
    };
}
