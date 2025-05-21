import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * This is an abstract strategy class which defines how contour labels should be rendered.
 */
export declare class AbstractContourLabelingStrategy {
    /**
     * @param [options] labeling strategy properties
     */
    constructor(options?: AbstractContourLabelingStrategy.Options);
    /**
     * Returns if labels of specified level should be drawn
     * @param level level
     */
    getLabelsVisible(level: number): boolean;
    /**
     * Gets the labeling scale factor
     * @param modelToDevice Model to device transformation.
     * @param modelLimits Model limits of the contour.
     * @param height Height of non-scaled label in device coordinate space.
     * @returns scale The label scale.
     */
    getLabelScale(modelToDevice: Transformation, modelLimits: Rect, height: number): number;
    /**
     * Desired number of labels on the isoline
     * @param modelToDevice Model to device transformation.
     * @param modelLimits Model limits of the contour.
     * @param isolineLength Length of isoline in device coordinate space.
     * @param labelGap Length of gap for a label on isoline in device coordinate space.
     * @returns count The label count.
     */
    getDesiredLabelCount(modelToDevice: Transformation, modelLimits: Rect, isolineLength: number, labelGap: number): number;
    /**
     * Gets text style for specified level
     * @param [level] level index
     */
    getTextStyle(level?: number): TextStyle;
    /**
     * Gets label spacing for specified level
     * @param [level] level index
     */
    getLabelSpacing(level?: number): number;
    /**
     * Gets label margin for specified level
     * @param [level] level index
     */
    getLabelMargin(level?: number): number;
    /**
     * Gets the flag which indicates if font color is used for label text color.
     * @param [level] level index
     * @returns useFontColor Flag which indicates if font color is used for label text color.
     */
    getUseFontColorForLabels(level?: number): boolean;
    /**
     * Gets label format.
     * @param [level] level index
     * @returns format
     */
    getLabelFormat(level?: number): NumberFormat;
    /**
     * Sets label format.
     * @param [format] format
     * @returns this
     */
    setLabelFormat(format: NumberFormat): this;
    /**
     * Gets labeling strategy properties
     * @returns labeling strategy properties
     */
    getProperties(): AbstractContourLabelingStrategy.Options;
    /**
     * Sets labeling strategy properties
     * @param [props] labeling strategy properties
     * @returns this
     */
    setProperties(props?: AbstractContourLabelingStrategy.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractContourLabelingStrategy {
    /**
     * labeling strategy properties
     */
    type Options = {
        /**
         * The text style for specified level
         */
        textstyle?: TextStyle;
        /**
         * The label spacing for specified level
         */
        labelspacing?: number;
        /**
         * The label margin for specified level
         */
        labelmargin?: number;
        /**
         * Flag which indicates if font color is used for label text color
         */
        usefontcolorforlabels?: boolean;
        /**
         * Label format
         */
        labelformat?: NumberFormat;
    };
}
