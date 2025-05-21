/**
 * @module geotoolkit/layout/AutoWrapLayout
 */
import { Layout } from '@int/geotoolkit/layout/Layout';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { Legend } from '@int/geotoolkit/controls/shapes/Legend';
export declare class AutoWrapLayout extends Layout {
    constructor(layoutableNodes?: Legend[] | Legend);
    /**
     * Set layoutable nodes
     * @param nodes The nodes to layout when layout is called
     * @returns this
     */
    setLayoutableNodes(nodes: Legend | Legend[]): this;
    /**
     * Get layoutable nodes
     * @returns The nodes which get layout when layout is called
     */
    getLayoutableNodes(): Legend[];
    layout(layoutRect?: Rect, targets?: ILayoutable[] | Iterator<ILayoutable>): this;
}
