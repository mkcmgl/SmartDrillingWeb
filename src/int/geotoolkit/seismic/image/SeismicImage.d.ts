import { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import { Rect } from '@int/geotoolkit/util/Rect';
import { TiledShape } from '@int/geotoolkit/scene/shapes/tiledshape/TiledShape';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { RectangularShape } from '@int/geotoolkit/scene/shapes/RectangularShape';
/**
 * Defines seismic shape implementation as a rectangular shape to render data from seismic pipeline.<br>
 * This shape can render seismic as a simple rectangular shape by using the {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline~SeismicPipeline}.
 * It can be added to any plot/group as a shape. <br>
 * It will delegate rasterization to the pipeline itself so any configuration relative to the seismic rendering (Like Colormap,Interpolation, etc) should be done directly on the pipeline.<br>
 * Seismic Map Image tutorial demonstrates the use of seismic image in the toolkit.
 */
export declare class SeismicImage extends TiledShape {
    /**
     * Creates image
     * @param [pipeline] pipeline
     * @param [rect] rectangle of model coordinates.
     */
    constructor(pipeline?: SeismicPipeline, rect?: Rect);
    /**
     * Creates image
     * @param [pipeline] pipeline or options object
     * @param [x1] model coordinate in the parent object
     * @param [y1] model coordinate in the parent object.
     * @param [x2] model coordinate in the parent object.
     * @param [y2] model coordinate in the parent object.
     */
    constructor(pipeline?: SeismicPipeline | SeismicImage.Options, x1?: number, y1?: number, x2?: number, y2?: number);
    /**
     * Creates image
     * @param [options] options object
     */
    constructor(options?: SeismicImage.Options);
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: SeismicImage.Options): this;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): SeismicImage.OptionsOut;
    /**
     * Copy constructor
     * @param src seismic image src
     */
    protected copyConstructor(src: SeismicImage): this;
    /**
     * Sets pipeline
     *
     * @param pipeline the Seismic Pipeline
     * @returns this
     */
    setPipeline(pipeline: SeismicPipeline): this;
    /**
     * Returns pipeline
     */
    getPipeline(): SeismicPipeline | null;
    /**
     * Sets time to wait changes
     * @param timeToWaitChanges time to wait changes
     * @returns this
     */
    setTimeToWaitChanges(timeToWaitChanges: number): this;
    /**
     * Gets time to wait changes
     * @returns time to wait changes
     */
    getTimeToWaitChanges(): number;
    /**
     * Sets model limits
     *
     * @param limits limits of the pipeline
     */
    setModelLimits(limits: Rect): this;
    /**
     * Returns model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Returns transformation
     */
    getContentsTransform(): Transformation | null;
    /**
     * Returns scale options.
     *
     * @returns object
     */
    getScaleOptions(): SeismicImage.ScaleOptionsOut;
    /**
     * Sets scale options.
     *
     * @param scaleOptions scale options
     * @returns this
     */
    setScaleOptions(scaleOptions: SeismicImage.ScaleOptions): this;
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
}
export declare namespace SeismicImage {
    /**
     * pipeline or options object
     */
    type Options = TiledShape.Options & {
        /**
         * represents seismic data
         */
        pipeline?: SeismicPipeline;
        /**
         * time (ms) to wait changes of position or scale of seismic image. If position and scale remain the same, seismic image will request new tiles.
         */
        timetowaitchanges?: number;
    };
    /**
     * properties
     */
    type OptionsOut = RectangularShape.OptionsOut & {
        /**
         * represents seismic data
         */
        pipeline: SeismicPipeline;
        /**
         * time (ms) to wait changes of position or scale of seismic image. If position and scale remain the same, seismic image will request new tiles.
         */
        timetowaitchanges: number;
    };
    /**
     * scale options
     */
    type ScaleOptions = {
        /**
         * physical device unit
         */
        deviceunit?: AbstractUnit | string;
        /**
         * sample unit, sample unit from pipeline will be used if not specified
         */
        sampleunit?: AbstractUnit | string;
        /**
         * in traces per device unit (e.g traces per inch)
         */
        tracescale?: number;
        /**
         * in sample unit per device unit if depth data (e.g feet per inch),
         * or in device unit per sample unit (e.g inches per second)
         */
        samplescale?: number;
    };
    /**
     * object
     */
    type ScaleOptionsOut = Required<ScaleOptions>;
}
