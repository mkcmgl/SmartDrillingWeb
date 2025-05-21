import type { IComponent } from '@int/geotoolkit/flowcharts/shapes/IComponent';
import type { Point } from '@int/geotoolkit/util/Point';
import type { LinkSide } from '@int/geotoolkit/flowcharts/shapes/connectors/LinkSide';
import { Node } from '@int/geotoolkit/scene/Node';
import type { ILink } from '@int/geotoolkit/flowcharts/shapes/connectors/ILink';
/**
 * Stores information about connection between a visual and a link ("arrow").
 * That said, modelPoint defines a point for the link in visual's bounds (which does takes
 * Local Transformation into account). LinkSide defines the side of a link: Begin or End.
 * linkVisual defines a link that is connected to a visual.
 */
export declare class LinkConnection {
    /**
     * Creates connection
     * @param visual a visual that is related to the link
     * @param modelPoint an anchor point in visual's coordinate system.
     * @param linkSide side of the link (begin=0 or end=1)
     * @param linkVisual a link visual instance
     * @throws {Error} if visual does not inherit {@link @int/geotoolkit/scene/Node~Node}
     */
    constructor(visual: IComponent & Node, modelPoint: Point, linkSide: LinkSide, linkVisual: ILink);
    /**
     * Gets associated visual
     */
    getVisual(): IComponent & Node;
    /**
     * Gets model point (in visual space)
     */
    getModelPoint(): Point;
    /**
     * Gets link side that defines link orientation (flow)
     */
    getLinkSide(): LinkSide;
    /**
     * return link visual
     */
    getLinkVisual(): ILink;
    /**
     * gets a visual ID related to this connection
     * @returns a visual ID
     */
    getRelatedVisualId(): string | number | null;
    static getClassName(): string;
    getClassName(): string;
}
