import type { Dimension } from '@int/geotoolkit/util/Dimension';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { GraphicsPath } from '@int/geotoolkit/renderer/GraphicsPath';
import type { Point } from '@int/geotoolkit/util/Point';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
/**
 * Base interface for all visuals that can be placed into Diagram
 * @interface
 */
export declare abstract class IComponent {
    /**
     * Returns component class, string value
     */
    abstract getPrototypeId(): string;
    /**
     * The name of the component
     */
    abstract getPrototypeName(): string;
    /**
     * Drawing category. The default value is 'default'
     */
    abstract getCategory(): string;
    /**
     * Cue words for the component search. By default, the shape will not be searched
     */
    abstract getSearchKeywords(): string[];
    /**
     * Defines default visual size in UI units (pixels by default). Default value is (50, 50)
     */
    abstract getDefaultSize(): Dimension;
    /**
     * Defines default visual size in UI units (pixels by default). Default value is (50, 50)
     * @param dimension new default dimension
     * @returns this
     */
    abstract setDefaultSize(dimension: Dimension): this;
    /**
     * gets geometry for the drawing
     */
    abstract getGeometry(): Node;
    /**
     * gets outline for the drawing. This outline will be used as path with possible connection along.
     * By default, no outline will be used
     */
    abstract getOutline(): GraphicsPath;
    /**
     * Gets default link points in model space. If not specified, the 'outline' property will be used.
     * If 'ouline' is not set, then the shape becomes 'unconnectable'
     */
    abstract getLinkPoints(): Point[];
    /**
     * Sets link points. Link points must be defined in the shapes's model
     * space
     * @param points an array of model-space points
     * that represent possible connections
     */
    abstract setLinkPoints(points: Point[]): void;
    /**
     * Sets text and its options
     * @param textOptions text and/or its options
     * @returns this instance
     */
    abstract setText(textOptions: IComponent.Text): this;
    /**
     * @param url
     * @returns this
     */
    abstract setUrl(url: string): this;
    /**
     * Gets URL for an icon
     */
    abstract getUrl(): string;
    /** */
    abstract getDefaultIconSize(): Dimension;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace IComponent {
    /**
     * text and/or its options
     */
    type Text = {
        /**
         * text content
         */
        text?: string;
        /**
         * text style
         */
        style?: TextStyle;
    } | string;
}
