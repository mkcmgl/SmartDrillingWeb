/**
 * @module geotoolkit3d/scene/Text2d
 */
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Sprite, Vector2, Vector3 } from 'three';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
/**
 * This class implements text as a 2D sprite.<br>
 * A 2D text is a text that will always face the camera and that is horizontal.<br>
 * Internally it uses a texture created using a regular canvas.<br>
 * <br>
 * It also offers a 'fixed size' mode that force the text to be always the same size on screen.<br>
 * Note that this mode introduces some blurriness as the texture is rescaled by the graphic card on the fly.<br>
 * If outline is set, the original font style might be overwritten.
 */
export declare class Text2d extends Sprite {
    constructor(text: string, options?: Text2d.Options);
    /**
     * Set text outline, or disable outline.
     * @param outlineOpt outline options
     */
    setOutline(outlineOpt: Text2d.OutlineOptions): void;
    /**
     * Gets text
     */
    getText(): string;
    /**
     * Sets text
     * @param text text
     * @returns this
     */
    setText(text: string): this;
    /**
     * Gets text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text style
     * @param textStyle text style
     * @returns this
     */
    setTextStyle(textStyle: TextStyle): this;
    /**
     * The given xyz vector will be used when computing the text location after scaling.<br>
     * It will translate the text in the given direction by half the text size.<br>
     *
     * finalPosition = position + anchorOffsetRatio * (sizeInDevice/2 + offsetInDevice)
     *
     * @param ratio The anchor offset factor to be applied when computing offset
     * @returns this
     */
    setAnchorOffsetRatio(ratio: Vector3): this;
    /**
     * The given xyz vector will be used when computing the text location after scaling.<br>
     * It will be added to the offset value.<br>
     *
     * finalPosition = position + anchorOffsetRatio * (sizeInDevice/2 + offsetInDevice)
     *
     * @param offset The anchor offset in device to be applied when computing offset
     * @returns this
     */
    setAnchorOffset(offset: Vector2): this;
    /**
     * Dispose this object
     */
    dispose(): void;
}
export declare namespace Text2d {
    /**
     * options object
     */
    type Options = {
        /**
         * text style
         */
        style?: TextStyle;
        /**
         * font
         */
        font?: string;
        /**
         * text color
         */
        color?: string | RgbaColor;
        /**
         * True if the text should always be drawn with the same size, no matter of how far it is
         */
        issizeindevice?: boolean;
        /**
         * if provided, text will have outline
         */
        outline?: OutlineOptions;
        dontmanuallyupdate?: boolean;
    };
    /**
     * outline options
     */
    type OutlineOptions = {
        /**
         * set to false to remove current outline
         */
        enable?: boolean;
        /**
         * inner color for text with outline
         */
        innercolor?: string | CanvasGradient | CanvasPattern;
        /**
         * outline color for text with outline
         */
        outlinecolor?: string | CanvasGradient | CanvasPattern;
        /**
         * outline thickness
         */
        thickness?: number;
    };
}
