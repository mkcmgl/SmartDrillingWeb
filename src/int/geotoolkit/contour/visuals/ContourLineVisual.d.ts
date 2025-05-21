import { AbstractVisual } from '@int/geotoolkit/contour/visuals/AbstractVisual';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import { EventType } from '@int/geotoolkit/contour/events/LineVisualEvent';
import type { AbstractContourLabelingStrategy } from '@int/geotoolkit/contour/strategy/AbstractContourLabelingStrategy';
import type { IsolineStylingStrategy } from '@int/geotoolkit/contour/strategy/IsolineStylingStrategy';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * The Line Visual. This renders the isolines and their labels.
 */
export declare class ContourLineVisual extends AbstractVisual {
    constructor(options?: ContourLineVisual.Options);
    on<E extends keyof ContourLineVisual.EventMap>(type: E, callback: (eventType: E, sender: this, args: ContourLineVisual.EventMap[E]) => void): this;
    off<E extends keyof ContourLineVisual.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ContourLineVisual.EventMap[E]) => void): this;
    notify<E extends keyof ContourLineVisual.EventMap>(type: E, source: ContourLineVisual, args?: ContourLineVisual.EventMap[E]): this;
    /**
     * Sets the visibility for all isolines
     * @param visible Flag for determining if isolines should be visible.
     * @returns this
     */
    setLinesVisible(visible: boolean): this;
    /**
     * Gets the visibility of all isolines
     * @returns isolinesVisible True of all isolines should be visible.
     */
    getLinesVisible(): boolean;
    /**
     * Sets the visibility for all isolines
     * @param visible Flag for determining if labels should be visible.
     * @returns this
     */
    setLabelsVisible(visible: boolean): this;
    /**
     * Gets the visibility of all isolines
     * @returns isolinesVisible True of all labels should be visible.
     */
    getLabelsVisible(): boolean;
    /**
     * Gets the index step for the line visual. Only contour lines with (index = step * i) will be displayed.
     * Where 'i' iterates through all available line indices.
     * @returns step Integer step interval
     */
    getIndexStep(): number;
    /**
     * Sets the index step for the line visual. Only contour lines with (index = step * i) will be displayed.
     * Where 'i' iterates through all available line indices.
     * @param step Integer step interval
     * @returns this
     */
    setIndexStep(step: number): this;
    /**
     * Gets the label spacing. This is the space between nearby labels on an isoLine.
     * Distance is specified in device space. Default is 200.
     * @returns spacing The label spacing.
     */
    getLabelSpacing(): number;
    /**
     * Sets the label spacing. This is the space between nearby labels on an isoLine.
     * Distance is specified in device space. Default is 200.
     * @param spacing The label spacing.
     * @returns this
     */
    setLabelSpacing(spacing: number): this;
    /**
     * Gets the label margin. The margin is specified in device coordinates. Default is 5.
     * @returns margin The margin around labels in device coordinates.
     */
    getLabelMargin(): number;
    /**
     * Sets the label margin. The margin is specified in device coordinates. Default is 5.
     * @param margin The margin around labels in device coordinates.
     * @returns this
     */
    setLabelMargin(margin: number): this;
    /**
     * Gets label format.
     * @returns format
     */
    getLabelFormat(): NumberFormat;
    /**
     * Sets label format.
     * @param format format
     * @returns this
     */
    setLabelFormat(format: NumberFormat): this;
    /**
     * Gets the current LineStyle that is used to draw the isolines of this
     * line visual. The "line color" property of the attribute is ignored because it
     * is set directly from the colorMap. I.e. set such properties as "line style",
     * and they will be applied globally to all isolines in this visual, regardless of color.
     * @returns lineStyle The line style.
     */
    getLineStyle(): LineStyle;
    /**
     * Sets the current LineStyle that is used to draw the isolines of this
     * line visual. The "line color" property of the attribute is ignored because it
     * is set directly from the colorMap. I.e. set such properties as "line style",
     * and they will be applied globally to all isolines in this visual, regardless of color.
     * @param lineStyle The line style.
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle): this;
    /**
     * Reset label grid mapping. The grid mapping is used for mapping triangle grid to model space.
     */
    resetLabelGridMapping(): void;
    /**
     * Gets the current text style attribute that is used to draw the labels for this
     * line visual. The "line color" property of the attribute is ignored because it
     * is set directly from the colormap. I.e. set such properties as "font style",
     * and they will be applied globally to all isolines in this visual, regardless of color.
     * @returns textStyle The text style.
     */
    getTextStyle(): TextStyle;
    /**
     * Sets the current text style attributes that is used to draw the labels for this line visual.
     * @param textStyle The text style.
     * @returns this
     */
    setTextStyle(textStyle: TextStyle): this;
    /**
     * Sets the flag which indicates if font color should be used for label text color.
     * @param useFontColor Flag which indicates if font color should be used for label text color.
     * @returns this
     */
    setUseFontColorForLabels(useFontColor: boolean): this;
    /**
     * Gets the flag which indicates if font color is used for label text color.
     * @returns useFontColor Flag which indicates if font color is used for label text color.
     */
    getUseFontColorForLabels(): boolean;
    /**
     * Gets the labeling strategy.
     * @returns strategy The labeling strategy.
     */
    getLabelingStrategy(): AbstractContourLabelingStrategy;
    /**
     * Sets the labeling strategy.
     * @param strategy The labeling strategy.
     * @returns this
     */
    setLabelingStrategy(strategy: AbstractContourLabelingStrategy): this;
    /**
     * Sets the isolines styling strategy. If set, style set in setLineStyle will be ignored. The "line color" property of the styles will override colorMap.
     * @param strategy strategy
     * @returns this
     */
    setIsolinesStylingStrategy(strategy: IsolineStylingStrategy): this;
    /**
     * Gets the isolines styling strategy
     */
    getIsolinesStylingStrategy(): IsolineStylingStrategy;
    /**
     * Use this property to set the local reference to the line reservation array.
     * This array is actually stored in the contour shape, and is passed to each line visual.
     * All the elements of the array
     * 'reservation[lineIndex] = Math.Max( reservation[lineIndex], GetIndexStep() )'
     * Later, the implementation of the line visual may decide if
     * the isoline with some particular index should be drawn using
     * 'GetLineReservationFor' and 'GetIndexStep'
     * methods. Hence, major and minor isolines can be supported.
     * @param lineReservation The line reservation
     * @returns this
     */
    setLineReservation(lineReservation: Int32Array | number[]): this;
    /**
     * Find the line reservation value for the isoline with the specified index.
     * This is used to determine if a particular isoline should be drawn.
     * @throws if Index out of range
     * @param index Index for which line reservation should be computed.
     * @returns lineReservation The computed line reservation value.
     */
    getLineReservationFor(index: number): number;
    render(renderingContext: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns visual properties
     */
    getProperties(): ContourLineVisual.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: ContourLineVisual.Options): this;
}
export declare namespace ContourLineVisual {
    /**
     * An object containing the properties to set
     */
    type Options = AbstractVisual.Options & {
        /**
         * Visibility of all isolines
         */
        linesvisible?: boolean;
        /**
         * Visibility of labels
         */
        labelsvisible?: boolean;
        /**
         * Index step for line visual
         */
        indexstep?: number;
        /**
         * Label spacing between nearby labels on a isoline
         */
        labelspacing?: number;
        /**
         * Margin around labels in device coordinates
         */
        labelmargin?: number;
        /**
         * Label format
         */
        labelformat?: NumberFormat;
        /**
         * Style of line that is used to draw the isolines
         */
        linestyle?: LineStyle;
        /**
         * Text style attribute that is used to draw the labels
         */
        textstyle?: TextStyle;
        /**
         * Flag which indicates if font color is used for label text color
         */
        usefontcolorforlabels?: boolean;
        /**
         * Labeling strategy
         */
        labelingstrategy?: AbstractContourLabelingStrategy;
        /**
         * Isolines styling strategy
         */
        isolinesstylingstrategy?: IsolineStylingStrategy;
    };
    /**
     * visual properties
     */
    type OptionsOut = AbstractVisual.OptionsOut & {
        /**
         * Visibility of all isolines
         */
        linesvisible?: boolean;
        /**
         * Visibility of labels
         */
        labelsvisible?: boolean;
        /**
         * Index step for line visual
         */
        indexstep?: number;
        /**
         * Label spacing between nearby labels on a isoline
         */
        labelspacing?: number;
        /**
         * Margin around labels in device coordinates
         */
        labelmargin?: number;
        /**
         * Label format
         */
        labelformat?: NumberFormat;
        /**
         * Text style attribute that is used to draw the labels
         */
        textstyle?: TextStyle;
        /**
         * Flag which indicates if font color is used for label text color
         */
        usefontcolorforlabels?: boolean;
        /**
         * Labeling strategy
         */
        labelingstrategy?: AbstractContourLabelingStrategy;
        /**
         * Isolines styling strategy
         */
        isolinesstylingstrategy?: IsolineStylingStrategy;
    };
    type EventMap = AbstractVisual.EventMap & {
        [EventType.STEP_CHANGED]: void;
        [EventType.SPACING_CHANGED]: void;
        [EventType.MARGIN_CHANGED]: void;
        [EventType.FORMAT_CHANGED]: void;
    };
}
