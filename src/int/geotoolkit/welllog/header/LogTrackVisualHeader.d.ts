import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import { Events } from '@int/geotoolkit/layout/Events';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
/**
 * Define header for LogTrack
 */
export declare class LogTrackVisualHeader<Track extends CompositeNode = LogTrack> extends LogVisualHeader<Track> {
    /**
     * @param [options] visual for logtrack or properties object
     */
    constructor(options?: LogTrackVisualHeader.Options<Track> | Track);
    on<E extends keyof LogTrackVisualHeader.EventMap>(type: E, callback: (eventType: E, sender: this, args: LogTrackVisualHeader.EventMap[E]) => void): this;
    off<E extends keyof LogTrackVisualHeader.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: LogTrackVisualHeader.EventMap[E]) => void): this;
    notify<E extends keyof LogTrackVisualHeader.EventMap>(type: E, source: LogTrackVisualHeader<Track>, args?: LogTrackVisualHeader.EventMap[E]): this;
    clone(): LogTrackVisualHeader<Track>;
    protected copyConstructor(src: LogTrackVisualHeader<Track>, deepCopy?: boolean): this;
    /**
     * Set auto label rotation
     * @param value enable automatic label rotation
     * @returns this
     */
    setAutoLabelRotation(value: boolean): this;
    /**
     * Get auto label rotation
     */
    getAutoLabelRotation(): boolean;
    /**
     * Set show ellipsis
     * @param showEllipsis showEllipsis boolean flag that enables/disables ellipsis in case if text is too long
     * @returns this
     */
    setShowEllipsis(showEllipsis: boolean): this;
    /**
     * Returns ellipsis flag
     */
    getShowEllipsis(): boolean;
    /**
     * Sets ellipsis text to string under 15 characters
     * @param showEllipsis ellipsisValue value in the current section
     * @returns this
     */
    setEllipsisString(ellipsisValue: string): this;
    /**
     *  Get ellipsis text
     */
    getEllipsisString(): string;
    /**
     * True if labels doesn't fit to header width
     */
    isRotationNeeded(): boolean;
    /**
     * Sets label rotation angle in radians
     * @param angle label rotation angle, in radians
     * @returns this
     * @example
     * // user can customize the label rotation angle
     * setLabelRotationAngle(-Math.PI / 2)
     */
    setLabelRotationAngle(angle: number): this;
    /**
     * Returns label rotation angle
     * @returns label rotation angle in radians
     */
    getLabelRotationAngle(): number;
    /**
     * Sets label anchor type
     * @param anchorType title anchor type
     * @returns this
     * @example
     * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
     *
     * header.setAnchorType(AnchorType.BottomCenter);
     */
    setAnchorType(anchorType: AnchorType): this;
    /**
     * Returns title anchor type
     * @returns title anchor type
     */
    getAnchorType(): AnchorType;
    /**
     * Set adaptive height flag
     * @param enable set adaptive height or not
     * @returns this
     */
    setAdaptiveHeight(enable: boolean): this;
    /**
     * get adaptive height flag
     */
    getAdaptiveHeight(): boolean;
    render(inputContext: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): LogTrackVisualHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogTrackVisualHeader.Options<Track>): this;
    /**
     * @returns this
     */
    updateState(): this;
    /**
     * Returns header title
     * @returns title
     */
    getText(): string;
    /**
     * Return header desired height
     */
    getDesiredHeight(): number;
}
export declare namespace LogTrackVisualHeader {
    /**
     * visual for logtrack or properties object
     */
    type Options<Track extends CompositeNode = LogTrack> = LogVisualHeader.Options<Track> & {
        /**
         * ellipsis flag
         */
        showellipsis?: boolean;
        /**
         * string ellipsis that renders if ellipsis is true
         */
        ellipsisstring?: string;
        /**
         * height of the header
         */
        adaptiveheight?: boolean;
        /**
         * define automatic label rotation if track is narrow
         */
        autolabelrotation?: boolean;
        /**
         * define optional label rotation angle relative to header
         */
        labelrotationangle?: number;
        /**
         * define optional label anchor type
         */
        anchortype?: AnchorType;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut<Track extends CompositeNode = LogTrack> = LogVisualHeader.OptionsOut<Track> & {
        /**
         * ellipsis flag
         */
        showellipsis: boolean;
        /**
         * string ellipsis that renders if ellipsis is true
         */
        ellipsisstring: string;
        /**
         * height of the header
         */
        adaptiveheight: boolean;
        /**
         * define automatic label rotation if track is narrow
         */
        autolabelrotation: boolean;
        /**
         * define optional label rotation angle relative to header
         */
        labelrotationangle: number;
        /**
         * define optional label anchor type
         */
        anchortype: AnchorType;
    };
    type EventMap = LogVisualHeader.EventMap & {
        [Events.LayoutInvalidated]: void;
    };
}
