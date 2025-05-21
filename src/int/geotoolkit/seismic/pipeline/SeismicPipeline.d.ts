/**
 * @module geotoolkit/seismic/pipeline/SeismicPipeline
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { NormalizationType } from '@int/geotoolkit/seismic/pipeline/NormalizationType';
import { RenderingSide } from '@int/geotoolkit/seismic/pipeline/RenderingSide';
import { InterpolationType } from '@int/geotoolkit/seismic/pipeline/InterpolationType';
import { InterpolationEdge } from '@int/geotoolkit/seismic/pipeline/InterpolationEdge';
import { ClippingMode } from '@int/geotoolkit/seismic/pipeline/ClippingMode';
import { RasterizationLimitsType } from '@int/geotoolkit/seismic/pipeline/RasterizationLimitsType';
import type { SeismicReader } from '@int/geotoolkit/seismic/data/SeismicReader';
import { Status } from '@int/geotoolkit/seismic/data/Trace';
import { QueryType } from '@int/geotoolkit/seismic/pipeline/QueryType';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Range } from '@int/geotoolkit/util/Range';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { TraceMapping } from '@int/geotoolkit/seismic/data/TraceMapping';
import type { ColorMap } from '@int/geotoolkit/seismic/util/ColorMap';
import type { SeismicTraceProcessor } from '@int/geotoolkit/seismic/pipeline/processor/SeismicTraceProcessor';
import type { Statistics } from '@int/geotoolkit/seismic/data/Statistics';
import type { SeismicData } from '@int/geotoolkit/seismic/data/SeismicData';
import type { FetchResult } from '@int/geotoolkit/seismic/data/FetchResult';
import type { DecimationType } from '@int/geotoolkit/seismic/pipeline/DecimationType';
/**
 * SeismicPipeline's Events enumerator. These events are fired while setting options ( see setOptions()) on the seismic pipeline.
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired prior to options being set
     */
    BeforeSetOptions = "BeforeSetOptions",
    /**
     * Event type fired when options are being set
     */
    SetOptions = "SetOptions",
    /**
     * Event type fired when trace mapping updated
     */
    TraceMappingUpdated = "TraceMappingUpdated",
    /**
     * Event type fired when a pipeline is modified and requires an update cycle to be done
     */
    Invalidate = "Invalidate",
    /**
     * Event type fired when server side rendering type is changed
     */
    RenderingSideChanged = "RenderingSideChanged"
}
/**
 * SeismicPipeline's Invalidation Type Enumerator. This type is optional to describe a
 * reason of pipeline invalidation
 * @readonly
 * @enum
 */
