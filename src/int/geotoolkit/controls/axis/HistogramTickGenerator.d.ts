import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * Histogram labeling strategy
 * @enum
 * @readonly
 */
export declare enum LabelStrategy {
    /**
     * Tick marks are on the edges of bins
     */
    Edge = "Edge",
    /**
     * Tick Marks are in the center of bins and show a range for the bin
     */
    Range = "Range",
    /**
     * Tick Marks are in the center of bins and show the center bin value
     */
    Center = "Center"
}
/**
 * Defines a tick Generator for the histogram Shape
 */
export declare class HistogramTickGenerator extends TickGenerator {
    constructor(options?: HistogramTickGenerator.Options | number);
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: HistogramTickGenerator.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): HistogramTickGenerator.OptionsOut;
    /**
     * Sets major label format
     * @param format major label format
     * @returns this
     */
    setMajorLabelFormat(format: NumberFormat): this;
    /**
     * Return major label format
     */
    getMajorLabelFormat(): NumberFormat;
    /**
     * Sets bin count
     * @param binCount number of bins this histogram has
     * @returns this
     */
    setBinCount(binCount: number): this;
    /**
     * Sets the label strategy
     * @param strat label strategy
     * @returns this
     */
    setLabelStrategy(strat: LabelStrategy): this;
    /**
     * Gets the label strategy
     */
    getLabelStrategy(): LabelStrategy;
    /**
     * sets the minimum span distance for labels and ticks
     * @param span minimum span distance for labels and ticks
     * @returns this
     */
    setMinimumSpan(span: number): this;
    /**
     * gets the minimum span distance for labels and ticks
     */
    getMinimumSpan(): number;
    clone(): HistogramTickGenerator;
    protected copyConstructor(src: HistogramTickGenerator, deepCopy?: boolean): this;
    /**
     * Set rotation strategy
     * @param value rotate labels or not
     */
    setRotateLabels(value: boolean): this;
}
export declare namespace HistogramTickGenerator {
    /**
     * An object containing the properties to set
     */
    type Options = TickGenerator.Options & {
        /**
         * label strategy
         */
        labelstrategy?: LabelStrategy;
        /**
         * minimum span distance for labels and ticks
         */
        minimumspan?: number;
        /**
         * number of bins this histogram has
         */
        bins?: number;
        /**
         * rotate labels
         */
        rotatelabels?: boolean;
        major?: {
            labelformat?: NumberFormat;
            tickstyle?: LineStyle.Type;
            labelstyle?: TextStyle.Type;
        };
        minor?: {
            labelformat?: NumberFormat;
            tickstyle?: LineStyle.Type;
            labelstyle?: TextStyle.Type;
        };
        edge?: {
            labelformat?: NumberFormat;
            tickstyle?: LineStyle.Type;
            labelstyle?: TextStyle.Type;
        };
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = TickGenerator.OptionsOut & {
        /**
         * label strategy
         */
        labelstrategy: LabelStrategy;
        /**
         * minimum span distance for labels and ticks
         */
        minimumspan: number;
        /**
         * number of bins this histogram has
         */
        bins: number;
        /**
         * rotate labels
         */
        rotatelabels: boolean;
    };
}
