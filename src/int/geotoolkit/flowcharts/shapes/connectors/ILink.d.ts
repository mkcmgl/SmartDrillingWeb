/**
 * @module geotoolkit/flowcharts/shapes/connectors/ILink
 */
import { IComponent } from '@int/geotoolkit/flowcharts/shapes/IComponent';
import type { LinkConnection } from '@int/geotoolkit/flowcharts/shapes/connectors/LinkConnection';
import type { LinkSide } from '@int/geotoolkit/flowcharts/shapes/connectors/LinkSide';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Base interface for links
 * @interface
 */
export declare abstract class ILink extends IComponent {
    /**
     * Gets array of connections
     * @returns an array of connections
     */
    abstract getConnections(): Record<LinkSide, LinkConnection>;
    /**
     * Gets array of connections
     * @param [force] force
     */
    abstract updateLinks(force?: boolean): void;
    /**
     * Connects self to the given visual, using the given linkside to the model point (in coordinates of visual)
     * @param visual a visual to connect to
     * @param linkSide link side (begin or end)
     * @param visualModelPoint model coordinates (in visual model space)
     * @returns true on success, false on fail
     */
    abstract connectTo(visual: IComponent & Node, linkSide: LinkSide, visualModelPoint: Point): boolean;
    /**
     * Checks if the link visual was previously connected and disconnects if so.
     * If devicePoint coordinates are specified, then a point with index pointIndex will be set to
     * model position, calculated from devicePoint value.
     * The devicePoint X Y values are used to provide "sticky" behavior for hot points.
     * @param linkSide defines side of the link
     */
    abstract disconnectFrom(linkSide: LinkSide): void;
}
