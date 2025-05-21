import { AbstractContourLabelingStrategy } from '@int/geotoolkit/contour/strategy/AbstractContourLabelingStrategy';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
/**
 * This is an abstract strategy class which defines how contour labels should be rendered.
 */
export declare class MajorMinorLabelingStrategy extends AbstractContourLabelingStrategy {
    /**
     * @param [options] labeling strategy properties
     */
    constructor(options?: MajorMinorLabelingStrategy.Options);
    /**
     * Sets show major labels
     * @param visible visible
     */
    setMajorLabelsVisible(visible: boolean): this;
    /**
     * Sets show major labels
     * @param visible visible
     */
    setMinorLabelsVisible(visible: boolean): this;
    /**
     * Gets show major labels
     */
    getMajorLabelsVisible(): boolean;
    /**
     * Gets show minor labels
     */
    getMinorLabelsVisible(): boolean;
    /**
     * Sets text style for major isolines
     * @param style style
     */
    setMajorTextStyle(style: TextStyle): this;
    /**
     * Sets text style for minor isolines
     * @param style style
     */
    setMinorTextStyle(style: TextStyle): this;
    /**
     * Gets text style for major isolines
     */
    getMajorTextStyle(): TextStyle;
    /**
     * Gets text style for minor isolines
     */
    getMinorTextStyle(): TextStyle;
    /**
     * Gets major label format
     */
    getMajorLabelFormat(): NumberFormat;
    /**
     * Gets minor label format
     */
    getMinorLabelFormat(): NumberFormat;
    /**
     * Sets major label format
     */
    setMajorLabelFormat(format: NumberFormat): this;
    /**
     * Sets minor label format
     */
    setMinorLabelFormat(format: NumberFormat): this;
    /**
     * Gets label margin for major isolines
     */
    getMajorLabelMargin(): number;
    /**
     * Sets label margin for major isolines
     * @param margin label margin
     */
    setMajorLabelMargin(margin: number): this;
    /**
     * Gets label margin for minor isolines
     */
    getMinorLabelMargin(): number;
    /**
     * Sets label margin for minor isolines
     * @param margin label margin
     */
    setMinorLabelMargin(margin: number): this;
    /**
     * Gets label spacing for major isolines
     */
    getMajorLabelSpacing(): number;
    /**
     * Gets label spacing for minor isolines
     */
    getMinorLabelSpacing(): number;
    /**
     * Sets label spacing for major isolines
     * @param spacing label spacing
     */
    setMajorLabelSpacing(spacing: number): this;
    /**
     * Sets label spacing for minor isolines
     * @param spacing label spacing
     */
    setMinorLabelSpacing(spacing: number): this;
    /**
     * Gets if use font color for major labels
     */
    getMajorUseFontColorForLabels(): boolean;
    /**
     * Sets if use font color for major labels
     * @param use use
     */
    setMajorUseFontColorForLabels(use: boolean): this;
    /**
     * Gets if use font color for minor labels
     */
    getMinorUseFontColorForLabels(): boolean;
    /**
     * Sets if use font color for minor labels
     * @param use use
     */
    setMinorUseFontColorForLabels(use: boolean): this;
    /**
     * Gets if level is major
     * @param i level index
     */
    isMajorLevel(i: number): boolean;
    /**
     * Gets if level is minor
     * @param i level index
     */
    isMinorLevel(i: number): boolean;
    /**
     * Gets step for major labels
     */
    getMajorStep(): number;
    /**
     * Gets step for major labels
     */
    getMinorStep(): number;
    /**
     * Sets step for major labels
     * @param step step
     */
    setMajorStep(step: number): this;
    /**
     * Sets step for minor labels
     * @param step step
     */
    setMinorStep(step: number): this;
    /**
     * Gets labeling strategy properties
     * @returns labeling strategy properties
     */
    getProperties(): MajorMinorLabelingStrategy.Options;
    /**
     * Sets labeling strategy properties
     * @param [props] labeling strategy properties
     * @returns this
     */
    setProperties(props?: MajorMinorLabelingStrategy.Options): this;
}
export declare namespace MajorMinorLabelingStrategy {
    /**
     * labeling strategy properties
     */
    type Options = AbstractContourLabelingStrategy.Options & OptionsBase;
    /**
     * labeling strategy properties
     */
    type OptionsBase = {
        /**
         * Major label text style
         */
        majortextstyle?: TextStyle;
        /**
         * Minor label text style
         */
        minortextstyle?: TextStyle;
        /**
         * Flag which indicates if font color is used for major label text color
         */
        majorusefontcolorforlabels?: boolean;
        /**
         * Flag which indicates if font color is used for minor label text color
         */
        minorusefontcolorforlabels?: boolean;
        /**
         * Major label format
         */
        majorlabelformat?: NumberFormat;
        /**
         * Minor label format
         */
        minorlabelformat?: NumberFormat;
        /**
         * Label format for major isolines
         */
        majorlabelmargin?: number;
        /**
         * Label format for minor isolines
         */
        minorlabelmargin?: number;
        /**
         * Label spacing for major isolines
         */
        majorlabelspacing?: number;
        /**
         * Label spacing for minor isolines
         */
        minorlabelspacing?: number;
        /**
         * Step for major labels
         */
        majorstep?: number;
        /**
         * Step for minor labels
         */
        minorstep?: number;
        /**
         * Major labels visibility
         */
        majorlabelsvisible?: boolean;
        /**
         * Minor labels visibility
         */
        minorlabelsvisible?: boolean;
    };
}
