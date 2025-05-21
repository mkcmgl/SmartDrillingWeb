import type { Merge } from '@int/geotoolkit/base';
import { Range } from '@int/geotoolkit/util/Range';
import type { CapStyle } from '@int/geotoolkit/attributes/LineStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
import type { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
/**
 * An axis region is a segment within axis range which has to be differentiated from the rest of the axis. Examples are
 * the critical section of the pressure gauge or the red segment of the tachometer in your car.<br>
 * A region can be highlighted by a different fillstyle and/or by a different linestyle than other parts of the gauge.<br>
 * Multiple regions can be added. Not to be used as a value fill, because axes have a different mechanism for that purpose.
 */
export declare class Region implements IStyleListener {
    /**
     * @param [low] Lower bound or object with parameters
     * @param [high] Upper bound of the range
     * @param [lineStyle] Line style of the range
     * @param [fillStyle] Fill style of the range
     */
    constructor(low?: Region.Options | number, high?: number, lineStyle?: LineStyle, fillStyle?: FillStyle);
    /**
     * Returns class name for css reference
     */
    getCssClass(): string;
    /**
     * Sets visible flag for the range
     * @param visible Visibility flag
     */
    setVisible(visible: boolean): this;
    /**
     * Gets visibility status
     */
    getVisible(): boolean;
    /**
     * Gets lowest limit of the region
     */
    getLow(): number;
    /**
     * Gets highest limit of the region
     */
    getHigh(): number;
    /**
     * Returns the current name of the region
     */
    getName(): string;
    /**
     * Sets the name of the region
     * @param name New name for the region
     * @returns this
     */
    setName(name: string): this;
    /**
     * Sets lowest limit of the region
     * @param low New lower bound
     */
    setLow(low: number): this;
    /**
     * Sets highest limit of the region
     * @param high New upper bound
     */
    setHigh(high: number): this;
    /**
     * Returns fill style set for the region
     */
    getFillStyle(): FillStyle | null;
    /**
     * Sets fill style set for the region
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Returns line style set for the region
     */
    getLineStyle(): LineStyle | null;
    /**
     * Sets line style set for the region
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     */
    setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Sets line style set for the region
     * @param color New color of the line
     */
    setLineColor(color: RgbaColor | string): this;
    /**
     * Sets range that defines this region
     */
    getRange(): Range | null;
    /**
     * Sets range that defines this region
     * @param range New range with min and max values
     */
    setRange(range: Range): this;
    /**
     * Returns true if the region is static and visible at all times
     */
    isStatic(): boolean;
    /**
     * Sets a flag defining if the region should be static and visible at all times
     * @param isStatic True
     */
    setStatic(isStatic: boolean): this;
    /**
     * Returns properties pertaining to this object
     * @returns properties
     */
    getProperties(): Region.OptionsOut;
    /**
     * Sets properties pertaining to this object
     * @param props properties
     */
    setProperties(props?: Region.Options): this;
    static getClassName(): string;
    getClassName(): string;
    connectStyle(style: EventDispatcher, type: string, callback: IStyleListener.AttributeCallback): this;
    disconnectStyle(style: EventDispatcher, type: string, callback: IStyleListener.AttributeCallback): this;
}
export declare namespace Region {
    /**
     * object with parameters
     */
    type Options = {
        /**
         * Maximum value Lower bound of the range
         */
        low?: number;
        /**
         * Upper bound of the range
         */
        high?: number;
        /**
         * Line style of the range
         */
        linestyle?: LineStyle.Type;
        /**
         * Fill style of the range
         */
        fillstyle?: FillStyle.Type;
        /**
         * Defines if the range is visible and should be rendered
         */
        visible?: boolean;
        /**
         * can be 'butt', 'square', or 'round'
         */
        linecap?: CapStyle | string;
        /**
         * Defines if the range is static
         */
        static?: boolean;
        /**
         * Name of the region
         */
        name?: string;
    };
    type OptionsOut = Merge<Required<Options>, {
        /**
         * Line style of the range
         */
        linestyle?: LineStyle;
        /**
         * Fill style of the range
         */
        fillstyle?: FillStyle;
    }>;
}
