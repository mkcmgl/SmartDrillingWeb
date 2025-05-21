import { Rect } from '@int/geotoolkit/util/Rect';
import { Iterator } from '@int/geotoolkit/util/iterator';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { ContainerLayout } from '@int/geotoolkit/layout/ContainerLayout';
/**
 * Defines possible directions for {@link @int/geotoolkit/layout/FlexboxLayout~FlexboxLayout}
 * @enum
 * @readonly
 */
export declare enum FlexDirection {
    /**
     * The flexible items are displayed horizontally, as a row
     */
    Row = "Row",
    /**
     * Same as row, but in reverse order
     */
    RowReverse = "RowReverse",
    /**
     * The flexible items are displayed vertically, as a column
     */
    Column = "Column",
    /**
     * Same as column, but in reverse order
     */
    ColumnReverse = "ColumnReverse"
}
/**
 * Defines possible wrap modes for {@link @int/geotoolkit/layout/FlexboxLayout~FlexboxLayout}
 * @enum
 * @readonly
 */
export declare enum FlexWrap {
    /**
     * Specifies that the flexible items will not wrap
     */
    NoWrap = "NoWrap",
    /**
     * Specifies that the flexible items will wrap if necessary
     */
    Wrap = "Wrap",
    /**
     * Specifies that the flexible items will wrap, if necessary, in reverse order
     */
    WrapReverse = "WrapReverse"
}
/**
 * Defines possible flex lines alignment for {@link @int/geotoolkit/layout/FlexboxLayout~FlexboxLayout}
 * @enum
 * @readonly
 */
export declare enum AlignContent {
    /**
     * Lines are packed toward the start of the flex container
     */
    FlexStart = "FlexStart",
    /**
     * Lines are packed toward the end of the flex container
     */
    FlexEnd = "FlexEnd",
    /**
     * Lines are packed toward the center of the flex container
     */
    Center = "Center",
    /**
     * Lines are evenly distributed in the flex container
     */
    SpaceBetween = "SpaceBetween",
    /**
     * Lines are evenly distributed in the flex container, with half-size spaces on either end
     */
    SpaceAround = "SpaceAround",
    /**
     * Lines are evenly distributed in the flex container, with equal space around them
     */
    SpaceEvenly = "SpaceEvenly",
    /**
     * Lines stretch to take up the remaining space
     */
    Stretch = "Stretch"
}
/**
 * Defines possible flex items alignment across the main axis for {@link @int/geotoolkit/layout/FlexboxLayout~FlexboxLayout}
 * @enum
 * @readonly
 */
export declare enum JustifyContent {
    /**
     * Items are positioned at the beginning of the container
     */
    FlexStart = "FlexStart",
    /**
     * Items are positioned at the end of the container
     */
    FlexEnd = "FlexEnd",
    /**
     * Items are positioned in the center of the container
     */
    Center = "Center",
    /**
     * Items will have space between them
     */
    SpaceBetween = "SpaceBetween",
    /**
     * Items will have space before, between, and after them
     */
    SpaceAround = "SpaceAround",
    /**
     * Items will have equal space around them
     */
    SpaceEvenly = "SpaceEvenly"
}
/**
 * Defines possible flex items alignment across the secondary axis for {@link @int/geotoolkit/layout/FlexboxLayout~FlexboxLayout}
 * @enum
 * @readonly
 */
export declare enum AlignItems {
    /**
     * Items are positioned at the beginning of the container
     */
    FlexStart = "FlexStart",
    /**
     * Items are positioned at the end of the container
     */
    FlexEnd = "FlexEnd",
    /**
     * Items are positioned at the center of the container
     */
    Center = "Center",
    /**
     * Items are stretched to fit the container
     */
    Stretch = "Stretch"
}
/**
 * The custom implementation of CSS Flexbox Layout module
 */
