import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { SizeConstraint } from '@int/geotoolkit/layout/SizeConstraint';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
/**
 * Defines properties for node layout.
 */
export declare class LayoutStyle extends SpaceStyle {
    /**
     * Create LayoutStyle
     * @param [layoutStyle] object which contains the following fields
     */
    constructor(layoutStyle?: LayoutStyle.Options | LayoutStyle);
    clone(): LayoutStyle;
    getStyle(): LayoutStyle.Options;
    setStyle(layoutStyle: LayoutStyle | LayoutStyle.Options, silent?: boolean): this;
    /**
     * return position type
     */
    getPosition(): string;
    /**
     * set position type
     *
     * @param position position type
     * @returns this
     */
    setPosition(position: string): this;
    /**
     * return float type
     */
    getFloat(): string;
    /**
     * set float type
     *
     * @param float float type
     * @returns this
     */
    setFloat(float: string): this;
    /**
     * return width position
     */
    getWidth(): number | string;
    /**
     * set width
     *
     * @param width position
     * @returns this
     */
    setWidth(width: number | string): this;
    /**
     * return height position
     */
    getHeight(): number | string;
    /**
     * set height
     *
     * @param height position
     * @returns this
     */
    setHeight(height: number | string): this;
    /**
     * return size
     */
    getSize(): number | string;
    /**
     * set size
     *
     * @param size size
     * @returns this
     */
    setSize(size: number | string): this;
    /**
     * set  size constraint
     *
     * @param constraint size constraint
     * @returns this
     */
    setSizeConstraint(constraint: SizeConstraint): this;
    /**
     * Return size constraint
     * @returns constraint size constraint
     */
    getSizeConstraint(): SizeConstraint;
    /**
     * sets minimum height
     * @param height height
     */
    setMinHeight(height: number | string): this;
    /**
     * Returns minimum height
     * @returns minimum height
     */
    getMinHeight(): number | string;
    /**
     * sets maximum height
     * @param height height
     */
    setMaxHeight(height: number | string): this;
    /**
     * Returns maximum height
     * @returns maximum height
     */
    getMaxHeight(): number | string;
    /**
     * sets minimum width
     * @param width width
     */
    setMinWidth(width: number | string): this;
    /**
     * Returns minimum width
     * @returns minimum width
     */
    getMinWidth(): number | string;
    /**
     * sets maximum width
     * @param width width
     */
    setMaxWidth(width: number | string): this;
    /**
     * Returns maximum width
     * @returns maximum width
     */
    getMaxWidth(): number | string;
    /**
     * Sets a number specifying how much the item will grow relative to the rest of the items inside the same container
     * @param flexGrow the value
     */
    setFlexGrow(flexGrow: number): this;
    /**
     * Returns a number specifying how much the item will grow relative to the rest of the items inside the same container. Default value is 0
     */
    getFlexGrow(): number;
    /**
     * Sets a number specifying how much the item will shrink relative to the rest of the items inside the same container.
     * @param flexGrow the value
     */
    setFlexShrink(flexGrow: number): this;
    /**
     * Returns a number specifying how much the item will shrink relative to the rest of the items inside the same container. Default value is 1
     */
    getFlexShrink(): number;
    equalsTo(style: LayoutStyle): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns of this object
     */
    getProperties(): LayoutStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: LayoutStyle.Options): this;
    /**
     * Create or get layout style from object
     *
     * @param [object] object can be in format of constructor {@link @int/geotoolkit/layout/LayoutStyle~LayoutStyle}
     * @returns layout style
     */
    static fromObject(object?: LayoutStyle.Options | LayoutStyle): LayoutStyle | null;
    /**
     * Merge layoutStyle object with existing instance
     * @param node node
     * @param layoutStyle instance of node property
     * @param object contains layout style
     * @param [merge] merge flag
     * @param [invalidateMethod] invalidate method
     * @param [silent] silent setting
     * @returns layoutStyle
     */
    static mergeFromObject(node: IStyleListener | null, layoutStyle: LayoutStyle, object: LayoutStyle | LayoutStyle.Options, merge?: boolean, invalidateMethod?: IStyleListener.AttributeCallback, silent?: boolean): LayoutStyle;
}
export declare namespace LayoutStyle {
    /**
     * properties type
     */
    type Options = SpaceStyle.Options & Type;
    /**
     * LayoutStyle properties
     */
    type OptionsOut = SpaceStyle.OptionsOut & Type;
    type Type = {
        /**
         * layout position
         */
        position?: string;
        /**
         * float position
         */
        float?: string;
        /**
         * width
         */
        width?: number | string;
        /**
         * height
         */
        height?: number | string;
        /**
         * layout size
         */
        size?: number | string;
        /**
         * layout constrains
         */
        constraint?: SizeConstraint;
        /**
         * minimum height
         */
        minheight?: number | string;
        /**
         * maximum height
         */
        maxheight?: number | string;
        /**
         * minimum width
         */
        minwidth?: number | string;
        /**
         * maximum width
         */
        maxwidth?: number | string;
        /**
         * number specifying how much the item will grow relative to the rest of the items inside the same container
         */
        flexgrow?: number;
        /**
         * number specifying how much the item will shrink relative to the rest of the items inside the same container
         */
        flexshrink?: number;
    };
}
