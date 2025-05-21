/**
 * @module geotoolkit/welllog/LogAnnotation
 */
import { SizeMode } from '@int/geotoolkit/scene/shapes/Text';
import { Rect } from '@int/geotoolkit/util/Rect';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { LogFrameVisual } from '@int/geotoolkit/welllog/LogFrameVisual';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * LogAnnotation TextOrientation
 *
 * @enum
 * @readonly
 */
export declare enum TextOrientation {
    /**
     * Regular
     */
    Regular = "Regular",
    /**
     * Rotated
     */
    Rotated = "Rotated"
}
/**
 * LogAnnotation TextAlignment
 *
 * @enum
 * @readonly
 */
export declare enum TextAlignment {
    /**
     * FromTextStyle
     */
    FromTextStyle = "FromTextStyle",
    /**
     * Auto alignment based on text position and Rotation
     */
    Auto = "Auto"
}
/**
 * Defines annotation visual.
 * It is defined by a string and a rectangle to set its bounds.
 *
 * @example
 * // How to create annotation
 * // Use setFixedHeight to false to locate
 * // annotation precisely by provided bounds
 * import {LogAnnotation} from '@int/geotoolkit/welllog/LogAnnotation';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * ...
 * const annotation = new LogAnnotation({
 *       'bounds': new Rect(0, 100, 1, 200),
 *       'text': 'Text1',
 *       'textstyle': '#7cb342',
 *       'fillstyle': '#fdd835',
 *       'textposition': AnchorType.Center,
 *       'padding': '1mm'
 *    }).setFixedHeight(false)
 */
export declare class LogAnnotation extends LogFrameVisual {
    /**
     * @param [options] bounds of the visual or properties object
     * @param [text] the text to be displayed
     */
    constructor(options?: LogAnnotation.Options | Rect, text?: string);
    clone(): LogAnnotation;
    protected copyConstructor(src: LogAnnotation, deepCopy?: boolean): this;
    /**
     * Sets text
     *
     * @param text text to be displayed
     */
    setText(text: string): this;
    /**
     * Returns the current text
     */
    getText(): string;
    /**
     * Sets text orientation. if text orientation is regular then text follows the widgets orientation
     * if text is rotated then text is always rotated on 90 degree.
     * @param orientation text orientation
     */
    setTextOrientation(orientation: TextOrientation): this;
    /**
     * Return text orientation
     */
    getTextOrientation(): TextOrientation;
    /**
     * Sets text alignment.
     * @param alignment text alignment
     */
    setTextAlignment(alignment: TextAlignment): this;
    /**
     * Return text autorotation
     */
    getTextAutoRotation(): boolean;
    /**
     * Sets text autorotation.
     * @param alignment text alignment
     */
    setTextAutoRotation(autoRotation: boolean): this;
    /**
     * Return text alignment
     */
    getTextAlignment(): TextAlignment;
    /**
     * Specifies text position inside the bounds
     * @param anchorType text anchor type specified position of the text inside the bounds and
     * it can be placed in any one of 9 places. These values include LeftTop, TopCenter, RightTop, LeftCenter, Center,RightCenter, LeftBottom, BottomCenter, RightBottom
     * @returns this
     */
    setTextPosition(anchorType: AnchorType): this;
    /**
     * Returns text position inside the bounds
     * @returns text anchor type
     */
    getTextPosition(): AnchorType;
    /**
     * Sets text style
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * Returns text style
     */
    getTextStyle(): TextStyle | null;
    /**
     * Sets padding style
     * @param paddingStyle padding style
     * @param [merge] true if you want to merge paddingStyle with existing attribute, false by default
     * @returns this
     */
    setPaddingStyle(paddingStyle: SpaceStyle.Type, merge?: boolean): this;
    /**
     * Returns padding style
     * @returns padding
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Set auto height flag
     * @param enable flag
     * @returns this
     */
    setAutoHeight(enable: boolean): this;
    /**
     * Returns auto height flag
     */
    getAutoHeight(): boolean;
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
     * Set show ellipsis
     * @param showTextEllipsis if flag equal true then show ellipsis text
     * @returns this
     */
    setShowEllipsis(showTextEllipsis: boolean): this;
    /**
     * Returns ellipsis flag
     * @returns ellipsis flag
     */
    getShowEllipsis(): boolean;
    /**
     * Returns calculated bounds
     *
     * @param [context] Rendering Context
     */
    getBounds(context?: RenderingContext): Rect;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): LogAnnotation.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogAnnotation.Options): this;
}
export declare namespace LogAnnotation {
    /**
     * bounds of the visual or properties object
     */
    type Options = LogFrameVisual.Options & {
        /**
         * FillStyle
         */
        fillstyle?: FillStyle.Type;
        /**
         * Enables height of the frame to be fixed in the device coordinates
         */
        fixedheight?: boolean;
        /**
         * text to be displayed
         */
        text?: string;
        /**
         * the style of the text
         */
        textstyle?: TextStyle.Type;
        /**
         * Enum of size modes
         */
        textsizemode?: SizeMode;
        /**
         * text ellipsis
         */
        textellipsis?: boolean;
        /**
         * text auto rotation
         */
        textautorotation?: boolean;
        /**
         * text orientation
         */
        textorientation?: TextOrientation;
        /**
         * text alignment
         */
        textalignment?: TextAlignment;
        /**
         * text anchor type specified position of the text inside the bounds and
         * it can be placed in any one of 9 places. These values include LeftTop, TopCenter, RightTop, LeftCenter, Center,RightCenter, LeftBottom, BottomCenter, RightBottom
         */
        textposition?: AnchorType;
        /**
         * It has properties for specifying the padding for each side
         */
        padding?: SpaceStyle.Type;
        /**
         * auto height flag
         */
        autoheight?: boolean;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = LogFrameVisual.OptionsOut & {
        /**
         * text to be displayed
         */
        text: string;
        /**
         * the style of the text
         */
        textstyle: TextStyle;
        /**
         * Enum of size modes
         */
        textsizemode: SizeMode;
        /**
         * text ellipsis
         */
        textellipsis: boolean;
        /**
         * text orientation
         */
        textorientation: TextOrientation;
        /**
         * text auto rotation
         */
        textautorotation: boolean;
        /**
         * text alignment
         */
        textalignment: TextAlignment;
        /**
         * text anchor type specified position of the text inside the box
         */
        textposition: AnchorType;
        /**
         * It has properties for specifying the padding for each side
         */
        padding: SpaceStyle;
        /**
         * auto height flag
         */
        autoheight: boolean;
    };
}