export declare class FlexboxLayout extends ContainerLayout {
    constructor(options?: FlexboxLayout.Options);
    protected copyConstructor(src: FlexboxLayout): this;
    clone(): FlexboxLayout;
    add(item: ILayoutable | ILayoutable[] | Iterator<ILayoutable>): this;
    insert(index: number, item: ILayoutable | ILayoutable[] | Iterator<ILayoutable>): this;
    remove(item: ILayoutable): this;
    clear(): this;
    getIterator(targets: ILayoutable[] | Iterator): Iterator<ILayoutable>;
    /**
     * Sets a mode that specifies the direction of the flexible items
     * @param direction the direction
     */
    setFlexDirection(direction: FlexDirection): this;
    /**
     * Gets a mode that specifies the direction of the flexible items
     * @returns direction
     */
    getFlexDirection(): FlexDirection;
    /**
     * Sets a mode that specifies whether the flexible items should wrap or not
     * @param wrap the wrap mode
     */
    setFlexWrap(wrap: FlexWrap): this;
    /**
     * Gets a mode that specifies whether the flexible items should wrap or not
     * @returns wrap mode
     */
    getFlexWrap(): FlexWrap;
    /**
     * Sets a mode that specifies the default alignment for items inside the flexible container
     * @param alignment the alignment
     */
    setAlignItems(alignment: AlignItems): this;
    /**
     * Gets a mode that specifies the default alignment for items inside the flexible container
     * @returns alignment
     */
    getAlignItems(): AlignItems;
    /**
     * Sets a mode that specifies the default alignment for flex lines inside the flexible container.
     * Modifies the behavior of the `FlexWrap` property.
     * @param alignment the alignment
     */
    setAlignContent(alignment: AlignContent): this;
    /**
     * Gets a mode that specifies the default alignment for flex lines inside the flexible container.
     * @returns alignment
     */
    getAlignContent(): AlignContent;
    /**
     * Sets a mode that aligns the flexible container's items when the items do not use all available space on the main-axis
     * @param alignment the alignment
     */
    setJustifyContent(alignment: JustifyContent): this;
    /**
     * Gets a mode that aligns the flexible container's items when the items do not use all available space on the main-axis
     * @returns alignment
     */
    getJustifyContent(): JustifyContent;
    layout(rect?: Rect, targets?: ILayoutable[] | Iterator<ILayoutable>): this;
    getPreferredSize(rect: Rect, targets?: ILayoutable[]): Rect;
    getProperties(): FlexboxLayout.OptionsOut;
    setProperties(properties?: FlexboxLayout.Options): this;
}
export declare namespace FlexboxLayout {
    /**
     * the properties object
     */
    type Options = {
        /**
         * the direction of the flexible items
         */
        flexdirection?: FlexDirection;
        /**
         * specifies whether the flexible items should wrap or not
         */
        flexwrap?: FlexWrap;
        /**
         * specifies the default alignment for flex items inside the flexible container
         */
        alignitems?: AlignItems;
        /**
         * specifies the default alignment for flex lines inside the flexible container
         */
        aligncontent?: AlignContent;
        /**
         * aligns the flexible container's items when the items do not use all available space on the main-axis
         */
        justifycontent?: JustifyContent;
        /**
         * array of items to be layout
         */
        layoutables?: ILayoutable[];
    };
    /**
     * the properties object
     */
    type OptionsOut = {
        /**
         * the direction of the flexible items
         */
        flexdirection: FlexDirection;
        /**
         * specifies whether the flexible items should wrap or not
         */
        flexwrap: FlexWrap;
        /**
         * specifies the default alignment for flex items inside the flexible container
         */
        alignitems: AlignItems;
        /**
         * specifies the default alignment for flex lines inside the flexible container
         */
        aligncontent: AlignContent;
        /**
         * aligns the flexible container's items when the items do not use all available space on the main-axis
         */
        justifycontent: JustifyContent;
        /**
         * array of items to be layout
         */
        layoutables?: ILayoutable[];
    };
}
