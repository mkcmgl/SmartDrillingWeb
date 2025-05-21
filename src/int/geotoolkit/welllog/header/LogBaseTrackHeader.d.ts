import { Border } from '@int/geotoolkit/scene/shapes/Border';
import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { Rect } from '@int/geotoolkit/util/Rect';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { Events as LayoutEvents } from '@int/geotoolkit/layout/Events';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { LogVisualHeaderProvider } from '@int/geotoolkit/welllog/header/LogVisualHeaderProvider';
import type { ITrack } from '@int/geotoolkit/welllog/ITrack';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
/**
 * Define a base implementation of the track header. This class doesn't create
 * headers for track children
 */
export declare class LogBaseTrackHeader extends CompositeNode implements ILayoutable {
    constructor(track?: LogBaseTrackHeader.Options | ITrack, height?: number, provider?: LogVisualHeaderProvider);
    /**
     * copy constructor
     * @param src Source to copy from
     * @returns this
     */
    protected copyConstructor(src: LogBaseTrackHeader): this;
    on<E extends keyof LogBaseTrackHeader.EventMap>(type: E, callback: (eventType: E, sender: this, args: LogBaseTrackHeader.EventMap[E]) => void): this;
    off<E extends keyof LogBaseTrackHeader.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: LogBaseTrackHeader.EventMap[E]) => void): this;
    /**
     * Returns the current header provider
     */
    getHeaderProvider(): LogVisualHeaderProvider | null;
    /**
     * Sets header provider
     *
     * @param provider header provider
     * @returns this
     */
    setHeaderProvider(provider: LogVisualHeaderProvider): this;
    protected initializeVisualHeaders(): this;
    /**
     * Return track to create a header
     */
    getTrack(): LogTrack;
    /**
     * Returns track visibility if track is not null, true instead
     */
    getVisible(): boolean;
    /**
     * Returns bounds
     */
    getBounds(): Rect;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bounds of the node
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    notify<E extends keyof LogBaseTrackHeader.EventMap>(event: E, source: LogBaseTrackHeader, args?: LogBaseTrackHeader.EventMap[E]): this;
    /**
     * Return desired height of the header
     */
    getDesiredHeight(): number;
    /**
     * Sets the border visibility
     *
     * @param visible The visibility of the border
     * @returns this
     */
    setBorderVisibility(visible: boolean): this;
    /**
     * Gets the header border's visibility.
     *
     * @returns visibility The visibility of the header border.
     */
    getBorderVisibility(): boolean;
    /**
     * Sets the border line style
     *
     * @param lineStyle The style in which the line is displayed
     * object can be in format of constructor of {@link @int/geotoolkit/attributes/LineStyle~LineStyle}
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setBorderLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Gets the border line style
     *
     * @returns style The line style of the border.
     */
    getBorderLineStyle(): LineStyle | null;
    /**
     * Sets the border fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setBorderFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Gets the border fill style
     *
     * @returns style The fill style of the border.
     */
    getBorderFillStyle(): FillStyle | null;
    /**
     * Gets transformation
     * @returns transform
     */
    getContentsTransform(): Transformation | null;
    /**
     * Get models limits
     */
    getModelLimits(): Rect;
    /**
     * Sets model limits
     * @param modelLimits model limits
     */
    setModelLimits(modelLimits: Rect): this;
    /**
     * Notify that layout is invalidated. Send event {@link import("geotoolkit/layout/Events").Events.LayoutInvalidated}
     * @param [propagate] propagate invalidate layout to parent
     * @returns this
     */
    invalidateLayout(propagate?: boolean): this;
    /**
     * Update layout of the children headers
     */
    updateLayout(): void;
    /**
     * Rebuild Track header
     * @returns this
     */
    rebuild(): this;
    /**
     * invalidate Method
     * @returns method to invalidate this object
     */
    getInvalidateMethod(): IStyleListener.AttributeCallback;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the props to set
     */
    getProperties(): LogBaseTrackHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogBaseTrackHeader.Options): this;
    /**
     * Adds new css class to node
     * @param cssclass css class name('s)
     */
    addCssClass(cssclass: string[] | string): this;
    /**
     * Removes css class from node
     * @param cssclass css class name('s)
     */
    removeCssClass(cssclass: string[] | string): this;
}
export declare namespace LogBaseTrackHeader {
    /**
     * a log track to create header or properties object
     */
    type Options = CompositeNode.Options & {
        /**
         * a log track to create header
         */
        track?: LogTrack;
        /**
         * provider of the headers
         */
        provider?: LogVisualHeaderProvider;
        /**
         * provider of the headers
         */
        headerprovider?: LogVisualHeaderProvider;
        /**
         * The fill style of the border
         */
        borderfillstyle?: FillStyle.Type;
        /**
         * The line style of the border
         */
        borderlinestyle?: LineStyle.Type;
        /**
         * borders
         */
        borders?: Border.Visible;
        /**
         * The visibility of the border
         */
        isbordervisible?: boolean;
        /**
         * model limits
         */
        modellimits?: Rect;
        /**
         * bounds
         */
        bounds?: Rect;
    };
    /**
     * An object containing the props to set
     */
    type OptionsOut = CompositeNode.OptionsOut & {
        /**
         * a log track to create header
         */
        track: LogTrack;
        /**
         * header provider
         */
        headerprovider: LogVisualHeaderProvider;
        /**
         * The fill style of the border
         */
        borderfillstyle: FillStyle;
        /**
         * The line style of the border
         */
        borderlinestyle: LineStyle;
        /**
         * borders
         */
        borders: Border.Visible;
        /**
         * The visibility of the border
         */
        isbordervisible: boolean;
        /**
         * model limits
         */
        modellimits: Rect;
        /**
         * bounds
         */
        bounds: Rect;
    };
    type EventMap = CompositeNode.EventMap & {
        [LayoutEvents.LayoutInvalidated]: void;
    };
}
