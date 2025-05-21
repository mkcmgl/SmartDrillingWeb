import { SizeMode, Text } from '@int/geotoolkit/scene/shapes/Text';
import { GraphicsPath } from '@int/geotoolkit/renderer/GraphicsPath';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LogReferenceLine } from '@int/geotoolkit/welllog/LogReferenceLine';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LogFill } from '@int/geotoolkit/welllog/LogFill';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Point } from '@int/geotoolkit/util/Point';
import { LogCurve } from '@int/geotoolkit/welllog/LogCurve';
import type { LogPointSet } from '@int/geotoolkit/welllog/LogPointSet';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import { Range } from '@int/geotoolkit/util/Range';
/**
 * LogLithology LineType
 *
 * @enum
 * @readonly
 */
export declare enum LineType {
    /**
     * CONTINUE
     */
    CONTINUE = "CONTINUE",
    /**
     * DISCONTINUE
     */
    DISCONTINUE = "DISCONTINUE"
}
/**
 * LogLithology Label Fill Mode
 *
 * @enum
 * @readonly
 */
export declare enum LabelFillMode {
    /**
     * SINGLECOLOR - label fill will be a single color for all labels
     */
    SINGLECOLOR = "SINGLECOLOR",
    /**
     * FILLSTYLE - label fill will be the corresponding fill styles color
     */
    FILLSTYLE = "FILLSTYLE",
    /**
     * NONE - no label fill
     */
    NONE = "NONE"
}
/**
 * LogLithology border mode
 * @enum
 * @readonly
 */
export declare enum BorderMode {
    /**
     * Inside - inside lithology
     */
    Inside = "Inside",
    /**
     * Outside - outside lithology
     */
    Outside = "Outside",
    /**
     * Middle - half border inside and half outside
     */
    Middle = "Middle"
}
/**
 * LogLithology NameOrientation
 *
 * @enum
 * @readonly
 */
export declare enum NameOrientation {
    /**
     * Regular
     */
    Regular = "Regular",
    /**
     * Rotated
     */
    Rotated = "Rotated",
    /**
     * Automatic
     */
    Auto = "Auto"
}
export declare const VERTICAL_OFFSET = 2;
/**
 * Welllog Lithology is a visual that fills a pattern between a set of depth ranges and two reference lines defined by {@link @int/geotoolkit/welllog/LogPointSet~LogPointSet}<br>
 * Users can define their own patterns for lithology fills.
 *
 * @example
 * // This example shows how to create discontinuous range in lithology
 * import {LogLithology} from '@int/geotoolkit/welllog/LogLithology';
 * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
 * import {PatternFactory} from '@int/geotoolkit/attributes/PatternFactory';
 * import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
 * const linearTrack = widget.addTrack(TrackType.LinearTrack);
 * const depths = [128, 200, NaN, 320, 360];
 *
 * const headerTitles = ['chert', 'lime'];
 *
 * const fillStyles = [
 *     new FillStyle('green', PatternFactory.getInstance().getPattern(headerTitles[0]), 'lightgreen'),
 *     new FillStyle('yellow', PatternFactory.getInstance().getPattern(headerTitles[1]))
 * ];
 *
 * const lithology = new LogLithology({
 *     'depths': depths,
 *     'fillstyles': fillStyles,
 *     'titles': headerTitles
 * });
 * linearTrack.addChild(lithology);
 */
