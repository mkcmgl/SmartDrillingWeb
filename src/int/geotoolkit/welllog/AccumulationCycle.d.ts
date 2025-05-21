import { AccumulationCycleData } from '@int/geotoolkit/welllog/data/AccumulationCycleData';
import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Enum of FillTypes
 * @enum
 * @readonly
 */
export declare enum FillType {
    /**
     * None
     */
    None = "none",
    /**
     * Dual Fill
     */
    Dual = "dual",
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
 * Define visual to display accumulation cycles
 */
export declare class AccumulationCycle extends LogAbstractVisual {
    /**
     * @param [options] data source to be displayed or properties object
     */
    constructor(options?: AccumulationCycle.Options | AccumulationCycleData);
    clone(): AccumulationCycle;
    protected copyConstructor(src: AccumulationCycle, deepCopy: boolean): this;
    /**
     * Sets the fill type
     * @param fillType
     */
    setFillType(fillType: FillType): this;
    /**
     * Gets the fill type
     */
    getFillType(): FillType;
    /**
     * Sets left fill style
     * @param fillStyle a new shape left fill style
     * @param [merge] true if you want to merge fillstyle with existing attribute, false by default
     */
    setLeftFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Returns fill style to be used to fill left are
     */
    getLeftFillStyle(): FillStyle;
    /**
     * Sets right fill style
     * @param fillStyle a new shape right fill style
     * @param [merge] true if you want to merge fillstyle with existing attribute, false by default
     */
    setRightFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Returns fill style to be used to fill right areas
     */
    getRightFillStyle(): FillStyle;
    render(inputContext: RenderingContext): void;
    /**
     * Returns Data
     */
    getDataSource(): AccumulationCycleData;
    /**
     * Sets data source to be displayed.
     *
     * @param data data to display
     * @returns this
     */
    setData(data: AccumulationCycleData): this;
    /**
     * Synchronize state from data
     * @param [rect] optional area to invalidate track
     * @returns this
     */
    updateFromData(rect?: Rect): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties
     */
    getProperties(): AccumulationCycle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: AccumulationCycle.Options): this;
}
export declare namespace AccumulationCycle {
    /**
     * data source to be displayed or properties object
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * data source to be displayed
         */
        data?: AccumulationCycleData;
        /**
         * fill type
         */
        filltype?: FillType;
        /**
         * left fill style
         */
        leftfillstyle?: FillStyle.Type;
        /**
         * right fill style
         */
        rightfillstyle?: FillStyle.Type;
    };
    /**
     * properties
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * fill type
         */
        filltype?: FillType;
        /**
         * left fill style
         */
        leftfillstyle?: FillStyle;
        /**
         * right fill style
         */
        rightfillstyle?: FillStyle;
    };
}
