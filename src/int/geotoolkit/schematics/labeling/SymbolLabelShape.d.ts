import { LabelShape } from '@int/geotoolkit/schematics/labeling/LabelShape';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { LabelData } from '@int/geotoolkit/schematics/labeling/LabelData';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * Symbol label shape implementation
 */
export declare class SymbolLabelShape extends LabelShape {
    constructor(options?: SymbolLabelShape.Options);
    protected copyConstructor(src: SymbolLabelShape, deepCopy?: boolean): this;
    /**
     * Gets label symbol shape
     */
    getLabelSymbol(): SymbolShape;
    setLabelData(labelData: LabelData): this;
    getProperties(): SymbolLabelShape.OptionsOut;
    setProperties(options?: SymbolLabelShape.Options): this;
    render(context: RenderingContext): void;
    getBoundingBox(transformation?: Transformation, isHorizontal?: boolean): Rect;
}
export declare namespace SymbolLabelShape {
    /**
     * options
     */
    type Options = LabelShape.Options & {
        /**
         * painter to draw label
         */
        painter?: SymbolShape.Painter;
        /**
         * size of symbol, used in legend mode
         */
        size?: number;
        /**
         * It has properties for specifying label shape
         */
        labelshape?: {
            /**
             * label shape linestyle
             */
            linestyle?: LineStyle.Type;
            /**
             * label shape fillstyle
             */
            fillstyle?: FillStyle.Type;
        };
        /**
         * It has properties for specifying label textstyle
         */
        labeltextstyle?: TextStyle.Type;
    };
    /**
     * options
     */
    type OptionsOut = LabelShape.OptionsOut & {
        /**
         * size of symbol, used in legend mode
         */
        size: number;
        /**
         * label painter
         */
        painter: SymbolShape.Painter;
        /**
         * It has properties for specifying label shape
         */
        labelshape: {
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
