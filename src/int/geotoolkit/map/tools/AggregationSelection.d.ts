import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { Selection } from '@int/geotoolkit/controls/tools/Selection';
import type { AbstractRubberTool } from '@int/geotoolkit/controls/tools/AbstractRubberTool';
/**
 * Helper class for aggregation selection
 */
export declare class AggregationSelection extends Selection {
    /**
     * @param [options] used to display temporary shapes or tool options
     */
    constructor(options?: AbstractRubberTool.Options | CompositeNode);
    /**
     * Sets enabled
     * @param enabled true, if enabled, else false
     * @returns this
     */
    setEnabled(enabled: boolean): this;
}
