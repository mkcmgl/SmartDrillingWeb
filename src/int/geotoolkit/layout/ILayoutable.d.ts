/**
 * @module geotoolkit/layout/ILayoutable
 */
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Define an object which can be laid out.
 * @interface
 */
export declare abstract class ILayoutable {
    /**
     * Returns area, which object occupies
     * @returns return area, which object occupies
     */
    abstract getBounds(): Rect | null;
    /**
     * Set area, which object occupies
     * @param area an area to occupy
     * @returns this
     */
    abstract setBounds(area: Rect): this;
    /**
     * Return desired layout style
     */
    abstract getLayoutStyle(): LayoutStyle;
    /**
     * Return parent node
     */
    abstract getParent(): Node | null;
}
