import { Rect } from '@int/geotoolkit/util/Rect';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { ContainerLayout } from '@int/geotoolkit/layout/ContainerLayout';
/**
 * Enum of alignment
 * @enum
 * @readonly
 */
export declare enum Alignment {
    /**
     * Top
     */
    Top = "Top",
    /**
     * Bottom
     */
    Bottom = "Bottom",
    /**
     * Left
     */
    Left = "Left",
    /**
     * Right
     */
    Right = "Right",
    /**
     * Center
     */
    Center = "Center"
}
/**
 * Define an abstract class for box layout to line up child <code>ILayoutable</code> horizontally or vertically.
 *
 * Children can be added using methods: <code>add</code> or <code>insert</code>  or can be passed as parameter in method <code>layout</code>
 * If layout has any item added directly it ignores items passed to <code>layout</code> as parameter
 */
export declare abstract class BoxLayout extends ContainerLayout {
    /**
     * @param [dstRect] layout area or properties object
     */
    protected constructor(dstRect?: BoxLayout.Options | Rect);
    /**
     * Returns true if layout is in reverse order
     */
    getReverse(): boolean;
    /**
     * Set reverse order iteration flag
     * @param reverse reverse order flag
     * @returns this
     */
    setReverse(reverse: boolean): this;
    /**
     * Gets rectangular layout area
     *
     * @returns rectangular layout area ("undefined" by default)
     */
    getRect(): Rect;
    /**
     * Sets rectangular layout area
     *
     * @param dstRect rectangular layout area
     * @returns this
     */
    setRect(dstRect: Rect): this;
    add(node: ILayoutable | ILayoutable[] | Iterator<ILayoutable>): this;
    insert(index: number, node: ILayoutable | ILayoutable[] | Iterator<ILayoutable>): this;
    remove(node: ILayoutable): this;
    clear(): this;
    getIterator(targets?: ILayoutable[] | Iterator<ILayoutable>): Iterator<ILayoutable>;
    getProperties(): BoxLayout.Options;
    setProperties(properties?: BoxLayout.Options): this;
}
export declare namespace BoxLayout {
    /**
     * layout area or properties object
     */
    type Options = {
        /**
         * bounds of the layout
         */
        rect?: Rect;
        /**
         * reverse flag
         */
        reverse?: boolean;
        /**
         * layoutable elements
         */
        layoutables?: ILayoutable[];
    };
}
