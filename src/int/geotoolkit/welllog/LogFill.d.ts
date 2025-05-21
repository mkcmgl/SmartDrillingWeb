/**
 * @module geotoolkit/welllog/LogFill
 */
import { LogReferenceLine } from '@int/geotoolkit/welllog/LogReferenceLine';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LogPointSet } from '@int/geotoolkit/welllog/LogPointSet';
import { LogCurve } from '@int/geotoolkit/welllog/LogCurve';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
/**
 * Enum of FillTypes
 * @enum
 * @readonly
 */
export declare enum FillType {
    /**
     * Single Fill
     */
    Single = "single",
    /**
     * Dual Fill
     */
    Dual = "dual",
    /**
     * Positive Fill
     */
    Positive = "positive",
    /**
     * Negative Fill
     */
    Negative = "negative",
    /**
     * Positive And Negative Fill
     */
    PositiveAndNegative = "positiveandnegative",
    /**
     * Left Fill
     */
    Left = "left",
    /**
     * Right Fill
     */
    Right = "right",
    /**
     * Left And Right Fill
     */
    LeftAndRight = "leftandright"
}
/**
 * LogFill class implements a fill between two LogPointSet.<br>
 * <br>
 * Those LogPointSet are generally either LogCurves or LogReferenceLine.<br>
 * The LogFill accepts 3 fillstyles, 'default', 'left' and 'right'.<br>
 * FillType can be one of the following types.<br>
 * 1) Left <br>
 * 2) Right <br>
 * 3) Left and Right(Dual left and right with different fill styles or Single which only has one fill style) please refer to the example below.
 * The given FillType will determine which fillstyles should be applied to each area in between given LogPointSet.<br>
 * If no FillType is specified the internal logic will assign the fillType based on the fillStyle.
 * It is recommended to pass both curve1 and curve2 parameters (even if the internal logic will try to fill missing parameters).<br>
 * <br>
 * @example
 * //Single Fill, one fill style is specified
 * import {LogFill} from '@int/geotoolkit/welllog/LogFill';
 * import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
 * const fill = new LogFill({
 *  'curve1': orangeCurve,
 *  'curve2': redCurve,
 *  'fillstyle': new FillStyle(...)
 * });
 * @example
 * import {FillType} from '@int/geotoolkit/welllog/LogFill';
 * //Dual Fill will use different fillstyles for left and right sides of orangeCurve
 * const fill = new LogFill({
 *  'curve1': orangeCurve,
 *  'curve2': ..., //if not specified, will be left (default case)
 *  'rightfillstyle': new FillStyle(...),
 *  'leftfillstyle': new FillStyle(...),
 *  'filltype': FillType.Dual
 * });
 */
export declare class LogFill extends LogPointSet {
    /**
     * Constructor
     * @param [options] left points set or a JSON
     * @param [curve2] right point set
     * @param [fillstyle] fillstyle
     * @param [leftfillstyle] fillstyle for left part
     * @param [rightfillstyle] fillstyle for right part
     * @param [filltype] filltype
     */
    constructor(options?: LogFill.Options | LogCurve | LogReferenceLine | number, curve2?: LogCurve | LogReferenceLine | number, fillstyle?: FillStyle.Type, leftfillstyle?: FillStyle.Type, rightfillstyle?: FillStyle.Type, filltype?: FillType | string);
    clone(): LogFill;
    protected copyConstructor(src: LogFill, deepCopy?: boolean): this;
    /**
     * manipulator for filltype aliases
     * @param filltype filltype
     */
    static getShortFillType(filltype: FillType | string): FillType;
    /**
     * Sets point set to fill from
     *
     * @param curve a point set or number to fill from
     * @returns this
     */
    setCurve1(curve: LogCurve | LogReferenceLine | number): this;
    /**
     * Returns a point set to fill from
     */
    getCurve1(): LogCurve | LogReferenceLine;
    /**
     * Sets point set to fill to
     * @param curve a point set or number to fill to
     * @returns this
     */
    setCurve2(curve: LogCurve | LogReferenceLine | number): this;
    /**
     * Returns a point set to fill to
     */
    getCurve2(): LogCurve | LogReferenceLine;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Return fill style
     */
    getFillStyle(): FillStyle | null;
    /**
     * Sets negative fill style
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     */
    setNegativeFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Sets right (negative) fill style
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     */
    setRightFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Returns fill style to be used to fill negative areas
     */
    getNegativeFillStyle(): FillStyle;
    /**
     * Returns fill style to be used to fill right (negative) areas
     */
    getRightFillStyle(): FillStyle;
    /**
     * Sets positive fill style
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     */
    setPositiveFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Sets left (positive) fill style
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     */
    setLeftFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Returns fill style to be used to fill positive areas
     */
    getPositiveFillStyle(): FillStyle;
    /**
     * Returns fill style to be used to fill left (positive) areas
     */
    getLeftFillStyle(): FillStyle;
    /**
     * return meaning data limits
     * @param [fullLimits] default value is false
     */
    getDataLimits(fullLimits?: boolean): Rect | null;
    /**
     * Gets bounds
     */
    getBounds(): Rect | null;
    /**
     * Gets the fill type
     */
    getFillType(): FillType;
    /**
     * Sets the fill type
     * @param fillType enum of filltype
     */
    setFillType(fillType: FillType | string): this;
    render(context: RenderingContext): void;
    /**
     * Render internal
     * @param localContext local context
     * @returns this
     */
    protected renderInternal(localContext: RenderingContext): this;
    /**
     * Render depth range
     * @param context context
     * @param fromDepth from
     * @param toDepth to
     */
    protected renderDepthRange(context: RenderingContext, fromDepth: number, toDepth: number, clipByDepth?: boolean): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogFill.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogFill.Options): this;
}
export declare namespace LogFill {
    /**
     * left points set or a JSON
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * left point set
         */
        curve1?: LogCurve | LogReferenceLine | number;
        /**
         * right point set
         */
        curve2?: LogCurve | LogReferenceLine | number;
        /**
         * fillstyle
         */
        fillstyle?: FillStyle.Type;
        /**
         * fillstyle for left part
         */
        leftfillstyle?: FillStyle.Type;
        /**
         * fillstyle for right part
         */
        rightfillstyle?: FillStyle.Type;
        /**
         * fill style to be used to fill negative areas
         */
        negativefillstyle?: FillStyle.Type;
        /**
         * fill style to be used to positive areas
         */
        positivefillstyle?: FillStyle.Type;
        /**
         * filltype
         */
        filltype?: FillType;
    };
    /**
     * properties object
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * a curve to fill from
         */
        curve1: LogPointSet;
        /**
         * a point set to fill to
         */
        curve2: LogPointSet;
        /**
         * fillstyle
         */
        fillstyle: FillStyle;
        /**
         * fill style to be used to fill negative areas
         */
        negativefillstyle: FillStyle;
        /**
         * fill style to be used to positive areas
         */
        positivefillstyle: FillStyle;
        /**
         * enum of filltype
         */
        filltype: FillType | string;
    };
}
