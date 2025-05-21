import { Group } from '@int/geotoolkit/scene/Group';
import { IComponent } from '@int/geotoolkit/flowcharts/shapes/IComponent';
import { Point } from '@int/geotoolkit/util/Point';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import type { StateChanges } from '@int/geotoolkit/scene/Node';
import { Node } from '@int/geotoolkit/scene/Node';
import type { GraphicsPath } from '@int/geotoolkit/renderer/GraphicsPath';
import type { LinkVisual } from '@int/geotoolkit/flowcharts/shapes/connectors/LinkVisual';
/**
 * A visual that can be inserted into the DiagramWidget. Base class for holding visuals used in the Diagram
 */
export declare class DiagramVisual extends Group implements IComponent {
    /**
     * @param [options] visual options
     */
    constructor(options?: DiagramVisual.Options);
    on<E extends keyof DiagramVisual.EventMap>(type: E, callback: (eventType: E, sender: this, args: DiagramVisual.EventMap[E]) => void): this;
    off<E extends keyof DiagramVisual.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DiagramVisual.EventMap[E]) => void): this;
    notify<E extends keyof DiagramVisual.EventMap>(type: E, source: DiagramVisual, args?: DiagramVisual.EventMap[E]): this;
    /**
     * Creates a copy from the given source
     * @param src source object to copy from
     */
    copyConstructor(src: DiagramVisual): this;
    /**
     * Mark this instance to be updated.
     * @param [regions] optional array to return invalid rectangles
     * @param [changes] optional parameter to specify a reason of changes
     * @returns this
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
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
     * @returns string instance representing component category
     */
    getCategory(): string;
    /**
     * Gets an array of keywords for better search
     * @returns an array of search keywords
     */
    getSearchKeywords(): string[];
    /**
     * Sets default size of the visual
     * @param dimension new default dimension
     * @returns this
     */
    setDefaultSize(dimension: Dimension): this;
    /**
     * Gets default size of the visual
     */
    getDefaultSize(): Dimension;
    /**
     * Gets geometry for the current link visual
     */
    getGeometry(): Node;
    /**
     * Sets link points. Link points must be defined in the shapes's model
     * space
     * @param points an array of model-space points
     * that represent possible connections
     * @returns this
     */
    setLinkPoints(points: Point[]): this;
    /**
     * Returns an array of link points: begin and end
     * @returns an array of linking points
     */
    getLinkPoints(): Point[];
    /**
     * Gets outline (path) for the Visual
     */
    getOutline(): GraphicsPath;
    /**
     * Gets the default icon size for UI representation
     * @deprecated since 2022 (v3.4)
     */
    getDefaultIconSize(): Dimension;
    /**
     * Sets url for icon
     * @param value url to an icon
     * @returns this
     */
    setUrl(value: string): this;
    /**
     * Gets url for icon
     */
    getUrl(): string;
    /**
     * Sets text and its options
     * @param textOptions text and/or its options
     * @returns this
     */
    setText(textOptions: IComponent.Text): this;
    /**
     * Gets previously set text to the visual
     * @returns [props] object containing text and its style
     */
    getText(): {
        text?: string;
        style?: TextStyle;
    };
    /**
     * Sets properties
     * @param properties visual properties
     */
    setProperties(properties?: DiagramVisual.Options): this;
    /**
     * Gets properties
     * @returns properties
     */
    getProperties(): DiagramVisual.OptionsOut;
}
export declare namespace DiagramVisual {
    /**
     * visual options
     */
    type Options = Group.Options & LinkVisual.ComponentOptions & {
        /**
         * geometry node or JSON with node properties
         */
        geometry?: Node | Node.Options;
        /**
         * text shape properties
         */
        text?: IComponent.Text;
    };
    /**
     * properties
     */
    type OptionsOut = Group.OptionsOut & {
        /**
         * JSON with node properties
         */
        geometry?: Node.OptionsOut;
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
         * size of the visual
         */
        defaultsize?: Dimension;
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
         * text shape properties
         */
        text?: {
            /**
             * text
             */
            text?: string;
            /**
             * text style
             */
            style?: TextStyle;
        };
        /**
         * url to an icon
         */
        url?: string;
    };
    type EventMap = Group.EventMap & {
        'StateUpdated'?: void | Rect;
    };
}
