import { LabelShape } from '@int/geotoolkit/schematics/labeling/LabelShape';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import type { LabelData } from '@int/geotoolkit/schematics/labeling/LabelData';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
/**
 * Default label shape implementation
 *
 * @deprecated since 4.0 Use {@link @int/geotoolkit/schematics/labeling/SymbolLabelShape~SymbolLabelShape} instead.
 */
export declare class DefaultLabelShape extends LabelShape {
    /**
     * @param [options] options
     */
    constructor(options?: DefaultLabelShape.Options);
    clone(): DefaultLabelShape;
    protected copyConstructor(src: DefaultLabelShape, deepCopy?: boolean): this;
    /**
     * Returns all the properties pertaining to this object
     *
     * @returns options
     */
    getProperties(): DefaultLabelShape.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [options] options
     * @returns this
     */
    setProperties(options?: DefaultLabelShape.Options): this;
    /**
     * Gets label rectangle shape
     */
    getLabelRectangle(): Shape;
    setLabelData(labelData: LabelData): this;
    render(context: RenderingContext): void;
    getBoundingBox(transformation: Transformation, isHorizontal?: boolean): Rect;
    /**
     * Return padding style
     * @returns padding
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Sets padding style
     * @param paddingStyle padding style
     */
    setPaddingStyle(paddingStyle: SpaceStyle | object): this;
}
export declare namespace DefaultLabelShape {
    /**
     * options
     */
    type Options = LabelShape.Options & {
        /**
         * It has properties for specifying the padding for each side
         */
        padding?: {
            /**
             * top padding
             */
            top?: number | string;
            /**
             * top padding
             */
            bottom?: number | string;
            /**
             * right padding
             */
            right?: number | string;
            /**
             * left padding
             */
            left?: number | string;
        } | SpaceStyle;
        /**
         * It has properties for specifying label shape
         */
        labelshape?: {
            /**
             * label shape linestyle
             */
            linestyle?: LineStyle;
            /**
             * label shape fillstyle
             */
            fillstyle?: FillStyle;
        };
        /**
         * It has properties for specifying label textstyle
         */
        labeltextstyle?: TextStyle;
    };
    /**
     * options
     */
    type OptionsOut = LabelShape.OptionsOut & {
        /**
         * It has properties for specifying the padding for each side
         */
        padding?: SpaceStyle;
        /**
         * It has properties for specifying label shape
         */
        labelshape?: {
            /**
             * label shape linestyle
             */
            linestyle?: LineStyle;
            /**
             * label shape fillstyle
             */
            fillstyle?: FillStyle;
        };
        /**
         * It has properties for specifying label textstyle
         */
        labeltextstyle?: TextStyle;
    };
}
