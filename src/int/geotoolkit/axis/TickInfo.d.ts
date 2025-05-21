import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { AxisMappingDimension } from '@int/geotoolkit/axis/AxisMappingDimension';
/**
 * Enum of axis tick positions
 * @enum
 * @readonly
 */
export declare enum TickPosition {
    /**
     * Ticks and labels are on the left side.
     */
    Left = "left",
    /**
     * Ticks and labels are on the top side.
     */
    Top = "top",
    /**
     * Ticks and labels are on the right side.
     */
    Right = "right",
    /**
     * Ticks and labels are on the bottom side.
     */
    Bottom = "bottom",
    /**
     * Ticks are on the left and right side.
     */
    LeftAndRight = "leftandright",
    /**
     * Ticks are on the top and bottom side.
     */
    TopAndBottom = "topandbottom",
    /**
     * Ticks is rendering between the axis or grid border.
     */
    Between = "between",
    /**
     * Ticks and labels are at the center.
     */
    Middle = "middle"
}
/**
 * Enum of label positions
 * @enum
 * @readonly
 */
export declare enum LabelPosition {
    /**
     * Labels are centered in the axis (default)
     */
    Center = "center",
    /**
     * Labels are left-aligned and on the left side of the axis
     */
    Left = "left",
    /**
     * Labels are top-aligned and on the top side of the axis
     */
    Top = "top",
    /**
     * Labels are right-aligned and on the right side of the axis
     */
    Right = "right",
    /**
     * Labels are bottom-aligned and on the bottom side of the axis
     */
    Bottom = "bottom"
}
/**
 * Define information about tick, which is used in tick generator
 */
