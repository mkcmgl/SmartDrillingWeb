import { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import { LogPointSet } from '@int/geotoolkit/welllog/LogPointSet';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { Range } from '@int/geotoolkit/util/Range';
import { Rect } from '@int/geotoolkit/util/Rect';
import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
/**
 * Creates a tick curve. Data is passed in LogData.
 *
 * @example
 * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
 * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
 * // The three default categories
 * [
 *   {
 *       'key': 'Major',
 *       'length': 15,
 *       'linestyle': new LineStyle({'color':'red', 'width': 1}),
 *       'textstyle': new TextStyle({'color':'red', 'font': 'normal 11px Arial'})
 *   },
 *   {
 *       'key': 'Medium',
 *       'length': 10,
 *       'linestyle': new LineStyle({'color':'green', 'width': 1}),
 *       'textstyle': new TextStyle({'color':'green', 'font': 'normal 11px Arial'})
 *   },
 *   {
 *       'key': 'Minor',
 *       'length': 5,
 *       'linestyle': new LineStyle({'color':'blue', 'width': 1}),
 *       'textstyle': new TextStyle({'color':'blue', 'font': 'normal 11px Arial'})
 *   }
 * ];
 * // The default category callback
 * function(index, depth, value){
 *   const onethird = (this.getDataSource().getMaxValue() - this.getDataSource().getMinValue())/3;
 *   if(value < onethird)
 *       return 'Minor';
 *   else if(value < onethird * 2)
 *       return 'Medium';
 *   else if(value <= onethird * 3)
 *       return 'Major';
 * };
 */
export declare class TickCurve extends LogPointSet {
    /**
     * Constructor
     * @param [params] data source to be displayed or properties object
     */
    constructor(params?: TickCurve.Options);
    /**
     * Constructor
     * @param [data] data source to be displayed
     * @param [autoUpdate] autoUpdate automatic update from data
     * @param [categories] An array of objects which contain the different categories
     * @param [categoryCallback] A function which accepts parameters: index, depth and value
     * and returns a string, which corresponds to a category key
     */
    constructor(data?: LogAbstractData, autoUpdate?: boolean, categories?: TickCurve.Category[], categoryCallback?: TickCurve.CategoryCallback);
    /**
     * Sets data source to be displayed.
     *
     * @param data data to display
     * @param [autoUpdate] automatic update from data source
     * @returns this
     * @throws {Error} if data is null
     */
    setData(data: LogAbstractData, autoUpdate?: boolean): this;
    /**
     * Synchronize state from data
     * @param [rect] optional area to invalidate track
     * @returns this
     */
    updateFromData(rect?: Rect): this;
    /**
     * Returns WellLog Data
     */
    getDataSource(): LogAbstractData;
    /**
     * Returns original data value limits
     */
    getValueDataLimits(): Range;
    /**
     * Set category callback, sets the callback function to determine the category
     * of an (index, depth, value) combination
     * @param value A function which accepts parameters: index, depth and value
     * and returns a string, which corresponds to a category key
     * @returns this
     */
    setCategoryCallback(value: TickCurve.CategoryCallback): this;
    /**
     * Sets  categories
     * @param [categories] An array of objects which contain the different categories
     * @returns this
     */
    setCategories(categories?: TickCurve.CategoryType[]): this;
    /**
     * Get category by key
     * @param key unique key for category
     */
    getCategory(key: string): TickCurve.Category | null;
    /**
     * Removes a category by key
     * @param key category style like major,medium,minor.
     * @returns this
     */
    removeCategory(key: string): this;
    /**
     * Adds a new category or replaces an existing one with the same key
     * @param key unique key for category
     * @param length line length
     * @param linestyle line style
     * @param textstyle text style for the tick
     * @returns this
     */
    addCategory(key: string, length: number, linestyle: LineStyle.Type, textstyle: TextStyle.Type): this;
    /**
     * Gets the array of categories
     */
    getCategories(): TickCurve.Category[];
    /**
     * Returns display mode
     * @returns any combination of values: 'line', 'value' or an empty array
     */
    getDisplayMode(): string[];
    /**
     * Sets display mode
     * @param mode an array with a combination of values: "line", "value"; or an empty array.
     * @returns this
     */
    setDisplayMode(mode: string[]): this;
    /**
     * Helper method to setup line visibility
     *
     * @param enable set visibility of line
     * @returns this
     */
    setVisibleLine(enable: boolean): this;
    /**
     * Returns true if line is visible (convenience method)
     */
    isVisibleLine(): boolean;
    /**
     * Helper method to set up values visibility.
     *
     * @param enable sets up values visibility
     * @returns this
     */
    setVisibleValue(enable: boolean): this;
    /**
     * Returns true if values are visible (convenience method)
     */
    isVisibleValue(): boolean;
    /**
     * Enables or disables adjusting of anchor for first and last text value
     * @param value Enables or disables adjusting of anchor for first and last text value
     * @returns this
     */
    setAdjustTopAndBottomTextAnchor(value: boolean): this;
    /**
     * Gets flag for adjusting anchor of first and last text
     */
    isAdjustTopAndBottomTextAnchor(): boolean;
    /**
     * Set text margin/distance from line in pixels
     * @param value in device space(pixels)
     * @returns this
     */
    setTextMargin(value: number): this;
    /**
     * Gets the text margin
     * @returns text margin
     */
    getTextMargin(): number;
    /**
     * Helper method to set direction of tick lines
     * @param enable set direction of tick lines
     * @returns this
     */
    setTicksReversed(enable: boolean): this;
    /**
     * Returns true if tick direction is reversed
     */
    isTicksReversed(): boolean;
    /**
     * Sets the position of the reference line for the ticks
     * @param val Number between 0 and 1
     * @returns this
     */
    setReferenceLinePosition(val: number): this;
    /**
     * Returns the reference line position
     */
    getReferenceLinePosition(): number;
    /**
     * Sets the position of the text in relation to the ticks
     * 'true' sets the position near the start of the tick line
     * 'false' sets the position near the end of the tick line
     * @param val sets position of the text in relation to the tick
     * @returns this
     */
    setTextOpposite(val: boolean): this;
    /**
     * Returns true if text if positioned at the start of the tick
     */
    isTextOpposite(): boolean;
    render(context: RenderingContext): void;
    /**
     * Sets text anchor type, only the 'top', 'bottom' and 'center' (vertical)
     * component of the anchor is used
     *
     * @param anchorType position to display the tick
     * @throws {Error} if anchorType value is not valid
     */
    setTextAnchorType(anchorType: AnchorType): this;
    /**
     * Gets text anchor type
     *
     * @returns type anchor type
     */
    getTextAnchorType(): AnchorType;
    /**
     * Sets formatter to be used to format values
     *
     * @param format number formatter (see {@link @int/geotoolkit/util/DecimalFormat~DecimalFormat} for more info)
     * @returns this
     */
    setValueFormat(format: NumberFormat | NumberFormat.Options): this;
    /**
     * Returns formatter to format values
     */
    getValueFormat(): NumberFormat;
    /**
     * Sets text decimation step
     *
     * @param step text decimation step or level
     */
    setTextDecimationStep(step: number): this;
    /**
     * Returns text decimation step
     */
    getTextDecimationStep(): number;
    clone(): TickCurve;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): TickCurve.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: TickCurve.Options): this;
}
export declare namespace TickCurve {
    /**
     * data source to be displayed or properties object
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * data source to be displayed
         */
        data?: LogAbstractData;
        /**
         * display mode
         */
        displaymode?: string[];
        /**
         * text decimation step or level
         */
        textdecimationstep?: number;
        /**
         * sets position of the text in relation to the tick
         */
        textopposite?: boolean;
        /**
         * set direction of tick lines
         */
        ticksreversed?: boolean;
        /**
         * in device space(pixels)
         */
        textmargin?: number;
        /**
         * an object containing categories
         */
        categories?: CategoryType[];
        /**
         * format options
         */
        formatoptions?: NumberFormat | NumberFormat.Options;
    };
    /**
     * Defines category
     */
    type Category = {
        /**
         * key of the category
         */
        key?: string;
        /**
         * length of the category
         */
        length?: number;
        /**
         * linestyle for the tick
         */
        linestyle?: LineStyle;
        /**
         * textstyle for the tick
         */
        textstyle?: TextStyle;
    };
    /**
     * Defines category callback
     */
    type CategoryCallback = (index: number, depth: number, value: number) => string | null;
    /**
     * Defines category type
     */
    type CategoryType = {
        /**
         * key of the category
         */
        key?: string;
        /**
         * length of the category
         */
        length?: number;
        /**
         * linestyle for the tick
         */
        linestyle?: LineStyle.Type;
        /**
         * textstyle for the tick
         */
        textstyle?: TextStyle.Type;
    };
    /**
     * properties object
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * an array with a combination of values: "line", "value"; or an empty array.
         */
        displaymode?: string[];
        /**
         * text decimation step or level
         */
        textdecimationstep?: number;
        /**
         * sets position of the text in relation to the tick
         */
        textopposite?: boolean;
        /**
         * set direction of tick lines
         */
        ticksreversed?: boolean;
        /**
         * in device space(pixels)
         */
        textmargin?: number;
        /**
         * an object containing categories
         */
        categories?: Category[];
        /**
         * format options
         */
        formatoptions?: NumberFormat;
    };
}
