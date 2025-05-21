import { Element } from '@int/geotoolkit/report/elements/Element';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { ISiteElement } from '@int/geotoolkit/report/elements/ISiteElement';
import { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import { Events as SelectionEvents } from '@int/geotoolkit/controls/tools/Selection';
import type { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import type { Element as DomElement } from '@int/geotoolkit/report/dom/Element';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { ParserContext } from '@int/geotoolkit/report/ParserContext';
import type { Group } from '@int/geotoolkit/scene/Group';
export declare abstract class WidgetElement extends Element {
    /**
     * @param [options] contentElement or properties object
     */
    protected constructor(options?: WidgetElement.Options | BaseWidget);
    on<E extends keyof WidgetElement.EventMap>(type: E, callback: (eventType: E, sender: this, args: WidgetElement.EventMap[E]) => void): this;
    off<E extends keyof WidgetElement.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: WidgetElement.EventMap[E]) => void): this;
    notify<E extends keyof WidgetElement.EventMap>(type: E, source: WidgetElement, args?: WidgetElement.EventMap[E]): this;
    /**
     * On de-initialize design time (happens only once)
     * @param site site element
     */
    protected onConnectToSite(site: ISiteElement): this;
    /**
     * On initialize design time (happens only once)
     * @param site site element
     */
    protected onDisconnectFromSite(site: ISiteElement): this;
    /**
     * Return Design time state
     */
    protected isDesignTime(): boolean;
    getWidgetElement(): BaseWidget;
    /**
     * Returns root tool associated to this element
     */
    getTool(): CompositeTool;
    /**
     * Return Dom element
     * @param eventArgs event args
     * @returns return selected object if any
     */
    hitTest(eventArgs: EventArgs): DomElement | null;
    /**
     * Process native keyboard event
     * @param nativeEventArgs arguments of the DOM event
     */
    onKeyDown(nativeEventArgs: Event): boolean;
    /**
     * Set active element
     * @param activeElement active element
     * @returns this
     */
    setActiveElement(activeElement: Element | DomElement): this;
    /**
     * Get active element
     */
    getActiveElement(): Element | DomElement;
    /**
     * Initialize widget element
     * @param json object with data to initialize
     * @param context parser context
     * @returns this
     */
    initialize(json?: object, context?: ParserContext): this;
    /**
     * Should calculate and return preferred size
     * @param preferred bounds
     * @param isDesignTime boolean flag
     * @protected
     */
    protected calculatePreferredSize(bounds: Rect, isDesignTime: boolean): Dimension;
}
export declare namespace WidgetElement {
    /**
     * contentElement or properties object
     */
    type Options = Element.Options & {
        /**
         * contentElement
         */
        widgetelement?: BaseWidget;
    };
    type EventMap = Group.EventMap & {
        [SelectionEvents.onSelectionChanged]: Element | DomElement;
    };
}
