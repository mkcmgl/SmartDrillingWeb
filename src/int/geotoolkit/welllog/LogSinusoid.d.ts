import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { ApparentDipData } from '@int/geotoolkit/welllog/data/ApparentDipData';
import type { Point } from '@int/geotoolkit/util/Point';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Sinusoid visual
 * Note that depth is used in the meaning of centered depth
 */
export declare class LogSinusoid extends LogAbstractVisual {
    /**
     * Constructor
     * @param [options] options
     */
    constructor(options?: LogSinusoid.Options);
    clone(): LogSinusoid;
    protected copyConstructor(src: LogSinusoid, deepCopy?: boolean): this;
    /**
     * Sets sinusoid style handler: custom colors can be used for different data samples.
     * @param stylingHandler handler has {@link @int/geotoolkit/welllog/data/ApparentDipData~ApparentDipData} argument and should return {@link @int/geotoolkit/attributes/LineStyle~LineStyle}
     * @returns this
     */
    setLineStyleHandler(stylingHandler: LogSinusoid.LineStyleHandler | null): this;
    /**
     * Gets styling handler
     */
    getLineStyleHandler(): LogSinusoid.LineStyleHandler | null;
    /**
     * Add sample.
     * @param sample sample
     * @returns this
     */
    addSample(sample: ApparentDipData): this;
    /**
     * Set data
     * @param data data
     * @returns this
     */
    setData(data: ApparentDipData[]): this;
    /**
     * Get data
     * @returns data data
     */
    getData(): ApparentDipData[];
    /**
     * Returns angle unit
     */
    getAngleUnit(): AbstractUnit;
    /**
     * Sets angle unit: 'rad' / 'deg'.
     *
     * @param unit unit
     * @returns this
     */
    setAngleUnit(unit: AbstractUnit | string): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogSinusoid.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogSinusoid.Options): this;
    /**
     * Delete sample.
     * @param sample sample
     */
    removeSample(sample: ApparentDipData): this;
    render(context: RenderingContext): void;
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns a collection of selected data
     */
    hitTest(area: Rect | Point, radius?: number): ApparentDipData[];
}
export declare namespace LogSinusoid {
    /**
     * options
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * data
         */
        data?: ApparentDipData[];
        /**
         * unit of angles in data: 'rad', 'deg'. If not set, normalized [0, 1] will be used
         */
        angleunit?: AbstractUnit | string;
        /**
         * sinusoid style handler: custom colors can be used for different data samples. Handler should return {@link @int/geotoolkit/attributes/LineStyle~LineStyle}
         */
        linestylehandler?: LineStyleHandler;
    };
    type LineStyleHandler = (data: ApparentDipData) => LineStyle;
    /**
     * properties object
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * data
         */
        data: ApparentDipData[];
        /**
         * angle unit: 'rad' / 'deg'
         */
        angleunit: AbstractUnit;
        /**
         * sinusoid style handler: custom colors can be used for different data samples. Handler should return {@link @int/geotoolkit/attributes/LineStyle~LineStyle}
         */
        linestylehandler?: LineStyleHandler;
    };
}
