/**
 * @module geotoolkit/seismic/axis/IndexTickGenerator
 */
import { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import { Format } from '@int/geotoolkit/util/Format';
/**
 * An enumeration defining display value type
 * @enum
 * @readonly
 */
export declare enum DisplayValueType {
    /**
     * Original
     */
    Original = "Original",
    /**
     * Mapped
     */
    Mapped = "Mapped"
}
/**
 * Defines a simple tick generator for seismic axis. This tick generator is specialized to display ticks for seismic shapes.
 */
export declare class IndexTickGenerator extends TickGenerator {
    constructor(options?: IndexTickGenerator.Options | SeismicPipeline);
    clone(): IndexTickGenerator;
    protected copyConstructor(src: IndexTickGenerator, deepCopy?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): IndexTickGenerator.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: IndexTickGenerator.Options): this;
    /**
     * Sets label format
     * @param format format
     * @returns this
     */
    setLabelFormat(format: Format): this;
    /**
     * Returns label format
     */
    getLabelFormat(): Format;
    /**
     * Sets format label handler
     * @param handler Function called to generate the label of a value. {@link @int/geotoolkit/util/Format~Format} type is deprecated since 4.0 use .setLabelFormat() instead
     * @returns this
     */
    setFormatLabelHandler(handler: TickGenerator.LabelFormatHandler | Format): this;
    /**
     * Returns min device step
     */
    getMinimumSpan(): number;
    /**
     * Set min device step
     * @param minimumSpan min span between ticks
     * @returns this
     */
    setMinimumSpan(minimumSpan: number): this;
    /**
     * returns active pipeline
     * @returns pipeline
     */
    getPipeline(): SeismicPipeline;
    /**
     * set pipeline
     * @param pipeline Seismic Pipeline
     * @returns this
     */
    setPipeline(pipeline: SeismicPipeline): this;
    /**
     * returns type of display value
     * @returns pipeline
     */
    getDisplayValueType(): DisplayValueType;
    /**
     * set type of display value, support Original(trace number) and Mapped(trace position)
     * @param displayValueType type of display value
     * @returns this
     */
    setDisplayValueType(displayValueType: DisplayValueType): this;
}
export declare namespace IndexTickGenerator {
    /**
     * An object containing the properties to set
     */
    type Options = TickGenerator.Options & {
        /**
         * minimum span distance for labels and ticks
         */
        minimumspan?: number;
        /**
         * display value type
         */
        displayvaluetype?: DisplayValueType;
        /**
         * seismic pipeline
         */
        pipeline?: SeismicPipeline;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = TickGenerator.OptionsOut & {
        /**
         * minimum span distance for labels and ticks
         */
        minimumspan: number;
        /**
         * display value type
         */
        displayvaluetype: DisplayValueType;
        /**
         * seismic pipeline
         */
        pipeline: SeismicPipeline | null;
    };
}
