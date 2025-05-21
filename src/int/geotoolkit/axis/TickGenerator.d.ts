import { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { ValueTransformer } from '@int/geotoolkit/axis/ValueTransformer';
import type { TickInfo } from '@int/geotoolkit/axis/TickInfo';
import type { IModel } from '@int/geotoolkit/scene/IModel';
/**
 * Node Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired when a tick generator is modified and requires a render cycle to be done
     */
    Invalidate = "Invalidate"
}
declare const GRADES: readonly ["edge", "major", "intermediate", "minor"];
/**
 * Define a base class for tick generators. Toolkit provides several tick generators to help generate numeric labels.<br>
 * It generates ticks and labels based on the tick info and tickgrades. {@link @int/geotoolkit/axis/Axis~Axis} uses the TickGenerator while creating the axis.
 * Please refer to Axes and Grids Tutorial in CarnacJS for examples of the different tick generators supported.<br>
 * A tick generator mainly provides the positions of sequential ticks as well as the informational data associated with tick positions.
 */
export declare class TickGenerator extends EventDispatcher implements IStyleListener {
    constructor(options?: TickGenerator.Options);
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    on<E extends keyof TickGenerator.EventMap>(type: E, callback: (eventType: E, sender: this, args: TickGenerator.EventMap[E]) => void): this;
    off<E extends keyof TickGenerator.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: TickGenerator.EventMap[E]) => void): this;
    notify<E extends keyof TickGenerator.EventMap>(type: E, source: TickGenerator, args?: TickGenerator.EventMap[E]): this;
    /**
     * Returns valid Tick string : "edge", "major", "intermediate", "minor"
     * @returns array of known Tick string
     */
    getGrades(): string[];
    /**
     * Reset max label info
     * @returns this
     */
    resetMaxLabels(): this;
    /**
     * Returns max labels for each type of grades
     * @param tickInfo info about the tick
     * @param orient orientation
     * @param fromValue generate labels from
     * @param toValue generate labels to
     * @returns array of `{'type':tickGrade, 'value':maxValue}`
     */
    protected getMaxLabels(tickInfo: TickInfo, orient: Orientation | string, fromValue: number, toValue: number): {
        type: string;
        value: number;
    }[];
    /**
     * Returns maximum label metrics. For internal use only
     *
     * @param parent parent axis or grid
     * @param orientation orientation
     * @param tickInfo info about tick position
     * @param fromValue generate labels from
     * @param toValue generate labels to
     */
    getMaxLabelMetrics(parent: IModel, orientation: Orientation | string, tickInfo: TickInfo, fromValue: number, toValue: number): Dimension;
    /**
     * Returns bounding box of label
     * @param tickInfo info about the tick
     * @param orient orientation
     * @param labelPos label position along index direction
     * @param [labelText] label text. If not defined labelPos.toString() is used.
     * @returns bbox bounding box
     */
    getBoundingBox(tickInfo: TickInfo, orient: Orientation | string, labelPos: number, labelText?: string): Rect;
    /**
     * Gets label anchor type
     * @param grade tick grade
     * @param [transformation] optional transformation from model to device.
     * It is used only for custom label anchor handler
     */
    getLabelAnchorType(grade: string, transformation?: Transformation): AnchorType | null;
    /**
     * Sets label format handler
     * @param handler handler
     * @returns this
     */
    setFormatLabelHandler(handler: TickGenerator.LabelFormatHandler): this;
    /**
     * Returns label format handler
     */
    getFormatLabelHandler(): TickGenerator.LabelFormatHandler;
    /**
     * Sets label anchor type
     * @param grade tick grade
     * @param anchorType anchorType
     * @returns this
     */
    setLabelAnchorType(grade: string, anchorType: AnchorType | TickGenerator.AnchorStyleHandler): this;
    /**
     * Sets visibility of tick for a specific tick grade
     * Implementation of the reset should check visibility of the ticks
     * @param tickGrade Tick grade see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @param visible tick grade visibility flag
     * @returns this
     */
    setVisibleTickGrade(tickGrade: string, visible: boolean): this;
    /**
     * Returns visibility of tick for a specific tick grade
     * @param tickGrade Tick grade see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @returns true if the tick is visible
     */
    isVisibleTickGrade(tickGrade: string): boolean;
    /**
     * Sets visibility of label for a specific tick grade
     * Implementation of the reset should check visibility of the labels.
     * @param tickGrade Tick grade see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @param visible tick label visibility flag
     * @returns this
     */
    setVisibleLabelGrade(tickGrade: string, visible: boolean): this;
    /**
     * Returns visibility of label for a specific tick grade
     * @param tickGrade Tick grade see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @returns true if label is visible
     */
    isVisibleLabelGrade(tickGrade: string): boolean;
    /**
     * Changes the size of specified ticks
     * @param grade Grade of the tick to set the size see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @param size New size
     * @returns this
     */
    setTickSize(grade: string, size: number): this;
    /**
     * Returns the size of specified tick
     * @param grade Grade of the tick to get the size see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     */
    getTickSize(grade: string): number | null;
    /**
     * Sets tick style
     * @param tickGrade Tick grade see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @param [lineStyle] line style for the tick
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setTickStyle(tickGrade: string, lineStyle?: LineStyle.Type, merge?: boolean): this;
    /**
     * Returns tick style
     * @param tickGrade Tick Grade see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @returns line style
     */
    getTickStyle(tickGrade: string): LineStyle | null;
    /**
     * Sets label style
     * @param tickGrade Tick grade see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @param [labelStyle] tick text style
     * @param [merge] true if you want to merge labelStyle with existing attribute, false by default
     * @returns this
     */
    setLabelStyle(tickGrade: string, labelStyle?: TextStyle.Type, merge?: boolean): this;
    /**
     * Returns label style
     * @param tickGrade Tick grade see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @returns label style
     */
    getLabelStyle(tickGrade: string): TextStyle | null;
    /**
     * Sets label rotation angle
     * @param tickGrade Tick grade see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @param angle label rotation angle, in radians
     * @returns this
     * @example
     * // user can customize the label rotation angle based on tick grade.
     * tickGenerator.setLabelRotationAngle('major', -Math.PI / 2);
     */
    setLabelRotationAngle(tickGrade: string, angle: number): this;
    /**
     * Returns label rotation angle
     * @param tickGrade Tick grade see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @returns label rotation angle
     */
    getLabelRotationAngle(tickGrade: string): number;
    /**
     * Executes delegate and returns the result
     * @param delegate execute delegate and return the result
     */
    execute(delegate: (this: this) => void): this;
    execute<T>(delegate: (this: this) => T): T;
    /**
     * Sets tag
     * @param tag user can specify info associated with current object
     * @returns this
     */
    setTag(tag: any): this;
    /**
     * Returns tag
     * @returns the tag
     */
    getTag(): any;
    /**
     * Resets tick generator
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo tick info
     * @returns a supported tick grade list
     */
    reset(parent: IModel, orient: Orientation | string, tickInfo: TickInfo): string[];
    /**
     * Verify tick generator parameters to have better label distribution
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo tick info
     * @returns true if no label intersection
     */
    isValid(parent: IModel, orient: Orientation | string, tickInfo: TickInfo): boolean;
    /**
     * Resets tick generator asynchronously
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo tick info
     * @param callback calls when asynchronous reset is done
     */
    resetAsync(parent: IModel, orient: Orientation | string, tickInfo: TickInfo, callback: (x: string[]) => void): void;
    /**
     * Reset labels. This method is called to start iteration by labels.
     * The implementation also sets appropriate {@link @int/geotoolkit/attributes/TextStyle~TextStyle} on labels.
     *
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo an info about labels. This information is used to pass and receive information about the current tick or label
     * @returns labels count for the current tick type
     */
    resetLabels(parent: IModel, orient: Orientation | string, tickInfo: TickInfo): number;
    /**
     * Resets ticks. This method is called to start iteration by ticks.
     * The implementation also sets appropriate {@link @int/geotoolkit/attributes/LineStyle~LineStyle} on the ticks
     * as well as their tick size.
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo an info about labels. This information is used to pass and receive information about the current tick or label
     * @returns ticks count for the current tick type. The implementation returns 0 if the ticks can not be drawn; a positive number otherwise.
     */
    resetTicks(parent: IModel, orient: Orientation | string, tickInfo: TickInfo): number;
    /**
     * Generates information about next label
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo info about tick
     * @param tickIndex tickIndex tick index from 0 to count-1, which resetLabels returns
     * @returns the model position of the label
     */
    nextLabel(parent: IModel, orient: Orientation | string, tickInfo: TickInfo, tickIndex: number): number;
    /**
     * Generates information about next tick
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo info about tick
     * @param tickIndex tick index from 0 to count-1, which resetTicks returns
     * @returns the model position of the tick
     */
    nextTick(parent: IModel, orient: Orientation | string, tickInfo: TickInfo, tickIndex: number): number;
    /**
     * Gets adjust label anchor flag for specified label grade
     * @param grade label grade
     * @returns label anchor flag ("true" by default for any grade)
     */
    getAdjustLabelAnchor(grade: string): boolean;
    /**
     * Sets adjust label anchor flag for specified label grade
     * @param grade label grade
     * @param flag adjust label anchor flag
     * @returns this
     */
    setAdjustLabelAnchor(grade: string, flag: boolean): this;
    /**
     * Formats label text. This method must be overridden in the base classes and the the base class method must be called first.
     *
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo an info about tick
     * @param tickIndex tickIndex tick index from 0 to count-1, which resetLabels returns
     * @param modelValue model value
     * @returns formatted label text
     */
    formatLabel(parent: IModel, orient: Orientation | string, tickInfo: TickInfo, tickIndex: number, modelValue: number): string;
    /**
     * Returns an array of the visible tick grades
     * @param supported supported grades see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @returns the visible grades
     */
    getVisibleTickGrades(supported: string[]): string[];
    /**
     * Return an array of the visible label grades
     * @param supported supported grades see {@link import("geotoolkit/axis/TickGenerator").TickGenerator.getGrades} for valid Tick types
     * @returns the visible grades
     */
    getVisibleLabelGrades(supported: string[]): string[];
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     * @returns clone
     */
    clone(): TickGenerator;
    /**
     * Copy constructor
     * @param src Source to copy from
     * @param [deepCopy] deep copy
     * @returns this
     */
    protected copyConstructor(src: TickGenerator, deepCopy?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): TickGenerator.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: TickGenerator.Options): this;
    /**
     * Sets label value transformer (optional)
     * @param transformer label value transformer
     * @returns this
     */
    setLabelValueTransformer(transformer: ValueTransformer | ((modelValue: number) => number) | null): this;
    /**
     * Gets label value transformer (by default: 'undefined' - no transformation is applied to a value)
     *
     * @returns transformer label value transformer
     */
    getLabelValueTransformer(): ValueTransformer | ((modelValue: number) => number);
    /**
     * Sets all the properties pertaining to this tick
     * @param [properties] An object containing the properties to set
     * @param [tickGrade] Tick grade
     * @returns this
     */
    setTickOptions(properties: Record<string, TickGenerator.TickOptions>, tickGrade?: string): this;
    /**
     * invalidate Method
     * @returns method to invalidate this object
     */
    protected getInvalidateMethod(): IStyleListener.AttributeCallback;
    /**
     * Connects style.<br>
     * <br>
     * This convenience method subscribes a listener to given style for the specified type.<br>
     * And automatically un-subscribes listener if node is disposed to prevent memory leaks
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     */
    connectStyle(style: EventDispatcher, type: string, callback: IStyleListener.AttributeCallback): this;
    /**
     * Disconnect style<br>
     * <br>
     * This convenience method un-subscribes a listener to given style for the specified type.<br>
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     */
    disconnectStyle(style: EventDispatcher, type: string, callback: IStyleListener.AttributeCallback): this;
}
export declare namespace TickGenerator {
    /**
     * An object containing the properties to set
     */
    type Options = Partial<Record<Grades, TickOptions>> & {
        /**
         * An object containing tick styles for specified grades.
         */
        tickstyles?: LineStyle | Record<string, LineStyle | LineStyle.Options>;
        /**
         * An object containing tick visibility for specified grades
         */
        visibleticks?: Record<string, boolean>;
        /**
         * An object containing tick sizes for specified grades
         */
        ticksizes?: Record<string, number>;
        /**
         * An object containing label style for specified grades
         */
        labelstyles?: TextStyle | Record<string, TextStyle | TextStyle.Options>;
        /**
         * An object containing label visibility for specified grades
         */
        visiblelabels?: Record<string, boolean>;
        /**
         * An object containing label rotation angles for specified grades
         */
        labelangles?: Record<string, number>;
        /**
         * An object containing label anchor types see{@link @int/geotoolkit/util/AnchorType~AnchorType}
         */
        labelanchortypes?: Record<string, AnchorType | AnchorStyleHandler>;
        /**
         * transformer label value transformer
         */
        transformer?: ValueTransformer | ((modelValue: number) => number) | null;
        /**
         * tag user can specify info associated with current object
         */
        tag?: any;
        /**
         * formatlebeleventhandler
         */
        formatlabelhandler?: LabelFormatHandler;
    };
    /**
     * Callback for {@link @int/geotoolkit/axis/TickGenerator~TickGenerator} to build a label for a given model value
     */
    type LabelFormatHandler = (tickGenerator: TickGenerator, parent: IModel, orientation: Orientation | string, tickInfo: TickInfo, tickIndex: number, value: number) => string;
    /**
     * Callback for {@link @int/geotoolkit/axis/TickGenerator~TickGenerator} to get label anchor type
     */
    type AnchorStyleHandler = (grade: string, transformation: Transformation) => AnchorType;
    /**
     * properties
     */
    type OptionsOut = Record<Grades, TickOptions> & {
        /**
         * An object containing tick styles for specified grades.
         */
        tickstyles: Record<string, LineStyle | LineStyle.Options>;
        /**
         * An object containing tick visibility for specified grades
         */
        visibleticks: Record<string, boolean>;
        /**
         * An object containing tick sizes for specified grades
         */
        ticksizes: Record<string, number>;
        /**
         * An object containing label style for specified grades
         */
        labelstyles: Record<string, TextStyle | TextStyle.Options>;
        /**
         * An object containing label visibility for specified grades
         */
        visiblelabels: Record<string, boolean>;
        /**
         * An object containing label rotation angles for specified grades
         */
        labelangles: Record<string, number>;
        /**
         * An object containing label anchor types see{@link @int/geotoolkit/util/AnchorType~AnchorType}
         */
        labelanchortypes: Record<string, AnchorType | AnchorStyleHandler>;
        /**
         * transformer label value transformer
         */
        transformer: ValueTransformer | ((modelValue: number) => number) | null;
        /**
         * tag user can specify info associated with current object
         */
        tag: any;
        /**
         * formatlebeleventhandler
         */
        formatlabelhandler: LabelFormatHandler;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.Invalidate]: void;
    };
    /**
     * An object containing the properties to set
     */
    type TickOptions = {
        /**
         * object containing the properties to set LineStyle of tick. See {@link import("geotoolkit/attributes/LineStyle").LineStyle.setProperties} for details
         */
        tickstyle?: LineStyle | LineStyle.Options;
        /**
         * tick visibility
         */
        tickvisible?: boolean;
        /**
         * tick size
         */
        ticksize?: number;
        /**
         * object containing the properties to set TextStyle of label. See {@link import("geotoolkit/attributes/TextStyle").TextStyle.setProperties} for details
         */
        labelstyle?: TextStyle | TextStyle.Options;
        /**
         * label visibility
         */
        labelvisible?: boolean;
        /**
         * angle label rotation angle, in radians
         */
        labelangle?: number;
        /**
         * optional label anchor
         */
        labelanchor?: AnchorType | AnchorStyleHandler;
        /**
         * adjust position of the label anchor
         */
        adjustlabelanchor?: boolean;
    };
    type Grades = typeof GRADES[number];
}
export {};
