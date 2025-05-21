import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
/**
 * @enum
 * @readonly
 */
export declare enum BorderStyle {
    FixedBounds = "FixedBounds",
    VisibleBounds = "VisibleBounds",
    InnerBounds = "InnerBounds",
    VisibleWidth = "VisibleWidth",
    VisibleHeight = "VisibleHeight",
    ModelBounds = "ModelBounds",
    Bounds = "Bounds"
}
/**
 * Defines shape to draw a dynamic snapped rectangle which can be used to draw borders
 */
export declare class Border extends ScaledShape {
    /**
     * @param [options] options object
     * @param [fillstyle] style applied on fill
     */
    constructor(options?: Border.Options, fillstyle?: FillStyle | string | FillStyle.Options);
    /**
     * Sets the border style
     * @param style border style
     */
    setBorderStyle(style: BorderStyle): this;
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: Border): this;
    /**
     * Returns borders visibility
     * @returns JSON which defines border settings
     */
    getBorders(): Border.Visible;
    /**
     * Sets borders state
     * @param borders JSON which defines border settings
     * @returns this
     */
    setBorders(borders: Border.Visible): this;
    render(context: RenderingContext): void;
    /**
     * Returns bounds
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * Sets bounds
     * @param bounds bounds of the shape
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Border.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: Border.Options): this;
    /**
     * Sets line styles
     * @param styles object with line styles
     * @returns this
     */
    setLineStyles(styles: Border.Styles): this;
    /**
     * Gets line styles
     * @returns line styles
     */
    getLineStyles(): Border.Styles | null;
}
export declare namespace Border {
    /**
     * options object
     */
    type Options = Shape.Options & {
        /**
         * style applied on borders, by default is `{'left': true, 'right': true, 'bottom': true, 'top': true}`
         */
        borders?: Visible;
        /**
         * style applied on borders
         */
        borderstyle?: BorderStyle;
        /**
         * object with line styles
         */
        linestyles?: Styles;
    };
    type Visible = {
        /**
         * visibility of top part
         */
        top?: boolean;
        /**
         * visibility of bottom part
         */
        bottom?: boolean;
        /**
         * visibility of left part
         */
        left?: boolean;
        /**
         * visibility of right part
         */
        right?: boolean;
    };
    /**
     * object with line styles
     */
    type Styles = {
        /**
         * left border style
         */
        left?: LineStyle.Type;
        /**
         * right border style
         */
        right?: LineStyle.Type;
        /**
         * top border style
         */
        top?: LineStyle.Type;
        /**
         * bottom border style
         */
        bottom?: LineStyle.Type;
    };
    /**
     * properties
     */
    type OptionsOut = Shape.OptionsOut & {
        /**
         * borders
         */
        borders?: Visible;
        /**
         * border style to be set
         */
        borderstyle?: BorderStyle;
        /**
         * object with line styles
         */
        linestyles?: Styles;
    };
}
