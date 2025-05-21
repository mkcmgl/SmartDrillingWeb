import { Point } from '@int/geotoolkit/util/Point';
import { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
import { Iterator } from '@int/geotoolkit/util/iterator';
import { Rect } from '@int/geotoolkit/util/Rect';
import { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import { Events } from '@int/geotoolkit/scene/Node';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import type { GeodeticSystem } from '@int/geotoolkit/map/GeodeticSystem';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * The Shape layer is a collection of geotoolkit shapes (polylines, polygons, symbols, etc.)<br>
 * In essence, it copies the functionality of the Vector layer, but instead of features it displays shapes — features combined with its drawing style. <br>
 * This approach increases consumed memory, but it is comparatively easier to use. Also, not all objects can be represented by a point, polyline or polygon (for example, a bezier curve), which makes this layer more universal for some special cases.
 * @example
 * // to add a custom shape with fixed width and height
 * import {CirclePainter} from '@int/geotoolkit/scene/shapes/painters/CirclePainter';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * import {SymbolShape} from '@int/geotoolkit/scene/shapes/SymbolShape';
 * import {Shape as ShapeLayer} from '@int/geotoolkit/map/layers/Shape';
 * const circle = new SymbolShape({
 *     'ax': -12460000,
 *     'ay': 4055800,
 *     'width': 20,
 *     'height': 20,
 *     'alignment': AnchorType.Center,
 *     'sizeisindevicespace': true,
 *     'linestyle': 'red',
 *     'fillstyle': 'yellow',
 *     'painter': CirclePainter
 * });
 * const layer = new ShapeLayer();
 * layer.addShape(circle);
 */
export declare class Shape extends AbstractLayer {
    /**
     * Creates shape layer
     * @param [options] options
     */
    constructor(options?: Shape.Options);
    on<E extends keyof Shape.EventMap>(type: E, callback: (eventType: E, sender: this, args: Shape.EventMap[E]) => void): this;
    off<E extends keyof Shape.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Shape.EventMap[E]) => void): this;
    notify<E extends keyof Shape.EventMap>(type: E, source: Shape, args?: Shape.EventMap[E]): this;
    protected calculateDefaultModelLimits(): Rect;
    setMapCoordinateSystem(system?: AbstractSystem | GeodeticSystem | number): this;
    /**
     * Gets shapes iterator
     *
     * @param [filter] a filter function.
     * @returns feature iterator (over all features if filter is null)
     */
    getShapes(filter?: (node: AbstractNode) => boolean): Iterator<Node>;
    /**
     * Adds shape(s)
     *
     * @param parameter shape(s) to be added
     */
    addShape(parameter: AbstractNode | AbstractNode[] | Iterator<AbstractNode>): this;
    /**
     * Removes shape(s) (and dispose them if needed)
     * @throws Error if parameter is not supported
     * @param parameter shape(s) to be removed
     * @param [dispose] dispose shape(s)
     * @returns this
     */
    removeShape(parameter: AbstractNode | AbstractNode[] | Iterator<AbstractNode>, dispose?: boolean): this;
    /**
     * Removes all shapes (and dispose them if needed)
     * @param [dispose] automatically dispose shape(s)
     * @returns this
     */
    clearShapes(dispose?: boolean): this;
    /**
     * Renders content
     *
     * @param context rendering context
     */
    renderContent(context: RenderingContext): void;
    /**
     * Performs selection of the shapes with its device coordinates
     * @param pt is the device coordinates received by mouse event
     * @param [radius] is the radius of selection
     * @returns shapes shapes selected
     */
    hitTest(pt: Point, radius?: number): AbstractNode[];
}
export declare namespace Shape {
    /**
     * options
     */
    type Options = Omit<AbstractLayer.Options, 'tooltip'> & {
        /**
         * tooltip options
         */
        tooltip?: {
            /**
             * tooltip visibility flag
             */
            visible?: boolean;
            /**
             * tooltip data formatter
             */
            formatter?: (data: Node[], tooltip?: string, pt?: Point) => string;
        };
    };
    type EventMap = AbstractLayer.EventMap & {
        [Events.ChildRemoved]: Iterator<Node> | AbstractNode;
    };
}