export declare class LogLithology extends LogFill {
    /**
     * Constructor
     * @param [depths] an array of the depths or properties object
     * @param [left] left points set
     * @param [right] right point set
     * @param [fillStyles] fill styles
     * @param [names] array of the names
     * @param [titles] array for the header titles
     * @param [labelfillstyle] label fill style used if mode is set to SINGLECOLOR
     * @param [labelfillmode] mode for how to back the name text
     * @param [nameorientation] lithology name orientation
     */
    constructor(depths?: LogLithology.Options | LogPointSet | number[] | number, left?: LogCurve | LogReferenceLine, right?: LogCurve | LogReferenceLine, fillStyles?: FillStyle.Type[], names?: string[], titles?: string[], labelfillstyle?: FillStyle.Type, labelfillmode?: LabelFillMode, nameorientation?: NameOrientation);
    clone(): LogLithology;
    protected copyConstructor(src: LogLithology, deepCopy?: boolean): this;
    /**
     * Gets an array of range identifiers
     */
    getIds(): (number | string)[];
    /**
     * Sets an array of range identifiers
     */
    setIds(ids: (number | string)[]): this;
    /**
     * Sets how text size is computed
     * @param textSizeMode Enum of size modes
     * @returns this
     */
    setTextSizeMode(textSizeMode: SizeMode): this;
    /**
     * Returns how the size is computed
     * @returns returns textSizeMode
     */
    getTextSizeMode(): SizeMode;
    /**
     * Sets text expand mode
     * @param textExpand text expand flag, true if text can expand lithology bounds
     * @returns this
     */
    setTextExpand(textExpand: boolean): this;
    /**
     * Returns true if text can expand lithology bounds
     * @returns returns textExpand
     */
    getTextExpand(): boolean;
    /**
     * Set show ellipsis
     * @param showTextEllipsis show ellipses
     * @returns this
     */
    setShowEllipsis(showTextEllipsis: boolean): this;
    /**
     * Returns ellipsis flag
     * @returns ellipsis flag
     */
    getShowEllipsis(): boolean;
    /**
     * Returns ellipsis options
     * @returns ellipsis options
     */
    getEllipsisOptions(): Text.EllipsisOptions;
    /**
     * Set ellipsis options
     * @param options ellipsis options
     * @returns this
     */
    setEllipsisOptions(options: Text.EllipsisOptions): this;
    /**
     * Set border mode
     * @param mode border mode
     * @returns this
     */
    setBorderMode(mode: BorderMode): this;
    /**
     * Returns current border mode
     * @returns mode
     */
    getBorderMode(): BorderMode;
    /**
     * sets the label fill style used if the mode is set to SINGLECOLOR
     *
     * @param fillstyle label fill style
     * @returns this
     */
    setLabelFillStyle(fillstyle: FillStyle.Type): this;
    /**
     * Returns label fill style used if the mode is set to SINGLECOLOR
     */
    getLabelFillStyle(): FillStyle;
    /**
     * Sets lithology names
     *
     * @param names lithology names
     * @returns this
     */
    setNames(names: string[]): this;
    /**
     * Returns lithology names
     */
    getNames(): string[];
    /**
     * Returns name orientation
     */
    getNameOrientation(): NameOrientation;
    /**
     * Set name orientation
     * @param nameorientation name orientation
     */
    setNameOrientation(nameorientation: NameOrientation): this;
    /**
     * Returns name visibility flag
     */
    getNameVisible(): boolean;
    /**
     * Set name visibility flag
     * @param namevisible name visibility flag
     */
    setNameVisible(namevisible: boolean): this;
    /**
     * Sets lithology titles
     * @param titles track header titles
     * @returns this
     */
    setTitles(titles: string[]): this;
    /**
     * Returns lithology titles
     */
    getTitles(): string[];
    /**
     * Sets text backing mode
     * @param mode Label fill mode
     * @returns this
     */
    setLabelFillMode(mode: LabelFillMode): this;
    /**
     * Returns Label fill mode
     */
    getLabelFillMode(): LabelFillMode;
    /**
     * Returns array of fillstyles
     */
    getFillStyles(): FillStyle[];
    /**
     * Returns array of linestyles
     */
    getLineStyles(): LineStyle[];
    /**
     * Sets lithology line types
     * @param [lineTypes] array for the line type
     */
    setLineTypes(lineTypes?: LineType[]): this;
    /**
     * Return Lithology Line Types
     */
    getLineTypes(): LineType[];
    /**
     * Sets array of fillstyles
     * @param fillStyles array of fillstyles
     * @returns this
     */
    setFillStyles(fillStyles: FillStyle.Type[]): this;
    /**
     * Sets array of line styles
     * @param lineStyles array of line styles
     * @returns this
     */
    setLineStyles(lineStyles: LineStyle.Type[] | null): this;
    /**
     * Sets depths intervals
     *
     * @param depths depths intervals
     * @returns this
     */
    setDepths(depths: number[]): this;
    /**
     * Returns depths
     */
    getDepths(): number[];
    /**
     * Return text style
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
     * Sets text styles list for the text labels
     * @param textStyles a new shape text style
     * @returns this
     */
    setTextStyles(textStyles: TextStyle.Type[]): this;
    /**
     * Returns list of the text styles for the lithology
     */
    getTextStyles(): TextStyle[];
    /**
     * Sets text
     * @param text Sets text to be displayed
     * @returns this
     */
    setText(text: string): this;
    /**
     * Returns text
     * @returns text
     */
    getText(): string;
    /**
     * Return minimum height for label
     */
    getMinHeightForLabel(): number;
    /**
     * Sets minimum height for label
     * @param min min height for label ( used to decide when to turn off display of label)
     * @returns this
     */
    setMinHeightForLabel(min: number): this;
    /**
     * Hit test in device coordinates
     * @param area the device area or position
     * @param radius the selection radius
     */
    hitTest(area: Rect | Point, radius?: number): LogLithology.Hits | null;
    protected drawBackground(context: RenderingContext, index: number): void;
    protected drawBackground(context: RenderingContext, index: number, depthTop?: number, depthBottom?: number): void;
    protected drawBackground(context: RenderingContext, index: number, depthTop: number, depthBottom: number, isTopOverlapped: boolean, isBottomOverlapped: boolean): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogLithology.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogLithology.Options): this;
}
export declare namespace LogLithology {
    /**
     * an array of the depths or properties object
     */
    type Options = LogFill.Options & {
        /**
         * the array of range identifiers
         */
        ids?: (string | number)[];
        /**
         * an array of the depths
         */
        depths?: number[];
        /**
         * min height where display of label can be turned off
         */
        minheightforlabel?: number;
        /**
         * the text style
         */
        textstyle?: TextStyle.Type;
        /**
         * left points set or number between 0 and 1
         */
        left?: LogCurve | LogReferenceLine | number;
        /**
         * right point set or number between 0 and 1
         */
        right?: LogCurve | LogReferenceLine | number;
        /**
         * fill styles
         */
        fillstyles?: FillStyle.Type[];
        /**
         * line styles
         */
        linestyles?: LineStyle.Type[] | null;
        /**
         * lithology text styles
         */
        textstyles?: TextStyle.Type[];
        /**
         * name of the lithology
         */
        text?: string;
        /**
         * array of the names
         */
        names?: string[];
        /**
         * names visibility flag
         */
        namevisible?: boolean;
        /**
         * lithology name orientation
         */
        nameorientation?: NameOrientation;
        /**
         * array for the header titles
         */
        titles?: string[];
        /**
         * array for the line type
         */
        linetypes?: LineType[];
        /**
         * mode for how to back the name text
         */
        labelfillmode?: LabelFillMode;
        /**
         * mode for how to draw border around lithology
         */
        bordermode?: BorderMode;
        /**
         * label fill style used if mode is set to SINGLECOLOR
         */
        labelfillstyle?: FillStyle.Type;
        /**
         * ellipsis flag
         */
        textellipsis?: boolean;
        /**
         * Enum of size modes
         */
        textsizemode?: SizeMode;
        /**
         * Auto expand lithology rect to fit text flag
         */
        textexpand?: boolean;
    };
    /**
     * properties object
     */
    type OptionsOut = LogFill.OptionsOut & {
        /**
         * the array of range identifiers
         */
        ids?: (string | number)[];
        /**
         * depths intervals
         */
        depths: number[];
        /**
         * min height where display of label can be turned off
         */
        minheightforlabel: number;
        /**
         * the text style
         */
        textstyle: TextStyle;
        /**
         * the fill styles
         */
        fillstyles: FillStyle[];
        /**
         * the fill styles
         */
        linestyles: LineStyle[];
        /**
         * lithology text styles
         */
        textstyles: TextStyle[];
        /**
         * lithology names
         */
        text: string;
        /**
         * lithology names
         */
        names: string[];
        /**
         * names visibility flag
         */
        namevisible: boolean;
        /**
         * lithology name orientation
         */
        nameorientation: NameOrientation;
        /**
         * track header titles
         */
        titles: string[];
        /**
         * array for the line type
         */
        linetypes: LineType[];
        /**
         * the label fill mode
         */
        labelfillmode: LabelFillMode;
        /**
         * mode for how to draw border around lithology
         */
        bordermode: BorderMode;
        /**
         * the fill style used for mode SINGLECOLOR
         */
        labelfillstyle: FillStyle;
        /**
         * ellipsis flag
         */
        textellipsis: boolean;
        /**
         * Enum of size modes
         */
        textsizemode: SizeMode;
        /**
         * Text expand flag
         */
        textexpand: boolean;
    };
    /**
     * Defines lithology range description object
     */
    type LithologyRangeDesc = {
        /**
         * the zero-based index of this range.
         * If this range is gap (empty space between adjacent ranges given by NaN depth) returns the next range index
         */
        index: number;
        /**
         * the depth range
         */
        depthrange: Range;
        /**
         * the range geometry
         */
        geometry: GraphicsPath;
        /**
         * the flag indicating if this range is gap (empty space between adjacent ranges given by NaN depth) or not
         */
        isgap: boolean;
        /**
         * the range identifier
         */
        id?: number | string;
    };
    /**
     * Defines hit test result
     */
    type Hits = {
        /**
         * the selected ranges array
         */
        selectedranges: LithologyRangeDesc[];
    };
}
