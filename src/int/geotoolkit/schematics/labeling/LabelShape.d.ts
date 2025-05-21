import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { LabelData } from '@int/geotoolkit/schematics/labeling/LabelData';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Text } from '@int/geotoolkit/scene/shapes/Text';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * Abstract label shape representation
 */
export declare abstract class LabelShape extends CompositeNode {
    protected constructor(options?: LabelShape.Options);
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): LabelShape.OptionsOut;
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: LabelShape.Options): this;
    clone(): LabelShape;
    protected copyConstructor(src: LabelShape, deepCopy?: boolean): this;
    /**
     * Sets graphic style
     * @param options options
     * @returns this
     */
    setStyle(options: LabelShape.StyleOptions): this;
    /**
     * Gets label text shape
     */
    getLabelText(): Text;
    /**
     * Gets label data
     */
    getLabelData(): LabelData;
    /**
     * Sets label data
     * @param labelData label data
     * @returns this
     */
    abstract setLabelData(labelData: LabelData): this;
    /**
     * Sets label shape styles handler: custom styles can be used for shape.
     * @param handler handler
     * @returns this
     * @example
     * import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
     * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
     * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
     * widget.getLabelingStrategy().getOptions()['labelShape'].setStylesHandler((nodeOptions) => ({
     *     'fillstyle': new FillStyle(nodeOptions['node'].getName() === 'cement' ? 'green' : 'blue'),
     *     'linestyle': new LineStyle(nodeOptions['node'].getName() === 'cement' ? 'green' : 'blue'),
     *     'textstyle': new TextStyle(nodeOptions['text'].includes('tubing') ? {'color': 'red', 'font': '16px sans-serif'} :
     *         {'color': 'black', 'font': '14px sans-serif'})
     * }));
     */
    setStylesHandler(handler: LabelShape.StylesHandler | null): this;
    /**
     * Gets styles handler
     */
    getStylesHandler(): LabelShape.StylesHandler | null;
    /**
     * Renders itself
     * @param context Rendering Context
     */
    abstract render(context: RenderingContext): void;
    /**
     * Gets bounding box in model space
     * @param transformation scene transformation
     * @param [isHorizontal] horizontal flag
     */
    abstract getBoundingBox(transformation?: Transformation, isHorizontal?: boolean): Rect;
}
export declare namespace LabelShape {
    type Options = CompositeNode.Options & {
        /**
         * label shape styles handler: custom styles can be used for shape.
         */
        styleshandler?: StylesHandler;
    };
    /**
     * properties
     */
    type OptionsOut = CompositeNode.OptionsOut & {
        /**
         * label shape styles handler: custom styles can be used for shape.
         */
        styleshandler?: StylesHandler;
    };
    /**
     * options
     */
    type StyleOptions = {
        /**
         * define style class name, see cssstyle.html tutorial
         */
        cssclass?: string;
        /**
         * line style
         */
        linestyle?: LineStyle.Type;
        /**
         * fill style
         */
        fillstyle?: FillStyle.Type;
    };
    type StylesHandler = (options: {
        node: ComponentNode;
        text: string;
    }) => {
        linestyle: LineStyle;
        fillstyle: FillStyle;
        textstyle?: TextStyle;
    };
}
