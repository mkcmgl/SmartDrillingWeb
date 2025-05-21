import type { Merge } from '@int/geotoolkit/base';
import { MeasureMode } from '@int/geotoolkit/controls/tools/MeasureMode';
import { Paint } from '@int/geotoolkit/controls/tools/Paint';
import { MeasureEvents } from '@int/geotoolkit/controls/tools/MeasureEvents';
import { PaintEventArgs } from '@int/geotoolkit/controls/tools/PaintEventArgs';
import type { Format } from '@int/geotoolkit/util/Format';
import type { Text } from '@int/geotoolkit/scene/shapes/Text';
import type { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
/**
 * Measure tool to measure data in model coordinates. Can measure distance or polygon area
 */
export declare class Measure extends Paint {
    constructor(options?: Measure.Options);
    on<E extends keyof Measure.EventMap>(type: E, callback: (eventType: E, sender: this, args: Measure.EventMap[E]) => void): this;
    off<E extends keyof Measure.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Measure.EventMap[E]) => void): this;
    notify<E extends keyof Measure.EventMap>(type: E, source: Measure, args?: Measure.EventMap[E]): this;
    /**
     * Returns distances that were measured
     */
    getDistances(): number[];
    /**
     * Returns measured area value
     */
    getArea(): number | null;
    /**
     * Returns label(s) that display distances or area
     * @returns label(s)
     */
    getLabels(): Node | Node[];
    /**
     * Sets measure mode (for what is measured)
     * @param mode measure mode
     * @returns this
     */
    setMeasureMode(mode: MeasureMode): this;
    /**
     * Returns current measure mode
     * @returns mode
     */
    getMeasureMode(): MeasureMode;
}
export declare namespace Measure {
    /**
     * tool options
     */
    type Options = Merge<Paint.Options, {
        /**
         * tool name
         */
        name?: string;
        /**
         * tool mode (distance/area)
         */
        mode?: MeasureMode;
        /**
         * format instance to use for info labels
         */
        format?: Format;
        /**
         * text instance to use for labeling or label callout options (see {@link @int/geotoolkit/controls/shapes/Callout~Callout} for more info)
         */
        label?: Text | {
            /**
             * label callout arrow size in device coordinates
             */
            arrowsize?: number;
            /**
             * label callout inner padding in device coordinates
             */
            padding?: number;
            /**
             * label info suffix (to represent units)
             */
            suffix?: string;
        };
        /**
         * direction symbol to show measuring direction
         */
        directionsymbol?: AnchoredShape;
        /**
         * direction mode for direction symbol position(s)
         */
        directionmode?: number;
    }>;
    type EventMap = AbstractEditorBase.EventMap & {
        [MeasureEvents.DistanceChanged]: PaintEventArgs;
        [MeasureEvents.AreaChanged]: PaintEventArgs;
        [MeasureEvents.PositionChanged]: PaintEventArgs;
    };
}
