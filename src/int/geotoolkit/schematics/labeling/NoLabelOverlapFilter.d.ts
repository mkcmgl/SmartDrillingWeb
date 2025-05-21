import { ILabelsFilter } from '@int/geotoolkit/schematics/labeling/ILabelsFilter';
import type { LabelData } from '@int/geotoolkit/schematics/labeling/LabelData';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LabelShape } from '@int/geotoolkit/schematics/labeling/LabelShape';
/**
 * @deprecated since 4.0. Use {@link @int/geotoolkit/schematics/labeling/LabelsFilter~LabelsFilter} instead.
 */
export declare class NoLabelOverlapFilter implements ILabelsFilter {
    /**
     * @param [options]
     */
    constructor(options?: NoLabelOverlapFilter.Options);
    filterLabels(labels: LabelData[], context: RenderingContext, labelShape: LabelShape): LabelData[];
    reset(): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace NoLabelOverlapFilter {
    type Options = {
        /**
         * labels weight to specify which labels to show/hide.
         Labels weight can be based on a custom weight function (Labels with more weight are annotated).
         By default uses labels's text length as labels priority (longer label has higher priority).
         */
        weight?: labelWeight;
    };
    /**
     * Callback label weight
     */
    type labelWeight = (info: LabelData) => number;
}
