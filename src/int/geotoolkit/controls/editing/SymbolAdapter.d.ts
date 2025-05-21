/**
 * @module geotoolkit/controls/editing/SymbolAdapter
 */
import { ShapeAdapter } from '@int/geotoolkit/controls/editing/ShapeAdapter';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { Events } from '@int/geotoolkit/controls/editing/Events';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { AnchoredHandle } from '@int/geotoolkit/controls/editing/AnchoredHandle';
/**
 * Defines a shape adapter which has functionality to manipulate Symbols.
 * This adapter associates itself to an instance of Symbol shape, creates a handle rendered on top of the shape
 * and allows dragging the shape around the scene.
 */
export declare class SymbolAdapter extends ShapeAdapter<SymbolShape> {
    constructor();
    on<E extends keyof SymbolAdapter.EventMap>(type: E, callback: (eventType: E, sender: this, args: SymbolAdapter.EventMap[E]) => void): this;
    off<E extends keyof SymbolAdapter.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: SymbolAdapter.EventMap[E]) => void): this;
    notify<E extends keyof SymbolAdapter.EventMap>(type: E, source: SymbolAdapter, args?: SymbolAdapter.EventMap[E]): this;
    /**
     * Called during initialization process. Create handles
     */
    onInitialize(): boolean;
    updateHandles(): this;
    /**
     * Sets shape to be modified
     * @param shape shape to be modified
     */
    setShape(shape: SymbolShape): this;
    /**
     * Sets the visibility of the handles registered with this adapter
     * @param visible Visibility to set on handles
     */
    setHandlesVisible(visible: boolean): this;
    /**
     * Called when adapter goes from active to non-active and vice versa
     * @param active New state of the adapter
     */
    onActiveStateChanged(active: boolean): void;
    /**
     * Moves the handle and the shape, if shape editing is enabled
     * @param x The device x position to move to
     * @param y The device y position to move to
     * @param [eventArgs] Event arguments from the calling tool
     */
    onMove(x: number, y: number, eventArgs?: EventArgs): this;
    /**
     * Called when a handle owned by this adapter has been released and editing stops.
     * @param x X coordinate of pointer when mouseup occurred
     * @param y Y coordinate of pointer when mouseup occurred
     * @param [eventArgs] Event arguments from the calling tool
     */
    release(x: number, y: number, eventArgs?: EventArgs): this;
    /**
     * Called when a handle owned by this adapter has been selected and activated. The editing began.
     * @param x X coordinate of the point where the mouse was clicked to engage the handle
     * @param y Y coordinate of the point where the mouse was clicked to engage the handle
     * @param [eventArgs] arguments from the event that started the change
     */
    engage(x: number, y: number, eventArgs?: EventArgs): void;
    /**
     * Sets the flag defining if this adapter has to directly edit the shape which it is associated with.
     * Otherwise, it will only send an event.
     * @param allow True to edit the shape directly
     */
    setAllowShapeEdit(allow: boolean): this;
    /**
     * Returns the flag defining if this adapter directly edits the shape which it is associated with.
     * @returns True if shape is being edited
     */
    getAllowShapeEdit(): boolean;
    /**
     * Sets the flag defining if a ghost should be moved instead of an actual handle when the shape is being manipulated.
     * @param show True to display a ghost handle
     */
    setShowGhost(show: boolean): this;
    /**
     * Returns the flag defining if a ghost is moved instead of an actual handle when the shape is being manipulated.
     */
    getShowGhost(): boolean;
    /**
     * Gets active handle
     */
    getActiveHandle(): AnchoredHandle;
    /**
     * Sets styles for active, inactive, and ghost states of all handles, and redraws the handle
     * @param styles object containing styling for different types of handle states
     */
    setHandleStyles(styles: SymbolAdapter.HandleStyles): this;
    /**
     * Updates the state of the adapter, recalculates position and size of handles, and redraws.
     */
    update(): this;
}
export declare namespace SymbolAdapter {
    /**
     * object containing stylings for different types of handle states
     */
    type HandleStyles = {
        /**
         * Line Style of the handle when it is in ghost state
         */
        ghostlinestyle?: LineStyle | string | LineStyle.Options;
        /**
         * Fill Style of the handle when it is in ghost state
         */
        ghostfillstyle?: FillStyle | string | FillStyle.Options;
        /**
         * Fill Style of the handle when it is selected and active
         */
        activefillstyle?: FillStyle | string | FillStyle.Options;
        /**
         * Fill Style of the handle when it is selected and inactive
         */
        inactivefillstyle?: FillStyle | string | FillStyle.Options;
        /**
         * Line Style of the handle when it is active
         */
        activelinestyle?: LineStyle | string | LineStyle.Options;
        /**
         * Line Style of the handle when it is inactive
         */
        inactivelinestyle?: LineStyle | string | LineStyle.Options;
    };
    type EventMap = ShapeAdapter.EventMap & {
        [Events.Dragging]: {
            oldx: number;
            oldy: number;
            x: number;
            y: number;
            nativeeventargs: EventArgs;
        };
        [Events.DragStart]: {
            x: number;
            y: number;
            nativeeventargs: EventArgs;
        };
        [Events.DragEnd]: {
            x: number;
            y: number;
            nativeeventargs: EventArgs;
        };
    };
}
