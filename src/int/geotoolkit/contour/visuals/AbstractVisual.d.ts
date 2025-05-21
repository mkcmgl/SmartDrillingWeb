import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { VisualColorMap } from '@int/geotoolkit/contour/visuals/VisualColorMap';
import type { VisualEvent } from '@int/geotoolkit/contour/events/VisualEvent';
import { EventType } from '@int/geotoolkit/contour/events/VisualEvent';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { ContourEvent } from '@int/geotoolkit/contour/events/ContourEvent';
import type { ContourShape } from '@int/geotoolkit/contour/shapes/ContourShape';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import type { EventType as LineVisualEventType } from '@int/geotoolkit/contour/events/LineVisualEvent';
/**
 * The BehaviorType enumeration is used to describe how contour values are mapped to the colorMap,
 * via the ColorBehavior property. (Default is SIMPLE.)
 * @enum
 * @readonly
 */
export declare enum BehaviorType {
    /**
     * This maps contours to colors on a one-to-one basis with Contour #0 colored with the
     * first color in the colorMap. Any contours above the highest colorMap entry are colored
     * with this highest colorMap entry.
     */
    SIMPLE = "Simple",
    /**
     * Colors wrap around for higher contour values. I.e. color = contour MODULO #Colors
     */
    WRAP = "Wrap",
    /**
     * Colors are stretched to cover the full range of contour values. I.e. Contour 0 maps to color 0;
     * and Contour (#Contours-1) maps to Color (#Colors-1).
     */
    STRETCH = "Stretch"
}
/**
 * An abstract contour visual. All visuals are then derived from this abstract class.
 * By default, visible property to true and notify property is false.
 */
export declare abstract class AbstractVisual extends Shape {
    protected constructor(options?: AbstractVisual.Options);
    on<E extends keyof AbstractVisual.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractVisual.EventMap[E]) => void): this;
    off<E extends keyof AbstractVisual.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractVisual.EventMap[E]) => void): this;
    notify<E extends keyof AbstractVisual.EventMap>(type: E, source: AbstractVisual, args?: AbstractVisual.EventMap[E]): this;
    /**
     * Gets the notification state of this visual
     * @deprecated since 4.0, use .isSilent() instead
     * @returns notify If this is true, updates will be broadcast to the listeners.
     */
    getNotify(): boolean;
    /**
     * Sets the notification state of this visual
     * @deprecated since 4.0, use .setSilent() instead
     * @param notify If this is true, updates will be broadcast to the listeners.
     */
    setNotify(notify: boolean): void;
    /**
     * Gets the visual colorMap.
     * @returns colorMap The colorMap used by this visual
     */
    getColorMap(): VisualColorMap;
    /**
     * Sets the visual colorMap
     * @param colorMap The colorMap used by this visual
     * @returns this
     */
    setColorMap(colorMap: VisualColorMap): this;
    /**
     * Gets the color behavior for this visual.
     * @returns colorBehavior The color behavior type.
     */
    getColorBehavior(): BehaviorType;
    /**
     * Sets the color behavior for this visual.
     * @param colorBehavior The color behavior type.
     * @returns this
     */
    setColorBehavior(colorBehavior: BehaviorType): this;
    /**
     * Registers the specified visual listener to receiving events from this visual.
     * @deprecated since 4.0
     * @param visualListener The visual listener
     */
    addVisualListener(visualListener: ContourShape): void;
    /**
     * Unregisters the specified visual listener from receiving event from this visual.
     * @deprecated since 4.0
     * @param visualListener The visual listener
     */
    removeVisualListener(visualListener: ContourShape): void;
    /**
     * Notifies the registered listeners of an event.
     * @deprecated since 4.0
     * @param args The event to pass to the listeners.
     */
    notifyListeners(args: VisualEvent): void;
    /**
     * Invalidates the visual, sending events
     */
    invalidateVisual(): void;
    /**
     * Render the visual. This must be defined in all subclasses.
     * @param renderingContext The rendering context.
     */
    abstract render(renderingContext: RenderingContext): void;
    /**
     * This method is invoked when the contour shape has been invalidated.
     * Nothing is performed for this class, but it must be overridden
     * in subclasses for correct event processing.
     * @deprecated since 4.0, use onContourShapeSet() and .on()/.off() for events
     * @param args The contour event
     */
    contourInvalidated(args: ContourEvent): void;
    /**
     * this method called when visual is connected to Contour shape.
     * override it to subscribe and unsubscribe
     * @param contour contour
     */
    protected onContourShapeSet(contour: ContourShape): void;
    /**
     * Choose a color for the supplied contour value, using the current BehaviorType.
     * @param index The contour index.
     * @param len Size of the contour indexes. I.e. how many are there?
     * Indexes are zero-referenced, so the highest possible index = len-1.
     * @returns color Color with the required color for this index
     */
    chooseColor(index: number, len: number): string;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     */
    setProperties(properties?: AbstractVisual.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns visual properties
     */
    getProperties(): AbstractVisual.OptionsOut;
}
export declare namespace AbstractVisual {
    /**
     * options
     */
    type Options = Shape.Options & {
        /**
         * color behavior type
         */
        colorbehavior?: BehaviorType;
        /**
         * colormap properties
         */
        colormap?: VisualColorMap;
    };
    /**
     * visual properties
     */
    type OptionsOut = Shape.OptionsOut & {
        /**
         * color behavior type
         */
        colorbehavior?: BehaviorType;
        /**
         * colormap properties
         */
        colormap?: VisualColorMap;
    };
    type EventMap = AbstractNode.EventMap & {
        [EventType.COLORMAP_CHANGED]: void;
        [LineVisualEventType.STYLE_CHANGED]: void;
        [EventType.VISUAL_INVALIDATED]: void;
    };
}
