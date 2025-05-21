import { Selection } from '@int/geotoolkit/controls/tools/Selection';
import type { Plot } from '@int/geotoolkit/plot/Plot';
import type { AbstractRubberTool } from '@int/geotoolkit/controls/tools/AbstractRubberTool';
/**
 * DOMSupport tool is created on a plot (unique), makes one-time selection and if necessarily fires {@link @int/geotoolkit/dom/Events~Events} (hover/leave/enter/click/etc.)
 */
export declare class DOMSupport extends Selection {
    constructor(options?: DOMSupport.Options);
}
export declare namespace DOMSupport {
    /**
     * options
     */
    type Options = AbstractRubberTool.Options & {
        /**
         * plot to connect with tool
         */
        plot: Plot;
    };
}
