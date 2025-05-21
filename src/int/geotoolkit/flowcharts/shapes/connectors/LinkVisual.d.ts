import { Polyline } from '@int/geotoolkit/scene/shapes/Polyline';
import { LinkingMode } from '@int/geotoolkit/flowcharts/shapes/connectors/LinkingMode';
import { LinkType } from '@int/geotoolkit/flowcharts/shapes/edit/LinkType';
import { Point } from '@int/geotoolkit/util/Point';
import { ILink } from '@int/geotoolkit/flowcharts/shapes/connectors/ILink';
import { LinkSide } from '@int/geotoolkit/flowcharts/shapes/connectors/LinkSide';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LinkConnection } from '@int/geotoolkit/flowcharts/shapes/connectors/LinkConnection';
import { Events } from '@int/geotoolkit/flowcharts/shapes/connectors/Events';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { GraphicsPath } from '@int/geotoolkit/renderer/GraphicsPath';
import { IComponent } from '@int/geotoolkit/flowcharts/shapes/IComponent';
import { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
/**
 * A simple polygonal link that connects two shapes together.
 */
export declare class LinkVisual extends Polyline implements ILink {
    /**
     * Create link visual
     * @param [options] visual properties
     */
    constructor(options?: LinkVisual.Options);
    on<E extends keyof LinkVisual.EventMap>(type: E, callback: (eventType: E, sender: this, args: LinkVisual.EventMap[E]) => void): this;
    off<E extends keyof LinkVisual.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: LinkVisual.EventMap[E]) => void): this;
    notify<E extends keyof LinkVisual.EventMap>(type: E, source: LinkVisual, args?: LinkVisual.EventMap[E]): this;
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
     * @param ignored ignored parameter
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
     * @param value url for icon
     * @returns this
     */
    setUrl(value: string): this;
    /**
     * Gets url for icon
     */
    getUrl(): string;
    /**
     * Get link type
     * @returns a type of the link
     */
    getLinkType(): LinkType;
    /**
     * Sets link type
     * @param value desired link type
     * @returns this
     */
    setLinkType(value: LinkType): this;
    /**
     * Gets symbol size
     * @returns symbol width and height
     */
    getSymbolSize(): {
        width: number;
        height: number;
    };
    /**
     * Sets linking mode. This mode defines logic of the link as well as its appearance.
     * @param mode a new linking mode to set
     * @returns this
     */
    setLinkingMode(mode: LinkingMode): this;
    /**
     * Gets linking mode. This mode defines logic of the link as well as its appearance.
     * @returns current linking mode
     */
    getLinkingMode(): LinkingMode;
    /**
     * Gets tubing width, if set to Schematics/skin mode
     * @returns a tubing width
     */
    getTubingWidth(): number;
    /**
     * Ses tubing width for schematic/skin mode
     * @param value a width for the "tubing"
     * @returns this
     */
    setTubingWidth(value: number): this;
    /**
     * Gets current bounds
     * @returns current bounds
     */
    getBounds(): Rect;
    clone(): LinkVisual;
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
     */
    disconnectFrom(linkSide: LinkSide): void;
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
     * Moves link handle to the given device coordinates
     * @param linkSide a link side to move (begin or end)
     * @param modelPoint new position for the link handle in parent's model coordinates
     */
    moveLinkHandle(linkSide: LinkSide, modelPoint: Point): void;
    /**
     * Checks if the link visual can connect to a component at the given model point (in parent's coordinate system)
     * @param component a component to check if the link visual can connect to
     * @param modelPoint a point in model space
     * @param minDistance minimum distance in device units (pixels) for snapping
     * @returns model link point or <b>null</b> if can not connect
     */
    canConnect(component: Node, modelPoint: Point, minDistance: number): Point | null;
}
export declare namespace LinkVisual {
    /**
     * object containing parameters
     */
    type Options = Polyline.Options & ComponentOptions & {
        /**
         * default icon size
         */
        defaulticonsize?: Dimension;
        /**
         * link mode
         */
        linkingmode?: LinkingMode;
        /**
         * tubing width
         */
        tubingwidth?: number;
        /**
         * link type
         */
        linktype?: LinkType;
    };
    /**
     * object containing component options
     */
    type ComponentOptions = {
        /**
         * geometry node
         */
        geometry?: Node;
        /**
         * size of the visual
         */
        defaultsize?: Dimension;
        /**
         * string instance representing component name
         */
        prototypename?: string;
        /**
         * string instance representing component class
         */
        prototypeid?: string;
        /**
         * string instance representing component category
         */
        category?: string;
        /**
         * an array of search keywords
         */
        searchkeywords?: string[];
        /**
         * an array of linking points
         */
        linkpoints?: Point[];
        /**
         * outline (path) for the Visual
         */
        outline?: GraphicsPath;
        /**
         * url to an icon
         */
        url?: string;
    };
    type EventMap = AbstractNode.EventMap & {
        [Events.Connected]: {
            linkSide: LinkSide;
            visual: IComponent & Node;
            modelPoint: Point;
        };
        [Events.Disconnected]: {
            linkSide: LinkSide;
        };
    };
}
