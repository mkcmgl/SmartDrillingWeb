/**
 * @module geotoolkit/attributes/Pattern
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Events } from '@int/geotoolkit/scene/Node';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { IPatternContext } from '@int/geotoolkit/platforms/IPatternContext';
import type { IBaseImage } from '@int/geotoolkit/platforms/IBaseImage';
/**
 * Defines a base class to define a pattern.
 */
export declare class Pattern extends EventDispatcher {
    constructor(data?: Pattern.Options);
    on<E extends keyof Pattern.EventMap>(type: E, callback: (eventType: E, sender: this, args: Pattern.EventMap[E]) => void): this;
    off<E extends keyof Pattern.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Pattern.EventMap[E]) => void): this;
    notify<E extends keyof Pattern.EventMap>(type: E, source: Pattern, args?: Pattern.EventMap[E]): this;
    /**
     * Makes a pattern from the image
     *
     * @param context 2d rendering context from canvas
     * @param repetition style of repetition
     * @param [foregroundColor] of the pattern
     * @param [transform] transform
     * @returns pattern
     */
    getPattern(context: IPatternContext, repetition: string, foregroundColor?: string, transform?: Transformation): null | any;
    /**
     * Gets the X scale for image transformation.
     */
    getScaleX(): number;
    /**
     * Gets the Y scale for image transformation.
     */
    getScaleY(): number;
    /**
     * Returns size as a Dimension object with width and height attributes
     *
     * @returns size
     */
    getSize(): Dimension;
    /**
     * Width of this pattern's image
     *
     * @returns width
     */
    getWidth(): number;
    /**
     * Height of this pattern's image
     *
     * @returns height
     */
    getHeight(): number;
    /**
     * Gets user handle
     * @deprecated since 4.0. Not used anymore.
     * @returns userHandle
     */
    getUserHandle(): Function;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties
     */
    getProperties(): Pattern.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Pattern.Options): this;
    /**
     * invalidate parent
     *
     * @param [foregroundColor] of the pattern
     * @returns this
     */
    invalidate(foregroundColor?: string): this;
    /**
     * return the load image promise
     */
    getPromise(): Promise<IBaseImage>;
    /**
     * This method sets the container and pattern name to be
     * used for serialization.
     *
     * @param patternName pattern name
     * @param containerName container name
     * @returns this
     */
    setPatternName(patternName: string, containerName: string): this;
    /**
     * Returns pattern name
     *
     * @returns a pattern name
     */
    getPatternName(): string;
    /**
     * Returns a name of the pattern container
     *
     * @returns a container name
     */
    getContainerName(): string;
    /**
     * Return the imagepattern data url promise
     */
    getDataURL(): Promise<string>;
}
export declare namespace Pattern {
    /**
     * The image patterns options
     */
    type Options = {
        /**
         * name of this pattern for indexing
         */
        patternname?: string;
        /**
         * an optional container name, which creates an image pattern. This
         * parameter is used for serialization if you want to save are reference to pattern instead of the pattern itself
         */
        containername?: string;
        /**
         * flag that sets scalability of the pattern
         * coordinates, or relative to the shape it is filling (It is not supported)
         */
        scalable?: boolean;
        /**
         * additional info associated with current image pattern
         * @deprecated since 4.0. Not used anymore.
         */
        userhandle?: Function;
    };
    type OptionsOut = {
        /**
         * name of this pattern for indexing
         */
        patternname?: string;
        /**
         * an optional container name, which creates an image pattern. This
         * parameter is used for serialization if you want to save are reference to pattern instead of the pattern itself
         */
        containername?: string;
        /**
         * flag that sets scalability of the pattern
         * coordinates, or relative to the shape it is filling (It is not supported)
         */
        scalable: boolean;
        /**
         * additional info associated with current image pattern
         * @deprecated since 4.0. Not used anymore.
         */
        userhandle?: Function;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.Invalidate]: string;
    };
}
