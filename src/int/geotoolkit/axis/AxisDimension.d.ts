/**
 * @module geotoolkit/axis/AxisDimension
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * Dimension Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Changed
     */
    Changed = "Changed"
}
/**
 * Define axis model dimension.
 */
export declare class AxisDimension extends EventDispatcher {
    constructor(options?: AxisDimension.Options);
    on<E extends keyof AxisDimension.EventMap>(type: E, callback: (eventType: E, sender: this, args: AxisDimension.EventMap[E]) => void): this;
    off<E extends keyof AxisDimension.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AxisDimension.EventMap[E]) => void): this;
    notify<E extends keyof AxisDimension.EventMap>(type: E, source: AxisDimension, args?: AxisDimension.EventMap[E]): this;
    /**
     * Sets axis orientation
     * @param orientation axis orientation
     * @returns this
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Gets axis orientation
     */
    getOrientation(): Orientation;
    /**
     * Return minimum value
     */
    getMin(): number;
    /**
     * Sets options
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: AxisDimension.Options): this;
    /**
     * Enable / disable neat limits
     * @param enable enable or disable neat limits
     * @returns this
     */
    setNeatLimits(enable: boolean): this;
    /**
     * Returns true if neat limits is enabled.
     */
    getNeatLimits(): boolean;
    /**
     * Return options
     * @returns The options
     */
    getOptions(): Required<AxisDimension.Options>;
    /**
     * Return maximum value
     */
    getMax(): number;
    /**
     * Return origin value
     */
    getOrigin(): number;
    /**
     * Update limits
     * @param min minimum value
     * @param max maximum value
     * @param [options] from model range to device or addition properties
     */
    updateLimits(min: number, max: number, options?: AxisDimension.Limits | Transformation): void;
}
export declare namespace AxisDimension {
    /**
     * The options
     */
    type Options = {
        /**
         * name of the dimension
         */
        name?: string;
        /**
         * enable or disable neat limits
         */
        neatlimits?: boolean;
        /**
         * axis orientation
         */
        orientation?: Orientation;
        /**
         * minimum value
         */
        min?: number;
        /**
         * maximum value
         */
        max?: number;
    };
    /**
     * from model range to device or addition properties
     */
    type Limits = {
        /**
         * transformation from model range to device
         */
        transformation?: Transformation;
        /**
         * axis size in device
         */
        size?: number;
        /**
         * optional device span between ticks
         */
        span?: number;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.Changed]: Required<Options>;
    };
}
