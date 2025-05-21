/**
 * @module geotoolkit/welllog/LogAbstractVisual
 */
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { AnimatedNode } from '@int/geotoolkit/scene/AnimatedNode';
import { ITrack } from '@int/geotoolkit/welllog/ITrack';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { HeaderType } from '@int/geotoolkit/welllog/header/HeaderType';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import type { Events as DataEvents } from '@int/geotoolkit/welllog/data/Events';
/**
 * Visual Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired when an instance of the header is set
     */
    HeaderSet = "HeaderSet"
}
/**
 * This represents a parent class of all well log visuals. LogVisuals are shapes that are considered by the WelllogJS toolkit as 'top level' shapes.
 * The LogHeader and LogFooters for those visuals are created by the toolkit. <br>
 * Some advanced features like the Widget's SelectionTool will ignore any shape that is not a Visual. This class defines the parent class that needs to be inherited from, to benefit from those features.<br>
 * Most common WellLog shapes already inherit from this class, like LogCurve, LogTrack, etc.
 */
export declare abstract class LogAbstractVisual extends AnimatedNode {
    /**
     * Constructor
     * @param [options] An object containing the properties to set
     */
    protected constructor(options?: LogAbstractVisual.Options);
    on<E extends keyof LogAbstractVisual.EventMap>(type: E, callback: (eventType: E, sender: this, args: LogAbstractVisual.EventMap[E]) => void): this;
    off<E extends keyof LogAbstractVisual.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: LogAbstractVisual.EventMap[E]) => void): this;
    notify<E extends keyof LogAbstractVisual.EventMap>(type: E, source: LogAbstractVisual, args?: LogAbstractVisual.EventMap[E]): this;
    protected copyConstructor(src: LogAbstractVisual, deepCopy: boolean): this;
    /**
     * Invalidate bounds
     * @param [bounds] model bounds
     * @param [force] force
     * if null is provided then cache (if any will be completely refreshed) otherwise only specified rect or node.bounds will be refreshed
     * @returns this
     */
    invalidateParent(bounds?: Rect, force?: boolean): this;
    /**
     * Returns parent track if {@link @int/geotoolkit/welllog/LogTrack~LogTrack}
     */
    getTrack(): ITrack | null;
    /**
     * Sets line style
     *
     * @param lineStyle The style in which the line is displayed
     * object can be in format of constructor of {@link @int/geotoolkit/attributes/LineStyle~LineStyle}
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Returns line style
     */
    getLineStyle(): LineStyle;
    /**
     * Return meaning data limits
     *
     * @param [fullLimits] default value is false
     */
    getDataLimits(fullLimits?: boolean): Rect | null;
    /**
     * Returns parent model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Returns bounds in the parent coordinates
     */
    getBounds(): Rect | null;
    /**
     * Sets bounds of the visual in the parent coordinates
     * and sets up auto bounds to false
     *
     * @param bounds the rectangle specifying position of the visual in the track.
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Enables or disables auto bounds. If auto bounds is enabled then it
     * equals to parent model limits
     *
     * @param enable Enables or disables auto bounds
     * @returns this
     */
    setAutoBounds(enable: boolean): this;
    /**
     * Returns auto bounds value
     */
    isAutoBounds(): boolean;
    /**
     * Returns micro position left
     */
    getMicroPositionLeft(): number;
    /**
     * Returns micro position right
     */
    getMicroPositionRight(): number;
    /**
     * Returns micro position transformation
     * @returns micro position transformation
     */
    protected getMicroPositionTransformation(): Transformation | null;
    /**
     * Sets micro position (0 - 1).  It allows application code to display the visual in a subarea of the track.<br>
     * By default log visuals uses all space of the trace in the horizontal direction, but micro position allows to place log visual in the specified position of the track in horizontal direction.
     * See example below
     *
     * @param left left position
     * @param right right position
     * @returns this
     * @example
     * // The following code places curve 20% from left and 20% from right.
     * curve.setMicroPosition(0.2,0.8);
     */
    setMicroPosition(left: number, right: number): this;
    /**
     * calls when microPosition has been changed
     * @returns this
     */
    protected onMicroPositionChanged(): this;
    /**
     * Retrieves the world transformation of the spatial
     */
    getContentsTransform(): Transformation | null;
    /**
     * Retrieves the local transformation of the node which represents
     * multiplication of parent to bounds and contents transformations.
     */
    getWorldTransform(): Transformation | null;
    /**
     * Check culling.
     * Returns true if object is inside of renderable area
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties
     */
    getProperties(): LogAbstractVisual.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogAbstractVisual.Options): this;
    /**
     * Return an object that contains all headers registered with the visual
     * @returns headers
     */
    getHeaders(): Record<string, LogVisualHeader>;
    /**
     * Return the header registered by the name
     * @param name header name
     * @returns header
     */
    getHeader(name: string | HeaderType): LogVisualHeader;
    /**
     * Sets header instance with specified name. This name usually defines header or footer.
     * @param name of the container. The 'header' and 'footer' is used.
     * @param headerInstance the header instance
     * @param [silent] silent node to avoid sending events that header is created
     * @returns this
     * @throws {Error} if header name is null
     */
    setHeader(name: string | HeaderType, headerInstance: LogVisualHeader, silent?: boolean): this;
    /**
     * Returns the base name
     *
     * @returns The base name
     */
    getBaseName(): string;
    /**
     * Sets base name of the visual
     *
     * @param name The base name
     * @returns this
     */
    setBaseName(name: string): this;
    /**
     * This method is called if header is set.  Send event {@link import("geotoolkit/welllog/LogAbstractVisual").Events.HeaderSet}
     * @param name of the container. The 'header' and 'footer' is used.
     * @param headerInstance the header instance
     * @param [silent] silent node to avoid sending events that header is created
     */
    protected onHeaderSet(name: string, headerInstance: LogVisualHeader, silent?: boolean): void;
}
export declare namespace LogAbstractVisual {
    /**
     * An object containing the properties to set
     */
    type Options = AnimatedNode.Options & {
        /**
         * The base name
         */
        basename?: string;
        /**
         * the rectangle specifying position of the visual in the track. If set, autobounds will be switched off
         */
        bounds?: Rect;
        /**
         * Enables or disables auto bounds
         */
        autobounds?: boolean;
        /**
         * linestyle
         */
        linestyle?: LineStyle.Type;
        /**
         * left micro position
         */
        microposleft?: number;
        /**
         * right micro position
         */
        microposright?: number;
    };
    /**
     * An object containing the properties
     */
    type OptionsOut = AnimatedNode.OptionsOut & {
        /**
         * The base name
         */
        basename?: string;
        /**
         * the rectangle specifying position of the visual in the track.
         */
        bounds?: Rect;
        /**
         * Enables or disables auto bounds
         */
        autobounds?: boolean;
        /**
         * linestyle
         */
        linestyle?: LineStyle;
        /**
         * left micro position
         */
        microposleft?: number;
        /**
         * right micro position
         */
        microposright?: number;
    };
    type EventMap = AnimatedNode.EventMap & {
        [Events.HeaderSet]: {
            name: string;
            visual: LogAbstractVisual;
            header: LogVisualHeader;
        };
        [DataEvents.Updated]: void;
    };
}
