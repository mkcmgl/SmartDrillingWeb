import { Node } from '@int/geotoolkit/scene/Node';
import { RectangularShape } from '@int/geotoolkit/scene/shapes/RectangularShape';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * Content View
 */
export declare class ContentView extends RectangularShape {
    /**
     * @param [node] node or properties object
     * @param [exportLimits] bounds of the node
     * @param [viewLimits] viewlimits of the node
     * @param [previewMode] preview mode
     */
    constructor(node: CompositeNode | ContentView.Options, exportLimits?: Rect, viewLimits?: Rect, previewMode?: boolean);
    getViewPortTransformation(): Transformation | null;
    render(context: RenderingContext): void;
}
export declare namespace ContentView {
    /**
     * node or properties object
     */
    type Options = {
        /**
         * node
         */
        node?: Node;
        /**
         * bounds of the node
         */
        exportlimits?: Rect;
        /**
         * viewlimits of the node
         */
        viewlimits?: Rect;
        /**
         * preview mode
         */
        previewmode?: boolean;
    };
    /**
     * page info info
     */
    type PageInfo = {
        /**
         * current page
         */
        currentpage?: number;
        /**
         * pages count
         */
        numberpage?: number;
        /**
         * date
         */
        date?: Date;
        /**
         * title
         */
        title?: string;
    };
}
