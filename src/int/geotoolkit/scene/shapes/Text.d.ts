import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { Rect } from '@int/geotoolkit/util/Rect';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
import { Point } from '@int/geotoolkit/util/Point';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
/**
 * Enum of size modes (to specify that size mode depends from width and height use SizeMode.FixedWidth | SizeMode.FixedHeight)
 * @enum
 * @readonly
 */
export declare enum SizeMode {
    /**
     * From Font: calculates text size based only on font
     */
    FromFont = 0,
    /**
     * Fixed Width: calculates text size based on width
     */
    FixedWidth = 1,
    /**
     * Fixed Height: calculates text size based on height
     */
    FixedHeight = 2,
    /**
     * From Font when possible: calculates text size based only on font. Makes it fit width/height if text too big.
     */
    FromFontWhenPossible = 4,
    /**
     * Wrapped Width: adds line breaks between words to fit it into a user defined width
     * Will not Split words that are larger than Width
     * WARNING* This is an expensive operation and using it for very large pieces of texts is not advised
     * If you know your width and font and will not be changing these it is better to manually split the line yourself
     */
    WrappedWidth = 5,
    /**
     * WrappedWidthSplitWords: adds line breaks to text to fit it into a user defined width
     * Will Split words that are larger than remains line Width
     * WARNING* This is an expensive operation and using it for very large pieces of texts is not advised
     * If you know your width and font and will not be changing these it is better to manually split the line yourself
     */
    WrappedWidthSplitWords = 6,
    /**
     * WrappedWidthWhenPossible: adds line breaks to text to fit it into a user defined width
     * Will Split words that are larger than shape Width
     * WARNING* This is an expensive operation and using it for very large pieces of texts is not advised
     * If you know your width and font and will not be changing these it is better to manually split the line yourself
     */
    WrappedWidthWhenPossible = 7
}
/**
 * Text transform type
 * @enum
 * @readonly
 */
export declare enum Transform {
    /**
     * Apply no transformation to text
     */
    None = "none",
    /**
     * First letter of every word is capital
     */
    Capitalize = "capitalize",
    /**
     * All letters are uppercase
     */
    Uppercase = "uppercase",
    /**
     * All letters are lowercase
     */
    Lowercase = "lowercase"
}
/**
 * Defines simple text shape. Text shapes support various kinds of text strings in the model. Anchoring technique allows developer to specify location of the text relative to anchor point.<br>
 * Other attributes like text size and style can also be set.
 */