export declare enum InvalidationType {
    /**
     * Event type fired when a pipeline transformation is changed
     */
    Transformation = "transformation",
    /**
     * Event type fired when a pipeline limits are changed
     */
    Limits = "limits",
    /**
     * Event type fired when a trace headers are changed
     */
    TraceHeaders = "traceheaders",
    /**
     * Event type fired when all parameters of pipeline are changed
     * including statistics and limits
     */
    DataChanged = "datachanged"
}
/**
 * @description This class is an implementation of the seismic data processing pipeline that handles seismic traces from the data source to the seismic image generation stage.
 * <p>
 * The first operation performed by the SeismicPipeline is to read the seismic traces.
 * The  users can apply one or more filters, perform gain control, scale data,  interpolate the trace samples based on the display scale and finally generate the seismic image (Rasterization process) based on the selected plot type. Moreover, the user may want to
 * create custom operations (filters) and apply them as well.
 * The SeismicPipeline provides a flexible structure for users to insert their own trace processing. The SeismicPipeline is organized as a succession
 * of trace processors working on individual trace data (samples). The output data from one trace process
 * serves as the input data for the next process in pipeline.
 * The base class for the trace processors is <a href="geotoolkit.seismic.pipeline.processor.SeismicTraceProcessor.html">SeismicTraceProcessor</a>. The default trace processes are data normalization, interpolation
 * and rasterization process, which can be configured using the methods provided in this class.
 * </p>
 * <p>The first stage of a SeismicPipeline always needs to be a Seismic Reader (geotoolkit.seismic.data.SeismicReader).
 * The last 3 stages of the pipelines are Data Normalization, Data Interpolation and Rasterization in that order.
 * Any additional processor (such as filtering, AGC or any custom processor) are inserted between the Seismic Reader and Data Normalization and applied in the order which they are inserted.</p>
 * <p><b>Data Normalization</b>: The data normalization stage is used to normalize the seismic amplitudes before scaling and rasterization.
 * The normalization process applies one constant scalar value across the entire trace. The normalization factor can be the same for
 * all the traces in a dataset or can be calculated on the fly for each trace (trace normalization options).
 * The normalization factor can be calculated based on the dataset min and max values, the average or the RMS value.
 * The user can also provide custom limits to make comparison between datasets easier.
 * </p>
 * <p><b>Data Interpolation</b>:
 * The data interpolation stage adjusts the number of samples in the trace to match the height of the display (based on vertical scale settings). This may require interpolation (adding samples) or decimation (removing samples).
 * See methods setSamplesInterpolationType() and setSamplesInterpolationEdge() to control how samples are interpolated.
 * </p>
 * <p><b>Rasterization</b>:
 * The rasterization stage generates the seismic image. Usually seismic data is represented as a density plot (based on a colormap), as wiggles (monochrome or colored) or a combination of both.
 * Use method setPlotType() to control the display type and method setColorMap() to specify a colormap if required.
 * These plot types include both density displays, variable area wiggle fill displays and combinations of both.
 * A list of supported plot types is provided below:
 * </p>
 * <ul>
 * <li>Wiggle  - Wiggle display</li>
 * <li>NegativeFill - Negative monochrome variable area fill</li>
 * <li>PositiveFill -  Positive monochrome variable area fill</li>
 * <li>NegativeColorFill - Negative color variable area fill. Color varies inside the lobe based on the sample amplitude at each sample location.</li>
 * <li>PositiveColorFill -  Positive color variable area fil. Color varies inside the lobe based on the sample amplitude at each sample location. </li>
 * <li>SimpleDensity - Density color fill</li>
 * <li>InterpolatedDensity - Interpolated density color fill (between traces).</li>
 * </ul>
 * <p> The general logic of the pipeline can be presented as:
 * When a seismic image needs to render specific portion of seismic data (range of traces,
 * range of samples) it requests pipeline to provide necessary data trace by trace.
 * Pipeline sends request to the <a href="geotoolkit.seismic.data.SeismicReader.html">geotoolkit.seismic.data.SeismicReader</a>
 * that provides seismic data and forwards loaded traces to each seismic traces processor. The data are modified by every
 * process in pipeline and then forwarded to rasterizer that produces an image the users see on the output device like screen.
 * </p>
 * @throws {Error} if reader is null or statistics is null
 */
