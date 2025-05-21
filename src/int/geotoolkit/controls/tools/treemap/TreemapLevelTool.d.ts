import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { Treemap } from '@int/geotoolkit/controls/shapes/Treemap';
/**
 * TreemapLevelTool handles visualization of data according to hierarchy.
 */
export declare class TreemapLevelTool extends AbstractTool {
    /**
     * @param options tool options
     */
    constructor(options?: TreemapLevelTool.Options);
}
export declare namespace TreemapLevelTool {
    /**
     * tool options
     */
    type Options = AbstractTool.Options & {
        /**
         * - manipulator layer
         */
        group?: CompositeNode;
        /**
         * chart shape
         */
        chart: Treemap;
        /**
         * callback to return information about current level and it's parent nodes.
         */
        callback?: Callback;
    };
    type Callback = (information: {
        list: string[];
        action: string;
    }) => void;
}
