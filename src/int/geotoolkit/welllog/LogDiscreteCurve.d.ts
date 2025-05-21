import { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { InterpolationType } from '@int/geotoolkit/data/DataStepInterpolation';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { LogPointSet } from '@int/geotoolkit/welllog/LogPointSet';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { DiscreteGradientColorProvider } from '@int/geotoolkit/util/DiscreteGradientColorProvider';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
/**
 * fill type
 * @enum
 * @readonly
 */
export declare enum FillType {
    /**
     * color provider
     */
    ColorProvider = "ColorProvider",
    /**
     * discrete
     */
    Discrete = "Discrete",
    /**
     * continuous
     */
    Continuous = "Continuous"
}
/**
 * Creates the standard representation of a discrete well log curve. Data is passed in a LogAbstractData.
 */
export declare class LogDiscreteCurve extends LogPointSet {
    /**
     * Constructor
     * @param [options] properties object
     */
    constructor(options?: LogDiscreteCurve.Options);
    /**
     * Constructor
     * @param [data] data source to be displayed
     * @param [autoUpdate] automatic update from data
     */
    constructor(data?: LogAbstractData, autoUpdate?: boolean);
    /**
     * Sets data source to be displayed
     *
     * @param data data to display
     * @param [autoUpdate] automatic update from data source
     * @returns this
     */
    setData(data: LogAbstractData, autoUpdate?: boolean): this;
    /**
     * Sets fill mode
     *
     * @param type data mode or fill type
     * @param [mappingFunc] a mapping function to adjust native values
     * @returns this
     */
    setFillType(type: FillType, mappingFunc?: (src: number[]) => number[]): this;
    /**
     * Returns fill type
     */
    getFillType(): FillType;
    /**
     * Returns unique categories
     */
    getCategories(): number[];
    /**
     * Sets fill info.  Each code has an associated pair of values and a fill style
     *
     * @param fillInfo An object contains a gradient color provider with type ColorProvider, or fill information for other types.
     * @returns this
     * @example
     * // options ['ranges'], ['names'] and ['fillstyles'] describes header content and the way we fill discrete curve.
     * // It doesn't matter how many values or sections data source has, user can specify ranges and it will be in the header even if datasource does not have such values.
     * const discreteCurve = new LogDiscreteCurve(datasource)
     * .setFillInfo({
     *   'type': FillType.Continuous,
     *   'ranges': [
     *       [1, 3],
     *       [3, 5],
     *       [5, 7],
     *       [7, 8],
     *       [12, 14] //all values in data source is less than 8
     *   ],
     *   'names': ['Chert', 'Limestone', 'Shale', 'Salt', '12-14'],
     *   'fillstyles': [
     *       new FillStyle(Helpers.getColor('green'), patterns.queryPattern('chert'), Helpers.getColor('gray')),
     *       new FillStyle(Helpers.getColor('yellow'), patterns.queryPattern('lime'), Helpers.getColor('gray')),
     *       new FillStyle(Helpers.getColor('orange'), patterns.queryPattern('shale'), Helpers.getColor('gray')),
     *       new FillStyle(Helpers.getColor('blue'), patterns.queryPattern('salt'), Helpers.getColor('gray')),
     *       new FillStyle('red') //however we see this red square in header because we specify it
     *   ]
     * });
     */
    setFillInfo(fillInfo: LogDiscreteCurve.FillInfo): this;
    /**
     * Returns code info
     *
     * @returns codeInfo An object contains an array of Number codes, an array of a two-member array of values, and an array of FillStyles
     */
    getFillInfo(): LogDiscreteCurve.FillInfoOut;
    /**
     * Returns welllog data
     */
    getDataSource(): LogAbstractData;
    /**
     * Returns minimum value
     */
    getMinValue(): number | null;
    /**
     * Returns maximum value
     */
    getMaxValue(): number | null;
    /**
     * Sets line visibility
     *
     * @param visible line visibility
     * @returns this
     */
    setVisibleSeparateLine(visible: boolean): this;
    /**
     * Returns line visibility
     */
    isVisibleSeparateLine(): boolean;
    /**
     * Sets text visibility
     *
     * @param visible sets the visibility of the text along the track for each block on or off
     * @returns this
     */
    setVisibleText(visible: boolean): this;
    /**
     * Returns text visibility
     */
    isVisibleText(): boolean;
    /**
     * Sets display mode
     * @param mode an array with a combination of values: "line" and "text"
     * @returns this
     */
    setDisplayMode(mode: string[]): this;
    /**
     * Returns display mode
     * @returns any combination of values: "line" and "text", or an empty array
     */
    getDisplayMode(): string[];
    /**
     * Sets text style
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * Returns text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text position
     *
     * @param position position of the text
     * @returns this
     */
    setTextPosition(position: AnchorType): this;
    /**
     * Returns text position
     */
    getTextPosition(): AnchorType;
    /** */
    getModelLimits(): Rect | null;
    /**
     * Returns text orientation
     */
    getTextOrientation(): Orientation;
    /**
     * Sets text orientation
     *
     * @param orientation orientation of the text
     * @returns this
     * @example
     * // To set text orientation to vertical
     * import {Orientation} from '@int/geotoolkit/util/Orientation';
     * discreteCurve.setTextOrientation(Orientation.Vertical)
     */
    setTextOrientation(orientation: Orientation): this;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogDiscreteCurve.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogDiscreteCurve.Options): this;
}
export declare namespace LogDiscreteCurve {
    /**
     * data source to be displayed or properties object
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * an array with a combination of values: "line" and "text"
         */
        displaymode?: string[];
        /**
         * fill info see {@link import("geotoolkit/welllog/LogDiscreteCurve").LogDiscreteCurve.setFillInfo}
         */
        fillinfo?: FillInfo;
        /**
         * the type of the filling
         */
        filltype?: FillType;
        /**
         * the text style
         */
        textstyle?: TextStyle.Type;
        /**
         * position of the text
         */
        textposition?: AnchorType;
        /**
         * the type of the interpolation
         */
        interpolationtype?: InterpolationType;
        /**
         * orientation of the text
         */
        textorientation?: Orientation;
        /**
         * data source to be displayed
         */
        data?: LogAbstractData;
    };
    /**
     * An object contains a gradient color provider with type ColorProvider, or fill information for other types.
     */
    type FillInfo = {
        /**
         * the Fill type
         */
        type: FillType;
        /**
         * code value for each section
         */
        codes?: number[];
        /**
         * range to color or fill
         */
        ranges?: number[][];
        /**
         * fill name for the section
         */
        names?: string[];
        /**
         * the fill style
         */
        fillstyles?: FillStyle[];
        /**
         * the color provider
         */
        colorprovider?: DiscreteGradientColorProvider;
        /**
         * the default fill style for uncovered values
         */
        defaultfillstyle?: FillStyle.Type;
        /**
         * the text styles for each section
         */
        textstyles?: TextStyle.Type[];
    };
    type FillInfoOut = {
        /**
         * the Fill type
         */
        type: FillType;
        /**
         * code value for each section
         */
        codes: number[];
        /**
         * range to color or fill
         */
        ranges: number[][];
        /**
         * fill name for the section
         */
        names?: string[];
        /**
         * the fill style
         */
        fillstyles?: FillStyle[];
        /**
         * the color provider
         */
        colorprovider?: DiscreteGradientColorProvider;
        /**
         * the default fill style for uncovered values
         */
        defaultfillstyle?: FillStyle;
        /**
         * the text styles for each section
         */
        textstyles?: TextStyle[];
    };
    /**
     * properties object
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * an array with a combination of values: "line" and "text"
         */
        displaymode: string[];
        /**
         * fill info
         */
        fillinfo: FillInfoOut;
        /**
         * the type of the filling
         */
        filltype: FillType;
        /**
         * the text style
         */
        textstyle: TextStyle;
        /**
         * position of the text
         */
        textposition: AnchorType;
        /**
         * the type of the interpolation
         */
        interpolationtype: InterpolationType;
        /**
         * orientation of the text
         */
        textorientation: Orientation;
    };
}