export declare class TickInfo {
    /**
     * @param [options] options
     */
    constructor(options?: TickInfo.Options);
    /**
     * @param [tickType] tick type like major, minor, edge
     * @param [tickPosition] Enum of axis tick positions
     * @param [tickSize] size of the tick
     * @param [lineStyle] line style
     * @param [textStyle] text style
     */
    constructor(tickType?: string, tickPosition?: TickPosition, tickSize?: number, lineStyle?: LineStyle, textStyle?: TextStyle);
    /**
     * Set model bounds
     * @param modelBounds model bounds
     * @returns this
     */
    setModelBounds(modelBounds: Rect): this;
    /**
     * Set visible model bounds
     * @param modelBounds visible model bounds
     * @returns this
     */
    setVisibleModelBounds(modelBounds: Rect): this;
    /**
     * Get model bounds
     */
    getModelBounds(): Rect;
    /**
     * Get visible model bounds
     */
    getVisibleModelBounds(): Rect;
    /**
     * Set device bounds
     * @param deviceBounds bounds of the device
     * @returns this
     */
    setDeviceBounds(deviceBounds: Rect): this;
    /**
     * Set visible device bounds
     * @param deviceBounds visible device bounds
     * @returns this
     */
    setVisibleDeviceBounds(deviceBounds: Rect): this;
    /**
     * Get device bounds
     */
    getDeviceBounds(): Rect;
    /**
     * Get visible device bounds
     */
    getVisibleDeviceBounds(): Rect;
    /**
     * Set context transform
     * @param transformation transformation from model space to device space
     * @returns this
     */
    setContextTransformation(transformation: Transformation): this;
    /**
     * Get context transform
     */
    getContextTransformation(): Transformation;
    /**
     * Set tick end
     * @param end tick end
     * @returns this
     */
    setTickEnd(end: number): this;
    /**
     * Get tick end
     */
    getTickEnd(): number;
    /**
     * Set tick origin
     * @param origin tick origin
     * @returns this
     */
    setTickOrigin(origin: number): this;
    /**
     * Get tick origin
     */
    getTickOrigin(): number;
    /**
     * Set anchor type
     * @param type anchor position of the label
     * @returns this
     */
    setAnchorType(type: AnchorType): this;
    /**
     * Get anchor type
     */
    getAnchorType(): AnchorType;
    /**
     * Return tick grade as string
     * @returns type
     */
    getGrade(): string;
    /**
     * Sets tick grade
     * @param grade a tick type
     * @returns this
     */
    setGrade(grade: string): this;
    /**
     * Return line style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets line style
     * @param lineStyle line style
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle): this;
    /**
     * Return text style
     * @returns a text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text style
     * @param textStyle text style
     * @returns this
     */
    setTextStyle(textStyle: TextStyle): this;
    /**
     * Return tick position
     * @returns a tick position
     */
    getTickPosition(): TickPosition;
    /**
     * Sets tick position
     * @param tickPosition tick position
     * @returns this
     */
    setTickPosition(tickPosition: TickPosition): this;
    /**
     * Return rotation angle
     * @returns the angle of rotation
     */
    getRotationAngle(): number;
    /**
     * Sets rotation angle
     * @param rotationAngle rotation angle
     * @returns this
     */
    setRotationAngle(rotationAngle: number): this;
    /**
     * Return tick size
     * @returns a tick size
     */
    getTickSize(): number;
    /**
     * Return axis dimension
     */
    getAxisDimension(): AxisMappingDimension;
    /**
     * Sets axis dimension
     * @param dimension axis dimension
     * @returns this
     */
    setAxisDimension(dimension: AxisMappingDimension): this;
    /**
     * Set tick size
     *
     * @param tickSize a tick size
     * @returns this
     */
    setTickSize(tickSize: number): this;
    /**
     * Cancel
     */
    cancel(): void;
    /**
     * Repeat
     */
    repeat(): void;
    /**
     * Is canceled
     */
    isCanceled(): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): TickInfo.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: TickInfo.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace TickInfo {
    /**
     * tick type like major, minor, edge
     */
    type Options = {
        /**
         * tick type like major, minor, edge
         */
        ticktype?: string;
        /**
         * tick position
         */
        tickposition?: TickPosition;
        /**
         * a tick size
         */
        ticksize?: number;
        /**
         * line style
         */
        linestyle?: LineStyle;
        /**
         * text style
         */
        textstyle?: TextStyle;
        /**
         * anchor position of the label
         */
        anchortype?: AnchorType;
        /**
         * rotation angle
         */
        rotationangle?: number;
        /**
         * visible model bounds
         */
        visiblemodelbounds?: Rect;
        /**
         * model bounds
         */
        modelbounds?: Rect;
        /**
         * visible device bounds
         */
        devicevisiblebounds?: Rect;
        /**
         * bounds of the device
         */
        devicebounds?: Rect;
        /**
         * tick origin
         */
        tickorigin?: number;
        /**
         * tick end
         */
        tickend?: number;
        /**
         * transformation from model space to device space
         */
        contexttransformation?: Transformation;
        /**
         * cancel flag
         */
        cancel?: boolean;
    };
    /**
     * properties
     */
    type OptionsOut = {
        /**
         * tick type like major, minor, edge
         */
        ticktype: string;
        /**
         * tick position
         */
        tickposition: TickPosition;
        /**
         * a tick size
         */
        ticksize: number;
        /**
         * line style
         */
        linestyle: LineStyle;
        /**
         * text style
         */
        textstyle: TextStyle;
        /**
         * anchor position of the label
         */
        anchortype: AnchorType;
        /**
         * rotation angle
         */
        rotationangle: number;
        /**
         * visible model bounds
         */
        visiblemodelbounds: Rect;
        /**
         * model bounds
         */
        modelbounds: Rect;
        /**
         * visible device bounds
         */
        devicevisiblebounds: Rect;
        /**
         * bounds of the device
         */
        devicebounds: Rect;
        /**
         * tick origin
         */
        tickorigin: number;
        /**
         * tick end
         */
        tickend: number;
        /**
         * transformation from model space to device space
         */
        contexttransformation: Transformation;
        /**
         * cancel flag
         */
        cancel: boolean;
    };
}
