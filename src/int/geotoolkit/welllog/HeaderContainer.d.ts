import { LogVisualHeaderProvider } from '@int/geotoolkit/welllog/header/LogVisualHeaderProvider';
import { Group } from '@int/geotoolkit/scene/Group';
import { Point } from '@int/geotoolkit/util/Point';
import { LogBaseTrackHeader } from '@int/geotoolkit/welllog/header/LogBaseTrackHeader';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import type { AbstractWellTrack } from '@int/geotoolkit/welllog/multiwell/AbstractWellTrack';
/**
 * Enum defining Orientation values
 * @enum
 * @readonly
 */
export declare enum DisplayType {
    /**
     * Default
     */
    Default = "default",
    /**
     * Maximized
     */
    Maximized = "maximized",
    /**
     * Minimized
     */
    Minimized = "minimized"
}
/**
 * Defines a container of log headers
 */
export declare class HeaderContainer<T extends Node = Node> extends Group<T> {
    constructor(options?: HeaderContainer.Options<T> | LogVisualHeaderProvider);
    /**
     * Set display type
     * @param displayType level of detail
     * @returns this
     */
    setDisplayType(displayType: DisplayType): this;
    /**
     * Returns display type
     */
    getDisplayType(): DisplayType;
    /**
     * Sets header provider
     *
     * @param provider provider of header prototypes
     * @returns this
     */
    setHeaderProvider(provider: LogVisualHeaderProvider): this;
    /**
     * Return a header provider
     *
     * @returns header provider
     */
    getHeaderProvider(): LogVisualHeaderProvider;
    addChild(node: T | T[]): this;
    removeChild(node: T | T[]): this;
    /**
     * Return preferred size to layout children
     * @param [rect] desired rect to layout
     */
    getPreferredSize(rect?: Rect): Rect;
    notify(event: string, source: HeaderContainer, args?: any): this;
    /**
     * Set spacing in pixels between headers
     * @param spacing spacing in pixels between header
     * @returns this
     */
    setHeadersSpacing(spacing: number): this;
    /**
     * Return spacing in pixels between headers
     */
    getHeadersSpacing(): number;
    /**
     * Set margin in pixels between headers
     * @param padding padding in pixels header to use in header containers
     * @returns this
     */
    setHeadersPadding(padding: number): this;
    /**
     * Return padding in pixels in header containers
     */
    getHeadersPadding(): number;
    rebuild(force?: boolean): this;
    /**
     * Determines whether this container is scrollable
     * Returns true if scrollable
     */
    isScrollable(): boolean;
    /**
     * Sets whether this container is scrollable
     *
     * @param scrollable sets whether this container is scrollable
     * @returns this
     */
    setScrollable(scrollable: boolean): this;
    /**
     * Scroll to the top
     * @returns this
     */
    scrollToTop(): this;
    /**
     * Scroll to the bottom
     * @returns this
     */
    scrollToBottom(): this;
    /**
     * Returns position to be used to display value. By default it is nan and value is not displayed
     */
    getDisplayPosition(): Point;
    /**
     * Sets display position
     * @param position track point to be used to display value
     */
    setDisplayPosition(position: Point): this;
    /**
     * Sets display position
     * @param posX x-axis position used by header to display value
     * @param markerDepth marker depth to be used to display value
     */
    setDisplayPosition(posX: number, markerDepth: number): this;
    /**
     * Return marker depth to be used to display value. By default, it is nan and value is not displayed
     */
    getDisplayMarkerDepth(): number;
    /**
     * Sets marker depth
     * @param value depth of time value used by header
     */
    setDisplayMarkerDepth(value: number): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): HeaderContainer.OptionsOut<T>;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: HeaderContainer.Options<T>): this;
    /**
     * Return log track header
     * @param track log track
     * @returns track header
     */
    getTrackHeader(track: LogTrack | AbstractWellTrack): LogBaseTrackHeader | null;
}
export declare namespace HeaderContainer {
    /**
     * provider of header prototypes or properties object
     */
    type Options<T extends Node = LogBaseTrackHeader> = Group.Options<T> & {
        /**
         * spacing between headers
         */
        headersspacing?: number;
        /**
         * padding
         */
        headerspadding?: number;
        /**
         * provider of header prototypes
         */
        provider?: LogVisualHeaderProvider;
        /**
         * sets whether this container is scrollable
         */
        scrollable?: boolean;
    };
    type OptionsOut<T extends Node = LogBaseTrackHeader> = Group.OptionsOut<T> & {
        /**
         * spacing between headers
         */
        headersspacing: number;
        /**
         * padding
         */
        headerspadding: number;
        /**
         * provider of header prototypes
         */
        provider: LogVisualHeaderProvider;
        /**
         * sets whether this container is scrollable
         */
        scrollable: boolean;
    };
}
