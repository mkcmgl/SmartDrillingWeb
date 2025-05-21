import { Rect } from '@int/geotoolkit/util/Rect';
import { Point } from '@int/geotoolkit/util/Point';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * An enum defining symbol position
 *
 * @enum
 * @readonly
 */
export declare enum SymbolPosition {
    /**
     * None, default
     */
    None = "none",
    /**
     * Left, each symbol is aligned to the left track edge
     */
    Left = "left",
    /**
     * Right, each symbol is aligned to the right track edge
     */
    Right = "right",
    /**
     * Even-Odd, each next symbol has opposite position, starting from the left
     */
    EvenOdd = "evenodd"
}
/**
 * An enum defining fill mode
 *
 * @enum
 * @readonly
 */
export declare enum FillMode {
    /**
     * All
     */
    All = "All",
    /**
     * TextOnly
     */
    TextOnly = "TextOnly",
    /**
     * Callout
     */
    Callout = "Callout",
    /**
     * Symbols only
     */
    SymbolOnly = "SymbolOnly"
}
/**
 * An enum defining vertical text alignment
 *
 * @enum
 * @readonly
 */
export declare enum TextAlign {
    /**
     * Top
     */
    Top = "top",
    /**
     * Middle
     */
    Middle = "middle",
    /**
     * Bottom
     */
    Bottom = "bottom"
}
/**
 * An enum defining text wrapping mode
 *
 * @enum
 * @readonly
 */
export declare enum WrapMode {
    /**
     * Default: default wrap mode, for backward compatibility
     */
    Default = "default",
    /**
     * Wrapped Width: adds line breaks between words to fit it into a user defined width
     */
    WrappedWidth = "wrapped-words",
    /**
     * WrappedWidthSplitWords: adds line breaks to text to fit it into a user defined width
     */
    WrappedWidthSplitWords = "splitted-words"
}
/**
 * Aggregation strategy
 * @enum
 * @readonly
 */
export declare enum AggregationStrategy {
    /**
     * No aggregation
     */
    None = "none",
    /**
     * Stacked aggregation
     */
    Stack = "stack",
    /**
     * Collapsed aggregation
     */
    Collapse = "collapse"
}
/**
 * Define visual to represent comment section intervals.
 */
