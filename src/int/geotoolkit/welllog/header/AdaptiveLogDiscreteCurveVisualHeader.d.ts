import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { AdaptiveLogVisualHeader } from '@int/geotoolkit/welllog/header/AdaptiveLogVisualHeader';
import type { LogDiscreteCurve } from '@int/geotoolkit/welllog/LogDiscreteCurve';
/**
 * Adaptive header for LogDiscreteCurve visual
 */
export declare class AdaptiveLogDiscreteCurveVisualHeader extends AdaptiveLogVisualHeader<LogDiscreteCurve> {
    /**
     * @param [options] visual or properties object
     */
    constructor(options?: AdaptiveLogDiscreteCurveVisualHeader.Options | LogDiscreteCurve);
    clone(): AdaptiveLogDiscreteCurveVisualHeader;
    protected copyConstructor(src: AdaptiveLogDiscreteCurveVisualHeader, deepCopy?: boolean): this;
    /**
     * Sets header orientation
     *
     * @param orientation header orientation
     * @returns this
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Returns header orientation
     */
    getOrientation(): Orientation;
    /**
     * Set the visibility of curve name
     * @param visible The visibility of the curve name
     */
    setCurveNameVisible(visible: boolean): this;
    /**
     * Gets visibility of curve name
     */
    getCurveNameVisible(): boolean;
    /**
     * Returns the number formatter for the min value
     */
    getMinValueFormat(): NumberFormat;
    /**
     * Returns the number formatter for the max value
     */
    getMaxValueFormat(): NumberFormat;
    /**
     * Sets the number formatter for the min value
     * @param format number format
     */
    setMinValueFormat(format: NumberFormat): this;
    /**
     * Sets the number formatter for the max value
     * @param format number format
     */
    setMaxValueFormat(format: NumberFormat): this;
    /**
     * Sets all properties
     * @param properties properties
     * @returns this
     */
    setProperties(properties?: AdaptiveLogDiscreteCurveVisualHeader.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns of the header
     */
    getProperties(): AdaptiveLogDiscreteCurveVisualHeader.OptionsOut;
}
export declare namespace AdaptiveLogDiscreteCurveVisualHeader {
    /**
     * visual or properties object
     */
    type Options = AdaptiveLogVisualHeader.Options<LogDiscreteCurve> & {
        /**
         * min value number format
         */
        minvalueformat?: NumberFormat;
        /**
         * max value number format
         */
        maxvalueformat?: NumberFormat;
        /**
         * header orientation
         */
        orientation?: Orientation;
        /**
         * the curve name visibility flag
         */
        curvenamevisible?: boolean;
    };
    /**
     * of the header
     */
    type OptionsOut = AdaptiveLogVisualHeader.OptionsOut<LogDiscreteCurve> & {
        /**
         * min value number format
         */
        minvalueformat: NumberFormat;
        /**
         * max value number format
         */
        maxvalueformat: NumberFormat;
        /**
         * orientation of the header
         */
        orientation: Orientation;
        /**
         * the curve name visibility flag
         */
        curvenamevisible: boolean;
    };
}
