import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Rectangle } from '@int/geotoolkit/scene/shapes/Rectangle';
import { Point } from '@int/geotoolkit/util/Point';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
/**
 * Defines text label with background.
 */
export declare class Label extends Rectangle {
    constructor(options?: Label.Options);
    clone(): Label;
    protected copyConstructor(src: Label, deepCopy?: boolean): this;
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
     * Set text style
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * The style associated with this label.
     *
     * @returns text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets padding style
     * @param paddingStyle padding style
     * @param [merge] true if you want to merge paddingStyle with existing attribute, false by default
     * @returns this
     */
    setPaddingStyle(paddingStyle: SpaceStyle | SpaceStyle.Options | string | number, merge?: boolean): this;
    /**
     * Return padding style
     * @returns padding
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Sets the anchor type.
     * @param anchorType anchor alignment
     * @returns this
     */
    setAlignment(alignment: AnchorType): this;
    /**
     * Returns the current anchor type.
     * @returns current anchor type
     */
    getAlignment(): AnchorType;
    /**
     * Set rotation angle
     * @param rotationAngle rotation angle (in radians) at anchor
     * @returns this
     */
    setRotationAngle(rotationAngle: number): this;
    /**
     * Returns rotation angle (in radians)
     * @returns rotationAngle rotation angle at anchor
     */
    getRotationAngle(): number;
    /**
     * Return anchored x position if any
     */
    getAnchorX(): number;
    /**
     * Sets x anchor position
     * @param ax anchor x position
     * @returns this
     */
    setAnchorX(ax: number): this;
    /**
     * Return anchored y position if any
     */
    getAnchorY(): number;
    /**
     * Sets y anchor position
     * @param ay anchor y position
     * @returns this
     */
    setAnchorY(ay: number): this;
    /**
     * Sets anchor point to given position
     *
     * @param p1 point or x coordinate
     * @param [p2] y coordinate
     * @returns this
     */
    setAnchor(p1: Point | number, p2?: number): this;
    /**
     * Gets the anchor
     */
    getAnchor(): Point;
    /**
     * Sets the anchor type.
     * @param alignment anchor alignment
     * @returns this
     */
    setAnchorType(anchorType: AnchorType): this;
    /**
     * Returns the current anchor type.
     * @returns current anchor type
     */
    getAnchorType(): AnchorType;
    /**
     * Sets device size in case if shape is in device space
     */
    setSize(width: Dimension | Dimension.Options | number, height?: number): this;
    /**
     * Returns user defined devise size (if exists)
     */
    getSize(): Dimension;
    /**
     * Sets whether the shape size is set in device space.
     *
     * @param sizeIsInDeviceSpace true if the shape size is fixed in device space; otherwise, false.
     * @returns this
     */
    setSizeIsInDeviceSpace(sizeIsInDeviceSpace: boolean): this;
    /**
     * Returns true if the shape size is set in device space
     * @returns true if size is defined in device space
     */
    getSizeIsInDeviceSpace(): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Label.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     */
    setProperties(properties?: Label.Options): this;
    /**
     * Check collision
     *
     * @param context Rendering Context
     * @returns true if object is inside of rendering area
     */
    checkCollision(context: RenderingContext): boolean;
}
export declare namespace Label {
    /**
     * options
     */
    type Options = Shape.Options & {
        /**
         * size is in device space
         */
        sizeisindevicespace?: boolean;
        /**
         * anchor type in case if label is in device space
         */
        anchortype?: AnchorType;
        /**
         * anchor x position in case if label is in device space
         */
        x?: number;
        /**
         * anchor y position in case if label is in device space
         */
        y?: number;
        /**
         * device or model width of the label, depends on sizeisindevicespace
         */
        width?: number;
        /**
         * device or model height of the label, depends on sizeisindevicespace
         */
        height?: number;
        /**
         * This defines if the rectangle has rounded border corners. 'radius' is the length denoting a radius for the rounded border of each corner.
         */
        radius?: number;
        /**
         * text to display
         */
        text?: string;
        /**
         * textStyle to display
         */
        textstyle?: TextStyle.Type;
        /**
         * It has properties for specifying the padding for each side of the Label
         */
        padding?: SpaceStyle | SpaceStyle.Options | string | number;
        /**
         * rotation angle at anchor
         */
        rotationangle?: number;
        /**
         * text position according to the model bounds
         */
        alignment?: AnchorType;
    };
    /**
     * object containing the properties
     */
    type OptionsOut = Rectangle.OptionsOut & {
        /**
         * size is in device space
         */
        sizeisindevicespace: boolean;
        /**
         * anchor type in case if label is in device space
         */
        anchortype: AnchorType;
        /**
         * anchor x in case if label is in device space
         */
        x?: number;
        /**
         * anchor y in case if label is in device space
         */
        y?: number;
        /**
         * device or model width of the label, depends on sizeisindevicespace
         */
        width?: number;
        /**
         * device or model height of the label, depends on sizeisindevicespace
         */
        height?: number;
        /**
         * text to display
         */
        text?: string;
        /**
         * textStyle to display
         */
        textstyle?: TextStyle;
        /**
         * padding for each side of the legend
         */
        padding?: SpaceStyle;
        /**
         * rotation angle at anchor
         */
        rotationangle?: number;
        /**
         * text position according to the model bounds
         */
        alignment?: AnchorType;
    };
}
