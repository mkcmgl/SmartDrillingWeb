import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import { ColoredStyle } from '@int/geotoolkit/attributes/ColoredStyle';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Enum of baseline
 * @readonly
 * @enum
 */
export declare enum BaseLineStyle {
    /**
     * Alphabetic (Default)
     */
    Alphabetic = "alphabetic",
    /**
     * Top
     */
    Top = "top",
    /**
     * Hanging
     */
    Hanging = "hanging",
    /**
     * Middle
     */
    Middle = "middle",
    /**
     * Ideographic
     */
    Ideographic = "ideographic",
    /**
     * Bottom
     */
    Bottom = "bottom"
}
/**
 * Enum of alignment
 * https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
 * @readonly
 * @enum
 */
export declare enum AlignmentStyle {
    /**
     * Start
     * The same as left if direction is left-to-right and right if direction is right-to-left.
     */
    Start = "start",
    /**
     * End
     * The same as right if direction is left-to-right and left if direction is right-to-left.
     */
    End = "end",
    /**
     * Left (Default)
     * The inline contents are aligned to the left edge of the line box.
     */
    Left = "left",
    /**
     * Center
     * The inline contents are centered within the line box.
     */
    Center = "center",
    /**
     * Right
     * The inline contents are aligned to the right edge of the line box.
     */
    Right = "right",
    /**
     * Justify
     * The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line.
     */
    Justify = "justify"
}
/**
 * Enum of white-space
 * The white-space property sets how white space inside an element is handled.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
 * @readonly
 * @enum
 */
export declare enum WhiteSpaceStyle {
    /**
     * Undefined (Default)
     * Backward compatibility
     */
    Undefined = "undefined",
    /**
     * Normal
     * Sequences of white space are collapsed. Newline characters in the source are handled the same as other white space. Lines are broken as necessary to fill line boxes.
     */
    Normal = "normal",
    /**
     * NoWrap
     * Collapses white space as for normal, but suppresses line breaks (text wrapping) within the source.
     */
    NoWrap = "nowrap",
    /**
     * Pre
     * Sequences of white space are preserved. Lines are only broken at newline characters in the source and at <br> elements.
     */
    Pre = "pre",
    /**
     * PreWrap
     * Sequences of white space are preserved. Lines are broken at newline characters, at <br>, and as necessary to fill line boxes.
     */
    PreWrap = "pre-wrap",
    /**
     * PreLine
     * Sequences of white space are collapsed. Lines are broken at newline characters, at <br>, and as necessary to fill line boxes.
     */
    PreLine = "pre-line",
    /**
     * BreakSpaces
     * The behavior is identical to that of pre-wrap, except that:
     * <ul>
     * <li>Any sequence of preserved white space always takes up space, including at the end of the line.</li>
     * <li>A line breaking opportunity exists after every preserved white space character, including between white space characters.</li>
     * <li>Such preserved spaces take up space and do not hang, and thus affect the box’s intrinsic sizes (min-content size and max-content size).<li>
     * </ul>
     */
    BreakSpaces = "break-spaces"
}
/**
 * Enum of word-break
 * The word-break property sets whether line breaks appear wherever the text would otherwise overflow its content box.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
 * @readonly
 * @enum
 */
export declare enum WordBreakStyle {
    /**
     * Undefined (Default)
     * Backward compatibility
     */
    Undefined = "undefined",
    /**
     * Normal
     * Use the default line break rule.
     */
    Normal = "normal",
    /**
     * BreakAll
     * To prevent overflow, word breaks should be inserted between any two characters (excluding Chinese/Japanese/Korean text).
     */
    BreakAll = "break-all",
    /**
     * KeepAll (not supported yet)
     * Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as for WordBreakStyle.Normal.
     */
    KeepAll = "keep-all",
    /**
     * BreakWord
     * Has the same effect as WordBreak.Normal and OverflowWrap.Anywhere, regardless of the actual value of the OverflowWrap property.
     */
    BreakWord = "break-word"
}
/**
 * Enum of overflow-wrap
 * The overflow-wrap property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap
 * @readonly
 * @enum
 */