export declare class Text extends AnchoredShape {
    /**
     * @param [options] shape properties
     */
    constructor(options?: Text.Options);
    /**
     * @param [text] text to display
     * @param [ax] x coordinate of anchor
     * @param [ay] y coordinate of anchor
     * @param [width] desired width
     * @param [height] desired height
     * @param [textStyle] textStyle to display
     * @param [sizeIsInDeviceSpace] size Is In Device Space
     * @param [alignment] anchor type
     */
    constructor(text?: string | number, ax?: number, ay?: number, width?: number, height?: number, textStyle?: TextStyle.Type, sizeIsInDeviceSpace?: boolean, alignment?: AnchorType);
    clone(): Text;
    protected copyConstructor(src: Text, deepCopy?: boolean): this;
    /**
     * Returns the text string that will be rendered depending on textStyle's wrapping value.
     * @returns the text string that will be rendered
     */
    getDisplayableText(): string;
    /**
     * Set show ellipsis
     * @param showEllipsis showEllipsis boolean flag that enables/disables ellipsis in case if text is too long
     * @returns this
     */
    setShowEllipsis(showEllipsis: boolean): this;
    /**
     * Returns ellipsis flag
     * @returns ellipsis flag
     */
    getShowEllipsis(): boolean;
    /**
     * Sets ellipsis text to string under 15 characters
     *
     * @param ellipsisValue value in the current section
     */
    setEllipsisString(ellipsisValue: string): this;
    /**
     * Get ellipsis text
     */
    getEllipsisString(): string;
    /**
     * @returns ellipsis options
     */
    getEllipsisOptions(): Text.EllipsisOptions;
    /**
     * Sets text overflow ellipsis options
     *
     * @param options text-overflow ellipsis options
     * @returns this
     */
    setEllipsisOptions(options: Text.EllipsisOptions): this;
    /**
     * Return auto size mode
     */
    getAutoSize(): boolean;
    /**
     * Automatically fit shape bounds to text size, default is true
     * Set it to false if you have more than one paragraph inside with different alignment
     * @param autoSize auto size mode
     * @returns this
     */
    setAutoSize(autoSize: boolean): this;
    /**
     * Sets how text size is computed
     * @param sizeMode Enum of size modes
     * @returns this
     */
    setSizeMode(sizeMode: SizeMode): this;
    /**
     * Returns how the size is computed
     * @returns size mode
     */
    getSizeMode(): SizeMode;
    /**
     * Sets rectangle geometry.
     *
     * @param x1 rect
     * @returns this
     */
    setRect(x1: Rect): this;
    /**
     * Sets rectangle geometry.
     *
     * @param x1 x coordinate of the top left corner
     * @param y1 y coordinate of the top left corner
     * @param x2 x coordinate of the bottom right corner
     * @param y2 y coordinate of the bottom right corner
     * @returns this
     */
    setRect(x1: number, y1: number, x2: number, y2: number): this;
    /**
     * Update the string this text displays.
     *
     * @param text new text for this shape     *
     * can contains text formatting tags, <p> <font> <b> <strong> <i> <em> <mark> <small> <del> <ins> <sub> <sup>
     * see https://www.w3schools.com/html/html_formatting.asp
     * each tags except <br> can contains style attribute with set of 'font-size', 'font-family', 'font-weight', 'font-style', 'font-color' properties
     * @example
     * text.setText('Temperature <b style="font-color:red">110&deg;</b> (<i style="font-color:gray">Fahrenheit</i>')
     * @returns this
     */
    setText(text: string): this;
    /**
     * Get this text's contents as a string.
     *
     * @returns text
     */
    getText(): string;
    /**
     * Set size
     * @param width text width
     * @param height text height
     * @returns this
     */
    setSize(width: number, height: number): this;
    /**
     * Called internally to save user size.
     *
     * @param width width
     * @param height height
     * @returns this
     */
    setUserSize(width: number, height: number): this;
    /**
     * Set text width. If width set to zero, text will accept size from font.
     *
     * @param width text width
     * @returns this
     */
    setWidth(width: number): this;
    /**
     * Set text height. If height set to zero, text will get its height from font.
     *
     * @param height text height
     * @returns this
     */
    setHeight(height: number): this;
    /**
     * Set text style
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * The style associated with this text.
     *
     * @returns text style
     */
    getTextStyle(): TextStyle;
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
     * Set inner padding in device coordinates.
     * @param padding inner padding in device coordinates
     * @returns this
     */
    setPadding(padding: number): this;
    /**
     * return inner padding
     * @returns padding
     */
    getPadding(): number;
    /**
     * Sets padding style
     * @param paddingStyle padding style
     * @param [merge] true if you want to merge paddingStyle with existing attribute, false by default
     */
    setPaddingStyle(paddingStyle: SpaceStyle | SpaceStyle.Options | string | number, merge?: boolean): this;
    /**
     * Return padding style
     * @returns padding
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Set text transformation
     * @param textTransform Text transformation type
     */
    setTextTransform(textTransform: Transform | string): this;
    /**
     * Returns text transform type
     */
    getTextTransform(): Transform | string;
    render(context: RenderingContext): void;
    /**
     * Update geometry
     * @param context Rendering Context
     * @returns this
     */
    protected updateGeometry(context: RenderingContext): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Text.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     */
    setProperties(properties?: Text.Options): this;
    /**
     * invalidate Method
     * @returns method to invalidate this object
     */
    getInvalidateMethod(): IStyleListener.AttributeCallback;
    /**
     * Returns user defined width (if exists)
     */
    getUserWidth(): number;
    /**
     * Returns user defined height (if exists)
     */
    getUserHeight(): number;
    /**
     * Hit test in the device coordinate. This method checks if any point is intersects <html> node inside text
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns properties
     */
    hitTest(area: Text.Area, radius?: number): Text.Hits;
}
export declare namespace Text {
    /**
     * text to display or object, which contains shape properties
     */
    type Options = AnchoredShape.Options & {
        /**
         * text to display
         */
        text?: string;
        /**
         * border radius in device coordinates
         */
        radius?: number;
        /**
         * inner padding in device coordinates
         */
        padding?: number;
        /**
         * padding style
         */
        paddingstyle?: SpaceStyle;
        /**
         * textStyle to display
         */
        textstyle?: TextStyle.Type;
        /**
         * text size mode, default value depends on width and height settings
         */
        sizemode?: SizeMode;
        /**
         * text-transform (uppercase, lowercase, capitalize)
         */
        texttransform?: Transform | string;
        /**
         * height
         */
        userheight?: number;
        /**
         * width
         */
        userwidth?: number;
        /**
         * ellipsis flag
         */
        showellipsis?: boolean;
        /**
         * string ellipsis that renders if ellipsis is true
         */
        ellipsisstring?: string;
        /**
         * automatically fit shape bounds to text size, default is true
         * Set it to false if you have more than one paragraph inside with different alignment
         */
        autosize?: boolean;
    };
    /**
     * ellipsis options
     */
    type EllipsisOptions = {
        /**
         * ellipsis visibility flag
         */
        visible?: boolean;
        /**
         * ellipsis text
         */
        ellipsis?: string;
        /**
         * minimum line symbols
         */
        minlength?: number;
    };
    /**
     * properties
     */
    type OptionsOut = AnchoredShape.OptionsOut & {
        /**
         * text
         */
        text: string;
        /**
         * border radius in device coordinates.
         */
        radius: number;
        /**
         * padding
         */
        padding: number;
        /**
         * padding style
         */
        paddingstyle: SpaceStyle;
        /**
         * textStyle
         */
        textstyle: TextStyle | null;
        /**
         * layout
         */
        layout: Rect | null;
        /**
         * enum size mode
         */
        sizemode: SizeMode;
        /**
         * transform
         */
        texttransform: Transform;
        /**
         * height
         */
        userheight: number;
        /**
         * width
         */
        userwidth: number;
        /**
         * ellipsis flag
         */
        showellipsis: boolean;
        /**
         * ellipsis string
         */
        ellipsisstring: string;
        /**
         * auto size mode
         */
        autosize: boolean;
        /**
         * bounds
         */
        bounds: Rect;
    };
    /**
     * model area or position
     */
    type Area = Rect | Point | {
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
    type Hits = {
        /**
         * id of the selected tag
         */
        id?: string;
        /**
         * xml content of the selected tag
         */
        xml?: string;
    };
}
