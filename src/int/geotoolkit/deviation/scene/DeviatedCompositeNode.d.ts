import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { Point } from '@int/geotoolkit/util/Point';
import { ITransformable } from '@int/geotoolkit/util/ITransformable';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Polygon } from '@int/geotoolkit/util/Polygon';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Range } from '@int/geotoolkit/util/Range';
import type { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
import type { Transformer2d } from '@int/geotoolkit/deviation/Transformer2d';
import type { DeviatedTransformation } from '@int/geotoolkit/deviation/DeviatedTransformation';
/**
 * DeviatedCompositeNode's Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired when the deviation changes
     */
    DeviationChanged = "onDeviationChanged"
}
/**
 * This class extends the composite node class to accept deviation (trajectory). This is only a container which allows to deviate a track when the trajectory is provided to it.<br>
 * The method setDeviation described below sets the trajectory along the path. 'trajectory' is the only mandatory parameter; 'transformer', 'trackwidth' and 'offset' are optional.<br>
 * The following code shows how to deviate a trackcontainer.
 * @example
 * import {Plot} from '@int/geotoolkit/plot/Plot';
 * import {Trajectory2d} from '@int/geotoolkit/deviation/Trajectory2d';
 * import {TrackContainer} from '@int/geotoolkit/welllog/TrackContainer';
 * import {DeviatedCompositeNode} from '@int/geotoolkit/deviation/scene/DeviatedCompositeNode';
 * // Create  plot
 * const plot = new Plot({...});
 * // Create TrackContainer and fill it in:
 * const trackContainer = new TrackContainer()
 *    .addChild([...]);
 * // Create trajectory:
 * const trajectory = new Trajectory2d(...);
 * // Deviation options:
 * const deviation = {
 *     'trajectory': trajectory,
 *     'trackwidth': deviatedTrackWidth,
 *     'offset': deviatedTrackOffset
 * };
 * // Create deviated node, set the options:
 * const deviatedNode = new DeviatedCompositeNode()
 *     .setDeviation(deviation);
 * // Deviate the track container:
 * deviatedNode.addChild(trackContainer);
 * // Set the deviated node as a root one:
 * plot.setRoot(deviatedNode);
 */
export declare class DeviatedCompositeNode extends CompositeNode implements ITransformable {
    constructor(options?: DeviatedCompositeNode.Options);
    on<E extends keyof DeviatedCompositeNode.EventMap>(type: E, callback: (eventType: E, sender: this, args: DeviatedCompositeNode.EventMap[E]) => void): this;
    off<E extends keyof DeviatedCompositeNode.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DeviatedCompositeNode.EventMap[E]) => void): this;
    notify<E extends keyof DeviatedCompositeNode.EventMap>(type: E, source: DeviatedCompositeNode, args?: DeviatedCompositeNode.EventMap[E]): this;
    /**
     * Adds event listener
     * @deprecated since 4.0 use DeviatedCompositeNode.on() instead
     * @param eventName name of the event
     * @param listener event listener
     * @returns this
     */
    addListener(eventName: string, listener: Function): this;
    /**
     * Removes event listener
     * @deprecated since 4.0 use DeviatedCompositeNode.off() instead
     * @param eventName event name
     * @param listener event listener
     * @returns this
     */
    removeListener(eventName: string, listener: Function): this;
    protected onDeviationChanged(): void;
    /**
     * Sets deviation options. Fires 'onDeviationChanged' event.
     *
     * @param options deviation options
     * @returns this
     */
    setDeviation(options: DeviatedCompositeNode.DeviationOptions): this;
    /**
     * Gets deviation options if set, `null` otherwise.
     */
    getDeviation(): DeviatedCompositeNode.DeviationOptionsOut | null;
    /**
     * Returns shallow copy of node
     */
    shallowClone(): DeviatedCompositeNode;
    transform(point: Point): Point;
    inverseTransform(point: Point): Point;
    /**
     * Gets actual (there: non-deviated) model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Gets the node's bounds if set; trajectory limits otherwise
     */
    getBounds(): Rect;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Gets externally set trajectory limits if any or own trajectory limits if deviation (trajectory) is set; "null" otherwise
     */
    getTrajectoryLimits(): Rect | null;
    /**
     * Sets trajectory model limits. If set it will override trajectory's own limits
     * @param limits the trajectory model limits
     */
    setTrajectoryLimits(limits: Rect.Type): this;
    getOutline(tr: Transformation): Polygon;
    /**
     * Transformation of inner contents (i.e. trajectory limits) to bounds
     */
    getContentsTransform(): Transformation;
    /**
     * Returns the bounding box of the area in the model space.
     * @param [tr] The transformation from model to device space.
     * if transformation is not passed then scene transformation is used
     */
    getBoundingBox(tr?: Transformation): Rect;
    /**
     * Computes the deviated node's depth range corresponding to its parent's rect area (if any)
     * @param parentRect Rect for which to compute the depth
     * @param outRange optional parameter used to return range
     * @returns the node's depth range if found; "null" otherwise
     */
    findDepthRange(parentRect: Rect, outRange: Range): Range | null;
    /**
     * Gets underlying deviated transformation
     */
    getDeviatedTransformation(): DeviatedTransformation | null;
    /**
     * Sets webgl rendering
     * @experimental
     * @param webGLEnabled true for webgl rendering
     * @returns this
     */
    setWebGLRendering(webGLEnabled: boolean): this;
    /**
     * Gets webgl rendering
     * @experimental
     * @returns true if webgl rendering is enabled
     */
    getWebGLRendering(): boolean;
    getProperties(): DeviatedCompositeNode.OptionsOut;
    setProperties(properties?: DeviatedCompositeNode.Options): this;
}
export declare namespace DeviatedCompositeNode {
    /**
     * Defines input options object
     */
    type Options = CompositeNode.Options & {
        /**
         * optional model limits for provided trajectory
         */
        trajectorymodellimits?: Rect.Type;
    };
    /**
     * Defines output options object
     */
    type OptionsOut = CompositeNode.OptionsOut & {
        /**
         * optional model limits for provided trajectory
         */
        trajectorymodellimits?: Rect;
    };
    /**
     * deviation options
     */
    type DeviationOptions = {
        /**
         * trajectory
         */
        trajectory?: Trajectory2d;
        /**
         * transformer
         */
        transformer?: Transformer2d;
        /**
         * track width
         */
        trackwidth?: number;
        /**
         * offset
         */
        offset?: number;
        /**
         * clipping
         */
        clip?: boolean;
        webglrendering?: boolean;
    };
    /**
     * deviation options
     */
    type DeviationOptionsOut = Required<DeviationOptions>;
    type EventMap = CompositeNode.EventMap & {
        [Events.DeviationChanged]: void;
    };
}
