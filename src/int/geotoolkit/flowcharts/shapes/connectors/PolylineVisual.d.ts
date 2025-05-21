import { Polyline } from '@int/geotoolkit/scene/shapes/Polyline';
import { Point } from '@int/geotoolkit/util/Point';
import { ILink } from '@int/geotoolkit/flowcharts/shapes/connectors/ILink';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import type { Node } from '@int/geotoolkit/scene/Node';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LinkConnection } from '@int/geotoolkit/flowcharts/shapes/connectors/LinkConnection';
import { LinkSide } from '@int/geotoolkit/flowcharts/shapes/connectors/LinkSide';
import type { GraphicsPath } from '@int/geotoolkit/renderer/GraphicsPath';
import { IComponent } from '@int/geotoolkit/flowcharts/shapes/IComponent';
import type { LinkVisual } from '@int/geotoolkit/flowcharts/shapes/connectors/LinkVisual';
/**
 * Polygonal link visual. This visual allows to create points in real-time,
 * e.g. draw custom link.
 */
export declare class PolylineVisual extends Polyline implements ILink {
    /**
     * Creates visual
     * @param [options] options
     */
    constructor(options?: PolylineVisual.Options);
    /**
     * Returns component class, string value
     * @returns string instance representing component class
     */
    getPrototypeId(): string;
    /**
     * Gets component name
     * @returns string instance representing component name
     */
    getPrototypeName(): string;
    /**
     * Gets component category
     * @returns string instance representing component catetory
     */
    getCategory(): string;
    /**
     * Gets an array of keywords for better search
     * @returns an array of search keywords
     */
    getSearchKeywords(): string[];
    /**
     * Gets default size of the link visual
     */
    getDefaultSize(): Dimension;
    /**
     * This method does nothing for the link visual
     * @param dimension new default dimension
     * @returns this
     */
    setDefaultSize(dimension: Dimension): this;
    /**
     * Sets text and its options
     * @param textOptions text and/or its options
     * @returns this
     */
    setText(textOptions: IComponent.Text): this;
    /**
     * Gets geometry for the current link visual
     */
    getGeometry(): Node;
    /**
     * Returns an array of link points: begin and end
     * @returns an array of linking points
     */
    getLinkPoints(): Point[];
    /**
     * LinkVisual does not let setting alternative linking points, only begin and end
     * @param ignored ingored param
     * @returns this
     */
    setLinkPoints(ignored: Point[]): this;
    /**
     * Gets outline (path) for the Link Visual
     */
    getOutline(): GraphicsPath;
    /**
     * Gets the default icon size for UI representation
     */
    getDefaultIconSize(): Dimension;
    /**
     * Sets url for icon
     * @param value a url to an icon
     * @returns this
     */
    setUrl(value: string): this;
    /**
     * Gets url for icon
     */
    getUrl(): string;
    /**
     * Gets tubing width, if set to Schematics/skin mode
     * @returns a tubing width
     */
    getTubingWidth(): number;
    /**
     * Ses tubing width for schematic/skin mode
     * @param value a width for the "tubing"
     */
    setTubingWidth(value: number): void;
    /**
     * Gets current bounds
     * @returns current bounds
     */
    getBounds(): Rect;
    clone(): PolylineVisual;
    /**
     * Connects self to the given visual, using the given linkside to the model point (in coordinates of visual)
     * @param visual a visual to connect to
     * @param linkSide link side (begin or end)
     * @param visualModelPoint model coordinates (in visual model space)
     * @returns true on success, false on fail
     */
    connectTo(visual: IComponent & Node, linkSide: LinkSide, visualModelPoint: Point): boolean;
    /**
     * Gets array of connections
     * @returns an array of connections
     */
    getConnections(): Record<LinkSide, LinkConnection>;
    /**
     * Checks if the link visual was previously connected and disconnects if so.
     * If devicePoint coordinates are specified, then a point with index pointIndex will be set to
     * model position, calculated from devicePoint value.
     * The devicePoint X Y values are used to provide "sticky" behavior for hot points.
     * @param linkSide defines side of the link
     * @param [devicePointX] device X-coordinate to reset. Ignored if null
     * @param [devicePointY] device Y-coordinate to reset. Ignored if null
     */
    disconnectFrom(linkSide: LinkSide, devicePointX?: number, devicePointY?: number): void;
    /**
     * checks if the visual connected to the link and returns all link point indexes. If not connected, an empty
     * array returns
     * @param visual a visual to get connection points.
     */
    getConnectedIndexes(visual: Node): number[];
    /**
     * Performs links update, using previously set up connections.
     * It takes connected shapes and updates self begin and end points depending on
     * connected points
     * @param [force] force
     */
    updateLinks(force?: boolean): void;
    /**
     * Checks if the link visual can connect to a component
     * @param component a component to check if the link visual can connect to
     * @param modelPoint a point in parent's model space
     * @param minDistance minimum distance in device units (pixels) for snapping
     * @returns model link point or <b>null</b> if can not connect
     */
    canConnect(component: Node, modelPoint: Point, minDistance: number): Point | null;
}
export declare namespace PolylineVisual {
    /**
     * object containing parameters
     */
    type Options = Polyline.Options & LinkVisual.ComponentOptions & {
        /**
         * default icon size
         */
        defaulticonsize?: Dimension;
        /**
         * tubing width
         */
        tubingwidth?: number;
    };
}
