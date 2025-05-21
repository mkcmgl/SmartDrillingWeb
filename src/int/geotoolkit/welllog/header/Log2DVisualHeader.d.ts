import { Log2DVisual } from '@int/geotoolkit/welllog/Log2DVisual';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Format } from '@int/geotoolkit/util/Format';
/**
 * Define visual to render curve header
 * @deprecated 4.0. Use {@link @int/geotoolkit/welllog/header/AdaptiveLog2DVisualHeader~AdaptiveLog2DVisualHeader} instead.
 */
export declare class Log2DVisualHeader extends LogVisualHeader {
    /**
     * @param [options] visual for the header
     */
    constructor(options?: Log2DVisualHeader.Options | Node | Log2DVisual);
    clone(): Log2DVisualHeader;
    protected copyConstructor(src: Log2DVisualHeader, deepCopy?: boolean): this;
    /**
     * Sets a current text style for displayed value
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     */
    setDisplayValueTextStyle(textStyle: TextStyle.Options | string | TextStyle | null, merge?: boolean): this;
    /**
     * Return a current text style for displayed value
     */
    getDisplayValueTextStyle(): TextStyle;
    /**
     * Return true if the representation is flipped horizontally
     *
     * @returns horizontal flip
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     *
     * @param enable enable flip
     * @returns this
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * <code>getWorldTransform</code> retrieves the local transformation
     * of the node which represents multiplication of parent to bounds and
     * contents transformations.
     */
    getWorldTransform(): Transformation;
    render(inputContext: RenderingContext): void;
    /**
     * Fill the rectangle (model limits)
     *
     * @param context Rendering Context
     */
    fillRectangle(context: RenderingContext): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): Log2DVisualHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Log2DVisualHeader.Options): this;
    /**
     * Returns the number formatter for the min value
     */
    getMinValueFormat(): Format;
    /**
     * Returns the number formatter for the max value
     */
    getMaxValueFormat(): Format;
    /**
     * Sets the number formatter for the min value
     * @param format number format
     */
    setMinValueFormat(format: Format): this;
    /**
     * Sets the number formatter for the max value
     * @param format number format
     */
    setMaxValueFormat(format: Format): this;
}
export declare namespace Log2DVisualHeader {
    /**
     * visual for the header
     */
    type Options = LogVisualHeader.Options & {
        /**
         * Text Style
         */
        displayvaluetextstyle?: TextStyle | string | object;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = LogVisualHeader.OptionsOut & {
        /**
         * Text Style
         */
        displayvaluetextstyle: TextStyle;
    };
}