export declare class LogMudLogSection<T = string> extends LogAbstractVisual {
    /**
     * Constructor
     * @param [params] properties object
     */
    constructor(params?: LogMudLogSection.Options<T>);
    /**
     * Constructor
     * @param [depths] an array of the depths
     * @param [values] array of the corresponding values or callback function
     * @param [fillstyles] comments fill styles array to use one by one
     * or a callback function to define each style manually
     */
    constructor(depths?: number[], values?: string[] | LogMudLogSection.ValueCallback<T>, fillstyles?: FillStyle[] | LogMudLogSection.FillStylesCallback<T>);
    clone(): LogMudLogSection<T>;
    protected copyConstructor(src: LogMudLogSection<T>, deepCopy?: boolean): this;
    /**
     * Sets array of depths and array of corresponding values
     *
     * @param depths array of depths
     * @param values array of corresponding values along the depth or callback function
     * @returns this
     */
    setDepthsAndValues(depths: number[], values: T[] | LogMudLogSection.ValueCallback<T>): this;
    /**
     * Return selected indices
     * @returns selected indices
     */
    getSelectedIndices(): null | number[];
    /**
     * Set selected indices
     * @param indices selected indices
     * @returns this
     */
    setSelectedIndices(indices: number[] | null): this;
    /**
     * Returns selected segment text style
     *
     * @returns text style
     */
    getSelectedTextStyle(): TextStyle | LogMudLogSection.SelectedTextStylesCallback<T> | null;
    /**
     * Sets text style for selected segment
     *
     * @param textStyle a new text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setSelectedTextStyle(textStyle: TextStyle.Type | LogMudLogSection.SelectedTextStylesCallback<T> | null, merge?: boolean): this;
    /**
     * Returns selected segment fill style
     *
     * @returns fill style
     */
    getSelectedFillStyle(): FillStyle | LogMudLogSection.SelectedFillStylesCallback<T> | null;
    /**
     * Sets fill style for selected segment
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setSelectedFillStyle(fillStyle: FillStyle.Type | LogMudLogSection.SelectedFillStylesCallback<T> | null, merge?: boolean): this;
    /**
     * Returns selected segment line style
     *
     * @returns line style
     */
    getSelectedLineStyle(): LineStyle | LogMudLogSection.SelectedLineStylesCallback<T> | null;
    /**
     * Sets line style for selected segment
     *
     * @param lineStyle a new line style
     * @param [merge] true if you want to merge LineStyle with existing attribute, false by default
     * @returns this
     */
    setSelectedLineStyle(lineStyle: LineStyle.Type | LogMudLogSection.SelectedLineStylesCallback<T> | null, merge?: boolean): this;
    /**
     * Return selected segment symbol
     * @returns symbol
     */
    getSelectedSymbol(): SymbolShape | LogMudLogSection.SelectedSymbolStylesCallback<T> | null;
    /**
     * Set symbol for selected segment
     * @param symbol symbol for selected segments
     * @returns this
     */
    setSelectedSymbol(symbol: SymbolShape | LogMudLogSection.SelectedSymbolStylesCallback<T> | null): this;
    /**
     * Returns array of depths
     */
    getDepths(): number[];
    /**
     * Returns array of values
     */
    getValues(): T[] | LogMudLogSection.ValueCallback<T>;
    /**
     * Returns a text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text style
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * Returns array of text styles or a text style callback
     */
    getTextStyles(): TextStyle[] | LogMudLogSection.TextStylesCallback<T>;
    /**
     * Sets array of text Styles
     * @param textStyles text styles array to use
     * one by one or a callback function to define each style manually
     * @returns this
     */
    setTextStyles(textStyles: TextStyle.Type[] | LogMudLogSection.TextStylesCallback<T>): this;
    /**
     * Returns even text style
     */
    getEvenTextStyle(): TextStyle | null;
    /**
     * Sets even text style
     *
     * @param textStyle a new text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setEvenTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * Returns odd text style
     */
    getOddTextStyle(): TextStyle | null;
    /**
     * Sets odd text style
     *
     * @param textStyle a new text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setOddTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * Returns array of fill styles or a fill style callback
     */
    getFillStyles(): FillStyle[] | LogMudLogSection.FillStylesCallback<T>;
    /**
     * Sets array of fill Styles
     * @param fillStyles fill styles array to use
     * one by one or a callback function to define each style manually
     * @returns this
     */
    setFillStyles(fillStyles: FillStyle.Type[] | LogMudLogSection.FillStylesCallback<T>): this;
    /**
     * Returns even fill style
     */
    getEvenFillStyle(): FillStyle;
    /**
     * Sets even fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setEvenFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Returns odd fill style
     */
    getOddFillStyle(): FillStyle;
    /**
     * Sets odd fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setOddFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Returns array of line styles or a line style callback
     */
    getLineStyles(): LineStyle[] | LogMudLogSection.LineStylesCallback<T>;
    /**
     * Sets array of line Styles
     * @param lineStyles line styles array to use
     * one by one or a callback function to define each style manually
     * @returns this
     */
    setLineStyles(lineStyles: LineStyle.Type[] | LogMudLogSection.LineStylesCallback<T>): this;
    /**
     * Returns even line style
     */
    getEvenLineStyle(): LineStyle;
    /**
     * Sets even line style
     *
     * @param lineStyle a new line style
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setEvenLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Returns odd line style
     */
    getOddLineStyle(): LineStyle;
    /**
     * Sets odd line style
     *
     * @param lineStyle a new line style
     * @param [merge] true if you want to merge LineStyle with existing attribute, false by default
     * @returns this
     */
    setOddLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Returns symbols position
     */
    getSymbolPosition(): SymbolPosition;
    /**
     * Set symbols position
     * @param position symbol position
     * @returns this
     */
    setSymbolPosition(position: SymbolPosition): this;
    /**
     * Sets symbols margins style
     * @param margins margins style
     * @param [merge] true if you want to merge marginsStyle with existing attribute, false by default
     * @returns this
     */
    setSymbolMarginsStyle(margins: SpaceStyle | SpaceStyle.Options | string | null, merge?: boolean): this;
    /**
     * Return symbols margins style
     * @returns margins
     */
    getSymbolMarginsStyle(): SpaceStyle | null;
    /**
     * Returns array of symbol shapes or a symbol shape callback
     */
    getSymbols(): SymbolShape | SymbolShape[] | LogMudLogSection.SymbolStylesCallback<T>;
    /**
     * Set array of symbol shapes or a symbol shape callback
     * @param symbols symbols
     * @returns this
     */
    setSymbols(symbols: SymbolShape | SymbolShape[] | LogMudLogSection.SymbolStylesCallback<T>): this;
    /**
     * Returns even symbol shape
     */
    getEvenSymbol(): SymbolShape;
    /**
     * Sets even symbol shape
     *
     * @param symbol a new symbol shape
     * @returns this
     */
    setEvenSymbol(symbol: SymbolShape): this;
    /**
     * Returns odd symbol shape
     */
    getOddSymbol(): SymbolShape;
    /**
     * Sets odd symbol shape
     *
     * @param symbol a new symbol shape
     * @returns this
     */
    setOddSymbol(symbol: SymbolShape): this;
    /**
     * Set symbols aggregation
     * @param aggregation symbols aggregation
     * @returns this
     */
    setAggregation(aggregation: LogMudLogSection.Aggregation | null): this;
    /**
     * Returns symbols aggregation
     * @returns object containing aggregation properties
     */
    getAggregation(): LogMudLogSection.Aggregation;
    /**
     * Returns value at specified index
     *
     * @param index section index
     * @param [depth] section depth
     * @returns value properties, null if no section found
     */
    getValueAtIndex(index: number, depth?: number): {
        value: T;
        section: {
            ellipsis: Rect;
        };
    };
    /**
     * Returns value closest to specified depth
     *
     * @param depth value at depth of current section
     * @returns value properties, null if no section found
     */
    getValueAtDepth(depth: number): {
        value: T;
        section: {
            ellipsis: Rect;
        };
    };
    /**
     * Returns fill mode
     */
    getFillMode(): FillMode;
    /**
     * Sets fill mode
     *
     * @param fillMode The fill mode
     * @returns this
     */
    setFillMode(fillMode: FillMode): this;
    /**
     * Returns text alignment
     */
    getTextAlign(): TextAlign;
    /**
     * Sets text alignment
     *
     * @param textAlign text alignment
     * @returns this
     */
    setTextAlign(textAlign: TextAlign): this;
    /**
     * Sets ellipsis text to string under 15 characters
     *
     * @param str value in the current section
     * @returns this
     */
    setEllipsisString(str: string): this;
    /**
     * Get ellipsis text to string
     */
    getEllipsisString(): string;
    /**
     * Sets padding style
     * @param paddingStyle padding style
     * @param [merge] true if you want to merge paddingStyle with existing attribute, false by default
     * @returns this
     */
    setPaddingStyle(paddingStyle: SpaceStyle | SpaceStyle.Options | string | null, merge?: boolean): this;
    /**
     * Returns padding style
     * @returns padding
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Sets margins style
     * @param margins margins style
     * @param [merge] true if you want to merge marginsStyle with existing attribute, false by default
     * @returns this
     */
    setMarginsStyle(margins: SpaceStyle | SpaceStyle.Options | string | null, merge?: boolean): this;
    /**
     * Return margins style
     * @returns margins
     */
    getMarginsStyle(): SpaceStyle | null;
    /**
     * Set border radius in device coordinates.
     * @param radius border radius in device coordinates
     * @returns this
     */
    setCornerRadius(radius: number): this;
    /**
     * return corner radius
     * @returns radius
     */
    getCornerRadius(): number;
    /**
     * Hit test in the device coordinate. This method checks if any point is intersects <html> node inside text
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns selected indices
     */
    hitTest(area: LogMudLogSection.HitTestArea, radius?: number): SectionInfo[] | null;
    render(context: RenderingContext): void;
    /**
     * Return text wrapping mode
     */
    getWrapMode(): WrapMode;
    /**
     * Set text wrapping mode
     * @param wrapMode text wrapping mode
     */
    setWrapMode(wrapMode: WrapMode): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): LogMudLogSection.OptionsOut<T>;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogMudLogSection.Options<T>): this;
}
export declare namespace LogMudLogSection {
    export type Options<T> = LogAbstractVisual.Options & OptionsType<T>;
    /**
     * Value callback
     */
    export type ValueCallback<T> = (depth: number, nearestDepthIndex: number) => T;
    /**
     * Callback function to define each comment section fill style manually.
     */
    export type FillStylesCallback<T> = (depth: number, value: T, index: number) => FillStyle.Type | null;
    /**
     * Callback function to define selected comment section text style manually.
     */
    export type SelectedTextStylesCallback<T> = (depth: number, value: T, index: number, textStyle: TextStyle | null) => TextStyle.Type | null;
    /**
     * Callback function to define selected comment section fill style manually.
     */
    export type SelectedFillStylesCallback<T> = (depth: number, value: T, index: number, fillStyle: FillStyle | null) => FillStyle.Type | null;
    /**
     * Callback function to define selected comment section line style manually.
     */
    export type SelectedLineStylesCallback<T> = (depth: number, value: T, index: number, lineStyle: LineStyle | null) => LineStyle.Type | null;
    /**
     * Callback function to define selected comment section symbol shape manually.
     */
    export type SelectedSymbolStylesCallback<T> = (depth: number, value: T, index: number, symbolStyle: SymbolShape | null) => SymbolShape | null;
    /**
     * Callback function to define each comment section text style manually.
     */
    export type TextStylesCallback<T> = (depth: number, value: T, index: number) => TextStyle.Type | null;
    /**
     * Callback function to define each comment section line style manually.
     */
    export type LineStylesCallback<T> = (depth: number, value: T, index: number) => LineStyle.Type | null;
    /**
     * Callback function to define each comment section symbol shape manually.
     */
    export type SymbolStylesCallback<T> = (depth: number, value: string | T, index: number) => SymbolShape | null;
    /**
     * symbols aggregation
     */
    export type Aggregation = {
        /**
         * aggregation strategy
         */
        strategy?: AggregationStrategy | string;
        /**
         * aggregation symbol
         */
        symbol?: SymbolShape | AggregationSymbolCallback;
        /**
         * aggregation range
         */
        range?: number;
    };
    /**
     * model area or position
     */
    export type HitTestArea = Rect | Point | {
        /**
         * optional array of x coordinates
         */
        x?: number[];
        /**
         * optional array of y coordinates
         */
        y?: number[];
    };
    /**
     * properties
     */
    export type OptionsOut<T> = LogAbstractVisual.OptionsOut & {
        /**
         * array of depths
         */
        depths: number[];
        /**
         * array of corresponding values along the depth
         */
        values: T[] | ValueCallback<T>;
        /**
         * the text style
         */
        textstyle: TextStyle;
        /**
         * textstyles
         */
        textstyles: TextStyle[] | TextStylesCallback<T>;
        /**
         * EvenTextStyle
         */
        eventextstyle: TextStyle | null;
        /**
         * OddTextStyle
         */
        oddtextstyle: TextStyle | null;
        /**
         * mode for how to display the values
         */
        fillmode: FillMode;
        /**
         * fillstyles
         */
        fillstyles: FillStyle[] | FillStylesCallback<T>;
        /**
         * EvenFillStyle
         */
        evenfillstyle: FillStyle;
        /**
         * OddFillStyle
         */
        oddfillstyle: FillStyle;
        /**
         * linestyles
         */
        linestyles: LineStyle[] | LineStylesCallback<T>;
        /**
         * EvenLineStyle
         */
        evenlinestyle: LineStyle;
        /**
         * OddLineStyle
         */
        oddlinestyle: LineStyle;
        /**
         * symbols
         */
        symbols: SymbolShape | SymbolShape[] | SymbolStylesCallback<T>;
        /**
         * EvenSymbol
         */
        evensymbol: SymbolShape;
        /**
         * OddSymbol
         */
        oddsymbol: SymbolShape;
        /**
         * margins properties for specifying symbol margins
         */
        symbolmargins?: SpaceStyle;
        /**
         * symbol position
         */
        symbolposition?: SymbolPosition;
        /**
         * ellipsis text to string under 15 characters
         */
        ellipsisstring: string;
        /**
         * textalign
         */
        textalign: TextAlign;
        /**
         * properties for specifying the padding for each comment section
         */
        padding: SpaceStyle;
        /**
         * margins properties for specifying the margins for each comment section
         */
        margins?: SpaceStyle;
        /**
         * array of selected indices
         */
        selectedindices?: number[];
        /**
         * selected segment text style
         */
        selectedtextstyle?: TextStyle | SelectedTextStylesCallback<T>;
        /**
         * selected segment line style
         */
        selectedlinestyle?: LineStyle | SelectedLineStylesCallback<T>;
        /**
         * selected segment fill style
         */
        selectedfillstyle?: FillStyle | SelectedFillStylesCallback<T>;
        /**
         * selected segment symbol
         */
        selectedsymbol?: SymbolShape | SelectedSymbolStylesCallback<T>;
        /**
         * corner radius
         */
        radius: number;
    };
    /**
     * properties object
     */
    export type OptionsType<T> = {
        /**
         * an array of the depths
         */
        depths?: number[];
        /**
         * array of the corresponding values
         */
        values?: T[] | ValueCallback<T>;
        /**
         * mode for how to display the values
         */
        fillmode?: FillMode;
        /**
         * comments fill styles array to use one by one
         * or a callback function to define each style manually
         */
        fillstyles?: FillStyle.Type[] | FillStylesCallback<T>;
        /**
         * even fill style
         */
        evenfillstyle?: FillStyle.Type;
        /**
         * odd fill style
         */
        oddfillstyle?: FillStyle.Type;
        /**
         * linestyles
         */
        linestyles?: LineStyle.Type[] | LineStylesCallback<T>;
        /**
         * EvenLineStyle
         */
        evenlinestyle?: LineStyle.Type;
        /**
         * OddLineStyle
         */
        oddlinestyle?: LineStyle.Type;
        /**
         * text style of the displayed values
         */
        textstyle?: TextStyle.Type;
        /**
         * textstyles
         */
        textstyles?: TextStyle.Type[] | TextStylesCallback<T>;
        /**
         * EvenTextStyle
         */
        eventextstyle?: TextStyle.Type;
        /**
         * OddTextStyle
         */
        oddtextstyle?: TextStyle.Type;
        /**
         * ellipsis text to string (must be under 15 characters)
         */
        ellipsisstring?: string;
        /**
         * textalign
         */
        textalign?: TextAlign;
        /**
         * properties for specifying the corner radius
         */
        radius?: number;
        /**
         * properties for specifying the padding for each comment section
         */
        padding?: SpaceStyle | SpaceStyle.Options;
        /**
         * properties for specifying the margins for each comment section
         */
        margins?: SpaceStyle | SpaceStyle.Options;
        /**
         * symbols
         */
        symbols?: SymbolShape | SymbolShape[] | SymbolStylesCallback<T>;
        /**
         * EvenSymbol
         */
        evensymbol?: SymbolShape;
        /**
         * OddSymbol
         */
        oddsymbol?: SymbolShape;
        /**
         * properties for specifying the margins for symbols
         */
        symbolmargins?: SpaceStyle | SpaceStyle.Options;
        /**
         * symbol position
         */
        symbolposition?: SymbolPosition;
        /**
         * array of selected indices
         */
        selectedindices?: number[];
        /**
         * text style for selected segment
         */
        selectedtextstyle?: TextStyle.Type | SelectedTextStylesCallback<T>;
        /**
         * line style for selected segment
         */
        selectedlinestyle?: LineStyle.Type | SelectedLineStylesCallback<T>;
        /**
         * fill style for selected segment
         */
        selectedfillstyle?: FillStyle.Type | SelectedFillStylesCallback<T>;
        /**
         * symbol for selected segment
         */
        selectedsymbol?: SymbolShape | SelectedSymbolStylesCallback<T>;
    };
    type AggregationSymbolCallback = (depth: number, indices: number[]) => SymbolShape;
    export {};
}
declare type SectionInfo = {
    index: number;
    selection: Node[];
};
export {};