export declare enum OverflowWrapStyle {
    /**
     * Undefined (Default)
     * Backward compatibility
     */
    Undefined = "undefined",
    /**
     * Normal (Default)
     * Lines may only break at normal word break points (such as a space between two words).
     */
    Normal = "normal",
    /**
     * Anywhere
     * To prevent overflow, an otherwise unbreakable string of characters — like a long word or URL — may be broken at any point
     * if there are no otherwise-acceptable break points in the line. No hyphenation character is inserted at the break point.
     * Soft wrap opportunities introduced by the word break are considered when calculating min-content intrinsic sizes.
     */
    Anywhere = "anywhere",
    /**
     * BreakWord
     * The same as the anywhere value, with normally unbreakable words allowed to be broken at arbitrary points
     * if there are no otherwise acceptable break points in the line, but soft wrap opportunities introduced by the word break
     * are NOT considered when calculating min-content intrinsic sizes.
     */
    BreakWord = "break-word"
}
/**
 * Enum of text-overflow
 * The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('…'), or display a custom string.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
 * @readonly
 * @enum
 */
export declare enum TextOverflowStyle {
    /**
     * Undefined (Default)
     * Text does not clip by the limit of the user specified area
     */
    Undefined = "undefined",
    /**
     * Clip
     * This keyword value will truncate the text at the limit of the content area,
     * therefore the truncation can happen in the middle of a character.
     * To clip at the transition between characters you can specify text-overflow as an empty string.
     * .setTextOverflow('')
     */
    Clip = "clip",
    /**
     * Ellipsis
     * This keyword value will display an ellipsis ('…', U+2026 HORIZONTAL ELLIPSIS) to represent clipped text.
     * The ellipsis is displayed inside the content area, decreasing the amount of text displayed.
     * If there is not enough space to display the ellipsis, it is clipped.
     */
    Ellipsis = "ellipsis"
}
/**
 * Defines a collection of text properties.
 * Constructor can be TextStyle(color,baseLine,alignment,font) or
 * TextStyle(font) or TextStyle(baseLine, alignment)
 */