export declare class SeismicPipeline extends EventDispatcher {
    /**
     * Create a pipeline
     * @param [options] object with all props or pipeline name
     */
    constructor(options?: SeismicPipeline.Options);
    /**
     * Sets reader
     * @param reader reader
     * @returns this
     */
    setReader(reader: SeismicReader): this;
    /**
     * Sets reader
     * @param reader reader
     * @returns this
     */
    setReader(reader: SeismicReader): this;
    /**
     * Construct a new seismic pipeline from the specified seismic pipeline.
     * @param src an instance of the seismic pipeline to make a copy.
     */
    protected copyConstructor(src: SeismicPipeline): this;
    on<E extends keyof SeismicPipeline.EventMap>(type: E, callback: (eventType: E, sender: this, args: SeismicPipeline.EventMap[E]) => void): this;
    off<E extends keyof SeismicPipeline.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: SeismicPipeline.EventMap[E]) => void): this;
    notify<E extends keyof SeismicPipeline.EventMap>(type: E, source: SeismicPipeline, args?: SeismicPipeline.EventMap[E]): this;
    /**
     * Gets time stamp
     *
     * @returns timeStamp
     */
    getTimeStamp(): number;
    /**
     * Update time stamp to indicate that pipeline has been changed.
     * @param [silent] silent mode. If this parameter equals to true then pipeline doesn't send invalidate event
     * @param [invalidationType] describe a reason of pipeline invalidation
     * @returns this
     */
    updateTimeStamp(silent?: boolean, invalidationType?: InvalidationType): this;
    /**
     * Creates a clone of the seismic pipeline.
     * All inheritors should implement copy constructor or provide custom implementation for this method.
     * @returns clone
     */
    clone(): SeismicPipeline;
    /**
     * Sets the trace status by id
     * @param traceId trace id
     * @param status trace status
     * @returns this
     */
    setTraceStatus(traceId: number, status: Status): this;
    /**
     * Returns the trace status by id
     * @param traceId trace id
     */
    getTraceStatus(traceId: number): Status;
    /**
     * Returns the seismic reader. The seismic reader is responsible for reading seismic data from various sources and providing it to the seismic pipeline.
     */
    getReader(): SeismicReader;
    /**
     * Returns the current state of trace data fetching process. This method is useful to check if a pipeline is still receiving traces from the data
     * source
     */
    isFetching(): boolean;
    /**
     * Adds a callback method to the trace data fetching process. The callback method is triggered when the seismic pipeline is ready to process the query.
     *
     * @param callback Whenever pipeline is ready to process your query, callback function is triggered.
     */
    await(callback: () => void): void;
    /**
     * Returns the number of traces available from the seismic metadata.
     */
    getNumberOfTraces(): number;
    /**
     * Returns the number of samples available from the seismic metadata.
     */
    getNumberOfSamples(): number;
    /**
     * Returns a object that has seismic data statistics, namely 'average', 'min', 'max', 'rms'
     *
     * @returns object
     */
    getStatistics(): Statistics;
    /**
     * Sets a  object that has seismic data statistics,
     * namely 'average', 'min', 'max', 'rms'
     *
     * @param statistics object
     * @throws {Error} if statistics is null
     */
    setStatistics(statistics: Statistics): void;
    /**
     * Returns seismic transformation which determines how many traces and samples per unit is displayed on the screen.
     */
    getTransformation(): Transformation;
    /**
     * Sets trace mapping. If this mapping is set the trace decimation is off.
     * @param mapping a new trace mapping
     * @returns this
     */
    setTraceMapping(mapping: TraceMapping | null): this;
    /**
     * Sets trace decimation factor
     * @param tracesPerPixel traces per pixel
     */
    setTraceDecimation(tracesPerPixel: number): this;
    /**
     * Return trace decimation factor if no decimation it returns Number.NaN
     */
    getTraceDecimation(): number;
    /**
     * returns trace mapping
     */
    getTraceMapping(): TraceMapping | null;
    /**
     * Returns trace offset
     * @returns trace offset
     */
    getTraceOffset(): number;
    /**
     * Set trace offset
     * @param offset trace offset
     * @returns this
     */
    setTraceOffset(offset: number): this;
    /**
     * Executes a query with specified condition. This query result will be applied to all the trace processors active in the seismic pipeline.
     * @param condition object Condition to select range of traces based on parameters namely, from and to.
     * @param [fetchCallback] Callback function which is executed when data (query result) has arrived for the selection.
     * @param [validationCallback] Callback function which is executed before data requested.
     * @throws {Error} if condition is not specified
     */
    select(condition: SeismicPipeline.SelectCondition, fetchCallback?: (fetchResult: FetchResult) => void, validationCallback?: SeismicData.ValidationCallback): void;
    /**
     * Adds trace processors to the seismic pipeline.
     * The added trace processors should be made active to apply it to the data before rendering to a seismic image.
     * @param processor processor to apply for seismic trace
     * samples
     * @returns this
     */
    addTraceProcessor(processor: SeismicTraceProcessor): this;
    /**
     * Removes an existing trace processor from the seismic pipeline.
     * @param processor The Seismic Data Trace Processor
     * @returns this
     */
    removeTraceProcessor(processor: SeismicTraceProcessor): this;
    /**
     * Returns the existing trace processor by index.
     * @param index Index of the trace process in the collection or its name
     */
    getTraceProcessor(index: number | string): SeismicTraceProcessor;
    /**
     * Returns a count of SeismicTraceProcessor[s] applied to the seismic pipeline
     * @returns amount of processes
     */
    getTraceProcessorsCount(): number;
    /**
     * Remove all trace processors
     * @returns this
     */
    clearTraceProcessors(): this;
    /**
     * Reset model limits of the seismic pipeline to null.
     * @returns this
     */
    resetModelLimits(): this;
    /**
     * Return data limits of traces and samples
     */
    getDataLimits(): Rect;
    /**
     * Returns the current model limits
     */
    getModelLimits(): Rect;
    /**
     * Returns the rasterization plot type
     * @returns object containing plot properties
     */
    getPlotType(): Required<SeismicPipeline.PlotTypeOptions>;
    /**
     * Sets the rasterization plot type
     * @param plotType object that contains combination of flags that specify how to render seismic
     * @param [invalidate] flag set to notify the listener if pipeline changes
     */
    setPlotType(plotType: SeismicPipeline.PlotTypeOptions, invalidate?: boolean): this;
    /**
     * Returns the name of the seismic pipeline.
     */
    getName(): string;
    /**
     * Sets color map for rendering the seismic image. if pipeline has option reversed for colors then colormap
     * will be reversed
     * @param colorMap sets the color map
     * @param [updateColorMapLimits] true to update colormap limits from previous colormap or normalization limits
     */
    setColorMap(colorMap: ColorMap, updateColorMapLimits?: boolean): this;
    /**
     * Returns the color map used to render the seismic image.
     */
    getColorMap(): ColorMap;
    /**
     * Sets interpolation type.
     * @param interpolationType Enum of seismic pipeline interpolation types
     */
    setSamplesInterpolationType(interpolationType: InterpolationType): boolean;
    /**
     * Returns interpolation type defined under {@link @int/geotoolkit/seismic/pipeline/InterpolationType~InterpolationType}
     */
    getSamplesInterpolationType(): InterpolationType;
    /**
     * Sets the interpolation edge.
     * @param interpolationEdge Specifies how interpolation handles edge (begin and end elements) of data
     */
    setSamplesInterpolationEdge(interpolationEdge: InterpolationEdge): boolean;
    /**
     * Returns interpolation edge
     */
    getSamplesInterpolationEdge(): InterpolationEdge;
    /**
     * Sets interpolation type.
     * @param interpolationType Enum of seismic pipeline interpolation types
     */
    setTracesInterpolationType(interpolationType: InterpolationType): boolean;
    /**
     * Returns interpolation type defined under {@link @int/geotoolkit/seismic/pipeline/InterpolationType~InterpolationType}
     */
    getTracesInterpolationType(): InterpolationType;
    /**
     * Sets the interpolation edge.
     * @param interpolationEdge Specifies how interpolation handles edge (begin and end elements) of data
     */
    setTracesInterpolationEdge(interpolationEdge: InterpolationEdge): boolean;
    /**
     * Returns interpolation edge
     */
    getTracesInterpolationEdge(): InterpolationEdge;
    /**
     * Sets data normalization parameters on the seismic pipeline.
     * @param normalization normalization options
     * @param [updateColorMapLimits] true for update colormap limits from normalization
     * @example
     * import {NormalizationType} from '@int/geotoolkit/seismic/pipeline/NormalizationType';
     * pipeline.setNormalization({
     *   'type'   : NormalizationType.Limits,
     *   'limits' : {
     *       'min': -1,
     *       'max': 1
     *   },
     *   'scale'  : 0.4
     * })
     * @returns this
     */
    setNormalization(normalization: SeismicPipeline.NormalizationOptions, updateColorMapLimits?: boolean): this;
    /**
     * Return normalization
     */
    getNormalization(): SeismicPipeline.NormalizationOptionsOut;
    /**
     * Gets normalization scale
     */
    getScaleFactor(): number;
    /**
     * Gets rendering side
     * @returns rendering side
     */
    getRenderingSide(): RenderingSide;
    /**
     * Sets rendering side
     * @param renderingSide rendering side
     * @returns this
     */
    setRenderingSide(renderingSide: RenderingSide): this;
    /**
     * Get clipping mode
     * @returns clipping mode
     */
    getClippingMode(): ClippingMode;
    /**
     * Set clipping mode
     * @param clippingMode clipping mode
     * @returns this
     */
    setClippingMode(clippingMode: ClippingMode): this;
    /**
     * Returns current pipeline settings
     */
    getOptions(): SeismicPipeline.Options;
    /**
     * Set pipeline options
     * @param [options] pipeline options
     */
    setOptions(options?: SeismicPipeline.Options): this;
    /**
     * Render seismic model in to the canvas
     * @param seismicModelBounds seismic source model bounds
     * @param canvas target image
     * @param [targetBounds] target bounds
     * @param [offsetX] x position on the canvas
     * @param [offsetY] y position on the canvas
     * @param [fetchCallback] Callback function which is executed when data (query result) has arrived for the selection.
     * @param [validationCallback] Callback function which is executed before data requested.
     * @param [targetDeviceBounds] target device bounds
     */
    exportToImage(seismicModelBounds: Rect, canvas: HTMLCanvasElement, targetBounds?: Rect | null, offsetX?: number, offsetY?: number, fetchCallback?: (fetchResult: FetchResult) => void, validationCallback?: SeismicData.ValidationCallback, targetDeviceBounds?: Rect | null): void;
    /**
     * Returns model to sample transformation
     * @returns transformation
     */
    getModelToSamplesTransformation(): Transformation;
    /**
     * Invalidate node
     * @param [params] additional invalidate parameters
     */
    invalidate(params?: InvalidationType): this;
    /**
     * Disposes this pipeline. Once disposed, the pipeline should not be used anymore.<br>
     * Please clear all listeners  and invalidate handlers to avoid memory leaks.<br>
     */
    dispose(): void;
    /**
     * This method invalidates the pipeline and any existing trace processors.
     */
    refresh(): this;
    /**
     * This method clears the pipeline and processors memory allocations
     */
    clear(): this;
    /**
     * Gets the pipeline properties
     * @returns pipeline options
     */
    getProperties(): SeismicPipeline.Options;
    /**
     * Sets the pipeline properties
     * @param [props] object with all props
     * @returns this
     */
    setProperties(props?: SeismicPipeline.Options): this;
    /**
     * Sets rasterization limits type
     * @param rasterizationLimitsType rasterization limits type
     * @returns this
     */
    setRasterizationLimitsType(rasterizationLimitsType: RasterizationLimitsType): this;
    /**
     * Gets rasterization limits type
     * @returns rasterization limits type
     */
    getRasterizationLimitsType(): RasterizationLimitsType;
}
export declare namespace SeismicPipeline {
    /**
     * object with all props or pipeline name
     */
    type Options = {
        /**
         * pipeline name
         */
        name?: string;
        /**
         * Statistics information
         */
        statistics?: Statistics;
        /**
         * Instance of the reader that provide the seismic data
         */
        reader?: SeismicReader;
        /**
         * Define maximum traces per pixel,
         * which can be displayed in the image
         */
        maximumtracesperpixel?: number;
        /**
         * optional trace mapping to provide location of traces
         */
        tracemapping?: TraceMapping;
        /**
         * original trace offset
         */
        traceoffset?: number;
        /**
         * version
         */
        version?: string;
        /**
         * interpolation options
         */
        interpolation?: InterpolationOptions;
        /**
         * normalization options
         */
        normalization?: NormalizationOptions;
        /**
         * plot options
         */
        plot?: PlotOptions;
        /**
         * colors
         */
        colors?: ColorMapOptions;
        /**
         * fetch options
         */
        fetch?: {
            /**
             * synchronous state
             */
            synchronous?: boolean;
            /**
             * maximum amount of active queries
             */
            maxfetch?: number;
            /**
             * await time before processing requests in milliseconds
             */
            awaittime?: number;
            /**
             * maximum amount of traces per request
             */
            fetchsize?: number;
        };
        /**
         * rendering side
         */
        renderingside?: RenderingSide;
        /**
         * clipping mode
         */
        clippingmode?: ClippingMode;
        /**
         * rasterization limits type
         */
        rasterizationlimitstype?: RasterizationLimitsType;
        /**
         * data processes
         */
        processes?: SeismicTraceProcessor[];
        dataprocessors?: Record<string, any>;
    };
    /**
     * object Condition to select range of traces based on parameters namely, from and to.
     */
    type SelectCondition = {
        /**
         * Start of the trace or trace location
         */
        from?: number;
        /**
         * End of the trace or trace location
         */
        to?: number;
        /**
         * optional indices of traces instead of from and to positions
         */
        traceIndexes?: number[];
        /**
         * type fo the query
         */
        type?: QueryType;
        originaldata?: boolean;
    };
    /**
     * object containing plot properties
     */
    type PlotTypeOptions = {
        /**
         * wiggle
         */
        wiggle?: boolean;
        /**
         * positive fill
         */
        positivefill?: boolean;
        /**
         * negative fill
         */
        negativefill?: boolean;
        /**
         * positive color fill
         */
        positivecolorfill?: boolean;
        /**
         * negative color fill
         */
        negativecolorfill?: boolean;
        /**
         * simple density
         */
        simpledensity?: boolean;
        /**
         * interpolated density
         */
        interpolateddensity?: boolean;
        /**
         * reversed amplitude direction
         */
        reversed?: boolean;
    };
    /**
     * normalization options
     */
    type NormalizationOptions = {
        /**
         * enum of normalization types
         */
        type?: NormalizationType;
        /**
         * normalization limits (min,max), which is
         * used for NormalizationType.Limits only
         */
        limits?: Range | {
            /**
             * normalization limits minimum value
             */
            min?: number;
            /**
             * normalization limits maximum value
             */
            max?: number;
        };
        /**
         * scale factor
         */
        scale?: number;
    };
    type NormalizationOptionsOut = {
        /**
         * enum of normalization types
         */
        type: NormalizationType;
        /**
         * normalization limits (min,max)
         */
        limits: Range;
        /**
         * scale factor
         */
        scale: number;
    };
    /**
     * Define interpolation parameters
     */
    type InterpolationOptions = {
        /**
         * options for interpolation between traces
         */
        traces?: {
            /**
             * enum of interpolation types
             */
            type?: InterpolationType;
            /**
             * enum of interpolation edge behavior
             */
            edge?: InterpolationEdge;
        };
        /**
         * options for interpolation between samples inside trace
         */
        samples?: {
            /**
             * enum of interpolation types
             */
            type?: InterpolationType;
            /**
             * enum of interpolation edge behavior
             */
            edge?: InterpolationEdge;
        };
    };
    /**
     * Plot parameters
     */
    type PlotOptions = {
        /**
         * plot type
         */
        type?: PlotTypeOptions;
        /**
         * clipping factor for traces
         */
        clippingfactor?: number;
        /**
         * clipping factor for density
         */
        densityclippingfactor?: number;
        /**
         * Decimation spacing is the minimum spacing between seismic traces on a seismic image.
         * It is a measured in device units (pixels). Decimation spacing is an important factor
         * when interpreting seismic images, as it affects the resolution of the image.
         * The greater the decimation spacing, the lower the resolution of the image.
         * A higher resolution image will allow for more detail in the interpretation,
         * while a lower resolution image will be less detailed.
         */
        decimationspacing?: number;
        /**
         * decimation for traces in density mode
         */
        densitydecimation?: boolean;
        /**
         * define samples decimation type
         */
        sampledecimation?: DecimationType;
        /**
         * amplitude decimation options
         */
        amplitudedecimation?: {
            /**
             * enable amplitude decimation
             */
            enabled?: boolean;
            /**
             * minimum amplitude size in pixels
             */
            sizeinpixels?: number;
            /**
             * false to skip rendering in case if amplitude is less then sizeInPixels, otherwise normalize to 0
             */
            nullifyvalues?: boolean;
        };
        /**
         * wiggles antialiasing flag
         */
        wigglesantialiasing?: boolean;
    };
    /**
     * Color map options
     */
    type ColorMapOptions = {
        /**
         * Alpha value
         */
        alpha?: number;
        /**
         * Reversed color map
         */
        reversed?: boolean;
        /**
         * Color map
         */
        colormap?: ColorMap | string;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.BeforeSetOptions]: Options;
        [Events.SetOptions]: Options;
        [Events.TraceMappingUpdated]: void;
        [Events.Invalidate]: InvalidationType;
        [Events.RenderingSideChanged]: void;
    };
}
