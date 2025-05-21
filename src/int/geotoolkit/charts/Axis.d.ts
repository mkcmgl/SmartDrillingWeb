import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Axis as AxisAxis } from '@int/geotoolkit/axis/Axis';
import { AxisType } from '@int/geotoolkit/charts/AxisType';
import { Grid } from '@int/geotoolkit/axis/Grid';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import type { AdaptiveDateTimeTickGenerator } from '@int/geotoolkit/axis/AdaptiveDateTimeTickGenerator';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { AxisDimension } from '@int/geotoolkit/axis/AxisDimension';
import { AxisMappingDimension } from '@int/geotoolkit/axis/AxisMappingDimension';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { AdaptiveTickGenerator } from '@int/geotoolkit/axis/AdaptiveTickGenerator';
import { DataType } from '@int/geotoolkit/charts/DataSource';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
/**
 * Axis Events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Axis properties updated
     */
    Updated = "Updated",
    /**
     * Data type changed
     */
    DataTypeUpdated = "DataTypeUpdated"
}
/**
 * Axis shape that is able to connect with {@link @int/geotoolkit/charts/AbstractChart~AbstractChart} to create model space and labels
 * @example
 * import {Axis} from '@int/geotoolkit/charts/Axis';
 *
 * const axis = new Axis({
 *   'dimension': {
 *     'neatlimits': true // use 'neatlimits' instead of precise data limits
 *   },
 *   'min': 1, // fix axis 'min' value
 *   'grid': {
 *       'visible': false // hide connected grid
 *   }
 * });
 */
export declare class Axis extends AxisAxis {
    /**
     * Created axis
     * @param [options] options to create axis
     */
    constructor(options?: Axis.Options);
    on<E extends keyof Axis.EventMap>(type: E, callback: (eventType: E, sender: this, args: Axis.EventMap[E]) => void): this;
    off<E extends keyof Axis.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Axis.EventMap[E]) => void): this;
    notify<E extends keyof Axis.EventMap>(type: E, source: Axis, args?: Axis.EventMap[E]): this;
    /**
     * Set axis data type
     * @param dataType new data type
     */
    setDataType(dataType: DataType): this;
    /**
     * Returns current minimum axis limit if set, null otherwise
     */
    getMin(): number | null;
    /**
     * Returns axis type
     */
    getType(): AxisType;
    /**
     * Returns type of the axis data
     */
    getDataType(): DataType;
    /**
     * Returns grid connected to the axis (if exists, null otherwise)
     */
    getGrid(): Grid | null;
    /**
     * Returns true if axis limits are flipped, false otherwise
     */
    isFlip(): boolean;
    /**
     * Sets axis tick lines style for all grades
     * @param style tick lines style
     * @returns this
     */
    setAllTickStyle(style: LineStyle.Type): this;
    /**
     * Sets axis tick labels text style for all grades
     * @param style tick label text style
     * @returns this
     */
    setAllLabelStyle(style: TextStyle.Type): this;
    /**
     * Returns current maximum axis limit if set, null otherwise
     */
    getMax(): number | null;
    /**
     * Sets axis properties
     * @param [options] axis options
     * @returns this
     */
    setProperties(options?: Axis.Options): this;
    /**
     * Returns properties
     */
    getProperties(): Axis.OptionsOut;
}
export declare namespace Axis {
    /**
     * axis options
     */
    export type Options = AxisAxis.Options & GeneralAxis & {
        /**
         * data type for model values conversion
         */
        datatype?: DataType;
        /**
         * type of the axis data
         */
        type?: AxisType;
        /**
         * Tick generator
         */
        tickgenerator?: TickGenerator | AdaptiveTickGenerator.Options | AdaptiveDateTimeTickGenerator.Options;
        /**
         * Labels array to display on integer ticks positions or data series identifier for it
         */
        labels?: string[] | number[] | string;
    };
    export type OptionsOut = AxisAxis.OptionsOut & {
        /**
         * axis minimum limit
         */
        min?: null | number;
        /**
         * axis maximum limit
         */
        max?: null | number;
        /**
         * true to flip axis limits (connected charts will be flipped as well)
         */
        flip?: boolean;
        /**
         * axis dimension to be used to automatically calculates
         * charts limits
         */
        dimension: {
            /**
             * enable / disable automatic chart's
             * limits calculation
             */
            neatlimits: boolean;
        };
        /**
         * type of the axis data
         */
        type?: AxisType;
        /**
         * options for grid connected to the axis
         */
        grid?: {
            /**
             * grid visibility
             */
            visible?: boolean;
        };
        /**
         * tick label text style
         */
        labelstyle?: TextStyle;
        /**
         * style of all tick lines
         */
        tickstyle?: LineStyle;
        /**
         * location
         */
        location?: AnnotationLocation;
        /**
         * Labels array to display on integer ticks positions or data series identifier for it
         */
        labels?: string[] | number[] | string;
        /**
         * True to adjust limits & color provider based on connected charts data, false to use fixed limits from the color provider (true by default)
         */
        datalimits?: boolean;
        /**
         * logarithmic
         */
        datatype?: DataType;
    };
    type GeneralAxis = {
        /**
         * axis location
         */
        location?: AnnotationLocation;
        /**
         * axis minimum limit
         */
        min?: null | number;
        /**
         * axis maximum limit
         */
        max?: null | number;
        /**
         * true to flip axis limits (connected charts will be flipped as well)
         */
        flip?: boolean;
        /**
         * axis dimension object to use for the axis automatic limits
         * calculation
         */
        dimension?: AxisDimension | AxisMappingDimension.Options & {
            /**
             * axis type
             */
            type?: AxisType;
        };
        /**
         * options for grid connected to the axis
         */
        grid?: {
            /**
             * grid minor ticks options
             */
            minor?: TickGenerator.TickOptions;
            /**
             * grid major ticks options
             */
            major?: TickGenerator.TickOptions;
            /**
             * grid edge ticks options
             */
            edge?: TickGenerator.TickOptions;
            /**
             * grid visibility
             */
            visible?: boolean;
        };
        /**
         * tick label text style
         */
        labelstyle?: TextStyle.Type;
        /**
         * style for all tick lines
         */
        tickstyle?: LineStyle.Type;
        /**
         * True to adjust limits & color provider based on connected charts data, false to use fixed limits from the color provider (true by default)
         */
        datalimits?: boolean;
    };
    export type EventMap = AbstractNode.EventMap & {
        [Events.Updated]: void;
        [Events.DataTypeUpdated]: DataType;
    };
    export {};
}