export declare class TextStyle extends ColoredStyle {
    /**
     * Create TextStyle
     * @param [color] text color or a json object
     * @param [baseLine] base line.
     * @param [alignment] alignment.
     * @param [font] font.
     * @param [autoSize] auto font size on high definition display.
     * @param [multiline] allow multi-line text
     * @param [shadow] JSON for displaying shadow
     */
    constructor(color?: TextStyle.Type, baseLine?: BaseLineStyle, alignment?: AlignmentStyle, font?: string, autoSize?: boolean, multiline?: boolean, shadow?: ColoredStyle.Shadow);
    clone(): TextStyle;
    protected copyConstructor(src: TextStyle, deepCopy?: boolean): this;
    /**
     * Allows text to be printed along multiple lines.
     * @param multiLine allow text to be printed along multiple lines or not
     * @returns this
     */
    setMultiLine(multiLine: boolean): this;
    /**
     * true if text is multiline
     * @returns multiline
     */
    getMultiLine(): boolean;
    /**
     * Sets line height see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     * @param lineHeight line height
     * @returns this
     */
    setLineHeight(lineHeight: string | number): this;
    /**
     * Return line height see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     * @returns lineHeight
     */
    getLineHeight(): string | number;
    /**
     * Return font
     * @returns font in CSS format
     */
    getFont(): string;
    /**
     * Sets font
     * @param font font in CSS or JSON format
     */
    setFont(font: TextStyle.Font | string | null): this;
    /**
     * Return Font family
     */
    getFontFamily(): string;
    /**
     * Set Font family
     * @param fontFamily font family
     */
    setFontFamily(fontFamily: string): this;
    /**
     * Return Font size
     */
    getFontSize(): string;
    /**
     * Set Font size
     * @param fontSize font size
     */
    setFontSize(fontSize: string): this;
    /**
     * Return Font weight
     */
    getFontWeight(): string;
    /**
     * Set Font weight
     * @param fontWeight font weight
     */
    setFontWeight(fontWeight: string): this;
    /**
     * Return Font style
     */
    getFontStyle(): string;
    /**
     * Set Font style
     * @param fontStyle font style
     */
    setFontStyle(fontStyle: string): this;
    /**
     * Gets outline style
     *
     * @returns outline style
     */
    getOutline(): LineStyle;
    /**
     * Sets outline style
     *
     * @param style outline style
     */
    setOutline(style: LineStyle.Type): this;
    /**
     * Return current text baseline
     * @returns baseline in CSS format
     */
    getBaseLine(): BaseLineStyle;
    /**
     * Sets base line, for alignment {@link @int/geotoolkit/scene/shapes/Text~Text} use AnchorType
     * @param baseLine in CSS format
     */
    setBaseLine(baseLine: BaseLineStyle): this;
    /**
     * Return text alignment
     *
     * @returns alignment in CSS format
     */
    getAlignment(): AlignmentStyle;
    /**
     * Sets text alignment
     *
     * @param alignment in CSS format
     */
    setAlignment(alignment: AlignmentStyle): this;
    /**
     * Return text white-space CSS rule
     */
    getWhiteSpace(): WhiteSpaceStyle;
    /**
     * Set text white-space CSS rule
     * @param whiteSpace white space in CSS format
     */
    setWhiteSpace(whiteSpace: WhiteSpaceStyle): this;
    /**
     * Return text word-break CSS rule
     */
    getWordBreak(): WordBreakStyle;
    /**
     * Set text word-break CSS rule
     * @param wordBreak word break in CSS format
     */
    setWordBreak(wordBreak: WordBreakStyle): this;
    /**
     * Return text overflow-wrap CSS rule
     */
    getOverflowWrap(): OverflowWrapStyle;
    /**
     * Set text overflow-wrap CSS rule
     * @param overflowWrap overflow wrap in CSS format
     */
    setOverflowWrap(overflowWrap: OverflowWrapStyle): this;
    /**
     * Return text text-overflow CSS rule
     */
    getTextOverflow(): TextOverflowStyle;
    /**
     * Set text text-overflow CSS rule
     * @param textOverflow text overflow in CSS format
     */
    setTextOverflow(textOverflow: TextOverflowStyle): this;
    /**
     * Sets background style
     *
     * @param style background style
     * @returns this
     */
    setBackground(style: FillStyle.Type): this;
    /**
     * Gets background style
     *
     * @returns background style
     */
    getBackground(): FillStyle;
    /**
     * Sets underline style
     *
     * @param style underline style
     * use 'inherit' keyword as line style color, in case if color should inherit its value from text style.
     * @returns this
     */
    setUnderline(style: LineStyle.Type): this;
    /**
     * Gets underline style
     *
     * @returns underline style
     */
    getUnderline(): LineStyle;
    /**
     * Sets underline offset distance, see https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset
     *
     * @param offset underline offset distance
     * @returns this
     */
    setUnderlineOffset(offset: null | string | number): this;
    /**
     * Gets underline offset distance
     *
     * @returns underline offset distance
     */
    getUnderlineOffset(): null | string | number;
    /**
     * Sets strikethrough style
     *
     * @param style strikethrough style
     * use 'inherit' keyword as line style color, in case if color should inherit its value from text style.
     * @returns this
     */
    setStrikethrough(style: LineStyle.Type): this;
    /**
     * Gets strikethrough style
     *
     * @returns strikethrough style
     */
    getStrikethrough(): LineStyle;
    /**
     * Sets auto size
     *
     * @param autoSize autosize enable or not
     */
    setAutoSize(autoSize: boolean): this;
    /**
     * Return text auto size
     */
    getAutoSize(): boolean;
    /**
     * Return an object results of the inline font string.
     */
    getProcessedFont(): TextStyle.ProcessedFont;
    toString(): string;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): TextStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: TextStyle.Options): this;
    /**
     * Create or get fill style from object
     *
     * @param object object can be in format of constructor of TextStyle
     */
    static fromObject(object: TextStyle.Type): TextStyle | null;
    /**
     * Merge textstyle object with existing instance
     * @param node node
     * @param textStyle instance of node property
     * @param object contains text style
     * @param [merge] merge flag
     * @param [invalidateMethod] optional invalidate method
     * @returns textStyle
     * @example
     * // after mergeFromObject() text shape will change only color property
     * import {Text} from '@int/geotoolkit/scene/shapes/Text';
     * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
     * const t1 = new TextStyle({
     *   'color': KnownColors.Black,
     *   'alignment': 'center',
     *   'font': '42px Arial'
     * });
     * const t2 = {
     *   'color': 'red'
     * };
     * const textStyle = TextStyle.mergeFromObject(null, t1, t2, true);
     * const text = new Text({
     *   'text': 'Alphabetical',
     *   'ax': 185,
     *   'ay': 50,
     *   'textStyle': textStyle,
     *   'alignment': AnchorType.Center
     * });
     */
    static mergeFromObject(node: IStyleListener | null, textStyle: TextStyle | null, object: TextStyle.Type, merge?: boolean, invalidateMethod?: IStyleListener.AttributeCallback): TextStyle;
    /**
     * Sets text fill style
     * @param fill text fill style
     * @returns this
     */
    setFillStyle(fill: FillStyle | FillStyle.Options | string): this;
    /**
     * Gets text fill style
     * @returns text fill style
     */
    getFillStyle(): FillStyle | null;
}
export declare namespace TextStyle {
    type Type = Options | TextStyle | RgbaColor | string | null;
    /**
     * font in CSS or JSON format
     */
    type Font = {
        /**
         * font family
         */
        family?: string;
        /**
         * font size
         */
        size?: string;
        /**
         * font weight
         */
        weight?: string;
        /**
         * font style
         */
        style?: string;
    };
    type ProcessedFont = {
        /**
         * font weight (normal, bold, etc.)
         */
        fontweight: string;
        /**
         * font size (ex: 12px)
         */
        fontsize: string;
        /**
         * font family
         */
        fontfamily: string;
        /**
         * line height
         */
        fontlineheight: string;
        /**
         * font weight (normal, italic, etc.)
         */
        fontstyle: string;
    } | null;
    /**
     * properties
     */
    type OptionsOut = ColoredStyle.OptionsOut & {
        /**
         * font in CSS format
         */
        font?: null | string;
        /**
         * baseLine in CSS
         */
        baseline?: BaseLineStyle;
        /**
         * alignment
         */
        alignment?: AlignmentStyle;
        /**
         * line height
         */
        lineheight?: string | number;
        /**
         * multi line
         */
        multiline?: boolean;
        /**
         * outline style
         */
        outline?: LineStyle | null;
        /**
         * background style
         */
        background?: FillStyle | null;
        /**
         * underline style
         */
        underline?: LineStyle | null;
        /**
         * underline offset distance
         */
        underlineoffset?: string | number;
        /**
         * underline style
         */
        strikethrough?: LineStyle | null;
        /**
         * auto size
         */
        autosize?: boolean;
        /**
         * white space
         */
        whitespace?: WhiteSpaceStyle;
        /**
         * word break
         */
        wordbreak?: WordBreakStyle;
        /**
         * overflow wrap
         */
        overflowwrap?: OverflowWrapStyle;
        /**
         * text overflow
         */
        textoverflow?: TextOverflowStyle;
        /**
         * font url
         */
        fonturl?: string | ArrayBuffer;
        /**
         * text fill style
         */
        fill?: FillStyle;
    };
    /**
     * text color or a json object
     */
    type Options = ColoredStyle.Options & {
        /**
         * font see {@link import("geotoolkit/attributes/TextStyle").TextStyle.setFont}
         */
        font?: string | Font | null;
        /**
         * alignment.
         */
        alignment?: AlignmentStyle;
        /**
         * base line.
         */
        baseline?: BaseLineStyle;
        /**
         * outline style
         */
        outline?: LineStyle.Type;
        /**
         * background style
         */
        background?: FillStyle.Type;
        /**
         * underline style
         */
        underline?: LineStyle.Type;
        /**
         * underline offset distance
         */
        underlineoffset?: string | number;
        /**
         * strikethrough style
         */
        strikethrough?: LineStyle.Type;
        /**
         * line height
         */
        lineheight?: string | number;
        /**
         * allow multi-line text
         */
        multiline?: boolean;
        /**
         * auto font size on high definition display.
         */
        autosize?: boolean;
        /**
         * white space
         */
        whitespace?: WhiteSpaceStyle;
        /**
         * word break
         */
        wordbreak?: WordBreakStyle;
        /**
         * overflow wrap
         */
        overflowwrap?: OverflowWrapStyle;
        /**
         * text overflow
         */
        textoverflow?: TextOverflowStyle;
        /**
         * the place from which the font will be loaded, if null - uses system fonts. It can be base64 with url keyword
         */
        fonturl?: string | ArrayBuffer;
        /**
         * text fill style
         */
        fill?: FillStyle;
    };
}
